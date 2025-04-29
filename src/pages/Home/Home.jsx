import React from "react";
import DelightsSection from "../../componants/Home/DelightsSection";
import Hero from "../../componants/Home/hero/Hero";
import OlympicAtGlance from "../../componants/Home/OlympicAtGlance";
import GrowthSection from "../../componants/Home/GrowthSection";
import AwardsSection from "../../componants/Home/AwardsSection";
import GlobalPresence from "../Exports/GlobalPresence";

const Home = () => {
  return (
    <div className=" text-red-400 ">
      <Hero />
      <OlympicAtGlance />
      <div className="-mt-14">
        <AwardsSection />
      </div>
      <GrowthSection />
      <DelightsSection />
    </div>
  );
};

export default Home;
