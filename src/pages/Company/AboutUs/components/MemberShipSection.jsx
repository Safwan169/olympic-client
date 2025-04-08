import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Info } from "lucide-react";

// Sample organization data
const organizations = [
  {
    id: 1,
    name: "Intellectual Property Association Bangladesh",
    logo: "https://olympicbd.com/wp-content/uploads/2016/06/ibcci.jpg",
    acronym: "IPAB",
    description: "Protecting intellectual property rights in Bangladesh",
  },
  {
    id: 2,
    name: "Bangladesh Auto Biscuit and Bread Manufacturers Association",
    logo: "https://olympicbd.com/wp-content/uploads/2016/06/ipas.png",
    acronym: "BABBMA",
    description: "Representing the biscuit and bread industry",
  },
  {
    id: 3,
    name: "Bangladesh Association of Publicly Listed Companies",
    logo: "https://olympicbd.com/wp-content/uploads/2016/06/ibcci.jpg",
    acronym: "BAPLC",
    description: "Advocating for public companies in Bangladesh",
  },
  {
    id: 4,
    name: "Metropolitan Chamber of Commerce and Industry",
    logo: "https://olympicbd.com/wp-content/uploads/2016/06/mcci.png",
    acronym: "MCCI",
    description: "Promoting trade and industry since 1904",
  },
  {
    id: 5,
    name: "Bangladesh-Malaysia Chamber of Commerce and Industry",
    logo: "https://olympicbd.com/wp-content/uploads/2016/06/mcci.png",
    acronym: "BMCCI",
    description: "Strengthening bilateral trade relations",
  },
  {
    id: 6,
    name: "India-Bangladesh Chamber of Commerce and Industry",
    logo: "https://olympicbd.com/wp-content/uploads/2016/06/babbma.png",
    acronym: "IBCCI",
    description: "Fostering business connections between nations",
  },
];

export default function MemberShipSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) =>
      prev === organizations.length - 1 ? 0 : prev + 1
    );
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) =>
      prev === 0 ? organizations.length - 1 : prev - 1
    );
    setTimeout(() => setIsAnimating(false), 600);
  };

  const setActiveOrg = (index) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!hoverIndex) {
        handleNext();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [hoverIndex, activeIndex]);

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen text-white py-12 px-4 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-red-600 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-500 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-red-800 opacity-5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Content container */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header with animated underline */}
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl font-bold relative group">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">
              MEMBERSHIP
            </span>
            <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-red-600 to-yellow-500 group-hover:w-full transition-all duration-700 ease-in-out"></span>
          </h2>

          <div className="flex space-x-2">
            <button
              onClick={handlePrev}
              className="bg-gray-900 p-2 rounded-full border border-gray-800 hover:border-red-500 hover:bg-gray-800 transition-all duration-300 group"
            >
              <ChevronLeft
                size={20}
                className="text-gray-400 group-hover:text-red-500 transition-colors duration-300"
              />
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-900 p-2 rounded-full border border-gray-800 hover:border-red-500 hover:bg-gray-800 transition-all duration-300 group"
            >
              <ChevronRight
                size={20}
                className="text-gray-400 group-hover:text-red-500 transition-colors duration-300"
              />
            </button>
          </div>
        </div>

        {/* Main content - Featured organization and carousel */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          ref={containerRef}
        >
          {/* Featured organization card */}
          <div className="col-span-1 lg:col-span-1 h-96">
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden h-full border border-gray-800 group hover:border-red-500 transition-all duration-500 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 z-10"></div>

              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-yellow-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Logo area */}
              <div className="absolute top-0 left-0 right-0 flex justify-center p-6 z-20">
                <div className="w-24 h-24 rounded-2xl bg-black bg-opacity-50 backdrop-blur-sm p-2 flex items-center justify-center border border-gray-700 group-hover:border-yellow-500 transition-all duration-500 shadow-lg">
                  <img
                    src={organizations[activeIndex].logo}
                    alt={organizations[activeIndex].acronym}
                    className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Content area */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full mb-2">
                    {organizations[activeIndex].acronym}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 transition-all duration-500 transform group-hover:translate-x-2">
                  {organizations[activeIndex].name}
                </h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                  {organizations[activeIndex].description}
                </p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                  <button className="flex items-center text-xs font-medium text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
                    Learn more <ExternalLink size={12} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Organization grid */}
          <div className="col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {organizations.map((org, idx) => (
              <div
                key={org.id}
                className={`relative cursor-pointer transition-all duration-500 ease-in-out ${
                  idx === activeIndex
                    ? "ring-2 ring-red-500 scale-105 z-10"
                    : "hover:scale-105"
                }`}
                onClick={() => setActiveOrg(idx)}
                onMouseEnter={() => setHoverIndex(idx)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <div
                  className={`bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border ${
                    idx === activeIndex
                      ? "border-red-500 rounded-sm"
                      : "border-gray-800"
                  } transition-all duration-300 h-full`}
                >
                  {/* Org content */}
                  <div className="p-4 h-full flex flex-col items-center justify-center">
                    <div
                      className={`w-16 h-16 rounded-full bg-black p-2 flex items-center justify-center mb-3 ${
                        idx === activeIndex ? "ring-2 ring-red-500" : ""
                      } transition-all duration-300`}
                    >
                      <img
                        src={org.logo}
                        alt={org.name}
                        className={`w-10 h-10 object-contain transition-all duration-300 ${
                          idx === activeIndex ? "scale-110" : ""
                        }`}
                      />
                    </div>
                    <div className="text-center">
                      <h4
                        className={`text-sm font-medium mb-1 line-clamp-2 ${
                          idx === activeIndex ? "text-white" : "text-gray-300"
                        } transition-colors duration-300`}
                      >
                        {org.acronym}
                      </h4>
                      <p className="text-xs text-gray-500 line-clamp-2">
                        {org.name}
                      </p>
                    </div>

                    {/* Visual indicator for active card */}
                    {idx === activeIndex && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-red-500 rounded-t-full"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress indicator */}
        <div className="mt-12 flex justify-center">
          <div className="flex space-x-2">
            {organizations.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveOrg(idx)}
                className={`transition-all duration-300 ease-in-out ${
                  idx === activeIndex
                    ? "w-8 h-2 bg-gradient-to-r from-red-500 to-yellow-500"
                    : "w-2 h-2 bg-gray-700 hover:bg-gray-600"
                } rounded-full`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
