import React from "react";
import { Link } from "react-router-dom";

const ProductsSection = () => {
  return (
    <div className="flex flex-col  md:flex-row h-screen">
      {/* Left Side - Domestic Products */}
      <Link to={'/products/domestic'}
        className="relative flex-1 flex items-center justify-center bg-cover bg-center group"
        style={{
          backgroundImage: "url('https://www.mama.co.th/en/images/product/img-domestic.jpg')",
        }}
      >
        {/* Black overlay initially */}
        <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition duration-500"></div>

        {/* Orange overlay on hover */}
        <div className="absolute inset-0 bg-orange-300 opacity-0 group-hover:opacity-30 transition duration-500"></div>

        {/* Text box */}
        <div className="bg-orange-500 bg-opacity-90 px-10 py-8 rounded-md text-center z-10">
          <h2 className="text-white text-xl md:text-3xl">
            DOMESTIC <br /> PRODUCTS
          </h2>
          <div className="mt-4">
            <span className="block w-10 h-1 bg-white mx-auto rounded-full"></span>
            <span className="block w-6 h-1 bg-white mx-auto my-1 rounded-full"></span>
            <span className="block w-10 h-1 bg-white mx-auto rounded-full"></span>
          </div>
        </div>
      </Link>

      {/* Right Side - Export Products */}
      <Link to={'/products/exports'}
        className="relative flex-1 flex items-center justify-center bg-cover bg-center group"
        style={{
          backgroundImage: "url('https://www.mama.co.th/en/images/product/img-map2.png')",
        }}
      >
        {/* Black overlay initially */}
        <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition duration-500"></div>

        {/* Orange overlay on hover */}
        <div className="absolute inset-0 bg-orange-400 opacity-0 group-hover:opacity-30 transition duration-500"></div>

        {/* Text box */}
        <div className="bg-orange-500 bg-opacity-90 px-10 py-8 rounded-md text-center z-10">
          <h2 className="text-white text-2xl md:text-3xl ">
            EXPORT <br /> PRODUCTS
          </h2>
          <div className="mt-4">
            <span className="block w-10 h-1 bg-white mx-auto rounded-full"></span>
            <span className="block w-6 h-1 bg-white mx-auto my-1 rounded-full"></span>
            <span className="block w-10 h-1 bg-white mx-auto rounded-full"></span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductsSection;
