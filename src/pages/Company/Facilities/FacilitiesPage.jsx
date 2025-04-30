// /* eslint-disable no-unused-vars */
// import React, { useState, useRef, useEffect } from "react";
// import bgImage from "../../../assets/Investors-banner-2.jpg";
// import { motion, useAnimation } from "framer-motion";

// const FactoriesSection = () => {
//   // data
//   const factories = [
//     {
//       id: 1,
//       name: "Narayanganj Factory",
//       description:
//         "Our flagship manufacturing facility located in Narayanganj spans over 120,000 square feet with state-of-the-art production lines for biscuits and confectionery items. This facility employs over 1,200 skilled workers operating in three shifts to meet the growing demand.",
//       images: [
//         "https://olympicbd.com/wp-content/uploads/2016/06/2.jpg",
//         "https://olympicbd.com/wp-content/uploads/2016/06/4.jpg",
//         "https://olympicbd.com/wp-content/uploads/2016/06/3.jpg",
//       ],
//       videoUrl:
//         "https://res.cloudinary.com/dntd4xawh/video/upload/v1745135882/Olympic_Industries_Limited_Father_s_Day_OVC_k75vkr.mp4",
//       stats: {
//         productionCapacity: "450 tons per day",
//         productLines: 12,
//         certifications: ["ISO 9001", "HACCP", "BSTI"],
//       },
//     },
//     {
//       id: 2,
//       name: "Lolati Factory",
//       description:
//         "The Lolati production facility is our newest addition, focused on premium cookies and crackers. This modern facility features automated production lines that maximize efficiency while maintaining our commitment to quality.",
//       images: [
//         "/api/placeholder/800/500",
//         "/api/placeholder/800/500",
//         "/api/placeholder/800/500",
//       ],
//       videoUrl: "/api/placeholder/800/450",
//       stats: {
//         productionCapacity: "200 tons per day",
//         productLines: 8,
//         certifications: ["ISO 9001", "HACCP", "BSTI"],
//       },
//     },
//     {
//       id: 3,
//       name: "Madanpur Factory",
//       description:
//         "Specialized in confectionery and chocolate production, our Madanpur facility houses temperature-controlled environments and specialized equipment to create our premium candy and chocolate products that delight consumers across the globe.",
//       images: [
//         "/api/placeholder/800/500",
//         "/api/placeholder/800/500",
//         "/api/placeholder/800/500",
//       ],
//       videoUrl: "/api/placeholder/800/450",
//       stats: {
//         productionCapacity: "150 tons per day",
//         productLines: 6,
//         certifications: ["ISO 9001", "HACCP", "BSTI"],
//       },
//     },
//   ];

//   const [selectedFactory, setSelectedFactory] = useState(factories[0]);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.play();
//       } else {
//         videoRef.current.pause();
//       }
//     }
//   }, [isPlaying]);

//   useEffect(() => {
//     // Reset video and image states when changing factory
//     setIsPlaying(false);
//     setCurrentImageIndex(0);
//   }, [selectedFactory]);

//   const togglePlayPause = () => {
//     setIsPlaying(!isPlaying);
//   };

//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === selectedFactory.images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? selectedFactory.images.length - 1 : prevIndex - 1
//     );
//   };

//   const brandRed = "#cc0000";
//   const goldAccent = "#d4af37";

//   return (
//     <div className="bg-black text-white min-h-screen">
//       <div className="relative w-full h-screen max-h-[32rem] overflow-hidden">
//         {/* Hero Header Section */}
//         <motion.div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage: `url(${bgImage})`,
//             backgroundPosition: "center 30%",
//           }}
//           initial={{ scale: 1.1 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//         />
//         {/* Dark gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/80 flex flex-col items-center justify-center px-4">
//           {/* Top Gradient Line */}
//           <motion.div
//             initial={{ width: 0 }}
//             animate={{ width: 120 }}
//             transition={{ duration: 1.2, ease: "easeInOut" }}
//             className="h-0.5 bg-gradient-to-r from-transparent via-goldAccent to-transparent mb-6"
//             style={{ backgroundColor: goldAccent }}
//           />

//           {/* Title */}
//           <motion.h1
//             className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-4 tracking-widest"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             Our{" "}
//             <span
//               style={{ color: goldAccent }}
//               className="drop-shadow-lg text-yellow-400"
//             >
//               Factories
//             </span>
//           </motion.h1>

//           {/* Subheading */}
//           <motion.p
//             className="text-lg text-gray-300 max-w-2xl text-center mb-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.3 }}
//           >
//             Discover the heart of Olympic Industries' production excellence
//           </motion.p>

//           {/* Bottom Gradient Line */}
//           <motion.div
//             initial={{ width: 0 }}
//             animate={{ width: 80 }}
//             transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
//             className="h-0.5 mb-4"
//             style={{
//               background: `linear-gradient(to right, transparent, ${brandRed}, transparent)`,
//             }}
//           />

