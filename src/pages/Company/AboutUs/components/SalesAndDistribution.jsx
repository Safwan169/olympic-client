import React, { useState } from "react";
import { MapPin, Users, Store, TrendingUp } from "lucide-react";

const SalesDistribution = () => {
  const [activeTab, setActiveTab] = useState("network");

  const stats = [
    {
      id: "network",
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Sales Force",
      value: "1,887",
      description: "Sales representatives nationwide",
    },
    {
      id: "retailers",
      icon: <Store className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Retail Reach",
      value: "1,000,000+",
      description: "Retail outlets across Bangladesh",
    },
    {
      id: "distributors",
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Distribution Network",
      value: "754",
      description: "Strategic distributors",
    },
    {
      id: "growth",
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Brand Presence",
      value: "100,000+",
      description: "Co-branded store signage",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 to-black text-white px-4 py-10 sm:px-6 md:px-16 lg:px-24 sm:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header with animated underline */}
        <div className="mb-8 sm:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-600">
              SALES & DISTRIBUTION
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 group-hover:w-full transition-all duration-700 ease-in-out"></span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mt-2"></div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Stats and Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Stats cards */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className={`p-3 sm:p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                    activeTab === stat.id
                      ? "bg-amber-900/30 border-amber-500/50 shadow-lg"
                      : "bg-gray-800/50 border-gray-700 hover:border-amber-500/30"
                  }`}
                  onClick={() => setActiveTab(stat.id)}
                >
                  <div className="flex items-center mb-1 sm:mb-2">
                    <div className="mr-2 text-amber-500">{stat.icon}</div>
                    <h4 className="font-medium text-sm sm:text-base text-amber-400">
                      {stat.title}
                    </h4>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-300">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Main content text */}
            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg leading-relaxed text-gray-200">
                Olympic has one of the most extensive sales and distribution
                networks in Bangladesh, spanning all 64 districts of the
                country. Our products reach even the most remote corners, making
                Olympic a household name across Bangladesh.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-200">
                Our sales force is equipped with cutting-edge technology to
                ensure seamless operations and capture vital market insights,
                maintaining our competitive edge in the market.
              </p>
            </div>
          </div>

          {/* Right side - Interactive image */}
          <div className="relative group rounded-xl overflow-hidden shadow-xl shadow-amber-900/20 mt-8 lg:-mt-16 xl:-mt-60">
            {/* Main image */}
            <img
              src="https://olympicbd.com/wp-content/uploads/2016/06/Body-Image-1.jpg"
              alt="Olympic's Distribution Network"
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl group-hover:scale-105 transition-all duration-700 ease-in-out"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-all duration-500"></div>

            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
              <h3 className="text-xl sm:text-2xl font-bold text-amber-400 mb-1 sm:mb-2">
                Nationwide Coverage
              </h3>
              <p className="text-white text-xs sm:text-sm mb-3 sm:mb-4">
                Our strategic network ensures Olympic products are available in
                every corner of Bangladesh
              </p>

              {/* Statistics overlay */}
              <div className="flex justify-between text-white">
                <div>
                  <p className="text-xs text-gray-300">Coverage</p>
                  <p className="font-bold text-amber-400">64 Districts</p>
                </div>
                <div>
                  <p className="text-xs text-gray-300">Growth</p>
                  <p className="font-bold text-amber-400">12% YoY</p>
                </div>
                <div>
                  <p className="text-xs text-gray-300">Efficiency</p>
                  <p className="font-bold text-amber-400">98.7%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom feature highlight */}
        <div className="mt-8 sm:mt-16 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl p-4 sm:p-6 border border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-lg sm:text-xl font-bold text-amber-400 mb-2">
                Technology-Driven Distribution
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                Olympic's sales force utilizes advanced technology solutions for
                order processing, inventory management, and market analysis to
                ensure efficient distribution and comprehensive market coverage.
              </p>
            </div>
            <div className="flex gap-3 sm:gap-4">
              <div className="px-3 sm:px-4 py-2 bg-amber-900/30 rounded-lg border border-amber-700/30 text-center">
                <p className="text-2xl sm:text-3xl font-bold text-amber-400">
                  24/7
                </p>
                <p className="text-xs text-gray-300">Support</p>
              </div>
              <div className="px-3 sm:px-4 py-2 bg-amber-900/30 rounded-lg border border-amber-700/30 text-center">
                <p className="text-2xl sm:text-3xl font-bold text-amber-400">
                  99.8%
                </p>
                <p className="text-xs text-gray-300">Delivery Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesDistribution;
