import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

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

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

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
                  123 Industrial Avenue, Business District, City 12345
                </p>
              </div>
              <div className="flex items-start group">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-red-500 mr-3 mt-1 group-hover:text-yellow-500 transition-colors duration-300"
                />
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  +1 (555) 123-4567
                </p>
              </div>
              <div className="flex items-start group">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-red-500 mr-3 mt-1 group-hover:text-yellow-500 transition-colors duration-300"
                />
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  info@olympicgroup.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map and Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-center mt-16 text-center lg:text-left">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:shadow-2xl">
            <iframe
              title="Google Map"
              className="w-full h-56 border-2 border-gray-800"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.5571624495055!2d90.42035979999997!3d23.727503099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9b0faef7c85%3A0x2aba50dabe58a5c!2sAmin%20Court!5e0!3m2!1sen!2sbd!4v1741845985605!5m2!1sen!2sbd"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          <div className="mt-6 lg:mt-0 lg:ml-12 w-full lg:w-1/3">
            <h3 className="text-lg font-bold text-white mb-6 border-b border-red-600 pb-2 inline-block">
              Subscribe to Newsletter
            </h3>
            <div className="relative">
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full p-4 rounded-full bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 pl-6"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 h-full px-6 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full hover:from-red-500 hover:to-red-600 transition-all duration-300 flex items-center"
                >
                  <span className="hidden md:inline-block mr-2">Subscribe</span>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-yellow-400"
                  />
                </button>
              </form>
              {subscribed && (
                <div className="absolute -bottom-8 left-0 right-0 text-center text-green-400 mt-2 animate-pulse">
                  Thank you for subscribing!
                </div>
              )}
            </div>
            <p className="text-gray-500 text-sm mt-4">
              Get updates on new products, special offers and company news.
            </p>
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
