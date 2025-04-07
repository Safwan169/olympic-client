import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaTag, FaClock, FaShoppingCart } from "react-icons/fa";
import bgImage from "../../assets/cookieBG.jpg";
import { Link } from "react-router-dom";

// Sample promotion images
import promo1 from "../../assets/promotions/promo1.jpg";
import promo2 from "../../assets/promotions/promo2.jpg";
import promo3 from "../../assets/promotions/promo3.jpg";
import promo4 from "../../assets/promotions/promo4.jpg";
import promo5 from "../../assets/promotions/promo5.jpg";

const PromotionsPage = () => {
  // Colors - matching the previous component
  const brandRed = "#cc0000";
  const goldAccent = "#d4af37";

  // Current date for expiry checking
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Update current date every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);
    
    return () => clearInterval(interval);
  }, []);

  // Promotions data with expiry dates
  const allPromotions = [
    {
      id: 1,
      title: "Summer Cookie Festival",
      description: "Enjoy 25% off on all premium cookie selections. Perfect for your summer gatherings!",
      image: promo1,
      startDate: new Date("2025-05-01"),
      expiryDate: new Date("2025-06-30"),
      discount: "25%",
      category: "Seasonal",
      couponCode: "SUMMER25"
    },
    {
      id: 2,
      title: "Buy 2 Get 1 Free",
      description: "Purchase any two boxes of Olympic chocolate cookies and get one chocolate cream box absolutely free!",
      image: promo2,
      startDate: new Date("2025-04-01"),
      expiryDate: new Date("2025-04-15"),
      discount: "33%",
      category: "Bundle",
      couponCode: "B2G1FREE"
    },
    {
      id: 3,
      title: "New Flavor Launch Discount",
      description: "Try our brand new Caramel Macchiato cookies at a special introductory price. Limited time offer!",
      image: promo3,
      startDate: new Date("2025-03-15"),
      expiryDate: new Date("2025-05-15"),
      discount: "15%",
      category: "New Product",
      couponCode: "NEWCOOKIE15"
    },
    {
      id: 4,
      title: "Ramadan Special Bundle",
      description: "Special festive packs for Iftar and Sehri. Gift boxes available with customized packaging.",
      image: promo4,
      startDate: new Date("2025-02-15"),
      expiryDate: new Date("2025-03-15"),
      discount: "20%",
      category: "Holiday",
      couponCode: "RAMADAN20"
    },
    {
      id: 5,
      title: "Corporate Bulk Order Discount",
      description: "Special pricing for corporate bulk orders. Customized packaging available for gifts and events.",
      image: promo5,
      startDate: new Date("2025-01-01"),
      expiryDate: new Date("2025-12-31"),
      discount: "Up to 40%",
      category: "Corporate",
      couponCode: "CORP40"
    }
  ];

  // Filter promotions to show only non-expired ones
  const activePromotions = allPromotions.filter(promo => 
    promo.expiryDate > currentDate && promo.startDate <= currentDate
  );

  // Filter upcoming promotions
  const upcomingPromotions = allPromotions.filter(promo => 
    promo.startDate > currentDate
  );

  // Filter by category
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // Get unique categories
  const categories = ["All", ...new Set(allPromotions.map(promo => promo.category))];
  
  // Filtered promotions based on category
  const filteredPromotions = selectedCategory === "All" 
    ? activePromotions 
    : activePromotions.filter(promo => promo.category === selectedCategory);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Format date to display
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };
  
  // Calculate days remaining
  const getDaysRemaining = (expiryDate) => {
    const diff = Math.ceil((expiryDate - currentDate) / (1000 * 60 * 60 * 24));
    return diff;
  };

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero Header Section */}
      <div
        className="relative w-full h-80 md:h-96 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center 30%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/80 flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="h-0.5 bg-gradient-to-r from-transparent via-goldAccent to-transparent mb-6"
            style={{ backgroundColor: goldAccent }}
          />
          <motion.h1
            className="text-4xl md:text-5xl font-bold tracking-wider mb-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Special Promotions
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
            className="h-0.5 mb-4"
            style={{
              background: `linear-gradient(to right, transparent, ${brandRed}, transparent)`,
            }}
          />
          <motion.p
            className="text-gray-300 text-center max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Discover exclusive offers and special deals on your favorite Olympic products
          </motion.p>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="max-w-5xl mx-auto py-8 px-4 overflow-x-auto">
        <motion.div
          className="flex space-x-3 md:justify-center min-w-max"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 hover:bg-black/30 ${
                selectedCategory === category 
                  ? `border-${goldAccent} bg-black/30` 
                  : 'border-gray-800 hover:border-goldAccent'
              }`}
              style={{ 
                borderColor: selectedCategory === category ? goldAccent : 'rgba(212, 175, 55, 0.3)'
              }}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Active Promotions Section */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
          className="flex flex-col items-center"
        >
          <motion.h2
            className="text-3xl font-light mb-6 text-center"
            variants={fadeIn}
          >
            Active <span className="font-semibold">Promotions</span>
          </motion.h2>
          <motion.div
            className="h-px w-16 mx-auto mb-16"
            style={{
              background: `linear-gradient(to right, transparent, ${goldAccent}, transparent)`,
            }}
            variants={fadeIn}
          />

          {filteredPromotions.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl"
              variants={fadeIn}
            >
              {filteredPromotions.map((promo) => (
                <motion.div
                  key={promo.id}
                  className="group bg-black/20 border border-gray-900 rounded-lg overflow-hidden transition-all duration-500 hover:border-gray-700"
                  variants={slideIn}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={promo.image} 
                      alt={promo.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80" />
                    
                    {/* Discount Badge */}
                    <div 
                      className="absolute top-4 right-4 px-3 py-1 rounded text-sm font-bold"
                      style={{ 
                        background: brandRed,
                        color: 'white'
                      }}
                    >
                      {promo.discount}
                    </div>
                    
                    {/* Category Badge */}
                    <div 
                      className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium"
                      style={{ 
                        background: 'rgba(0,0,0,0.7)',
                        border: `1px solid ${goldAccent}`,
                        color: goldAccent
                      }}
                    >
                      {promo.category}
                    </div>
                  </div>
                  
                  <div className="p-6 relative">
                    <h3 className="text-xl font-medium mb-3">{promo.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">{promo.description}</p>
                    
                    <div className="flex items-center text-sm text-gray-400 mb-3">
                      <FaCalendarAlt className="mr-2" style={{ color: goldAccent }} />
                      <span>Valid until: {formatDate(promo.expiryDate)}</span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-400 mb-4">
                      <FaClock className="mr-2" style={{ color: goldAccent }} />
                      <span>
                        {getDaysRemaining(promo.expiryDate) > 1 
                          ? `${getDaysRemaining(promo.expiryDate)} days remaining` 
                          : `Last day!`}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-800">
                      <div className="flex items-center text-sm font-medium">
                        <FaTag className="mr-2" style={{ color: goldAccent }} />
                        Code: <span className="ml-1 text-white">{promo.couponCode}</span>
                      </div>
                      
                      <Link
                        to={`/products?promo=${promo.id}`}
                        className="flex items-center text-sm font-medium transition-colors duration-300 hover:text-white"
                        style={{ color: goldAccent }}
                      >
                        <span>Shop Now</span>
                        <FaShoppingCart className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="text-center py-12 px-4"
              variants={fadeIn}
            >
              <p className="text-gray-400 mb-4">No active promotions in this category at the moment.</p>
              <p className="text-gray-500">Please check back later or browse other categories.</p>
            </motion.div>
          )}
        </motion.section>
      </div>

      {/* Upcoming Promotions Section */}
      {upcomingPromotions.length > 0 && (
        <div className="bg-black/30 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
              className="flex flex-col items-center"
            >
              <motion.h2
                className="text-3xl font-light mb-6 text-center"
                variants={fadeIn}
              >
                Coming <span className="font-semibold">Soon</span>
              </motion.h2>
              <motion.div
                className="h-px w-16 mx-auto mb-16"
                style={{
                  background: `linear-gradient(to right, transparent, ${goldAccent}, transparent)`,
                }}
                variants={fadeIn}
              />

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl"
                variants={fadeIn}
              >
                {upcomingPromotions.slice(0, 3).map((promo) => (
                  <motion.div
                    key={promo.id}
                    className="group bg-black/40 border border-gray-900 rounded-lg overflow-hidden transition-all duration-500 hover:border-gray-700"
                    variants={slideIn}
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img 
                        src={promo.image} 
                        alt={promo.title}
                        className="w-full h-full object-cover filter grayscale opacity-60 transition-all duration-700 group-hover:opacity-70"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-90" />
                      
                      {/* Coming Soon Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div 
                          className="px-4 py-2 rounded-full text-sm font-medium transform rotate-12"
                          style={{ 
                            background: `linear-gradient(135deg, ${brandRed} 0%, rgba(0,0,0,0.8) 100%)`,
                            border: `1px solid ${goldAccent}`
                          }}
                        >
                          Coming Soon
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 relative">
                      <h3 className="text-xl font-medium mb-3">{promo.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">{promo.description}</p>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <FaCalendarAlt className="mr-2" style={{ color: goldAccent }} />
                        <span>Starts: {formatDate(promo.startDate)}</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500">
                        <FaTag className="mr-2" style={{ color: goldAccent }} />
                        <span>Discount: {promo.discount}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          </div>
        </div>
      )}

      {/* Notification Sign Up Section */}
      <div className="max-w-4xl mx-auto py-16 px-4">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="border border-gray-800 rounded-lg p-10 text-center flex flex-col items-center space-y-6"
            variants={fadeIn}
            whileHover={{
              borderColor: `rgba(212, 175, 55, 0.3)`,
              transition: { duration: 0.3 },
            }}
          >
            <h2 className="text-2xl font-light">Stay Updated</h2>
            <div
              className="h-px w-12"
              style={{
                background: `linear-gradient(to right, transparent, ${goldAccent}, transparent)`,
              }}
            />
            <p className="text-gray-300 max-w-lg mx-auto">
              Subscribe to our newsletter to be the first to know about upcoming promotions, exclusive deals, and new product launches.
            </p>
            
            <div className="flex flex-col sm:flex-row w-full max-w-md gap-3">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-black/30 border border-gray-800 rounded-md focus:outline-none focus:border-gray-700 text-white"
              />
              <button
                className="px-6 py-3 rounded-md text-sm font-medium transition-all duration-300"
                style={{ 
                  background: brandRed,
                  color: 'white'
                }}
              >
                Subscribe
              </button>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default PromotionsPage;