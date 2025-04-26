import React from "react";
import CarouselComponent from "../../componants/Home/CarouselComponents.jsx/CarouselComponent";
import DelightsSection from "../../componants/Home/DelightsSection";
import DesiredBrands from "../../componants/Home/DesiredBrands";
import Hero from "../../componants/Home/hero/Hero";
import OlympicAtGlance from "../../componants/Home/OlympicAtGlance";
import GrowthSection from "../../componants/Home/GrowthSection";
import AwardsSection from "../../componants/Home/AwardsSection";

const Home = () => {
  return (
    <div className=" text-red-400 ">
      <Hero />
      {/* <CarouselComponent /> */}
      <OlympicAtGlance />
      <DesiredBrands />
      <AwardsSection />
      <GrowthSection />
      <DelightsSection />
    </div>
  );
};

export default Home;
