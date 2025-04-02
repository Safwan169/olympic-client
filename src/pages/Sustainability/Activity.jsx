import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const activityData = [
  {
    id: 1,
    title: "Cultural & Educational Programme",
    description:
      "Olympic partnered with Fulki to launch an 'Integrated Educational-Cultural Programme' in five schools. This helps students learn about their rights and apply them in their daily lives.",
    image: "https://images.pexels.com/photos/4144225/pexels-photo-4144225.jpeg",
  },
  {
    id: 2,
    title: "SRHR Training",
    description:
      "Olympic provided 10 hours of training on reproductive health, gender-based violence, and family planning with the help of Change Associates.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
  },
  {
    id: 3,
    title: "UNDP-UNV Innovation Hub Recognition",
    description:
      "Olympic is recognized by UNDP-UNV Innovation Hub for its impact on Sustainable Development Goals (SDGs).",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
  },
  {
    id: 4,
    title: "Scholarship for Female Leaders",
    description:
      "Olympic piloted a scholarship program for women in the packaging department to become assistant machine operators.",
    image: "https://images.pexels.com/photos/1181357/pexels-photo-1181357.jpeg",
  },
  {
    id: 5,
    title: "Health & Nutrition Centre",
    description:
      "Workers now have access to a general practitioner and nutritionist for a nominal fee at the Lolati Health & Nutrition Centre.",
    image: "https://images.pexels.com/photos/708852/pexels-photo-708852.jpeg",
  },
  {
    id: 6,
    title: "Health Assessment",
    description:
      "Olympic, in partnership with CWCH, provides health assessments on diabetes, anemia, reproductive health, and more.",
    image: "https://images.pexels.com/photos/3279209/pexels-photo-3279209.jpeg",
  },
  {
    id: 7,
    title: "Health & Rights Awareness Outreach",
    description:
      "Maya Apa provides health and rights consultation at Olympic factories via kiosks and personal visits.",
    image: "https://images.pexels.com/photos/2566581/pexels-photo-2566581.jpeg",
  },
  {
    id: 8,
    title: "Nutrition Training",
    description:
      "Olympic partnered with Change Associates to provide 10 hours of nutrition training to Peer Educators.",
    image: "https://images.pexels.com/photos/1007023/pexels-photo-1007023.jpeg",
  },
  {
    id: 9,
    title: "Supporting the Study of Sustainable Development",
    description:
      "Olympic supported the University of Liberal Arts Bangladesh’s 2nd Annual Conference on Sustainable Development.",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
  },
  {
    id: 10,
    title: "Quality Control",
    description:
      "Olympic ensures quality control at all stages, using SAP ERP and ISO 22000 certification to maintain product quality.",
    image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg",
  },
];

const ITEMS_PER_PAGE = 6;

const Activity = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(activityData.length / ITEMS_PER_PAGE);
  const currentActivities = activityData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="bg-[#121212] text-white min-h-screen">
      {/* Hero Section */}
      <div
        className="relative w-full h-72 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3184308/pexels-photo-3184308.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold tracking-wide">Our Activities</h1>
        </div>
      </div>

      {/* Activity Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentActivities.map((activity) => (
            <div
              key={activity.id}
              className="group relative bg-[#212121] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
            >
              <div className="relative">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-56 object-cover transition-transform transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 group-hover:text-cc0000 transition">
                  {activity.title}
                </h2>
                <p className="text-gray-400 text-sm line-clamp-3">
                  {activity.description}
                </p>
                <button className="mt-4 bg-cc0000 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md ${
            currentPage === 1
              ? "bg-gray-700 cursor-not-allowed"
              : "bg-cc0000 hover:bg-red-600"
          }`}
        >
          <FaAngleLeft />
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-4 py-2 rounded-md ${
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
          className={`px-4 py-2 rounded-md ${
            currentPage === totalPages
              ? "bg-gray-700 cursor-not-allowed"
              : "bg-cc0000 hover:bg-red-600"
          }`}
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default Activity;
