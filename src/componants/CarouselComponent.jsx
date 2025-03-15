import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import image1 from "../assets/innovation.jpg";
import image2 from "../assets/distribution.png";
import image3 from "../assets/quality.jpg";

const CarouselComponent = () => {
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
    <Swiper slidesPerView={1.5} loop={true} autoplay={{ delay: 3000 }}>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="relative bg-red-500 w-full min-h-[300px] border-2"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundColor: "#1a1a1a", // Explicitly setting a dark background
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h2 className="text-white text-2xl font-bold">{slide.title}</h2>
              <p className="text-white text-sm mb-2">{slide.description}</p>
              <button className="bg-red-500 text-white px-4 py-2 text-sm hover:bg-red-600">
                See More →
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselComponent;
