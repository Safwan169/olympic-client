import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaArrowLeft, FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaSearch, FaChevronDown, FaSync } from "react-icons/fa";

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [showMore, setShowMore] = useState({});
  const [activeValueTab, setActiveValueTab] = useState("INVITING");
  
  const toggleShowMore = (jobId) => {
    setShowMore(prev => ({
      ...prev,
      [jobId]: !prev[jobId]
    }));
  };
  
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
  
  const companyValues = {
    INVITING: {
      title: "INVITING",
      description: "Welcome to a culture of warm professionalism",
      image: "/api/placeholder/300/200"
    },
    IGNITING: {
      title: "IGNITING",
      description: "Be at the top of the game & set new standards",
      image: "/api/placeholder/300/200"
    },
    CREATING: {
      title: "CREATING",
      description: "Create value beyond the expectations of your role",
      image: "/api/placeholder/300/200"
    },
    RESPECTING: {
      title: "RESPECTING",
      description: "Contribute to the communities and environment we operate in",
      image: "/api/placeholder/300/200"
    }
  };
  
  const philosophyData = [
    {
      title: "ADDRESSING MALNUTRITION IN OUR COMMUNITIES",
      description: "Our Britannia Nutrition Foundation (BNF) holistically addresses malnutrition in communities.",
      image: "/api/placeholder/400/300"
    },
    {
      title: "HUMAN CAPITAL DEVELOPMENT",
      description: "We focus on protecting, respecting, and remediating human rights.",
      image: "/api/placeholder/400/300"
    },
    {
      title: "OCCUPATIONAL HEALTH SAFETY",
      description: "We are committed to creating a safe & healthy working environment for everyone.",
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <div className="bg-black text-gray-200 min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-4xl px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">WE GROW WHEN OUR PEOPLE GROW</h1>
            <p className="text-xl text-gray-300 mb-8">
              A place of warm professionalism where we Speak up, Work with self discipline and Take ownership. 
              Experience the comfort of having family around. So, everyday, every time when we come to work, 
              it's like coming home to Olympic.
            </p>
            <Link to="/career/explore-opportunities">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium transition duration-300">
              Explore Opportunities
            </button>
            </Link>   
          </div>
        </div>
      </div>
  
      {/* We make your test better Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">We make your test better</h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            Life at Britannia is about chasing the TINGs. Our vision is to be a Responsible Total Foods Company, 
            serving products that brim with exciting goodness, through the day. We do that by working together 
            as a creative, energetic and passionate team.
          </p>
        </div>
      </div>
  
      {/* Company Values Section */}
      <div className="bg-black text-white py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {Object.keys(companyValues).map((key) => (
              <div 
                key={key} 
                className={`rounded-lg overflow-hidden cursor-pointer transition duration-300 transform hover:scale-105 border border-gray-800 ${activeValueTab === key ? 'ring-2 ring-red-600 shadow-lg shadow-red-900/20' : ''}`}
                onClick={() => setActiveValueTab(key)}
              >
                <div className="relative h-60">
                  <img src={companyValues[key].image} alt={companyValues[key].title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-4">
                    <h3 className="text-white text-2xl font-bold">{companyValues[key].title}</h3>
                    <p className="text-gray-300 text-sm">{companyValues[key].description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-8 bg-gray-900 rounded-lg border border-gray-800">
            <h2 className="text-3xl font-bold mb-6 text-white text-center">
              {activeValueTab === "INVITING" && "COME HOME TO BRITANNIA"}
              {activeValueTab === "IGNITING" && "BUILD ENRICHING CAREERS"}
              {activeValueTab === "CREATING" && "CREATE VALUE BEYOND EXPECTATIONS"}
              {activeValueTab === "RESPECTING" && "RESPECT OUR COMMUNITIES"}
            </h2>
            
            <p className="text-gray-300 text-center max-w-3xl mx-auto">
              {activeValueTab === "INVITING" && "A place that feels like home, Britannia exudes warm professionalism and is a workplace that is accepting of diverse ideas and thoughts while empowering employees as owners."}
              {activeValueTab === "IGNITING" && "We, at Britannia, provide an arena for our employees to experiment, learn on the job, even possibly fail and eventually create value beyond expectations."}
              {activeValueTab === "CREATING" && "At Britannia, we believe in creating value in everything we do. Our employees are empowered to innovate and contribute meaningfully to our success."}
              {activeValueTab === "RESPECTING" && "We are committed to the communities where we operate, respecting their values and contributing positively to society and the environment."}
            </p>
            
            {activeValueTab === "INVITING" && (
              <div className="mt-10 text-center">
                <h3 className="text-xl font-bold mb-4 text-white">BRITANNIA IS ALWAYS ABOUT BRITANNIANS.</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="relative h-48 rounded-lg overflow-hidden border border-gray-800 hover:border-red-600 transition-all duration-300">
                    <img src="/api/placeholder/300/200" alt="Ownership and Accountability" className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                      <h4 className="text-white font-bold">OWNERSHIP AND ACCOUNTABILITY</h4>
                    </div>
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden border border-gray-800 hover:border-red-600 transition-all duration-300">
                    <img src="/api/placeholder/300/200" alt="Diversity & Inclusion" className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                      <h4 className="text-white font-bold">DIVERSITY & INCLUSION</h4>
                    </div>
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden border border-gray-800 hover:border-red-600 transition-all duration-300">
                    <img src="/api/placeholder/300/200" alt="Advocacy" className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                      <h4 className="text-white font-bold">ADVOCACY</h4>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeValueTab === "IGNITING" && (
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-60 rounded-lg overflow-hidden border border-gray-800 hover:border-red-600 transition-all duration-300">
                  <img src="/api/placeholder/400/300" alt="Enriching Career Testimonials" className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                    <h4 className="text-white font-bold">ENRICHING CAREER TESTIMONIALS</h4>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-red-600 rounded-full h-8 w-8 flex items-center justify-center transition-transform transform hover:scale-110">
                    <span className="text-white font-bold">+</span>
                  </div>
                </div>
                <div className="relative h-60 rounded-lg overflow-hidden border border-gray-800 hover:border-red-600 transition-all duration-300">
                  <img src="/api/placeholder/400/300" alt="Wider Roles" className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                    <h4 className="text-white font-bold">WIDER ROLES</h4>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-red-600 rounded-full h-8 w-8 flex items-center justify-center transition-transform transform hover:scale-110">
                    <span className="text-white font-bold">+</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
  
      {/* Philosophy Section */}
      <div className="bg-black text-white py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">OUR PHILOSOPHY</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophyData.map((item, index) => (
              <div key={index} className="rounded-lg overflow-hidden bg-gray-900 border border-gray-800 hover:border-red-600 transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transform hover:scale-105 transition duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  
      {/* Apply Form Section */}
      <div className="bg-gray-900 text-white py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Current Openings</h2>
          <p className="text-center mb-8 text-gray-300">
            Candidates who wish to apply can check our careers page on <a href="#" className="text-red-400 hover:text-red-300 hover:underline">LinkedIn</a> and <a href="#" className="text-red-400 hover:text-red-300 hover:underline">apply</a> for the jobs posted.
          </p>
          
          <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-1">
              <label className="text-sm text-gray-400">Job Title</label>
              <input type="text" className="w-full bg-black border-b border-gray-700 pb-1 focus:outline-none focus:border-red-500 text-white" />
            </div>
            
            <div className="space-y-1">
              <label className="text-sm text-gray-400">First Name</label>
              <input type="text" className="w-full bg-black border-b border-gray-700 pb-1 focus:outline-none focus:border-red-500 text-white" />
            </div>
            
            <div className="space-y-1">
              <label className="text-sm text-gray-400">Middle Name</label>
              <input type="text" className="w-full bg-black border-b border-gray-700 pb-1 focus:outline-none focus:border-red-500 text-white" />
            </div>
            
            <div className="space-y-1">
              <label className="text-sm text-gray-400">Last Name</label>
              <input type="text" className="w-full bg-black border-b border-gray-700 pb-1 focus:outline-none focus:border-red-500 text-white" />
            </div>
            
            <div className="space-y-1">
              <label className="text-sm text-gray-400">Date of Birth</label>
              <input type="text" className="w-full bg-black border-b border-gray-700 pb-1 focus:outline-none focus:border-red-500 text-white" />
            </div>
            
            <div className="space-y-1">
              <label className="text-sm text-gray-400">Father's/ Husband's Name</label>
              <input type="text" className="w-full bg-black border-b border-gray-700 pb-1 focus:outline-none focus:border-red-500 text-white" />
            </div>
            
            <div className="space-y-1">
              <label className="text-sm text-gray-400">Gender</label>
              <div className="flex items-center space-x-4 pt-2 text-gray-300">
                <label className="flex items-center">
                  <input type="radio" name="gender" value="male" checked className="mr-2 accent-red-600" />
                  Male
                </label>
                <label className="flex items-center">
                  <input type="radio" name="gender" value="female" className="mr-2 accent-red-600" />
                  Female
                </label>
              </div>
            </div>
            
            <div className="space-y-1">
              <label className="text-sm text-gray-400">Marital Status</label>
              <select className="w-full bg-black border-b border-gray-700 pb-1 focus:outline-none focus:border-red-500 text-white">
                <option>--Marital Status--</option>
                <option>Single</option>
                <option>Married</option>
              </select>
            </div>
            
            <div className="space-y-1">
              <label className="text-sm text-gray-400">Country</label>
              <select className="w-full bg-black border-b border-gray-700 pb-1 focus:outline-none focus:border-red-500 text-white">
                <option>India</option>
                <option>Other</option>
              </select>
            </div>
            
            <div className="space-y-1">
              <label className="text-sm text-gray-400">State</label>
              <input type="text" className="w-full bg-black border-b border-gray-700 pb-1 focus:outline-none focus:border-red-500 text-white" />
            </div>
            
            <div className="space-y-1">
              <label className="text-sm text-gray-400">City</label>
              <input type="text" className="w-full bg-black border-b border-gray-700 pb-1 focus:outline-none focus:border-red-500 text-white" />
            </div>
            
            <div className="space-y-1">
              <label className="text-sm text-gray-400">E-Mail</label>
              <input type="email" className="w-full bg-black border-b border-gray-700 pb-1 focus:outline-none focus:border-red-500 text-white" />
            </div>
            
            <div className="space-y-1">
              <label className="text-sm text-gray-400">Phone</label>
              <input type="tel" className="w-full bg-black border-b border-gray-700 pb-1 focus:outline-none focus:border-red-500 text-white" />
            </div>
            
            <div className="space-y-1">
              <label className="text-sm text-gray-400">Experience</label>
              <input type="text" className="w-full bg-black border-b border-gray-700 pb-1 focus:outline-none focus:border-red-500 text-white" />
            </div>
            
            <div className="space-y-1">
              <label className="text-sm text-gray-400">Salary</label>
              <input type="text" className="w-full bg-black border-b border-gray-700 pb-1 focus:outline-none focus:border-red-500 text-white" />
            </div>
            
            <div className="space-y-1">
              <label className="text-sm text-gray-400">Functional Area</label>
              <input type="text" className="w-full bg-black border-b border-gray-700 pb-1 focus:outline-none focus:border-red-500 text-white" />
            </div>
            
            <div className="space-y-1">
              <label className="text-sm text-gray-400">Residential Address</label>
              <input type="text" className="w-full bg-black border-b border-gray-700 pb-1 focus:outline-none focus:border-red-500 text-white" />
            </div>
            
            <div className="space-y-1">
              <label className="text-sm text-gray-400">Message</label>
              <input type="text" className="w-full bg-black border-b border-gray-700 pb-1 focus:outline-none focus:border-red-500 text-white" />
            </div>
            
            <div className="space-y-1">
              <label className="text-sm text-gray-400">Qualification</label>
              <input type="text" className="w-full bg-black border-b border-gray-700 pb-1 focus:outline-none focus:border-red-500 text-white" />
            </div>
            
            <div className="space-y-1">
              <label className="text-sm text-gray-400">Area of Interest</label>
              <input type="text" className="w-full bg-black border-b border-gray-700 pb-1 focus:outline-none focus:border-red-500 text-white" />
            </div>
            
            <div className="space-y-1">
              <label className="text-sm text-gray-400">Upload Resume</label>
              <button className="w-full border border-gray-700 text-gray-300 rounded px-3 py-1 text-left hover:border-red-500 transition-colors">Choose File</button>
              <span className="text-xs text-gray-500">No file chosen</span>
            </div>
            
            <div className="space-y-1">
              <label className="text-sm text-gray-400">Enter captcha code*</label>
              <div className="flex items-center space-x-2">
                <input type="text" className="flex-grow bg-black border-b border-gray-700 pb-1 focus:outline-none focus:border-red-500 text-white" />
                <div className="text-gray-300 font-bold">60df90</div>
                <button className="text-gray-400 hover:text-red-400">
                  <FaSync />
                </button>
              </div>
            </div>
            
            <div className="md:col-span-3 mt-4">
              <button type="submit" className="w-full md:w-48 bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition duration-300 transform hover:scale-105">Submit</button>
            </div>
          </form>
        </div>
      </div>
  
      {/* Main Content - Department Selection and Job Cards (when a department is selected) */}
      {selectedDepartment && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-black">
          <button 
            onClick={() => setSelectedDepartment(null)}
            className="flex items-center text-gray-400 hover:text-red-400 mb-8 transition-colors"
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
                  className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-red-600 transition-all duration-300 transform hover:scale-102"
                >
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="bg-red-600 rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0 mr-4">
                        <span className="text-3xl font-bold text-white">{job.title[0]}</span>
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
                                <FaMapMarkerAlt className="mr-1 text-red-400" />
                                <span>{job.location}</span>
                              </div>
                              <div className="flex items-center text-gray-400">
                                <FaBriefcase className="mr-1 text-red-400" />
                                <span>{job.type}</span>
                              </div>
                            </div>
                            
                            <div className="mt-4 text-gray-300">
                              <p>Position Title: {job.position}Function: {job.function}Key Stakeholders:{job.keyStakeholders}</p>
                              {showMore[job.id] && (
                                <button 
                                  onClick={() => toggleShowMore(job.id)}
                                  className="text-red-400 hover:text-red-300 text-sm mt-1 focus:outline-none"
                                >
                                  Show Less
                                </button>
                              )}
                              {!showMore[job.id] && (
                                <button 
                                  onClick={() => toggleShowMore(job.id)}
                                  className="text-red-400 hover:text-red-300 text-sm mt-1 focus:outline-none"
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
                                className="bg-black border border-gray-700 text-red-400 px-3 py-1 rounded-full text-sm"
                              >
                                {skill}
                              </span>
                            ))}
                            {job.skills.length > 4 && (
                              <span className="text-red-400 px-3 py-1 text-sm">
                                + {job.skills.length - 4} more
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <div className="mt-4 flex flex-wrap justify-between text-sm text-gray-400">
                          <div className="flex items-center">
                            <FaCalendarAlt className="mr-1 text-red-400" />
                            <span>Posted on {job.postedDate}</span>
                          </div>
                          <div className="flex items-center">
                            <FaCalendarAlt className="mr-1 text-red-400" />
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
  );
};
        
export default Careers;