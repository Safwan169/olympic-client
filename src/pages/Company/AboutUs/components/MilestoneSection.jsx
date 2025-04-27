/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Define milestone data structure - keeping the same data but sorted chronologically
const milestoneData = [
  {
    id: 8,
    date: "July 2010",
    title: "KPSE Award for highest VAT reproduction ration for 2024-2025",
    icon: "award",
    color: "purple",
  },
  {
    id: 5,
    date: "November 2015",
    title: "Commencement of traffic focus on lieu production",
    icon: "zap",
    color: "red",
  },
  {
    id: 2,
    date: "February 2017",
    title: "Received CFO status in the large-scale industrial category",
    icon: "award",
    color: "blue",
  },
  {
    id: 3,
    date: "January 2017",
    title: "Commencement of IPT plant farming and crop holding operations",
    icon: "file",
    color: "blue",
  },
  {
    id: 4,
    date: "January 2017",
    title:
      "Decision to import specialized needles, stacks and carrier lines with increased battery production capacity",
    icon: "package",
    color: "golden",
  },
  {
    id: 1,
    date: "May 2017",
    title: "Commencement of nanotechnology production",
    icon: "flask",
    color: "red",
  },
  {
    id: 14,
    date: "March 2020",
    title: "HACCP Certification",
    icon: "shield",
    color: "navy",
  },
  {
    id: 13,
    date: "September 2020",
    title: "3rd Recoil Production Line",
    icon: "layers",
    color: "blue",
  },
  {
    id: 7,
    date: "December 2021",
    title: "Decision to import CFL Production Line",
    icon: "droplet",
    color: "blue",
  },
  {
    id: 11,
    date: "August 2022",
    title: "4th Recoil Production Line",
    icon: "package",
    color: "golden",
  },
  {
    id: 12,
    date: "July 2022",
    title: "KPSE Award for highest VAT reproduction ration for 2021-2022",
    icon: "award",
    color: "red",
  },
  {
    id: 10,
    date: "February 2024",
    title: "ISO 9001 Certification",
    icon: "file",
    color: "blue",
  },
  {
    id: 6,
    date: "May 2024",
    title: "Decision to import off Re-roll and Coater Line",
    icon: "users",
    color: "navy",
  },
  {
    id: 9,
    date: "October 2024",
    title: "5th and 6th Recoil Production Line",
    icon: "layers",
    color: "blue",
  },
];

// Icons component
const Icon = ({ name, color }) => {
  const getIcon = () => {
    switch (name) {
      case "flask":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 3h6v4l4 8-4 2H9l-4-2 4-8V3z"></path>
          </svg>
        );
      case "award":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="8" r="7"></circle>
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
          </svg>
        );
      case "file":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        );
      case "package":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
        );
      case "zap":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
        );
      case "users":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        );
      case "droplet":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
          </svg>
        );
      case "layers":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 17 12 22 22 17"></polyline>
            <polyline points="2 12 12 17 22 12"></polyline>
          </svg>
        );
      case "shield":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        );
      case "chevron-down":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        );
      case "chevron-up":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        );
      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        );
    }
  };

  const getColorClass = () => {
    switch (color) {
      case "red":
        return "bg-gradient-to-br from-red-600 to-red-800 text-white";
      case "blue":
        return "bg-gradient-to-br from-blue-500 to-blue-700 text-white";
      case "golden":
        return "bg-gradient-to-br from-yellow-400 to-yellow-600 text-black";
      case "navy":
        return "bg-gradient-to-br from-gray-700 to-gray-900 text-white";
      case "purple":
        return "bg-gradient-to-br from-purple-500 to-purple-800 text-white";
      default:
        return "bg-gradient-to-br from-gray-500 to-gray-700 text-white";
    }
  };

  return (
    <div
      className={`p-4 rounded-full ${getColorClass()} flex items-center justify-center shadow-lg shadow-black/30`}
    >
      {getIcon()}
    </div>
  );
};

