import { useState } from "react";
import { motion } from "framer-motion";

// Sample background image - replace with your actual image
import bgImage from "../../assets/news_banner.jpeg";
const goldAccent = "#FFD700";
const brandRed = "#E30613";

const newsData = [
  {
    id: 1,
    title: "BRITANNIA COMPLETES 100 YEARS",
    date: "May 15, 2024",
    category: "Milestone",
    excerpt: "Celebrating a century of delicious baked goods and business excellence.",
    image: "/images/news1.jpg"
  },
  {
    id: 2,
    title: "BRITANNIA PARTNERS WITH NSDC",
    date: "April 28, 2024",
    category: "Partnership",
    excerpt: "New collaboration to support skill development in the food industry.",
    image: "/images/news2.jpg"
  },
  {
    id: 3,
    title: "BRITANNIA GOOD DAY REVEALS NEW IDENTITY",
    date: "March 10, 2024",
    category: "Rebranding",
    excerpt: "Iconic biscuit brand gets a fresh new look for modern consumers.",
    image: "/images/news3.jpg"
  },
  {
    id: 4,
    title: "BRITANNIA LAUNCHES BRITANNIA CHEESE SNACKS",
    date: "February 22, 2024",
    category: "Product Launch",
    excerpt: "Expanding product portfolio with new range of cheese snacks.",
    image: "/images/news4.jpg"
  },
  {
    id: 5,
    title: "BRITANNIA BAKES A PLAN FOR HEALTHY BUSINESS",
    date: "January 18, 2024",
    category: "Sustainability",
    excerpt: "New initiatives to promote health and wellness through our products.",
    image: "/images/news5.jpg"
  },
  {
    id: 6,
    title: "BRITANNIA SUPPORTS WOMEN ENTREPRENEURS",
    date: "November 10, 2023",
    category: "CSR",
    excerpt: "Announcing new assistance program for women entrepreneurs in food business.",
    image: "/images/news6.jpg"
  },
];

// Sort by latest date (newest first)
const sortedNewsData = newsData.sort((a, b) => new Date(b.date) - new Date(a.date));

const ITEMS_PER_PAGE = 6; // Showing 3 per row x 2 rows
const categories = ["All", ...new Set(newsData.map((item) => item.category))];

const NewsCard = ({ item }) => {
  // Category to color mapping
  const categoryColors = {
    "Milestone": "bg-amber-900 text-amber-200",
    "Partnership": "bg-blue-900 text-blue-200",
    "Rebranding": "bg-purple-900 text-purple-200",
    "Product Launch": "bg-green-900 text-green-200",
    "Sustainability": "bg-teal-900 text-teal-200",
    "CSR": "bg-red-900 text-red-200",
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-800 hover:border-amber-500 transition-all duration-300 transform hover:-translate-y-1 group h-full flex flex-col">
      {/* Image placeholder - would be replaced with actual image */}
      <div className="bg-gray-800 rounded-md mb-4 h-48 flex items-center justify-center overflow-hidden">
        <div className="text-gray-600 text-center p-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-sm">News Image</span>
        </div>
      </div>
      
      <div className="flex justify-between items-start mb-3">
        <span className={`text-xs font-semibold px-2 py-1 rounded ${categoryColors[item.category] || "bg-gray-700 text-gray-200"}`}>
          {item.category}
        </span>
        <div className="flex items-center text-gray-500 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {formatDate(item.date)}
        </div>
      </div>
      
      <h2 className="text-xl font-semibold text-gray-100 mb-2">{item.title}</h2>
      <p className="text-gray-400 text-sm mb-4 flex-grow">{item.excerpt}</p>
      
      <div className="mt-auto">
        <button className="flex items-center gap-2 bg-gray-800 hover:bg-amber-600 text-gray-100 px-4 py-2 rounded-md transition-colors duration-200 group-hover:bg-amber-600">
          <span>Read More</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
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
          ? 'bg-amber-600 text-white' 
          : disabled 
            ? 'bg-gray-800 text-gray-600 cursor-not-allowed' 
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
      }`}
    >
      {children}
    </button>
  );
};

const NoResultsFound = () => (
  <div className="py-12 text-center col-span-3">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <h3 className="mt-4 text-xl font-medium text-gray-400">No news articles found</h3>
    <p className="mt-2 text-gray-500">Try adjusting your search or filter criteria</p>
  </div>
);

const NewsAndMedia = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("All");

  // Filter and search logic
  const filteredData = sortedNewsData
    .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    .filter((item) => (filter === "All" ? true : item.category === filter));

  const totalPages = Math.max(1, Math.ceil(filteredData.length / ITEMS_PER_PAGE));
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
            className="h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mb-6"
          />
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-4 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            NEWS <span style={{ color: goldAccent }}>& MEDIA</span>
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Latest updates, announcements, and stories from Britannia
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
              <div className="w-4 h-4 border-r-2 border-b-2 border-amber-500 transform rotate-45"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search & Filter */}
        <div className="mb-8 bg-gray-900 p-4 rounded-lg border border-gray-800">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search news articles..."
                value={search}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full bg-gray-800 text-white pl-10 pr-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Filter by Category */}
            <div className="w-full md:w-48">
              <select
                value={filter}
                onChange={(e) => handleFilterChange(e.target.value)}
                className="w-full bg-gray-800 text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent appearance-none transition-all duration-200"
                style={{ 
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundPosition: 'right 0.5rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '1.5em 1.5em',
                  paddingRight: '2.5rem'
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

        {/* News List - 3 cards per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentData.length > 0 ? (
            currentData.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))
          ) : (
            <NoResultsFound />
          )}
        </div>

        {/* Pagination */}
        {filteredData.length > 0 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <PaginationButton
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M9.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </PaginationButton>
            <PaginationButton
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </PaginationButton>
            
            <div className="px-4 text-sm text-gray-400">
              Page <span className="font-medium text-white">{currentPage}</span> of{" "}
              <span className="font-medium text-white">{totalPages}</span>
            </div>
            
            <PaginationButton
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </PaginationButton>
            <PaginationButton
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </PaginationButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsAndMedia;