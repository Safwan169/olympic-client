import {
  FaUserTie,
  FaUsers,
  FaHandshake,
  FaClipboardList
} from "react-icons/fa";
import bgImage from "../../../assets/cookieBG.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Board of Directors images
import director1 from "../../../assets/directors/director1.jpg";
import director2 from "../../../assets/directors/director2.jpg";
import director3 from "../../../assets/directors/director3.jpg";
import director4 from "../../../assets/directors/director4.jpg";
import director5 from "../../../assets/directors/director5.jpg";
import director6 from "../../../assets/directors/director6.jpg";
import director7 from "../../../assets/directors/director7.jpg";
import director8 from "../../../assets/directors/director8.jpg";
import director9 from "../../../assets/directors/director9.jpg";

// Audit Committee images
import audit1 from "../../../assets/committees/audit/member1.jpg";
import audit2 from "../../../assets/committees/audit/member2.jpg";
import audit3 from "../../../assets/committees/audit/member3.jpg";
import audit4 from "../../../assets/committees/audit/member4.jpg";

// Nomination & Remuneration Committee images
import nomination1 from "../../../assets/committees/audit/member1.jpg";
import nomination2 from "../../../assets/committees/audit/member2.jpg";
import nomination3 from "../../../assets/committees/audit/member3.jpg";

// Management Committee images
import management1 from "../../../assets/committees/management/member1.jpg";
import management2 from "../../../assets/committees/management/member2.jpg";
import management3 from "../../../assets/committees/management/member3.jpg";
import management4 from "../../../assets/committees/management/member4.jpg";
import management5 from "../../../assets/committees/management/member5.jpg";

