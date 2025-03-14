// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Import autoplay styles

import "./styles.css";
// Import required modules
import { Navigation, Autoplay } from "swiper/modules";


// Import images
import slide1 from './slide1.png';
import slide2 from './slide2.png';
import slide3 from './slide1.png';

export default function Hero() {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 3000, // 1 second delay
        disableOnInteraction: false, // Continue autoplay even after manual interaction
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={slide1} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="Slide 3" />
      </SwiperSlide>
    </Swiper>
  );
}
