// import { useAppSelector } from "../../redux/hooks";
// import { Navigate, useLocation } from "react-router-dom";
// import { currentToken } from "../../redux/features/auth/authSlice";
// import useCurrentUserInfo from "@/hoooks/useCurrentUserInfo";

// const ProtectedRoute = ({ children, allowedRoles }) => {
//   const token = localStorage.getItem("token");

//   const { role } = useCurrentUserInfo();
//   const location = useLocation();

//   if (!token) {
//     return <Navigate to="/login" state={{ from: location.pathname }} replace />;
//   }

//   if (!allowedRoles.includes(role)) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;
