// /* eslint-disable no-unused-vars */
// import { FaBullhorn, FaChartLine, FaUsers } from "react-icons/fa";
// import React from 'react';

// const StatsCard = ({ icon: Icon, value, label }) => {
//   return (
//     <div className="relative h-32 w-full sm:w-[300px] py-0 border border-gray-500 flex flex-col justify-end items-center rounded-lg">
//       {/* Icon positioned at the top-center */}
//       <div className="absolute -top-6 bg-gray-800 rounded-full px-2 py-2">
//         <Icon className="text-4xl text-[#e3b8a0]" />
//       </div>

//       {/* Ensure full width for text container */}
//       <div className="w-full text-center mt-12">
//         <div className="space-y-1">
//           <p className="text-2xl font-bold text-gray-300">{value}</p>
//           <p className="text-sm text-gray-900 bg-slate-300 w-full text-center py-1 rounded-b-md font-bold block">
//             {label}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const DesiredBrands = () => {
//   return (
//     <div className="bg-black text-white py-12 px-4">
//       <div className="max-w-5xl mx-auto text-center">
//         <h2 className="text-xl font-dancing sm:text-2xl md:text-4xl font-bold">
//           Country’s Most
//         </h2>
//         <h1 className="text-3xl font-dancing sm:text-4xl md:text-6xl font-bold text-[#e3b8a0] my-2">
//           Desired Brands
//         </h1>

//         <div className="stats-container mt-8">
//           <div className="stats-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16  space-y-5 md:space-x-4 md:space-y-0 justify-center">
//             <StatsCard
//               icon={FaChartLine}
//               value="BDT 3000"
//               label="TURNOVER IN FY 23"
//             />
//             <StatsCard icon={FaBullhorn} value="70" label="BRANDS" />
//             <StatsCard icon={FaUsers} value="8,000+" label="NO. OF EMPLOYEES" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DesiredBrands;

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
          style={{ color: "#ff3333" }}
        >
          Desired Brands
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
