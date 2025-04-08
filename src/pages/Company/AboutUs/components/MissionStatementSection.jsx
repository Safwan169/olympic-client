import { useState, useEffect } from "react";

export default function MissionStatementSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header
          className="mb-16 opacity-0 transition-opacity duration-1000"
          style={{ opacity: isVisible ? 1 : 0 }}
        ></header>

        {/* Main content */}
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-8">
            {/* Mission title */}
            <div
              className="transform transition-all duration-700 opacity-0"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">
                MISSION <span className="text-red-600">STATEMENT</span>
              </h2>

              <p className="text-gray-300 mb-8 leading-relaxed">
                At Olympic, we believe that being a good business means
                contributing to the well-being of our workers, our customers,
                our community, and our planet. We want to add value by making
                good products which nourish people, all the while creating jobs
                and contributing to the Bangladesh economy.
              </p>
            </div>

            {/* We aspire to */}
            <div
              className="transform transition-all duration-700 delay-300 opacity-0"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">
                We aspire to
              </h3>

              <ul className="space-y-6">
                {[
                  "Maintain our leadership position in the biscuit industry by producing the best quality products for our consumers that are unique, innovative and delicious",
                  "Protect the interest of our shareholders through fiscal prudence",
                  "Be an employer of choice while developing future leaders for our organization and the country",
                  "Be stewards of social responsibility in Bangladesh through our initiatives.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start group transition-all duration-300 transform hover:translate-x-2"
                  >
                    <span className="text-red-600 mr-3 mt-1 transition-all duration-300 group-hover:text-yellow-500">
                      ▶
                    </span>
                    <span className="text-gray-300 group-hover:text-white transition-all duration-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Closing statement */}
            <div
              className="transform transition-all duration-700 delay-500 opacity-0"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <p className="text-gray-300 leading-relaxed border-l-2 border-red-600 pl-4 italic">
                We believe that quality and integrity is the recipe of our
                success. Now the leader in the biscuit market, we were only able
                to get to where we are today by staying true to our core values
                and by developing new quality products we believe our customers
                will love.
              </p>
            </div>
          </div>

          {/* Image section */}
          <div
            className="relative h-full flex items-center justify-center opacity-0 transition-opacity duration-1000 delay-700"
            style={{ opacity: isVisible ? 1 : 0 }}
          >
            <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-black opacity-40 z-10"></div>
              <img
                src="https://olympicbd.com/wp-content/uploads/2016/06/About-us_Mission-Statament.jpg"
                alt="Delicious biscuits"
                className="w-full h-full object-cover rounded-lg transform transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent z-20">
                <p className="text-yellow-500 font-semibold">
                  Premium Quality Biscuits
                </p>
                <p className="text-gray-300 text-sm">
                  Crafted with care in Bangladesh
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
