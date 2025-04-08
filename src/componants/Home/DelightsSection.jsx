// import React, { useEffect, useState } from "react";

// const categories = [
//   {
//     name: "BISCUITS",
//     img: "https://i.ibb.co.com/234W31RJ/Energy-Plus-New-removebg-preview.png",
//   },
//   {
//     name: "COOKIES",
//     img: "https://i.ibb.co.com/Pvn6rLBX/Untitled.png",
//   },
//   {
//     name: "SNACKS",
//     img: "https://i.ibb.co.com/0RBFL206/9dee1fdc-d53f-4301-8d19-f38ab56a9579.png",
//   },
//   {
//     name: "CONFECTIONARY",
//     img: "https://i.ibb.co.com/MyZ2FpcF/92c40963-b6b2-4282-b8d6-18a380f38e59.png",
//   },
//   {
//     name: "POWDER DRINK",
//     img: "https://i.ibb.co.com/1tJWDxLP/f6db3f16-5f3f-411f-a8c8-492179b6c6d0.png",
//   },
//   {
//     name: "BATTERY",
//     img: "https://i.ibb.co.com/V0TQp47M/06362829-5bee-400a-b432-1abdfc48635f.png",
//   },
// ];

import React, { useEffect, useState, useRef } from "react";

const categories = [
  {
    name: "BISCUITS",
    img: "https://i.ibb.co.com/234W31RJ/Energy-Plus-New-removebg-preview.png",
  },
  {
    name: "COOKIES",
    img: "https://i.ibb.co.com/Pvn6rLBX/Untitled.png",
  },
  {
    name: "SNACKS",
    img: "https://i.ibb.co.com/0RBFL206/9dee1fdc-d53f-4301-8d19-f38ab56a9579.png",
  },
  {
    name: "CONFECTIONARY",
    img: "https://i.ibb.co.com/MyZ2FpcF/92c40963-b6b2-4282-b8d6-18a380f38e59.png",
  },
  {
    name: "POWDER DRINK",
    img: "https://i.ibb.co.com/1tJWDxLP/f6db3f16-5f3f-411f-a8c8-492179b6c6d0.png",
  },
  {
    name: "BATTERY",
    img: "https://i.ibb.co.com/V0TQp47M/06362829-5bee-400a-b432-1abdfc48635f.png",
  },
];

