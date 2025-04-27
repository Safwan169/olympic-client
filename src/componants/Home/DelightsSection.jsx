import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PGBrandsCarousel() {
  const [hoveredBrand, setHoveredBrand] = useState(null);

  const brands = [
    {
      id: 1,
      name: "BISCUITS",
      logo: "https://i.ibb.co.com/234W31RJ/Energy-Plus-New-removebg-preview.png",
      color: "bg-gray-800",
    },
    {
      id: 2,
      name: "COOKIES",
      logo: "https://i.ibb.co.com/Pvn6rLBX/Untitled.png",
      color: "bg-gray-800",
    },
    {
      id: 3,
      name: "SNACKS",
      logo: "https://i.ibb.co.com/0RBFL206/9dee1fdc-d53f-4301-8d19-f38ab56a9579.png",
      color: "bg-gray-800",
    },
    {
      id: 4,
      name: "CONFECTIONARY",
      logo: "https://i.ibb.co.com/MyZ2FpcF/92c40963-b6b2-4282-b8d6-18a380f38e59.png",
      color: "bg-gray-800",
    },
    {
      id: 5,
      name: "POWDER DRINK",
      logo: "https://i.ibb.co.com/1tJWDxLP/f6db3f16-5f3f-411f-a8c8-492179b6c6d0.png",
      color: "bg-gray-800",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto bg-black text-white">
      {/* Main content */}
      <div className="pt-24 pb-12 px-8">
        <div className="text-center mb-12">
          <h2 className="uppercase text-blue-400 font-bold">OUR BRANDS</h2>
          <h1 className="text-4xl font-bold text-white mt-4">
            Products that make life a little easier
            <span className="text-yellow-400">.</span>
          </h1>
        </div>

        {/* Brands carousel */}
        <div className="flex justify-center items-center mb-12">
          <div className="grid grid-cols-5 gap-6 w-full max-w-5xl">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="relative"
                onMouseEnter={() => setHoveredBrand(brand.id)}
                onMouseLeave={() => setHoveredBrand(null)}
              >
                <div
                  className={`
                  w-40 h-40 rounded-full flex items-center justify-center cursor-pointer
                  transition-transform duration-300 overflow-hidden
                  ${
                    hoveredBrand === brand.id
                      ? "transform scale-110 shadow-lg"
                      : ""
                  }
                  ${brand.color}
                `}
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className={`w-24 h-24 object-contain ${
                      hoveredBrand === brand.id ? "opacity-20" : ""
                    }`}
                  />

                  {/* Show hover content for all brands */}
                  {hoveredBrand === brand.id && (
                    <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
                      <h1 className="text-white text-center px-2">
                        {brand.name}
                      </h1>
                      <button className="bg-blue-500 text-white py-2 px-4 rounded font-medium text-sm hover:bg-blue-600">
                        Visit Site
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center mb-16">
          <button className="border border-blue-400 text-blue-400 py-2 px-6 rounded-full hover:bg-gray-800">
            See our iconic brands
          </button>
        </div>

        <div className="flex justify-center space-x-8">
          <button className="text-blue-400 hover:text-blue-300">
            <ChevronLeft size={24} />
          </button>
          <button className="text-blue-400 hover:text-blue-300">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
