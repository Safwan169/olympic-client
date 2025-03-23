import AchievementManager from "../pages/admin/Achievement/Achievement";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import Milestone from "../pages/Admin/Milestone/Milestone";
import News from "../pages/Admin/News/News";
import ProtectedRoute from "../utilities/ProtectedRoute";
import React from 'react';

const adminRoutes = [
  {
    path: "/admin",
    element: <ProtectedRoute allowedRoles={["admin"]}><AdminDashboard /></ProtectedRoute>,
    children: [
      {
        path: "",
        element: <ProtectedRoute allowedRoles={["admin"]}><Dashboard /></ProtectedRoute>,
      },
      {
        path: "achievement",
        element: <ProtectedRoute allowedRoles={["admin"]}><Achievement /></ProtectedRoute>,
      },
      {
        path: "milestone",
        element: <ProtectedRoute allowedRoles={["admin"]}><Milestone /></ProtectedRoute>,
      },
      {
        path: "news",
        element: <ProtectedRoute allowedRoles={["admin"]}><News /></ProtectedRoute>,
      },
    ],
  },
];


export default adminRoutes;
