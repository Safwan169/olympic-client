/* eslint-disable no-unused-vars */
import {
  faBars,
  faSearch,
  faShoppingBag,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  // Updated navigation items based on SRS document
  const leftNavigationItems = [
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
      to: '/products'
    },
    { id: "export", label: "EXPORT", to: "/export", hasDropdown: false },
  ];

  const rightNavigationItems = [
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

  const isParentActive = (dropdownItems) => {
    return dropdownItems?.some((item) => location.pathname.startsWith(item.to));
  };

  const [dropdownState, setDropdownState] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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

  const MobileDropdownItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="py-2 border-b border-gray-700">
        {item.hasDropdown ? (
          <>
            <button
              className="flex justify-between items-center w-full font-medium text-white hover:text-yellow-300 px-4"
              onClick={() => setIsOpen(!isOpen)}
            >
              {item.label}
              <span
                className={`transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                  }`}
              >
                ▼
              </span>
            </button>
            {isOpen && (
              <div className="ml-4 mt-2 space-y-2">
                {item.dropdownItems.map((dropdownItem) => (
                  <NavLink
                    key={dropdownItem.id}
                    to={dropdownItem.to}
                    className={({ isActive }) =>
                      `block py-2 px-4 ${isActive
                        ? "text-yellow-300"
                        : "text-gray-300 hover:text-yellow-300"
                      }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {dropdownItem.label}
                  </NavLink>
                ))}
              </div>
            )}
          </>
        ) : (
          <NavLink
            to={item.to}
            className={({ isActive }) =>
              `block px-4 py-2 ${isActive
                ? "text-yellow-300 font-medium"
                : "text-white hover:text-yellow-300"
              }`
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.label}
          </NavLink>
        )}
      </div>
    );
  };

  // Collect all navigation items for mobile view
  const allNavItems = [...leftNavigationItems, ...rightNavigationItems];

  return (
    <div>
      {/* Single Consistent Desktop Navigation */}
      <nav className="navbar bg-black text-white" ref={menuRef}>
        <div className="container mx-auto hidden lg:flex items-center justify-between px-4 py-3">
          {/* Left Menu Items */}
          <div className="flex items-center space-x-8">
            {leftNavigationItems.map((item) => (
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
                      className={`flex items-center font-semibold ${isParentActive(item.dropdownItems)
                          ? "text-yellow-300"
                          : "text-white hover:text-yellow-300"
                        }`}
                    >
                      {item.label}
                    </button>
                    <AnimatePresence>
                      {dropdownState[item.id] && (
                        <motion.div
                          className="absolute top-full left-0 bg-white text-gray-800 shadow-xl rounded mt-2 w-56 z-20"
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
                                  `block px-4 py-3 text-sm hover:bg-gray-100 ${isActive
                                    ? "bg-gray-100 text-red-700 font-medium"
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
                      `hover:text-yellow-300 font-semibold ${isActive ? "text-yellow-300" : "text-white"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          {/* Logo - Center */}
          <div className="flex items-center">
            <NavLink to="/">
              <img
                src="/olympic-logo.png"
                alt="Olympic Industries Logo"
                className="w-40"
              />
            </NavLink>
          </div>

          {/* Right Menu Items */}
          <div className="flex items-center space-x-8">
            {rightNavigationItems.map((item) => (
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
                      className={`flex items-center font-semibold ${isParentActive(item.dropdownItems)
                          ? "text-yellow-300"
                          : "text-white hover:text-yellow-300"
                        }`}
                    >
                      {item.label}
                    </button>
                    <AnimatePresence>
                      {dropdownState[item.id] && (
                        <motion.div
                          className="absolute top-full right-0 bg-white text-gray-800 shadow-xl rounded mt-2 w-56 z-20"
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
                                  `block px-4 py-3 text-sm hover:bg-gray-100 ${isActive
                                    ? "bg-gray-100 text-red-700 font-medium"
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
                      `hover:text-yellow-300 font-semibold ${isActive ? "text-yellow-300" : "text-white"
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
                className={`search-input focus:outline-none ${searchActive ? "active" : ""
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
        <div className="flex justify-between items-center px-4 py-3 lg:hidden">
          <div className="flex items-center">
            <NavLink to="/">
              <img
                src="/olympic-logo.png"
                alt="Olympic Industries Logo"
                className="w-32"
              />
            </NavLink>
          </div>

          {/* Action Buttons for Mobile */}
          <div className="flex items-center space-x-4">
            <button className="text-white focus:outline-none">
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <button className="text-white focus:outline-none">
              <FontAwesomeIcon icon={faShoppingBag} />
            </button>
            <button className="text-white focus:outline-none">
              <FontAwesomeIcon icon={faUtensils} />
            </button>
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
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            className="fixed inset-0 bg-black bg-opacity-95 z-50 overflow-y-auto lg:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="flex justify-between items-center px-4 py-4 border-b border-gray-800">
              <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
                <img
                  src="/olympic-logo.png"
                  alt="Olympic Industries Logo"
                  className="w-32"
                />
              </NavLink>
              <button
                className="text-white focus:outline-none"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-4">
              {allNavItems.map((item) => (
                <MobileDropdownItem key={item.id} item={item} />
              ))}
            </div>

            {/* Action buttons - Shop Now and Recipe */}
            <div className="mt-6 px-4 space-y-3">
              <NavLink
                to="/shop"
                className="flex items-center justify-center bg-red-700 text-white py-3 px-4 rounded font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faShoppingBag} className="mr-2" />
                SHOP NOW
              </NavLink>
              <NavLink
                to="/recipes"
                className="flex items-center justify-center bg-yellow-600 text-white py-3 px-4 rounded font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faUtensils} className="mr-2" />
                RECIPE
              </NavLink>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 flex justify-center space-x-4 pb-8">
              <a href="#" className="text-white hover:text-yellow-300">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-yellow-300">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-yellow-300">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-yellow-300">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action buttons - Shop Now and Recipe for desktop */}
      <div className="fixed top-24 right-6 z-40 flex flex-col space-y-3 hidden lg:flex">
        <NavLink
          to="/shop"
          className="bg-red-700 text-white p-3 rounded-full shadow-lg hover:bg-red-800 transition-colors"
        >
          <FontAwesomeIcon icon={faShoppingBag} size="lg" />
        </NavLink>
        <NavLink
          to="/recipes"
          className="bg-yellow-600 text-white p-3 rounded-full shadow-lg hover:bg-yellow-700 transition-colors"
        >
          <FontAwesomeIcon icon={faUtensils} size="lg" />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
