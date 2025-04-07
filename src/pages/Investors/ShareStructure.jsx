import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, Sector } from 'recharts';
import { motion } from "framer-motion";
import { FaInfoCircle, FaChartPie, FaTable, FaDownload, FaHistory } from "react-icons/fa";
import bgImage from "../../assets/cookieBG.jpg";

const ShareStructure = () => {
  // Colors - matching the previous components
  const brandRed = "#cc0000";
  const goldAccent = "#d4af37";
  
  const [activeIndex, setActiveIndex] = useState(null);
  const [viewMode, setViewMode] = useState("all");
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Updated data with more appealing colors
  const data = [
    { name: 'Directors and Sponsors', value: 32.38, color: brandRed },
    { name: 'Institutions', value: 22.55, color: '#d55e00' },
    { name: 'Foreign Investors', value: 34.30, color: goldAccent },
    { name: 'General Public', value: 10.77, color: '#56b4e9' },
  ];

  const tableData = [
    { label: 'Authorized Capital', value: '৳ 2,000,000,000', bgColor: 'rgba(204, 0, 0, 0.05)' },
    { label: '# of Shares Authorized', value: '200,000,000', bgColor: 'rgba(204, 0, 0, 0.1)' },
    { label: 'Paid-Up Capital', value: '৳ 1,999,388,860', bgColor: 'rgba(204, 0, 0, 0.15)' },
    { label: '# of Shares Issued', value: '199,938,886', bgColor: 'rgba(204, 0, 0, 0.2)' },
    { label: 'Face Value per Share', value: '৳ 10.00', bgColor: 'rgba(204, 0, 0, 0.25)' },
    { label: 'Market Lot', value: '1 Share', bgColor: 'rgba(212, 175, 55, 0.1)' },
    { label: 'Sector (DSE Listing)', value: 'Food & Allied', bgColor: 'rgba(212, 175, 55, 0.2)' },
    { label: 'Market Category', value: 'A', bgColor: 'rgba(212, 175, 55, 0.3)' },
    { label: 'Year End', value: 'June 30', bgColor: 'rgba(212, 175, 55, 0.4)' },
    { label: 'Year of Listing (DSE)', value: '1989', bgColor: 'rgba(212, 175, 55, 0.5)' },
  ];
  
  // Historical shareholding data for comparison
  const historicalData = [
    { year: "2022", directors: 31.20, institutions: 20.15, foreign: 38.45, public: 10.20 },
    { year: "2023", directors: 32.05, institutions: 21.30, foreign: 35.80, public: 10.85 },
    { year: "2024", directors: 32.38, institutions: 22.55, foreign: 34.30, public: 10.77 }
  ];

  // Active shape for pie chart hover
  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius + 6}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#FFF" fontSize={12}>
          {`${payload.name}`}
        </text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey + 16} textAnchor={textAnchor} fill="#FFF" fontSize={12}>
          {`${value.toFixed(2)}%`}
        </text>
      </g>
    );
  };

  // Custom tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-black/80 border border-gray-800 rounded p-3 shadow-lg">
          <p className="font-medium text-sm" style={{ color: payload[0].payload.color }}>
            {payload[0].name}
          </p>
          <p className="text-white font-semibold text-lg">
            {payload[0].value.toFixed(2)}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero Header Section */}
      <div
        className="relative w-full h-72 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center 30%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/80 flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="h-0.5 bg-gradient-to-r from-transparent via-goldAccent to-transparent mb-6"
            style={{ backgroundColor: goldAccent }}
          />
          <motion.h1
            className="text-4xl md:text-5xl font-bold tracking-wider mb-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Share Structure
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
            className="h-0.5 mb-4"
            style={{
              background: `linear-gradient(to right, transparent, ${brandRed}, transparent)`,
            }}
          />
          <motion.p
            className="text-gray-300 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Shareholding Pattern as on <span className="font-semibold" style={{ color: brandRed }}>DEC 31, 2024</span>
          </motion.p>
        </div>
      </div>

      {/* View Toggles */}
      <div className="max-w-6xl mx-auto py-8 px-4">
        <div className="flex justify-center mb-8">
          <div className="flex bg-black/30 border border-gray-800 rounded-lg overflow-hidden">
            <button
              onClick={() => setViewMode("all")}
              className={`px-4 py-2 text-sm font-medium flex items-center ${
                viewMode === "all" ? "bg-black/50 text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              <FaChartPie className="mr-2" />
              All Data
            </button>
            <button
              onClick={() => setViewMode("chart")}
              className={`px-4 py-2 text-sm font-medium flex items-center ${
                viewMode === "chart" ? "bg-black/50 text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              <FaChartPie className="mr-2" />
              Chart View
            </button>
            <button
              onClick={() => setViewMode("table")}
              className={`px-4 py-2 text-sm font-medium flex items-center ${
                viewMode === "table" ? "bg-black/50 text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              <FaTable className="mr-2" />
              Details View
            </button>
            <button
              onClick={() => setViewMode("historical")}
              className={`px-4 py-2 text-sm font-medium flex items-center ${
                viewMode === "historical" ? "bg-black/50 text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              <FaHistory className="mr-2" />
              Historical
            </button>
          </div>
        </div>

        {/* Summary Box */}
        {viewMode !== "historical" && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mb-10"
          >
            <div className="bg-black/20 border border-gray-800 rounded-lg p-6 text-center max-w-3xl mx-auto">
              <h3 className="text-xl font-light mb-3">Share Structure <span className="font-medium">Overview</span></h3>
              <div 
                className="h-px w-16 mx-auto mb-4"
                style={{
                  background: `linear-gradient(to right, transparent, ${goldAccent}, transparent)`,
                }}
              />
              <p className="text-gray-300">
                Olympic Industries Limited has 199.93 million shares issued with a market capitalization of approximately ৳22.19 billion. 
                Foreign investors hold the largest stake at 34.30%, followed by Directors and Sponsors at 32.38%.
              </p>
              <div className="mt-4 flex justify-center">
                <button className="flex items-center text-sm font-medium px-4 py-2 rounded-full border border-gray-800 hover:border-gray-700 transition-all">
                  <FaDownload className="mr-2" style={{ color: goldAccent }} />
                  Download Full Report
                </button>
              </div>
            </div>
          </motion.div>
        )}
  
        {/* Content Section */}
        {(viewMode === "all" || viewMode === "chart") && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Pie Chart Section */}
              <div className="lg:col-span-2 bg-black/20 border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-light mb-6">Shareholding <span className="font-medium">Distribution</span></h3>
                <div style={{ width: '100%', height: 400 }}>
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie 
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        paddingAngle={4}
                        dataKey="value"
                        onMouseEnter={(_, index) => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                        activeIndex={activeIndex}
                        activeShape={renderActiveShape}
                      >
                        {data.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={entry.color} 
                            stroke="rgba(0,0,0,0.3)"
                            strokeWidth={1}
                          />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {data.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex flex-col items-center p-3 rounded-lg transition-all duration-300 hover:bg-black/30"
                      onMouseEnter={() => setActiveIndex(index)}
                      onMouseLeave={() => setActiveIndex(null)}
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-full mb-2" style={{ backgroundColor: item.color }}>
                        <span className="text-xs font-bold text-white">{item.value}%</span>
                      </div>
                      <span className="text-xs text-center text-gray-300">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Metrics Summary */}
              <div className="bg-black/20 border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-light mb-6">Key <span className="font-medium">Metrics</span></h3>
                <div className="space-y-4">
                  {tableData.slice(0, 5).map((row, index) => (
                    <div 
                      key={index} 
                      className="border-b border-gray-800 pb-3 transition-all duration-300 hover:bg-black/20 p-2 rounded"
                    >
                      <div className="text-sm text-gray-400">{row.label}</div>  
                      <div className="text-lg font-medium">{row.value}</div>
                    </div>
                  ))}
                  <div className="flex items-center pt-2 text-sm">
                    <FaInfoCircle style={{ color: goldAccent }} className="mr-2" />
                    <span className="text-gray-400">Data as per DSE listing information</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Table View - Full Details */}
        {(viewMode === "all" || viewMode === "table") && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-black/20 border border-gray-800 rounded-lg p-6 mb-12"
          >
            <h3 className="text-xl font-light mb-6">Detailed <span className="font-medium">Share Information</span></h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="py-3 px-4 text-left text-gray-400 font-medium">Item</th>
                    <th className="py-3 px-4 text-right text-gray-400 font-medium">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-800 hover:bg-black/30 transition-colors duration-300"
                    >
                      <td className="py-4 px-4 font-medium">
                        <div className="flex items-center">
                          <div 
                            className="w-3 h-3 rounded-full mr-3"
                            style={{ backgroundColor: index < 5 ? brandRed : goldAccent }}
                          />
                          {row.label}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-right font-bold">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Historical Data View */}
        {viewMode === "historical" && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="bg-black/20 border border-gray-800 rounded-lg p-6 mb-12"
          >
            <h3 className="text-xl font-light mb-6">Historical <span className="font-medium">Shareholding Patterns</span></h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="py-3 px-4 text-left text-gray-400 font-medium">Year</th>
                    <th className="py-3 px-4 text-right text-gray-400 font-medium">
                      <div className="flex items-center justify-end">
                        <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: brandRed }} />
                        Directors & Sponsors
                      </div>
                    </th>
                    <th className="py-3 px-4 text-right text-gray-400 font-medium">
                      <div className="flex items-center justify-end">
                        <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: '#d55e00' }} />
                        Institutions
                      </div>
                    </th>
                    <th className="py-3 px-4 text-right text-gray-400 font-medium">
                      <div className="flex items-center justify-end">
                        <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: goldAccent }} />
                        Foreign Investors
                      </div>
                    </th>
                    <th className="py-3 px-4 text-right text-gray-400 font-medium">
                      <div className="flex items-center justify-end">
                        <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: '#56b4e9' }} />
                        General Public
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {historicalData.map((year, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-800 hover:bg-black/30 transition-colors duration-300"
                    >
                      <td className="py-4 px-4 font-medium">{year.year}</td>
                      <td className="py-4 px-4 text-right font-bold">{year.directors.toFixed(2)}%</td>
                      <td className="py-4 px-4 text-right font-bold">{year.institutions.toFixed(2)}%</td>
                      <td className="py-4 px-4 text-right font-bold">{year.foreign.toFixed(2)}%</td>
                      <td className="py-4 px-4 text-right font-bold">{year.public.toFixed(2)}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 bg-black/30 rounded-lg p-4">
              <div className="flex items-start">
                <FaInfoCircle className="text-lg mt-1 mr-3" style={{ color: goldAccent }} />
                <div>
                  <h4 className="font-medium mb-2">Key Trends</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Foreign investor holdings decreased by 4.15% over the three-year period</li>
                    <li>• Institutional investment increased steadily by approximately 1.2% year-over-year</li>
                    <li>• Directors and Sponsors have gradually increased their holdings by 1.18% since 2022</li>
                    <li>• General Public shareholding has remained relatively stable around 10-11%</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Download Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="border border-gray-800 rounded-lg p-8 text-center flex flex-col items-center">
            <h3 className="text-2xl font-light">Need More <span className="font-medium">Information?</span></h3>
            <div
              className="h-px w-12 my-4"
              style={{
                background: `linear-gradient(to right, transparent, ${goldAccent}, transparent)`,
              }}
            />
            <p className="text-gray-300 max-w-md mx-auto mb-6">
              Download our full investor relations pack for comprehensive details about Olympic Industries' share structure, financial performance, and growth strategy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                className="px-6 py-3 flex items-center rounded-md text-sm font-medium border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                <FaDownload className="mr-2" style={{ color: goldAccent }} />
                Annual Report
              </button>
              <button
                className="px-6 py-3 flex items-center rounded-md text-sm font-medium transition-all duration-300"
                style={{ 
                  background: brandRed,
                  color: 'white'
                }}
              >
                Investor Relations Pack
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ShareStructure;