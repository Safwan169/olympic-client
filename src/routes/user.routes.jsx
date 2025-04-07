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
import ContactPage from "../pages/Contact/Contact";
import CorporateGovernance from "../pages/Investors/CorporateGovernance";
import StrategyAndInnovation from "../pages/Investors/StrategyAndInnovation";
import ShareStructure from "../pages/Investors/ShareStructure";
import FinancialAnnualReport from "../pages/Investors/FinancialAnnualReport";
import UnclaimedDividends from "../pages/Investors/UnclaimedDividends";
import AboutUs from "../pages/Company/AboutUs/AboutUs";

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
  // company
  // about us
  {
    path: "/company/about-us",
    element: <AboutUs />,
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
  {
    path: "/contact",
    element: <ContactPage />,
  },
  // investors
  {
    path: "/investors/corporate-governance",
    element: <CorporateGovernance />,
  },
  {
    path: "/investors/strategy-innovation",
    element: <StrategyAndInnovation />,
  },
  {
    path: "/investors/share-structure",
    element: <ShareStructure />,
  },
  {
    path: "/investors/financials-reports",
    element: <FinancialAnnualReport />,
  },
  {
    path: "/investors/unclaimed-dividend",
    element: <UnclaimedDividends />,
  },
];

export default userRoutes;
