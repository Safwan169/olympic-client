import { useEffect, useRef } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
import { currentToken, currentUser } from "../redux/features/auth/authSlice";
import { useAppSelector } from "../redux/hooks";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const user = useAppSelector(currentUser);
  const token = useAppSelector(currentToken);
  const location = useLocation();
  const toastShown = useRef(false); // Create a ref to track if a toast is shown

  useEffect(() => {
    if (!token && !toastShown.current) {
      toast.error("Authentication required", {
        description: "Please log in to access this page",
        duration: 4000,
      });
      toastShown.current = true; // Mark that the toast was shown
      return;
    }

    if (!allowedRoles.includes(user?.role)) {
      toast.warning("Access denied", {
        description: `You don't have permission to access this page`,
        duration: 4000,
      });
      toastShown.current = true; // Mark that the toast was shown
      return;
    }
  }, [token, user, allowedRoles, ]);

  // Logic for redirection remains the same
  if (!token) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  if (!allowedRoles.includes(user?.role)) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
