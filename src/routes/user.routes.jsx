// src/routes/user.routes.jsx
import Home from "../pages/Home/Home";
import LoginPage from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Activity from "../pages/Sustainability/Activity";
import React from "react";
import FullReport from "../pages/Sustainability/FullReport";
import Overview from "../pages/Sustainability/Overview";
import Careers from "../pages/NewsAndMedia/Careers";
import PressReleases from "../pages/NewsAndMedia/PressRealeases";
import Creatives from "../pages/NewsAndMedia/Creatives";
import Exports from "../pages/Exports/Exports";

const userRoutes = [
  {
    index: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  // sustainability
  {
    path: "/sustainability/activities",
    element: <Activity />,
  },
  {
    path: "/sustainability/full-reports",
    element: <FullReport />,
  },
  {
    path: "/sustainability/overview",
    element: <Overview />,
  },
  // news and media
  {
    path: "/news-media/career",
    element: <Careers />,
  },
  {
    path: "/news-media/creatives",
    element: <Creatives />,
  },
  {
    path: "/news-media/press-release",
    element: <PressReleases />,
  },
  // exports
  {
    path: "/exports",
    element: <Exports />,
  },
];

export default userRoutes;
