// import React, { useState } from "react";

// const FinancialsAndReports = () => {
//   const [expandedYears, setExpandedYears] = useState({
//     "2024-2025": true,
//     "2023-2024": true,
//   });

//   const toggleYear = (year) => {
//     setExpandedYears({
//       ...expandedYears,
//       [year]: !expandedYears[year],
//     });
//   };

//   const yearData = {
//     "2024-2025": [
//       {
//         title: "Q1 Quarterly Report (2024-2025)",
//         format: "PDF",
//         size: "2.3MB",
//       },
//       { title: "Half Yearly Report (2024-2025)", format: "PDF", size: "3.1MB" },
//     ],
//     "2023-2024": [
//       {
//         title: "Q1 Quarterly Report (2023-2024)",
//         format: "PDF",
//         size: "2.5MB",
//       },
//       {
//         title: "Q2 Quarterly Report (2023-2024)",
//         format: "PDF",
//         size: "2.6MB",
//       },
//       { title: "Half Yearly Report (2023-2024)", format: "PDF", size: "3.4MB" },
//       {
//         title: "Audited Financial Statements - Year Ended 31 June 2024",
//         format: "PDF",
//         size: "4.2MB",
//       },
//       { title: "Annual Report 2024", format: "PDF", size: "5.0MB" },
//     ],
//   };

//   const oldYears = [
//     "2022-2023",
//     "2021-2022",
//     "2020-2021",
//     "2019-2020",
//     "2018-2019",
//     "2017-2018",
//     "2016-2017",
//     "2015-2016",
//     "2014-2015",
//     "2013-2014",
//     "2012-2013",
//     "2011-2012",
//     "2010-2011",
//     "2009-2010",
//     "2008-2009",
//     "2007-2008",
//     "2006-2007",
//     "2005-2006",
//   ];

//   return (
//     <div className="bg-black min-h-screen text-gray-100 p-6 pt-20">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold mb-8 pb-2 border-b border-red-600 relative">
//           <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
//             FINANCIALS & ANNUAL REPORTS
//           </span>
//           <span className="absolute bottom-0 left-0 w-24 h-1 bg-yellow-600 transform translate-y-0.5"></span>
//         </h1>

//         {/* Current Years with Expanded Content */}
//         {Object.keys(yearData).map((year) => (
//           <div key={year} className="mb-6">
//             <div
//               className="flex items-center justify-between bg-gray-900 p-4 rounded-lg shadow-md cursor-pointer transform transition-all duration-300 hover:bg-gray-800 border-l-4 border-red-600"
//               onClick={() => toggleYear(year)}
//             >
//               <h2 className="text-xl font-semibold">{year}</h2>
//               <div
//                 className={`text-red-500 transform transition-transform duration-300 ${
//                   expandedYears[year] ? "rotate-180" : ""
//                 }`}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </div>
//             </div>

//             {expandedYears[year] && (
//               <div className="mt-4 grid md:grid-cols-2 gap-4 transform transition-all duration-500 ease-in-out">
//                 {yearData[year].map((report, index) => (
//                   <div
//                     key={index}
//                     className="bg-gray-900 p-4 rounded-lg shadow-md border border-gray-800 hover:border-yellow-600 transition-all duration-300 transform hover:-translate-y-1"
//                   >
//                     <div className="flex justify-between items-start mb-3">
//                       <h3 className="text-lg font-medium text-gray-200">
//                         {report.title}
//                       </h3>
//                     </div>
//                     <div className="flex justify-between items-center">
//                       <div className="flex items-center gap-3">
//                         <span className="inline-flex items-center bg-gray-800 px-2 py-1 rounded text-xs text-red-400">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-3 w-3 mr-1"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
//                             />
//                           </svg>
//                           {report.format}
//                         </span>
//                         <span className="text-xs text-gray-400">
//                           {report.size}
//                         </span>
//                       </div>
//                       <button className="bg-gray-800 hover:bg-red-700 text-gray-200 px-3 py-1 rounded transition-colors duration-300 flex items-center text-sm">
//                         Download
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-4 w-4 ml-1"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
//                           />
//                         </svg>
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}

