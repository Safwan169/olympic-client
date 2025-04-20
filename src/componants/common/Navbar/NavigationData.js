// navigationData.js - Separate file for navigation items data
export const navigationItems = [
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
    hasDropdown: true,
    dropdownItems: [
      { id: "domestic", label: "Domestic", to: "/products/domestic" },
      { id: "export", label: "Export", to: "/products/export" },
      { id: "promotions", label: "Promotions", to: "/products/promotions" },
    ],
  },
  { id: "export", label: "EXPORT", to: "/export", hasDropdown: false },
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

// Export additional utility functions if needed
export const getActiveParent = (pathname) => {
  for (const item of navigationItems) {
    if (item.hasDropdown) {
      for (const dropdownItem of item.dropdownItems) {
        if (pathname.startsWith(dropdownItem.to)) {
          return item.id;
        }
      }
    } else if (pathname === item.to) {
      return item.id;
    }
  }
  return null;
};

// Helper function to get dropdown items by parent ID
export const getDropdownItems = (parentId) => {
  const parent = navigationItems.find((item) => item.id === parentId);
  return parent?.hasDropdown ? parent.dropdownItems : [];
};

// Export default for easier imports
export default navigationItems;
