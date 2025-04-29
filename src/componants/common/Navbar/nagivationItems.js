// navigationItems.js - Contains all navigation structure for the Olympic Industries website

// Left navigation items (displayed on the left side of the navbar)
export const leftNavigationItems = [
  { id: "home", label: "HOME", to: "/", hasDropdown: false },
  {
    id: "about-us",
    label: "ABOUT US",
    hasDropdown: true,
    dropdownItems: [
      {
        id: "history",
        label: "History & Milestone",
        to: "/about-us/history",
      },
      {
        id: "mission-vision",
        label: "Mission/Vision/Values",
        to: "/about-us/mission-vision",
      },
      { id: "leadership", label: "Leadership", to: "/about-us/leadership" },
      { id: "awards", label: "Awards", to: "/about-us/awards" },
      { id: "factories", label: "Factories", to: "/about-us/factories" },
      {
        id: "quality",
        label: "Quality & Innovation",
        to: "/about-us/quality",
      },
      { id: "csr", label: "CSR & Sustainability", to: "/about-us/csr" },
      {
        id: "sales-distribution",
        label: "Sales & Distribution",
        to: "/about-us/sales-distribution",
      },
    ],
  },
  {
    id: "products",
    label: "PRODUCTS",
    to: "/products",
    hasDropdown: false,
  },
  { id: "export", label: "EXPORT", to: "/export", hasDropdown: false },
];

// Right navigation items (displayed on the right side of the navbar)
export const rightNavigationItems = [
  {
    id: "investors",
    label: "INVESTORS",
    hasDropdown: true,
    dropdownItems: [
      {
        id: "corporate-governance",
        label: "Corporate Governance",
        to: "/investors/corporate-governance",
      },
      {
        id: "strategy",
        label: "Strategy & Innovation",
        to: "/investors/strategy",
      },
      { id: "share", label: "Share Structure", to: "/investors/share" },
      {
        id: "financials",
        label: "Financials & Annual Reports",
        to: "/investors/financials",
      },
      {
        id: "unclaimed-dividends",
        label: "List of Unclaimed Dividends",
        to: "/investors/unclaimed-dividends",
      },
      { id: "psi-mi", label: "PSI/MI", to: "/investors/psi-mi" },
    ],
  },
  {
    id: "media",
    label: "MEDIA",
    hasDropdown: true,
    dropdownItems: [
      {
        id: "press-release",
        label: "Press Release",
        to: "/media/press-release",
      },
      { id: "tvc", label: "TVC/OVC/Creatives", to: "/media/creatives" },
      { id: "articles", label: "Articles/Blogs", to: "/media/articles" },
    ],
  },
  { id: "career", label: "CAREER", to: "/career", hasDropdown: false },
  { id: "contact", label: "CONTACT", to: "/contact", hasDropdown: false },
];

// Helper function to get all navigation items (useful for mobile menu)
export const getAllNavigationItems = () => {
  return [...leftNavigationItems, ...rightNavigationItems];
};

// Export default as object with all navigation item arrays
export default {
  leftNavigationItems,
  rightNavigationItems,
  getAllNavigationItems,
};
