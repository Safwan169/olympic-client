/* eslint-disable no-unused-vars */
// import { FaCheckCircle, FaChevronRight } from "react-icons/fa";
// import bgImage from "../../assets/cookieBG.jpg";
// import { Link } from "react-router-dom";

// const CorporateGovernance = () => {
//   return (
//     <div className="bg-[#121212] text-white min-h-screen px-6 py-12">
//       {/* Header Section */}
//       <div
//         className="relative w-full h-72 bg-cover bg-center"
//         style={{
//           backgroundImage: `url(${bgImage})`,
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center justify-center">
//           <h1 className="text-4xl font-bold tracking-wide animate-fade-in">
//             Corporate Governance
//           </h1>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="max-w-5xl mx-auto py-12 space-y-10 animate-fade-in">
//         {/* Code of Conduct */}
//         <section>
//           <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
//             Code of Conduct
//           </h2>
//           <ul className="space-y-3">
//             {[
//               "Put the interests of the company and stakeholders above all others.",
//               "Exercise due diligence, fiscal prudence, and fiduciary responsibilities.",
//               "Maintain confidentiality of company information.",
//               "Ensure compliance with all laws, rules, and regulations.",
//               "Avoid undue favors, conflicts of interest, and misuse of company property.",
//             ].map((item, index) => (
//               <li
//                 key={index}
//                 className="flex items-start gap-3 text-gray-400 hover:text-white transition duration-300"
//               >
//                 <FaCheckCircle className="text-cc0000 mt-1" />
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </section>

//         {/* Chairman of the Board */}
//         <section>
//           <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
//             Chairman of the Board
//           </h2>
//           <p className="text-gray-400 leading-relaxed mb-4">
//             Mr. Aziz Mohammad Bhai has been Chairman of Olympic Industries
//             Limited since July 23, 2023. He ensures that the Board operates
//             smoothly and effectively.
//           </p>
//           <h3 className="text-lg font-semibold mb-2">Responsibilities:</h3>
//           <ul className="space-y-2">
//             {[
//               "Preside over Board meetings and ensure active participation.",
//               "Resolve disagreements and align decisions harmoniously.",
//               "Support and guide the Managing Director.",
//               "Ensure Board Committees are functioning properly.",
//             ].map((item, index) => (
//               <li
//                 key={index}
//                 className="flex items-start gap-3 text-gray-400 hover:text-white transition duration-300"
//               >
//                 <FaChevronRight className="text-cc0000 mt-1" />
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </section>

//         {/* Managing Director */}
//         <section>
//           <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
//             Managing Director
//           </h2>
//           <p className="text-gray-400 leading-relaxed mb-4">
//             The Managing Director acts as the CEO, implementing Board decisions
//             and managing company operations.
//           </p>
//           <h3 className="text-lg font-semibold mb-2">Responsibilities:</h3>
//           <ul className="space-y-2">
//             {[
//               "Set strategic goals and lead key management to achieve them.",
//               "Secure funding and execute business plans.",
//               "Maintain effective communication with stakeholders.",
//               "Control costs, improve efficiency, and oversee risk management.",
//               "Ensure company performance meets stakeholder expectations.",
//             ].map((item, index) => (
//               <li
//                 key={index}
//                 className="flex items-start gap-3 text-gray-400 hover:text-white transition duration-300"
//               >
//                 <FaChevronRight className="text-cc0000 mt-1" />
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </section>

//         {/* Other Board Members */}
//         <section>
//           <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
//             Other Board Members
//           </h2>
//           <h3 className="text-lg font-semibold mb-2">Roles:</h3>
//           <ul className="space-y-2">
//             {[
//               "Define company vision, mission, and values.",
//               "Develop business strategies and oversee execution.",
//               "Delegate responsibilities and maintain internal controls.",
//             ].map((item, index) => (
//               <li
//                 key={index}
//                 className="flex items-start gap-3 text-gray-400 hover:text-white transition duration-300"
//               >
//                 <FaChevronRight className="text-cc0000 mt-1" />
//                 {item}
//               </li>
//             ))}
//           </ul>

//           <h3 className="text-lg font-semibold mt-4 mb-2">Responsibilities:</h3>
//           <ul className="space-y-2">
//             {[
//               "Attend meetings and contribute to strategic decisions.",
//               "Act in the best interest of the company and stakeholders.",
//               "Maintain confidentiality and avoid conflicts of interest.",
//             ].map((item, index) => (
//               <li
//                 key={index}
//                 className="flex items-start gap-3 text-gray-400 hover:text-white transition duration-300"
//               >
//                 <FaChevronRight className="text-cc0000 mt-1" />
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </section>

