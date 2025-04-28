import { useState, useEffect } from "react";
import {
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Play,
  Calendar,
  Eye,
  X,
  ExternalLink,
} from "lucide-react";
import bgImage from "../../assets/cookieBG4.jpg";
import ArticleSection from "./ArticleSection";
import { motion, useAnimation } from "framer-motion";

const videoData = [
  {
    id: 1,
    title: "Company Overview",
    description: "Learn about our mission, vision, and journey",
    url: "https://www.youtube.com/watch?v=7TavVZMewpY",
    category: "About Us",
    views: "1.2M views",
    uploaded: "May 15, 2024",
    duration: "4:32",
  },
  {
    id: 2,
    title: "Product Launch Event",
    description: "Unveiling our latest groundbreaking innovation",
    url: "https://www.youtube.com/watch?v=XHOmBV4js_E",
    category: "Event",
    views: "800K views",
    uploaded: "April 28, 2024",
    duration: "18:45",
  },
  {
    id: 3,
    title: "Employee Testimonials",
    description: "Our team shares their journey with us",
    url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    category: "Testimonial",
    views: "600K views",
    uploaded: "March 10, 2024",
    duration: "7:12",
  },
  {
    id: 4,
    title: "Customer Feedback",
    description: "Hear what our customers have to say about us",
    url: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
    category: "Customer Stories",
    views: "450K views",
    uploaded: "February 22, 2024",
    duration: "5:18",
  },
  {
    id: 5,
    title: "Behind the Scenes",
    description: "Take a look at our creative process",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Behind the Scenes",
    views: "320K views",
    uploaded: "January 18, 2024",
    duration: "12:54",
  },
  {
    id: 6,
    title: "Tech Talk: Future Innovations",
    description: "Our CTO discusses upcoming technology trends",
    url: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    category: "Tech Talk",
    views: "280K views",
    uploaded: "November 10, 2023",
    duration: "22:10",
  },
  {
    id: 7,
    title: "Virtual Office Tour",
    description: "A virtual walkthrough of our modern workplace",
    url: "https://www.youtube.com/watch?v=3fumBcKC6RE",
    category: "About Us",
    views: "700K views",
    uploaded: "October 15, 2023",
    duration: "9:45",
  },
  {
    id: 8,
    title: "CEO Fireside Chat",
    description: "A casual conversation with our CEO about company culture",
    url: "https://www.youtube.com/watch?v=fLexgOxsZu0",
    category: "Leadership",
    views: "950K views",
    uploaded: "September 22, 2023",
    duration: "15:00",
  },
  {
    id: 9,
    title: "Client Case Study: ABC Corp",
    description: "How we helped ABC Corp scale efficiently",
    url: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
    category: "Customer Stories",
    views: "410K views",
    uploaded: "August 17, 2023",
    duration: "6:38",
  },
  {
    id: 10,
    title: "Innovation Hackathon Highlights",
    description: "Top moments from our internal hackathon",
    url: "https://www.youtube.com/watch?v=0zM3nApSvMg",
    category: "Event",
    views: "220K views",
    uploaded: "July 02, 2023",
    duration: "11:11",
  },
  {
    id: 11,
    title: "Women in Tech Panel",
    description: "Empowering voices in technology and leadership",
    url: "https://www.youtube.com/watch?v=VYOjWnS4cMY",
    category: "Leadership",
    views: "530K views",
    uploaded: "June 14, 2023",
    duration: "13:27",
  },
  {
    id: 12,
    title: "Top 5 Features in Our Latest Release",
    description: "Quick rundown of the most exciting new features",
    url: "https://www.youtube.com/watch?v=9bZkp7q19f0",
    category: "Tech Talk",
    views: "1.5M views",
    uploaded: "May 28, 2023",
    duration: "5:55",
  },
];

const goldAccent = "#FFD700";
const brandRed = "#E30613";

const ITEMS_PER_PAGE = 6;
const categories = [
  "All",
  ...new Set(videoData.map((video) => video.category)),
];

// Category to color mapping
const categoryColors = {
  "About Us": "bg-amber-900 text-amber-200",
  Event: "bg-blue-900 text-blue-200",
  Testimonial: "bg-purple-900 text-purple-200",
  "Customer Stories": "bg-green-900 text-green-200",
  "Behind the Scenes": "bg-teal-900 text-teal-200",
  "Tech Talk": "bg-cyan-900 text-cyan-200",
  Leadership: "bg-red-900 text-red-200",
};

