import { useState, useEffect } from "react";
import {
  Camera,
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Play,
  Calendar,
  Eye,
} from "lucide-react";

const videoData = [
  {
    id: 1,
    title: "Company Overview",
    description: "Learn about our mission, vision, and journey",
    url: "https://www.youtube.com/watch?v=7TavVZMewpY",
    category: "About Us",
    views: "1.2M views",
    uploaded: "2 weeks ago",
    duration: "4:32",
  },
  {
    id: 2,
    title: "Product Launch Event",
    description: "Unveiling our latest groundbreaking innovation",
    url: "https://www.youtube.com/watch?v=XHOmBV4js_E",
    category: "Event",
    views: "800K views",
    uploaded: "1 month ago",
    duration: "18:45",
  },
  {
    id: 3,
    title: "Employee Testimonials",
    description: "Our team shares their journey with us",
    url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    category: "Testimonial",
    views: "600K views",
    uploaded: "3 months ago",
    duration: "7:12",
  },
  {
    id: 4,
    title: "Customer Feedback",
    description: "Hear what our customers have to say about us",
    url: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
    category: "Customer Stories",
    views: "450K views",
    uploaded: "1 month ago",
    duration: "5:18",
  },
  {
    id: 5,
    title: "Behind the Scenes",
    description: "Take a look at our creative process",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Behind the Scenes",
    views: "320K views",
    uploaded: "2 months ago",
    duration: "12:54",
  },
  {
    id: 6,
    title: "Tech Talk: Future Innovations",
    description: "Our CTO discusses upcoming technology trends",
    url: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    category: "Tech Talk",
    views: "280K views",
    uploaded: "3 weeks ago",
    duration: "22:10",
  },
  {
    id: 7,
    title: "Virtual Office Tour",
    description: "A virtual walkthrough of our modern workplace",
    url: "https://www.youtube.com/watch?v=3fumBcKC6RE",
    category: "About Us",
    views: "700K views",
    uploaded: "4 weeks ago",
    duration: "9:45",
  },
  {
    id: 8,
    title: "CEO Fireside Chat",
    description: "A casual conversation with our CEO about company culture",
    url: "https://www.youtube.com/watch?v=fLexgOxsZu0",
    category: "Leadership",
    views: "950K views",
    uploaded: "2 months ago",
    duration: "15:00",
  },
  {
    id: 9,
    title: "Client Case Study: ABC Corp",
    description: "How we helped ABC Corp scale efficiently",
    url: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
    category: "Customer Stories",
    views: "410K views",
    uploaded: "3 months ago",
    duration: "6:38",
  },
  {
    id: 10,
    title: "Innovation Hackathon Highlights",
    description: "Top moments from our internal hackathon",
    url: "https://www.youtube.com/watch?v=0zM3nApSvMg",
    category: "Event",
    views: "220K views",
    uploaded: "1 week ago",
    duration: "11:11",
  },
  {
    id: 11,
    title: "Women in Tech Panel",
    description: "Empowering voices in technology and leadership",
    url: "https://www.youtube.com/watch?v=VYOjWnS4cMY",
    category: "Leadership",
    views: "530K views",
    uploaded: "5 weeks ago",
    duration: "13:27",
  },
  {
    id: 12,
    title: "Top 5 Features in Our Latest Release",
    description: "Quick rundown of the most exciting new features",
    url: "https://www.youtube.com/watch?v=9bZkp7q19f0",
    category: "Tech Talk",
    views: "1.5M views",
    uploaded: "3 days ago",
    duration: "5:55",
  },
];

const ITEMS_PER_PAGE = 6;
const categories = [
  "All",
  ...new Set(videoData.map((video) => video.category)),
];

