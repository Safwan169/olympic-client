/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaFilePdf, FaCalendarAlt } from "react-icons/fa";
import bannerImg from "../../assets/cookieBG.jpg"; // Replace with actual image path

const files = [
  {
    title: "Unclaimed or Unsettled Stock Dividend of Olympic Industries Ltd",
    year: "",
    type: "PDF",
  },
  {
    title: "Dividend Distribution Policy",
    year: "",
    type: "PDF",
  },
  {
    title: "Dividend Distribution Compliance Report",
    year: "2022",
    type: "PDF",
  },
  // Add more files as needed
];

const FileCard = ({ title, year }) => (
  <motion.div
    className="bg-zinc-900 border border-red-600 rounded-2xl p-4 hover:shadow-xl hover:border-gold transition-all duration-300"
    whileHover={{ scale: 1.03 }}
  >
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-gold font-semibold text-base md:text-lg leading-snug">
        {title}
      </h3>
      {year && (
        <div className="flex items-center text-sm text-red-500">
          <FaCalendarAlt className="mr-1" /> {year}
        </div>
      )}
    </div>
    <div className="flex items-center justify-between">
      <div className="text-red-500 flex items-center gap-1">
        <FaFilePdf /> PDF
      </div>
      <button className="bg-red-600 hover:bg-gold text-white font-medium rounded-xl px-4 py-1 transition duration-300">
        Download
      </button>
    </div>
  </motion.div>
);

const UnclaimedDividends = () => {
  return (
    <div className="bg-black min-h-screen text-white px-4 md:px-10 py-10 pt-20">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-red-600 mb-2">
          List of Unclaimed Dividends
        </h1>
        <p className="text-gold text-lg mb-4">Investor Relation Department</p>

        <div className="flex justify-center mb-6">
          <img
            src={bannerImg}
            alt="Dividend Banner"
            className="rounded-xl shadow-lg max-h-40 object-contain"
          />
        </div>

        <div className="mt-2 text-sm md:text-base text-gray-400">
          <p>Contact Person: Mr. Xyz</p>
          <p>Email: ir@olympicbd.com</p>
          <p>Phone: +880-2-9882345</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {files.map((file, index) => (
          <FileCard key={index} title={file.title} year={file.year} />
        ))}
      </div>
    </div>
  );
};

export default UnclaimedDividends;
