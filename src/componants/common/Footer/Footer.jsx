import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const sitemapLinks = {
    company: [
      { name: "About Us", url: "#" },
      { name: "Our History", url: "#" },
      { name: "Leadership Team", url: "#" },
      { name: "Careers", url: "#" },
      { name: "News & Media", url: "#" },
    ],
    products: [
      { name: "Product Range", url: "#" },
      { name: "New Arrivals", url: "#" },
      { name: "Best Sellers", url: "#" },
      { name: "Promotions", url: "#" },
      { name: "Where to Buy", url: "#" },
    ],
    support: [
      { name: "Contact Us", url: "#" },
      { name: "FAQs", url: "#" },
      { name: "Technical Support", url: "#" },
      { name: "Warranty Information", url: "#" },
      { name: "Product Registration", url: "#" },
    ],
  };

  const socialLinks = [
    { icon: faFacebook, url: "https://facebook.com/olympicgroup" },
    { icon: faTwitter, url: "https://twitter.com/olympicgroup" },
    { icon: faInstagram, url: "https://instagram.com/olympicgroup" },
    { icon: faLinkedin, url: "https://linkedin.com/company/olympicgroup" },
    { icon: faYoutube, url: "https://youtube.com/olympicgroup" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img
              src="/olympic-logo.png"
              alt="Olympic Logo"
              className="w-40 mb-4"
            />
            <p className="text-sm">
              Leading the industry with innovation and excellence since 1975.
            </p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  <FontAwesomeIcon icon={link.icon} size="lg" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(sitemapLinks).map(([section, links], idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold text-white mb-3 capitalize">
                {section}
              </h3>
              <ul>
                {links.map((link, index) => (
                  <li
                    key={index}
                    className="mb-2 hover:text-red-500 transition"
                  >
                    <a href={link.url}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-red-500 mr-2"
                />
                <p>123 Industrial Avenue, Business District, City 12345</p>
              </div>
              <div className="flex items-start">
                <FontAwesomeIcon icon={faPhone} className="text-red-500 mr-2" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-start">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-red-500 mr-2"
                />
                <p>info@olympicgroup.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between items-center mt-8 text-center md:text-left">
          <iframe
            title="Google Map"
            className="w-full md:w-1/2 h-48 rounded-lg border"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.5571624495055!2d90.42035979999997!3d23.727503099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9b0faef7c85%3A0x2aba50dabe58a5c!2sAmin%20Court!5e0!3m2!1sen!2sbd!4v1741845985605!5m2!1sen!2sbd"
            allowFullScreen=""
            loading="lazy"
          ></iframe>

          <div className="mt-6 md:mt-0 md:ml-8 w-full md:w-1/3">
            <h3 className="text-lg font-semibold text-white mb-3">
              Newsletter
            </h3>
            <div className="flex flex-col sm:flex-row w-full max-w-md">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 p-2 rounded-t sm:rounded-l sm:rounded-t-none bg-gray-800 border border-gray-600 text-white focus:outline-none w-full"
              />
              <button className="bg-red-500 text-white px-4 py-2 rounded-b sm:rounded-r sm:rounded-b-none hover:bg-red-600 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-center py-4 mt-8 text-sm">
        &copy; {currentYear} Olympic Group. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