export default function VideoGallery() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [showFilter, setShowFilter] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  // Filter and Search
  const filteredVideos = videoData
    .filter((video) => video.title.toLowerCase().includes(search.toLowerCase()))
    .filter((video) => (filter === "All" ? true : video.category === filter));

  // Pagination
  const totalPages = Math.ceil(filteredVideos.length / ITEMS_PER_PAGE);
  const currentVideos = filteredVideos.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    setFadeIn(true);
    return () => setFadeIn(false);
  }, []);

  return (
    <div
      className={`bg-gradient-to-br pt-20 from-black to-gray-900 text-white min-h-screen p-6 transition-opacity duration-700 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Animated Header */}
      <div className="mb-12 relative">
        <div className="absolute -top-6 -left-6 w-20 h-20 bg-purple-900 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-red-900 rounded-full opacity-10 blur-xl"></div>

        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 inline-block">
          Explore Visual Stories
        </h1>

        <p className="text-gray-400 mt-3 max-w-2xl text-lg">
          Dive into our cinematic collection of videos showcasing our journey,
          products, and the people who make it all happen
        </p>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-wrap justify-between items-center mb-10 gap-4">
        {/* Search */}
        <div className="relative w-full md:w-2/5">
          <div className="absolute top-0 left-0 h-full flex items-center pl-3">
            <Search className="text-gray-400" size={18} />
          </div>
          <input
            type="text"
            placeholder="Search videos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-gray-900/70 text-white border border-gray-700 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          />
        </div>

        {/* Categories Filter */}
        <div className="relative w-full md:w-1/4">
          <div
            className="flex justify-between items-center w-full bg-gray-900/70 border border-gray-700 px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors duration-300"
            onClick={() => setShowFilter(!showFilter)}
          >
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500"></span>
              {filter}
            </span>
            <ChevronDown
              className={`text-gray-400 transition-transform duration-300 ${
                showFilter ? "rotate-180" : ""
              }`}
              size={18}
            />
          </div>

          {showFilter && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900 border border-gray-700 rounded-lg overflow-hidden z-10 shadow-xl">
              {categories.map((category) => (
                <div
                  key={category}
                  className={`px-4 py-2 hover:bg-gray-800 cursor-pointer transition-colors duration-200 flex items-center gap-2 ${
                    filter === category ? "bg-gray-800" : ""
                  }`}
                  onClick={() => {
                    setFilter(category);
                    setShowFilter(false);
                  }}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      filter === category ? "bg-purple-500" : "bg-gray-600"
                    }`}
                  ></span>
                  {category}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="flex justify-between items-center mb-8 text-sm text-gray-400">
        <div>
          Showing{" "}
          <span className="text-white font-medium">{currentVideos.length}</span>{" "}
          of{" "}
          <span className="text-white font-medium">
            {filteredVideos.length}
          </span>{" "}
          videos
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500"></span> Recently
          updated
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentVideos.map((video) => (
          <div
            key={video.id}
            className="group relative bg-gray-900/50 rounded-xl overflow-hidden hover:transform hover:scale-103 transition duration-500 border border-gray-800 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-900/20"
            onMouseEnter={() => setHoveredVideo(video.id)}
            onMouseLeave={() => setHoveredVideo(null)}
          >
            <div className="relative aspect-video overflow-hidden">
              {hoveredVideo === video.id ? (
                <div className="w-full h-full object-cover">
                  <img
                    src={`https://img.youtube.com/vi/${
                      video.url.split("v=")[1]
                    }/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover brightness-50 scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-purple-600/80 flex items-center justify-center animate-pulse">
                      <Play fill="white" size={24} />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <img
                    src={`https://img.youtube.com/vi/${
                      video.url.split("v=")[1]
                    }/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover transition duration-700"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-xs font-medium">
                    {video.duration}
                  </div>
                </div>
              )}

              <div className="absolute top-2 left-2 bg-gray-900/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
                {video.category}
              </div>
            </div>

            <div className="p-4">
              <h2 className="font-bold text-lg group-hover:text-purple-400 transition duration-300">
                {video.title}
              </h2>
              <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                {video.description}
              </p>

              <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Eye size={14} />
                  <span>{video.views}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{video.uploaded}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12 space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-2 rounded-lg ${
              currentPage === 1
                ? "bg-gray-800 text-gray-600 cursor-not-allowed"
                : "bg-gray-800 text-white hover:bg-purple-700 transition-colors duration-300"
            }`}
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex space-x-1">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  currentPage === i + 1
                    ? "bg-gradient-to-br from-purple-600 to-blue-700 text-white font-medium"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-lg ${
              currentPage === totalPages
                ? "bg-gray-800 text-gray-600 cursor-not-allowed"
                : "bg-gray-800 text-white hover:bg-purple-700 transition-colors duration-300"
            }`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}

      {/* Footer hint */}
      <div className="mt-16 text-center text-gray-500 text-sm">
        <p>Hover over a video to preview • Click to watch full video</p>
      </div>
    </div>
  );
}
