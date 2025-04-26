import React, { useState, useEffect } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function GlobalPresence() {
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [countedStats, setCountedStats] = useState([
    { number: 0 },
    { number: 0 },
    { number: 0 },
    { number: 0 },
    { number: 0 }
  ]);

  const exportCountries = [
    { id: "CN", name: "China" },
    { id: "IN", name: "India" },
    { id: "SA", name: "Saudi Arabia" },
    { id: "AE", name: "United Arab Emirates" },
    { id: "QA", name: "Qatar" },
    { id: "KW", name: "Kuwait" },
    { id: "OM", name: "Oman" },
    { id: "YE", name: "Yemen" },
    { id: "IR", name: "Iran" },
    { id: "IQ", name: "Iraq" },
    { id: "NG", name: "Nigeria" },
    { id: "GH", name: "Ghana" },
    { id: "CI", name: "Ivory Coast" },
    { id: "SL", name: "Sierra Leone" },
    { id: "LR", name: "Liberia" },
    { id: "EG", name: "Egypt" },
    { id: "KE", name: "Kenya" },
    { id: "TZ", name: "Tanzania" },
    { id: "UG", name: "Uganda" },
    { id: "RW", name: "Rwanda" },
    { id: "ET", name: "Ethiopia" },
    { id: "SD", name: "Sudan" },
    { id: "ZA", name: "South Africa" },
    { id: "MG", name: "Madagascar" },
    { id: "PK", name: "Pakistan" },
    { id: "BD", name: "Bangladesh" },
    { id: "NP", name: "Nepal" },
    { id: "MM", name: "Myanmar" },
    { id: "TH", name: "Thailand" },
    { id: "VN", name: "Vietnam" },
    { id: "CL", name: "Chile" },
    { id: "CU", name: "Cuba" },
  ];

  const stats = [
    {
      target: 41,
      icon: "🕒",
      title: "BISCUIT",
      subtitle: "VARIETIES",
      duration: 2000
    },
    {
      target: 6,
      icon: "🧁",
      title: "CAKE",
      subtitle: "VARIETIES",
      duration: 1500
    },
    {
      target: 27,
      icon: "🌍",
      title: "BISCUIT VARIETIES",
      subtitle: "EXPORTED",
      duration: 2500
    },
    {
      target: 4,
      icon: "📈",
      title: "LARGEST",
      subtitle: "BISCUIT BRAND*",
      footnote: "*Revenue Report Frost & Sullivan 2023",
      suffix: "th",
      duration: 1800
    },
    {
      target: 5,
      icon: "🌶️",
      title: "LARGEST",
      subtitle: "CAKES BRAND*",
      footnote: "*Revenue Report Frost & Sullivan 2023",
      suffix: "th",
      duration: 1800
    }
  ];

  useEffect(() => {
    const animateCount = () => {
      stats.forEach((stat, index) => {
        const startTime = Date.now();
        const duration = stat.duration || 2000;
        
        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easedProgress = easeOutQuad(progress);
          const current = Math.round(easedProgress * stat.target);
          
          setCountedStats(prevStats => {
            const newStats = [...prevStats];
            newStats[index] = { ...newStats[index], number: current };
            return newStats;
          });
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        
        requestAnimationFrame(animate);
      });
    };
    
    // Start animation when component mounts
    const timer = setTimeout(animateCount, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const easeOutQuad = (progress) => {
    return progress * (2 - progress);
  };

  const isExportCountry = (geo) => {
    return exportCountries.some(country => country.id === geo.properties.ISO_A2);
  };

  return (
    <div className="w-full py-16 bg-gray-900">
      {/* Map Section */}
      <div className="container mx-auto px-4 mb-8 text-center">
        <div className="mb-4">
          <span className="text-red-500 font-medium uppercase tracking-wider">GLOBAL REACH</span>
          <div className="w-16 h-0.5 bg-red-500 mx-auto mt-1"></div>
        </div>
        <h2 className="text-4xl font-bold text-white mb-2">Our Global Presence</h2>
        <h3 className="text-5xl font-bold text-red-500 mb-8">34 Countries</h3>
        
        <div className="max-w-5xl mx-auto relative">
          <div className="world-map-container relative">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 150,
                center: [20, 20]
              }}
              height={500}
              width={1000}
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const isHighlighted = isExportCountry(geo);
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={isHighlighted ? "#ff3a4e" : "#374151"}
                        stroke="#1F2937"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: { 
                            fill: isHighlighted ? "#ff6b79" : "#4B5563",
                            outline: "none" 
                          },
                          pressed: { outline: "none" },
                        }}
                        onMouseEnter={() => {
                          if (isHighlighted) {
                            const country = exportCountries.find(
                              c => c.id === geo.properties.ISO_A2
                            );
                            setHoveredCountry(country);
                          }
                        }}
                        onMouseLeave={() => {
                          setHoveredCountry(null);
                        }}
                      />
                    );
                  })
                }
              </Geographies>
              
              {hoveredCountry && (
                <Marker coordinates={[0, -60]}>
                  <rect
                    x={-60}
                    y={-15}
                    width={120}
                    height={30}
                    rx={5}
                    fill="#111827"
                    stroke="#ff3a4e"
                    strokeWidth={1}
                    opacity="0.9"
                  />
                  <text
                    textAnchor="middle"
                    fill="#FFF"
                    style={{ fontFamily: "system-ui", fontSize: 12 }}
                  >
                    {hoveredCountry.name}
                  </text>
                </Marker>
              )}
            </ComposableMap>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="w-full bg-gray-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 divide-x divide-gray-700">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="py-12 px-4 text-center group hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="flex justify-center mb-3">
                  <span className="text-2xl bg-gray-700 text-red-500 p-2 rounded-full w-12 h-12 flex items-center justify-center group-hover:bg-gray-600 transition-colors duration-300">
                    {stat.icon}
                  </span>
                </div>
                <h3 className="text-5xl font-bold text-red-500 mb-3">
                  {countedStats[index]?.number}
                  {stat.suffix && (
                    <span className="text-3xl align-super">{stat.suffix}</span>
                  )}
                </h3>
                <p className="uppercase font-bold text-sm tracking-wide text-gray-300">{stat.title}</p>
                <p className="uppercase font-bold text-sm tracking-wide text-gray-300">{stat.subtitle}</p>
                {stat.footnote && (
                  <p className="text-xs text-gray-400 mt-2">{stat.footnote}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .world-map-container {
          aspect-ratio: 2 / 1;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