const LeadershipPage = () => {
  // Colors - matching the previous component
  const brandRed = "#cc0000";
  const goldAccent = "#d4af37";

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Board of Directors data
  const directors = [
    {
      id: 1,
      name: "Mr. Aziz Mohammad Bhai",
      position: "Chairman",
      image: director1,
      description: "Serving as Chairman since July 23, 2023, Mr. Aziz Mohammad Bhai brings extensive leadership experience to Olympic Industries. He ensures the Board operates effectively and harmoniously."
    },
    {
      id: 2,
      name: "Mrs. Safinaz Bhai",
      position: "Managing Director",
      image: director2,
      description: "As Managing Director, Mrs. Safinaz Bhai oversees the company's strategic direction and day-to-day operations, ensuring Olympic Industries meets its goals and stakeholder expectations."
    },
    {
      id: 3,
      name: "Mr. Munir Ali",
      position: "Director",
      image: director3,
      description: "With expertise in finance and market strategy, Mr. Munir Ali contributes valuable insights to the company's expansion and financial planning."
    },
    {
      id: 4,
      name: "Mrs. Noore Safa",
      position: "Director",
      image: director4,
      description: "Mrs. Noore Safa brings her extensive knowledge of the consumer goods industry to help guide Olympic Industries' product development strategies."
    },
    {
      id: 5,
      name: "Mr. Sharif Ahmed",
      position: "Director",
      image: director5,
      description: "Mr. Sharif Ahmed leverages his global business connections to strengthen Olympic Industries' international partnerships and market presence."
    },
    {
      id: 6,
      name: "Mrs. Zarina Khan",
      position: "Director",
      image: director6,
      description: "With a background in corporate law, Mrs. Zarina Khan ensures Olympic Industries maintains strong governance practices and regulatory compliance."
    },
    {
      id: 7,
      name: "Mr. Rafiq Hassan",
      position: "Director",
      image: director7,
      description: "Mr. Rafiq Hassan contributes expertise in manufacturing optimization and supply chain management to enhance operational efficiency."
    },
    {
      id: 8,
      name: "Dr. Samir Rahman",
      position: "Independent Director",
      image: director8,
      description: "As an Independent Director, Dr. Samir Rahman brings academic expertise and an objective perspective to strengthen the Board's decision-making process."
    },
    {
      id: 9,
      name: "Mrs. Ayesha Rahim",
      position: "Independent Director",
      image: director9,
      description: "Mrs. Ayesha Rahim serves as an Independent Director with expertise in sustainability practices and corporate social responsibility."
    }
  ];

  // Committee members data
  const committees = [
    {
      id: "audit-committee",
      name: "Audit Committee",
      icon: <FaClipboardList />,
      members: [
        { id: 1, image: audit1, name: "Dr. Samir Rahman", position: "Chairman" },
        { id: 2, image: audit2, name: "Mrs. Ayesha Rahim", position: "Member" },
        { id: 3, image: audit3, name: "Mr. Sharif Ahmed", position: "Member" },
        { id: 4, image: audit4, name: "Mr. Rafiq Hassan", position: "Member" }
      ]
    },
    {
      id: "nomination-committee",
      name: "Nomination & Remuneration Committee",
      icon: <FaHandshake />,
      members: [
        { id: 1, image: nomination1, name: "Mrs. Ayesha Rahim", position: "Chairman" },
        { id: 2, image: nomination2, name: "Dr. Samir Rahman", position: "Member" },
        { id: 3, image: nomination3, name: "Mrs. Zarina Khan", position: "Member" }
      ]
    },
    {
      id: "management-committee",
      name: "Management Committee",
      icon: <FaUsers />,
      members: [
        { id: 1, image: management1, name: "Mrs. Safinaz Bhai", position: "Chairman" },
        { id: 2, image: management2, name: "Mr. Munir Ali", position: "Member" },
        { id: 3, image: management3, name: "Mrs. Noore Safa", position: "Member" },
        { id: 4, image: management4, name: "Mr. Sharif Ahmed", position: "Member" },
        { id: 5, image: management5, name: "Mr. Rafiq Hassan", position: "Member" }
      ]
    }
  ];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero Header Section - Minimalist with gold accent */}
      <div
        className="relative w-full h-80 md:h-96 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center 30%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/80 flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="h-0.5 bg-gradient-to-r from-transparent via-goldAccent to-transparent mb-6"
            style={{ backgroundColor: goldAccent }}
          />
          <motion.h1
            className="text-4xl md:text-5xl font-bold tracking-wider mb-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Leadership
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
            className="h-0.5 mb-4"
            style={{
              background: `linear-gradient(to right, transparent, ${brandRed}, transparent)`,
            }}
          />
        </div>
      </div>

      {/* Minimal Navigation Pills */}
      <div className="max-w-5xl mx-auto py-8 px-4 overflow-x-auto">
        <motion.div
          className="flex space-x-3 md:justify-center min-w-max"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { title: "Board of Directors", id: "board-of-directors" },
            { title: "Audit Committee", id: "audit-committee" },
            { title: "Nomination Committee", id: "nomination-committee" },
            { title: "Management Committee", id: "management-committee" },
          ].map((item, index) => (
            <a
              key={index}
              href={`#${item.id}`}
              className="px-4 py-2 rounded-full border border-gray-800 hover:border-goldAccent text-sm font-medium transition-all duration-300 hover:bg-black/30"
              style={{ borderColor: "rgba(212, 175, 55, 0.3)" }}
            >
              {item.title}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Board of Directors Section */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <motion.section
          id="board-of-directors"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
          className="flex flex-col items-center"
        >
          <motion.h2
            className="text-3xl font-light mb-6 text-center"
            variants={fadeIn}
          >
            Board of <span className="font-semibold">Directors</span>
          </motion.h2>
          <motion.div
            className="h-px w-16 mx-auto mb-16"
            style={{
              background: `linear-gradient(to right, transparent, ${goldAccent}, transparent)`,
            }}
            variants={fadeIn}
          />

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl"
            variants={fadeIn}
          >
            {directors.map((director) => (
              <motion.div
                key={director.id}
                className="group bg-black/20 border border-gray-900 rounded-lg overflow-hidden transition-all duration-500 hover:border-gray-700"
                variants={slideIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={director.image} 
                    alt={director.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80"
                  />
                </div>
                <div className="p-6 relative">
                  <div 
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ 
                      background: `linear-gradient(135deg, ${brandRed} 0%, rgba(0,0,0,0.8) 100%)`,
                      border: `2px solid ${goldAccent}`
                    }}
                  >
                    <FaUserTie className="text-white text-lg" />
                  </div>
                  
                  <h3 className="text-xl font-medium mb-1 mt-2 text-center">{director.name}</h3>
                  <p 
                    className="text-sm mb-4 text-center"
                    style={{ color: goldAccent }}
                  >
                    {director.position}
                  </p>
                  <div 
                    className="h-px w-12 mx-auto mb-4"
                    style={{
                      background: `linear-gradient(to right, transparent, ${brandRed}, transparent)`,
                    }}
                  />
                  <p className="text-gray-300 text-sm leading-relaxed">{director.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>

      {/* Committee Sections - Each as a separate section */}
      {committees.map((committee, index) => (
        <div 
          key={committee.id}
          id={committee.id}
          className={`py-16 ${index % 2 === 0 ? 'bg-black/30' : ''}`}
        >
          <div className="max-w-6xl mx-auto px-4">
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
              className="flex flex-col items-center"
            >
              <motion.h2
                className="text-3xl font-light mb-6 text-center"
                variants={fadeIn}
              >
                {committee.name.split(' & ')[0]} <span className="font-semibold">{committee.name.split(' & ')[1] || "Committee"}</span>
              </motion.h2>
              <motion.div
                className="h-px w-16 mx-auto mb-16"
                style={{
                  background: `linear-gradient(to right, transparent, ${goldAccent}, transparent)`,
                }}
                variants={fadeIn}
              />

              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-4xl mx-auto"
                variants={fadeIn}
              >
                {committee.members.map((member) => (
                  <motion.div
                    key={member.id}
                    className="group bg-black/20 border border-gray-900 rounded-lg overflow-hidden transition-all duration-500 hover:border-gray-700"
                    variants={slideIn}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="aspect-square overflow-hidden relative">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div 
                        className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80"
                      />
                    </div>
                    <div className="p-4 relative">
                      <div 
                        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ 
                          background: `linear-gradient(135deg, ${brandRed} 0%, rgba(0,0,0,0.8) 100%)`,
                          border: `1px solid ${goldAccent}`
                        }}
                      >
                        {committee.icon}
                      </div>
                      
                      <h3 className="text-lg font-medium mb-1 mt-1 text-center">{member.name}</h3>
                      <p 
                        className="text-sm text-center"
                        style={{ color: goldAccent }}
                      >
                        {member.position}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          </div>
        </div>
      ))}

      {/* Learn More Section */}
      <div className="max-w-4xl mx-auto py-16 px-4">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="border border-gray-800 rounded-lg p-10 text-center flex flex-col items-center space-y-6"
            variants={fadeIn}
            whileHover={{
              borderColor: `rgba(212, 175, 55, 0.3)`,
              transition: { duration: 0.3 },
            }}
          >
            <h2 className="text-2xl font-light">Leadership Excellence</h2>
            <div
              className="h-px w-12"
              style={{
                background: `linear-gradient(to right, transparent, ${goldAccent}, transparent)`,
              }}
            />
            <p className="text-gray-300 max-w-lg mx-auto">
              Olympic Industries' leadership team is committed to maintaining the highest standards of corporate governance, ethical business practices, and sustainable growth.
            </p>
            <Link
              to={"/governance/corporate-governance"}
              className="group relative inline-block px-8 py-3 overflow-hidden text-sm font-medium transition-all duration-300"
              style={{ color: goldAccent }}
            >
              <span
                className="absolute bottom-0 left-0 w-full h-px transition-all duration-500 ease-out transform scale-x-0 group-hover:scale-x-100"
                style={{ background: goldAccent }}
              ></span>
              View Corporate Governance
              <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default LeadershipPage;