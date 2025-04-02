import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import adminRoutes from "./admin.routes";
import userRoutes from "./user.routes";
import React from "react";
import NotFoundPage from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      ...userRoutes, // User-related routes
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
  ...adminRoutes, // Admin-related routes
]);

export default router;
