// import React from "react";
// import { motion } from "framer-motion";
// import cookieBG from "../../../assets/cookieBG.jpg"; // Adjust this path if your folder structure is different

// const FacilitiesPage = () => {
//   // Colors - matching the previous component
//   const brandRed = "#cc0000";
//   const goldAccent = "#d4af37";
//   const backgroundColor = "#121212";

//   // Animation variants
//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   const slideIn = {
//     hidden: { opacity: 0, x: -20 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   return (
//     <div style={{ backgroundColor }} className="min-h-screen text-white">
//       {/* Header */}
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={fadeIn}
//         className="relative w-full h-64 md:h-96 overflow-hidden"
//       >
//         <img
//           src={cookieBG}
//           alt="Olympic Biscuit Factory Facilities"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
//           <h1
//             className="text-4xl md:text-6xl font-bold text-white"
//             style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
//           >
//             FACILITIES
//           </h1>
//         </div>
//       </motion.div>

//       {/* Content */}
//       <div className="container mx-auto px-4 py-12">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={slideIn}
//           className="max-w-4xl mx-auto"
//         >
//           <p className="text-lg mb-6 leading-relaxed text-gray-200">
//             Olympic operates seven biscuit lines across two production facilities. We also operate three
//             confectionery lines and one bakery line. A majority of our machinery has been procured
//             from Italy and India.
//           </p>

//           <p className="text-lg mb-6 leading-relaxed text-gray-200">
//             We have always purchased cutting edge, modern machinery. In 2010, we made an even
//             greater commitment to industrial automation. Each biscuit line procured after 2010 has a
//             high degree of automation, including technologies such as bulk handling, continuous mixing
//             and dual-fuel burners.
//           </p>

//           <p className="text-lg mb-6 leading-relaxed text-gray-200">
//             With our ISO 22000 certification and implementation of SAP ERP, Olympic is the only
//             biscuit manufacturer in Bangladesh to have full backward traceability of all of our products.
//             This allows us to implement strong quality control checks and continually improve our
//             processes.
//           </p>

//           <p className="text-lg mb-6 leading-relaxed text-gray-200">
//             Our modern machinery, alongside our dedicated, hard-working operations, maintenance
//             and quality control teams, create a unique combination of manufacturer experience
//             unparalleled in Bangladesh.
//           </p>
//         </motion.div>

//         {/* Feature boxes */}
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={fadeIn}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
//         >
//           <div className="p-6 bg-gray-900 rounded-lg shadow-md border-t-4" style={{ borderColor: brandRed }}>
//             <h3 className="text-xl font-bold mb-3 text-white">7 Biscuit Lines</h3>
//             <p className="text-gray-300">State-of-the-art production facilities with modern automation</p>
//           </div>
//           <div className="p-6 bg-gray-900 rounded-lg shadow-md border-t-4" style={{ borderColor: goldAccent }}>
//             <h3 className="text-xl font-bold mb-3 text-white">3 Confectionery Lines</h3>
//             <p className="text-gray-300">Specialized equipment for confectionery production</p>
//           </div>
//           <div className="p-6 bg-gray-900 rounded-lg shadow-md border-t-4" style={{ borderColor: brandRed }}>
//             <h3 className="text-xl font-bold mb-3 text-white">ISO 22000 Certified</h3>
//             <p className="text-gray-300">Ensuring highest food safety standards across operations</p>
//           </div>
//           <div className="p-6 bg-gray-900 rounded-lg shadow-md border-t-4" style={{ borderColor: goldAccent }}>
//             <h3 className="text-xl font-bold mb-3 text-white">SAP ERP Integration</h3>
//             <p className="text-gray-300">Complete backward traceability for quality assurance</p>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default FacilitiesPage;

import React, { useState, useRef, useEffect } from "react";

const FactoriesSection = () => {
  // Sample data - in a real implementation this would come from your CMS/backend
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

  return (
    <div className="bg-black text-white min-h-screen mt-14">
      {/* Page Header */}
      <div className="bg-red-700 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-yellow-400">Our Factories</h1>
          <p className="text-white mt-2">
            Discover the heart of Olympic Industries' production excellence
          </p>
        </div>
      </div>

      {/* Factory Navigation Tabs */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap border-b border-red-700 mb-8">
          {factories.map((factory) => (
            <button
              key={factory.id}
              className={`px-6 py-3 text-lg transition-colors duration-300 ${
                selectedFactory.id === factory.id
                  ? "bg-red-700 text-yellow-400 font-bold"
                  : "text-gray-400 hover:text-yellow-400"
              }`}
              onClick={() => setSelectedFactory(factory)}
            >
              {factory.name}
            </button>
          ))}
        </div>

        {/* Factory Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Video and Description */}
          <div>
            {/* Interactive Video Section */}
            <div
              className="relative mb-6 bg-gray-900 rounded-lg border-2 border-gray-600 overflow-hidden"
              onMouseEnter={() => setIsPlaying(true)}
              onMouseLeave={() => setIsPlaying(false)}
            >
              <video
                ref={videoRef}
                className="w-full h-auto"
                src={selectedFactory.videoUrl}
                loop
                muted
                poster="/api/placeholder/800/450"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                <button
                  onClick={togglePlayPause}
                  className="w-16 h-16 flex items-center justify-center rounded-full bg-red-700 text-white"
                >
                  {isPlaying ? (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10 4H6v16h4V4zm8 0h-4v16h4V4z"></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z"></path>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Factory Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                {selectedFactory.name}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {selectedFactory.description}
              </p>
            </div>

            {/* Factory Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-900 p-4 rounded-lg text-center">
                <p className="text-yellow-400 font-bold">Production</p>
                <p className="text-white text-lg">
                  {selectedFactory.stats.productionCapacity}
                </p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg text-center">
                <p className="text-yellow-400 font-bold">Product Lines</p>
                <p className="text-white text-lg">
                  {selectedFactory.stats.productLines}
                </p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg text-center">
                <p className="text-yellow-400 font-bold">Certifications</p>
                <p className="text-white text-sm">
                  {selectedFactory.stats.certifications.join(", ")}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Image Gallery */}
          <div>
            <div className="relative">
              <img
                src={selectedFactory.images[currentImageIndex]}
                alt={`${selectedFactory.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-60 rounded-lg"
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-700"
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
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-700"
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

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 px-3 py-1 rounded-full text-white text-sm">
                {currentImageIndex + 1} / {selectedFactory.images.length}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="grid grid-cols-3 gap-2 mt-2">
              {selectedFactory.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`overflow-hidden rounded ${
                    currentImageIndex === index ? "ring-2 ring-red-700" : ""
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactoriesSection;
