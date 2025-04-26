// import React, { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight, Award } from "lucide-react";

// const AwardsSection = () => {
//   // Sample awards data - replace with actual Olympic Industries awards
//   const awards = [
//     {
//       id: 1,
//       title: "Best Food & Beverage Brand 2024",
//       organization: "Bangladesh Brand Forum",
//       year: "2024",
//       description:
//         "Recognized for excellence in brand building and market leadership in the food & beverage category.",
//       image: "https://olympicbd.com/wp-content/uploads/2016/06/DSC2294-1.jpg",
//     },
//     {
//       id: 2,
//       title: "Export Excellence Award",
//       organization: "Ministry of Commerce",
//       year: "2023",
//       description:
//         "Honored for outstanding contribution to the national export market and global brand representation.",
//       image: "https://olympicbd.com/wp-content/uploads/2016/06/DSC2294-1.jpg",
//     },
//     {
//       id: 3,
//       title: "Best Manufacturing Process",
//       organization: "Bangladesh Manufacturing Excellence Awards",
//       year: "2023",
//       description:
//         "Awarded for implementing industry-leading manufacturing processes and quality control systems.",
//       image: "https://olympicbd.com/wp-content/uploads/2016/06/DSC2294-1.jpg",
//     },
//     {
//       id: 4,
//       title: "Most Loved Biscuit Brand",
//       organization: "Consumer Choice Awards",
//       year: "2022",
//       description:
//         "Voted as the most preferred biscuit brand by consumers across all demographics.",
//       image: "https://olympicbd.com/wp-content/uploads/2016/06/DSC2294-1.jpg",
//     },
//     {
//       id: 5,
//       title: "Corporate Social Responsibility Excellence",
//       organization: "CSR Forum Bangladesh",
//       year: "2022",
//       description:
//         "Recognized for meaningful social impact initiatives and sustainable business practices.",
//       image: "https://olympicbd.com/wp-content/uploads/2016/06/DSC2294-1.jpg",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const nextSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % awards.length);
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   const prevSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + awards.length) % awards.length
//     );
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   // Auto-play functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   return (
//     <section className="bg-black py-20 px-4 relative overflow-hidden">
//       {/* Decorative background elements */}
//       <div className="absolute top-0 left-0 w-full h-full opacity-10">
//         <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-red-600 filter blur-3xl"></div>
//         <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-yellow-500 filter blur-3xl"></div>
//       </div>

//       <div className="max-w-6xl mx-auto relative z-10">
//         <div className="flex items-center justify-center mb-12">
//           <Award size={48} className="text-red-600 mr-4" />
//           <h2 className="text-4xl font-bold text-yellow-500">
//             AWARDS & RECOGNITION
//           </h2>
//         </div>

//         <div className="relative">
//           {/* Navigation arrows */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-red-600 p-2 rounded-full text-white transition-all duration-300"
//             aria-label="Previous award"
//           >
//             <ChevronLeft size={24} />
//           </button>

//           <button
//             onClick={nextSlide}
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-red-600 p-2 rounded-full text-white transition-all duration-300"
//             aria-label="Next award"
//           >
//             <ChevronRight size={24} />
//           </button>

//           {/* Slider container */}
//           <div className="overflow-hidden relative rounded-lg border border-yellow-700/30">
//             <div
//               className="flex transition-transform duration-500 ease-in-out h-full"
//               style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//             >
//               {awards.map((award) => (
//                 <div key={award.id} className="min-w-full">
//                   <div className="flex flex-col lg:flex-row bg-gradient-to-br from-black to-gray-900">
//                     {/* Award image */}
//                     <div className="lg:w-1/2">
//                       <img
//                         src={award.image}
//                         alt={award.title}
//                         className="w-full h-64 lg:h-full object-cover"
//                       />
//                     </div>

//                     {/* Award details */}
//                     <div className="lg:w-1/2 p-8 flex flex-col justify-center">
//                       <div className="flex items-center mb-3">
//                         <span className="px-3 py-1 bg-red-600 text-white text-sm font-medium rounded">
//                           {award.year}
//                         </span>
//                       </div>

//                       <h3 className="text-2xl font-bold text-yellow-500 mb-2">
//                         {award.title}
//                       </h3>

//                       <p className="text-lg text-gray-300 mb-4">
//                         {award.organization}
//                       </p>

//                       <p className="text-gray-400">{award.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Pagination dots */}
//           <div className="flex justify-center mt-6">
//             {awards.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => {
//                   setCurrentIndex(index);
//                   setIsAnimating(true);
//                   setTimeout(() => setIsAnimating(false), 500);
//                 }}
//                 className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
//                   currentIndex === index
//                     ? "bg-red-600 w-6"
//                     : "bg-gray-600 hover:bg-gray-400"
//                 }`}
//                 aria-label={`Go to award ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AwardsSection;

