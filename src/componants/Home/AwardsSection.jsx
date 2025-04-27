import { useState } from "react";
import { Trophy, Users, Leaf } from "lucide-react";

const AwardsSection = () => {
  const [activeSection, setActiveSection] = useState("innovation");

  return (
    <div className="mx-auto mt-14 p-6 font-sans bg-black text-gray-200 min-h-screen">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-yellow-500 mb-4">
          Awards & Recognition
        </h1>
        <p className="text-gray-300 mb-6">
          Olympic Industries is proud to be consistently recognized as a leading
          biscuit and <br /> confectionery company, earning a variety of awards
          and recognitions in several key areas.
        </p>

        <p className="text-red-400 font-medium mb-8">
          Click to jump to each section.
        </p>

        {/* Navigation Icons */}
        <div className="flex justify-center space-x-12 mb-12">
          <button
            onClick={() => setActiveSection("innovation")}
            className={`flex flex-col items-center transition-opacity duration-200 ${
              activeSection === "innovation" ? "opacity-100" : "opacity-70"
            }`}
          >
            <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-2">
              <Trophy size={24} color="white" />
            </div>
            <span className="text-yellow-400 font-medium">Innovation</span>
          </button>

          <button
            onClick={() => setActiveSection("brands")}
            className={`flex flex-col items-center transition-opacity duration-200 ${
              activeSection === "brands" ? "opacity-100" : "opacity-70"
            }`}
          >
            <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-2">
              <Users size={24} color="white" />
            </div>
            <span className="text-yellow-400 font-medium">
              Brand Excellence
            </span>
          </button>

          <button
            onClick={() => setActiveSection("responsibility")}
            className={`flex flex-col items-center transition-opacity duration-200 ${
              activeSection === "responsibility" ? "opacity-100" : "opacity-70"
            }`}
          >
            <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-2">
              <Leaf size={24} color="white" />
            </div>
            <span className="text-yellow-400 font-medium">Social</span>
          </button>
        </div>
      </div>

      {/* Content Sections */}
      <div className="mt-12">
        {activeSection === "innovation" && (
          <div>
            <h2 className="text-2xl font-bold text-red-500 text-center mb-8">
              Innovation
            </h2>
            <p className="text-gray-300 text-center mb-8">
              A culture rooted in forward-thinking, quality manufacturing, and
              product excellence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-900 p-6 rounded shadow-lg border border-red-800 flex flex-col items-center">
                <div className="w-32 h-32 bg-white rounded-full mb-4 flex items-center justify-center p-2">
                  <div className="bg-red-800 h-full w-full rounded-full flex items-center justify-center">
                    <p className="text-white font-bold text-center text-sm">
                      BEST
                      <br />
                      BISCUIT
                      <br />
                      MANUFACTURER
                      <br />
                      2024
                    </p>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-yellow-400 mb-2 text-center">
                  Best Biscuit Manufacturer of the Year
                </h3>
                <p className="text-gray-400 text-center mb-2">
                  Food & Beverage Excellence Awards 2024
                </p>
                <button className="mt-2 text-red-400 hover:text-red-300 hover:underline">
                  Read more
                </button>
              </div>

              <div className="bg-gray-900 p-6 rounded shadow-lg border border-red-800 flex flex-col items-center">
                <div className="w-32 h-32 bg-white rounded-full mb-4 flex items-center justify-center p-2">
                  <div className="bg-red-800 h-full w-full rounded-full flex items-center justify-center">
                    <p className="text-white font-bold text-center text-xs">
                      MOST
                      <br />
                      INNOVATIVE
                      <br />
                      PRODUCT
                      <br />
                      2023
                    </p>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-yellow-400 mb-2 text-center">
                  Most Innovative Product Launch
                </h3>
                <p className="text-gray-400 text-center mb-2">
                  Energy Plus Biscuits - National Food Innovation Awards 2023
                </p>
                <button className="mt-2 text-red-400 hover:text-red-300 hover:underline">
                  Click here to read more awards
                </button>
              </div>
            </div>
          </div>
        )}

        {activeSection === "brands" && (
          <div>
            <h2 className="text-2xl font-bold text-red-500 text-center mb-8">
              Brand Excellence
            </h2>
            <p className="text-gray-300 text-center mb-8">
              Olympic's commitment to quality and consumer satisfaction has
              established us as one of the most trusted brands in the industry.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900 p-6 rounded shadow-lg border border-red-800 flex flex-col items-center">
                <div className="w-32 h-32 bg-white rounded-full mb-4 flex items-center justify-center">
                  <p className="text-black font-bold text-sm text-center">
                    CONSUMER CHOICE AWARD 2024
                  </p>
                </div>
                <h3 className="text-lg font-bold text-yellow-400 mb-2">
                  Most Loved Biscuit Brand
                </h3>
                <p className="text-gray-400 text-center">
                  Consumer Choice Awards 2024
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded shadow-lg border border-red-800 flex flex-col items-center">
                <div className="w-32 h-32 bg-white rounded-full mb-4 flex items-center justify-center">
                  <p className="text-black font-bold text-center">Top FMCG</p>
                  <p className="text-black text-xs">Brand Excellence</p>
                  <p className="text-black text-xs">2023 Winner</p>
                </div>
                <h3 className="text-lg font-bold text-yellow-400 mb-2">
                  Top FMCG Brand
                </h3>
                <p className="text-gray-400 text-center">
                  Brand Excellence Awards
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded shadow-lg border border-red-800 flex flex-col items-center">
                <div className="w-32 h-32 bg-white rounded-full mb-4 flex items-center justify-center">
                  <p className="text-black font-bold text-sm text-center">
                    BEST EXPORT BRAND 2023
                  </p>
                </div>
                <h3 className="text-lg font-bold text-yellow-400 mb-2">
                  Excellence in Export
                </h3>
                <p className="text-gray-400 text-center">
                  National Export Trophy
                </p>
              </div>
            </div>
          </div>
        )}

        {activeSection === "responsibility" && (
          <div>
            <h2 className="text-2xl font-bold text-red-500 text-center mb-8">
              Corporate Social Responsibility
            </h2>
            <p className="text-gray-300 text-center mb-8">
              Leading the way in corporate citizenship by making sustainability
              and social impact a top priority.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-900 p-6 rounded shadow-lg border border-red-800 flex flex-col items-center">
                <div className="w-32 h-32 bg-white rounded-full mb-4 flex items-center justify-center p-2">
                  <div className="bg-red-800 h-full w-full rounded-full flex items-center justify-center">
                    <p className="text-white text-xs font-bold text-center">
                      SUSTAINABILITY
                      <br />
                      CHAMPION
                      <br />
                      AWARD
                      <br />
                      2023
                    </p>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-yellow-400 mb-2">
                  Sustainability Champion
                </h3>
                <p className="text-gray-400 text-center">
                  Green Business Awards
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded shadow-lg border border-red-800 flex flex-col items-center">
                <div className="w-32 h-32 bg-white rounded-full mb-4 flex items-center justify-center">
                  <div className="rounded-full border-4 border-red-800 h-24 w-24 flex items-center justify-center">
                    <p className="text-red-800 font-bold text-center">CSR</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-yellow-400 mb-2">
                  CSR Excellence Award
                </h3>
                <p className="text-gray-400 text-center">
                  Corporate Social Responsibility Forum
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AwardsSection;
