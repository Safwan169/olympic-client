/* eslint-disable no-unused-vars */
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  // Updated Navigation data structure with new menu items
  const navigationItems = [
    { id: "home", label: "HOME", to: "/", hasDropdown: false },
    {
      id: "company",
      label: "COMPANY",
      hasDropdown: true,
      dropdownItems: [
        { id: "about-us", label: "About Us", to: "/company/about-us" },
        { id: "leadership", label: "Leadership", to: "/company/leadership" },
        { id: "facilities", label: "Facilities", to: "/company/facilities" },
        {
          id: "sales-distribution",
          label: "Sales & Distribution",
          to: "/company/sales-distribution",
        },
      ],
    },
    {
      id: "brands",
      label: "BRANDS",
      hasDropdown: true,
      dropdownItems: [{ id: "brand1", label: "Brand 1", to: "/brands/brand1" }],
    },
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
          id: "strategy-innovation",
          label: "Strategy & Innovation",
          to: "/investors/strategy-innovation",
        },
        {
          id: "share-structure",
          label: "Share Structure",
          to: "/investors/share-structure",
        },
        {
          id: "financials-reports",
          label: "Financials & Annual Reports",
          to: "/investors/financials-reports",
        },
        {
          id: "unclaimed-dividend",
          label: "List of Unclaimed Dividend",
          to: "/investors/unclaimed-dividend",
        },
      ],
    },
    {
      id: "sustainability",
      label: "SUSTAINABILITY",
      hasDropdown: true,
      dropdownItems: [
        { id: "overview", label: "Overview", to: "/sustainability/overview" },
        {
          id: "activities",
          label: "Activities",
          to: "/sustainability/activities",
        },
        {
          id: "full-reports",
          label: "Full Reports",
          to: "/sustainability/full-reports",
        },
      ],
    },
    { id: "exports", label: "EXPORTS", to: "/exports", hasDropdown: false },
    {
      id: "news-media",
      label: "NEWS & MEDIA",
      hasDropdown: true,
      dropdownItems: [
        {
          id: "press-release",
          label: "Press Release / PSI / MI",
          to: "/news-media/press-release",
        },
        { id: "career", label: "Career", to: "/news-media/career" },
        { id: "creatives", label: "Creatives", to: "/news-media/creatives" },
      ],
    },
    { id: "contact", label: "CONTACT", to: "/contact", hasDropdown: false },
  ];

  // Mobile navigation structure with the same items for consistency
  const mobileNavigationItems = [
    { id: "home", label: "Home", to: "/", hasDropdown: false },
    {
      id: "company",
      label: "Company",
      hasDropdown: true,
      dropdownItems: [
        { id: "about-us", label: "About Us", to: "/company/about-us" },
        { id: "leadership", label: "Leadership", to: "/company/leadership" },
        { id: "facilities", label: "Facilities", to: "/company/facilities" },
        {
          id: "sales-distribution",
          label: "Sales & Distribution",
          to: "/company/sales-distribution",
        },
      ],
    },
    {
      id: "brands",
      label: "Brands",
      hasDropdown: true,
      dropdownItems: [
        { id: "brand1", label: "Brand 1", to: "/brands/brand1" },
        { id: "brand2", label: "Brand 2", to: "/brands/brand2" },
        { id: "brand3", label: "Brand 3", to: "/brands/brand3" },
      ],
    },
    {
      id: "investors",
      label: "Investors",
      hasDropdown: true,
      dropdownItems: [
        {
          id: "corporate-governance",
          label: "Corporate Governance",
          to: "/investors/corporate-governance",
        },
        {
          id: "strategy-innovation",
          label: "Strategy & Innovation",
          to: "/investors/strategy-innovation",
        },
        {
          id: "share-structure",
          label: "Share Structure",
          to: "/investors/share-structure",
        },
        {
          id: "financials-reports",
          label: "Financials & Annual Reports",
          to: "/investors/financials-reports",
        },
        {
          id: "unclaimed-dividend",
          label: "List of Unclaimed Dividend",
          to: "/investors/unclaimed-dividend",
        },
      ],
    },
    {
      id: "sustainability",
      label: "Sustainability",
      hasDropdown: true,
      dropdownItems: [
        { id: "overview", label: "Overview", to: "/sustainability/overview" },
        {
          id: "activities",
          label: "Activities",
          to: "/sustainability/activities",
        },
        {
          id: "full-reports",
          label: "Full Reports",
          to: "/sustainability/full-reports",
        },
      ],
    },
    { id: "exports", label: "Exports", to: "/exports", hasDropdown: false },
    {
      id: "news-media",
      label: "News & Media",
      hasDropdown: true,
      dropdownItems: [
        {
          id: "press-release",
          label: "Press Release / PSI / MI",
          to: "/news-media/press-release",
        },
        { id: "career", label: "Career", to: "/news-media/career" },
        { id: "creatives", label: "Creatives", to: "/news-media/creatives" },
      ],
    },
    { id: "contact", label: "Contact", to: "/contact", hasDropdown: false },
  ];

  // State for tracking dropdown visibility
  const [dropdownState, setDropdownState] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const menuRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const searchInputRef = useRef(null);

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        // Reset all dropdowns
        setDropdownState({});
        setIsMobileMenuOpen(false);
        setSearchActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDropdownHover = (itemId) => {
    setDropdownState((prev) => ({ ...prev, [itemId]: true }));
  };

  const handleDropdownLeave = (itemId) => {
    setDropdownState((prev) => ({ ...prev, [itemId]: false }));
  };

  const toggleMobileDropdown = (itemId) => {
    setDropdownState((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    forceUpdate();
  };

  const toggleSearch = () => {
    setSearchActive(!searchActive);
    if (!searchActive) {
      setTimeout(() => {
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }, 100);
    }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -15, pointerEvents: "none" },
    visible: {
      opacity: 1,
      y: 0,
      pointerEvents: "auto",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        duration: 0.3,
        staggerChildren: 0.05,
      },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  const dropdownItemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="">
      <nav
        className={`navbar text-white ${
          scrolled ? "navbar-solid " : "navbar-transparent"
        }`}
        ref={menuRef}
      >
        {/* Mobile Menu (Conditionally Rendered) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="mobile-menu absolute top-full left-0 w-full bg-white text-gray-800 shadow-xl rounded-b-xl py-4 px-6 z-30"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              ref={mobileMenuRef}
            >
              {mobileNavigationItems.map((item) => (
                <div key={item.id} className="mobile-nav-item">
                  {item.hasDropdown ? (
                    <>
                      <button
                        className="block w-full text-left py-2 hover:bg-gray-100"
                        onClick={() => toggleMobileDropdown(item.id)}
                      >
                        {item.label}
                      </button>
                      <AnimatePresence>
                        {dropdownState[item.id] && (
                          <motion.div
                            className="pl-4"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.15 }}
                          >
                            {item.dropdownItems.map((dropdownItem) => (
                              <NavLink
                                key={dropdownItem.id}
                                to={dropdownItem.to}
                                className={({ isActive }) =>
                                  `block py-2 hover:bg-gray-100 ${
                                    isActive ? "text-blue-600 font-medium" : ""
                                  }`
                                }
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {dropdownItem.label}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `block py-2 hover:bg-gray-100 ${
                          isActive ? "text-blue-600 font-medium" : ""
                        }`
                      }
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Navigation */}
        <div className="container mx-auto flex items-center justify-between px-4 py-2 hidden md:flex">
          {/* Logo */}
          <div className="flex items-center">
            <motion.div
              className="flex items-center cursor-pointer mr-8"
              transition={{ type: "spring", stiffness: 320, damping: 12 }}
              style={{ mixBlendMode: "lighten" }}
            >
              <NavLink to="/">
                <img src="/olympic-logo.png" alt="Logo" className="w-40 mr-2" />
              </NavLink>
            </motion.div>
          </div>

          {/* Navigation Items - Mapped from configuration */}
          <div className="flex items-center space-x-6">
            {navigationItems.map((item) => (
              <div
                key={item.id}
                className={`relative group ${item.hasDropdown ? "" : ""}`}
                onMouseEnter={() =>
                  item.hasDropdown && handleDropdownHover(item.id)
                }
                onMouseLeave={() =>
                  item.hasDropdown && handleDropdownLeave(item.id)
                }
              >
                {item.hasDropdown ? (
                  <>
                    <button className="flex text-white items-center hover:text-yellow-200 font-semibold">
                      {item.label}
                    </button>
                    <AnimatePresence>
                      {dropdownState[item.id] && (
                        <motion.div
                          className="absolute top-full right-0 bg-white text-gray-800 shadow-xl rounded mt-2 w-48 z-20"
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          {item.dropdownItems.map((dropdownItem) => (
                            <motion.div
                              key={dropdownItem.id}
                              variants={dropdownItemVariants}
                            >
                              <NavLink
                                to={dropdownItem.to}
                                className={({ isActive }) =>
                                  `block px-4 py-3 text-sm hover:bg-gray-100 ${
                                    isActive
                                      ? "bg-gray-100 text-blue-600 font-medium"
                                      : ""
                                  }`
                                }
                                onClick={() => setDropdownState({})}
                              >
                                {dropdownItem.label}
                              </NavLink>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `hover:text-yellow-200 font-semibold ${
                        isActive ? "text-yellow-200" : ""
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}

            {/* Search Icon */}
            <div className="search-container">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search..."
                className={`search-input focus:outline-none ${
                  searchActive ? "active" : ""
                }`}
              />
              <button
                onClick={toggleSearch}
                className="text-white p-2 focus:outline-none"
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex justify-between items-center px-4 py-2 md:hidden">
          <div className="flex items-center">
            <NavLink to="/">
              <img src="/olympic-logo.png" alt="Logo" className="w-32" />
            </NavLink>
          </div>
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <FontAwesomeIcon
              icon={faBars}
              className="bg-red-700 px-2 py-1"
              size="lg"
            />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
