import { useState } from "react";
import { FaChevronRight, FaArrowLeft, FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { motion } from 'framer-motion';

const departmentsData = [
  { name: "Manufacturing", count: 6 },
  { name: "Sales", count: 9 },
  { name: "Human Resources", count: 1 },
  { name: "Replenishment", count: 2 },
  { name: "Maintenance", count: 1 },
  { name: "Finance", count: 1 },
];

const jobsData = {
  Manufacturing: [
    {
      id: "BI-22965",
      title: "Production Supervisor",
      type: "Full-time",
      location: "Factory A",
      position: "Production Supervisor in charge",
      function: "Manufacturing",
      keyStakeholders: "Internal Teams",
      skills: ["Manufacturing", "Production", "Leadership"],
      postedDate: "10 Apr 2025",
      expiryDate: "25 Apr 2025"
    },
    {
      id: "BI-22966",
      title: "Quality Control Specialist",
      type: "Full-time",
      location: "Factory B",
      position: "Quality Control in charge",
      function: "Quality",
      keyStakeholders: "Internal Teams",
      skills: ["Quality Control", "Testing", "Documentation"],
      postedDate: "12 Apr 2025",
      expiryDate: "27 Apr 2025"
    },
    {
      id: "BI-22967",
      title: "Machine Operator",
      type: "Shift-based",
      location: "Factory C",
      position: "Machine Operation in charge",
      function: "Operations",
      keyStakeholders: "Production Team",
      skills: ["Machine Operation", "Technical", "Troubleshooting"],
      postedDate: "14 Apr 2025",
      expiryDate: "29 Apr 2025"
    },
  ],
  Sales: [
    {
      id: "BI-22968",
      title: "Area Sales Executive",
      type: "Full Time",
      location: "Mohali, Punjab, India",
      position: "Territory Sales in charge",
      function: "Sales",
      keyStakeholders: "Internal Teams",
      skills: ["FMCG Sales", "Sales", "FMCG", "Distributor Handling"],
      postedDate: "15 Apr 2025",
      expiryDate: "30 Apr 2025"
    },
    {
      id: "BI-22969",
      title: "Account Manager",
      type: "Full-time",
      location: "Head Office",
      position: "Account Management in charge",
      function: "Sales",
      keyStakeholders: "Clients, Sales Team",
      skills: ["Account Management", "Sales", "Client Relations"],
      postedDate: "16 Apr 2025",
      expiryDate: "01 May 2025"
    },
  ],
  "Human Resources": [
    {
      id: "BI-22970",
      title: "HR Generalist",
      type: "Full-time",
      location: "Head Office",
      position: "HR Operations in charge",
      function: "Human Resources",
      keyStakeholders: "All Departments",
      skills: ["HR Practices", "Recruitment", "Employee Relations"],
      postedDate: "13 Apr 2025",
      expiryDate: "28 Apr 2025"
    },
  ],
  Replenishment: [
    {
      id: "BI-22971",
      title: "Inventory Specialist",
      type: "Full-time",
      location: "Warehouse",
      position: "Inventory Management in charge",
      function: "Supply Chain",
      keyStakeholders: "Warehouse Teams",
      skills: ["Inventory Control", "Logistics", "Supply Chain"],
      postedDate: "11 Apr 2025",
      expiryDate: "26 Apr 2025"
    },
  ],
  Maintenance: [
    {
      id: "BI-22972",
      title: "Facilities Technician",
      type: "Full-time",
      location: "Factory A",
      position: "Maintenance in charge",
      function: "Facilities",
      keyStakeholders: "All Teams",
      skills: ["Maintenance", "Technical Skills", "Problem Solving"],
      postedDate: "17 Apr 2025",
      expiryDate: "02 May 2025"
    },
  ],
  Finance: [
    {
      id: "BI-22973",
      title: "Accounts Officer",
      type: "Full-time",
      location: "Head Office",
      position: "Accounting in charge",
      function: "Finance",
      keyStakeholders: "Management, All Departments",
      skills: ["Accounting", "Financial Reporting", "Analysis"],
      postedDate: "18 Apr 2025",
      expiryDate: "03 May 2025"
    },
  ],
};

const ExploreOpportunities = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [showMore, setShowMore] = useState({});

  const toggleShowMore = (jobId) => {
    setShowMore(prev => ({
      ...prev,
      [jobId]: !prev[jobId]
    }));
  };

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero Banner */}
      {/* Hero Banner */}
      <div className="relative w-full h-[32rem] overflow-hidden">
        {/* Animated Background Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            backgroundPosition: "center 30%",
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Gradient Overlay and Content */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/80 flex flex-col items-center justify-center px-4">
          {/* Top Divider */}
          {/* Note: Make sure amber-500 is defined in your Tailwind config if not default */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mb-6"
          />

          {/* Heading */}
          {/* Note: Make sure text-gold-400 is defined in your Tailwind config if not default */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 text-gold-400 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            WE GROW WHEN OUR PEOPLE GROW
          </motion.h1>

          {/* Paragraph */}
          {/* Note: Make sure text-gold-200 is defined in your Tailwind config if not default */}
          <motion.p
            className="text-xl text-gold-200 max-w-3xl text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            A place of warm professionalism where we Speak up, Work with self discipline and Take ownership.
            Experience the comfort of having family around. So, everyday, every time when we come to work,
            it's like coming home to Olympic.
          </motion.p>

          {/* Button */}
          {/* Note: Make sure amber-400 and red-600/700 are defined in your Tailwind config if not default */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            {/* Replace with your actual Link component if using a router */}
            {/* If not using a router, use an anchor tag <a href="..."> instead */}
            {/* <Link to="/career/explore-opportunities"> */}
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium transition duration-300 border border-amber-400">
              Explore Opportunities
            </button>
            {/* </Link> */}
          </motion.div>

          {/* Bottom Divider */}
          {/* Note: Make sure #E11D48 (or your brandRed) is the correct color value */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1.2, delay: 1.2, ease: "easeInOut" }}
            className="h-0.5 mt-8"
            style={{
              background: `linear-gradient(to right, transparent, #E11D48, transparent)`, // Assuming brandRed color
            }}
          />

          {/* Animated Scroll Indicator */}
          {/* Note: Make sure amber-400 is defined */}
          <motion.div
            className="absolute bottom-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <div className="animate-bounce flex flex-col items-center">
              <p className="text-xs mb-2 text-gray-300">Scroll to explore</p>
              <div className="w-4 h-4 border-r-2 border-b-2 border-amber-400 transform rotate-45"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {!selectedDepartment ? (
          <>
            <h2 className="text-3xl font-bold text-center mb-12">Explore by Department</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {departmentsData.map((dept) => (
                <div
                  key={dept.name}
                  onClick={() => setSelectedDepartment(dept.name)}
                  className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-red-600 transition-all duration-300 cursor-pointer hover:-translate-y-1"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{dept.name}</h3>
                    <p className="text-gray-400 mb-4">{dept.count} open role{dept.count !== 1 ? 's' : ''}</p>
                    <div className="flex items-center text-red-500 font-medium group">
                      <span className="group-hover:underline">View openings</span>
                      <FaChevronRight className="ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div>
            <button
              onClick={() => setSelectedDepartment(null)}
              className="flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Back to departments
            </button>

            <h2 className="text-3xl font-bold mb-8 text-white">{selectedDepartment} Openings</h2>

            <div className="space-y-6">
              {jobsData[selectedDepartment]?.length > 0 ? (
                jobsData[selectedDepartment].map((job) => (
                  <div
                    key={job.id}
                    className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-red-600 transition-all duration-300"
                  >
                    <div className="p-6">
                      <div className="flex items-start">
                        <div className="bg-yellow-500 rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0 mr-4">
                          <span className="text-3xl font-bold text-gray-900">{job.title[0]}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                            <div>
                              <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                              <div className="flex flex-wrap gap-2 mt-2">
                                <div className="flex items-center text-gray-400">
                                  <span className="ml-1">{job.id}</span>
                                </div>
                                <div className="flex items-center text-gray-400">
                                  <FaMapMarkerAlt className="mr-1 text-green-400" />
                                  <span>{job.location}</span>
                                </div>
                                <div className="flex items-center text-gray-400">
                                  <FaBriefcase className="mr-1 text-blue-400" />
                                  <span>{job.type}</span>
                                </div>
                              </div>

                              <div className="mt-4 text-gray-300">
                                <p>Position Title: {job.position}Function: {job.function}Key Stakeholders:{job.keyStakeholders}</p>
                                {showMore[job.id] && (
                                  <button
                                    onClick={() => toggleShowMore(job.id)}
                                    className="text-blue-400 hover:text-blue-300 text-sm mt-1 focus:outline-none"
                                  >
                                    Show Less
                                  </button>
                                )}
                                {!showMore[job.id] && (
                                  <button
                                    onClick={() => toggleShowMore(job.id)}
                                    className="text-blue-400 hover:text-blue-300 text-sm mt-1 focus:outline-none"
                                  >
                                    Show More
                                  </button>
                                )}
                              </div>
                            </div>
                            <button className="mt-4 md:mt-0 inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition duration-200 group">
                              Apply Now
                              <FaChevronRight className="ml-2 opacity-0 group-hover:opacity-100 transition-all" />
                            </button>
                          </div>

                          <div className="mt-4">
                            <h4 className="text-gray-300 font-medium">Skills Required</h4>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {job.skills.map((skill, index) => (
                                <span
                                  key={index}
                                  className="bg-gray-800 text-blue-400 px-3 py-1 rounded-full text-sm"
                                >
                                  {skill}
                                </span>
                              ))}
                              {job.skills.length > 4 && (
                                <span className="text-blue-400 px-3 py-1 text-sm">
                                  + {job.skills.length - 4} more
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="mt-4 flex flex-wrap justify-between text-sm text-gray-400">
                            <div className="flex items-center">
                              <FaCalendarAlt className="mr-1" />
                              <span>Posted on {job.postedDate}</span>
                            </div>
                            <div className="flex items-center">
                              <FaCalendarAlt className="mr-1" />
                              <span>Expires on {job.expiryDate}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 bg-gray-900 rounded-lg border border-gray-800">
                  <p className="text-gray-400">No current openings in this department</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreOpportunities;