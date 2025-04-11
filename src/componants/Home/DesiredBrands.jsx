/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { FaBullhorn, FaChartLine, FaUsers } from "react-icons/fa";

const StatsCard = ({ icon: Icon, value, label }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative h-36 w-full sm:w-[300px] py-0 border border-red-800 flex flex-col justify-end items-center rounded-lg transition-all duration-500 ${
        isHovered ? "transform scale-105 shadow-lg shadow-red-900/30" : ""
      }`}
      style={{
        background: "linear-gradient(145deg, #111111, #1a1a1a)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon positioned at the top-center with animation */}
      <div
        className={`absolute -top-6 bg-black rounded-full p-3 border-2 border-red-700 transition-all duration-500 ${
          isHovered ? "transform rotate-12 border-red-500" : ""
        }`}
      >
        <Icon
          className={`text-4xl ${isHovered ? "text-red-500" : "text-gold-400"}`}
          style={{ color: isHovered ? "#ff3333" : "#d4af37" }}
        />
      </div>

      {/* Ensure full width for text container */}
      <div className="w-full text-center mt-12">
        <div className="space-y-2">
          <p
            className={`text-3xl font-bold transition-all duration-300 ${
              isHovered ? "text-red-500" : "text-gold-300"
            }`}
            style={{ color: isHovered ? "#ff3333" : "#d4af37" }}
          >
            {value}
          </p>
          <p
            className="text-sm bg-gradient-to-r from-red-900 to-red-700 w-full text-center py-2 rounded-b-md font-bold block text-gold-100"
            style={{ color: "#ffe0a3" }}
          >
            {label}
          </p>
        </div>
      </div>
    </div>
  );
};

const DesiredBrands = () => {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setAnimateIn(true);
  }, []);

  return (
    <div className="bg-black text-white py-16 px-4">
      <div
        className={`max-w-5xl mx-auto text-center transition-all duration-1000 transform ${
          animateIn ? "opacity-100" : "opacity-0 translate-y-10"
        }`}
      >
        <h2
          className={`text-xl font-dancing sm:text-2xl md:text-4xl font-bold transition-all duration-700 delay-100 transform ${
            animateIn ? "opacity-100" : "opacity-0 translate-y-6"
          }`}
        >
          Country's Most
        </h2>
        <h1
          className={`text-3xl font-dancing sm:text-4xl md:text-6xl font-extrabold my-2 transition-all duration-700 delay-200 transform ${
            animateIn ? "opacity-100" : "opacity-0 translate-y-6"
          }`}
          style={{ color: "#DDB699" }}
        >
          Desired BrandsOur Delights
        </h1>

        <div className="mt-4 w-32 h-1 bg-gradient-to-r from-red-800 to-red-600 mx-auto rounded-full"></div>

        <div
          className={`stats-container mt-16 transition-all duration-700 delay-300 transform ${
            animateIn ? "opacity-100" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="stats-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 justify-center">
            <div className="transition-all duration-500 delay-400 transform origin-top-right">
              <StatsCard
                icon={FaChartLine}
                value="BDT 3000"
                label="TURNOVER IN FY 23"
              />
            </div>
            <div className="transition-all duration-500 delay-500 transform origin-top">
              <StatsCard icon={FaBullhorn} value="70" label="BRANDS" />
            </div>
            <div className="transition-all duration-500 delay-600 transform origin-top-left">
              <StatsCard
                icon={FaUsers}
                value="8,000+"
                label="NO. OF EMPLOYEES"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesiredBrands;
