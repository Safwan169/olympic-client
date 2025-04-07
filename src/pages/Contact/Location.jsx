import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, ChevronRight, Building, Factory, Home } from 'lucide-react';

const Location = () => {
  // Sample location data - replace with your actual locations
  const locations = [
    {
      id: 1,
      name: "Head Office",
      subtitle: "Corporate Headquarters",
      address: "123 Corporate Boulevard, Business District, Dhaka, Bangladesh",
      phone: "+880 2 9876543",
      email: "info@companybiscuits.com",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM",
      mapCoords: { lat: 23.8103, lng: 90.4125 },
      icon: Building,
      color: "#8b5cf6",
      images: ["/images/office-exterior.jpg", "/images/office-reception.jpg"],
      detailsUrl: "/facilities/head-office" // Added URL for details page
    },
    {
      id: 2,
      name: "Factory One",
      subtitle: "Main Production Facility",
      address: "456 Industrial Zone, Manufacturing Area, Gazipur, Bangladesh",
      phone: "+880 2 1234567",
      email: "factory1@companybiscuits.com",
      hours: "24/7 Operation",
      mapCoords: { lat:  23.8915, lng: 90.4023 },
      icon: Factory,
      color: "#ec4899",
      images: ["/images/factory1-exterior.jpg", "/images/factory1-production.jpg"],
      detailsUrl: "/facilities/factory-one" // Added URL for details page
    },
    {
      id: 3,
      name: "Factory Two",
      subtitle: "Export Processing Plant",
      address: "789 Export Processing Zone, Chittagong, Bangladesh",
      phone: "+880 3 7654321",
      email: "factory2@companybiscuits.com",
      hours: "24/7 Operation",
      mapCoords: { lat: 22.3569, lng: 91.7832 },
      icon: Factory,
      color: "#3b82f6",
      images: ["/images/factory2-exterior.jpg", "/images/factory2-warehouse.jpg"],
      detailsUrl: "/facilities/factory-two" // Added URL for details page
    },
    {
      id: 4,
      name: "Distribution Center",
      subtitle: "National Distribution Hub",
      address: "321 Logistics Avenue, Warehouse District, Narayanganj, Bangladesh",
      phone: "+880 4 5678901",
      email: "distribution@companybiscuits.com",
      hours: "Sun-Thu: 6:00 AM - 10:00 PM",
      mapCoords: { lat:  23.8915, lng: 90.4023 },
      icon: Home,
      color: "#10b981",
      images: ["/images/dist-center.jpg", "/images/logistics.jpg"],
      detailsUrl: "/facilities/distribution-center" // Added URL for details page
    }
  ];

  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isDetailsAnimating, setIsDetailsAnimating] = useState(false);
  const mapRef = useRef(null);
  const leafletMap = useRef(null);
  const mapMarker = useRef(null);

  useEffect(() => {
    // Load Leaflet CSS
    const linkEl = document.createElement('link');
    linkEl.rel = 'stylesheet';
    linkEl.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';
    document.head.appendChild(linkEl);

    // Load Leaflet JS
    const scriptEl = document.createElement('script');
    scriptEl.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
    scriptEl.onload = initializeMap;
    document.body.appendChild(scriptEl);

    return () => {
      document.head.removeChild(linkEl);
      document.body.removeChild(scriptEl);
    };
  }, []);

  useEffect(() => {
    // Reset and trigger animations when location changes
    setIsMapLoaded(false);
    setShowDetails(false);
    setIsDetailsAnimating(true);
    
    // Update map if it's already initialized
    if (leafletMap.current && window.L) {
      updateMapLocation();
      
      // Simulate map loading delay for animation
      setTimeout(() => {
        setIsMapLoaded(true);
      }, 800);
    }
    
    // Show details after map loads
    const detailsTimer = setTimeout(() => {
      setShowDetails(true);
      setTimeout(() => setIsDetailsAnimating(false), 1000);
    }, 1200);
    
    return () => {
      clearTimeout(detailsTimer);
    };
  }, [selectedLocation]);

  const initializeMap = () => {
    if (!mapRef.current || !window.L) return;
    
    // Create map if it doesn't exist
    if (!leafletMap.current) {
      leafletMap.current = window.L.map(mapRef.current).setView(
        [selectedLocation.mapCoords.lat, selectedLocation.mapCoords.lng], 
        13
      );
      
      // Add tile layer (OpenStreetMap)
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(leafletMap.current);
      
      // Create custom marker icon
      const customIcon = window.L.divIcon({
        className: 'custom-map-marker',
        html: `<div class="marker-inner" style="background-color: ${selectedLocation.color}"></div>`,
        iconSize: [30, 30]
      });
      
      // Add marker
      mapMarker.current = window.L.marker(
        [selectedLocation.mapCoords.lat, selectedLocation.mapCoords.lng],
        { icon: customIcon }
      ).addTo(leafletMap.current);
      
      // Set map loaded state
      setTimeout(() => {
        setIsMapLoaded(true);
      }, 800);
    } else {
      updateMapLocation();
    }
  };

  const updateMapLocation = () => {
    if (!leafletMap.current || !mapMarker.current) return;
    
    // Update marker position and color
    const newLatLng = [selectedLocation.mapCoords.lat, selectedLocation.mapCoords.lng];
    mapMarker.current.setLatLng(newLatLng);
    
    // Update marker icon with new color
    const customIcon = window.L.divIcon({
      className: 'custom-map-marker',
      html: `<div class="marker-inner" style="background-color: ${selectedLocation.color}"></div>`,
      iconSize: [30, 30]
    });
    mapMarker.current.setIcon(customIcon);
    
    // Pan map to new location
    leafletMap.current.panTo(newLatLng);
  };

  // Icon component
  const LocationIcon = ({ location }) => {
    const Icon = location.icon;
    return <Icon size={24} style={{ color: location.color }} />;
  };

  // Function to handle button click - can be used for analytics or other actions
  const handleViewDetails = (url) => {
    // You could add analytics tracking here before navigation
    console.log(`Navigating to: ${url}`);
    window.location.href = url;
  };

  return (
<div className="bg-transparent text-white overflow-hidden">
<div className="absolute z-50 overflow-hidden">
<div className="absolute -top-48 -right-24 w-96 h-96 bg-purple-900 rounded-full opacity-20 blur-3xl"></div>
<div className="absolute top-1/2 -left-48 w-96 h-96 bg-blue-900 rounded-full opacity-20 blur-3xl"></div>
<div className="absolute bottom-24 right-1/3 w-64 h-64 bg-pink-900 rounded-full opacity-15 blur-3xl"></div>
</div>

<div className="relative">
    <div className="text-center pt-20 pb-16">
      <h1
        className="text-6xl font-bold mb-6"
        style={{
          fontFamily: 'Playfair Display, serif',
          background: 'linear-gradient(90deg, #c084fc 0%, #38bdf8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 5px 15px rgba(192, 132, 252, 0.3)'
        }}
      >
        Our Locations
      </h1>
      <div className="relative h-1 w-64 mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full animate-pulse opacity-70"></div>
      </div>
      <p className="mt-6 text-xl text-blue-200 max-w-2xl mx-auto">
        Explore our offices and manufacturing facilities across Bangladesh
      </p>
    </div>

    <div className="max-w-8xl mx-auto px-4">
      <div className="relative perspective-1000">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 transform-style-3d">
          <div className="lg:col-span-1 bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-800 shadow-2xl transform transition-all duration-500 hover:shadow-purple-900/20">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <MapPin className="mr-2 text-purple-400" />
                <span>Select Location</span>
              </h2>
              <div className="space-y-3">
                {locations.map((location) => (
                  <div
                    key={location.id}
                    onClick={() => setSelectedLocation(location)}
                    className={`relative cursor-pointer rounded-xl p-4 flex items-center transition-all duration-300 group ${
                      selectedLocation.id === location.id
                        ? 'bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg border-l-4'
                        : 'hover:bg-gray-800/70'
                    }`}
                    style={{
                      borderLeftColor: selectedLocation.id === location.id ? location.color : 'transparent',
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mr-4 transition-transform duration-500 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${location.color}22, ${location.color}00)`,
                        border: `2px solid ${location.color}${selectedLocation.id === location.id ? '' : '44'}`
                      }}
                    >
                      <LocationIcon location={location} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                        {location.name}
                      </h3>
                      <p className="text-sm text-gray-400">{location.subtitle}</p>
                    </div>
                    <ChevronRight
                      className={`transition-transform duration-300 ${
                        selectedLocation.id === location.id ? 'text-purple-400 translate-x-0' : 'text-gray-600 -translate-x-1 group-hover:translate-x-0'
                      }`}
                    />
                    {selectedLocation.id === location.id && (
                      <div className="absolute inset-0 rounded-xl overflow-hidden">
                        <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-shimmer"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="h-full flex flex-col">
              <div
                className="relative bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-800 shadow-2xl mb-6 transform transition-all duration-700"
                style={{
                  height: '330px',
                  transformStyle: 'preserve-3d',
                  transform: `rotateX(${isMapLoaded ? 0 : 5}deg) rotateY(${isMapLoaded ? 0 : -5}deg)`,
                  boxShadow: `0 25px 50px -12px ${selectedLocation.color}33`
                }}
              >
                {!isMapLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 z-10">
                    <div className="w-16 h-16 relative">
                      <div className="w-16 h-16 rounded-full border-t-4 border-l-4 border-purple-500 animate-spin absolute"></div>
                      <div className="w-12 h-12 rounded-full border-t-4 border-l-4 border-blue-500 animate-spin absolute inset-2" style={{animationDirection: 'reverse'}}></div>
                    </div>
                  </div>
                )}
                <div
                  ref={mapRef}
                  className="w-full h-full"
                  style={{ opacity: isMapLoaded ? 1 : 0, transition: 'opacity 1s' }}
                ></div>
                <div
                  className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-700 ${
                    isMapLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                >
                  <div className="flex items-center mb-2">
                    <div
                      className="w-3 h-3 rounded-full mr-3"
                      style={{ backgroundColor: selectedLocation.color }}
                    ></div>
                    <h3 className="text-xl font-bold text-white">
                      {selectedLocation.name}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-300 ml-6">{selectedLocation.address}</p>
                </div>
              </div>

              <div
                className={`flex-1 bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-800 shadow-2xl p-6 transition-all duration-700 ${
                  showDetails ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateX(${showDetails && !isDetailsAnimating ? 0 : 5}deg) rotateY(${showDetails && !isDetailsAnimating ? 0 : 5}deg)`,
                  boxShadow: `0 25px 50px -12px ${selectedLocation.color}33`
                }}
              >
                <div className="flex flex-col h-full">
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ color: selectedLocation.color }}
                  >
                    Location Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center p-3 bg-gray-800 bg-opacity-50 rounded-xl">
                      <Phone size={18} className="mr-3 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Phone</p>
                        <p className="text-sm text-white">{selectedLocation.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-gray-800 bg-opacity-50 rounded-xl">
                      <Mail size={18} className="mr-3 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Email</p>
                        <p className="text-sm text-white">{selectedLocation.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-gray-800 bg-opacity-50 rounded-xl md:col-span-2">
                      <Clock size={18} className="mr-3 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Working Hours</p>
                        <p className="text-sm text-white">{selectedLocation.hours}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-lg font-medium mb-3 text-gray-300">Photo Gallery</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[1, 2].map((img, index) => (
                        <div
                          key={index}
                          className="relative rounded-xl overflow-hidden h-24 md:h-32 bg-gray-800 transform transition-all duration-500 hover:scale-105 cursor-pointer"
                          style={{
                            animation: `fadeSlideUp 0.6s ${index * 0.2 + 0.3}s both`
                          }}
                        >
                          <div className="absolute inset-0 bg-cover bg-center"
                               style={{ backgroundImage: `url('/api/placeholder/400/240')` }}>
                          </div>
                          <div
                            className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"
                            style={{ background: `linear-gradient(to top, black, transparent)` }}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto pt-4">
                    <button
                      onClick={() => handleViewDetails(selectedLocation.detailsUrl)}
                      className="w-full flex items-center justify-center py-3 rounded-xl transition-all duration-300 group relative overflow-hidden"
                      style={{
                        background: `linear-gradient(90deg, ${selectedLocation.color}dd, ${selectedLocation.color}aa)`,
                        filter: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))'
                      }}
                    >
                      <div className="absolute inset-0 w-full translate-x-full group-hover:animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                      <span className="text-white font-medium mr-2">View Facility Details</span>
                      <ExternalLink size={16} className="text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style jsx>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@400;500;600&display=swap');

    /* Global font styles */
    body {
      font-family: 'Inter', sans-serif;
    }

    /* 3D Effects */
    .perspective-1000 {
      perspective: 1000px;
    }

    .transform-style-3d {
      transform-style: preserve-3d;
    }

    /* Animation Keyframes */
    @keyframes fadeSlideUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    @keyframes dropAndBounce {
      0% { transform: translate(-50%, -300%); opacity: 0; }
      60% { transform: translate(-50%, -90%); opacity: 1; }
      80% { transform: translate(-50%, -110%); }
      100% { transform: translate(-50%, -100%); }
    }

    @keyframes shimmer {
      from { transform: translateX(-100%); }
      to { transform: translateX(100%); }
    }

    @keyframes shine {
      from { transform: translateX(-100%); }
      to { transform: translateX(100%); }
    }

    .animate-shimmer {
      animation: shimmer 2s infinite linear;
    }

    .animate-shine {
      animation: shine 1s forwards;
    }

    /* Custom Leaflet Marker Styles */
    .custom-map-marker {
      background-color: transparent;
      border: none;
    }

    .marker-inner {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 0 10px rgba(0,0,0,0.5);
      position: relative;
    }

    .marker-inner:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 8px;
      height: 8px;
      background-color: white;
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }
  `}</style>
</div>
  );
};

export default Location;