import React from "react";

// Pages
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import Achievement from "../pages/Admin/Achievement/Achievement";
import Milestone from "../pages/Admin/Milestone/Milestone";
import News from "../pages/Admin/News/News";
import JobPostManagement from "../pages/admin/JobPostManagement";

// Route protection utility
import ProtectedRoute from "../utilities/ProtectedRoute";
import ActivityManagement from "../pages/admin/ActivityManagement";
import AdminDashboard from "../pages/admin/AdminDashboard";
import LeadershipManagementIndex from "../pages/admin/News/LeaderShipManagement";
import BannerManagementIndex from "../pages/admin/BannerManagement";
import NewsManagementIndex from "../pages/Admin/News/News";
import ContactManagementIndex from "../pages/admin/ContactManagement";
import ProductManagementIndex from "../pages/admin/ProductManagement";

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
            <Achievement />
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
            <News />
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
            <NewsManagementIndex />
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
