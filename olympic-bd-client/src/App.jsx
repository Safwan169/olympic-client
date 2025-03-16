import "./App.css";
import CarouselComponent from "./componants/CarouselComponent";
import Footer from "./componants/Footer";
import Navbar from "./componants/Navbar/Navbar";
import Hero from "./componants/hero/Hero"
import Activity from "./pages/Activity";
import Careers from "./pages/Careers";
import CorporateGovernance from "./pages/CorporateGovernance";
import Exports from "./pages/Exports";
import FullReport from "./pages/FullReport";
import Overview from "./pages/Overview";
import PressReleases from "./pages/PressRealeases";
import ShareStructure from "./pages/ShareStructure";
import StrategyAndInnovation from "./pages/StrategyAndInnovation";
import SustainabilityOverview from "./pages/SustainabilityOverview";
import VideoGallery from "./pages/VideoGallery";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CarouselComponent />
      <Footer />
      <Exports/>
    </>
  );
}

export default App;
