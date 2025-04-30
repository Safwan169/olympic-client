/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import badgeImg from "../../../assets/hero/download.png"; // Adjust path as needed

export default function DynamicSlider() {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [zoomingIn, setZoomingIn] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    "https://olympicbd.com/wp-content/uploads/2016/06/2.jpg",
    "https://olympicbd.com/wp-content/uploads/2016/06/3.jpg",
    "https://olympicbd.com/wp-content/uploads/2016/06/4.jpg",
    "https://olympicbd.com/wp-content/uploads/2016/06/DSC1105-long2.jpg",
  ];

  // Faster zoom and image transition
  useEffect(() => {
    const zoomStep = 0.003; // Increased zoom step for faster transition
    const interval = setInterval(() => {
      setZoomLevel((prevZoom) => {
        if (zoomingIn) {
          if (prevZoom >= 1.15) {
            setZoomingIn(false);
            return prevZoom;
          }
          return prevZoom + zoomStep;
        } else {
          if (prevZoom <= 1) {
            setZoomingIn(true);
            setCurrentImageIndex(
              (prevIndex) => (prevIndex + 1) % backgroundImages.length
            );
            return prevZoom;
          }
          return prevZoom - zoomStep;
        }
      });
    }, 30); // Reduced interval from 50ms to 30ms for faster updates

    return () => clearInterval(interval);
  }, [zoomingIn, backgroundImages.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image Layer with Crossfade */}
      <div className="absolute inset-0 w-full h-full">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100 z-0" : "opacity-0 z-0"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: `scale(${
                index === currentImageIndex ? zoomLevel : 1
              })`,
              transition: "transform 0.2s linear",
              filter: "brightness(50%)",
            }}
          />
        ))}
      </div>

      {/* Foreground Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="h-60 mt-10"
          src={badgeImg}
          alt="badge"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6"
        >
          <h1 className="text-white text-5xl md:text-4xl font-bold leading-tight">
            Ranked #1 by global retail <br /> partners for 10 straight years
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8"
        >
          <button className="bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold py-3 px-10 rounded-full shadow-md hover:shadow-red-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
            Read More
          </button>
        </motion.div>
      </div>
    </div>
  );
}
