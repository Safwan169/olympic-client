import { useState, useEffect } from "react";
import bgImage from "../../assets/Investors-banner-2.jpg";
import { motion, useAnimation } from "framer-motion";

import {
  ChevronDown,
  ChevronUp,
  FileText,
  Download,
  ExternalLink,
} from "lucide-react";
const brandRed = "#cc0000";
const goldAccent = "#d4af37";
const darkBg = "#0a0a0a";
const PSIMIPage = () => {
  const [expandedYear, setExpandedYear] = useState(null);
  const [activeDocument, setActiveDocument] = useState(null);
  const [years, setYears] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock data - In a real implementation, this would come from an API
  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setYears([
        {
          year: "2025",
          documents: [
            {
              id: 1,
              title: "Q1 Financial Results",
              date: "April 15, 2025",
              type: "pdf",
              size: "2.4 MB",
            },
            {
              id: 2,
              title: "Board Meeting Notice",
              date: "March 10, 2025",
              type: "pdf",
              size: "1.2 MB",
            },
            {
              id: 3,
              title: "Acquisition Announcement",
              date: "February 22, 2025",
              type: "pdf",
              size: "3.5 MB",
            },
          ],
        },
        {
          year: "2024",
          documents: [
            {
              id: 4,
              title: "Annual Report 2024",
              date: "December 31, 2024",
              type: "pdf",
              size: "8.6 MB",
            },
            {
              id: 5,
              title: "Q4 Financial Results",
              date: "October 20, 2024",
              type: "pdf",
              size: "2.8 MB",
            },
            {
              id: 6,
              title: "Q3 Financial Results",
              date: "July 15, 2024",
              type: "pdf",
              size: "2.6 MB",
            },
          ],
        },
        {
          year: "2023",
          documents: [
            {
              id: 7,
              title: "Annual Report 2023",
              date: "December 31, 2023",
              type: "pdf",
              size: "7.9 MB",
            },
            {
              id: 8,
              title: "Dividend Declaration",
              date: "November 5, 2023",
              type: "pdf",
              size: "1.1 MB",
            },
            {
              id: 9,
              title: "Q2 Financial Results",
              date: "April 15, 2023",
              type: "pdf",
              size: "2.3 MB",
            },
          ],
        },
      ]);
      setLoading(false);
      // Set first year as expanded by default
      setExpandedYear("2025");
    }, 800);
  }, []);

  const toggleYear = (year) => {
    if (expandedYear === year) {
      setExpandedYear(null);
    } else {
      setExpandedYear(year);
    }
  };

  const openDocument = (doc) => {
    setActiveDocument(doc);
    // In a real implementation, this would fetch the document content
  };

  const closeDocument = () => {
    setActiveDocument(null);
  };

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero Header Section */}
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
      className="h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mb-6"
    />

    <motion.h1
      className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-4 text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      Price Sensitive <span className="text-yellow-500">Information</span>
    </motion.h1>

    <motion.p
      className="text-lg text-gray-300 max-w-2xl text-center mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      Timely disclosure of material information for transparent corporate governance
    </motion.p>

    <motion.div
      initial={{ width: 0 }}
      animate={{ width: 80 }}
      transition={{ duration: 1.2, delay: 0.9, ease: "easeInOut" }}
      className="h-0.5 mb-4"
      style={{
        background: "linear-gradient(to right, transparent, #dc2626, transparent)",
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
        <div className="w-4 h-4 border-r-2 border-b-2 border-yellow-500 transform rotate-45"></div>
      </div>
    </motion.div>
  </div>
</div>


      <div className="max-w-6xl mx-auto py-12 px-4 md:px-8">
        <h1 className="text-4xl font-bold text-yellow-500 mb-8">
          Price Sensitive Information / Material Information
        </h1>

        {/* Description Section */}
        <div className="mb-10">
          <p className="text-gray-300 mb-4">
            Olympic Industries Limited is committed to transparency and timely
            disclosure of all price sensitive and material information in
            accordance with regulatory requirements. All official PSI/MI
            documents are available for viewing and download below.
          </p>
          <div className="bg-red-800 p-4 rounded-md">
            <p className="font-medium">
              Important: The information provided here is for informational
              purposes only and should not be construed as investment advice.
              Investors should conduct their own due diligence before making any
              investment decisions.
            </p>
          </div>
        </div>

        {/* Year-wise sections with collapsible option */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="text-yellow-500">Loading documents...</div>
          </div>
        ) : (
          <div className="grid gap-4">
            {years.map((yearData) => (
              <div
                key={yearData.year}
                className="border border-gray-800 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleYear(yearData.year)}
                  className="w-full bg-gray-900 p-4 flex justify-between items-center hover:bg-gray-800 transition-colors"
                >
                  <span className="text-xl font-semibold text-yellow-500">
                    {yearData.year}
                  </span>
                  {expandedYear === yearData.year ? (
                    <ChevronUp className="text-red-600 w-6 h-6" />
                  ) : (
                    <ChevronDown className="text-red-600 w-6 h-6" />
                  )}
                </button>

                {expandedYear === yearData.year && (
                  <div className="p-4">
                    <div className="overflow-x-auto">
                      <table className="w-full table-auto">
                        <thead className="text-left bg-gray-900">
                          <tr>
                            <th className="p-3 text-yellow-500">Title</th>
                            <th className="p-3 text-yellow-500">Date</th>
                            <th className="p-3 text-yellow-500">Type</th>
                            <th className="p-3 text-yellow-500">Size</th>
                            <th className="p-3 text-yellow-500">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {yearData.documents.map((doc) => (
                            <tr
                              key={doc.id}
                              className="border-b border-gray-800 hover:bg-gray-900"
                            >
                              <td className="p-3">{doc.title}</td>
                              <td className="p-3">{doc.date}</td>
                              <td className="p-3 uppercase">{doc.type}</td>
                              <td className="p-3">{doc.size}</td>
                              <td className="p-3">
                                <div className="flex gap-2">
                                  <button
                                    onClick={() => openDocument(doc)}
                                    className="p-2 bg-red-800 rounded-md hover:bg-red-700 transition-colors flex items-center"
                                  >
                                    <FileText className="w-4 h-4 mr-1" />
                                    <span>View</span>
                                  </button>
                                  <button className="p-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors flex items-center">
                                    <Download className="w-4 h-4 mr-1" />
                                    <span>Download</span>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Document Viewer Modal */}
      {activeDocument && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg w-full max-w-4xl max-h-screen overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-gray-800">
              <h3 className="text-xl font-semibold text-yellow-500">
                {activeDocument.title}
              </h3>
              <div className="flex gap-2">
                <button className="p-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors flex items-center">
                  <Download className="w-4 h-4 mr-1" />
                  <span>Download</span>
                </button>
                <button className="p-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors flex items-center">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  <span>Open</span>
                </button>
                <button
                  onClick={closeDocument}
                  className="p-2 bg-red-800 rounded-md hover:bg-red-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
            <div className="h-screen max-h-[70vh] overflow-auto p-4">
              <div className="bg-white p-8 rounded-md">
                {/* This would be replaced with an actual PDF viewer in a real implementation */}
                <div className="flex justify-center items-center h-96">
                  <img
                    src="/api/placeholder/400/320"
                    alt="PDF Document Preview"
                    className="border border-gray-300"
                  />
                </div>
                <div className="text-center text-gray-800 mt-4">
                  Document preview is displayed here. In a production
                  environment, this would be replaced with an actual PDF viewer.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Statistical Overview Section */}
      <div className="max-w-6xl mx-auto mt-16 mb-16 px-4 md:px-8">
        <h2 className="text-2xl font-bold text-yellow-500 mb-6">
          Statistical Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl text-red-600 mb-2">Documents Published</h3>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold text-yellow-500">48</span>
              <span className="text-gray-400">in the last year</span>
            </div>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl text-red-600 mb-2">Financial Disclosures</h3>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold text-yellow-500">12</span>
              <span className="text-gray-400">quarterly reports</span>
            </div>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl text-red-600 mb-2">
              Corporate Announcements
            </h3>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold text-yellow-500">24</span>
              <span className="text-gray-400">significant updates</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PSIMIPage;