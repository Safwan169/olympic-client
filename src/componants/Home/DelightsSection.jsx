//  import React from "react";

// const categories = [
//   {
//     name: "BISCUITS",
//     img: "https://olympicbd.com/wp-content/uploads/2018/04/Energy-Plus-New.png",
//   },
//   {
//     name: "COOKIES",
//     img: "https://olympicbd.com/wp-content/uploads/2018/04/Energy-Plus-New.png",
//   },
//   {
//     name: "SNACKS",
//     img: "https://olympicbd.com/wp-content/uploads/2018/04/Energy-Plus-New.png",
//   },
//   {
//     name: "CONFECTIONARY",
//     img: "https://olympicbd.com/wp-content/uploads/2018/04/Energy-Plus-New.png",
//   },
//   {
//     name: "POWDER DRINK",
//     img: "https://olympicbd.com/wp-content/uploads/2018/04/Energy-Plus-New.png",
//   },
//   {
//     name: "BATTERY",
//     img: "https://olympicbd.com/wp-content/uploads/2018/04/Energy-Plus-New.png",
//   },
// ];

// export default function DelightsSection() {
//   return (
//     <>
//       <div className="bg-black text-white py-12 px-4">
//         <div className="mx-auto text-center">
//           <h2 className="text-xl font-dancing sm:text-2xl md:text-4xl font-bold">
//             Dive Into
//           </h2>
//           <h1 className="text-3xl font-dancing sm:text-4xl md:text-6xl font-bold text-[#e3b8a0] my-2">
//             Our Delights
//           </h1>

//           <div className="flex flex-wrap justify-center  mt-8">
//             {categories.map((category, index) => (
//               <div key={index} className="flex flex-col items-center">
//                 <div className="rounded-lg relative shadow-lg p-4 w-48 h-48 flex items-center justify-center">
//                   <img
//                     src={category.img}
//                     alt={category.name}
//                     className="object-contain h-full w-full z-50" // Allow the image to fill the container
//                   />
//                   <div className="bg-gray-200 w-28  h-28 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 absolute bottom-10 p-6"></div>
//                 </div>
//                 <p className="text-sm font-semibold text-gray-400">
//                   {category.name}
//                 </p>
//                 <button className="bg-amber-400 text-white px-3 py-1 mt-2 rounded-md text-xs hover:bg-orange-600 transition">
//                   Discover More
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useEffect, useState } from "react";

const categories = [
  {
    name: "BISCUITS",
    img: "https://i.ibb.co.com/234W31RJ/Energy-Plus-New-removebg-preview.png",
  },
  {
    name: "COOKIES",
    img: "https://i.ibb.co.com/234W31RJ/Energy-Plus-New-removebg-preview.png",
  },
  {
    name: "SNACKS",
    img: "https://i.ibb.co.com/234W31RJ/Energy-Plus-New-removebg-preview.png",
  },
  {
    name: "CONFECTIONARY",
    img: "https://i.ibb.co.com/234W31RJ/Energy-Plus-New-removebg-preview.pngg",
  },
  {
    name: "POWDER DRINK",
    img: "https://i.ibb.co.com/234W31RJ/Energy-Plus-New-removebg-preview.png",
  },
  {
    name: "BATTERY",
    img: "https://i.ibb.co.com/234W31RJ/Energy-Plus-New-removebg-preview.png",
  },
];

export default function GridSystemDesign() {
  const [animateIn, setAnimateIn] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    // Trigger entrance animation
    setAnimateIn(true);
  }, []);

  return (
    <div className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-xl font-dancing sm:text-2xl md:text-4xl font-bold transition-all duration-700 delay-100 ${
              animateIn ? "opacity-100" : "opacity-0"
            }`}
          >
            Dive Into
          </h2>
          <h1
            className={`text-3xl font-dancing sm:text-4xl md:text-6xl font-bold my-3 transition-all duration-700 delay-200 ${
              animateIn ? "opacity-100" : "opacity-0"
            }`}
            style={{ color: "#ff3333" }}
          >
            Our Delights
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-800 to-red-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 gap-y-16">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`flex flex-col items-center transform transition-all duration-500 ${
                animateIn
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${300 + index * 100}ms`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card Container with border effect */}
              <div
                className="rounded-lg p-6 w-full max-w-xs transition-all duration-300"
                style={{
                  background: "linear-gradient(145deg, #0c0c0c, #181818)",
                  borderLeft:
                    hoveredIndex === index
                      ? "2px solid #ff3333"
                      : "2px solid transparent",
                  borderBottom:
                    hoveredIndex === index
                      ? "2px solid #ff3333"
                      : "2px solid transparent",
                  transform:
                    hoveredIndex === index
                      ? "translateY(-5px)"
                      : "translateY(0)",
                  boxShadow:
                    hoveredIndex === index
                      ? "0 10px 20px rgba(255, 51, 51, 0.2)"
                      : "none",
                }}
              >
                {/* Image Container */}
                <div className="relative h-48 mb-4 mx-auto">
                  {/* Background circle with pulse animation */}
                  <div
                    className="absolute w-32 h-32 rounded-full left-1/2 transform -translate-x-1/2 bottom-0"
                    style={{
                      background:
                        hoveredIndex === index
                          ? "radial-gradient(circle, #4a0000, #2a0000)"
                          : "radial-gradient(circle, #111111, #000000)",
                      border: `2px solid ${
                        hoveredIndex === index ? "#ff3333" : "#d4af37"
                      }`,
                      animation:
                        hoveredIndex === index ? "pulse 2s infinite" : "none",
                      boxShadow:
                        hoveredIndex === index
                          ? "0 5px 15px rgba(255, 51, 51, 0.3)"
                          : "0 3px 10px rgba(212, 175, 55, 0.15)",
                    }}
                  />

                  {/* Product image with float effect */}
                  <div
                    className="absolute inset-0 flex items-center justify-center transition-all duration-500"
                    style={{
                      transform:
                        hoveredIndex === index
                          ? "translateY(-10px)"
                          : "translateY(0)",
                    }}
                  >
                    <img
                      src={category.img}
                      alt={category.name}
                      className="object-contain h-full max-h-28 mt-16 w-full z-10"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="text-center">
                  <p
                    className="font-bold mb-3 transition-all duration-300"
                    style={{
                      color: hoveredIndex === index ? "#d4af37" : "#999999",
                      fontSize: "0.9rem",
                      letterSpacing: "1px",
                    }}
                  >
                    {category.name}
                  </p>

                  <button
                    className="w-full py-2 rounded-md text-xs font-semibold transition-all duration-300"
                    style={{
                      background:
                        hoveredIndex === index
                          ? "#ff3333"
                          : "linear-gradient(to right, #d4af37, #ffdf85, #d4af37)",
                      color: "#ffffff",
                      boxShadow:
                        hoveredIndex === index
                          ? "0 4px 12px rgba(255, 51, 51, 0.4)"
                          : "0 2px 5px rgba(212, 175, 55, 0.3)",
                    }}
                  >
                    Discover More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
