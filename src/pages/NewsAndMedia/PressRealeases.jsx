import { useState } from "react";

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

const NewsCard = ({ item }) => {
  // Category to color mapping
  const categoryColors = {
    Financial: "bg-blue-900 text-blue-200",
    Dividend: "bg-green-900 text-green-200",
    Report: "bg-purple-900 text-purple-200",
    Meeting: "bg-yellow-900 text-yellow-200",
    General: "bg-gray-700 text-gray-200",
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="bg-gray-900 rounded-lg p-6  shadow-lg border border-gray-800 hover:border-red-600 transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <span
            className={`text-xs font-semibold px-2 py-1 rounded ${
              categoryColors[item.category] || "bg-gray-700 text-gray-200"
            }`}
          >
            {item.category}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {formatDate(item.date)}
          </div>
        </div>

        <h2 className="text-xl font-semibold text-gray-100 mb-4">
          {item.title}
        </h2>

        <div className="mt-auto">
          <button className="flex items-center gap-2 bg-gray-800 hover:bg-red-700 text-gray-100 px-4 py-2 rounded-md transition-colors duration-200 group-hover:bg-red-600">
            <span>Read More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const PaginationButton = ({ children, active, disabled, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center w-10 h-10 rounded-md transition-colors duration-200 ${
        active
          ? "bg-red-600 text-white"
          : disabled
          ? "bg-gray-800 text-gray-600 cursor-not-allowed"
          : "bg-gray-800 text-gray-300 hover:bg-gray-700"
      }`}
    >
      {children}
    </button>
  );
};

const NoResultsFound = () => (
  <div className="py-12 text-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16 mx-auto text-gray-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <h3 className="mt-4 text-xl font-medium text-gray-400">
      No press releases found
    </h3>
    <p className="mt-2 text-gray-500">
      Try adjusting your search or filter criteria
    </p>
  </div>
);

const PressReleases = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("All");

  // Filter and search logic
  const filteredData = sortedData
    .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    .filter((item) => (filter === "All" ? true : item.category === filter));

  const totalPages = Math.max(
    1,
    Math.ceil(filteredData.length / ITEMS_PER_PAGE)
  );
  const currentData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Reset to page 1 when filters change
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  const handleSearchChange = (newSearch) => {
    setSearch(newSearch);
    setCurrentPage(1);
  };

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Press Releases
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl">
            Latest announcements, price sensitive information, and corporate
            news.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="mb-8 bg-gray-900 p-4 rounded-lg border border-gray-800">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search press releases..."
                value={search}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full bg-gray-800 text-white pl-10 pr-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Filter by Category */}
            <div className="w-full md:w-48">
              <select
                value={filter}
                onChange={(e) => handleFilterChange(e.target.value)}
                className="w-full bg-gray-800 text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none transition-all duration-200"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundPosition: "right 0.5rem center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "1.5em 1.5em",
                  paddingRight: "2.5rem",
                }}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* News List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {currentData.length > 0 ? (
            currentData.map((item) => <NewsCard key={item.id} item={item} />)
          ) : (
            <div className="col-span-2">
              <NoResultsFound />
            </div>
          )}
        </div>

        {/* Pagination */}
        {filteredData.length > 0 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <PaginationButton
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M9.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </PaginationButton>
            <PaginationButton
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </PaginationButton>

            <div className="px-4 text-sm text-gray-400">
              Page <span className="font-medium text-white">{currentPage}</span>{" "}
              of <span className="font-medium text-white">{totalPages}</span>
            </div>

            <PaginationButton
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </PaginationButton>
            <PaginationButton
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </PaginationButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default PressReleases;
