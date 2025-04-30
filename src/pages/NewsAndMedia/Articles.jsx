import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Mock images - replace with your actual imports
import bgImage from "../../assets/Articles and Vlogs.jpg";
// Press release images
import press1 from "../../assets/press_release/press1.jpg";
import press2 from "../../assets/press_release/press3.jpg";
import press3 from "../../assets/press_release/press3.jpg";
import press4 from "../../assets/press_release/press1.jpg";
// Sample articles data
const articlesData = [
  {
    id: 1,
    title: "THE TOP 5 BEST olympic CAKES FOR A HEAVENLY TREAT",
    date: "April 20, 2025",
    category: "Desserts",
    excerpt: "Discover the most delectable cakes from olympic that will transport your taste buds to paradise...",
    image: press1
  },
  {
    id: 2,
    title: "TIPS FOR TURNING CLASSIC CHOCOLATE COOKIES INTO A FESTIVE HOLIDAY TREAT",
    date: "April 15, 2025",
    category: "Baking",
    excerpt: "Learn how to transform everyday chocolate cookies into spectacular holiday treats with these simple techniques...",
    image: press2
  },
  {
    id: 3,
    title: "THE ART OF CRAFTING THE PERFECT DESSERT PLATTER",
    date: "April 10, 2025",
    category: "Entertainment",
    excerpt: "Master the art of creating Instagram-worthy dessert platters that will impress your guests at any gathering...",
    image: press3
  },
  {
    id: 4,
    title: "EXPLORING GLOBAL CHOCOLATE TRADITIONS",
    date: "April 5, 2025",
    category: "Culture",
    excerpt: "Take a journey around the world and discover how different cultures celebrate and incorporate chocolate in their traditions...",
    image: press3
  },
  {
    id: 5,
    title: "HEALTHY ALTERNATIVES TO TRADITIONAL SWEET TREATS",
    date: "March 30, 2025",
    category: "Wellness",
    excerpt: "Enjoy the sweet things in life without the guilt with these nutritious alternatives to classic desserts...",
    image: press1
  },
  {
    id: 6,
    title: "THE SCIENCE BEHIND THE PERFECT CHOCOLATE CHIP COOKIE",
    date: "March 25, 2025",
    category: "Baking",
    excerpt: "Discover the chemistry and techniques that go into creating the ultimate chocolate chip cookie...",
    image: press2
  }
];

// Constants
const goldAccent = "#FFD700";
const brandRed = "#E30613";
const ITEMS_PER_PAGE = 4;

// Sort by latest date (newest first)
const sortedArticlesData = [...articlesData].sort((a, b) => new Date(b.date) - new Date(a.date));

// Extract unique categories
const categories = ["All", ...new Set(articlesData.map(item => item.category))];

const ArticleCard = ({ item, animate = true }) => {
  // Category to color mapping
  const categoryColors = {
    "Desserts": "bg-amber-900 text-amber-200",
    "Baking": "bg-blue-900 text-blue-200",
    "Entertainment": "bg-purple-900 text-purple-200",
    "Culture": "bg-green-900 text-green-200",
    "Wellness": "bg-teal-900 text-teal-200"
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const cardContent = (
    <div className="bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-800 hover:border-amber-500 transition-all duration-300 transform hover:-translate-y-1 group h-full flex flex-col">
      <div className="bg-gray-800 rounded-md mb-4 h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.src = press1;
          }}
        />
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

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
      >
        {cardContent}
      </motion.div>
    );
  }

  return cardContent;
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
  <div className="py-12 text-center col-span-full">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <h3 className="mt-4 text-xl font-medium text-gray-400">No articles found</h3>
    <p className="mt-2 text-gray-500">Try adjusting your search or filter criteria</p>
  </div>
);

const Article = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("All");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Filter and search logic
  const filteredData = sortedArticlesData
    .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()) || 
                    item.excerpt.toLowerCase().includes(search.toLowerCase()))
    .filter((item) => (filter === "All" ? true : item.category === filter));

  const totalPages = Math.max(1, Math.ceil(filteredData.length / ITEMS_PER_PAGE));
  const currentData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Reset to page 1 when filters change
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  const handleSearchChange = (newSearch) => {
    setSearch(newSearch);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      // Smooth scroll back to the top of the articles section
      document.getElementById('articles-section').scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Featured tags
  const tags = [
    "Olympic CELEBRATES 30 YEARS",
    "BEST Olympic CAKES",
    "CHOCOLATE COOKIES",
    "BAKING TIPS",
    "DESSERT TRENDS"
  ];

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
          animate={{ scale: isLoaded ? 1 : 1.1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/80 flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isLoaded ? 120 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mb-6"
          />
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-4 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Articles and <span style={{ color: goldAccent }}>Vlogs</span>
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Discover our articles of visual stories, interviews, and behind-the-scenes content
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isLoaded ? 80 : 0 }}
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
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <div className="animate-bounce flex flex-col items-center">
              <p className="text-xs mb-2">Scroll to explore</p>
              <div className="w-4 h-4 border-r-2 border-b-2 border-amber-500 transform rotate-45"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content - Articles */}
          <div className="lg:w-2/3" id="articles-section">
            {/* Search & Filter */}
            <motion.div 
              className="mb-8 bg-gray-900 p-4 rounded-lg border border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
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
                    placeholder="Search articles..."
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
            </motion.div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {currentData.length > 0 ? (
                currentData.map((item, index) => (
                  <ArticleCard 
                    key={item.id} 
                    item={item} 
                    animate={isLoaded}
                  />
                ))
              ) : (
                <NoResultsFound />
              )}
            </div>

            {/* Pagination */}
            {filteredData.length > 0 && (
              <motion.div 
                className="flex justify-center items-center gap-2 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
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
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <motion.div 
            className="lg:w-1/3 mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {/* Search Section */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold mb-6">Search</h2>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="w-full py-2 px-4 pr-10 bg-gray-800 border-b border-gray-400 text-white focus:outline-none rounded-md"
                  value={search}
                  onChange={(e) => handleSearchChange(e.target.value)}
                />
                <button className="absolute right-0 top-0 h-full px-4 flex items-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Categories Section */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold mb-6">Categories</h2>
              <ul className="space-y-2">
                {categories.filter(cat => cat !== "All").map((category, index) => (
                  <li key={index} className="mb-2">
                    <button
                      onClick={() => handleFilterChange(category)}
                      className={`text-left w-full transition-colors duration-200 ${
                        filter === category ? "text-amber-500 font-medium" : "text-red-500 hover:text-red-400"
                      }`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags Section */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-6">Tags</h2>
              <div className="flex flex-wrap">
                {tags.map((tag, index) => (
                  <button 
                    key={index} 
                    className="mb-2 mr-2"
                  >
                    <span className="text-sm text-white hover:text-amber-400 transition-colors duration-200">
                      {tag}
                      {index !== tags.length - 1 && " | "}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Article */}
            <div className="mt-8 bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
              <div className="relative">
                <img 
                  src={press1} 
                  alt="Featured Article"
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.src = press2;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end">
                  <div className="p-4">
                    <span className="bg-amber-500 text-black text-xs font-bold px-2 py-1 rounded">FEATURED</span>
                    <h3 className="text-lg font-bold mt-2">The Future of Dessert Innovation</h3>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-400 text-sm mb-4">Discover the latest trends and innovations that are shaping the future of the dessert industry...</p>
                <button className="text-amber-500 hover:text-amber-400 font-medium flex items-center gap-2">
                  <span>Read Article</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Article;