import { useState } from "react";
import { Trophy, Users, Leaf } from "lucide-react";

const AwardsSection = () => {
  const [activeSection, setActiveSection] = useState("innovation");

  return (
    <div className=" mx-auto p-6 font-sans bg-gray-900 text-gray-200 min-h-screen">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-blue-400 mb-4">
          Awards & Recognition
        </h1>
        <p className="text-gray-300 mb-6">
          We're proud to be consistently recognized as a leading global company,
          earning a variety of awards and recognitions in several key areas.
        </p>

        <p className="text-blue-300 font-medium mb-8">
          Click to jump to each section.
        </p>

        {/* Navigation Icons */}
        <div className="flex justify-center space-x-12 mb-12">
          <button
            onClick={() => setActiveSection("innovation")}
            className={`flex flex-col items-center transition-opacity duration-200 ${
              activeSection === "innovation" ? "opacity-100" : "opacity-70"
            }`}
          >
            <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center mb-2">
              <Trophy size={24} color="white" />
            </div>
            <span className="text-blue-300 font-medium">Innovation</span>
          </button>

          <button
            onClick={() => setActiveSection("careers")}
            className={`flex flex-col items-center transition-opacity duration-200 ${
              activeSection === "careers" ? "opacity-100" : "opacity-70"
            }`}
          >
            <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-2">
              <Users size={24} color="white" />
            </div>
            <span className="text-blue-300 font-medium">Best Careers</span>
          </button>

          <button
            onClick={() => setActiveSection("responsibility")}
            className={`flex flex-col items-center transition-opacity duration-200 ${
              activeSection === "responsibility" ? "opacity-100" : "opacity-70"
            }`}
          >
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mb-2">
              <Leaf size={24} color="white" />
            </div>
            <span className="text-blue-300 font-medium">
              Social Responsibility
            </span>
          </button>
        </div>
      </div>

      {/* Content Sections */}
      <div className="mt-12">
        {activeSection === "innovation" && (
          <div>
            <h2 className="text-2xl font-bold text-blue-300 text-center mb-8">
              Innovation
            </h2>
            <p className="text-gray-300 text-center mb-8">
              A culture rooted in forward-thinking and fueled by over 5,000 R&D
              experts.
            </p>

            <div className="bg-gray-800 p-6 rounded shadow-lg border border-gray-700 mb-8">
              <h3 className="text-lg font-bold text-center text-green-400 mb-4">
                America's Most Innovative Companies
              </h3>
              <p className="text-center">
                <button className="text-blue-300 hover:text-blue-200 hover:underline">
                  Read more
                </button>
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded shadow-lg border border-gray-700">
              <h3 className="text-lg font-medium mb-2 text-gray-200">
                3 of the Top 25 most food product launches and 2 Rising Stars
                2023
              </h3>
              <p className="text-center">
                <button className="text-blue-300 hover:text-blue-200 hover:underline">
                  Click here to read more awards
                </button>
              </p>
            </div>
          </div>
        )}

        {activeSection === "careers" && (
          <div>
            <h2 className="text-2xl font-bold text-blue-300 text-center mb-8">
              Best Careers
            </h2>
            <p className="text-gray-300 text-center mb-8">
              Recognized as a top employer with industry-leading benefits and
              workplace culture.
            </p>

            <div className="bg-gray-800 p-6 rounded shadow-lg border border-gray-700 mb-8">
              <h3 className="text-lg font-bold text-center text-gray-200 mb-4">
                Top 100 Places to Work
              </h3>
              <p className="text-center">
                <button className="text-blue-300 hover:text-blue-200 hover:underline">
                  Learn more
                </button>
              </p>
            </div>
          </div>
        )}

        {activeSection === "responsibility" && (
          <div>
            <h2 className="text-2xl font-bold text-blue-300 text-center mb-8">
              Social Responsibility
            </h2>
            <p className="text-gray-300 text-center mb-8">
              Committed to sustainability and making a positive impact in
              communities worldwide.
            </p>

            <div className="bg-gray-800 p-6 rounded shadow-lg border border-gray-700 mb-8">
              <h3 className="text-lg font-bold text-center text-gray-200 mb-4">
                Environmental Leadership Award 2023
              </h3>
              <p className="text-center">
                <button className="text-blue-300 hover:text-blue-200 hover:underline">
                  Discover our initiatives
                </button>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AwardsSection;
