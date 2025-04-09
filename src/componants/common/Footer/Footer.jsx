import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronRight,
  faEnvelope,
  faFax,
  faLocationDot,
  faPhone,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const sitemapLinks = {
    // company: [
    //   { name: "About Us", url: "/about" },
    //   { name: "Our History", url: "/history" },
    //   { name: "Leadership Team", url: "/leadership" },
    //   { name: "Careers", url: "/careers" },
    //   { name: "News & Media", url: "/news" },
    // ],
    products: [
      { name: "Product Range", url: "/products" },
      { name: "New Arrivals", url: "/new-arrivals" },
      { name: "Best Sellers", url: "/best-sellers" },
      { name: "Promotions", url: "/promotions" },
      { name: "Where to Buy", url: "/locations" },
    ],
    support: [
      { name: "Contact Us", url: "/contact" },
      { name: "FAQs", url: "/faqs" },
      { name: "Technical Support", url: "/support" },
      { name: "Warranty Information", url: "/warranty" },
      { name: "Product Registration", url: "/register-product" },
    ],
  };

  const socialLinks = [
    {
      icon: faFacebook,
      url: "https://facebook.com/olympicgroup",
      name: "Facebook",
    },
    {
      icon: faTwitter,
      url: "https://twitter.com/olympicgroup",
      name: "Twitter",
    },
    {
      icon: faInstagram,
      url: "https://instagram.com/olympicgroup",
      name: "Instagram",
    },
    {
      icon: faLinkedin,
      url: "https://linkedin.com/company/olympicgroup",
      name: "LinkedIn",
    },
    {
      icon: faYoutube,
      url: "https://youtube.com/olympicgroup",
      name: "YouTube",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 py-16 relative overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-black opacity-50 bg-[url('/subtle-pattern.png')]"></div>

      {/* Red accent top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-red-600"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and social links */}
          <div className="transform transition duration-500 hover:translate-y-1">
            <img
              src="/olympic-logo.png"
              alt="Olympic Logo"
              className="w-44 mb-6"
            />
            <p className="text-sm text-gray-400 mb-6 font-light">
              Leading the industry with innovation and excellence since 1975.
            </p>
            <div className="flex space-x-5 mt-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-gray-500 hover:text-red-500 transform transition duration-300 hover:scale-125"
                >
                  <FontAwesomeIcon icon={link.icon} size="lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap links */}
          {Object.entries(sitemapLinks).map(([section, links], idx) => (
            <div
              key={idx}
              className="transform transition duration-500 hover:translate-y-1"
            >
              <h3 className="text-lg font-bold text-white mb-6 border-b border-red-600 pb-2 inline-block capitalize">
                {section}
              </h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li
                    key={index}
                    className="transition-all duration-300 hover:pl-2"
                  >
                    <NavLink
                      to={link.url}
                      className={({ isActive }) =>
                        `flex items-center ${
                          isActive ? "text-red-500" : "text-gray-400"
                        } hover:text-yellow-500`
                      }
                    >
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="text-red-500 mr-2 text-xs"
                      />
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Us */}
          <div className="transform transition duration-500 hover:translate-y-1">
            <h3 className="text-lg font-bold text-white mb-6 border-b border-red-600 pb-2 inline-block">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start group">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-red-500 mr-3 mt-1 group-hover:text-yellow-500 transition-colors duration-300"
                />
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Amin Court, 6th Floor
                  <br />
                  62-63 Motijheel C/A
                  <br />
                  Dhaka-1000, Bangladesh
                </p>
              </div>
              <div className="flex items-start group">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-red-500 mr-3 mt-1 group-hover:text-yellow-500 transition-colors duration-300"
                />
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  +88 09-606565228
                </p>
              </div>
              <div className="flex items-start group">
                <FontAwesomeIcon
                  icon={faFax}
                  className="text-red-500 mr-3 mt-1 group-hover:text-yellow-500 transition-colors duration-300"
                />
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  +88 02-223387485
                </p>
              </div>
              <div className="flex items-start group">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-red-500 mr-3 mt-1 group-hover:text-yellow-500 transition-colors duration-300"
                />
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  info@olympicbd.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map and Investors' Relations Section Side by Side */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="w-full overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7305.114330503113!2d90.42036000000002!3d23.727503!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85a9a41f945%3A0xbb8a4a4649ebd4b1!2sOlympic%20Industries%20Ltd.!5e0!3m2!1sen!2sbd!4v1744024414376!5m2!1sen!2sbd"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Investors' Relations Department */}
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 shadow-lg flex flex-col justify-center">
            <h3 className="text-lg font-bold text-white mb-6 border-b border-red-600 pb-2 inline-block">
              Investors' Relation Department
            </h3>
            <div className="space-y-6">
              <div className="flex items-start group">
                <FontAwesomeIcon
                  icon={faUserTie}
                  className="text-red-500 mr-3 mt-1 group-hover:text-yellow-500 transition-colors duration-300"
                />
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  <span className="text-gray-300">Contact Person:</span>
                  <br />
                  Mintu Kumar Das
                </p>
              </div>
              <div className="flex items-start group">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-red-500 mr-3 mt-1 group-hover:text-yellow-500 transition-colors duration-300"
                />
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  mintu.das@olympicbd.com
                </p>
              </div>
              <div className="flex items-start group">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-red-500 mr-3 mt-1 group-hover:text-yellow-500 transition-colors duration-300"
                />
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  +88 09-606565228 Ex-6154
                </p>
              </div>
              <div className="flex items-start group">
                <FontAwesomeIcon
                  icon={faFax}
                  className="text-red-500 mr-3 mt-1 group-hover:text-yellow-500 transition-colors duration-300"
                />
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  +88 02-223387485
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="mt-16 mb-8 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>

        {/* Copyright */}
        <div className="text-center py-4 text-sm flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500">
            &copy; {currentYear}{" "}
            <span className="text-red-500">Olympic Group</span>. All Rights
            Reserved.
          </div>
          <div className="mt-4 md:mt-0">
            <a
              href="/privacy"
              className="text-gray-500 hover:text-yellow-500 mx-2 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <span className="text-gray-700">|</span>
            <a
              href="/terms"
              className="text-gray-500 hover:text-yellow-500 mx-2 transition-colors duration-300"
            >
              Terms of Service
            </a>
            <span className="text-gray-700">|</span>
            <a
              href="/sitemap"
              className="text-gray-500 hover:text-yellow-500 mx-2 transition-colors duration-300"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
