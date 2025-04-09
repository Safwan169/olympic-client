import { useState } from "react";
import {
  FaSearch,
  FaChevronDown,
  FaMapMarkerAlt,
  FaBriefcase,
  FaDollarSign,
  FaCalendarAlt,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";

const jobData = [
  {
    id: 1,
    title: "Software Engineer",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "$40k–$60k",
    deadline: "March 30, 2025",
  },
  {
    id: 2,
    title: "Product Designer",
    location: "Remote",
    type: "Contract",
    salary: "$30k–$50k",
    deadline: "April 5, 2025",
  },
  {
    id: 3,
    title: "Marketing Manager",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "$50k–$70k",
    deadline: "March 28, 2025",
  },
  {
    id: 4,
    title: "Customer Support Specialist",
    location: "Remote",
    type: "Part-time",
    salary: "$20k–$35k",
    deadline: "April 12, 2025",
  },
  {
    id: 5,
    title: "Data Scientist",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "$60k–$90k",
    deadline: "March 25, 2025",
  },
  {
    id: 6,
    title: "Frontend Developer",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "$45k–$70k",
    deadline: "April 10, 2025",
  },
  {
    id: 7,
    title: "Backend Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$55k–$80k",
    deadline: "March 20, 2025",
  },
  {
    id: 8,
    title: "HR Manager",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "$50k–$75k",
    deadline: "March 18, 2025",
  },
];

const sortedJobs = jobData.sort(
  (a, b) => new Date(b.deadline) - new Date(a.deadline)
);

const ITEMS_PER_PAGE = 4;
const jobTypes = ["All", ...new Set(sortedJobs.map((job) => job.type))];

const Careers = () => {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredJobs = sortedJobs
    .filter((job) => job.title.toLowerCase().includes(search.toLowerCase()))
    .filter((job) => (typeFilter === "All" ? true : job.type === typeFilter));

  const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);
  const currentJobs = filteredJobs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="bg-[#121212] text-white min-h-screen p-6">
      {/* Hero Section */}
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          We are looking for talented and motivated individuals to help us grow.
          Explore our openings and find a role that fits you!
        </p>
      </div>

      {/* Filter/Search */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
        <div className="relative w-full md:w-1/2">
          <FaSearch className="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-gray-800 text-white border border-gray-700 px-10 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>
        <div className="relative w-full md:w-1/4">
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="w-full bg-gray-800 text-white border border-gray-700 px-4 py-2 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            {jobTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <FaChevronDown className="absolute top-3 right-3 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Job Listings */}
      <div className="grid gap-6">
        {currentJobs.map((job) => (
          <div
            key={job.id}
            className="bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-800 hover:border-red-600 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-100">
                  {job.title}
                </h2>
                <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-red-500" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaBriefcase className="text-blue-500" />
                    {job.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaDollarSign className="text-green-500" />
                    {job.salary}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt className="text-yellow-500" />
                    Deadline: {job.deadline}
                  </span>
                </div>
              </div>
              <button className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-red-700 text-gray-100 px-4 py-2 rounded-md transition duration-200 group">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`w-10 h-10 flex items-center justify-center rounded-md ${
            currentPage === 1
              ? "bg-gray-800 text-gray-600 cursor-not-allowed"
              : "bg-gray-800 text-white hover:bg-red-600"
          }`}
        >
          <FaAngleLeft />
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={`w-10 h-10 flex items-center justify-center rounded-md ${
              currentPage === i + 1
                ? "bg-red-600 text-white"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`w-10 h-10 flex items-center justify-center rounded-md ${
            currentPage === totalPages
              ? "bg-gray-800 text-gray-600 cursor-not-allowed"
              : "bg-gray-800 text-white hover:bg-red-600"
          }`}
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default Careers;