export default function MilestoneSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [filterYear, setFilterYear] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Initial item count to display
  const initialItemCount = 5;

  // Get unique years from milestone data
  const years = [
    ...new Set(milestoneData.map((item) => item.date.split(" ")[1])),
  ].sort();

  // Filter milestones based on selected year
  const filteredMilestones =
    filterYear === "all"
      ? milestoneData
      : milestoneData.filter((item) => item.date.includes(filterYear));

  // Determine which milestones to display based on showAll state
  const displayedMilestones = showAll
    ? filteredMilestones
    : filteredMilestones.slice(0, initialItemCount);

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0.8, 1, 1, 0.8]
  );

  // Reset showAll when filter changes
  useEffect(() => {
    setShowAll(false);
  }, [filterYear]);

  return (
    <div
      className="hidden bg-gradient-to-b from-black mt-14 via-gray-900 to-black min-h-screen p-8 text-white"
      ref={containerRef}
    >
      {/* Floating particles background effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-20"
            style={{
              width: Math.random() * 6 + 2 + "px",
              height: Math.random() * 6 + 2 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0.2, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        ))}
      </div>

      <motion.div style={{ opacity, scale }} className="relative z-10">
        {/* Header with animated elements */}
        <div className="mb-16 text-center">
          <motion.h1
            className="text-5xl font-bold relative inline-block"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-red-500">
              MILESTONES
            </span>
            <motion.div
              className="h-1 w-full bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 mt-2"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            ></motion.div>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-400 max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Our journey through innovation and excellence
          </motion.p>
        </div>

        {/* Year filter navigation */}
        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <button
            onClick={() => setFilterYear("all")}
            className={`px-4 py-2 rounded-full transition-all ${
              filterYear === "all"
                ? "bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            All Years
          </button>
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setFilterYear(year)}
              className={`px-4 py-2 rounded-full transition-all ${
                filterYear === year
                  ? "bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              {year}
            </button>
          ))}
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Animated timeline center line with glowing effect */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-600 via-yellow-500 to-red-600 rounded-full">
            <div className="absolute inset-0 bg-white/20 blur-sm"></div>
          </div>

          {/* Milestones */}
          {displayedMilestones.map((milestone, index) => {
            // Calculate scroll triggered animation
            const delay = index * 0.1;

            return (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay }}
                className="relative mb-20"
              >
                <div className={`flex flex-col md:flex-row items-center`}>
                  {/* Content */}
                  <div
                    className={`w-full md:w-5/12 mb-4 md:mb-0 ${
                      index % 2 === 0
                        ? "md:pr-12 md:text-right order-2 md:order-1"
                        : "md:pl-12 order-2 md:order-3"
                    }`}
                  >
                    <motion.div
                      className={`p-6 rounded-xl bg-black/30 backdrop-blur-sm border border-gray-800
                        transition-all duration-300 hover:shadow-xl relative
                        ${
                          activeIndex === index
                            ? "shadow-lg shadow-red-900/20"
                            : ""
                        }`}
                      whileHover={{
                        scale: 1.03,
                        boxShadow:
                          "0 10px 25px -5px rgba(220, 38, 38, 0.2), 0 8px 10px -6px rgba(220, 38, 38, 0.2)",
                      }}
                      onMouseEnter={() => setActiveIndex(index)}
                      onMouseLeave={() => setActiveIndex(null)}
                    >
                      {/* Color indicator */}
                      <div
                        className={`absolute inset-0 rounded-xl ${
                          milestone.color === "red"
                            ? "border-red-600"
                            : milestone.color === "golden"
                            ? "border-yellow-500"
                            : milestone.color === "blue"
                            ? "border-blue-500"
                            : milestone.color === "purple"
                            ? "border-purple-500"
                            : "border-gray-500"
                        } border-2 opacity-20`}
                      ></div>

                      <h3 className="font-bold text-xl mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{milestone.date}</p>
                    </motion.div>
                  </div>

                  {/* Center icon with animation */}
                  <div className="w-full md:w-2/12 flex justify-center relative z-10 order-1 md:order-2 mb-4 md:mb-0">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="relative"
                    >
                      {/* Pulse animation ring */}
                      {activeIndex === index && (
                        <motion.div
                          className="absolute inset-0 rounded-full bg-white opacity-20"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.2, 0, 0.2],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop",
                          }}
                        />
                      )}
                      <Icon name={milestone.icon} color={milestone.color} />
                    </motion.div>

                    {/* Connecting line for mobile */}
                    <div className="md:hidden absolute h-full w-px bg-gray-800 -z-10"></div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div
                    className={`hidden md:block w-5/12 ${
                      index % 2 === 0 ? "order-3" : "order-1"
                    }`}
                  ></div>
                </div>

                {/* Year indicator for important events */}
                {(index === 0 ||
                  milestone.date.split(" ")[1] !==
                    displayedMilestones[index - 1]?.date.split(" ")[1]) && (
                  <motion.div
                    className="absolute -left-16 top-0 hidden lg:block"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: delay + 0.2 }}
                  >
                    <div className="text-3xl font-bold text-yellow-500 opacity-70">
                      {milestone.date.split(" ")[1]}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}

          {/* View More/Less Button */}
          {filteredMilestones.length > initialItemCount && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center mt-6 mb-12"
            >
              <motion.button
                onClick={() => setShowAll(!showAll)}
                className="group px-6 py-3 z-10 rounded-full bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold flex items-center gap-2 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{showAll ? "View Less" : "View More"}</span>
                <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:bg-white/20"></div>
                {!showAll && (
                  <motion.span
                    className="ml-1 bg-white/20 px-2 rounded-full text-sm"
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  >
                    {filteredMilestones.length - initialItemCount}+
                  </motion.span>
                )}
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
