/* eslint-disable no-unused-vars */
import React from "react";
import bgImage from "../assets/Investors-banner-2.jpg";
import { motion } from "framer-motion";

const GlobalHeroSection = ({ desc, firstHeading, secondHeading }) => {
  const brandRed = "#cc0000";
  const goldAccent = "#d4af37";

  return (
    <div className="relative w-full h-screen max-h-[32rem] overflow-hidden">
      {/* Hero Header Section */}
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
          {firstHeading}{" "}
          <span
            style={{ color: goldAccent }}
            className="drop-shadow-lg text-yellow-400"
          >
            {secondHeading}
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg text-gray-300 max-w-2xl text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {desc}
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
  );
};

export default GlobalHeroSection;
