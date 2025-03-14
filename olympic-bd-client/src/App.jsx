import "./App.css";
import CarouselComponent from "./componants/CarouselComponent";
import Footer from "./componants/Footer";
import Navbar from "./componants/Navbar/Navbar";
import Hero from "./componants/hero/Hero"
import Activity from "./componants/pages/Activity";
import Careers from "./componants/pages/Careers";
import FullReport from "./componants/pages/FullReport";
import PressReleases from "./componants/pages/PressRealeases";
import VideoGallery from "./componants/pages/VideoGallery";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CarouselComponent />
      <Footer />
      <PressReleases/>
      <Careers/>
      <VideoGallery/>
      <Activity/>
      <FullReport/>
    </>
  );
}

export default App;
