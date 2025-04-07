// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Import autoplay styles

import "./styles.css";
// Import required modules
import { Navigation, Autoplay } from "swiper/modules";

// Import images
import slide1 from "/assets/slide1.png";
import slide2 from "/assets/slide1.png";
import slide3 from "/assets/slide1.png";

export default function Hero() {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="mySwiper w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[650px]"
    >
      <SwiperSlide>
        <img
          src={slide1}
          alt="Slide 1"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slide2}
          alt="Slide 2"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slide3}
          alt="Slide 3"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
}
