import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: "/",
        element: <Home />,
      },
      {
        path: "/admin-dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
