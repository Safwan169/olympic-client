import "./App.css";
import CarouselComponent from "./componants/CarouselComponent";
import Footer from "./componants/Footer";
import Navbar from "./componants/Navbar/Navbar";
import Hero from "./componants/hero/Hero";
import DelightsSection from "./pages/Home/DelightsSection";
import DesiredBrands from "./pages/Home/DesiredBrands";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CarouselComponent />
      <DesiredBrands />
      <DelightsSection />
      <Footer />
    </>
  );
}

export default App;
