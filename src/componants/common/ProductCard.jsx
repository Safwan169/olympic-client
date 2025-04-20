import React, { useState } from "react";

const ProductCard = ({ title, products }) => {
  const [activeProduct, setActiveProduct] = useState(null);

  return (
    <div className="bg-gray-950 mt-24 flex flex-col items-center justify-center p-4 sm:p-6 font-poppins w-full">
      {/* Main Section Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-2">
        Premium {title}
      </h1>
      <div className="w-24 sm:w-32 h-1 bg-yellow-700 mb-8 sm:mb-16 rounded-full"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 w-full max-w-6xl">
        {products?.map((product) => (
          <div key={product.id} className="flex flex-col items-center mx-auto">
            <div
              className="relative w-full max-w-xs h-52 sm:h-60 cursor-pointer rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 border border-gray-800"
              onMouseEnter={() => setActiveProduct(product.id)}
              onMouseLeave={() => setActiveProduct(null)}
              // Add touch support for mobile devices
              onTouchStart={() =>
                setActiveProduct(
                  product.id === activeProduct ? null : product.id
                )
              }
            >
              {/* Product Image with Dimmed Filter */}
              <div className="absolute z-10"></div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {/* Base Overlay Square */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent flex items-end justify-center text-center pb-6 px-4 z-20">
                <div className="text-gray-100">
                  <h3 className="text-base sm:text-lg font-bold mb-1">
                    {product.name}
                  </h3>
                </div>
              </div>

              {/* Details Overlay on Hover/Touch */}
              <div
                className={`absolute inset-0 bg-gray-900 bg-opacity-95 transition-all duration-500 flex flex-col items-center justify-center p-3 sm:p-4 z-30 ${
                  activeProduct === product.id
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
              >
                <h4 className="text-yellow-600 font-bold mb-2 text-sm sm:text-base">
                  Available Packets
                </h4>

                {/* Scrollable Packets Container */}
                <div className="space-y-2 sm:space-y-3 w-full px-2 sm:px-3 max-h-32 sm:max-h-40 overflow-y-auto custom-scrollbar">
                  {product.packets && product.packets.length > 0 ? (
                    product.packets.map((packet, index) => (
                      <div
                        key={index}
                        className="bg-gray-800 rounded-md px-2 sm:px-3 py-1 sm:py-2 flex justify-between items-center border border-gray-700"
                        style={{
                          animation:
                            activeProduct === product.id
                              ? `fadeIn 0.5s ${index * 0.1}s forwards`
                              : "none",
                          opacity: 0,
                          transform: "translateY(8px)",
                        }}
                      >
                        <span className="text-gray-200 text-xs sm:text-sm font-medium">
                          {packet.size}
                        </span>
                        <span className="text-yellow-600 font-bold text-xs sm:text-sm">
                          TK. {packet.price}
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-400 text-xs sm:text-sm text-center">
                      No varieties available
                    </p>
                  )}

                  {/* Placeholder elements for consistent scrollbar spacing */}
                  {product.packets &&
                    product.packets.length > 0 &&
                    product.packets.length < 3 &&
                    Array(3 - product.packets.length)
                      .fill()
                      .map((_, i) => (
                        <div
                          key={`placeholder-${i}`}
                          className="opacity-0 h-6 sm:h-10"
                        ></div>
                      ))}
                </div>
              </div>
            </div>

            {/* Product Footer Info */}
            <div className="mt-3 sm:mt-4 text-center">
              {product.packets && product.packets.length > 0 ? (
                <span className="text-base sm:text-lg text-yellow-600 font-medium">
                  {product.packets.length} varieties available
                </span>
              ) : (
                <span className="text-gray-500 text-sm sm:text-base">
                  Showcase only
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        /* Scrollbar Styling */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #B45309 rgba(0, 0, 0, 0.2);
          padding-right: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
          background: transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #B45309;
          border-radius: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(30, 30, 30, 0.3);
          border-radius: 4px;
        }

        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
