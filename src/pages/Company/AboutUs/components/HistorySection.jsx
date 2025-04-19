import { useState, useEffect } from "react";
import { ChevronRight, Clock, Star, Award, TrendingUp } from "lucide-react";

export default function HistorySection() {
  const [activeTab, setActiveTab] = useState("milestones");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Ensure the tab change function works properly
  const handleTabChange = (tabId) => {
    console.log(`Changing to tab: ${tabId}`);
    setActiveTab(tabId);
  };

  const tabs = [
    { id: "journey", label: "Our Journey" },
    { id: "milestones", label: "Key Milestones" },
    { id: "values", label: "Core Values" },
  ];

  return (
    <div className="bg-black text-white min-h-screen py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-32">
      <div className="max-w-6xl mx-auto">
        {/* Responsive Animated Header */}
        <div
          className={`relative transition-all duration-1000 transform ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-2xl text-center xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-16">
            Our <span className="text-red-600">HISTORY</span> of
            <span className="text-yellow-500"> Excellence</span>
          </h2>
        </div>

        {/* Responsive Navigation Tabs - Fixed to ensure clickability */}
        <div
          className={`flex flex-wrap justify-center sm:justify-start space-x-0 sm:space-x-1 mb-8 sm:mb-12 border-b border-gray-800 transition-all duration-1000 delay-300 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              type="button"
              className={`py-2 sm:py-3 px-3 sm:px-6  text-sm sm:text-base focus:outline-none transition-all duration-300 relative z-10 ${
                activeTab === tab.id
                  ? "text-yellow-500 border-b-2 border-red-600 font-bold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div
          className={`transition-all duration-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Our Journey Tab */}
          {activeTab === "journey" && (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
              <div className="lg:col-span-3 space-y-6 sm:space-y-8">
                <div className="relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-yellow-600/80 opacity-0 group-hover:opacity-90 transition-all duration-500"></div>
                  <div className="h-48 sm:h-64 bg-gray-800 rounded-lg flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center text-center p-4 sm:p-6 relative z-10">
                      <p className="text-xl sm:text-3xl font-light mb-1 sm:mb-2 group-hover:text-black transition-colors duration-500">
                        Founded in
                      </p>
                      <p className="text-4xl sm:text-6xl font-bold text-red-600 group-hover:text-black transition-colors duration-500">
                        1979
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-base sm:text-lg leading-relaxed text-gray-300">
                  Olympic Industries Limited was founded in June 1979 as Bengal
                  Carbide Limited, a battery manufacturer. As we gained the
                  trust of our consumers and witnessed changes in the battery
                  industry, we decided to diversify into products that could be
                  a part of our consumers' daily lives.
                </p>

                <div className="border-l-2 sm:border-l-4 border-red-600 pl-4 sm:pl-6 py-2">
                  <p className="text-lg sm:text-2xl font-light italic text-yellow-500">
                    "Today, we are the largest manufacturer of biscuits in
                    Bangladesh."
                  </p>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                <div className="bg-gray-900 rounded-lg p-4 sm:p-6 border-t-4 border-yellow-500 hover:shadow-yellow-500/20 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center">
                    <Clock size={20} className="text-red-600 mr-2" />
                    Our Timeline
                  </h3>
                  <ul className="space-y-3 sm:space-y-4">
                    <li className="flex">
                      <ChevronRight
                        size={16}
                        className="text-yellow-500 mt-1 mr-2 flex-shrink-0"
                      />
                      <div className="text-sm sm:text-base">
                        <span className="text-red-600 font-bold">1979:</span>{" "}
                        Founded as Bengal Carbide Limited
                      </div>
                    </li>
                    <li className="flex">
                      <ChevronRight
                        size={16}
                        className="text-yellow-500 mt-1 mr-2 flex-shrink-0"
                      />
                      <div className="text-sm sm:text-base">
                        <span className="text-red-600 font-bold">1996:</span>{" "}
                        Diversified into biscuit and confectionery
                      </div>
                    </li>
                    <li className="flex">
                      <ChevronRight
                        size={16}
                        className="text-yellow-500 mt-1 mr-2 flex-shrink-0"
                      />
                      <div className="text-sm sm:text-base">
                        <span className="text-red-600 font-bold">Today:</span>{" "}
                        Market leader with 95%+ revenue from biscuits
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-4 sm:p-6 hover:shadow-red-600/20 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-yellow-500">
                    Growth & Evolution
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    Over the last 30 years, Olympic has grown to be one of the
                    largest manufacturers, distributors and marketers of fast
                    moving consumer goods in Bangladesh.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Key Milestones Tab */}
          {activeTab === "milestones" && (
            <div className="space-y-8 sm:space-y-12">
              {/* First Milestone */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-center">
                <div className="md:col-span-1">
                  <div className="text-6xl sm:text-8xl font-bold text-red-600 opacity-80">
                    01
                  </div>
                  <div className="mt-2 sm:mt-4 h-1 w-16 sm:w-24 bg-yellow-600"></div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-yellow-500">
                    Foundation as Battery Manufacturer
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    Olympic Industries Limited was founded in June 1979 as
                    Bengal Carbide Limited, a battery manufacturer. This was our
                    first step into Bangladesh's manufacturing sector.
                  </p>
                </div>
              </div>

              {/* Second Milestone */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-center">
                <div className="md:col-span-1">
                  <div className="text-6xl sm:text-8xl font-bold text-red-600 opacity-80">
                    02
                  </div>
                  <div className="mt-2 sm:mt-4 h-1 w-16 sm:w-24 bg-yellow-600"></div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-yellow-500">
                    Strategic Diversification
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    In 1996, we saw significant opportunities in the biscuit and
                    confectionery industries and imported our first production
                    lines. This pivotal decision transformed our business
                    trajectory.
                  </p>
                </div>
              </div>

              {/* Third Milestone */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-center">
                <div className="md:col-span-1">
                  <div className="text-6xl sm:text-8xl font-bold text-red-600 opacity-80">
                    03
                  </div>
                  <div className="mt-2 sm:mt-4 h-1 w-16 sm:w-24 bg-yellow-600"></div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-yellow-500">
                    Market Leadership
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    Today, we are the largest manufacturer of biscuits in
                    Bangladesh and biscuits and confectionery products represent
                    95%+ of our annual revenue. Our commitment to quality has
                    established us as a trusted household name.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Core Values Tab */}
          {activeTab === "values" && (
            <div className="space-y-6 sm:space-y-10">
              <p className="text-base sm:text-xl leading-relaxed text-gray-300">
                What makes Olympic so popular is the quality of our products. We
                understand that customers have high expectations, and that their
                loyalty depends on it. As the market leader in the biscuits
                industry, we have only been able to achieve what we have by
                staying true to our core values and by focusing on the consumer.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-gray-900 p-4 sm:p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1">
                  <Star size={24} className="text-yellow-500 mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-red-600">
                    Quality First
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    We maintain the highest standards in our manufacturing
                    processes to ensure consistent product quality.
                  </p>
                </div>

                <div className="bg-gray-900 p-4 sm:p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1">
                  <Award size={24} className="text-yellow-500 mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-red-600">
                    Consumer Focus
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    Our products are designed with the consumer in mind, meeting
                    their expectations and becoming part of their daily lives.
                  </p>
                </div>

                <div className="bg-gray-900 p-4 sm:p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1">
                  <TrendingUp
                    size={24}
                    className="text-yellow-500 mb-3 sm:mb-4"
                  />
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-red-600">
                    Continuous Growth
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    We constantly seek opportunities to improve and expand,
                    adapting to changes in the market and consumer preferences.
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button className="px-6 py-2 sm:px-8 sm:py-3 bg-red-600 text-white text-sm sm:text-base font-bold rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-red-600/30">
                  Learn More About Our Values
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
