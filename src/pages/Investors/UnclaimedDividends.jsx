/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaFilePdf, FaCalendarAlt } from "react-icons/fa";
import bgImage from "../../assets/Investors-banner-2.jpg";

const brandRed = "#cc0000";
const goldAccent = "#d4af37";

const PDFReader = ({ pdfUrl }) => {
  return (
    <div className="bg-gray-900 p-4 rounded-lg">
      <div className="w-full h-screen bg-gray-800 rounded-lg">
        <iframe 
          src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
          className="w-full h-full border-0 rounded-lg"
          title="PDF Viewer"
        />
      </div>
    </div>
  );
};

const UnclaimedDividends = () => {
  // Group data by years for collapsible sections
  const yearData = {
    "2023": [
      {
        title: "Unclaimed or Unsettled Stock Dividend of Olympic Industries Ltd",
        format: "PDF",
        size: "1.2 MB",
        path: "/src/assets/pdf/445-literature-review.pdf" // You'll adjust these paths
      },
      {
        title: "Dividend Distribution Compliance Report 2023",
        format: "PDF",
        size: "856 KB",
        path: "/src/assets/pdf/445-literature-review.pdf" // You'll adjust these paths
      }
    ],
    "2022": [
      {
        title: "Dividend Distribution Compliance Report 2022",
        format: "PDF",
        size: "920 KB",
        path: "/src/assets/pdf/445-literature-review.pdf" // You'll adjust these paths
      },
      {
        title: "Unclaimed Dividends List 2022",
        format: "PDF",
        size: "1.5 MB",
        path: "/src/assets/pdf/445-literature-review.pdf" // You'll adjust these paths
      }
    ],
    "2021": [
      {
        title: "Dividend Distribution Compliance Report 2021",
        format: "PDF",
        size: "780 KB",
        path: "/src/assets/pdf/445-literature-review.pdf" // You'll adjust these paths
      }
    ],
    "Other": [
      {
        title: "Dividend Distribution Policy",
        format: "PDF",
        size: "540 KB",
        path: "/src/assets/pdf/445-literature-review.pdf" // You'll adjust these paths
      }
    ]
  };

  // Separate years into recent and older
  const recentYears = ["2023", "2022"];
  const olderYears = ["2021", "Other"];
  const allYears = [...recentYears, ...olderYears];

  // State for UI controls
  const [activeTab, setActiveTab] = useState("2023");
  const [collapsedYears, setCollapsedYears] = useState({});
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);

  // Initialize collapsed state - set only the active tab to be expanded
  useEffect(() => {
    const initialCollapsedState = {};
    allYears.forEach(year => {
      initialCollapsedState[year] = year !== activeTab;
    });
    setCollapsedYears(initialCollapsedState);
  }, []);

  // Function to toggle collapse state for a year
  const toggleCollapse = (year) => {
    setCollapsedYears(prev => ({
      ...prev,
      [year]: !prev[year]
    }));
  };

  // Function to toggle PDF viewer
  const togglePdfViewer = (pdfPath) => {
    if (selectedPdf === pdfPath) {
      setSelectedPdf(null);
    } else {
      setSelectedPdf(pdfPath);
    }
  };
  // Function to handle downloads
  const handleDownload = (report) => {
    // Create an anchor element and set the href attribute to the PDF URL
    const link = document.createElement('a');
    link.href = report.path;
    link.download = report.title.replace(/\s+/g, '-').toLowerCase() + '.pdf'; // Format filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero Header Section - Fixed height */}
      <div className="relative w-full h-screen max-h-[32rem] overflow-hidden">
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
            animate={{ width: 120 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="h-0.5 bg-gradient-to-r from-transparent via-goldAccent to-transparent mb-6"
            style={{ backgroundColor: goldAccent }}
          />
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-4 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Unclaimed{" "}
            <span style={{ color: goldAccent }}>Dividends</span>
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Find information about unclaimed dividends and distribution policies
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
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
              <div className="w-4 h-4 border-r-2 border-b-2 border-goldAccent transform rotate-45"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto ">
        <div className="mb-6 text-gray-300">
          <p className="text-lg mb-4">Investor Relation Department</p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <span className="font-medium">Contact Person:</span>
              <span>Mr. Xyz</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Email:</span>
              <span>ir@olympicbd.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Phone:</span>
              <span>+880-2-9882345</span>
            </div>
          </div>
        </div>

        {/* Year Tabs Navigation - Regular (not sticky) */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 items-center">
            {/* Recent years as individual tabs */}
            {recentYears.map((year) => (
              <button
                key={year}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === year
                    ? "bg-red-600 text-white"
                    : "bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-gray-200"
                }`}
                onClick={() => {
                  setActiveTab(year);
                  toggleCollapse(year);
                }}
              >
                {year}
              </button>
            ))}

            {/* Archive dropdown for older years */}
            <div className="relative">
              <button
                className="px-4 py-2 rounded-lg bg-gray-900 text-gray-300 hover:bg-gray-800 flex items-center gap-1"
                onClick={() => setShowYearDropdown(!showYearDropdown)}
              >
                Archive
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transition-transform duration-300 ${
                    showYearDropdown ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {showYearDropdown && (
                <div className="absolute z-10 mt-2 w-60 bg-gray-800 shadow-lg rounded-lg py-1 max-h-96 overflow-y-auto">
                  <div className="grid grid-cols-2 gap-1 p-2">
                    {olderYears.map((year) => (
                      <button
                        key={year}
                        className={`px-3 py-2 bg-gray-600 text-sm rounded transition-colors duration-200 text-left ${
                          activeTab === year
                            ? "bg-red-700 text-white"
                            : "hover:bg-gray-700 text-gray-300"
                        }`}
                        onClick={() => {
                          setActiveTab(year);
                          toggleCollapse(year);
                          setShowYearDropdown(false);
                        }}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="h-1 bg-red-600 mt-2"></div>
        </div>

        {/* PDF Viewer if a PDF is selected */}
        {selectedPdf && (
          <div className="my-6 bg-gray-900 rounded-lg p-4 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-medium text-gray-200">PDF Viewer</h2>
              <button 
                onClick={() => setSelectedPdf(null)}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
              >
                Close Viewer
              </button>
            </div>
            <PDFReader pdfUrl={selectedPdf} />
          </div>
        )}

        {/* Collapsible Year Sections */}
        <div className="mt-6 space-y-6">
          {allYears.map((year) => {
            // Skip rendering if there's no data for this year
            if (!yearData[year] || yearData[year].length === 0) return null;
            
            return (
              <div
                key={year}
                id={`year-${year}`}
                className="border border-gray-800 rounded-lg overflow-hidden"
              >
                {/* Collapsible header */}
                <div 
                  className={`cursor-pointer bg-gray-900 p-4 flex justify-between items-center border-l-4 ${
                    activeTab === year ? "border-red-600" : "border-gray-700"
                  }`}
                  onClick={() => toggleCollapse(year)}
                >
                  <h2 className="text-xl font-medium text-gray-200">{year}</h2>
                  <button className="text-gray-400 focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-6 w-6 transform transition-transform duration-300 ${
                        !collapsedYears[year] ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
                
                {/* Collapsible content */}
                <div 
                  className={`transition-all duration-300 overflow-hidden ${
                    collapsedYears[year] ? "max-h-0" : "max-h-full p-4"
                  }`}
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    {yearData[year] && yearData[year].map((report, index) => (
                      <div
                        key={index}
                        className="bg-gray-900 p-4 rounded-lg shadow-md border border-gray-800 hover:border-yellow-600 transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-lg font-medium text-gray-200">
                            {report.title}
                          </h3>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <span className="inline-flex items-center bg-gray-800 px-2 py-1 rounded text-xs text-red-400">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3 mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                />
                              </svg>
                              {report.format}
                            </span>
                            <span className="text-xs text-gray-400">
                              {report.size}
                            </span>
                          </div>
                          <div className="flex gap-2">
                            <button 
                              onClick={() => togglePdfViewer(report.path)}
                              className="bg-gray-800 hover:bg-gray-700 text-gray-200 px-3 py-1 rounded transition-colors duration-300 flex items-center text-sm"
                            >
                              View
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </button>
                            <button 
                              onClick={() => handleDownload(report)}
                              className="bg-gray-800 hover:bg-red-700 text-gray-200 px-3 py-1 rounded transition-colors duration-300 flex items-center text-sm"
                            >
                              Download
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 ml-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UnclaimedDividends;