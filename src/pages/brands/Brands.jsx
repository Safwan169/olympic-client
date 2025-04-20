import { ChevronRight, MapPin, ShoppingBag } from 'lucide-react';
import { useState, useEffect } from 'react';
// import { Motion, ShoppingBag, MapPin, ChevronRight } from 'lucide-react';

export default function Brands() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProduct, setActiveProduct] = useState(0);
  const [hoverButton, setHoverButton] = useState(null);
  
  const products = [
    {
      name: "Kream Cake",
      tagline: "Creamy goodness!",
      color: "#FF5722",
      variants: ["Orange Dream", "Mixed Fruit", "Lemon Cream"]
    },
    {
      name: "Dream LITE",
      tagline: "Light & delicious",
      color: "#E91E63",
      variants: ["Original", "Chocolate", "Strawberry"]
    },
    {
      name: "ROMANZ",
      tagline: "Choco perfection",
      color: "#9C27B0",
      variants: ["Dark", "Milk", "White"]
    },
    {
      name: "Marie Plus",
      tagline: "Classic favorite",
      color: "#2196F3",
      variants: ["Original", "Chocolate", "Coconut"]
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % products.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const handleProductClick = (index) => {
    setActiveProduct(index);
  };

  return (
    <div className="w-full bg-black relative overflow-hidden" style={{height: "600px"}}>
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Dynamic geometric shapes */}
        <div className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-gray-900 to-black opacity-60 -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 rounded-full bg-gradient-to-tr from-gray-900 to-black opacity-40 -bottom-32 -right-32"></div>
        
        {/* Animated accents */}
        <div className="absolute w-32 h-32 rounded-full bg-yellow-600 opacity-5 top-1/4 left-1/3 animate-pulse" 
             style={{animationDuration: "8s"}}></div>
        <div className="absolute w-48 h-48 rounded-full bg-yellow-600 opacity-5 bottom-1/4 right-1/3 animate-pulse" 
             style={{animationDuration: "10s"}}></div>
        
        {/* Golden particles */}
        {[...Array(10)].map((_, i) => (
          <div key={i} 
               className="absolute w-1 h-1 rounded-full bg-yellow-500 opacity-30 animate-ping" 
               style={{
                 top: `${Math.random() * 100}%`, 
                 left: `${Math.random() * 100}%`,
                 animationDuration: `${3 + Math.random() * 5}s`,
                 animationDelay: `${Math.random() * 2}s`
               }}>
          </div>
        ))}
        
        {/* Animated lines */}
        <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-gray-800 to-transparent top-1/3 animate-pulse"
             style={{animationDuration: "15s"}}></div>
        <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-gray-800 to-transparent bottom-1/3 animate-pulse"
             style={{animationDuration: "20s"}}></div>
      </div>
      
      {/* Banner Content */}
      <div className="container mx-auto h-full flex items-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full w-full">
          {/* Text Content - Left Side */}
          <div className={`flex flex-col justify-center transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
            <div className="overflow-hidden">
              <h1 className={`text-6xl md:text-7xl font-bold text-white mb-1 transition-transform duration-1000 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
                  style={{transitionDelay: "200ms"}}>
                Bite into
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className={`text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-1 transition-transform duration-1000 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
                  style={{transitionDelay: "400ms"}}>
                a Priceless
              </h1>
            </div>
            <div className="overflow-hidden mb-6">
              <h1 className={`text-6xl md:text-7xl font-bold text-white transition-transform duration-1000 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
                  style={{transitionDelay: "600ms"}}>
                Taste
              </h1>
            </div>
            
            <p className={`text-xl text-gray-300 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
               style={{transitionDelay: "800ms"}}>
              Available at a store near you
            </p>
            
          
          </div>
          
          {/* Product Showcase - Right Side */}
          <div className="relative h-full flex items-center justify-center overflow-visible">
            {products.map((product, index) => (
              <div 
                key={index}
                className={`absolute transition-all duration-1000 transform cursor-pointer ${
                  index === activeProduct 
                    ? 'scale-100 translate-y-0 opacity-100 z-10' 
                    : index === (activeProduct + 1) % products.length
                      ? 'scale-90 translate-y-20 translate-x-20 opacity-30 z-0'
                      : index === (activeProduct + products.length - 1) % products.length
                        ? 'scale-90 translate-y-20 -translate-x-20 opacity-30 z-0'
                        : 'scale-75 translate-y-32 opacity-0 z-0'
                }`}
                onClick={() => handleProductClick(index)}
                style={{
                  boxShadow: index === activeProduct ? `0 10px 50px ${product.color}22` : 'none',
                  transitionDelay: index === activeProduct ? "0ms" : "200ms"
                }}
              >
                {/* Product Card */}
                <div className="bg-gray-900 rounded-lg p-6 w-72">
                  {/* Product glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br rounded-lg" 
                       style={{
                         background: `radial-gradient(circle at center, ${product.color}11 0%, transparent 70%)`,
                         filter: 'blur(15px)'
                       }}>
                  </div>
                  
                  {/* Product image area */}
                  <div 
                    className="h-56 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden group" 
                    
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-30"></div>
                    <img 
                      src="Milk.jpg" 
                      alt={product.name} 
                      className="h-48 object-contain relative z-10 transition-transform duration-500 group-hover:scale-105" 
                    />
                    
                    {/* Animated sparkles */}
                    {[...Array(5)].map((_, i) => (
                      <div key={i}
                           className="absolute w-1 h-1 bg-yellow-500 rounded-full animate-ping"
                           style={{
                             top: `${10 + Math.random() * 80}%`,
                             left: `${10 + Math.random() * 80}%`,
                             animationDuration: `${1 + Math.random() * 3}s`,
                             animationDelay: `${Math.random() * 2}s`
                           }}>
                      </div>
                    ))}
                  </div>
                  
      
                  
               
                </div>
                
              
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Animated corner accent */}
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-yellow-500 to-yellow-600 opacity-10 rounded-full"></div>
      
      {/* Motion indicator */}
      <div className="absolute bottom-6 left-6 text-yellow-500 opacity-80 animate-bounce">
        {/* <Motion size={24} /> */}
      </div>
    </div>
  );
}