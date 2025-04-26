// import {
//   faFacebook,
//   faInstagram,
//   faLinkedin,
//   faTwitter,
//   faYoutube,
// } from "@fortawesome/free-brands-svg-icons";
// import {
//   faChevronRight,
//   faEnvelope,
//   faFax,
//   faLocationDot,
//   faPhone,
//   faUserTie,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React from "react";
// import { NavLink } from "react-router-dom";

// const Footer = () => {
//   const sitemapLinks = {
//     // company: [
//     //   { name: "About Us", url: "/about" },
//     //   { name: "Our History", url: "/history" },
//     //   { name: "Leadership Team", url: "/leadership" },
//     //   { name: "Careers", url: "/careers" },
//     //   { name: "News & Media", url: "/news" },
//     // ],
//     products: [
//       { name: "Product Range", url: "/products" },
//       { name: "New Arrivals", url: "/new-arrivals" },
//       { name: "Best Sellers", url: "/best-sellers" },
//       { name: "Promotions", url: "/promotions" },
//       { name: "Where to Buy", url: "/locations" },
//     ],
//     support: [
//       { name: "Contact Us", url: "/contact" },
//       { name: "FAQs", url: "/faqs" },
//       { name: "Technical Support", url: "/support" },
//       { name: "Warranty Information", url: "/warranty" },
//       { name: "Product Registration", url: "/register-product" },
//     ],
//   };

//   const socialLinks = [
//     {
//       icon: faFacebook,
//       url: "https://facebook.com/olympicgroup",
//       name: "Facebook",
//     },
//     {
//       icon: faTwitter,
//       url: "https://twitter.com/olympicgroup",
//       name: "Twitter",
//     },
//     {
//       icon: faInstagram,
//       url: "https://instagram.com/olympicgroup",
//       name: "Instagram",
//     },
//     {
//       icon: faLinkedin,
//       url: "https://linkedin.com/company/olympicgroup",
//       name: "LinkedIn",
//     },
//     {
//       icon: faYoutube,
//       url: "https://youtube.com/olympicgroup",
//       name: "YouTube",
//     },
//   ];

//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-black text-gray-300 py-16 relative overflow-hidden">
//       {/* Background subtle pattern */}
//       <div className="absolute inset-0 bg-black opacity-50 bg-[url('/subtle-pattern.png')]"></div>

//       {/* Red accent top border */}
//       <div className="absolute top-0 left-0 right-0 h-1 bg-red-600"></div>

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
//           {/* Logo and social links */}
//           <div className="transform transition duration-500 hover:translate-y-1">
//             <img
//               src="/olympic-logo.png"
//               alt="Olympic Logo"
//               className="w-44 mb-6"
//             />
//             <p className="text-sm text-gray-400 mb-6 font-light">
//               Leading the industry with innovation and excellence since 1975.
//             </p>
//             <div className="flex space-x-5 mt-6">
//               {socialLinks.map((link, index) => (
//                 <a
//                   key={index}
//                   href={link.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={link.name}
//                   className="text-gray-500 hover:text-red-500 transform transition duration-300 hover:scale-125"
//                 >
//                   <FontAwesomeIcon icon={link.icon} size="lg" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Sitemap links */}
//           {Object.entries(sitemapLinks).map(([section, links], idx) => (
//             <div
//               key={idx}
//               className="transform transition duration-500 hover:translate-y-1"
//             >
//               <h3 className="text-lg font-bold text-white mb-6 border-b border-red-600 pb-2 inline-block capitalize">
//                 {section}
//               </h3>
//               <ul className="space-y-3">
//                 {links.map((link, index) => (
//                   <li
//                     key={index}
//                     className="transition-all duration-300 hover:pl-2"
//                   >
//                     <NavLink
//                       to={link.url}
//                       className={({ isActive }) =>
//                         `flex items-center ${
//                           isActive ? "text-red-500" : "text-gray-400"
//                         } hover:text-yellow-500`
//                       }
//                     >
//                       <FontAwesomeIcon
//                         icon={faChevronRight}
//                         className="text-red-500 mr-2 text-xs"
//                       />
//                       {link.name}
//                     </NavLink>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}

