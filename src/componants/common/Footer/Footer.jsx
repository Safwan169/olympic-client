import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
  faTiktok, // Added TikTok icon possibility
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronRight, // Not used in the link list for this style
  faEnvelope,
  faFax,
  faLocationDot,
  faPhone,
  faUserTie, // Not used in the contact card for this style
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink } from "react-router-dom"; // Keep NavLink if you are using React Router

const Footer = () => {
  // Flat list of navigation links matching the structure in the image
  const navLinks = [
    { name: "About Us", url: "/about" },
    { name: "Contact Us", url: "/contact" },
    { name: "FAQs", url: "/faqs" },
    { name: "Order Status", url: "/order-status" },
    { name: "Orders & Returns", url: "/orders-returns" },
    { name: "Shipping Information", url: "/shipping" },
    { name: "Oreo Cookies in Foodservice", url: "/foodservice" }, // Example link from ref
    { name: "Promotion Terms and Conditions", url: "/promo-terms" }, // Example link from ref
    { name: "Where to Buy", url: "/locations" }, // Kept from original sitemap
  ];

  // Social links matching the icons and style in the image
  const socialLinks = [
    {
      icon: faFacebook,
      url: "https://facebook.com/yourcompany", // Replace with actual URLs
      name: "Facebook",
    },
    {
      icon: faTwitter,
      url: "https://twitter.com/yourcompany", // Replace with actual URLs
      name: "Twitter",
    },
    {
      icon: faInstagram,
      url: "https://instagram.com/yourcompany", // Replace with actual URLs
      name: "Instagram",
    },
     { // LinkedIn icon is present in the image
      icon: faLinkedin,
      url: "https://linkedin.com/company/yourcompany", // Replace with actual URLs
      name: "LinkedIn",
    },
    { // YouTube icon is present in the image
      icon: faYoutube,
      url: "https://youtube.com/yourcompany", // Replace with actual URLs
      name: "YouTube",
    },
     // Add TikTok if needed based on your actual social media presence and icon availability
     // { icon: faTiktok, url: "...", name: "TikTok" },
  ];

  // Contact details for the card section
  // Based on the image, it only shows general contact info, not investor details
  const contactDetails = {
    address: "Amin Court, 6th Floor<br />62-63 Motijheel C/A<br />Dhaka-1000, Bangladesh",
    phone: "+88 09-606565228", // This number is listed twice in your original code, likely for general and investor. Using it for general here.
    fax: "+88 02-223387485", // Fax is shown in the image
    email: "info@olympicbd.com", // Email is shown in the image
  };

  const currentYear = new Date().getFullYear();

  return (
    // Black background, text color adjusted to golden/gray
    <footer className="bg-black text-gray-300 pb-5 relative overflow-hidden">
      {/* Background subtle pattern (optional, based on your assets) */}
      {/* Removed the subtle-pattern.png url as it wasn't visible in the ref image */}
      <div className="absolute inset-0 opacity-50 pointer-events-none"></div> {/* Opacity adjusted */}

      {/* Red accent top border */}
      <div className="mt-16 mb-8 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>

      <div className="container mx-auto px-6  relative z-10">

        {/* Top Centered Section: Main Logo */}
         {/* Placed above the main grid, centered */}
        <div className="flex justify-center  mb-16"> {/* Center horizontally, add bottom margin */}
           {/* Using a placeholder div/image */}
           <img src="/olympic.png" alt="Company Logo" className="h-16 w-auto" /> {/* Adjust height/width as needed */}
        </div>


        {/* Main Footer Grid - Columns: Logo/Social | Links | Card */}
        {/* Using lg:grid-cols-3 to allocate columns: approx 1/4 | approx 1/2 | approx 1/4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8"> {/* Adjusted gap for better fit */}

          {/* Column 1: Logo and social links */}
          <div className=" justify-center  items-center mb-40 flex flex-col lg:col-span-1">
             {/* Mini Logo above social icons */}
             <img src="/olympic.png" alt="Company Mini Logo" className="w-40 mb-6" /> {/* Smaller logo */}
            <div className="flex space-x-5 mt-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-gray-500 hover:text-red-500 transform transition duration-300 hover:scale-125" // Gray default, red hover
                >
                  <FontAwesomeIcon icon={link.icon} size="lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Flat list of navigation links - Takes approx 1/2 cols on large screens */}
          {/* Aligned left */}
          <div className="lg:col-span-1 text-left"> {/* Occupy one column, text-left */}
             {/* Removed section title as per image */}
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="transition-all duration-300 hover:pl-2" // Kept hover effect
                >
                  {/* Link colors - Gray default, red active, yellow hover */}
                  {/* Removed chevron icon as per image */}
                  <NavLink
                    to={link.url}
                    className={({ isActive }) =>
                      `text-gray-400 ${ // Gray default
                        isActive ? "text-red-500" : "" // Red active
                      } hover:text-yellow-500` // Yellow hover
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

           {/* Column 3: Contact Card (Dunk Club equivalent) */}
           {/* Takes approx 1/4 cols on large screens */}
          <div className="lg:col-span-1">
             {/* Card styling: Dark blue-gray background, red border, shadow */}
             {/* Using a slightly darker background for the card than the main footer background */}
             <div className="bg-[#1a1a1a] rounded-lg p-6 border border-red-800 shadow-lg"> {/* Slightly darker bg */}
                 {/* Card Title - Text color Golden */}
                 <h3 className="text-2xl font-bold text-yellow-400 mb-4 text-center">
                   Get In Touch
                 </h3>
                 {/* Optional: Add a brief description like the ref */}
                 <p className="text-sm text-gray-400 mb-6 text-center">We'd love to hear from you!</p>

                 {/* Contact Details - Spacing and text colors adjusted */}
                 {/* Using a slightly lighter gray for contact details */}
                <div className="space-y-4 text-gray-400">
                   {/* Location */}
                  <div className="flex items-start group">
                    {/* Icon color - Red */}
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="text-red-500 mr-3 mt-1 group-hover:text-yellow-500 transition-colors duration-300" // Red icon, golden hover
                    />
                    <p className="group-hover:text-white transition-colors duration-300" dangerouslySetInnerHTML={{ __html: contactDetails.address }}></p>
                  </div>
                   {/* Phone */}
                  <div className="flex items-start group">
                    {/* Icon color - Red */}
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="text-red-500 mr-3 mt-1 group-hover:text-yellow-500 transition-colors duration-300" // Red icon, golden hover
                    />
                    <p className="group-hover:text-white transition-colors duration-300">
                      {contactDetails.phone}
                    </p>
                  </div>
                   {/* Fax - Included based on your original code and image icons */}
                  <div className="flex items-start group">
                    {/* Icon color - Red */}
                    <FontAwesomeIcon
                      icon={faFax}
                      className="text-red-500 mr-3 mt-1 group-hover:text-yellow-500 transition-colors duration-300" // Red icon, golden hover
                    />
                    <p className="group-hover:text-white transition-colors duration-300">
                      {contactDetails.fax}
                    </p>
                  </div>
                   {/* Email */}
                  <div className="flex items-start group">
                    {/* Icon color - Red */}
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-red-500 mr-3 mt-1 group-hover:text-yellow-500 transition-colors duration-300" // Red icon, golden hover
                    />
                    <p className="group-hover:text-white transition-colors duration-300">
                      {contactDetails.email}
                    </p>
                  </div>
                </div>

                 {/* Add a button below the contact details */}
                  <div className="flex justify-center mt-8">
                     <Link to={'/contact'} className="bg-yellow-600 hover:bg-yellow-800 text-white  py-3 px-6 rounded-full transition duration-300">
                       Contact Us
                     </Link>
                  </div>

              </div>
           </div>
        </div>


        {/* Decorative divider - Red/Transparent gradient */}
        <div className="mt-16 mb-8 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>

        {/* Copyright and Policy Links (Bottom Row) */}
        {/* Text color gray, links gray default, yellow hover, gray separators */}
        <div className="text-center py-4 text-sm flex flex-col md:flex-row justify-between items-center text-gray-500">
          <div>
            © {currentYear}{" "}
            <span className="text-red-500">Company Name</span>. All Rights Reserved. {/* Company name text red */}
          </div>
          <div className="mt-4 md:mt-0 flex flex-wrap justify-center md:justify-start"> {/* Added flex-wrap for small screens */}
            {/* Policy links - Gray default, yellow hover, gray separator */}
            <a
              href="/privacy"
              className="text-gray-500 hover:text-yellow-500 mx-2 transition-colors duration-300 whitespace-nowrap"
            >
              Privacy Policy
            </a>
            <span className="text-gray-700">|</span>
            <a
              href="/terms"
              className="text-gray-500 hover:text-yellow-500 mx-2 transition-colors duration-300 whitespace-nowrap"
            >
              Terms and Conditions
            </a>
            <span className="text-gray-700">|</span>
            {/* Links based on the Oreo ref */}
            <a
              href="/cookie-policy"
              className="text-gray-500 hover:text-yellow-500 mx-2 transition-colors duration-300 whitespace-nowrap"
            >
              Cookie Policy
            </a>
            <span className="text-gray-700">|</span>
            <a
              href="/accessibility"
              className="text-gray-500 hover:text-yellow-500 mx-2 transition-colors duration-300 whitespace-nowrap"
            >
              Accessibility
            </a>
             {/* The "Do not sell" link often has specific legal requirements */}
             <span className="text-gray-700">|</span>
            <a
              href="/do-not-sell" // Replace with actual URL if applicable
              className="text-gray-500 hover:text-yellow-500 mx-2 transition-colors duration-300 whitespace-nowrap"
            >
              Do not sell or share my personal information
            </a>
             {/* Sitemap link - Kept from your original code, style it same way */}
             <span className="text-gray-700">|</span>
            <a
              href="/sitemap"
              className="text-gray-500 hover:text-yellow-500 mx-2 transition-colors duration-300 whitespace-nowrap"
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