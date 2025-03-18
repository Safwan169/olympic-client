import { useState } from 'react';
import { FaSearch, FaChevronDown, FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import ReactPlayer from 'react-player';

const videoData = [
  {
    id: 1,
    title: 'Company Overview',
    url: 'https://www.youtube.com/watch?v=7TavVZMewpY',
    category: 'About Us',
    views: '1.2M views',
    uploaded: '2 weeks ago',
  },
  {
    id: 2,
    title: 'Product Launch Event',
    url: 'https://www.youtube.com/watch?v=XHOmBV4js_E',
    category: 'Event',
    views: '800K views',
    uploaded: '1 month ago',
  },
  {
    id: 3,
    title: 'Employee Testimonials',
    url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    category: 'Testimonial',
    views: '600K views',
    uploaded: '3 months ago',
  },
  {
    id: 4,
    title: 'Customer Feedback',
    url: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
    category: 'Customer Stories',
    views: '450K views',
    uploaded: '1 month ago',
  },
];

const ITEMS_PER_PAGE = 6;
const categories = ['All', ...new Set(videoData.map((video) => video.category))];

const VideoGallery = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredVideo, setHoveredVideo] = useState(null);

  // Filter and Search
  const filteredVideos = videoData
    .filter((video) =>
      video.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((video) => (filter === 'All' ? true : video.category === filter));

  // Pagination
  const totalPages = Math.ceil(filteredVideos.length / ITEMS_PER_PAGE);
  const currentVideos = filteredVideos.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Our Video Gallery</h1>
        <p className="text-gray-400 mt-2">Explore our latest videos and company updates</p>
      </div>

      {/* Search + Filter */}
      <div className="flex justify-between items-center mb-6">
        {/* Search */}
        <div className="relative w-2/5">
          <FaSearch className="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search videos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#212121] text-white border border-gray-700 px-10 py-2 rounded-md focus:outline-none focus:border-cc0000"
          />
        </div>

        {/* Filter */}
        <div className="relative w-1/5">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full bg-[#212121] text-white border border-gray-700 px-4 py-2 rounded-md focus:outline-none focus:border-cc0000 appearance-none"
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

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentVideos.map((video) => (
          <div
            key={video.id}
            className="rounded-lg overflow-hidden hover:scale-105 transition transform duration-300 cursor-pointer"
            onMouseEnter={() => setHoveredVideo(video.id)}
            onMouseLeave={() => setHoveredVideo(null)}
          >
            {hoveredVideo === video.id ? (
              <ReactPlayer
                url={video.url}
                playing={true}
                muted={true}
                width="100%"
                height="180px"
                style={{
                  borderRadius: '10px',
                  overflow: 'hidden',
                }}
              />
            ) : (
              <img
                src={`https://img.youtube.com/vi/${video.url.split('v=')[1]}/hqdefault.jpg`}
                alt={video.title}
                className="w-full h-48 object-cover rounded-lg"
              />
            )}
            <div className="mt-2">
              <h2 className="font-semibold text-lg">{video.title}</h2>
              <div className="text-sm text-gray-400 flex gap-2">
                <span>{video.views}</span>
                <span>•</span>
                <span>{video.uploaded}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md ${
            currentPage === 1 ? 'bg-gray-700 cursor-not-allowed' : 'bg-cc0000 hover:bg-red-600'
          }`}
        >
          <FaAngleLeft />
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-4 py-2 rounded-md ${
              currentPage === i + 1 ? 'bg-red-500' : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md ${
            currentPage === totalPages ? 'bg-gray-700 cursor-not-allowed' : 'bg-cc0000 hover:bg-red-600'
          }`}
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default VideoGallery;
