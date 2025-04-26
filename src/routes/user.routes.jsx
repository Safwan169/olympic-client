// src/routes/user.routes.jsx
import React from "react";
import Home from "../pages/Home/Home";
import LoginPage from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import LeadershipPage from "../pages/Company/LeaderShip/LeaderShipPage";
import FacilitiesPage from "../pages/Company/Facilities/FacilitiesPage";
import SalesAndDistribution from "../pages/Company/AboutUs/components/SalesAndDistribution";
import PromotionsPage from "../pages/brands/PromotionsPage";
import Exports from "../pages/Exports/Exports";
import CorporateGovernance from "../pages/Investors/CorporateGovernance";
import StrategyAndInnovation from "../pages/Investors/StrategyAndInnovation";
import ShareStructure from "../pages/Investors/ShareStructure";
import FinancialAnnualReport from "../pages/Investors/FinancialAnnualReport";
import UnclaimedDividends from "../pages/Investors/UnclaimedDividends";
import PressReleases from "../pages/NewsAndMedia/PressRealeases";
import Creatives from "../pages/NewsAndMedia/Creatives";
import Articles from "../pages/NewsAndMedia/Articles";
import Careers from "../pages/NewsAndMedia/Careers";
import ContactPage from "../pages/Contact/Contact";
import MissionVision from "../pages/Company/MissionVision/MissionVision";
import Awards from "../pages/Company/Awards/Awards";
import Quality from "../pages/Company/Quality/Quality";
import CSR from "../pages/Company/CSR/CSR";
import DomesticProducts from "../pages/Products/DomesticProducts";
import ExportProducts from "../pages/Products/ExportProducts";
import PSIMI from "../pages/Investors/PSIMI";
import ExploreOpportunities from "../pages/Career/ExploreOpportunities";
import ProductCategories from "../pages/Products/Products";
import SpecificPage from "../pages/Products/SpecificCategoryPage";
import ProductDetail from "../pages/Products/DetailsPage";
import HistoryAndMilestone from "../pages/Company/AboutUs/HistoryAndMilestone";

const userRoutes = [
  {
    index: true,
    path: "/",
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

  // ABOUT US Section
  {
    path: "/about-us/history",
    element: <HistoryAndMilestone />,
  },
  {
    path: "/about-us/mission-vision",
    element: <MissionVision />,
  },
  {
    path: "/about-us/leadership",
    element: <LeadershipPage />,
  },
  {
    path: "/about-us/awards",
    element: <Awards />,
  },
  {
    path: "/about-us/factories",
    element: <FacilitiesPage />,
  },
  {
    path: "/about-us/quality",
    element: <Quality />,
  },
  {
    path: "/about-us/csr",
    element: <CSR />,
  },
  {
    path: "/about-us/sales-distribution",
    element: <SalesAndDistribution />,
  },

  {
    path:'products',
    element:<ProductCategories/>
  },

  // PRODUCTS Section
  {
    path: "/products/domestic",
    element: <DomesticProducts />,
  },
  {
    path: "/products/domestic/:name",
    element: <SpecificPage />,
  },
  {
    path: "/products/domestic/details/:category/:productId",
    element: <ProductDetail />,
  },
  {
    path: "/products/export",
    element: <ExportProducts />,
  },
  {
    path: "/products/promotions",
    element: <PromotionsPage />,
  },

  // EXPORT Section
  {
    path: "/export",
    element: <Exports />,
  },

  // INVESTORS Section
  {
    path: "/investors/corporate-governance",
    element: <CorporateGovernance />,
  },
  {
    path: "/investors/strategy",
    element: <StrategyAndInnovation />,
  },
  {
    path: "/investors/share",
    element: <ShareStructure />,
  },
  {
    path: "/investors/financials",
    element: <FinancialAnnualReport />,
  },
  {
    path: "/investors/unclaimed-dividends",
    element: <UnclaimedDividends />,
  },
  {
    path: "/investors/psi-mi",
    element: <PSIMI />,
  },

  // MEDIA Section
  {
    path: "/media/press-release",
    element: <PressReleases />,
  },
  {
    path: "/media/creatives",
    element: <Creatives />,
  },
  {
    path: "/media/articles",
    element: <Articles />,
  },

  // CAREER Section
  {
    path: "/career",
    element: <Careers />,
  },

  // CONTACT Section
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/career/explore-opportunities",
    element: <ExploreOpportunities />,
  },
];

export default userRoutes;
