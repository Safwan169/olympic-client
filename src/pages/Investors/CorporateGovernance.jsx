/* eslint-disable no-unused-vars */
import {
  FaCheckCircle,
  FaChevronRight,
  FaUsers,
  FaUserTie,
  FaClipboardList,
  FaBalanceScale,
  FaHandshake,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";
import { MdOutlineCorporateFare } from "react-icons/md";
import bgImage from "../../assets/Investors-banner-2.jpg";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const CorporateGovernance = () => {
  // Colors
  const brandRed = "#cc0000";
  const goldAccent = "#d4af37";
  const darkBg = "#0a0a0a";

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

  // Animated counter for board members
  const Counter = ({ from, to, duration = 2 }) => {
    const [ref, inView] = useInView({ triggerOnce: true });
    const controls = useAnimation();
    const count = useAnimation();

    useEffect(() => {
      if (inView) {
        controls.start("visible");
        count.start({
          val: to,
          transition: { duration: duration, ease: "easeOut" },
        });
      }
    }, [inView, controls, count, to, duration]);

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeIn}
      >
        <motion.span
          animate={count}
          custom={0}
          initial={{ val: from }}
        >
          {({ val }) => Math.floor(val)}
        </motion.span>
      </motion.div>
    );
  };

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero Header Section */}
      <div className="relative w-full h-screen max-h-[32rem] overflow-hidden">
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
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/80 flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="h-0.5 bg-gradient-to-r from-transparent via-goldAccent to-transparent mb-6"
            style={{ backgroundColor: goldAccent }}
          />
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-4 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Corporate <span style={{ color: goldAccent }}>Governance</span>
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Our framework for ethical leadership and sustainable growth
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1.2, delay: 0.9, ease: "easeInOut" }}
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

      {/* Sticky Navigation */}
      <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-sm py-4 border-b border-gray-900">
        <div className="max-w-5xl mx-auto px-4 overflow-x-auto">
          <motion.div
            className="flex space-x-3 md:justify-center min-w-max"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              { title: "Code of Conduct", id: "code-of-conduct", icon: <FaClipboardList className="mr-2" /> },
              { title: "Chairman", id: "chairman", icon: <FaUserTie className="mr-2" /> },
              { title: "Managing Director", id: "managing-director", icon: <FaUserTie className="mr-2" /> },
              { title: "Board Members", id: "board-members", icon: <FaUsers className="mr-2" /> },
              { title: "Board Composition", id: "board-composition", icon: <MdOutlineCorporateFare className="mr-2" /> },
            ].map((item, index) => (
              <a
                key={index}
                href={`#${item.id}`}
                className="px-4 py-2 rounded-full border border-gray-800 hover:border-goldAccent text-sm font-medium transition-all duration-300 hover:bg-black/30 flex items-center"
                style={{ borderColor: "rgba(212, 175, 55, 0.3)" }}
              >
                {item.icon}
                {item.title}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto py-12 space-y-24 px-4">
        {/* Code of Conduct Section */}
        <motion.section
          id="code-of-conduct"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
        >
          <motion.div className="flex items-center justify-center mb-8" variants={fadeIn}>
            <FaClipboardList className="text-4xl mr-4" style={{ color: goldAccent }} />
            <h2 className="text-3xl font-light">
              Code of <span className="font-semibold">Conduct</span>
            </h2>
          </motion.div>
          
          <motion.div
            className="h-px w-16 mx-auto mb-10"
            style={{
              background: `linear-gradient(to right, transparent, ${goldAccent}, transparent)`,
            }}
            variants={fadeIn}
          />

          <motion.div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8" variants={fadeIn}>
            <motion.h3 className="text-xl font-medium mb-6 text-center" variants={fadeIn}>
              Olympic's Board of Directors follows a strict Code of Conduct aligned with our core values
            </motion.h3>
            
            <motion.div className="grid md:grid-cols-2 gap-6" variants={fadeIn}>
              {[
                {
                  title: "Stakeholder Commitment",
                  description: "Put the interests of the company and its stakeholders above all others, including their own",
                  icon: <FaUsers className="text-2xl" />,
                  color: brandRed
                },
                {
                  title: "Fiduciary Duty",
                  description: "Exercise due diligence, fiscal prudence and fulfill respective fiduciary responsibilities",
                  icon: <FaShieldAlt className="text-2xl" />,
                  color: goldAccent
                },
                {
                  title: "Confidentiality",
                  description: "Maintain confidentiality of information",
                  icon: <FaBalanceScale className="text-2xl" />,
                  color: brandRed
                },
                {
                  title: "Legal Compliance",
                  description: "Ensure compliance with all laws, rules, regulations and guidelines",
                  icon: <FaCheckCircle className="text-2xl" />,
                  color: goldAccent
                },
                {
                  title: "Ethical Standards",
                  description: "Avoid making or receiving undue favour, engaging in competing business, using company property for personal gain or over-exercising power",
                  icon: <FaHandshake className="text-2xl" />,
                  color: brandRed
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-5 rounded-lg border border-gray-800 hover:border-goldAccent transition-all duration-300 group"
                  variants={slideIn}
                  whileHover={{ y: -5 }}
                  custom={index}
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className="flex-shrink-0 p-3 rounded-full"
                      style={{ 
                        backgroundColor: item.color + "20",
                        color: item.color
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">{item.title}</h4>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Chairman Section */}
        <motion.section
          id="chairman"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
        >
          <motion.div className="flex flex-col md:flex-row gap-12 items-start" variants={fadeIn}>
            <motion.div className="md:w-1/3" variants={fadeIn}>
              <motion.div className="flex items-center mb-6" variants={fadeIn}>
                <FaUserTie className="text-3xl mr-4" style={{ color: goldAccent }} />
                <h2 className="text-3xl font-light">
                  Chairman of the <span className="font-semibold">Board</span>
                </h2>
              </motion.div>
              
              <motion.div
                className="h-px w-16 mb-6"
                style={{
                  background: `linear-gradient(to right, ${goldAccent}, transparent)`,
                }}
                variants={fadeIn}
              />
              
              <motion.div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800 mb-6" variants={slideIn}>
                <h3 className="font-medium mb-2">Mr. Aziz Mohammad Bhai</h3>
                <p className="text-sm text-gray-300">Chairman since July 23, 2023</p>
                <p className="text-sm mt-3 text-gray-400">
                  Elected from among the non-executive directors as per Condition No.1(4)(c) of Corporate Governance Code
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div className="md:w-2/3" variants={fadeIn}>
              <motion.div className="mb-8" variants={fadeIn}>
                <h3 className="text-xl font-medium mb-4 pb-2 border-b border-gray-800">Roles</h3>
                <p className="text-gray-300 mb-4">
                  The Chairman leads the Board to ensure that the Board functions effectively and smoothly to promote high standards of uprightness, integrity and corporate governance. He does not participate or interfere with the day-to-day operations or administrative functions of the company.
                </p>
                <p className="text-gray-300">
                  The role of Chairman is to formulate broad policy guidelines for the company, to oversee that the functions are performed properly and within the set policy guidelines. He extends his support to the Managing Director, whenever required, to implement the guidelines.
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <h3 className="text-xl font-medium mb-4 pb-2 border-b border-gray-800">Responsibilities</h3>
                <motion.ul className="space-y-4" variants={fadeIn}>
                  {[
                    "Attend and preside over the meetings of the Board of Directors",
                    "Ensure active participation from all members in discussions and decision-making",
                    "Ensure meeting agendas are properly discussed and decisions are harmoniously taken",
                    "Help resolve disagreements and maintain board cohesion",
                    "Ensure the Board performs well and achieves company objectives",
                    "Support and guide the Managing Director in discharging responsibilities",
                    "Ensure Board Committees are properly formed and functional"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3 py-3 border-b border-gray-900 last:border-0"
                      variants={slideIn}
                      whileHover={{ x: 5 }}
                      custom={index}
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: goldAccent }}>
                          <FaChevronRight className="text-xs text-black" />
                        </div>
                      </div>
                      <p className="text-gray-300">{item}</p>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Managing Director Section */}
        <motion.section
          id="managing-director"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
        >
          <motion.div className="flex flex-col md:flex-row gap-12 items-start" variants={fadeIn}>
            <motion.div className="md:w-2/3" variants={fadeIn}>
              <motion.div className="flex items-center mb-6" variants={fadeIn}>
                <FaUserTie className="text-3xl mr-4" style={{ color: brandRed }} />
                <h2 className="text-3xl font-light">
                  Managing <span className="font-semibold">Director</span>
                </h2>
              </motion.div>
              
              <motion.div
                className="h-px w-16 mb-6"
                style={{
                  background: `linear-gradient(to right, ${brandRed}, transparent)`,
                }}
                variants={fadeIn}
              />
              
              <motion.div className="mb-8" variants={fadeIn}>
                <h3 className="text-xl font-medium mb-4 pb-2 border-b border-gray-800">Roles</h3>
                <p className="text-gray-300 mb-4">
                  At Olympic Industries Limited, the Managing Director performs the functions of the CEO. As per Condition No.1(4)(e), the Managing Director does not and shall not hold the same position in another listed company.
                </p>
                <p className="text-gray-300 mb-4">
                  The Managing Director is in charge of implementing policies and decisions of the Board of Directors, as well as looking after the overall management of the company. He acts as liaison between the Board of Directors and the management.
                </p>
                <p className="text-gray-300">
                  He is the visionary, guide and key decision-maker of the company, responsible for motivating employees and improving company performance to achieve objectives.
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <h3 className="text-xl font-medium mb-4 pb-2 border-b border-gray-800">Responsibilities</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Set company goals and formulate policies",
                    "Lead and empower key management to achieve objectives",
                    "Present plans and strategies to the Board",
                    "Arrange funding for implementation of plans",
                    "Ensure proper recruitment through HR planning",
                    "Maintain positive working environment and team spirit",
                    "Maintain effective stakeholder communication",
                    "Control costs and improve efficiency",
                    "Promote management succession planning",
                    "Identify and mitigate company risks",
                    "Ensure consistent performance recognition",
                    "Fulfill company obligations to stakeholders"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-gray-900/30 border border-gray-800 hover:border-goldAccent"
                      variants={slideIn}
                      whileHover={{ y: -3 }}
                      custom={index}
                    >
                      <div className="flex-shrink-0 mt-1">
                        <FaCheckCircle className="text-sm" style={{ color: brandRed }} />
                      </div>
                      <p className="text-gray-300 text-sm">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Board Members Section */}
        <motion.section
          id="board-members"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
        >
          <motion.div className="flex items-center justify-center mb-8" variants={fadeIn}>
            <FaUsers className="text-4xl mr-4" style={{ color: goldAccent }} />
            <h2 className="text-3xl font-light">
              Other Board <span className="font-semibold">Members</span>
            </h2>
          </motion.div>
          
          <motion.div
            className="h-px w-16 mx-auto mb-10"
            style={{
              background: `linear-gradient(to right, transparent, ${goldAccent}, transparent)`,
            }}
            variants={fadeIn}
          />

          <motion.div className="grid md:grid-cols-2 gap-12" variants={fadeIn}>
            <motion.div variants={fadeIn}>
              <h3 className="text-xl font-medium mb-6 pb-2 border-b border-gray-800">Roles</h3>
              <motion.ul className="space-y-4" variants={fadeIn}>
                {[
                  "Establish and continually review company's vision, mission and values",
                  "Review present and future opportunities, threats and risks",
                  "Assess company strengths and weaknesses",
                  "Determine business strategies and plans",
                  "Participate actively in board activities",
                  "Effectively delegate responsibilities to management",
                  "Ensure internal controls are effective"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 py-3 border-b border-gray-900 last:border-0"
                    variants={slideIn}
                    whileHover={{ x: 5 }}
                    custom={index}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: brandRed }}>
                        <FaChevronRight className="text-xs text-white" />
                      </div>
                    </div>
                    <p className="text-gray-300">{item}</p>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <h3 className="text-xl font-medium mb-6 pb-2 border-b border-gray-800">Responsibilities</h3>
              <motion.ul className="space-y-4" variants={fadeIn}>
                {[
                  "Attend Board meetings and Annual General Meetings",
                  "Devote sufficient time and attention to Board activities",
                  "Discharge duties professionally with due diligence",
                  "Act in the best interest of the company",
                  "Promote company objectives for stakeholder benefit",
                  "Avoid situations that may create conflict of interest",
                  "Maintain strict confidentiality of information",
                  "Respect all governance policies and procedures"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 py-3 border-b border-gray-900 last:border-0"
                    variants={slideIn}
                    whileHover={{ x: 5 }}
                    custom={index}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: goldAccent }}>
                        <FaChevronRight className="text-xs text-black" />
                      </div>
                    </div>
                    <p className="text-gray-300">{item}</p>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
          
          <motion.div className="mt-12 bg-gray-900/50 p-6 rounded-xl border border-gray-800" variants={fadeIn}>
            <h3 className="text-lg font-medium mb-4 text-center">Governance Compliance</h3>
            <p className="text-gray-300 text-center text-sm">
              [As per Condition No.1(7) of Corporate Governance Code dated June 3, 2018]
            </p>
          </motion.div>
        </motion.section>

        {/* Board Composition Section */}
        <motion.section
          id="board-composition"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
        >
          <motion.div className="flex items-center justify-center mb-8" variants={fadeIn}>
            <MdOutlineCorporateFare className="text-4xl mr-4" style={{ color: brandRed }} />
            <h2 className="text-3xl font-light">
              Board <span className="font-semibold">Composition</span>
            </h2>
          </motion.div>
          
          <motion.div
            className="h-px w-16 mx-auto mb-10"
            style={{
              background: `linear-gradient(to right, transparent, ${brandRed}, transparent)`,
            }}
            variants={fadeIn}
          />

          <motion.div className="flex flex-col md:flex-row items-center justify-center gap-12" variants={fadeIn}>
            <div className="relative">
              <motion.div
                className="w-48 h-48 rounded-full flex items-center justify-center"
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
                  <div className="text-5xl font-light">
                    <Counter from={0} to={9} duration={2} />
                  </div>
                  <div
                    className="text-sm uppercase tracking-widest mt-2"
                    style={{ color: goldAccent }}
                  >
                    Directors
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="absolute -inset-2 rounded-full z-0 opacity-30"
                style={{
                  background: `linear-gradient(135deg, ${brandRed} 0%, ${goldAccent} 100%)`,
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.15 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </div>

            <div className="max-w-md">
              <p className="text-gray-300 mb-6">
                Olympic's Board of Directors is comprised of <span className="font-medium text-white">9 Directors</span>, including <span className="font-medium text-white">2 Independent Directors</span>. The Chairman is elected from among the directors, while the Managing Director performs the functions of Chief Executive Officer (CEO).
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                  <div className="text-2xl font-light mb-1" style={{ color: goldAccent }}>
                    2
                  </div>
                  <div className="text-xs uppercase tracking-wider text-gray-400">
                    Independent Directors
                  </div>
                </div>
                
                <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                  <div className="text-2xl font-light mb-1" style={{ color: goldAccent }}>
                    1
                  </div>
                  <div className="text-xs uppercase tracking-wider text-gray-400">
                    Managing Director
                  </div>
                </div>
                
                <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                  <div className="text-2xl font-light mb-1" style={{ color: brandRed }}>
                    1
                  </div>
                  <div className="text-xs uppercase tracking-wider text-gray-400">
                    Chairman
                  </div>
                </div>
                
                <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                  <div className="text-2xl font-light mb-1" style={{ color: brandRed }}>
                    6
                  </div>
                  <div className="text-xs uppercase tracking-wider text-gray-400">
                    Other Directors
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default CorporateGovernance;