/* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

// import image2 from "../../../assets/distribution.png";
// import image1 from "../../../assets/innovation.jpg";
// import image3 from "../../../assets/quality.jpg";

// const EnhancedCarouselComponent = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [slidesPerView, setSlidesPerView] = useState(1.5);
//   const [isAutoplay, setIsAutoplay] = useState(true);

//   // Responsive slides per view based on screen width
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) {
//         setSlidesPerView(1);
//       } else if (window.innerWidth < 1024) {
//         setSlidesPerView(1.2);
//       } else {
//         setSlidesPerView(1.5);
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const slides = [
//     {
//       title: "INNOVATION",
//       description:
//         "Discover cutting-edge solutions and forward-thinking approaches that transform industries and elevate business performance.",
//       image: image1,
//       icon: "✦",
//     },
//     {
//       title: "DISTRIBUTION",
//       description:
//         "Access our global network of partners and streamlined logistics to ensure your products reach markets efficiently and effectively.",
//       image: image2,
//       icon: "⟐",
//     },
//     {
//       title: "QUALITY",
//       description:
//         "Experience excellence with our unwavering commitment to the highest quality standards in every aspect of our service.",
//       image: image3,
//       icon: "◈",
//     },
//   ];

//   const toggleAutoplay = () => {
//     setIsAutoplay(!isAutoplay);
//   };

//   return (
//     <div className="carousel-container relative mx-auto w-full bg-gray-900 rounded-lg overflow-hidden">
//       {/* Accessibility controls */}
//       <div className="flex justify-between items-center px-4 py-2 bg-gray-800">
//         <h2 className="text-white font-medium">Featured Services</h2>
//         <div className="flex items-center space-x-4">
//           <button
//             onClick={toggleAutoplay}
//             className="text-xs text-white bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-full flex items-center"
//             aria-label={isAutoplay ? "Pause autoplay" : "Start autoplay"}
//           >
//             {isAutoplay ? "⏸ Pause" : "▶ Play"}
//           </button>
//           <div className="text-white text-xs">
//             {activeIndex + 1} / {slides.length}
//           </div>
//         </div>
//       </div>

//       <Swiper
//         modules={[Autoplay, Pagination, Navigation, EffectFade]}
//         slidesPerView={slidesPerView}
//         spaceBetween={16}
//         loop={true}
//         autoplay={
//           isAutoplay
//             ? {
//                 delay: 5000,
//                 disableOnInteraction: false,
//               }
//             : false
//         }
//         pagination={{
//           clickable: true,
//           bulletClass: "swiper-pagination-bullet bg-gray-400 opacity-50",
//           bulletActiveClass:
//             "swiper-pagination-bullet-active bg-red-500 opacity-100",
//           renderBullet: function (index, className) {
//             return `<span class="${className}" aria-label="Go to slide ${
//               index + 1
//             }">${slides[index].icon}</span>`;
//           },
//         }}
//         navigation={{
//           prevEl: ".swiper-button-prev",
//           nextEl: ".swiper-button-next",
//         }}
//         onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//         className="pb-12"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="group relative w-full h-full overflow-hidden border border-gray-700 rounded-lg shadow-lg transition-all duration-500 ease-in-out"
//               style={{
//                 backgroundImage: `url(${slide.image})`,
//                 backgroundColor: "#0a0a0a",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 minHeight: "350px",
//                 height: "calc(50vh - 2rem)",
//                 maxHeight: "500px",
//               }}
//             >
//               {/* Gradient overlay for better text readability */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent transition-opacity duration-500 ease-in-out opacity-70 group-hover:opacity-50"></div>

//               {/* Content container with animation */}
//               <div className="absolute bottom-0 left-0 w-full p-6 transform transition-all duration-500 ease-in-out">
//                 {/* Icon badge */}
//                 <div className="inline-block bg-red-600 text-white p-2 rounded-full mb-4 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
//                   <span className="text-xl">{slide.icon}</span>
//                 </div>

