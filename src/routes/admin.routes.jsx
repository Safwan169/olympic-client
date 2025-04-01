import React from "react";

// Pages
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import JobPostManagement from "../pages/admin/JobPostManagement";
import Milestone from "../pages/admin/Milestone/Milestone";

// Route protection utility
import ProtectedRoute from "../utilities/ProtectedRoute";
import ActivityManagement from "../pages/admin/ActivityManagement";
import AdminDashboard from "../pages/admin/AdminDashboard";
import LeadershipManagementIndex from "../pages/admin/News/LeaderShipManagement";
import BannerManagementIndex from "../pages/admin/BannerManagement";
import ContactManagementIndex from "../pages/admin/ContactManagement";
import ProductManagementIndex from "../pages/admin/ProductManagement";
import AchievementManagement from "../pages/admin/Achievement/AchievementManagement";
import NewsManagement from "../pages/admin/News/NewsManagement";

const adminRoutes = [
  {
    path: "/admin",
    element: (
      <ProtectedRoute allowedRoles={["admin"]}>
        <AdminDashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "achievement",
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <AchievementManagement />
          </ProtectedRoute>
        ),
      },
      {
        path: "product",
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <ProductManagementIndex />
          </ProtectedRoute>
        ),
      },
      {
        path: "milestone",
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <Milestone />
          </ProtectedRoute>
        ),
      },
      {
        path: "news",
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <NewsManagement />
          </ProtectedRoute>
        ),
      },
      {
        path: "job-post",
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <JobPostManagement />
          </ProtectedRoute>
        ),
      },
      {
        path: "activity",
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <ActivityManagement />
          </ProtectedRoute>
        ),
      },
      {
        path: "banner",
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <BannerManagementIndex />
          </ProtectedRoute>
        ),
      },
      {
        path: "news",
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <NewsManagement />
          </ProtectedRoute>
        ),
      },
      {
        path: "contact",
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <ContactManagementIndex />
          </ProtectedRoute>
        ),
      },
      // {
      //   path: "feedback",
      //   element: (
      //     <ProtectedRoute allowedRoles={["admin"]}>
      //       <Feedback />
      //     </ProtectedRoute>
      //   ),
      // },
      {
        path: "leadership",
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <LeadershipManagementIndex />
          </ProtectedRoute>
        ),
      },
    ],
  },
];

export default adminRoutes;