//         {/* Composition of the Board */}
//         <section>
//           <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
//             Composition of the Board
//           </h2>
//           <p className="text-gray-400">
//             Olympic’s Board of Directors is comprised of **9 Directors**,
//             including two Independent Directors. The Chairman and Managing
//             Director are separate individuals as part of the governance
//             structure.
//           </p>
//         </section>

//         {/* Learn More */}
//         <section>
//           <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
//             Learn More
//           </h2>
//           <p className="text-gray-400">
//             For more details on Olympic Industries' corporate governance
//             policies and board structure, visit: <br />
//             <Link
//               to={"/sustainability/overview"}
//               className="text-cc0000 underline hover:text-red-600 transition"
//             >
//               Olympic Industries Corporate Governance Overview
//             </Link>
//           </p>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default CorporateGovernance;

import {
  FaCheckCircle,
  FaChevronRight,
  FaUsers,
  FaUserTie,
  FaClipboardList,
  FaBalanceScale,
} from "react-icons/fa";
import bgImage from "../../assets/cookieBG.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CorporateGovernance = () => {
  // Colors
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
            Corporate Governance
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
            { title: "Code of Conduct", id: "code-of-conduct" },
            { title: "Chairman", id: "chairman" },
            { title: "Director", id: "managing-director" },
            { title: "Board", id: "board-composition" },
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

      {/* Content Section with minimalist styling */}
      <div className="max-w-4xl mx-auto py-8 space-y-20 px-4">
        {/* Code of Conduct */}
        <motion.section
          id="code-of-conduct"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
        >
          <motion.h2
            className="text-3xl font-light mb-6 text-center"
            variants={fadeIn}
          >
            Code of <span className="font-semibold">Conduct</span>
          </motion.h2>
          <motion.div
            className="h-px w-16 mx-auto mb-10"
            style={{
              background: `linear-gradient(to right, transparent, ${goldAccent}, transparent)`,
            }}
            variants={fadeIn}
          />

          <motion.ul
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={fadeIn}
          >
            {[
              "Put the interests of the company and stakeholders above all others.",
              "Exercise due diligence, fiscal prudence, and fiduciary responsibilities.",
              "Maintain confidentiality of company information.",
              "Ensure compliance with all laws, rules, and regulations.",
              "Avoid undue favors, conflicts of interest, and misuse of company property.",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3 p-4 rounded-md border border-transparent hover:border-gray-800 transition-all duration-500 group"
                variants={slideIn}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <FaCheckCircle
                  className="text-xl mt-1 flex-shrink-0 transition-colors duration-300"
                  style={{ color: brandRed }}
                />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        {/* Chairman of the Board */}
        <motion.section
          id="chairman"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
        >
          <motion.h2
            className="text-3xl font-light mb-6 text-center"
            variants={fadeIn}
          >
            Chairman of the <span className="font-semibold">Board</span>
          </motion.h2>
          <motion.div
            className="h-px w-16 mx-auto mb-10"
            style={{
              background: `linear-gradient(to right, transparent, ${goldAccent}, transparent)`,
            }}
            variants={fadeIn}
          />

          <motion.div variants={fadeIn}>
            <p className="text-gray-300 leading-relaxed mb-8 text-center max-w-2xl mx-auto">
              Mr. Aziz Mohammad Bhai has been Chairman of Olympic Industries
              Limited since July 23, 2023. He ensures that the Board operates
              smoothly and effectively.
            </p>

            <div className="space-y-3">
              {[
                "Preside over Board meetings and ensure active participation.",
                "Resolve disagreements and align decisions harmoniously.",
                "Support and guide the Managing Director.",
                "Ensure Board Committees are functioning properly.",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 py-3 border-b border-gray-900 last:border-0"
                  variants={slideIn}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div
                    className="p-1 rounded-full flex-shrink-0"
                    style={{ color: brandRed }}
                  >
                    <FaChevronRight />
                  </div>
                  <p className="text-gray-300">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Managing Director */}
        <motion.section
          id="managing-director"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
        >
          <motion.h2
            className="text-3xl font-light mb-6 text-center"
            variants={fadeIn}
          >
            Managing <span className="font-semibold">Director</span>
          </motion.h2>
          <motion.div
            className="h-px w-16 mx-auto mb-10"
            style={{
              background: `linear-gradient(to right, transparent, ${goldAccent}, transparent)`,
            }}
            variants={fadeIn}
          />

          <motion.div variants={fadeIn}>
            <p className="text-gray-300 leading-relaxed mb-8 text-center max-w-2xl mx-auto">
              The Managing Director acts as the CEO, implementing Board
              decisions and managing company operations.
            </p>

            <div className="space-y-3">
              {[
                "Set strategic goals and lead key management to achieve them.",
                "Secure funding and execute business plans.",
                "Maintain effective communication with stakeholders.",
                "Control costs, improve efficiency, and oversee risk management.",
                "Ensure company performance meets stakeholder expectations.",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 py-3 border-b border-gray-900 last:border-0"
                  variants={slideIn}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div
                    className="p-1 rounded-full flex-shrink-0"
                    style={{ color: brandRed }}
                  >
                    <FaChevronRight />
                  </div>
                  <p className="text-gray-300">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Other Board Members */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
        >
          <motion.h2
            className="text-3xl font-light mb-6 text-center"
            variants={fadeIn}
          >
            Other Board <span className="font-semibold">Members</span>
          </motion.h2>
          <motion.div
            className="h-px w-16 mx-auto mb-10"
            style={{
              background: `linear-gradient(to right, transparent, ${goldAccent}, transparent)`,
            }}
            variants={fadeIn}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div variants={fadeIn}>
              <h3
                className="text-xl font-medium mb-4 inline-block pb-1"
                style={{ borderBottom: `1px solid ${brandRed}` }}
              >
                Roles
              </h3>
              <div className="space-y-3">
                {[
                  "Define company vision, mission, and values.",
                  "Develop business strategies and oversee execution.",
                  "Delegate responsibilities and maintain internal controls.",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 py-3 border-b border-gray-900 last:border-0"
                    variants={slideIn}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <div
                      className="p-1 rounded-full flex-shrink-0"
                      style={{ color: brandRed }}
                    >
                      <FaChevronRight />
                    </div>
                    <p className="text-gray-300">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h3
                className="text-xl font-medium mb-4 inline-block pb-1"
                style={{ borderBottom: `1px solid ${brandRed}` }}
              >
                Responsibilities
              </h3>
              <div className="space-y-3">
                {[
                  "Attend meetings and contribute to strategic decisions.",
                  "Act in the best interest of the company and stakeholders.",
                  "Maintain confidentiality and avoid conflicts of interest.",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 py-3 border-b border-gray-900 last:border-0"
                    variants={slideIn}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <div
                      className="p-1 rounded-full flex-shrink-0"
                      style={{ color: brandRed }}
                    >
                      <FaChevronRight />
                    </div>
                    <p className="text-gray-300">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Composition of the Board */}
        <motion.section
          id="board-composition"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
        >
          <motion.h2
            className="text-3xl font-light mb-6 text-center"
            variants={fadeIn}
          >
            Board <span className="font-semibold">Composition</span>
          </motion.h2>
          <motion.div
            className="h-px w-16 mx-auto mb-10"
            style={{
              background: `linear-gradient(to right, transparent, ${goldAccent}, transparent)`,
            }}
            variants={fadeIn}
          />

          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-10"
            variants={fadeIn}
          >
            <div className="relative">
              <motion.div
                className="w-40 h-40 rounded-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, rgba(204,0,0,0.1) 0%, rgba(212,175,55,0.2) 100%)`,
                  border: `1px solid ${goldAccent}`,
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="text-4xl font-light">9</div>
                  <div
                    className="text-sm uppercase tracking-widest mt-1"
                    style={{ color: goldAccent }}
                  >
                    Directors
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="absolute -inset-1 rounded-full z-0 opacity-30"
                style={{
                  background: `linear-gradient(135deg, ${brandRed} 0%, ${goldAccent} 100%)`,
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.15 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </div>

            <div className="max-w-md text-center md:text-left">
              <p className="text-gray-300">
                Olympic's Board of Directors is comprised of{" "}
                <span className="font-medium text-white">9 Directors</span>,
                including two Independent Directors. The Chairman and Managing
                Director are separate individuals as part of the governance
                structure.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Learn More - Minimal elegant CTA */}
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
            <h2 className="text-2xl font-light">Learn More</h2>
            <div
              className="h-px w-12"
              style={{
                background: `linear-gradient(to right, transparent, ${goldAccent}, transparent)`,
              }}
            />
            <p className="text-gray-300 max-w-lg mx-auto">
              For more details on Olympic Industries' corporate governance
              policies and board structure, visit:
            </p>
            <Link
              to={"/sustainability/overview"}
              className="group relative inline-block px-8 py-3 overflow-hidden text-sm font-medium transition-all duration-300"
              style={{ color: goldAccent }}
            >
              <span
                className="absolute bottom-0 left-0 w-full h-px transition-all duration-500 ease-out transform scale-x-0 group-hover:scale-x-100"
                style={{ background: goldAccent }}
              ></span>
              Corporate Governance Overview
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

export default CorporateGovernance;
