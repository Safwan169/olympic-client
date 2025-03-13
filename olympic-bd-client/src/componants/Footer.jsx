import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPhone,
    faEnvelope,
    faLocationDot,
    faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';

const footerStyles = `
  .footer {
    background-color: #1a1a1a;
    color: #f5f5f5;
    padding-top: 4rem;
  }

  .footer-logo {
    max-width: 180px;
    margin-bottom: 1.5rem;
  }

  .footer-heading {
    position: relative;
    margin-bottom: 1.5rem;
    font-weight: 600;
    font-size: 1.25rem;
  }

  .footer-heading:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    width: 50px;
    height: 2px;
    background-color: #ff0001;
  }

  .footer-contact-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  .footer-contact-icon {
    min-width: 1.5rem;
    margin-right: 0.75rem;
    color: #ff0001;
  }

  .footer-social-icons {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .footer-social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }

  .footer-social-icon:hover {
    background-color: #ff0001;
    transform: translateY(-3px);
  }

  .footer-link {
    display: flex;
    align-items: center;
    margin-bottom: 0.75rem;
    transition: all 0.3s ease;
  }

  .footer-link:hover {
    color: #ff0001;
    transform: translateX(5px);
  }

  .footer-link-icon {
    font-size: 0.75rem;
    margin-right: 0.5rem;
    color: #ff0001;
  }

  .footer-bottom {
    background-color: #111111;
    padding: 1.5rem 0;
    margin-top: 3rem;
  }

  .footer-newsletter input {
    background-color: rgba(255, 255, 255, 0.1);
    border: none;
    color: white;
    padding: 0.75rem 1rem;
    width: 100%;
    border-radius: 4px 0 0 4px;
  }

  .footer-newsletter input::placeholder {
    color: #aaa;
  }

  .footer-newsletter input:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 0.15);
  }

  .footer-newsletter button {
    background-color: #ff0001;
    color: white;
    border: none;
    padding: 0.75rem 1.25rem;
    border-radius: 0 4px 4px 0;
    transition: all 0.3s ease;
  }

  .footer-newsletter button:hover {
    background-color: #cc0000;
  }
  
  .google-map {
    width: 100%;
    height: 200px;
    border-radius: 6px;
    margin-top: 1.5rem;
    overflow: hidden;
  }
`;

