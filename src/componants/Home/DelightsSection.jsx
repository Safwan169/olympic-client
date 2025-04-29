import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PGBrandsCarousel() {
  const [hoveredBrand, setHoveredBrand] = useState(null);

  const brands = [
    {
      id: 1,
      name: "BISCUITS",
      logo: "https://res.cloudinary.com/dntd4xawh/image/upload/v1745902187/Energy-Plus-New-removebg-preview_ofshhm.png",
      color: "bg-white",
    },
    {
      id: 2,
      name: "COOKIES",
      logo: "https://res.cloudinary.com/dntd4xawh/image/upload/v1745902187/01-Milk-Lozenge-Candy-removebg-preview_pzinur.png",
      color: "bg-white",
    },
    {
      id: 3,
      name: "SNACKS",
      logo: "https://res.cloudinary.com/dntd4xawh/image/upload/v1745902187/Premium-Toast-removebg-preview_lsl9ch.png",
      color: "bg-white",
    },
    {
      id: 4,
      name: "CONFECTIONARY",
      logo: "https://res.cloudinary.com/dntd4xawh/image/upload/v1745902187/Foodie-Noodles-Masala-removebg-preview_i64bfj.png",
      color: "bg-white",
    },
    {
      id: 5,
      name: "POWDER DRINK",
      logo: "https://res.cloudinary.com/dntd4xawh/image/upload/v1745902187/18-removebg-preview_lrfxse.png",
      color: "bg-white",
    },
    {
      id: 6,
      name: "BATTERIES",
      logo: "https://res.cloudinary.com/dntd4xawh/image/upload/v1745902187/Olympic-Gold1.5-V--removebg-preview_tznh1i.png",
      color: "bg-white",
    },
  ];

  return (
    <div className="mx-auto bg-black text-black">
      {/* Main content */}
      <div className="pb-12 px-8">
        <div className="text-center mb-12">
          <h2 className="uppercase text-red-600 font-bold">OUR BRANDS</h2>
          <h1 className="text-4xl font-bold text-yellow-400 mt-4">
            Products that make life a little easier
          </h1>
        </div>

        {/* Brands carousel */}
        <div className="flex justify-center items-center mb-12">
          <div className="grid grid-cols-6 gap-4 w-full max-w-6xl">
            {brands?.map((brand) => (
              <div
                key={brand.id}
                className="relative"
                onMouseEnter={() => setHoveredBrand(brand.id)}
                onMouseLeave={() => setHoveredBrand(null)}
              >
                <div
                  className={`
                  w-32 h-32 rounded-full flex items-center justify-center cursor-pointer
                  transition-transform duration-300 overflow-hidden
                  ${
                    hoveredBrand === brand.id
                      ? "transform scale-110 shadow-xl"
                      : "shadow-md"
                  }
                  $ bg-gray-300 bg-shadow border border-gray-100
                `}
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className={`w-56 h-56 object-contain ${
                      hoveredBrand === brand.id ? "opacity-20" : ""
                    }`}
                  />

                  {/* Show hover content */}
                  {hoveredBrand === brand.id && (
                    <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
                      <h1 className="text-black text-center text-sm px-2 font-semibold">
                        {brand.name}
                      </h1>
                      <button className="bg-red-600 text-white py-1 px-3 rounded text-xs font-medium hover:bg-red-700 transition-colors duration-200">
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
        <div className="flex justify-center mb-5">
          <button className="border border-red-600 text-red-600 py-2 px-6 rounded-full hover:bg-red-200 transition-colors duration-200 font-semibold shadow-md">
            See our iconic brands
          </button>
        </div>

        <div className="flex justify-center space-x-8">
          <button className="text-red-600 hover:text-red-700 bg-white rounded-full shadow-md p-2 transition-all duration-200 hover:shadow-lg">
            <ChevronLeft size={24} />
          </button>
          <button className="text-red-600 hover:text-red-700 bg-white rounded-full shadow-md p-2 transition-all duration-200 hover:shadow-lg">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
