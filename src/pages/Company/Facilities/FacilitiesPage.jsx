import React from "react";
import { motion } from "framer-motion";

const FacilitiesPage = () => {
  // Colors - matching the previous component
  const brandRed = "#cc0000";
  const goldAccent = "#d4af37";
  const backgroundColor = "#121212";

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

  return (
    <div style={{ backgroundColor }} className="min-h-screen text-white">
      {/* Header */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative w-full h-64 md:h-96 overflow-hidden"
      >
        <img
          src="../../../assets/facilities.jpg"
          alt="Olympic Biscuit Factory Facilities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 
            className="text-4xl md:text-6xl font-bold text-white"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
          >
            FACILITIES
          </h1>
        </div>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={slideIn}
          className="max-w-4xl mx-auto"
        >
          <p className="text-lg mb-6 leading-relaxed text-gray-200">
            Olympic operates seven biscuit lines across two production facilities. We also operate three
            confectionery lines and one bakery line. A majority of our machinery has been procured
            from Italy and India.
          </p>

          <p className="text-lg mb-6 leading-relaxed text-gray-200">
            We have always purchased cutting edge, modern machinery. In 2010, we made an even
            greater commitment to industrial automation. Each biscuit lines procured after 2010 has a
            high degree of automation, including technologies such as bulk handling, continuous mixing
            and dual-fuel burners.
          </p>

          <p className="text-lg mb-6 leading-relaxed text-gray-200">
            With our ISO 22000 certification and implementation of SAP ERP, Olympic is the only
            biscuit manufacturer in Bangladesh to have full backward traceability of all of our products.
            This allows us to implement strong quality control checks and continually improve our
            processes.
          </p>

          <p className="text-lg mb-6 leading-relaxed text-gray-200">
            Our modern machinery, alongside our dedicated, hard-working operations, maintenance
            and quality control teams, create a unique combination of manufacturer experience
            unparalleled in Bangladesh
          </p>
        </motion.div>

        {/* Feature boxes */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          <div className="p-6 bg-gray-900 rounded-lg shadow-md border-t-4" style={{ borderColor: brandRed }}>
            <h3 className="text-xl font-bold mb-3 text-white">7 Biscuit Lines</h3>
            <p className="text-gray-300">State-of-the-art production facilities with modern automation</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg shadow-md border-t-4" style={{ borderColor: goldAccent }}>
            <h3 className="text-xl font-bold mb-3 text-white">3 Confectionery Lines</h3>
            <p className="text-gray-300">Specialized equipment for confectionery production</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg shadow-md border-t-4" style={{ borderColor: brandRed }}>
            <h3 className="text-xl font-bold mb-3 text-white">ISO 22000 Certified</h3>
            <p className="text-gray-300">Ensuring highest food safety standards across operations</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg shadow-md border-t-4" style={{ borderColor: goldAccent }}>
            <h3 className="text-xl font-bold mb-3 text-white">SAP ERP Integration</h3>
            <p className="text-gray-300">Complete backward traceability for quality assurance</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FacilitiesPage;