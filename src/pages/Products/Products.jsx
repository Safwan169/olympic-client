import React, { useState } from "react";
import { Link } from "react-router-dom";

const DynamicProductsSection = () => {
  const products = [
    {
      id: 1,
      title: "DOMESTIC PRODUCTS",
      subtitle: "Explore our local favorites",
      backgroundImage: "https://www.mama.co.th/en/images/product/img-domestic.jpg",
      linkUrl: "/products/domestic",
    },
    {
      id: 2,
      title: "EXPORT PRODUCTS",
      subtitle: "Discover our global reach",
      backgroundImage: "https://www.mama.co.th/en/images/product/img-map2.png",
      linkUrl: "/products/exports",
    },
    {
      id: 3,
      title: "CONSUMER PROMOTIONS",
      subtitle: "Unique tastes, crafted with care",
      backgroundImage: "/cookieBG.jpg",
      linkUrl: "/products/promotions",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const defaultGrow = 1;
  const hoveredGrow = 3;

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black">
      {products.map((product, index) => {
        const flexGrow = hoveredIndex !== null
          ? (hoveredIndex === index ? hoveredGrow : defaultGrow)
          : defaultGrow;

        return (
          <Link
            key={product.id}
            to={product.linkUrl}
            className="relative flex items-center justify-center bg-cover bg-center group overflow-hidden p-8"
            style={{
              backgroundImage: `url('${product.backgroundImage}')`,
              flexGrow: flexGrow,
              transition: 'flex-grow 500ms ease-in-out',
              minWidth: '0',
               boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)',
               borderRight: index < products.length - 1 ? '1px solid rgba(255, 0, 0, 0.5)' : 'none',
               borderLeft: index > 0 ? '1px solid rgba(255, 0, 0, 0.5)' : 'none',
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition duration-500 ease-in-out"></div>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition duration-500 ease-in-out"
                 style={{ backgroundImage: 'linear-gradient(to right, rgba(255, 0, 0, 0.3) 0%, rgba(255, 215, 0, 0.1) 50%, transparent 100%)' }}>
            </div>

            <div
                className="bg-gray-900 bg-opacity-80 px-8 py-6 rounded-md text-center z-10 border-2 border-transparent group-hover:border-red-600 transition duration-500 ease-in-out"
                 style={{ boxShadow: '0 0 15px rgba(255, 215, 0, 0.3)' }}
            >
              <h2 className="text-yellow-400 text-2xl md:text-3xl font-bold mb-2">
                {product.title.split(' ').map((word, i) => (
                  <React.Fragment key={i}>
                    {word}
                    {i < product.title.split(' ').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h2>
              <p className="text-gray-300 text-sm mb-4">{product.subtitle}</p>

              <div className="mt-4">
                <span className="block w-10 h-1 bg-red-500 mx-auto rounded-full transition-colors duration-300 group-hover:bg-yellow-500"></span>
                <span className="block w-6 h-1 bg-red-500 mx-auto my-1 rounded-full transition-colors duration-300 group-hover:bg-yellow-500"></span>
                <span className="block w-10 h-1 bg-red-500 mx-auto rounded-full transition-colors duration-300 group-hover:bg-yellow-500"></span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default DynamicProductsSection;