//           {/* Contact Us */}
//           <div className="transform transition duration-500 hover:translate-y-1">
//             <h3 className="text-lg font-bold text-white mb-6 border-b border-red-600 pb-2 inline-block">
//               Contact Us
//             </h3>
//             <div className="space-y-4">
//               <div className="flex items-start group">
//                 <FontAwesomeIcon
//                   icon={faLocationDot}
//                   className="text-red-500 mr-3 mt-1 group-hover:text-yellow-500 transition-colors duration-300"
//                 />
//                 <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
//                   Amin Court, 6th Floor
//                   <br />
//                   62-63 Motijheel C/A
//                   <br />
//                   Dhaka-1000, Bangladesh
//                 </p>
//               </div>
//               <div className="flex items-start group">
//                 <FontAwesomeIcon
//                   icon={faPhone}
//                   className="text-red-500 mr-3 mt-1 group-hover:text-yellow-500 transition-colors duration-300"
//                 />
//                 <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
//                   +88 09-606565228
//                 </p>
//               </div>
//               <div className="flex items-start group">
//                 <FontAwesomeIcon
//                   icon={faFax}
//                   className="text-red-500 mr-3 mt-1 group-hover:text-yellow-500 transition-colors duration-300"
//                 />
//                 <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
//                   +88 02-223387485
//                 </p>
//               </div>
//               <div className="flex items-start group">
//                 <FontAwesomeIcon
//                   icon={faEnvelope}
//                   className="text-red-500 mr-3 mt-1 group-hover:text-yellow-500 transition-colors duration-300"
//                 />
//                 <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
//                   info@olympicbd.com
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Map and Investors' Relations Section Side by Side */}
//         <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Map */}
//           <div className="w-full overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:shadow-2xl">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7305.114330503113!2d90.42036000000002!3d23.727503!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85a9a41f945%3A0xbb8a4a4649ebd4b1!2sOlympic%20Industries%20Ltd.!5e0!3m2!1sen!2sbd!4v1744024414376!5m2!1sen!2sbd"
//               width="600"
//               height="450"
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>

//           {/* Investors' Relations Department */}
//           <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 shadow-lg flex flex-col justify-center">
//             <h3 className="text-lg font-bold text-white mb-6 border-b border-red-600 pb-2 inline-block">
//               Investors' Relation Department
//             </h3>
//             <div className="space-y-6">
//               <div className="flex items-start group">
//                 <FontAwesomeIcon
//                   icon={faUserTie}
//                   className="text-red-500 mr-3 mt-1 group-hover:text-yellow-500 transition-colors duration-300"
//                 />
//                 <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
//                   <span className="text-gray-300">Contact Person:</span>
//                   <br />
//                   Mintu Kumar Das
//                 </p>
//               </div>
//               <div className="flex items-start group">
//                 <FontAwesomeIcon
//                   icon={faEnvelope}
//                   className="text-red-500 mr-3 mt-1 group-hover:text-yellow-500 transition-colors duration-300"
//                 />
//                 <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
//                   mintu.das@olympicbd.com
//                 </p>
//               </div>
//               <div className="flex items-start group">
//                 <FontAwesomeIcon
//                   icon={faPhone}
//                   className="text-red-500 mr-3 mt-1 group-hover:text-yellow-500 transition-colors duration-300"
//                 />
//                 <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
//                   +88 09-606565228 Ex-6154
//                 </p>
//               </div>
//               <div className="flex items-start group">
//                 <FontAwesomeIcon
//                   icon={faFax}
//                   className="text-red-500 mr-3 mt-1 group-hover:text-yellow-500 transition-colors duration-300"
//                 />
//                 <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
//                   +88 02-223387485
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Decorative divider */}
//         <div className="mt-16 mb-8 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>

//         {/* Copyright */}
//         <div className="text-center py-4 text-sm flex flex-col md:flex-row justify-between items-center">
//           <div className="text-gray-500">
//             &copy; {currentYear}{" "}
//             <span className="text-red-500">Olympic Group</span>. All Rights
//             Reserved.
//           </div>
//           <div className="mt-4 md:mt-0">
//             <a
//               href="/privacy"
//               className="text-gray-500 hover:text-yellow-500 mx-2 transition-colors duration-300"
//             >
//               Privacy Policy
//             </a>
//             <span className="text-gray-700">|</span>
//             <a
//               href="/terms"
//               className="text-gray-500 hover:text-yellow-500 mx-2 transition-colors duration-300"
//             >
//               Terms of Service
//             </a>
//             <span className="text-gray-700">|</span>
//             <a
//               href="/sitemap"
//               className="text-gray-500 hover:text-yellow-500 mx-2 transition-colors duration-300"
//             >
//               Sitemap
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Facebook, Youtube, Twitter, Instagram } from "lucide-react";

