import React, { useState } from 'react';

const ProductCard = () => {
  const biscuits = [
    {
      id: 1,
      name: "Coco Dark",
      description: "Rich dark chocolate biscuits",
      image: "/images/coco-dark.jpg",
      packets: [
        { size: "Small Pack (100g)", price: "10" },
        { size: "Family Pack (250g)", price: "20" }
      ]
    },
    {
      id: 2,
      name: "Coco Milk",
      description: "Creamy milk chocolate biscuits",
      image: "/images/coco-milk.jpg",
      packets: [
        { size: "Small Pack (100g)", price: "10" },
        { size: "Medium Pack (150g)", price: "15" },
        { size: "Large Pack (200g)", price: "18" },
        { size: "Family Pack (250g)", price: "22" }
      ]
    },
    {
      id: 3,
      name: "Coco Hazelnut",
      description: "Nutty chocolate sensation",
      image: "/images/coco-hazelnut.jpg",
      packets: [] // No variety
    },
    {
      id: 4,
      name: "Coco Orange",
      description: "Zesty orange infused chocolate",
      image: "/images/coco-orange.jpg",
      packets: [
        { size: "Small Pack (100g)", price: "15" },
        { size: "Family Pack (250g)", price: "60" }
      ]
    }
  ];

  const [activeProduct, setActiveProduct] = useState(null);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 font-serif">
      {/* Main Section Title */}
      <h1 className="text-5xl font-bold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Premium Biscuits</h1>
      <div className="w-32 h-1 bg-yellow-600 mb-20 rounded-full"></div>
      
      {/* Subtitle for Collection */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-6xl">
      {biscuits.map((biscuit) => (
          <div key={biscuit.id} className="flex flex-col items-center">
            <div
              className="relative w-64 h-64 cursor-pointer rounded-full overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setActiveProduct(biscuit.id)}
              onMouseLeave={() => setActiveProduct(null)}
            >
              {/* Biscuit Image */}
              <img 
                src={'Biscuit.jpg'} 
                alt={biscuit.name}
                className="w-full h-full object-cover rounded-full"
              />

              {/* Base Overlay Circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black via-black/70 to-transparent flex items-end justify-center text-center pb-6 px-4">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>{biscuit.name}</h3>
                </div>
              </div>

              <div
                className={`absolute inset-0 rounded-full bg-black bg-opacity-90 transition-all duration-500 flex flex-col items-center justify-center p-4 ${
                  activeProduct === biscuit.id
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-0'
                }`}
              >
                <h4 className="text-yellow-600 font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif', color: '#D4AF37' }}>Available Packets</h4>

                {/* Fixed height container with permanent scrollbar area */}
                <div className="space-y-2 w-full px-4 max-h-40 overflow-y-auto custom-scrollbar">
                  {biscuit.packets && biscuit.packets.length > 0 ? (
                    biscuit.packets.map((packet, index) => (
                      <div
                        key={index}
                        className="bg-gray-800 rounded-full px-3 py-2 flex justify-between items-center border border-yellow-700"
                        style={{
                          animation: activeProduct === biscuit.id
                            ? `fadeInRotate 0.5s ${index * 0.15}s forwards`
                            : 'none',
                          opacity: 0,
                          transform: 'translateY(10px) rotate(-5deg)'
                        }}
                      >
                        <span className="text-white text-sm font-medium">{packet.size}</span>
                        <span style={{ color: '#D4AF37' }} className="font-bold">TK. {packet.price}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-white text-sm text-center">No varieties available</p>
                  )}

                  {/* Add invisible placeholder elements to ensure scrollbar space is consistent */}
                  {biscuit.packets && biscuit.packets.length > 0 && biscuit.packets.length < 3 && (
                    Array(3 - biscuit.packets.length).fill().map((_, i) => (
                      <div key={`placeholder-${i}`} className="opacity-0 h-10"></div>
                    ))
                  )}
                </div>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              {biscuit.packets.length > 0 ? (
                <span style={{ color: '#D4AF37' }} className="text-lg font-medium">{biscuit.packets.length} varieties available</span>
              ) : (
                <span className="text-gray-500">Showcase only</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Cormorant+Garamond:wght@400;600&display=swap');

        /* Fix for scrollbar jumping */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #D4AF37 transparent;
          padding-right: 2px; /* Small padding to ensure content isn't too close to scrollbar */
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
          background: transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #D4AF37;
          border-radius: 10px;
          border: 1px solid transparent;
        }

        /* Always show scrollbar space to prevent layout shift */
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 10px;
        }

        @keyframes fadeInRotate {
          from { opacity: 0; transform: translateY(10px) rotate(-5deg); }
          to { opacity: 1; transform: translateY(0) rotate(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Global font styles */
        .font-serif {
          font-family: 'Cormorant Garamond', serif;
        }
      `}</style>
    </div>
  );
};

export default ProductCard;