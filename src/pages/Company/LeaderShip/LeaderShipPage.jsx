/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import bgImage from "../../../assets/Investors-banner-2.jpg";
import chairman from "../../../assets/chairman.jpg";
export default function LeadershipComponent() {
  const [activeTab, setActiveTab] = useState("BOARD OF DIRECTORS");
  const [selectedLeader, setSelectedLeader] = useState(null);

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
  const brandRed = "#cc0000";
  const goldAccent = "#d4af37";
  const filteredLeaders = leaders.filter(
    (leader) => leader.category === activeTab
  );

  const tabs = [
    "BOARD OF DIRECTORS",
    "EXECUTIVE LEADERSHIP",
    "MANAGEMENT COMMITTEE",
  ];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <div className="relative w-full h-screen max-h-[32rem] overflow-hidden">
        {/* Hero Header Section */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: "center 30%",
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/80 flex flex-col items-center justify-center px-4">
          {/* Top Gradient Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="h-0.5 bg-gradient-to-r from-transparent via-goldAccent to-transparent mb-6"
            style={{ backgroundColor: goldAccent }}
          />

          {/* Heading */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold tracking-wider text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            LEADERSHIP
          </motion.h1>

          {/* Bottom Gradient Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
            className="h-0.5 mb-4"
            style={{
              background: `linear-gradient(to right, transparent, ${brandRed}, transparent)`,
            }}
          />

          {/* Animated scroll indicator */}
          <motion.div
            className="absolute bottom-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <div className="animate-bounce flex flex-col items-center">
              <p className="text-xs mb-2">Scroll to explore</p>
              <div className="w-4 h-4 border-r-2 border-b-2 border-goldAccent transform rotate-45"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Visionary Founder Section */}
      <div className="flex justify-center items-center min-h-screen px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 p-8 rounded-3xl border border-gray-700 bg-black/30 backdrop-blur-md shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-red-500">
          {/* Founder Image */}
          <div className="flex-shrink-0 w-64 h-64 rounded-full overflow-hidden border-4 border-gray-700 transition-all duration-500 hover:border-red-500 hover:shadow-lg">
            <img
              src={chairman} // Replace with correct image path
              alt="Founder"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Founder Text */}
          <div className="text-center md:text-left max-w-xl">
            <p className="text-red-500 font-semibold tracking-widest text-sm uppercase mb-2">
              Our Visionary Founder
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 transition-all duration-500 hover:text-red-500">
              Late Baijnath Choudhary
            </h2>
            <p className="text-gray-300 mb-4">
              At the heart of Anmol’s success is its founder, the late Mr.
              Baijnath Choudhary. From humble beginnings, he built Anmol into a
              biscuit industry leader with a keen understanding of consumer
              preferences.
            </p>
            <p className="text-gray-300">
              A visionary, he ensured top-quality products and strong business
              ethics, while also championing social causes. His leadership and
              values continue to inspire Team Anmol to stay at the industry’s
              forefront.
            </p>
          </div>
        </div>
      </div>

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

      {/* Modal */}
      {selectedLeader && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="border-4 border-red-600 bg-gray-900 rounded-lg max-w-3xl w-full relative">
            {" "}
            {/* Main section border */}
            <div className="flex flex-col md:flex-row p-8 items-center">
              {/* Image container with red border */}
              <div className="absolute -left-24 top-1/2 transform -translate-y-1/2 border-4 border-red-600 rounded-[5px]">
                {" "}
                {/* Image border */}
                <img
                  src={selectedLeader.image}
                  alt={selectedLeader.name}
                  className="w-48 h-48 object-cover rounded-md"
                />
              </div>

              {/* Content area */}
              <div className="md:w-full md:ml-24 relative pb-10">
                <h2 className="text-2xl font-bold mb-1">
                  {selectedLeader.name}
                </h2>
                <p className="text-red-600 mb-4">{selectedLeader.title}</p>{" "}
                {/* Changed to red-600 */}
                <p className="text-gray-300">{selectedLeader.bio}</p>
                {/* Button at bottom right */}
                <div className="absolute bottom-0 right-0">
                  <button
                    className="bg-red-600 text-white px-4 py-2 rounded-lg"
                    onClick={() => setSelectedLeader(null)}
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
