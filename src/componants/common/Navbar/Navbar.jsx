/* eslint-disable no-unused-vars */
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

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
      id: "products",
      label: "PRODUCTS",
      hasDropdown: true,
      dropdownItems: [
        { id: "domestic", label: "DOMESTIC", to: "/domestic" },
        {
          id: "export ",
          label: "EXPORT ",
          to: "/export",
        },
      ],
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

  const isParentActive = (dropdownItems) => {
    return dropdownItems?.some((item) => location.pathname.startsWith(item.to));
  };

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
        setDropdownState({});
        setIsMobileMenuOpen(false);
        setSearchActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    forceUpdate();
  };

  const toggleSearch = () => {
    setSearchActive(!searchActive);
    if (!searchActive) {
      setTimeout(() => {
        searchInputRef.current?.focus();
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
    <div>
      <nav
        className={`navbar text-white ${
          scrolled ? "navbar-solid" : "navbar-transparent"
        }`}
        ref={menuRef}
      >
        {/* Main Navigation */}
        <div className="container mx-auto flex items-center justify-between px-4 py-2 hidden md:flex">
          <div className="flex items-center">
            <NavLink to="/">
              <img src="/olympic-logo.png" alt="Logo" className="w-40 mr-2" />
            </NavLink>
          </div>
          <div className="flex items-center space-x-6">
            {navigationItems.map((item) => (
              <div
                key={item.id}
                className="relative group"
                onMouseEnter={() =>
                  item.hasDropdown && handleDropdownHover(item.id)
                }
                onMouseLeave={() =>
                  item.hasDropdown && handleDropdownLeave(item.id)
                }
              >
                {item.hasDropdown ? (
                  <>
                    <button
                      className={`flex items-center font-semibold ${
                        isParentActive(item.dropdownItems)
                          ? "text-yellow-600"
                          : "text-white hover:text-yellow-600"
                      }`}
                    >
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
                                      ? "bg-gray-100 text-yellow-600 font-medium"
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
                        isActive ? "text-yellow-200" : "text-white"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}

            {/* Search */}
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

        {/* Mobile Navigation (unchanged) */}
        {/* You can repeat the same isParentActive logic there if needed */}
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
