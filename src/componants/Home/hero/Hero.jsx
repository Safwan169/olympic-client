import { useState, useEffect } from "react";
import badgeImg from "../../../assets/hero/download.png";

export default function DynamicSlider() {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [zoomingIn, setZoomingIn] = useState(true);

  // Images for the slider background (you would replace these with your actual images)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const backgroundImages = [
    "https://olympicbd.com/wp-content/uploads/2016/06/2.jpg",
    "https://olympicbd.com/wp-content/uploads/2016/06/3.jpg",
    "https://olympicbd.com/wp-content/uploads/2016/06/4.jpg",
    "https://olympicbd.com/wp-content/uploads/2016/06/DSC1105-long2.jpg",
  ];

  // Handle zoom effect
  useEffect(() => {
    const zoomInterval = setInterval(() => {
      if (zoomingIn) {
        setZoomLevel((prev) => {
          if (prev >= 1.15) {
            setZoomingIn(false);
            return prev;
          }
          return prev + 0.001;
        });
      } else {
        setZoomLevel((prev) => {
          if (prev <= 1) {
            setZoomingIn(true);
            // Change image when zoom resets
            setCurrentImageIndex(
              (prevIndex) => (prevIndex + 1) % backgroundImages.length
            );
            return prev;
          }
          return prev - 0.001;
        });
      }
    }, 50);

    return () => clearInterval(zoomInterval);
  }, [zoomingIn, backgroundImages.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image with zoom effect */}
      <div
        className="absolute brightness-50 inset-0 w-full h-full transition-transform duration-200 ease-linear"
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `scale(${zoomLevel})`,
        }}
      />

      {/* Content text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 px-4">
        <img className="h-60 mt-10" src={badgeImg} alt="badge image" />

        <div className="mt-4">
          <h1 className="text-white text-5xl md:text-4xl font-bold text-center leading-tight">
            Ranked #1 by global retail
            <br />
            partners for 10 straight years
          </h1>
          <div className="flex justify-center mt-6">
            <button className="relative bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold py-3 px-10 rounded-full shadow-md hover:shadow-red-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
