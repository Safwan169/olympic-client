import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./componants/common/Navbar/Navbar";
import Footer from "./componants/common/Footer/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen font-poppins">
        <Navbar />
        <main className="flex-grow">
          <ScrollRestoration />
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
