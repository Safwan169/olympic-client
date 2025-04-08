import { useState, useEffect } from "react";
import { Search, Calendar, Filter, ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";

// Sample activity data with real online image URLs
// Note: In a real implementation, these URLs would work, but for the artifact demo I'm keeping placeholder references
const activityData = [
  {
    id: 1,
    title: "Cultural & Educational Programme",
    description:
      "Olympic partnered with Fulki to launch an 'Integrated Educational-Cultural Programme' in five schools. This helps students learn about their rights and apply them in their daily lives.",
    image: "https://images.pexels.com/photos/4144225/pexels-photo-4144225.jpeg", // Real online image URL
    category: "Education",
    date: "March 15, 2024",
  },
  {
    id: 2,
    title: "SRHR Training",
    description:
      "Olympic provided 10 hours of training on reproductive health, gender-based violence, and family planning with the help of Change Associates.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg", // Real online image URL
    category: "Health",
    date: "February 28, 2024",
  },
  {
    id: 3,
    title: "UNDP-UNV Innovation Hub Recognition",
    description:
      "Olympic is recognized by UNDP-UNV Innovation Hub for its impact on Sustainable Development Goals (SDGs).",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg", // Real online image URL
    category: "Recognition",
    date: "January 10, 2024",
  },
  {
    id: 4,
    title: "Scholarship for Female Leaders",
    description:
      "Olympic piloted a scholarship program for women in the packaging department to become assistant machine operators.",
    image: "https://images.pexels.com/photos/1181357/pexels-photo-1181357.jpeg", // Real online image URL
    category: "Gender Equity",
    date: "April 5, 2024",
  },
  {
    id: 5,
    title: "Health & Nutrition Centre",
    description:
      "Workers now have access to a general practitioner and nutritionist for a nominal fee at the Lolati Health & Nutrition Centre.",
    image: "https://images.pexels.com/photos/708852/pexels-photo-708852.jpeg", // Real online image URL
    category: "Health",
    date: "March 22, 2024",
  },
  {
    id: 6,
    title: "Health Assessment",
    description:
      "Olympic, in partnership with CWCH, provides health assessments on diabetes, anemia, reproductive health, and more.",
    image: "https://images.pexels.com/photos/3279209/pexels-photo-3279209.jpeg", // Real online image URL
    category: "Health",
    date: "February 15, 2024",
  },
  {
    id: 7,
    title: "Health & Rights Awareness Outreach",
    description:
      "Maya Apa provides health and rights consultation at Olympic factories via kiosks and personal visits.",
    image: "https://images.pexels.com/photos/2566581/pexels-photo-2566581.jpeg", // Real online image URL
    category: "Health",
    date: "January 30, 2024",
  },
  {
    id: 8,
    title: "Nutrition Training",
    description:
      "Olympic partnered with Change Associates to provide 10 hours of nutrition training to Peer Educators.",
    image: "https://images.pexels.com/photos/1007023/pexels-photo-1007023.jpeg", // Real online image URL
    category: "Health",
    date: "April 12, 2024",
  },
  {
    id: 9,
    title: "Supporting the Study of Sustainable Development",
    description:
      "Olympic supported the University of Liberal Arts Bangladesh's 2nd Annual Conference on Sustainable Development.",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg", // Real online image URL
    category: "Education",
    date: "March 8, 2024",
  },
  {
    id: 10,
    title: "Quality Control",
    description:
      "Olympic ensures quality control at all stages, using SAP ERP and ISO 22000 certification to maintain product quality.",
    image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg", // Real online image URL
    category: "Operations",
    date: "February 5, 2024",
  },
];

const categories = [...new Set(activityData.map(item => item.category))];

const ITEMS_PER_PAGE = 6;

const Activity = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Filter activities based on category and search term
  const filteredActivities = activityData.filter(activity => {
    const matchesFilter = filter === 'All' || activity.category === filter;
    const matchesSearch = activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          activity.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const totalPages = Math.ceil(filteredActivities.length / ITEMS_PER_PAGE);
  const currentActivities = filteredActivities.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Reset to page 1 when filter or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filter, searchTerm]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section with Parallax Effect - Using Real Image URL */}
      <div className="relative h-96 overflow-hidden">
        <div 
          className="absolute w-full h-full bg-cover bg-center transform scale-110"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3184308/pexels-photo-3184308.jpeg')`,
            filter: 'brightness(0.4)',
            backgroundPosition: '50% 50%'
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        
        <div className="relative h-full flex flex-col items-center justify-center px-6 text-center z-10">
          <span className="text-red-600 text-lg font-semibold mb-2 tracking-wider">MAKING AN IMPACT</span>
          <h1 className="text-5xl font-bold mb-4">Our Activities</h1>
          <p className="max-w-2xl text-gray-300">
            Discover how Olympic Industries is creating positive change through sustainable practices and community engagement
          </p>
        </div>
      </div>

      {/* Filter & Search Section */}
      <div className="sticky top-0 z-30 bg-zinc-900 border-b border-zinc-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Filter Dropdown */}
            <div className="relative w-full md:w-auto">
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center justify-between w-full md:w-48 bg-zinc-800 px-4 py-2 rounded-lg hover:bg-zinc-700 transition"
              >
                <div className="flex items-center gap-2">
                  <Filter size={18} className="text-red-600" />
                  <span>{filter}</span>
                </div>
                <ChevronRight className={`transition-transform ${isFilterOpen ? 'rotate-90' : ''}`} size={18} />
              </button>
              
              {isFilterOpen && (
                <div className="absolute mt-2 w-48 bg-zinc-800 rounded-lg shadow-xl z-40 border border-zinc-700 overflow-hidden">
                  <div 
                    className={`px-4 py-2 cursor-pointer hover:bg-zinc-700 transition ${filter === 'All' ? 'bg-red-600' : ''}`}
                    onClick={() => {
                      setFilter('All');
                      setIsFilterOpen(false);
                    }}
                  >
                    All
                  </div>
                  {categories.map((category) => (
                    <div 
                      key={category}
                      className={`px-4 py-2 cursor-pointer hover:bg-zinc-700 transition ${filter === category ? 'bg-red-600' : ''}`}
                      onClick={() => {
                        setFilter(category);
                        setIsFilterOpen(false);
                      }}
                    >
                      {category}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Search Bar */}
            <div className="relative w-full md:w-64">
              {isSearchOpen ? (
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search activities..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-zinc-800 text-white px-4 py-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    autoFocus
                  />
                  <Search size={18} className="absolute left-3 top-3 text-gray-400" />
                  <button 
                    onClick={() => {
                      setSearchTerm('');
                      setIsSearchOpen(false);
                    }}
                    className="absolute right-3 top-3 text-gray-400 hover:text-white"
                  >
                    <X size={18} />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setIsSearchOpen(true)}
                  className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-lg hover:bg-zinc-700 transition w-full justify-center md:w-auto"
                >
                  <Search size={18} className="text-red-600" />
                  <span>Search</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Activity Grid with Masonry Layout */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {currentActivities.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64">
            <p className="text-xl text-gray-400">No activities found.</p>
            <button 
              onClick={() => {
                setFilter('All');
                setSearchTerm('');
              }}
              className="mt-4 text-red-600 hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
            {currentActivities.map((activity, index) => (
              <div
                key={activity.id}
                className={`group relative bg-zinc-900 rounded-lg overflow-hidden shadow-lg hover:shadow-red-900/20 transition-all duration-300 border border-zinc-800 hover:border-red-900/30 flex flex-col ${
                  index % 5 === 0 ? 'lg:col-span-2' : ''
                }`}
                style={{
                  height: index % 5 === 0 ? 'auto' : '',
                }}
              >
                <div className="relative overflow-hidden">
                  {/* Here we use real online image URLs */}
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-56 object-cover transition-transform duration-700 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 right-4 bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                    {activity.category}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-gray-400 mb-3">
                    <Calendar size={14} className="mr-1" />
                    {activity.date}
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 group-hover:text-red-600 transition-colors">
                    {activity.title}
                  </h2>
                  
                  <p className="text-gray-400 text-sm mb-4 flex-grow">
                    {activity.description}
                  </p>
                  
                  <button 
                    onClick={() => setSelectedActivity(activity)}
                    className="flex items-center text-red-600 font-medium group-hover:translate-x-1 transition-transform"
                  >
                    Learn More <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Pagination - Modern Style */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-1 py-12">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-2 rounded-full ${
              currentPage === 1
                ? "text-gray-600 cursor-not-allowed"
                : "text-white hover:bg-zinc-800"
            }`}
            aria-label="Previous page"
          >
            <ChevronLeft size={24} />
          </button>
          
          {/* Mobile Pagination */}
          <div className="md:hidden flex items-center bg-zinc-900 rounded-full px-4 py-1 border border-zinc-800">
            <span className="text-sm">{currentPage} of {totalPages}</span>
          </div>
          
          {/* Desktop Pagination */}
          <div className="hidden md:flex space-x-1">
            {Array.from({ length: totalPages }).map((_, i) => {
              // Logic to show limited page numbers with ellipsis
              const pageNum = i + 1;
              const showPage = pageNum === 1 || 
                              pageNum === totalPages || 
                              (pageNum >= currentPage - 1 && pageNum <= currentPage + 1);
              
              if (!showPage) {
                if (pageNum === currentPage - 2 || pageNum === currentPage + 2) {
                  return <span key={i} className="text-gray-600 px-2">...</span>;
                }
                return null;
              }
              
              return (
                <button
                  key={i}
                  onClick={() => handlePageChange(pageNum)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    currentPage === pageNum
                      ? "bg-red-600 text-white"
                      : "bg-zinc-900 border border-zinc-800 text-gray-300 hover:bg-zinc-800"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>
          
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-full ${
              currentPage === totalPages
                ? "text-gray-600 cursor-not-allowed"
                : "text-white hover:bg-zinc-800"
            }`}
            aria-label="Next page"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}

      {/* Modal for Activity Details */}
      {selectedActivity && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Here we use real online image URLs */}
              <img 
                src={selectedActivity.image} 
                alt={selectedActivity.title} 
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <button 
                onClick={() => setSelectedActivity(null)}
                className="absolute top-4 right-4 bg-black bg-opacity-60 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
              >
                <X size={20} />
              </button>
              <div className="absolute top-4 left-4 bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                {selectedActivity.category}
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-400 mb-2">
                <Calendar size={16} className="mr-2" />
                {selectedActivity.date}
              </div>
              
              <h2 className="text-2xl font-bold mb-4">{selectedActivity.title}</h2>
              
              <p className="text-gray-300 mb-6">
                {selectedActivity.description}
                {/* Extended description for modal view */}
                <br /><br />
                At Olympic Industries, we believe in creating positive change through sustainable practices 
                and community engagement. This initiative is part of our ongoing commitment to support 
                the communities we operate in and promote sustainable development.
                <br /><br />
                Through partnerships with local organizations and stakeholders, we strive to create lasting impact 
                and contribute to the well-being of society and the environment.
              </p>
              
              <div className="flex flex-wrap gap-2 mt-6">
                <div className="bg-zinc-800 px-4 py-2 rounded-full text-sm">Impact Report</div>
                <div className="bg-zinc-800 px-4 py-2 rounded-full text-sm">Photo Gallery</div>
                <div className="bg-zinc-800 px-4 py-2 rounded-full text-sm">Partner Details</div>
              </div>
              
              <div className="mt-8 flex justify-end">
                <button 
                  onClick={() => setSelectedActivity(null)}
                  className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Activity;