//           {/* Animated scroll indicator */}
//           <motion.div
//             className="absolute bottom-8"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.5, duration: 0.8 }}
//           >
//             <div className="animate-bounce flex flex-col items-center">
//               <p className="text-xs mb-2">Scroll to explore</p>
//               <div className="w-4 h-4 border-r-2 border-b-2 border-goldAccent transform rotate-45"></div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Factory Navigation Tabs */}
//       <div className="container mx-auto px-4 py-8">
//         <div className="flex flex-wrap border-b border-red-700 mb-8">
//           {factories.map((factory) => (
//             <button
//               key={factory.id}
//               className={`px-6 py-3 text-lg transition-colors duration-300 ${
//                 selectedFactory.id === factory.id
//                   ? "bg-red-700 text-yellow-400 font-bold"
//                   : "text-gray-400 hover:text-yellow-400"
//               }`}
//               onClick={() => setSelectedFactory(factory)}
//             >
//               {factory.name}
//             </button>
//           ))}
//         </div>

//         {/* Factory Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Left Column - Video and Description */}
//           <div>
//             {/* Interactive Video Section */}
//             <div
//               className="relative mb-6 bg-gray-900 rounded-lg border-2 border-gray-600 overflow-hidden"
//               onMouseEnter={() => setIsPlaying(true)}
//               onMouseLeave={() => setIsPlaying(false)}
//             >
//               <video
//                 ref={videoRef}
//                 className="w-full h-auto"
//                 src={selectedFactory.videoUrl}
//                 loop
//                 muted
//                 poster="/api/placeholder/800/450"
//               />
//               <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
//                 <button
//                   onClick={togglePlayPause}
//                   className="w-16 h-16 flex items-center justify-center rounded-full bg-red-700 text-white"
//                 >
//                   {isPlaying ? (
//                     <svg
//                       className="w-6 h-6"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M10 4H6v16h4V4zm8 0h-4v16h4V4z"></path>
//                     </svg>
//                   ) : (
//                     <svg
//                       className="w-6 h-6"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M8 5v14l11-7z"></path>
//                     </svg>
//                   )}
//                 </button>
//               </div>
//             </div>

//             {/* Factory Description */}
//             <div className="mb-8">
//               <h2 className="text-2xl font-bold text-yellow-400 mb-4">
//                 {selectedFactory.name}
//               </h2>
//               <p className="text-gray-300 leading-relaxed">
//                 {selectedFactory.description}
//               </p>
//             </div>

//             {/* Factory Stats */}
//             <div className="grid grid-cols-3 gap-4 mb-8">
//               <div className="bg-gray-900 p-4 rounded-lg text-center">
//                 <p className="text-yellow-400 font-bold">Production</p>
//                 <p className="text-white text-lg">
//                   {selectedFactory.stats.productionCapacity}
//                 </p>
//               </div>
//               <div className="bg-gray-900 p-4 rounded-lg text-center">
//                 <p className="text-yellow-400 font-bold">Product Lines</p>
//                 <p className="text-white text-lg">
//                   {selectedFactory.stats.productLines}
//                 </p>
//               </div>
//               <div className="bg-gray-900 p-4 rounded-lg text-center">
//                 <p className="text-yellow-400 font-bold">Certifications</p>
//                 <p className="text-white text-sm">
//                   {selectedFactory.stats.certifications.join(", ")}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Image Gallery */}
//           <div>
//             <div className="relative">
//               <img
//                 src={selectedFactory.images[currentImageIndex]}
//                 alt={`${selectedFactory.name} - Image ${currentImageIndex + 1}`}
//                 className="w-full h-60 rounded-lg"
//               />

//               {/* Navigation Arrows */}
//               <button
//                 onClick={prevImage}
//                 className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-700"
//               >
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M15 19l-7-7 7-7"
//                   />
//                 </svg>
//               </button>

//               <button
//                 onClick={nextImage}
//                 className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-700"
//               >
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 5l7 7-7 7"
//                   />
//                 </svg>
//               </button>

//               {/* Image Counter */}
//               <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 px-3 py-1 rounded-full text-white text-sm">
//                 {currentImageIndex + 1} / {selectedFactory.images.length}
//               </div>
//             </div>

//             {/* Thumbnail Navigation */}
//             <div className="grid grid-cols-3 gap-2 mt-2">
//               {selectedFactory.images.map((image, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentImageIndex(index)}
//                   className={`overflow-hidden rounded ${
//                     currentImageIndex === index ? "ring-2 ring-red-700" : ""
//                   }`}
//                 >
//                   <img
//                     src={image}
//                     alt={`Thumbnail ${index + 1}`}
//                     className="w-full h-20 object-cover"
//                   />
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FactoriesSection;

