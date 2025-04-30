/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import bgImage from "../../../../assets/Investors-banner-2.jpg";

export default function MissionStatementSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Brand colors
  const brandRed = "#cc0000";
  const goldAccent = "#d4af37";

  // Mission points data
  const missionPoints = [
    "Maintain our leadership position in the biscuit industry by producing the best quality products for our consumers that are unique, innovative and delicious",
    "Protect the interest of our shareholders through fiscal prudence",
    "Be an employer of choice while developing future leaders for our organization and the country",
    "Be stewards of social responsibility in Bangladesh through our initiatives.",
  ];

  // Product gallery data
  const productImages = [
    {
      src: "https://olympicbd.com/wp-content/uploads/2016/06/About-us_Mission-Statament.jpg",
      title: "Premium Quality Biscuits",
      subtitle: "Crafted with care in Bangladesh",
    },

    {
      src: "https://olympicbd.com/wp-content/uploads/2016/06/Orange-Biscuits-for-Home-Page.jpg",
      title: "Citrus Sensations",
      subtitle: "Refreshing orange-flavored treats",
    },
  ];

  // Set visibility once component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Scroll animation
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, 100]);

  // Open full-screen image view
  const openFullscreen = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  // Close full-screen image view
  const closeFullscreen = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <div className="relative w-full h-screen max-h-[32rem] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: "center 30%",
            y: parallaxY,
          }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/90 flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 1.2 }}
            className="h-0.5 mb-6"
            style={{ backgroundColor: goldAccent }}
          />

          {/* Title */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-4 tracking-widest"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our{" "}
            <span
              style={{ color: goldAccent }}
              className="drop-shadow-lg text-yellow-400"
            >
              Mission
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-lg text-gray-300 max-w-2xl text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Our mission for ethical growth
          </motion.p>

          {/* Red underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="h-0.5"
            style={{
              background: `linear-gradient(to right, transparent, ${brandRed}, transparent)`,
            }}
          />

          {/* Scroll down indicator */}
          <motion.div
            className="absolute bottom-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <div className="animate-bounce flex flex-col items-center">
              <p className="text-xs mb-2 text-gray-300">Scroll to explore</p>
              <div className="w-4 h-4 border-r-2 border-b-2 border-yellow-400 transform rotate-45"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto py-20 px-4">
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Mission Text */}
          <div className="space-y-12">
            {/* Title Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                MISSION <span className="text-red-600">STATEMENT</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                At Olympic, we believe that being a good business means
                contributing to the well-being of our workers, our customers,
                our community, and our planet. We aim to add value by creating
                nourishing products, generating employment, and strengthening
                Bangladesh's economy.
              </p>
            </motion.div>

            {/* We Aspire To */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h3 className="text-2xl font-semibold mb-6">We aspire to</h3>
              <ul className="space-y-5">
                {missionPoints.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 group transition-all duration-300 transform hover:translate-x-2"
                  >
                    <span className="text-red-500 group-hover:text-yellow-400 mt-1 transition-colors duration-300">
                      ▷
                    </span>
                    <span className="text-gray-300 group-hover:text-white transition duration-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Closing Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <p className="italic text-gray-300 border-l-4 pl-4 border-red-600">
                We believe that quality and integrity are the core ingredients
                of our success. Staying true to our values and innovating
                thoughtfully is how we've become the leader in the biscuit
                industry.
              </p>
            </motion.div>
          </div>

          {/* Mission Image Gallery */}
          <div className="flex flex-col gap-4">
            {productImages.map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  scale: isVisible ? 1 : 0.95,
                }}
                transition={{ duration: 1, delay: 0.3 + idx * 0.2 }}
                className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                onClick={() => openFullscreen(image)}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="object-cover w-full h-full rounded-xl transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <h4 className="text-yellow-400 font-bold">{image.title}</h4>
                  <p className="text-sm text-gray-200">{image.subtitle}</p>
                </div>

                {/* Fullscreen icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/60 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </main>
      </div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center  bg-black/90 backdrop-blur-sm"
            onClick={closeFullscreen}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-screen p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="object-contain max-w-full max-h-[90vh]"
              />
              <button
                className="absolute top-4 right-4 bg-black/60 text-white rounded-full p-2 hover:bg-black/80 transition-colors duration-300"
                onClick={closeFullscreen}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="absolute bottom-4 left-4 right-4 text-center bg-black/60 p-2 rounded">
                <h3 className="text-yellow-400 font-bold text-lg">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-200">{selectedImage.subtitle}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
