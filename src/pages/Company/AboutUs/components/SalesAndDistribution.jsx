import React, { useState } from "react";
import { MapPin, Users, Store, TrendingUp } from "lucide-react";
import GlobalHeroSection from "../../../../componants/GlobalHeroSection";

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
    <section className="bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto">
        <GlobalHeroSection
          firstHeading={" SALES &"}
          secondHeading={"DISTRIBUTION"}
          desc={"At Olympic Industries, most extensive sales and distribution"}
        />

        {/* Main content grid */}
        <div className="grid mt-10 grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-10">
          {/* Left side - Text Content */}
          <div className="space-y-6 sm:space-y-8">
            <p className="text-base sm:text-lg leading-relaxed text-gray-200">
              Olympic Industries Ltd. has built a vast and robust sales and
              distribution infrastructure that allows our products to reach
              households in every corner of Bangladesh. We operate across all 64
              districts, ensuring that even the remotest areas have consistent
              access to our diverse range of products.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-200">
              Our distribution strategy leverages both traditional logistics and
              modern technologies to maximize efficiency, minimize downtime, and
              ensure availability. From urban supermarkets to village stores,
              Olympic’s footprint is expansive and deep-rooted.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-200">
              Behind our wide market penetration lies a dedicated sales team
              equipped with digital tools for real-time tracking, data analysis,
              and customer feedback management. These innovations enable our
              workforce to respond swiftly to market demands and maintain an
              agile supply chain.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-200">
              Our continued investment in logistics infrastructure, warehousing,
              and data-driven systems has made us a pioneer in FMCG distribution
              in Bangladesh. Our commitment is simple — to deliver quality
              products promptly and reliably.
            </p>
          </div>

          {/* Right side - Interactive image */}
          <div className="relative group rounded-xl overflow-hidden shadow-xl shadow-amber-900/20 mt-8 lg:-mt-16 xl:-mt-60">
            <img
              src="https://olympicbd.com/wp-content/uploads/2016/06/Body-Image-1.jpg"
              alt="Olympic's Distribution Network"
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl group-hover:scale-105 transition-all duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-all duration-500"></div>

            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
              <h3 className="text-xl sm:text-2xl font-bold text-amber-400 mb-1 sm:mb-2">
                Nationwide Coverage
              </h3>
              <p className="text-white text-xs sm:text-sm mb-3 sm:mb-4">
                Our strategic network ensures Olympic products are available in
                every corner of Bangladesh
              </p>
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

        {/* Stats cards - Bottom Section */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-4 px-4 sm:px-10 mt-12">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                activeTab === stat.id
                  ? "bg-amber-900/30 border-amber-500/50 shadow-lg"
                  : "bg-gray-800/50 border-gray-700 hover:border-amber-500/30"
              }`}
              onClick={() => setActiveTab(stat.id)}
            >
              <div className="flex items-center mb-2">
                <div className="mr-2 text-amber-500">{stat.icon}</div>
                <h4 className="font-medium text-base text-amber-400">
                  {stat.title}
                </h4>
              </div>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-gray-300">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom feature highlight */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl p-4 sm:p-6 border border-gray-700 mx-4 sm:mx-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-lg sm:text-xl font-bold text-amber-400 mb-2">
                Technology-Driven Distribution
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                Olympic's sales force utilizes advanced technology solutions for
                order processing, inventory management, and market analysis to
                ensure efficient distribution and comprehensive market coverage.
                We use real-time analytics and geolocation tracking to monitor
                delivery patterns and optimize supply chain performance.
              </p>
            </div>
            <div className="flex gap-3 sm:gap-4">
              <div className="px-4 py-2 bg-amber-900/30 rounded-lg border border-amber-700/30 text-center">
                <p className="text-3xl font-bold text-amber-400">24/7</p>
                <p className="text-xs text-gray-300">Support</p>
              </div>
              <div className="px-4 py-2 bg-amber-900/30 rounded-lg border border-amber-700/30 text-center">
                <p className="text-3xl font-bold text-amber-400">99.8%</p>
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
