import AchievementManager from "../pages/admin/Achievement/Achievement";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import Milestone from "../pages/Admin/Milestone/Milestone";
import News from "../pages/Admin/News/News";

const adminRoutes = [
  {
    path: "/admin",
    element: <AdminDashboard />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "achievement",
        element: <AchievementManager   />,
      },
      {
        path: "milestone",
        element: <Milestone />,
      },
      {
        path: "news",
        element: <News />,
      },
    ],
  },
];

export default adminRoutes;
