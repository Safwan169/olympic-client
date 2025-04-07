import React from "react";
import HistorySection from "./components/HistorySection";
import MilestoneSection from "./components/MilestoneSection";
import MissionStatementSection from "./components/MissionStatementSection";
import ValuesSection from "./components/ValuesSection";
import MemberShipSection from "./components/MemberShipSection";

const AboutUs = () => {
  return (
    <div>
      <HistorySection />
      <MilestoneSection />
      <MissionStatementSection />
      <ValuesSection />
      <MemberShipSection />
    </div>
  );
};

export default AboutUs;