//         {/* Previous Years (Collapsed) */}
//         {oldYears.map((year) => (
//           <div key={year} className="mb-4">
//             <div
//               className="flex items-center justify-between bg-gray-900 p-3 rounded-lg shadow-md cursor-pointer transform transition-all duration-300 hover:bg-gray-800 border-l-2 border-gray-700 hover:border-red-600"
//               onClick={() => toggleYear(year)}
//             >
//               <h2 className="text-lg font-medium">{year}</h2>
//               <div className="text-red-500">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FinancialsAndReports;

import React, { useState } from "react";

const FinancialsAndReports = () => {
  // All available years (current + old)
  const allYears = [
    "2024-2025",
    "2023-2024",
    "2022-2023",
    "2021-2022",
    "2020-2021",
    "2019-2020",
    "2018-2019",
    "2017-2018",
    "2016-2017",
    "2015-2016",
    "2014-2015",
    "2013-2014",
    "2012-2013",
    "2011-2012",
    "2010-2011",
    "2009-2010",
    "2008-2009",
    "2007-2008",
    "2006-2007",
    "2005-2006",
  ];

  // Set default active tab to the most recent year
  const [activeTab, setActiveTab] = useState(allYears[0]);

  // Group years by decade for dropdown
  const [showYearDropdown, setShowYearDropdown] = useState(false);

  // Recent years to always show as tabs (last 4 years)
  const recentYears = allYears.slice(0, 4);
  const olderYears = allYears.slice(4);

  // Financial reports data by year
  const yearData = {
    "2024-2025": [
      {
        title: "Q1 Quarterly Report (2024-2025)",
        format: "PDF",
        size: "2.3MB",
      },
      { title: "Half Yearly Report (2024-2025)", format: "PDF", size: "3.1MB" },
    ],
    "2023-2024": [
      {
        title: "Q1 Quarterly Report (2023-2024)",
        format: "PDF",
        size: "2.5MB",
      },
      {
        title: "Q2 Quarterly Report (2023-2024)",
        format: "PDF",
        size: "2.6MB",
      },
      { title: "Half Yearly Report (2023-2024)", format: "PDF", size: "3.4MB" },
      {
        title: "Audited Financial Statements - Year Ended 31 June 2024",
        format: "PDF",
        size: "4.2MB",
      },
      { title: "Annual Report 2024", format: "PDF", size: "5.0MB" },
    ],
    // Sample placeholder data for older years
    "2022-2023": [
      { title: "Annual Report 2023", format: "PDF", size: "4.8MB" },
      {
        title: "Audited Financial Statements - Year Ended 31 June 2023",
        format: "PDF",
        size: "4.0MB",
      },
    ],
  };

  return (
    <div className="bg-black min-h-screen text-gray-100 p-6 pt-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 pb-2 border-b border-red-600 relative">
          <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
            FINANCIALS & ANNUAL REPORTS
          </span>
          <span className="absolute bottom-0 left-0 w-24 h-1 bg-yellow-600 transform translate-y-0.5"></span>
        </h1>

        {/* Year Tabs Navigation - Enhanced Design */}
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
                onClick={() => setActiveTab(year)}
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
                <div className="absolute z-10 mt-2 w-60  bg-gray-800 shadow-lg rounded-lg py-1 max-h-96 overflow-y-auto">
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

        {/* Tab Content */}
        <div className="mt-6">
          {allYears.map((year) => (
            <div
              key={year}
              className={`transition-opacity duration-300 ${
                activeTab === year ? "block opacity-100" : "hidden opacity-0"
              }`}
            >
              {yearData[year] && yearData[year].length > 0 ? (
                <div className="grid md:grid-cols-2 gap-4">
                  {yearData[year].map((report, index) => (
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
                        <button className="bg-gray-800 hover:bg-red-700 text-gray-200 px-3 py-1 rounded transition-colors duration-300 flex items-center text-sm">
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
                  ))}
                </div>
              ) : (
                <div className="bg-gray-900 p-8 rounded-lg text-center">
                  <p className="text-gray-400">
                    No reports available for {year}. Please contact the finance
                    department for archives.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinancialsAndReports;
