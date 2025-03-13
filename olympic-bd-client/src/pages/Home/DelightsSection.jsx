// import React from "react";

// const categories = [
//   {
//     name: "BISCUITS",
//     img: "/p.png",
//   },
//   { name: "COOKIES", img: "/p.png" },
//   { name: "SNACKS", img: "/p.png" },
//   { name: "CONFECTIONARY", img: "/p.png" },
//   { name: "POWDER DRINK", img: "/p.png" },
//   { name: "BATTERY", img: "/p.png" },
// ];

// export default function DelightsSection() {
//   return (
//     <>
//       <div className="bg-black text-white py-12 px-4">
//         <div className="mx-auto text-center">
//           <h2 className="text-xl font-dancing sm:text-2xl md:text-4xl font-bold">
//             Dive Into
//           </h2>
//           <h1 className="text-3xl font-dancing sm:text-4xl md:text-6xl font-bold text-[#e3b8a0] my-2">
//             Our Delights
//           </h1>

//           <div className="flex flex-wrap justify-center  mt-8">
//             {categories.map((category, index) => (
//               <div key={index} className="flex flex-col items-center">
//                 <div className="rounded-lg relative shadow-lg p-4 w-48 h-48 flex items-center justify-center">
//                   <img
//                     src={category.img}
//                     alt={category.name}
//                     className="object-contain h-full w-full z-50" // Allow the image to fill the container
//                   />
//                   <div className="bg-gray-200 w-28  h-28 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 absolute bottom-10 p-6"></div>
//                 </div>
//                 <p className="text-sm font-semibold text-gray-400">
//                   {category.name}
//                 </p>
//                 <button className="bg-amber-400 text-white px-3 py-1 mt-2 rounded-md text-xs hover:bg-orange-600 transition">
//                   Discover More
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";

const categories = [
  {
    name: "BISCUITS",
    img: "/p.png",
  },
  { name: "COOKIES", img: "/p.png" },
  { name: "SNACKS", img: "/p.png" },
  { name: "CONFECTIONARY", img: "/p.png" },
  { name: "POWDER DRINK", img: "/p.png" },
  { name: "BATTERY", img: "/p.png" },
];

export default function DelightsSection() {
  return (
    <>
      <div className="bg-black text-white py-12 px-4">
        <div className="mx-auto text-center">
          <h2 className="text-xl font-dancing sm:text-2xl md:text-4xl font-bold">
            Dive Into
          </h2>
          <h1 className="text-3xl font-dancing sm:text-4xl md:text-6xl font-bold text-[#e3b8a0] my-2">
            Our Delights
          </h1>

          <div className="flex flex-wrap justify-center  mt-8">
            {categories.map((category, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="rounded-lg relative shadow-lg p-4 w-48 h-48 flex items-center justify-center">
                  <img
                    src={category.img}
                    alt={category.name}
                    className="object-contain h-full w-full z-50" // Allow the image to fill the container
                  />
                  <div className="bg-gray-200 w-28  h-28 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 absolute bottom-10 p-6"></div>
                </div>
                <p className="text-sm font-semibold text-gray-400">
                  {category.name}
                </p>
                <button className="bg-amber-400 text-white px-3 py-1 mt-2 rounded-md text-xs hover:bg-orange-600 transition">
                  Discover More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