export default function DelightsSection() {
  const [animateIn, setAnimateIn] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    // Trigger entrance animation
    setAnimateIn(true);
  }, []);

  const handleCategoryChange = (index) => {
    setActiveCategory(index);
    if (carouselRef.current) {
      const scrollAmount = index * 260; // Adjust based on card width + margin
      carouselRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    const nextIndex = Math.min(activeCategory + 1, categories.length - 1);
    handleCategoryChange(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = Math.max(activeCategory - 1, 0);
    handleCategoryChange(prevIndex);
  };

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white py-20 px-4 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-red-500 filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-yellow-500 filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with Navigation */}
        <div className="flex justify-center items-center">
          <div className="text-center mb-10">
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

          {/* Navigation Controls */}
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-nowrap  overflow-x-auto hide-scrollbar mb-8 pb-2">
          {categories.map((category, index) => (
            <div>
              <button
                key={`tab-${index}`}
                className={`flex-shrink-0 px-6 py-3 mr-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === index
                    ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-900/30"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
                onClick={() => handleCategoryChange(index)}
              >
                {category.name}
              </button>
            </div>
          ))}
          <div className="hidden md:flex items-center space-x-2 ">
            <button
              onClick={handlePrev}
              className={`group flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 transition-all duration-300 ${
                activeCategory === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-red-600"
              }`}
              disabled={activeCategory === 0}
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className={`group flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 transition-all duration-300 ${
                activeCategory === categories.length - 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-red-600"
              }`}
              disabled={activeCategory === categories.length - 1}
            >
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Main Carousel */}
        <div
          ref={carouselRef}
          className="flex flex-nowrap overflow-x-auto hide-scrollbar snap-x pb-8"
          onScroll={(e) => {
            // Update active category based on scroll position
            const scrollPos = e.currentTarget.scrollLeft;
            const cardWidth = 260; // approximate card width + margin
            const newIndex = Math.round(scrollPos / cardWidth);
            if (
              newIndex !== activeCategory &&
              newIndex >= 0 &&
              newIndex < categories.length
            ) {
              setActiveCategory(newIndex);
            }
          }}
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-60 mr-6 snap-start transform transition-all duration-500 ${
                animateIn
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{
                transitionDelay: `${300 + index * 100}ms`,
              }}
            >
              <div
                className={`relative overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-5 h-80
                  transition-all duration-300 border border-gray-700
                  ${
                    activeCategory === index
                      ? "scale-105 shadow-xl shadow-red-900/20 border-red-500/50"
                      : "hover:scale-102 hover:shadow-lg"
                  }
                `}
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/10 to-transparent rounded-full -mr-10 -mt-10"></div>

                {/* Category badge */}
                <div className="absolute top-4 left-4 bg-gray-900/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                  {category.name}
                </div>

                {/* Image container */}
                <div className="relative h-48 flex items-center justify-center mt-10 mb-4">
                  {/* Glowing circle background */}
                  <div
                    className={`absolute w-32 h-32 rounded-full transition-all duration-500 ${
                      activeCategory === index ? "scale-110" : ""
                    }`}
                    style={{
                      background:
                        activeCategory === index
                          ? "radial-gradient(circle, white 40%, rgba(255,255,255,0.8) 60%, rgba(255,255,255,0) 70%)"
                          : "radial-gradient(circle, #333333 40%, rgba(25,25,25,0.8) 60%, rgba(25,25,25,0) 70%)",
                      boxShadow:
                        activeCategory === index
                          ? "0 0 40px rgba(255, 51, 51, 0.4)"
                          : "none",
                    }}
                  ></div>

                  {/* Product image */}
                  <img
                    src={category.img}
                    alt={category.name}
                    className={`relative z-10 object-contain max-h-40 transform transition-all duration-700 ${
                      activeCategory === index ? "scale-110" : ""
                    }`}
                    style={{
                      filter:
                        activeCategory === index
                          ? "drop-shadow(0 10px 10px rgba(0,0,0,0.3))"
                          : "none",
                    }}
                  />
                </div>

                {/* Call to action */}
                <div className="absolute bottom-5 left-5 right-5">
                  <button
                    className={`w-full py-3 rounded-lg text-sm font-semibold transition-all duration-300
                      ${
                        activeCategory === index
                          ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg"
                          : "bg-gradient-to-r from-yellow-700 to-yellow-600 text-white"
                      }
                    `}
                  >
                    {activeCategory === index ? "Explore Now" : "View Products"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex justify-center mt-6 md:hidden">
          <button
            onClick={handlePrev}
            className={`flex items-center justify-center w-10 h-10 rounded-full mx-2 transition-all duration-300 ${
              activeCategory === 0
                ? "bg-gray-800 opacity-50 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700"
            }`}
            disabled={activeCategory === 0}
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center space-x-1">
            {categories.map((_, index) => (
              <button
                key={`dot-${index}`}
                className={`transition-all duration-300 ${
                  activeCategory === index
                    ? "w-6 h-2 bg-red-500"
                    : "w-2 h-2 bg-gray-600 hover:bg-gray-500"
                } rounded-full`}
                onClick={() => handleCategoryChange(index)}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className={`flex items-center justify-center w-10 h-10 rounded-full mx-2 transition-all duration-300 ${
              activeCategory === categories.length - 1
                ? "bg-gray-800 opacity-50 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700"
            }`}
            disabled={activeCategory === categories.length - 1}
          >
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Add CSS for hiding scrollbar and animations */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .scale-102 {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
}