const VideoCard = ({ video, onPlay }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const getYoutubeId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYoutubeId(video.url);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="bg-gray-900 rounded-lg shadow-lg border border-gray-800 hover:border-amber-500 transition-all duration-300 transform hover:-translate-y-1 group h-full flex flex-col overflow-hidden">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={thumbnailUrl}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.src = "/api/placeholder/400/225";
          }}
        />
        <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-xs font-medium">
          {video.duration}
        </div>
        <div className="absolute top-2 left-2">
          <span
            className={`text-xs font-semibold px-2 py-1 rounded ${
              categoryColors[video.category] || "bg-gray-700 text-gray-200"
            }`}
          >
            {video.category}
          </span>
        </div>
        <button
          onClick={() => onPlay(video)}
          className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div className="w-16 h-16 rounded-full bg-amber-600/80 flex items-center justify-center animate-pulse">
            <Play fill="white" className="ml-1" size={30} />
          </div>
        </button>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold text-gray-100 mb-2">
          {video.title}
        </h2>
        <p className="text-gray-400 text-sm mb-4 flex-grow">
          {video.description}
        </p>

        <div className="flex justify-between items-center text-gray-500 text-sm mt-auto">
          <div className="flex items-center gap-1">
            <Eye size={16} />
            <span>{video.views}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{formatDate(video.uploaded)}</span>
          </div>
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
          ? "bg-amber-600 text-white"
          : disabled
          ? "bg-gray-800 text-gray-600 cursor-not-allowed"
          : "bg-gray-800 text-gray-300 hover:bg-gray-700"
      }`}
    >
      {children}
    </button>
  );
};

const VideoModal = ({ video, onClose }) => {
  const getEmbedUrl = (url) => {
    const videoId = url.split("v=")[1];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };

  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8">
      <div className="relative bg-gray-900 rounded-lg w-full max-w-4xl p-2">
        <div className="absolute -top-12 right-0 flex gap-2">
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded-md"
          >
            <ExternalLink size={16} />
            <span>Open in YouTube</span>
          </a>
          <button
            onClick={onClose}
            className="bg-gray-800 hover:bg-red-700 text-white p-2 rounded-md transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="aspect-video w-full">
          <iframe
            src={getEmbedUrl(video.url)}
            title={video.title}
            className="w-full h-full rounded-md"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold text-white">{video.title}</h2>
            <span
              className={`text-xs font-semibold px-2 py-1 rounded ${
                categoryColors[video.category] || "bg-gray-700 text-gray-200"
              }`}
            >
              {video.category}
            </span>
          </div>
          <p className="text-gray-300 mb-4">{video.description}</p>
          <div className="flex justify-between items-center text-gray-400 text-sm">
            <div className="flex items-center gap-1">
              <Eye size={16} />
              <span>{video.views}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>{video.uploaded}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NoResultsFound = () => (
  <div className="py-12 text-center col-span-1 sm:col-span-2 lg:col-span-3">
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
    <h3 className="mt-4 text-xl font-medium text-gray-400">No videos found</h3>
    <p className="mt-2 text-gray-500">
      Try adjusting your search or filter criteria
    </p>
  </div>
);

export default function VideoGallery() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilter, setShowFilter] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [playingVideo, setPlayingVideo] = useState(null);

  // Sort videos by upload date (newest first)
  const sortedVideos = [...videoData].sort(
    (a, b) => new Date(b.uploaded) - new Date(a.uploaded)
  );

  // Filter and Search
  const filteredVideos = sortedVideos
    .filter(
      (video) =>
        video.title.toLowerCase().includes(search.toLowerCase()) ||
        video.description.toLowerCase().includes(search.toLowerCase())
    )
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

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1);
    setShowFilter(false);
  };

  const handleSearchChange = (newSearch) => {
    setSearch(newSearch);
    setCurrentPage(1);
  };

  const handlePlayVideo = (video) => {
    setPlayingVideo(video);
    document.body.style.overflow = "hidden";
  };

  const handleCloseVideo = () => {
    setPlayingVideo(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    setFadeIn(true);
    return () => setFadeIn(false);
  }, []);

  return (
    <div
      className={`bg-[#0a0a0a] text-white min-h-screen transition-opacity duration-700 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Hero Header Section */}
      <div className="relative w-full h-[600px] overflow-hidden">
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
            animate={{ width: 96 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mb-6"
          />

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-4 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            CREATIVE <span style={{ color: goldAccent }}>STORIES</span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-300 max-w-2xl text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Discover our collection of visual stories, interviews, and
            behind-the-scenes content
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 64 }}
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

      <ArticleSection />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search & Filter */}
        <div className="mb-8 bg-gray-900 p-4 rounded-lg border border-gray-800">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Search videos..."
                value={search}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full bg-gray-800 text-white pl-10 pr-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Categories Filter */}
            <div className="w-full md:w-48 relative">
              <div
                className="flex justify-between items-center w-full bg-gray-800 border border-gray-700 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-700 transition-colors duration-300"
                onClick={() => setShowFilter(!showFilter)}
              >
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500"></span>
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
                      onClick={() => handleFilterChange(category)}
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${
                          filter === category ? "bg-amber-500" : "bg-gray-600"
                        }`}
                      ></span>
                      {category}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-between items-center mb-8 text-sm text-gray-400">
          <div>
            Showing{" "}
            <span className="text-white font-medium">
              {currentVideos.length}
            </span>{" "}
            of{" "}
            <span className="text-white font-medium">
              {filteredVideos.length}
            </span>{" "}
            videos
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span> Recently
            updated
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentVideos.length > 0 ? (
            currentVideos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onPlay={handlePlayVideo}
              />
            ))
          ) : (
            <NoResultsFound />
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
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
              <ChevronLeft size={20} />
            </PaginationButton>

            <div className="px-4 text-sm text-gray-400">
              Page <span className="font-medium text-white">{currentPage}</span>{" "}
              of <span className="font-medium text-white">{totalPages}</span>
            </div>

            <PaginationButton
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight size={20} />
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

        {/* Footer hint */}
        <div className="mt-16 text-center text-gray-500 text-sm">
          <p>Click on a video thumbnail to watch • Opens in fullscreen</p>
        </div>
      </div>

      {/* Video Modal */}
      {playingVideo && (
        <VideoModal video={playingVideo} onClose={handleCloseVideo} />
      )}
    </div>
  );
}
