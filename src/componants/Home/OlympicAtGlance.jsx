import React from "react";
import { Award, Tags, Crown, Globe } from "lucide-react";

const OlympicAtGlance = () => {
  const stats = [
    {
      id: 1,
      icon: <Award size={48} className="text-red-600" />,
      title: "UNCOMPROMISING QUALITY",
      description:
        "Setting the gold standard in food manufacturing with state-of-the-art facilities and rigorous quality control processes.",
    },
    {
      id: 2,
      icon: <Tags size={48} className="text-red-600" />,
      title: "82 BRANDS STRONG",
      description:
        "From beloved classics to innovative new products, our diverse portfolio caters to every taste and preference.",
    },
    {
      id: 3,
      icon: <Crown size={48} className="text-red-600" />,
      title: "LARGEST BISCUIT & CANDY COMPANY",
      description:
        "Market leader in Bangladesh with extensive manufacturing capacity producing millions of units daily.",
    },
    {
      id: 4,
      icon: <Globe size={48} className="text-red-600" />,
      title: "EXPORTING TO 30+ COUNTRIES",
      description:
        "Taking the taste of Olympic worldwide, our products delight consumers across Asia, Middle East, Europe, and beyond.",
    },
  ];

  return (
    <section className="bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-yellow-500 relative">
          OLYMPIC AT A GLANCE
          <span className="block w-20 h-1 bg-red-600 mx-auto mt-4"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="p-6 border shadow-2xl border-yellow-700/30 rounded-lg text-center relative overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_25px_rgba(255,0,0,0.3)] bg-gradient-to-b from-black via-zinc-900 to-black hover:from-red-950"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-red-600 transition-all duration-300 group-hover:h-2"></div>

              <div className="mb-4 flex justify-center group-hover:animate-pulse">
                {stat.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 text-yellow-500 group-hover:text-red-500 transition-colors duration-300">
                {stat.title}
              </h3>

              <p className="text-gray-300 text-sm group-hover:text-gray-100 transition-colors duration-300">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OlympicAtGlance;