const Footer = () => {
    const mapRef = useRef(null);

    // Initialize Google Map
    useEffect(() => {
        // Load Google Maps API
        const loadGoogleMapsAPI = () => {
            const googleMapScript = document.createElement('script');
            googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBQIO-oIBoQGd48kuy3OeHPS8xeedrszGY&libraries=places`;
            googleMapScript.async = true;
            googleMapScript.defer = true;
            window.document.body.appendChild(googleMapScript);

            googleMapScript.addEventListener('load', () => {
                initializeMap();
            });
        };

        // Initialize map once API is loaded
        const initializeMap = () => {
            if (!mapRef.current) return;

            // Replace these coordinates with your actual location
            const location = { lat: 23.72770, lng: 90.42039 }; // Example: San Francisco

            const map = new window.google.maps.Map(mapRef.current, {
                center: location,
                zoom: 15,
                styles: [
                    {
                        featureType: "all",
                        elementType: "geometry",
                        stylers: [{ color: "#242f3e" }]
                    },
                    {
                        featureType: "all",
                        elementType: "labels.text.stroke",
                        stylers: [{ color: "#242f3e" }]
                    },
                    {
                        featureType: "all",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#746855" }]
                    },
                    {
                        featureType: "administrative.locality",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#d59563" }]
                    },
                    {
                        featureType: "poi",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#d59563" }]
                    },
                    {
                        featureType: "road",
                        elementType: "geometry",
                        stylers: [{ color: "#38414e" }]
                    },
                    {
                        featureType: "road",
                        elementType: "geometry.stroke",
                        stylers: [{ color: "#212a37" }]
                    },
                    {
                        featureType: "road",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#9ca5b3" }]
                    },
                    {
                        featureType: "road.highway",
                        elementType: "geometry",
                        stylers: [{ color: "#746855" }]
                    },
                    {
                        featureType: "road.highway",
                        elementType: "geometry.stroke",
                        stylers: [{ color: "#1f2835" }]
                    },
                    {
                        featureType: "transit",
                        elementType: "geometry",
                        stylers: [{ color: "#2f3948" }]
                    },
                    {
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{ color: "#17263c" }]
                    }
                ]
            });

            // Add marker for your location
            const marker = new window.google.maps.Marker({
                position: location,
                map: map,
                title: 'Olympic Group Headquarters'
            });

            // Optional: Add info window
            const infoWindow = new window.google.maps.InfoWindow({
                content: `
          <div style="color: #333; padding: 5px;">
            <h3 style="margin: 0 0 5px 0;">Olympic Group</h3>
            <p style="margin: 0;">123 Industrial Avenue, Business District, City 12345</p>
          </div>
        `
            });

            marker.addListener('click', () => {
                infoWindow.open(map, marker);
            });
        };

        if (!window.google) {
            loadGoogleMapsAPI();
        } else {
            initializeMap();
        }

        return () => {
            // Clean up if needed
        };
    }, []);

    // Footer sitemap links - easy to update
    const sitemapLinks = {
        company: [
            { name: 'About Us', url: '#' },
            { name: 'Our History', url: '#' },
            { name: 'Leadership Team', url: '#' },
            { name: 'Careers', url: '#' },
            { name: 'News & Media', url: '#' },
        ],
        products: [
            { name: 'Product Range', url: '#' },
            { name: 'New Arrivals', url: '#' },
            { name: 'Best Sellers', url: '#' },
            { name: 'Promotions', url: '#' },
            { name: 'Where to Buy', url: '#' },
        ],
        support: [
            { name: 'Contact Us', url: '#' },
            { name: 'FAQs', url: '#' },
            { name: 'Technical Support', url: '#' },
            { name: 'Warranty Information', url: '#' },
            { name: 'Product Registration', url: '#' },
        ]
    };

    // Social media links
    const socialLinks = [
        { icon: faFacebook, url: 'https://facebook.com/olympicgroup' },
        { icon: faTwitter, url: 'https://twitter.com/olympicgroup' },
        { icon: faInstagram, url: 'https://instagram.com/olympicgroup' },
        { icon: faLinkedin, url: 'https://linkedin.com/company/olympicgroup' },
        { icon: faYoutube, url: 'https://youtube.com/olympicgroup' },
    ];

    const currentYear = new Date().getFullYear();

    return (
        <>
            <style>{footerStyles}</style>
            <footer className="footer">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Company Info */}
                        <div>
                            <img src="/olympic-logo.png" alt="Olympic Logo" className="footer-logo" />
                            <p className="mb-4 text-gray-400">
                                Leading the industry with innovation and excellence since 1975. Committed to quality,
                                sustainability, and customer satisfaction.
                            </p>

                            {/* Social Media Icons */}
                            <div className="footer-social-icons">
                                {socialLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="footer-social-icon"
                                    >
                                        <FontAwesomeIcon icon={link.icon} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="footer-heading">Company</h3>
                            <ul>
                                {sitemapLinks.company.map((link, index) => (
                                    <li key={index} className="footer-link">
                                        <FontAwesomeIcon icon={faChevronRight} className="footer-link-icon" />
                                        <a href={link.url}>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Products */}
                        <div>
                            <h3 className="footer-heading">Products</h3>
                            <ul>
                                {sitemapLinks.products.map((link, index) => (
                                    <li key={index} className="footer-link">
                                        <FontAwesomeIcon icon={faChevronRight} className="footer-link-icon" />
                                        <a href={link.url}>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Information and Map */}
                        <div>
                            <h3 className="footer-heading">Contact Us</h3>
                            <div className="footer-contact-item">
                                <FontAwesomeIcon icon={faLocationDot} className="footer-contact-icon" />
                                <div>
                                    Olympic Group Headquarters<br />
                                    123 Industrial Avenue<br />
                                    Business District, City 12345<br />
                                    Country
                                </div>
                            </div>
                            <div className="footer-contact-item">
                                <FontAwesomeIcon icon={faPhone} className="footer-contact-icon" />
                                <div>
                                    +1 (555) 123-4567<br />
                                    +1 (555) 765-4321
                                </div>
                            </div>
                            <div className="footer-contact-item">
                                <FontAwesomeIcon icon={faEnvelope} className="footer-contact-icon" />
                                <div>info@olympicgroup.com</div>
                            </div>

                      
                        </div>
                    </div>
                </div>
                <div className='flex justify-evenly'>
                                {/* Google Map */}
                                <iframe
                                    title="Google Map"
                                    className="w-1/2 h-[200px] rounded-lg border"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.5571624495055!2d90.42035979999997!3d23.727503099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9b0faef7c85%3A0x2aba50dabe58a5c!2sAmin%20Court!5e0!3m2!1sen!2sbd!4v1741845985605!5m2!1sen!2sbd"
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                                {/* Newsletter */}
                                <div className="mt-6">
                                    <h3 className="footer-heading">Newsletter</h3>
                                    <div className="footer-newsletter flex">
                                        <input type="email" placeholder="Your email" />
                                        <button>Subscribe</button>
                                    </div>
                                </div>
                            </div>

                {/* Bottom Bar */}
                <div className="footer-bottom mt-8">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="mb-4 md:mb-0 text-gray-400 text-sm">
                                &copy; {currentYear} Olympic Group. All Rights Reserved.
                            </div>
                            <div className="flex space-x-4 text-gray-400 text-sm">
                                <a href="#" className="hover:text-white">Privacy Policy</a>
                                <a href="#" className="hover:text-white">Terms of Service</a>
                                <a href="#" className="hover:text-white">Cookie Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;

