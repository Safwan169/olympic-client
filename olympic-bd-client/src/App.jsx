import "./App.css";
import CarouselComponent from "./componants/CarouselComponent";
import Footer from "./componants/Footer";
import Navbar from "./componants/Navbar/Navbar";
import Hero from "./componants/hero/Hero"
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CarouselComponent />
      <Footer />
    </>
  );
}

export default App;
