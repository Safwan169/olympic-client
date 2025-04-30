/* eslint-disable no-unused-vars */
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import bgImage from "../../../assets/Investors-banner-2.jpg";

export default function LeadershipComponent() {
  const [activeTab, setActiveTab] = useState("BOARD OF DIRECTORS");
  const [selectedLeader, setSelectedLeader] = useState(null);

  // Brand colors
  const brandRed = "#cc0000";
  const goldAccent = "#d4af37";

  const leaders = [
    {
      id: 1,
      name: "MR. NUSLI N. WADIA",
      title: "CHAIRMAN",
      image:
        "https://olympicbd.com/wp-content/uploads/2016/06/Aziz-Mohammad-Bhai-v2.jpg",
      bio: "Mr. Nusli N. Wadia has been serving as the Chairman of the company for over 25 years. Under his leadership, the company has achieved significant growth and established itself as a market leader.",
      category: "BOARD OF DIRECTORS",
    },
    {
      id: 2,
      name: "MR. VARUN BERRY",
      title: "EXECUTIVE VICE-CHAIRMAN AND MANAGING DIRECTOR",
      image:
        "https://olympicbd.com/wp-content/uploads/2023/03/Nurjehan-Hudda-1-1.jpg",
      bio: "Mr. Varun Berry holds a graduate degree in BE Mechanical from the Punjab University. He has also attended a course in Strategic Management from Wharton University and the Global Leadership Program at IMD, Switzerland. Mr. Varun Berry joined the Company as Vice President & Chief Operating Officer with effect from 1st February, 2013. He has an experience of over 27 years with premier companies like Hindustan Unilever and Pepsico, both in India and overseas and a successful track record in leading start ups, turnarounds, joint ventures and growth businesses.",
      directorships: ["Company A", "Company B", "Company C"],
      category: "BOARD OF DIRECTORS",
    },
    {
      id: 3,
      name: "MR. N. VENKATARAMAN",
      title: "EXECUTIVE DIRECTOR AND CHIEF FINANCIAL OFFICER",
      image:
        "https://olympicbd.com/wp-content/uploads/2023/03/Sakina-Miraly-1.jpg",
      bio: "Mr. N. Venkataraman has been serving as the Executive Director and Chief Financial Officer since 2019. He brings over 25 years of experience in finance and strategic planning.",
      category: "BOARD OF DIRECTORS",
    },
    {
      id: 4,
      name: "MR. NESS N. WADIA",
      title: "NON-EXECUTIVE NON-INDEPENDENT DIRECTOR",
      image:
        "https://olympicbd.com/wp-content/uploads/2020/10/Munir-Mubarak-Ali-edited.jpg",
      bio: "Mr. Ness N. Wadia joined the board in 2012 and brings valuable industry insights to the company.",
      category: "BOARD OF DIRECTORS",
    },
    {
      id: 5,
      name: "MR. JEHANGIR N. WADIA",
      title: "NON-EXECUTIVE NON-INDEPENDENT DIRECTOR",
      image:
        "https://olympicbd.com/wp-content/uploads/2023/08/Asar-Aziz-M-Bhai-v1.jpg",
      bio: "Mr. Jehangir N. Wadia has been a board member since 2015 and contributes significantly to the company's strategic direction.",
      category: "BOARD OF DIRECTORS",
    },
    {
      id: 6,
      name: "MS. JANE DOE",
      title: "CHIEF EXECUTIVE OFFICER",
      image: "https://olympicbd.com/wp-content/uploads/2016/09/01-11.jpg",
      bio: "Ms. Jane Doe has over 20 years of experience in the industry and has been with the company since 2018.",
      category: "EXECUTIVE LEADERSHIP",
    },
    {
      id: 7,
      name: "MR. JOHN SMITH",
      title: "CHIEF OPERATIONS OFFICER",
      image:
        "https://olympicbd.com/wp-content/uploads/2016/11/Osman-Haidar.jpg",
      bio: "Mr. John Smith oversees the operational excellence of the company and has implemented several efficiency initiatives.",
      category: "EXECUTIVE LEADERSHIP",
    },
    {
      id: 8,
      name: "MS. SARAH JOHNSON",
      title: "COMMITTEE CHAIR",
      image:
        "https://olympicbd.com/wp-content/uploads/2023/08/Asar-Aziz-M-Bhai-v1.jpg",
      bio: "Ms. Sarah Johnson leads the strategic planning committee and has been instrumental in the company's expansion plans.",
      category: "MANAGEMENT COMMITTEE",
    },
  ];

  const filteredLeaders = leaders.filter(
    (leader) => leader.category === activeTab
  );

  const tabs = [
    "BOARD OF DIRECTORS",
    "EXECUTIVE LEADERSHIP",
    "MANAGEMENT COMMITTEE",
  ];

  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <div className="bg-black text-white min-h-screen p-6 pt-16">
      {/* Hero Section */}
      <div className="relative w-full h-screen max-h-[32rem] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: "center 30%",
            y: parallaxY,
          }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/90 flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 1.2 }}
            className="h-0.5 mb-6"
            style={{ backgroundColor: goldAccent }}
          />

          {/* Title */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-4 tracking-widest"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our{" "}
            <span
              style={{ color: goldAccent }}
              className="drop-shadow-lg text-yellow-400"
            >
              Leadership
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-lg text-gray-300 max-w-2xl text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Our mission for ethical growth
          </motion.p>

          {/* Red underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="h-0.5"
            style={{
              background: `linear-gradient(to right, transparent, ${brandRed}, transparent)`,
            }}
          />

          {/* Scroll down indicator */}
          <motion.div
            className="absolute bottom-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <div className="animate-bounce flex flex-col items-center">
              <p className="text-xs mb-2 text-gray-300">Scroll to explore</p>
              <div className="w-4 h-4 border-r-2 border-b-2 border-yellow-400 transform rotate-45"></div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center my-10">LEADERSHIP</h1>

        {/* Tabs */}
        <div className="flex justify-center mb-12 border-b border-gray-700">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-6 py-4 text-lg font-medium ${
                activeTab === tab
                  ? "text-red-500 border-b-2 border-red-500"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredLeaders.map((leader) => (
            <div
              key={leader.id}
              className="bg-black border border-gray-800 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
              onClick={() => setSelectedLeader(leader)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold mb-1">{leader.name}</h3>
                <p className="text-red-500 text-sm uppercase">{leader.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedLeader && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg max-w-3xl w-full relative">
            <button
              className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg"
              onClick={() => setSelectedLeader(null)}
            >
              CLOSE
            </button>

            <div className="flex flex-col md:flex-row p-8">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <img
                  src={selectedLeader.image}
                  alt={selectedLeader.name}
                  className="w-48 h-48 object-cover rounded-md mx-auto"
                />
              </div>

              <div className="md:w-2/3 md:pl-8">
                <h2 className="text-2xl font-bold mb-1">
                  {selectedLeader.name}
                </h2>
                <p className="text-red-500 mb-4">{selectedLeader.title}</p>
                <p className="text-gray-300 mb-4">{selectedLeader.bio}</p>

                {selectedLeader.directorships && (
                  <div>
                    <h4 className="text-green-500 mb-2">
                      List of Other Directorships
                    </h4>
                    <ul className="list-disc pl-5 text-gray-300">
                      {selectedLeader.directorships.map(
                        (directorship, index) => (
                          <li key={index}>{directorship}</li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