/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import bgImage from "../../../assets/factories.jpg";
import { motion, useAnimation } from "framer-motion";

const FactoriesSection = () => {
  // data
  const factories = [
    {
      id: 1,
      name: "Narayanganj Factory",
      description:
        "Our flagship manufacturing facility located in Narayanganj spans over 120,000 square feet with state-of-the-art production lines for biscuits and confectionery items. This facility employs over 1,200 skilled workers operating in three shifts to meet the growing demand.",
      images: [
        "https://olympicbd.com/wp-content/uploads/2016/06/2.jpg",
        "https://olympicbd.com/wp-content/uploads/2016/06/4.jpg",
        "https://olympicbd.com/wp-content/uploads/2016/06/3.jpg",
      ],
      videoUrl:
        "https://res.cloudinary.com/dntd4xawh/video/upload/v1745135882/Olympic_Industries_Limited_Father_s_Day_OVC_k75vkr.mp4",
      stats: {
        productionCapacity: "450 tons per day",
        productLines: 12,
        certifications: ["ISO 9001", "HACCP", "BSTI"],
      },
    },
    {
      id: 2,
      name: "Lolati Factory",
      description:
        "The Lolati production facility is our newest addition, focused on premium cookies and crackers. This modern facility features automated production lines that maximize efficiency while maintaining our commitment to quality.",
      images: [
        "/api/placeholder/800/500",
        "/api/placeholder/800/500",
        "/api/placeholder/800/500",
      ],
      videoUrl: "/api/placeholder/800/450",
      stats: {
        productionCapacity: "200 tons per day",
        productLines: 8,
        certifications: ["ISO 9001", "HACCP", "BSTI"],
      },
    },
    {
      id: 3,
      name: "Madanpur Factory",
      description:
        "Specialized in confectionery and chocolate production, our Madanpur facility houses temperature-controlled environments and specialized equipment to create our premium candy and chocolate products that delight consumers across the globe.",
      images: [
        "/api/placeholder/800/500",
        "/api/placeholder/800/500",
        "/api/placeholder/800/500",
      ],
      videoUrl: "/api/placeholder/800/450",
      stats: {
        productionCapacity: "150 tons per day",
        productLines: 6,
        certifications: ["ISO 9001", "HACCP", "BSTI"],
      },
    },
  ];

  const [selectedFactory, setSelectedFactory] = useState(factories[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    // Reset video and image states when changing factory
    setIsPlaying(false);
    setCurrentImageIndex(0);
  }, [selectedFactory]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === selectedFactory.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedFactory.images.length - 1 : prevIndex - 1
    );
  };

  // Color constants
  const brandRed = "#cc0000";
  const goldAccent = "#d4af37";

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Auto-slideshow for images
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        nextImage();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImageIndex, isHovered, selectedFactory.images.length]);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="relative w-full h-screen max-h-[32rem] overflow-hidden">
        {/* Hero Header Section - Keeping the GlobalHeroSection unchanged */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: "center 30%",
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/80 flex flex-col items-center justify-center px-4">
          {/* Top Gradient Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="h-0.5 bg-gradient-to-r from-transparent via-goldAccent to-transparent mb-6"
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
              Factories
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-lg text-gray-300 max-w-2xl text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Discover the heart of Olympic Industries' production excellence
          </motion.p>

          {/* Bottom Gradient Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
            className="h-0.5 mb-4"
            style={{
              background: `linear-gradient(to right, transparent, ${brandRed}, transparent)`,
            }}
          />

          {/* Animated scroll indicator */}
          <motion.div
            className="absolute bottom-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <div className="animate-bounce flex flex-col items-center">
              <p className="text-xs mb-2">Scroll to explore</p>
              <div className="w-4 h-4 border-r-2 border-b-2 border-goldAccent transform rotate-45"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Factory Content Section */}
      <div className="container mx-auto px-4 py-12">
        {/* Improved Factory Navigation Tabs */}
        <motion.div
          className="flex flex-col md:flex-row justify-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {factories.map((factory) => (
            <motion.button
              key={factory.id}
              className={`px-6 py-4 mx-2 mb-2 md:mb-0 text-lg rounded-t-lg transition-all duration-300 ${
                selectedFactory.id === factory.id
                  ? "bg-gradient-to-r from-red-800 to-red-700 text-yellow-400 font-bold shadow-lg transform -translate-y-1"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-yellow-400"
              }`}
              onClick={() => setSelectedFactory(factory)}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
            >
              {factory.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Main Factory Content - Enhanced Layout */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { duration: 0.6 },
            },
          }}
        >
          {/* Left Column - Video and Description */}
          <div className="lg:col-span-7">
            {/* Factory Description - Now placed above video */}
            <motion.div className="mb-8" variants={fadeInUp}>
              <h2 className="text-3xl font-bold mb-2">
                <span className="text-yellow-400">{selectedFactory.name}</span>
              </h2>
              <div className="w-24 h-1 bg-red-700 mb-6"></div>
              <p className="text-gray-300 leading-relaxed text-lg">
                {selectedFactory.description}
              </p>
            </motion.div>

            {/* Enhanced Video Section */}
            <motion.div
              className="relative mb-8 rounded-xl shadow-2xl overflow-hidden"
              variants={fadeInUp}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className="group relative cursor-pointer"
                onClick={togglePlayPause}
                onMouseEnter={() => setIsPlaying(true)}
                onMouseLeave={() => setIsPlaying(false)}
              >
                <video
                  ref={videoRef}
                  className="w-full h-auto object-cover"
                  src={selectedFactory.videoUrl}
                  loop
                  muted
                  poster="/api/placeholder/800/450"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center transition-opacity duration-300 group-hover:opacity-90">
                  <button className="w-20 h-20 flex items-center justify-center rounded-full bg-red-700 text-white transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                    {isPlaying ? (
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M10 4H6v16h4V4zm8 0h-4v16h4V4z"></path>
                      </svg>
                    ) : (
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z"></path>
                      </svg>
                    )}
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 px-3 py-1 rounded-full text-white text-sm">
                  Featured Video
                </div>
              </div>
            </motion.div>

            {/* Factory Stats - New card-based layout */}
            {/* <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-32 border-2 mb-8"
              variants={fadeInUp}
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-red-700">
                <div className="flex items-center mb-3">
                  <svg
                    className="w-6 h-6 text-yellow-400 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  <p className="text-yellow-400 font-bold text-lg">
                    Production
                  </p>
                </div>
                <p className="text-white text-xl font-semibold">
                  {selectedFactory.stats.productionCapacity}
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-red-700">
                <div className="flex items-center mb-3">
                  <svg
                    className="w-6 h-6 text-yellow-400 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                  </svg>
                  <p className="text-yellow-400 font-bold text-lg">
                    Product Lines
                  </p>
                </div>
                <p className="text-white text-xl font-semibold">
                  {selectedFactory.stats.productLines}
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-red-700">
                <div className="flex items-center mb-3">
                  <svg
                    className="w-6 h-6 text-yellow-400 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p className="text-yellow-400 font-bold text-lg">
                    Certifications
                  </p>
                </div>
                <p className="text-white">
                  {selectedFactory.stats.certifications.map((cert, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-700 px-2 py-1 rounded mr-2 mb-2 text-sm"
                    >
                      {cert}
                    </span>
                  ))}
                </p>
              </div>
            </motion.div> */}
          </div>

          {/* Right Column - Enhanced Image Gallery */}
          <div className="lg:col-span-5">
            <motion.div
              className="relative rounded-xl overflow-hidden shadow-2xl"
              variants={fadeInUp}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Main featured image */}
              <img
                src={selectedFactory.images[currentImageIndex]}
                alt={`${selectedFactory.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-80 object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Enhanced navigation arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-red-700 transition-all duration-300 hover:scale-110 focus:outline-none shadow-lg"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-red-700 transition-all duration-300 hover:scale-110 focus:outline-none shadow-lg"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Better progress indicators */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent px-6 py-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-white font-bold">Gallery View</h3>
                  <div className="bg-black bg-opacity-70 px-3 py-1 rounded-full text-white text-sm">
                    {currentImageIndex + 1} / {selectedFactory.images.length}
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-gray-700 h-1 mt-2 rounded-full overflow-hidden">
                  <div
                    className="bg-red-700 h-full transition-all duration-300"
                    style={{
                      width: `${
                        ((currentImageIndex + 1) /
                          selectedFactory.images.length) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced thumbnail navigation */}
            <motion.div
              className="grid grid-cols-3 gap-3 mt-4"
              variants={fadeInUp}
            >
              {selectedFactory.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative overflow-hidden rounded-lg transition-transform duration-200 hover:scale-105 ${
                    currentImageIndex === index
                      ? "ring-2 ring-red-700 shadow-lg transform scale-105"
                      : "opacity-80 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                  <div
                    className={`absolute inset-0 ${
                      currentImageIndex === index
                        ? "bg-transparent"
                        : "bg-black bg-opacity-40 hover:bg-opacity-20"
                    } transition-all duration-300`}
                  ></div>
                </button>
              ))}
            </motion.div>

            {/* Added - Visit button */}
            <motion.div
              className="mt-8 flex justify-center"
              variants={fadeInUp}
            >
              <button className="bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none flex items-center">
                <span>Visit {selectedFactory.name}</span>
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FactoriesSection;
