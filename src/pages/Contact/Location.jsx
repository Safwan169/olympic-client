import React, { useState, useEffect, useRef } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  ChevronRight,
  Building,
  Factory,
  Home,
} from "lucide-react";

const Location = () => {
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
      images: ["/images/office-exterior.jpg", "/images/office-reception.jpg"],
      detailsUrl: "/facilities/head-office",
    },
    {
      id: 2,
      name: "Factory One",
      subtitle: "Main Production Facility",
      address: "456 Industrial Zone, Manufacturing Area, Gazipur, Bangladesh",
      phone: "+880 2 1234567",
      email: "factory1@companybiscuits.com",
      hours: "24/7 Operation",
      mapCoords: { lat: 23.8915, lng: 90.4023 },
      icon: Factory,
      images: [
        "/images/factory1-exterior.jpg",
        "/images/factory1-production.jpg",
      ],
      detailsUrl: "/facilities/factory-one",
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
      images: [
        "/images/factory2-exterior.jpg",
        "/images/factory2-warehouse.jpg",
      ],
      detailsUrl: "/facilities/factory-two",
    },
    {
      id: 4,
      name: "Distribution Center",
      subtitle: "National Distribution Hub",
      address:
        "321 Logistics Avenue, Warehouse District, Narayanganj, Bangladesh",
      phone: "+880 4 5678901",
      email: "distribution@companybiscuits.com",
      hours: "Sun-Thu: 6:00 AM - 10:00 PM",
      mapCoords: { lat: 23.8915, lng: 90.4023 },
      icon: Home,
      images: ["/images/dist-center.jpg", "/images/logistics.jpg"],
      detailsUrl: "/facilities/distribution-center",
    },
  ];

  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isDetailsAnimating, setIsDetailsAnimating] = useState(false);
  const mapRef = useRef(null);
  const leafletMap = useRef(null);
  const mapMarker = useRef(null);

  useEffect(() => {
    const linkEl = document.createElement("link");
    linkEl.rel = "stylesheet";
    linkEl.href =
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css";
    document.head.appendChild(linkEl);

    const scriptEl = document.createElement("script");
    scriptEl.src =
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js";
    scriptEl.onload = initializeMap;
    document.body.appendChild(scriptEl);

    const styleEl = document.createElement("style");
    styleEl.innerHTML = `
      .custom-map-marker {
        width: 30px !important;
        height: 30px !important;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: radial-gradient(circle, #D4AF37 0%, #DC2626 100%);
        border: 2px solid #b91c1c;
        animation: marker-pulse 1.5s infinite ease-in-out;
      }
      @keyframes marker-pulse {
        0% { transform: scale(0.9); opacity: 0.8; }
        50% { transform: scale(1); opacity: 1; }
        100% { transform: scale(0.9); opacity: 0.8; }
      }
      .leaflet-container {
        background-color: #111827;
      }
    `;
    document.head.appendChild(styleEl);

    return () => {
      document.head.removeChild(linkEl);
      document.body.removeChild(scriptEl);
      document.head.removeChild(styleEl);
      if (leafletMap.current) {
        leafletMap.current.remove();
        leafletMap.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (window.L && mapRef.current) {
      setIsMapLoaded(false);
      setShowDetails(false);
      setIsDetailsAnimating(true);

      if (leafletMap.current) {
        updateMapLocation();

        setTimeout(() => {
          setIsMapLoaded(true);
        }, 800);
      } else {
        initializeMap();
      }

      const detailsTimer = setTimeout(() => {
        setShowDetails(true);
        setTimeout(() => setIsDetailsAnimating(false), 700);
      }, 1200);

      return () => {
        clearTimeout(detailsTimer);
      };
    }
    return () => {};
  }, [selectedLocation]);

  const initializeMap = () => {
    if (!mapRef.current || !window.L) return;

    if (leafletMap.current) return;

    leafletMap.current = window.L.map(mapRef.current).setView(
      [selectedLocation.mapCoords.lat, selectedLocation.mapCoords.lng],
      13
    );

    window.L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(leafletMap.current);

    const customIcon = window.L.divIcon({
      className: "custom-map-marker",
      html: '',
      iconSize: [30, 30],
      iconAnchor: [15, 15]
    });

    mapMarker.current = window.L.marker(
      [selectedLocation.mapCoords.lat, selectedLocation.mapCoords.lng],
      { icon: customIcon }
    ).addTo(leafletMap.current);

    setTimeout(() => {
      setIsMapLoaded(true);
    }, 800);
  };

  const updateMapLocation = () => {
    if (!leafletMap.current || !mapMarker.current || !window.L) return;

    const newLatLng = [
      selectedLocation.mapCoords.lat,
      selectedLocation.mapCoords.lng,
    ];
    mapMarker.current.setLatLng(newLatLng);

    leafletMap.current.panTo(newLatLng, {
      animate: true,
      duration: 0.5
    });
  };

  const LocationIcon = ({ icon: IconComponent }) => {
    return <IconComponent size={24} className="text-red-500" />;
  };

  const handleViewDetails = (url) => {
    console.log(`Navigating to: ${url}`);
  };

  // Using gold colors for text
  const goldTextClass = 'text-amber-600';
  const dimmerGoldTextClass = 'text-amber-700';

  return (
    <div className="bg-tranparent text-white overflow-hidden py-12">
      <div className="absolute z-0 inset-0 pointer-events-none">
        {/* Background accents */}
        <div className="absolute -top-48 -right-24 w-96 h-96 bg-red-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-red-800 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-24 right-1/3 w-64 h-64 bg-red-900 rounded-full opacity-15 blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="text-center pt-20 pb-16">
          <h1
            className="text-5xl md:text-6xl font-bold mb-6 text-amber-600"
            style={{ textShadow: "0 5px 15px rgba(220, 38, 38, 0.3)" }}
          >
            Our Locations
          </h1>
          <div className="relative h-1 w-64 mx-auto mt-4">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-full animate-pulse opacity-70"></div>
          </div>
          <p className={`mt-6 text-lg ${goldTextClass} max-w-2xl mx-auto opacity-90`}>
            Explore our offices and manufacturing facilities across Bangladesh
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="relative perspective-1000">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 transform-style-3d">
              <div className="lg:col-span-1 bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-3xl overflow-hidden border border-red-800 shadow-2xl transform transition-all duration-500 hover:shadow-red-900/20">
                <div className="p-6">
                  <h2 className={`text-2xl font-bold mb-6 flex items-center ${goldTextClass}`}>
                    <MapPin className="mr-2 text-red-400" />
                    <span>Select Location</span>
                  </h2>
                  <div className="space-y-3">
                    {locations.map((location) => (
                      <div
                        key={location.id}
                        onClick={() => setSelectedLocation(location)}
                        className={`relative cursor-pointer rounded-xl p-4 flex items-center transition-all duration-300 group ${
                          selectedLocation.id === location.id
                            ? "bg-gray-800 shadow-lg border-l-4 border-red-600"
                            : "hover:bg-gray-800/70"
                        }`}
                      >
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center mr-4 transition-transform duration-500 group-hover:scale-110 border-2 border-red-600"
                          style={{
                            background: `radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, rgba(220, 38, 38, 0.1) 100%)`,
                          }}
                        >
                          <LocationIcon icon={location.icon} />
                        </div>
                        <div className="flex-1">
                          <h3 className={`font-bold ${goldTextClass} group-hover:${dimmerGoldTextClass} transition-colors duration-300`}>
                            {location.name}
                          </h3>
                          <p className={`text-sm ${dimmerGoldTextClass}`}>
                            {location.subtitle}
                          </p>
                        </div>
                        <ChevronRight
                          className={`transition-transform duration-300 ${
                            selectedLocation.id === location.id
                              ? "text-red-400 translate-x-0"
                              : "text-gray-600 -translate-x-1 group-hover:translate-x-0"
                          }`}
                        />
                        {selectedLocation.id === location.id && (
                          <div className="absolute inset-0 rounded-xl overflow-hidden">
                            <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-red-500/20 to-transparent animate-shimmer"></div>
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
                    className="relative bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-3xl overflow-hidden border border-red-800 shadow-2xl mb-6 transform transition-all duration-700"
                    style={{
                      height: "330px",
                      transformStyle: "preserve-3d",
                      transform: `rotateX(${isMapLoaded ? 0 : 5}deg) rotateY(${
                        isMapLoaded ? 0 : -5
                      }deg)`,
                      boxShadow: `0 25px 50px -12px rgba(220, 38, 38, 0.3)`,
                    }}
                  >
                    {!isMapLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 z-10">
                        <div className="w-16 h-16 relative">
                          <div className="w-16 h-16 rounded-full border-t-4 border-l-4 border-red-500 animate-spin absolute"></div>
                          <div
                            className="w-12 h-12 rounded-full border-t-4 border-l-4 border-amber-600 animate-spin absolute inset-2"
                            style={{ animationDirection: "reverse" }}
                          ></div>
                        </div>
                      </div>
                    )}
                    <div
                      ref={mapRef}
                      className="w-full h-full"
                      style={{
                        opacity: isMapLoaded ? 1 : 0,
                        transition: "opacity 1s",
                      }}
                    ></div>
                    <div
                      className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-700 ${
                        isMapLoaded
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}
                    >
                      <div className="flex items-center mb-2">
                        <div
                          className="w-3 h-3 rounded-full mr-3"
                          style={{ backgroundColor: "#dc2626" }}
                        ></div>
                        <h3 className={`text-xl font-bold ${goldTextClass}`}>
                          {selectedLocation.name}
                        </h3>
                      </div>
                      <p className={`text-sm ${dimmerGoldTextClass} ml-6`}>
                        {selectedLocation.address}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`flex-1 bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-3xl overflow-hidden border border-red-800 shadow-2xl p-6 transition-all duration-700 ${
                      showDetails
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{
                      transformStyle: "preserve-3d",
                      transform: `rotateX(${
                        showDetails && !isDetailsAnimating ? 0 : 5
                      }deg) rotateY(${
                        showDetails && !isDetailsAnimating ? 0 : 5
                      }deg)`,
                      boxShadow: `0 25px 50px -12px rgba(220, 38, 38, 0.3)`,
                    }}
                  >
                    <div className="flex flex-col h-full">
                      <h3
                        className={`text-2xl font-bold mb-4 ${goldTextClass}`}
                      >
                        Location Details
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center p-3 bg-gray-800 bg-opacity-50 rounded-xl border border-gray-700">
                          <Phone size={18} className={`mr-3 ${goldTextClass}`} />
                          <div>
                            <p className={`text-xs ${dimmerGoldTextClass} opacity-90`}>Phone</p>
                            <p className={`text-sm ${goldTextClass} opacity-80`}>
                              {selectedLocation.phone}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center p-3 bg-gray-800 bg-opacity-50 rounded-xl border border-gray-700">
                          <Mail size={18} className={`mr-3 ${goldTextClass}`} />
                          <div>
                            <p className={`text-xs ${dimmerGoldTextClass} opacity-90`}>Email</p>
                            <p className={`text-sm ${goldTextClass} opacity-80`}>
                              {selectedLocation.email}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center p-3 bg-gray-800 bg-opacity-50 rounded-xl md:col-span-2 border border-gray-700">
                          <Clock size={18} className={`mr-3 ${goldTextClass}`} />
                          <div>
                            <p className={`text-xs ${dimmerGoldTextClass} opacity-90`}>
                              Working Hours
                            </p>
                            <p className={`text-sm ${goldTextClass} opacity-80`}>
                              {selectedLocation.hours}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <h4 className={`text-lg font-medium mb-3 ${goldTextClass}`}>
                          Photo Gallery
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {[1, 2].map((img, index) => (
                            <div
                              key={index}
                              className="relative rounded-xl overflow-hidden h-24 md:h-32 bg-gray-800 transform transition-all duration-500 hover:scale-105 cursor-pointer"
                              style={{
                                animation: `fadeSlideUp 0.6s ${
                                  index * 0.2 + 0.3
                                }s both`,
                              }}
                            >
                              <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                  backgroundImage: `url(${selectedLocation.images?.[index] || '/api/placeholder/400/240'})`,
                                }}
                              ></div>
                              <div
                                className="absolute inset-0 opacity-60"
                                style={{
                                  background: `linear-gradient(to top, rgba(139, 0, 0, 0.6), transparent)`,
                                }}
                              ></div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-auto pt-4">
                        <button
                          onClick={() =>
                            handleViewDetails(selectedLocation.detailsUrl)
                          }
                          className="w-full flex items-center justify-center py-3 rounded-xl transition-all duration-300 group relative overflow-hidden text-white font-medium mr-2"
                          style={{
                            background: `linear-gradient(90deg, #dc2626, #b91c1c)`,
                            filter:
                              "drop-shadow(0 10px 8px rgba(220, 38, 38, 0.1)) drop-shadow(0 4px 3px rgba(220, 38, 38, 0.2))",
                          }}
                        >
                          <div className="absolute inset-0 w-full translate-x-full group-hover:animate-shine bg-gradient-to-r from-transparent via-red-400/30 to-transparent"></div>
                          <span className="relative z-10">View Facility Details</span>
                          <ExternalLink size={16} className="ml-2 relative z-10" />
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
      <style jsx="true">{`
        .custom-map-marker {
          width: 30px !important;
          height: 30px !important;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: radial-gradient(circle, #D4AF37 0%, #DC2626 100%);
          border: 2px solid #b91c1c;
          animation: marker-pulse 1.5s infinite ease-in-out;
        }
        @keyframes marker-pulse {
          0% { transform: scale(0.9); opacity: 0.8; }
          50% { transform: scale(1); opacity: 1; }
          100% { transform: scale(0.9); opacity: 0.8; }
        }
        .leaflet-container {
          background-color: #111827;
        }
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes shine {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(100%);
          }
        }
        .animate-shine {
          animation: shine 1.5s;
        }
        .animate-shimmer {
          animation: shine 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Location;