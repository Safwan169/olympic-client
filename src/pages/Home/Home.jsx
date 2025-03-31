import React from "react";
import CarouselComponent from "../../componants/Home/CarouselComponents.jsx/CarouselComponent";
import DelightsSection from "../../componants/Home/DelightsSection";
import DesiredBrands from "../../componants/Home/DesiredBrands";
import Hero from "../../componants/Home/hero/Hero";

const Home = () => {
  return (
    <div className=" text-red-400 ">
      <Hero />
      <CarouselComponent />
      <DesiredBrands />
      <DelightsSection />
    </div>
  );
};

export default Home;
