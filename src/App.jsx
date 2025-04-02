import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./componants/common/Navbar/Navbar";
import Footer from "./componants/common/Footer/Footer";
import React from "react";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen font-poppins">
        <header className="">
          <Navbar />
        </header>
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
