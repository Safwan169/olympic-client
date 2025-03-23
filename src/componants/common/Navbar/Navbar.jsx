/* eslint-disable no-unused-vars */
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";

// const navbarStyles = `
//   .navbar {
//     transition: background-color 0.3s ease, box-shadow 0.3s ease;
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//     z-index: 1000;
//   }

//   .navbar-transparent {
//     background-color: transparent;
//     box-shadow: none;
//   }

//   .navbar-solid {
//     background-color: #ff0001;
//     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   }

//   .search-icon {
//     transition: color 0.3s ease, text-shadow 0.3s ease;
//   }

//   .search-container {
//     position: relative;
//     display: flex;
//     align-items: center;
//   }

//   .search-input {
//     width: 0;
//     padding: 0;
//     border: none;
//     background: transparent;
//     color: white;
//     transition: width 0.3s ease;
//   }

//   .search-input.active {
//     width: 150px;
//     padding-left: 8px;
//   }

//   .search-icon-glow {
//     color: white;
//     text-shadow: 0 0 10px rgba(255,255,0,0.8);
//   }

//   .search-icon-normal {
//     color: white;
//     text-shadow: none;
//   }
// `;

const Navbar = () => {
  // Navigation data structure for easy future updates
  const navigationItems = [
    { id: "us", label: "US", href: "#", hasDropdown: false },
    {
      id: "brands",
      label: "BRANDS",
      hasDropdown: true,
      dropdownItems: [
        { id: "brand1", label: "Brand 1", href: "#" },
        { id: "brand2", label: "Brand 2", href: "#" },
        { id: "brand3", label: "Brand 3", href: "#" },
      ],
    },
    {
      id: "golden-virtues",
      label: "GOLDEN VIRTUES",
      href: "#",
      hasDropdown: false,
    },
    { id: "legacy", label: "THE LEGACY", href: "#", hasDropdown: false },
    {
      id: "sustainability",
      label: "SUSTAINABILITY",
      href: "#",
      hasDropdown: false,
    },
    { id: "support", label: "SUPPORT", href: "#", hasDropdown: false },
  ];

  // Mobile navigation structure (can include different items if needed)
  const mobileNavigationItems = [
    { id: "home", label: "Home", href: "#", hasDropdown: false },
    {
      id: "about",
      label: "About",
      hasDropdown: true,
      dropdownItems: [
        { id: "inception", label: "Our Inception", href: "#" },
        { id: "mission", label: "Mission & Vision", href: "#" },
        { id: "achievements", label: "Achievements", href: "#" },
        { id: "values", label: "Corporate Values", href: "#" },
        { id: "sister", label: "Our Sister Concern", href: "#" },
        { id: "certification", label: "Certification", href: "#" },
      ],
    },
    {
      id: "sustainability-reports",
      label: "Sustainability Reports",
      href: "#",
      hasDropdown: false,
    },
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
      {/* <style>{navbarStyles}</style> */}

      <nav
        className={`navbar text-white  ${
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
                              <a
                                key={dropdownItem.id}
                                href={dropdownItem.href}
                                className="block py-2 hover:bg-gray-100"
                              >
                                {dropdownItem.label}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="block py-2 hover:bg-gray-100"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Navigation */}
        <div className="container mx-auto flex items-center justify-between px-4 py-2 hidden md:flex">
          {" "}
          {/* Hidden on smaller screens */}
          <div className="flex items-center">
            {/* Logo */}
            <motion.div
              className="flex items-center cursor-pointer mr-8"
              transition={{ type: "spring", stiffness: 320, damping: 12 }}
              style={{ mixBlendMode: "lighten" }}
            >
              <img src="/olympic-logo.png" alt="Logo" className="w-40 mr-2" />
            </motion.div>
          </div>
          {/* Navigation Items - Mapped from configuration */}
          <div className="flex items-center space-x-8">
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
                            <motion.a
                              key={dropdownItem.id}
                              variants={dropdownItemVariants}
                              href={dropdownItem.href}
                              className="block px-4 py-3 text-sm hover:bg-gray-100"
                            >
                              {dropdownItem.label}
                            </motion.a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="hover:text-yellow-200 font-semibold"
                  >
                    {item.label}
                  </a>
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
            <img src="/olympic-logo.png" alt="Logo" className="w-32" />
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
