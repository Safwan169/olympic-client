// import React from "react";
// import "swiper/css";
// import { Swiper, SwiperSlide } from "swiper/react";

// import image2 from "../../../assets/distribution.png";
// import image1 from "../../../assets/innovation.jpg";
// import image3 from "../../../assets/quality.jpg";

// const CarouselComponent = () => {
//   const slides = [
//     {
//       title: "INNOVATION",
//       description: "Discover new ways to innovate.",
//       image: image1,
//     },
//     {
//       title: "DISTRIBUTION",
//       description: "Explore our extensive network.",
//       image: image2,
//     },
//     {
//       title: "QUALITY",
//       description: "Ensuring the highest quality standards.",
//       image: image3,
//     },
//   ];

//   return (
//     <Swiper slidesPerView={1.5} loop={true} autoplay={{ delay: 3000 }}>
//       {slides.map((slide, index) => (
//         <SwiperSlide key={index}>
//           <div
//             className="relative bg-red-500 w-full min-h-[300px] border-2"
//             style={{
//               backgroundImage: `url(${slide.image})`,
//               backgroundColor: "#1a1a1a", // Explicitly setting a dark background
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           >
//             <div className="absolute inset-0 bg-black opacity-50"></div>
//             <div className="absolute bottom-0 left-0 p-6">
//               <h2 className="text-white text-2xl font-bold">{slide.title}</h2>
//               <p className="text-white text-sm mb-2">{slide.description}</p>
//               <button className="bg-red-500 text-white px-4 py-2 text-sm hover:bg-red-600">
//                 See More →
//               </button>
//             </div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default CarouselComponent;

import React, { useState } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import image2 from "../../../assets/distribution.png";
import image1 from "../../../assets/innovation.jpg";
import image3 from "../../../assets/quality.jpg";

const CarouselComponent = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const slides = [
    {
      title: "INNOVATION",
      description: "Discover new ways to innovate.",
      image: image1,
    },
    {
      title: "DISTRIBUTION",
      description: "Explore our extensive network.",
      image: image2,
    },
    {
      title: "QUALITY",
      description: "Ensuring the highest quality standards.",
      image: image3,
    },
  ];

  return (
    <div className="carousel-container relative mx-auto bg-black">
      <Swiper
        slidesPerView={1.5}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet bg-red-500 opacity-50",
          bulletActiveClass:
            "swiper-pagination-bullet-active bg-red-600 opacity-100",
        }}
        className="pb-12" // Space for pagination
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="group relative w-full min-h-[400px] overflow-hidden border border-gray-800 transition-all duration-500 ease-in-out"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundColor: "#0a0a0a",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay with hover effect */}
              <div
                className={`absolute inset-0 bg-black transition-opacity duration-500 ease-in-out ${
                  hoveredIndex === index ? "opacity-40" : "opacity-60"
                }`}
              ></div>

              {/* Content container with animation */}
              <div className="absolute bottom-0 left-0 w-full p-6 transform transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                {/* Decorative gold line */}
                <div
                  className={`w-12 h-1 bg-yellow-600 mb-4 transition-all duration-500 ease-in-out ${
                    hoveredIndex === index ? "w-24" : "w-12"
                  }`}
                ></div>

                {/* Title with animation */}
                <h2 className="text-white text-3xl font-bold mb-2 tracking-wider transform transition-all duration-500 ease-in-out group-hover:text-red-500">
                  {slide.title}
                </h2>

                {/* Description with animation */}
                <p className="text-gray-300 text-sm mb-6 max-w-md transform transition-all duration-500 opacity-80 group-hover:opacity-100">
                  {slide.description}
                </p>

                {/* Button with animation */}
                <button className="bg-red-600 text-white px-6 py-3 text-sm font-medium flex items-center space-x-2 transform transition-all duration-500 ease-in-out border-b-2 border-yellow-600 hover:bg-red-700 hover:border-yellow-500 hover:shadow-lg">
                  <span>See More</span>
                  <span className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>

              {/* Gold accent in corner */}
              <div className="absolute top-0 right-0 w-16 h-16">
                <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
                  <div className="absolute transform rotate-45 bg-gradient-to-r from-yellow-600 to-yellow-700 w-24 h-4 -top-12 right-8"></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselComponent;
