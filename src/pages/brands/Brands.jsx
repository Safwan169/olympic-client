import React, { useRef, useState, useEffect } from "react";
import ProductCard from "../../componants/common/ProductCard";

const Brands = () => {
  // Create refs for each section
  const biscuitsRef = useRef(null);
  const cookiesRef = useRef(null);
  const confectioneryRef = useRef(null);
  const snacksRef = useRef(null);
  const batteriesRef = useRef(null);

  // State to track active tab
  const [activeTab, setActiveTab] = useState("snacks"); // Default to snacks as active
  const [scrolling, setScrolling] = useState(false);

  // Scroll to section function
  const scrollToSection = (ref, tabName) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setActiveTab(tabName);
  };

  // Handle scroll event to update active tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (scrolling) return;

      const sections = [
        { ref: biscuitsRef, name: "biscuits" },
        { ref: cookiesRef, name: "cookies" },
        { ref: confectioneryRef, name: "confectionery" },
        { ref: snacksRef, name: "snacks" },
        { ref: batteriesRef, name: "batteries" },
      ];

      const currentSection = sections.find((section) => {
        if (!section.ref.current) return false;
        const rect = section.ref.current.getBoundingClientRect();
        return rect.top <= 200 && rect.bottom >= 200;
      });

      if (currentSection && currentSection.name !== activeTab) {
        setActiveTab(currentSection.name);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTab, scrolling]);

  // Handle the end of scrolling
  useEffect(() => {
    if (scrolling) {
      const timer = setTimeout(() => setScrolling(false), 100);
      return () => clearTimeout(timer);
    }
  }, [scrolling]);

  // Product data
  const biscuits = [
    {
      id: 1,
      name: "Milk",
      description: "Rich dark chocolate biscuits",
      image: "Milk.jpg",
      packets: [
        { size: "Small Pack (100g)", price: "10" },
        { size: "Family Pack (250g)", price: "20" },
      ],
    },
    {
      id: 2,
      name: "Nutty",
      description: "Creamy milk chocolate biscuits",
      image: "Nutty.jpg",
      packets: [
        { size: "Small Pack (100g)", price: "10" },
        { size: "Medium Pack (150g)", price: "15" },
        { size: "Large Pack (200g)", price: "18" },
        { size: "Family Pack (250g)", price: "22" },
      ],
    },
    {
      id: 3,
      name: "Tip",
      description: "Nutty chocolate sensation",
      image: "Tip.png",
      packets: [], // No variety
    },
    {
      id: 4,
      name: "Enagry",
      description: "Zesty orange infused chocolate",
      image: "Energy.png",
      packets: [
        { size: "Small Pack (100g)", price: "15" },
        { size: "Family Pack (250g)", price: "60" },
      ],
    },
  ];

  const cookies = [
    {
      id: 1,
      name: "Bisconi-Mughal-cookies",
      description: "Classic chocolate chip cookies",
      image: "Bisconi-Mughal-cookies.png",
      packets: [
        { size: "Small Pack (100g)", price: "8" },
        { size: "Medium Pack (150g)", price: "12" },
        { size: "Large Pack (200g)", price: "15" },
      ],
    },
    {
      id: 2,
      name: "Biscotti",
      description: "Hearty oatmeal cookies with raisins",
      image: "24 cookies.jpg",
      packets: [
        { size: "Small Pack (100g)", price: "7" },
        { size: "Medium Pack (150g)", price: "11" },
        { size: "Family Pack (250g)", price: "18" },
      ],
    },
    {
      id: 3,
      name: "Salcoti-cookies-biscuits",
      description: "Soft and chewy peanut butter cookies",
      image: "Salcoti-cookies-biscuits.jpg",
      packets: [
        { size: "Small Pack (100g)", price: "9" },
        { size: "Large Pack (250g)", price: "16" },
      ],
    },
    {
      id: 4,
      name: "Daily-Cookies",
      description: "Rich double chocolate cookies",
      image: "Daily-Cookies.jpg",
      packets: [
        { size: "Small Pack (100g)", price: "10" },
        { size: "Medium Pack (150g)", price: "14" },
        { size: "Family Pack (250g)", price: "20" },
      ],
    },
  ];

  const confectionery = [
    {
      id: 1,
      name: "Eclairs",
      description: "Chewy and fruity gummy bears in assorted flavors",
      image: "Eclairs jar.jpg",
      packets: [
        { size: "Small Pack (100g)", price: "5" },
        { size: "Medium Pack (150g)", price: "7" },
        { size: "Large Pack (250g)", price: "10" },
      ],
    },
    {
      id: 2,
      name: "Hojmi",
      description: "Colorful lollipops with long-lasting flavors",
      image: "Hojmi.jpg",
      packets: [
        { size: "Pack of 5", price: "4" },
        { size: "Pack of 10", price: "7" },
      ],
    },
    {
      id: 3,
      name: "Pulse-Masala-Mango",
      description: "Soft and chewy caramel toffees",
      image: "Pulse-Masala-Mango.jpg",
      packets: [
        { size: "Small Pack (100g)", price: "6" },
        { size: "Medium Pack (200g)", price: "11" },
        { size: "Large Pack (500g)", price: "25" },
      ],
    },
    {
      id: 4,
      name: "Toffito-chocolate-jar",
      description: "Rich, creamy chocolate truffles with a smooth center",
      image: "Toffito-chocolate-jar.jpg",
      packets: [
        { size: "Box of 6", price: "12" },
        { size: "Box of 12", price: "20" },
      ],
    },
  ];

  const snacks = [
    {
      id: 1,
      name: "Crispo Chips",
      description: "Crispy and salty potato chips in a variety of flavors",
      image: "Crispo chips.jpg",
      packets: [
        { size: "Small Pack (50g)", price: "2" },
        { size: "Medium Pack (100g)", price: "4" },
        { size: "Large Pack (200g)", price: "7" },
      ],
    },
    {
      id: 2,
      name: "Foodie-Bite-Chira-Bhaja",
      description: "Crunchy and savory pretzels, perfect for snacking",
      image: "Foodie-Bite-Chira-Bhaja.jpg",
      packets: [
        { size: "Small Pack (80g)", price: "3" },
        { size: "Medium Pack (150g)", price: "5" },
        { size: "Large Pack (250g)", price: "8" },
      ],
    },
    {
      id: 3,
      name: "Crispo-Hot-Sour",
      description: "Delicious cheesy flavored corn puffs",
      image: "Crispo-Hot-Sour.jpg",
      packets: [
        { size: "Small Pack (50g)", price: "2.5" },
        { size: "Medium Pack (100g)", price: "4.5" },
        { size: "Large Pack (200g)", price: "7.5" },
      ],
    },
    {
      id: 4,
      name: "Crispo-Doi-Papri-Chat",
      description: "Healthy and tasty granola bars with mixed nuts and honey",
      image: "Crispo-Doi-Papri-Chat.jpg",
      packets: [
        { size: "Pack of 2", price: "3" },
        { size: "Pack of 4", price: "5" },
        { size: "Pack of 6", price: "7" },
      ],
    },
  ];

  const batteries = [
    {
      id: 1,
      name: "Olympic-Heavy-Duty-Battery",
      description: "Long-lasting AA rechargeable batteries for everyday use",
      image: "Olympic-Heavy-Duty-Battery.jpg",
      packets: [
        { size: "Pack of 2", price: "10" },
        { size: "Pack of 4", price: "18" },
        { size: "Pack of 8", price: "32" },
      ],
    },
    {
      id: 2,
      name: "Volt-UM-3-Battry",
      description:
        "High-performance AAA lithium batteries, ideal for high-drain devices",
      image: "Volt-UM-3-Battry.jpg",
      packets: [
        { size: "Pack of 4", price: "8" },
        { size: "Pack of 8", price: "15" },
      ],
    },
    {
      id: 3,
      name: "Olympic-UM3",
      description:
        "Reliable CR2032 coin cell batteries for watches, remotes, and small electronics",
      image: "Olympic-UM3.jpg",
      packets: [
        { size: "Pack of 2", price: "3" },
        { size: "Pack of 5", price: "7" },
        { size: "Pack of 10", price: "13" },
      ],
    },
    {
      id: 4,
      name: "Olympic-Laser",
      description:
        "High-capacity 9V rechargeable battery for long-lasting performance",
      image: "Olympic-Laser.jpg",
      packets: [
        { size: "Single", price: "10" },
        { size: "Pack of 2", price: "18" },
      ],
    },
  ];

  return (
    <div className="bg-black min-h-screen text-white font-poppins border-2 border-red-400">
      {/* Fixed navigation bar - now with responsive design */}
      <div className="fixed top-0 left-0 pt-10 sm:pt-16 bg-gradient-to-b from-black via-black to-transparent z-10 backdrop-blur-sm">
        <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-4">
          <div className="flex justify-center">
            <div className="w-full overflow-x-auto scrollbar-hide pb-2">
              <div className="flex space-x-1 sm:space-x-2 rounded-xl bg-gray-900/80 p-1 sm:p-1.5 border border-gray-800 shadow-xl min-w-max mx-auto">
                <button
                  className={`px-2 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-xs sm:text-sm nav-item ${
                    activeTab === "biscuits"
                      ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/30"
                      : "text-yellow-400 bg-gray-800/50 hover:bg-gray-700 border border-yellow-500/20 hover:border-yellow-500/40"
                  }`}
                  onClick={() => {
                    setScrolling(true);
                    scrollToSection(biscuitsRef, "biscuits");
                  }}
                >
                  Biscuits
                </button>
                <button
                  className={`px-2 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-xs sm:text-sm nav-item ${
                    activeTab === "cookies"
                      ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/30"
                      : "text-yellow-400 bg-gray-800/50 hover:bg-gray-700 border border-yellow-500/20 hover:border-yellow-500/40"
                  }`}
                  onClick={() => {
                    setScrolling(true);
                    scrollToSection(cookiesRef, "cookies");
                  }}
                >
                  Cookies
                </button>
                <button
                  className={`px-2 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-xs sm:text-sm nav-item ${
                    activeTab === "confectionery"
                      ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/30"
                      : "text-yellow-400 bg-gray-800/50 hover:bg-gray-700 border border-yellow-500/20 hover:border-yellow-500/40"
                  }`}
                  onClick={() => {
                    setScrolling(true);
                    scrollToSection(confectioneryRef, "confectionery");
                  }}
                >
                  Confectionery
                </button>
                <button
                  className={`px-2 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-xs sm:text-sm nav-item ${
                    activeTab === "snacks"
                      ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/30"
                      : "text-yellow-400 bg-gray-800/50 hover:bg-gray-700 border border-yellow-500/20 hover:border-yellow-500/40"
                  }`}
                  onClick={() => {
                    setScrolling(true);
                    scrollToSection(snacksRef, "snacks");
                  }}
                >
                  Snacks
                </button>
                <button
                  className={`px-2 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-xs sm:text-sm nav-item ${
                    activeTab === "batteries"
                      ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/30"
                      : "text-yellow-400 bg-gray-800/50 hover:bg-gray-700 border border-yellow-500/20 hover:border-yellow-500/40"
                  }`}
                  onClick={() => {
                    setScrolling(true);
                    scrollToSection(batteriesRef, "batteries");
                  }}
                >
                  Batteries
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Sections with adjusted padding for fixed navigation */}
      <div className="container mx-auto pt-24 sm:pt-32 md:pt-36 px-2 sm:px-4">
        {/* Biscuits */}
        <div ref={biscuitsRef} className="py-6 sm:py-10 section-transition">
          <ProductCard title={"Biscuits"} products={biscuits} />
        </div>

        {/* Cookies & Bakery */}
        <div ref={cookiesRef} className="py-6 sm:py-10 section-transition">
          <ProductCard title={"Cookies & Bakery"} products={cookies} />
        </div>

        {/* Confectionery */}
        <div
          ref={confectioneryRef}
          className="py-6 sm:py-10 section-transition"
        >
          <ProductCard title={"Confectionery"} products={confectionery} />
        </div>

        {/* Snacks */}
        <div ref={snacksRef} className="py-6 sm:py-10 section-transition">
          <ProductCard title={"Snacks"} products={snacks} />
        </div>

        {/* Batteries */}
        <div
          ref={batteriesRef}
          className="py-6 sm:py-10 section-transition mb-6 sm:mb-10"
        >
          <ProductCard title={"Batteries"} products={batteries} />
        </div>
      </div>

      {/* Add custom style for scrollbar hiding */}
      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default Brands;
