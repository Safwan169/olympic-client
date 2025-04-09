import { useState } from "react";
import { Award, Shuffle, Compass, Users, Cog, Lightbulb } from "lucide-react";

export default function ValuesSection() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const values = [
    {
      icon: (
        <Award className="w-12 h-12 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
      ),
      title: "QUALITY",
      description:
        "We are dedicated to making products that are healthy, safe and hygienic.",
      color: "bg-gradient-to-br from-black to-gray-800",
      hoverColor: "from-black to-gray-700",
    },
    {
      icon: (
        <Shuffle className="w-12 h-12 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
      ),
      title: "INTEGRITY",
      description:
        "We believe that the best way to succeed is by staying true to our core values.",
      color: "bg-gradient-to-br from-black to-gray-800",
      hoverColor: "from-black to-gray-700",
    },
    {
      icon: (
        <Compass className="w-12 h-12 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
      ),
      title: "COMMITMENT",
      description: "We work hard, and we work with passion.",
      color: "bg-gradient-to-br from-black to-gray-800",
      hoverColor: "from-black to-gray-700",
    },
    {
      icon: (
        <Users className="w-12 h-12 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
      ),
      title: "PROFESSIONALISM",
      description:
        "We are always learning and adapting, as we are keen to follow best practices.",
      color: "bg-gradient-to-br from-black to-gray-800",
      hoverColor: "from-black to-gray-700",
    },
    {
      icon: (
        <Cog className="w-12 h-12 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
      ),
      title: "VISION",
      description:
        "Sustainability, innovation, and strategic planning play key roles in our business processes. The future is here, and we want to be part of it.",
      color: "bg-gradient-to-br from-red-600 to-red-800",
      hoverColor: "from-red-700 to-red-900",
    },
    {
      icon: (
        <Lightbulb className="w-12 h-12 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
      ),
      title: "INNOVATION",
      description:
        "We strive to innovate constantly — improving our products, processes, and mindset to stay ahead of the curve.",
      color: "bg-gradient-to-br from-blue-700 to-blue-900",
      hoverColor: "from-blue-800 to-blue-950",
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 relative inline-block">
          VALUES
          <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className={`${value.color} p-6 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl group cursor-pointer overflow-hidden`}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative z-10">
                <div className="mb-4 flex justify-center items-center h-20 w-20 rounded-full bg-black/30 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-yellow-400">
                  {value.title}
                </h3>
                <p className="text-center text-gray-200">{value.description}</p>
              </div>

              {/* Animated background effect on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${
                  hoveredItem === index ? value.hoverColor : value.color
                } opacity-70 transition-all duration-500 ease-in-out transform ${
                  hoveredItem === index ? "scale-105" : "scale-100"
                }`}
              />

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-red-600/20 transform rotate-45"></div>
              <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-yellow-400/10"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