//                 {/* Title with animation */}
//                 <h3 className="text-white text-2xl font-bold mb-2 tracking-wider transform transition-all duration-500 ease-in-out group-hover:translate-x-2">
//                   {slide.title}
//                 </h3>

//                 {/* Gold accent line */}
//                 <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mb-4 transition-all duration-500 ease-in-out group-hover:w-24"></div>

//                 {/* Description with animation */}
//                 <p className="text-gray-200 text-sm mb-6 max-w-md transform transition-all duration-500 opacity-90 group-hover:opacity-100">
//                   {slide.description}
//                 </p>

//                 {/* Button with improved accessibility */}
//                 <button
//                   className="bg-red-600 text-white px-6 py-3 text-sm font-medium flex items-center space-x-2 rounded-md transform transition-all duration-300 ease-in-out border-b-2 border-yellow-600 hover:bg-red-700 focus:ring-2 focus:ring-yellow-400 focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-900"
//                   aria-label={`Learn more about ${slide.title.toLowerCase()}`}
//                 >
//                   <span>Explore More</span>
//                   <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-1">
//                     →
//                   </span>
//                 </button>
//               </div>

//               {/* Interactive indicator */}
//               <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//                 Interactive
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Custom navigation buttons */}
//       <div
//         className="swiper-button-prev absolute left-4 top-1/2 z-10 flex items-center justify-center w-10 h-10 bg-black/50 backdrop-blur-sm text-white rounded-full cursor-pointer hover:bg-red-600 transition-colors duration-300"
//         aria-label="Previous slide"
//       >
//         ←
//       </div>
//       <div
//         className="swiper-button-next absolute right-4 top-1/2 z-10 flex items-center justify-center w-10 h-10 bg-black/50 backdrop-blur-sm text-white rounded-full cursor-pointer hover:bg-red-600 transition-colors duration-300"
//         aria-label="Next slide"
//       >
//         →
//       </div>
//     </div>
//   );
// };

// export default EnhancedCarouselComponent;

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import image2 from "../../../assets/distribution.png";
import image1 from "../../../assets/innovation.jpg";
import image3 from "../../../assets/quality.jpg";

const LuxuryDarkCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const autoPlayRef = useRef(null);
  const progressRef = useRef(null);
  const progressBarRef = useRef(null);

  // Theme Colors
  const colors = {
    black: "#0A0A0A",
    darkGray: "#1A1A1A",
    red: "#D9000D",
    gold: "#D4AF37",
    goldLight: "#F2D57E",
    white: "#FFFFFF",
  };

  const slides = [
    {
      title: "INNOVATION",
      description:
        "Pioneering solutions that redefine industry standards and elevate your business to new heights of success.",
      image: image1,
    },
    {
      title: "DISTRIBUTION",
      description:
        "Seamless global reach through our exclusive network, ensuring your products arrive precisely when and where they're needed.",
      image: image2,
    },
    {
      title: "QUALITY",
      description:
        "Uncompromising excellence in every detail, meticulously crafted to exceed the expectations of the most discerning clients.",
      image: image3,
    },
  ];

  // Progress animation
  useEffect(() => {
    if (isAutoPlaying && !isHovering) {
      resetProgressBar();
    }
  }, [currentIndex, isAutoPlaying, isHovering]);

  // Handle autoplay
  useEffect(() => {
    if (isAutoPlaying && !isHovering) {
      autoPlayRef.current = setTimeout(() => {
        goToNext();
      }, 6000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [currentIndex, isAutoPlaying, isHovering]);

  const resetProgressBar = () => {
    if (progressBarRef.current) {
      progressBarRef.current.style.transition = "none";
      progressBarRef.current.style.width = "0%";

      setTimeout(() => {
        if (progressBarRef.current) {
          progressBarRef.current.style.transition = "width 6s linear";
          progressBarRef.current.style.width = "100%";
        }
      }, 10);
    }
  };

  const goToPrevious = () => {
    if (autoPlayRef.current) clearTimeout(autoPlayRef.current);
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    if (autoPlayRef.current) clearTimeout(autoPlayRef.current);
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    if (autoPlayRef.current) clearTimeout(autoPlayRef.current);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
    if (!isAutoPlaying) {
      resetProgressBar();
    }
  };

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    }),
  };

  // Text animation variants
  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div
      className="w-full bg-black py-16 px-4"
      style={{ backgroundColor: colors.black }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Main heading with gold accents */}
      <div className="max-w-6xl mx-auto mb-12 text-center relative">
        {/* Decorative elements */}
        <div
          className="absolute left-1/2 -top-6 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"
          style={{
            backgroundColor: "transparent",
            backgroundImage: `linear-gradient(90deg, transparent, ${colors.gold}, transparent)`,
          }}
        ></div>

        <h2
          className="text-3xl md:text-5xl font-bold mb-3"
          style={{ color: colors.white }}
        >
          <span style={{ color: colors.red }}>Premium</span> Services
        </h2>

        <p
          className="text-sm md:text-base opacity-80"
          style={{ color: colors.goldLight }}
        >
          EXCELLENCE IN EVERY DETAIL
        </p>

        <div
          className="absolute left-1/2 -bottom-6 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"
          style={{
            backgroundColor: "transparent",
            backgroundImage: `linear-gradient(90deg, transparent, ${colors.gold}, transparent)`,
          }}
        ></div>
      </div>

      {/* Carousel container */}
      <div
        className="relative max-w-6xl mx-auto overflow-hidden"
        style={{
          height: "600px",
          borderRadius: "4px",
          boxShadow: `0 10px 30px rgba(0,0,0,0.5)`,
        }}
      >
        {/* Progress bar */}
        <div
          ref={progressRef}
          className="absolute top-0 left-0 w-full h-1 bg-gray-800 z-20"
        >
          {isAutoPlaying && !isHovering && (
            <div
              ref={progressBarRef}
              className="h-full"
              style={{
                width: "0%",
                backgroundColor: colors.red,
                transition: "width 6s linear",
                boxShadow: `0 0 8px ${colors.red}`,
              }}
            ></div>
          )}
        </div>

        {/* Slide content */}
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slides[currentIndex].image})`,
                backgroundPosition: "center",
                filter: "brightness(0.4)",
              }}
            >
              {/* Image overlay gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(45deg, ${colors.black} 0%, transparent 70%)`,
                }}
              ></div>
            </div>

            {/* Gold decorative line */}
            <div
              className="absolute top-12 left-12 w-20 h-1"
              style={{ backgroundColor: colors.gold }}
            ></div>

            {/* Content container */}
            <div className="absolute bottom-0 left-0 w-full p-12 md:p-16">
              <div className="max-w-2xl">
                {/* Animated sequence of content */}
                <motion.span
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  className="inline-block mb-6 font-light tracking-widest text-sm"
                  style={{ color: colors.goldLight }}
                >
                  0{currentIndex + 1} /{" "}
                  {slides.length < 10 ? `0${slides.length}` : slides.length}
                </motion.span>

                <motion.h3
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  className="text-4xl md:text-6xl font-bold mb-6"
                  style={{ color: colors.white }}
                >
                  {slides[currentIndex].title}
                  <span style={{ color: colors.red }}>.</span>
                </motion.h3>

                <motion.div
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  className="w-32 h-1 mb-8"
                  style={{ backgroundColor: colors.red }}
                ></motion.div>

                <motion.p
                  custom={3}
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  className="text-lg md:text-xl mb-10 max-w-lg leading-relaxed"
                  style={{ color: colors.white, opacity: 0.9 }}
                >
                  {slides[currentIndex].description}
                </motion.p>

                <motion.div
                  custom={4}
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                >
                  <button
                    className="group relative inline-flex items-center overflow-hidden px-8 py-4 font-medium tracking-wider"
                    style={{
                      backgroundColor: "transparent",
                      border: `1px solid ${colors.gold}`,
                      color: colors.gold,
                    }}
                  >
                    {/* Button hover effect */}
                    <span
                      className="absolute inset-0 transform translate-y-full bg-gradient-to-t transition-transform duration-300 ease-out group-hover:translate-y-0"
                      style={{
                        backgroundImage: `linear-gradient(to top, ${colors.red}, ${colors.red}CC)`,
                      }}
                    ></span>

                    <span className="relative flex items-center justify-center group-hover:text-white transition-colors duration-300">
                      DISCOVER MORE
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation controls - slide indicators */}
        <div className="absolute bottom-12 right-12 z-10 flex items-center space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group relative w-3 h-3 rounded-full transition-all duration-500 overflow-hidden"
              style={{
                backgroundColor:
                  currentIndex === index ? colors.gold : colors.darkGray,
                transform: currentIndex === index ? "scale(1.2)" : "scale(1)",
                opacity: currentIndex === index ? 1 : 0.6,
              }}
              aria-label={`Go to slide ${index + 1}`}
            >
              {/* Hover effect */}
              <span
                className="absolute inset-0 rounded-full transform scale-0 transition-transform duration-300 group-hover:scale-100"
                style={{ backgroundColor: colors.gold }}
              ></span>
            </button>
          ))}
        </div>

        {/* Side navigation */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between items-center z-10">
          <button
            onClick={goToPrevious}
            className="group flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full transition-all duration-300"
            style={{
              backgroundColor: "rgba(10,10,10,0.7)",
              backdropFilter: "blur(4px)",
              border: `1px solid rgba(212,175,55,0.3)`,
            }}
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6 transform transition-all duration-300 group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ color: colors.gold }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="group flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full transition-all duration-300"
            style={{
              backgroundColor: "rgba(10,10,10,0.7)",
              backdropFilter: "blur(4px)",
              border: `1px solid rgba(212,175,55,0.3)`,
            }}
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6 transform transition-all duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ color: colors.gold }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Autoplay toggle button */}
        <button
          onClick={toggleAutoPlay}
          className="absolute bottom-12 left-12 z-10 flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300"
          style={{
            backgroundColor: isAutoPlaying ? colors.red : "rgba(10,10,10,0.7)",
            border: `1px solid ${
              isAutoPlaying ? colors.red : "rgba(212,175,55,0.3)"
            }`,
          }}
          aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isAutoPlaying ? (
            <svg
              className="w-4 h-4"
              fill="currentColor"
              style={{ color: colors.white }}
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M10 18V6a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm7-1V7a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="w-4 h-4"
              fill="currentColor"
              style={{ color: colors.gold }}
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M10 18l8-6-8-6v12z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Service quick links */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {slides.map((slide, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative overflow-hidden cursor-pointer"
            style={{
              backgroundColor: colors.darkGray,
              borderLeft:
                currentIndex === index
                  ? `2px solid ${colors.red}`
                  : `2px solid transparent`,
              padding: "2rem",
              transition: "all 0.3s ease",
            }}
          >
            {/* Background hover effect */}
            <div
              className="absolute inset-0 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0"
              style={{
                backgroundImage: `linear-gradient(135deg, ${colors.darkGray} 0%, ${colors.darkGray} 50%, rgba(217,0,13,0.2) 100%)`,
              }}
            ></div>

            {/* Content */}
            <div className="relative z-10">
              {/* Number indicator */}
              <span
                className="block text-6xl font-bold opacity-10 absolute top-0 right-0 leading-none"
                style={{
                  color: currentIndex === index ? colors.red : colors.gold,
                }}
              >
                0{index + 1}
              </span>

              <div
                className="w-8 h-1 mb-4"
                style={{ backgroundColor: colors.gold }}
              ></div>

              <h4
                className="text-xl font-bold mb-3 group-hover:translate-x-2 transition-transform duration-300"
                style={{ color: colors.white }}
              >
                {slide.title}
              </h4>

              <p
                className="text-sm opacity-70 mb-6"
                style={{ color: colors.white }}
              >
                {slide.description.split(" ").slice(0, 8).join(" ")}...
              </p>

              <span
                className="inline-flex items-center text-sm font-medium group-hover:translate-x-2 transition-transform duration-300"
                style={{ color: colors.gold }}
              >
                SELECT
                <svg
                  className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ color: colors.gold }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LuxuryDarkCarousel;
