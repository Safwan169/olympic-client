import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
import { currentToken, currentUser } from "../redux/features/auth/authSlice";
import { useAppSelector } from "../redux/hooks";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const user = useAppSelector(currentUser);
  const token = useAppSelector(currentToken);
  const location = useLocation();

  useEffect(() => {
    if (!token) {
      toast.error("Authentication required", {
        id: "auth-required", // 👈 ID to prevent duplicates
        description: "Please log in to access this page",
        duration: 2000,
      });
      return;
    }

    if (!allowedRoles.includes(user?.role)) {
      toast.warning("Access denied", {
        id: "access-denied", // 👈 different ID
        description: `You don't have permission to access this page`,
        duration: 2000,
      });
    }
  }, []);

  if (!token || !allowedRoles.includes(user?.role)) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
};

export default ProtectedRoute;
