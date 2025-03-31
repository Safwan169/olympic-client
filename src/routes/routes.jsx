import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import adminRoutes from "./admin.routes";
import userRoutes from "./user.routes";
import React from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      ...userRoutes, // User-related routes
    ],
  },
  ...adminRoutes, // Admin-related routes
]);

export default router;
