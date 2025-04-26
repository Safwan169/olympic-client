import React, { useState, useEffect, useRef } from 'react';

// ✅ Importing images directly
import helloCookies from '../../assets/export/Hello-Cookies.jpg';
import elachiPlus from '../../assets/export/Elachi-Plus.jpg';
import chocolateCream from '../../assets/export/Chocolate-Cream.jpg';
import lemonCream from '../../assets/export/Lemon-Cream.jpg';
import nice from '../../assets/export/Nice.jpg';
import nutty from '../../assets/export/nutty.jpg';

export default function ProductCatalog() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  // ✅ Using imported images
  const products = [
    {
      id: 1,
      name: "Hello Cookies",
      category: "All Export",
      image: helloCookies,
      actualImage: "Hit & Run Choco Cookie"
    },
    {
      id: 2,
      name: "Elachi Plue",
      category: "All Export",
      image: elachiPlus,
      actualImage: "Marie Plus Cookie"
    },
    {
      id: 3,
      name: "Chocolate Cream",
      category: "All Cookies",
      image: chocolateCream,
      actualImage: "Fruit and Nut Cookies"
    },
    {
      id: 4,
      name: "Lemon Cream",
      category: "All Cookies",
      image: lemonCream,
      actualImage: "ChocoChip Cookies"
    },
    {
      id: 5,
      name: "Nice",
      category: "All Export",
      image: nice,
      actualImage: "Butter Cookies"
    },
    {
      id: 6,
      name: "Nutty",
      category: "All Export",
      image: nutty,
      actualImage: "Digestive Biscuits"
    }
  ];
  
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === products.length - 4 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      resetTimeout();
    };
  }, [currentIndex, products.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === products.length - 4 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - 4 : prevIndex - 1
    );
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + 4);
  
  // Fill with repeated products if we don't have enough
  while (visibleProducts.length < 4) {
    visibleProducts.push(...products.slice(0, 4 - visibleProducts.length));
  }

  return (
    <div className="w-full py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">Our Product Catalog</h2>
        
        <div className="relative">
          <div className="flex gap-4 overflow-hidden">
            {visibleProducts.map((product) => (
              <div key={product.id} className="w-1/4 flex-shrink-0 bg-gray-800 transition-all duration-300 group hover:bg-gray-700">
                <div className="p-6 flex flex-col h-full relative">
                  <div className="relative overflow-hidden mb-6 flex-grow">
                    <img 
                      src={product.image} 
                      alt={product.actualImage} 
                      className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-gray-400 text-sm">{product.category}</span>
                    <h3 className="text-xl font-bold mt-1 text-white">{product.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-red-500 text-white p-4 z-10 hover:bg-red-600 transition-colors duration-300"
            aria-label="Previous slide"
          >
            <span className="text-2xl">&lt;</span>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-red-500 text-white p-4 z-10 hover:bg-red-600 transition-colors duration-300"  
            aria-label="Next slide"
          >
            <span className="text-2xl">&gt;</span>
          </button>
        </div>
      </div>
    </div>
  );
}