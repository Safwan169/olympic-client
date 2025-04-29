import { useState } from "react";
import { Trophy, Users, Leaf } from "lucide-react";

const AwardsSection = () => {
  const [activeSection, setActiveSection] = useState("innovation");

  // Award data with image support
  const awardData = {
    innovation: {
      title: "Innovation",
      description:
        "A culture rooted in forward-thinking, quality manufacturing, and product excellence.",
      awards: [
        {
          id: 1,
          title: "Best Biscuit Manufacturer of the Year",
          organization: "Food & Beverage Excellence Awards 2024",
          badgeText: "BEST\nBISCUIT\nMANUFACTURER\n2024",
          // Can use either an image URL or badge text
          image:
            "https://olympicbd.com/wp-content/uploads/2018/07/11-Pulse-Masala-Mango.jpg",
          hasReadMore: true,
        },
        {
          id: 2,
          title: "Most Innovative Product Launch",
          organization:
            "Energy Plus Biscuits - National Food Innovation Awards 2023",
          badgeText: "MOST\nINNOVATIVE\nPRODUCT\n2023",
          image:
            "https://olympicbd.com/wp-content/uploads/2018/04/Energy-Plus-New.png",
          hasReadMore: true,
        },
      ],
    },
    brands: {
      title: "Brand Excellence",
      description:
        "Olympic's commitment to quality and consumer satisfaction has established us as one of the most trusted brands in the industry.",
      awards: [
        {
          id: 1,
          title: "Most Loved Biscuit Brand",
          organization: "Consumer Choice Awards 2024",
          badgeText: "CONSUMER CHOICE AWARD 2024",
          image:
            "https://olympicbd.com/wp-content/uploads/2018/07/Foodie-Noodles-Masala.jpeg",
        },
        {
          id: 2,
          title: "Top FMCG Brand",
          organization: "Brand Excellence Awards",
          badgeText: "Top FMCG\nBrand Excellence\n2023 Winner",
          image: "https://olympicbd.com/wp-content/uploads/2023/03/18.jpg",
        },
        {
          id: 3,
          title: "Excellence in Export",
          organization: "National Export Trophy",
          badgeText: "BEST EXPORT BRAND 2023",
          image: "https://olympicbd.com/wp-content/uploads/2019/08/Knock-1.jpg",
        },
      ],
    },
    responsibility: {
      title: "Corporate Social Responsibility",
      description:
        "Leading the way in corporate citizenship by making sustainability and social impact a top priority.",
      awards: [
        {
          id: 1,
          title: "Sustainability Champion",
          organization: "Green Business Awards",
          badgeText: "SUSTAINABILITY\nCHAMPION\nAWARD\n2023",
          image:
            "https://olympicbd.com/wp-content/uploads/2016/06/Milk-Plus-2.jpg",
        },
        {
          id: 2,
          title: "CSR Excellence Award",
          organization: "Corporate Social Responsibility Forum",
          badgeText: "CSR",
          image:
            "https://olympicbd.com/wp-content/uploads/2018/04/Energy-Plus-New.png",
          specialBadge: true,
        },
      ],
    },
  };

  // Function to render award badge - now supports images
  const renderAwardBadge = (award) => {
    if (award.image) {
      return (
        <div className="w-32 h-32 bg-white rounded-full mb-4 flex items-center justify-center p-2 overflow-hidden">
          <img
            src={award.image}
            alt={award.title}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      );
    } else if (award.specialBadge) {
      return (
        <div className="w-32 h-32 bg-white rounded-full mb-4 flex items-center justify-center">
          <div className="rounded-full border-4 border-red-800 h-24 w-24 flex items-center justify-center">
            <p className="text-red-800 font-bold text-center">
              {award.badgeText}
            </p>
          </div>
        </div>
      );
    } else {
      // Use the standard badge design
      return (
        <div className="w-32 h-32 bg-white rounded-full mb-4 flex items-center justify-center p-2">
          <div
            className={
              activeSection === "brands"
                ? ""
                : "bg-red-800 h-full w-full rounded-full flex items-center justify-center"
            }
          >
            <p
              className={`${
                activeSection === "brands" ? "text-black" : "text-white"
              } font-bold text-center text-xs`}
            >
              {award.badgeText}
            </p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="mx-auto p-6 font-sans bg-black text-gray-200 min-h-screen">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">
          Awards & Recognition
        </h1>
        <p className="text-gray-300 mb-6">
          Olympic Industries is proud to be consistently recognized as a leading
          biscuit and confectionery company, <br /> earning a variety of awards
          and recognitions in several key areas.
        </p>

        {/* Navigation Icons */}
        <div className="flex justify-center space-x-12 mb-12">
          <button
            onClick={() => setActiveSection("innovation")}
            className={`flex flex-col items-center transition-opacity duration-200 ${
              activeSection === "innovation" ? "opacity-100" : "opacity-70"
            }`}
          >
            <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-2">
              <Trophy size={24} color="white" />
            </div>
            <span className="text-yellow-400 font-medium">Innovation</span>
          </button>

          <button
            onClick={() => setActiveSection("brands")}
            className={`flex flex-col items-center transition-opacity duration-200 ${
              activeSection === "brands" ? "opacity-100" : "opacity-70"
            }`}
          >
            <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-2">
              <Users size={24} color="white" />
            </div>
            <span className="text-yellow-400 font-medium">
              Brand Excellence
            </span>
          </button>

          <button
            onClick={() => setActiveSection("responsibility")}
            className={`flex flex-col items-center transition-opacity duration-200 ${
              activeSection === "responsibility" ? "opacity-100" : "opacity-70"
            }`}
          >
            <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-2">
              <Leaf size={24} color="white" />
            </div>
            <span className="text-yellow-400 font-medium">Social</span>
          </button>
        </div>
      </div>

      {/* Content Sections */}
      <div className="mt-12 max-w-5xl m-auto">
        {activeSection && (
          <div>
            <h2 className="text-2xl font-bold text-red-500 text-center mb-8">
              {awardData[activeSection].title}
            </h2>
            <p className="text-gray-300 text-center mb-8">
              {awardData[activeSection].description}
            </p>

            <div
              className={`grid grid-cols-1 ${
                activeSection === "brands" ? "md:grid-cols-3" : "md:grid-cols-2"
              } gap-8`}
            >
              {awardData[activeSection].awards.map((award) => (
                <div
                  key={award.id}
                  className="bg-gray-900 p-6 rounded shadow-lg border border-red-800 flex flex-col items-center"
                >
                  {renderAwardBadge(award)}
                  <h3 className="text-lg font-bold text-yellow-400 mb-2 text-center">
                    {award.title}
                  </h3>
                  <p className="text-gray-400 text-center mb-2">
                    {award.organization}
                  </p>
                  {award.hasReadMore && (
                    <button className="mt-2 text-red-400 hover:text-red-300 hover:underline">
                      {award.id === 1
                        ? "Read more"
                        : "Click here to read more awards"}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AwardsSection;