export default function OreoWebsite() {
  return (
    <div>
      <div className="bg-blue-600 min-h-screen p-8 text-white flex flex-col items-center">
        {/* Main Oreo Image */}
        <div className="w-full flex justify-center my-8">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full opacity-50 blur-md"></div>
            <img
              src="/olympic-logo.png"
              alt="Oreo Cookie"
              className="relative z-10 border-2 rounded-full p-2 border-gray-200 w-40 h-40 object-contain"
            />
          </div>
        </div>

        {/* Stay Playful Text */}
        <h1 className="text-5xl font-bold mb-16 text-center">Stay Playful</h1>

        {/* Content Container */}
        <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-start">
          {/* Left Section - Logo and Social */}
          <div className="mb-8 md:mb-0">
            <div className="mb-6">
              <img src="/olympic-logo.png" alt="OREO Logo" className="w-36" />
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-200">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-blue-200">
                <Youtube size={24} />
              </a>
              <a href="#" className="hover:text-blue-200">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-blue-200">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-blue-200">
                <span className="font-bold text-xl">TT</span>
              </a>
            </div>
          </div>

          {/* Middle Section - Links */}
          <div className="mb-8 md:mb-0">
            <nav className="flex flex-col space-y-3">
              <a href="#" className="hover:text-blue-200 font-medium">
                ABOUT US
              </a>
              <a href="#" className="hover:text-blue-200 font-medium">
                CONTACT US
              </a>
              <a href="#" className="hover:text-blue-200 font-medium">
                FAQS
              </a>
              <a href="#" className="hover:text-blue-200 font-medium">
                ORDER STATUS
              </a>
              <a href="#" className="hover:text-blue-200 font-medium">
                ORDERS & RETURNS
              </a>
              <a href="#" className="hover:text-blue-200 font-medium">
                SHIPPING INFORMATION
              </a>
              <a href="#" className="hover:text-blue-200 font-medium">
                OREO COOKIES IN FOODSERVICE
              </a>
              <a href="#" className="hover:text-blue-200 font-medium">
                PROMOTION TERMS AND CONDITIONS
              </a>
            </nav>
          </div>

          {/* Right Section - Dunk Club */}
          <div className="bg-blue-700 p-6 rounded-lg w-full md:w-72 border border-blue-400">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <img
                  src="/olympic-logo.png"
                  alt="Dunk Club Logo"
                  className="w-24 h-24 object-contain"
                />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-center mb-2">
              OREO in your inbox
            </h2>
            <p className="text-center text-sm mb-4">
              Join today to get 10% off & be the first to know about exclusive
              offers, recipes, news, and more!
            </p>
            <button className="bg-white text-blue-700 w-full py-2 rounded font-bold hover:bg-blue-100 transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="border"></div>
      <div className="bg-blue-600 text-white w-full py-2 px-4 flex flex-col md:flex-row justify-between items-center text-xs">
        {/* Copyright Section */}
        <div className="text-center text-white text-sm">
          &copy; {new Date().getFullYear()} Olympic Industries Limited. All
          rights reserved.
        </div>
        {/* Links Section */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          <a href="#" className="hover:underline flex items-center">
            Terms and Conditions
          </a>
          <span className="hidden md:inline mx-1">•</span>
          <a href="#" className="hover:underline flex items-center">
            Privacy Policy
          </a>
          <span className="hidden md:inline mx-1">•</span>
          <a href="#" className="hover:underline flex items-center">
            Cookie Policy
          </a>
          <span className="hidden md:inline mx-1">•</span>
          <a href="#" className="hover:underline flex items-center">
            Accessibility
          </a>
          <span className="hidden md:inline mx-1">•</span>
          <a href="#" className="hover:underline flex items-center">
            Do not sell or share my personal information
          </a>
        </div>
      </div>
    </div>
  );
}
