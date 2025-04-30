import React from "react";
import DelightsSection from "../../componants/Home/DelightsSection";
import Hero from "../../componants/Home/hero/Hero";
import OlympicAtGlance from "../../componants/Home/OlympicAtGlance";
import GrowthSection from "../../componants/Home/GrowthSection";
import AwardSection from "../../componants/Home/AwardSection";

const Home = () => {
  return (
    <div className=" text-red-400 ">
      <Hero />
      <OlympicAtGlance />
      <AwardSection />
      <GrowthSection />
      <DelightsSection />
    </div>
  );
};

export default Home;
