import { useState } from "react";
import {
  FaSearch,
  FaCalendarAlt,
  FaAngleLeft,
  FaAngleRight,
  FaChevronDown,
} from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";

const data = [
  {
    id: 1,
    title:
      "Principles on Disclosure of Material Information and Price Sensitive Information",
    date: "January 29, 2024",
    category: "General",
  },
  {
    id: 2,
    title: "Price Sensitive Information Feb 16, 2025",
    date: "February 16, 2025",
    category: "Financial",
  },
  {
    id: 3,
    title: "Price Sensitive Information Jan 30, 2025",
    date: "January 30, 2025",
    category: "Financial",
  },
  {
    id: 4,
    title: "DISTRIBUTION OF CASH DIVIDEND FOR FY 2023-2024",
    date: "January 8, 2025",
    category: "Dividend",
  },
  {
    id: 5,
    title: "Transmission of Soft Copy of Annual Report 2024",
    date: "November 24, 2024",
    category: "Report",
  },
  {
    id: 6,
    title: "Notice of 45th Annual General Meeting",
    date: "November 19, 2024",
    category: "Meeting",
  },
  {
    id: 7,
    title: "Credit Rating Report",
    date: "November 14, 2024",
    category: "Report",
  },
  {
    id: 8,
    title: "Price Sensitive Information Oct 27, 2024",
    date: "October 27, 2024",
    category: "Financial",
  },
];

// Sort by latest date (newest first)
const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));

const ITEMS_PER_PAGE = 4;
const categories = ["All", ...new Set(data.map((item) => item.category))];

const PressReleases = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("All");

  // Filter and search logic
  const filteredData = sortedData
    .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    .filter((item) => (filter === "All" ? true : item.category === filter));

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const currentData = filteredData.slice(
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
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-4 border-b-2 border-gray-700 pb-2 flex items-center gap-2">
          <IoNewspaperOutline size={28} className="text-cc0000" />
          Press Releases / Price Sensitive Information
        </h1>

        {/* Search + Filter */}
        <div className="flex items-center gap-4 mb-6">
          {/* Search */}
          <div className="relative w-1/3">
            <FaSearch className="absolute top-3 left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-gray-800 text-white border border-gray-600 px-10 py-2 rounded-md focus:outline-none focus:border-cc0000"
            />
          </div>

          {/* Filter */}
          <div className="relative w-1/3">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full bg-gray-800 text-white border border-gray-600 px-4 py-2 rounded-md focus:outline-none focus:border-cc0000 appearance-none"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <FaChevronDown className="absolute top-3 right-3 text-gray-400" />
          </div>
        </div>

        {/* News List */}
        <div className="space-y-4">
          {currentData.map((item) => (
            <div
              key={item.id}
              className="p-4 border border-gray-700 rounded-lg transition hover:bg-gray-900"
            >
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="flex items-center gap-2 text-gray-400 mt-1">
                <FaCalendarAlt /> {item.date} — {item.category}
              </p>
              <button className="mt-2 bg-cc0000 text-white px-4 py-2 rounded-md hover:bg-red-600 transition flex items-center gap-2">
                Read More
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-md ${
              currentPage === 1
                ? "bg-gray-700 cursor-not-allowed"
                : "bg-cc0000 hover:bg-red-600"
            }`}
          >
            <FaAngleLeft />
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 rounded-md ${
                currentPage === i + 1
                  ? "bg-red-500"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-md ${
              currentPage === totalPages
                ? "bg-gray-700 cursor-not-allowed"
                : "bg-cc0000 hover:bg-red-600"
            }`}
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PressReleases;
