/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  BarChart,
  LineChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp, Users, Building, PieChart } from "lucide-react";
import { motion } from "framer-motion";

const GrowthSection = () => {
  const revenueData = [
    { year: "2020", revenue: 25 },
    { year: "2021", revenue: 32 },
    { year: "2022", revenue: 38 },
    { year: "2023", revenue: 45 },
    { year: "2024", revenue: 52 },
  ];

  const marketShareData = [
    { year: "2020", share: 28 },
    { year: "2021", share: 32 },
    { year: "2022", share: 35 },
    { year: "2023", share: 40 },
    { year: "2024", share: 45 },
  ];

  const [activeTab, setActiveTab] = useState("revenue");

  const stats = [
    {
      id: 1,
      icon: <TrendingUp size={32} className="text-red-600" />,
      title: "108% Revenue Growth",
      description: "Over the past 5 years",
    },
    {
      id: 2,
      icon: <Users size={32} className="text-red-600" />,
      title: "12,000+ Employees",
      description: "Growing workforce nationwide",
    },
    {
      id: 3,
      icon: <Building size={32} className="text-red-600" />,
      title: "9 Production Facilities",
      description: "Expanding manufacturing footprint",
    },
    {
      id: 4,
      icon: <PieChart size={32} className="text-red-600" />,
      title: "45% Market Share",
      description: "Leading the industry in Bangladesh",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-12 text-yellow-400"
        >
          OUR GROWTH JOURNEY
          <span className="block w-24 h-1 bg-red-600 mx-auto mt-4 rounded"></span>
        </motion.h2>

        {/* Animated Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-black/60 border border-yellow-500/20 rounded-xl shadow-md text-center hover:shadow-red-600/30 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="mb-4">{stat.icon}</div>
              <h3 className="text-xl font-bold text-yellow-300 mb-2">
                {stat.title}
              </h3>
              <p className="text-gray-400 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Chart Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-black/80 border border-yellow-500/30 rounded-xl p-6 shadow-xl"
        >
          {/* Tabs */}
          <div className="flex mb-6 border-b border-gray-700 justify-center gap-4">
            {["revenue", "market"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-4 py-2 text-lg font-medium transition-all group ${
                  activeTab === tab
                    ? "text-red-500"
                    : "text-gray-400 hover:text-yellow-300"
                }`}
              >
                {tab === "revenue" ? "📊 Revenue Growth" : "📈 Market Share"}
                {activeTab === tab && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-red-500 rounded"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Chart */}
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              {activeTab === "revenue" ? (
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="year" stroke="#aaa" />
                  <YAxis stroke="#aaa" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#111",
                      border: "1px solid #444",
                    }}
                    labelStyle={{ color: "#eee" }}
                  />
                  <Legend />
                  <Bar
                    dataKey="revenue"
                    name="Annual Revenue (Billion BDT)"
                    fill="#FF3B3B"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              ) : (
                <LineChart data={marketShareData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="year" stroke="#aaa" />
                  <YAxis stroke="#aaa" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#111",
                      border: "1px solid #444",
                    }}
                    labelStyle={{ color: "#eee" }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="share"
                    name="Market Share (%)"
                    stroke="#FACC15"
                    strokeWidth={3}
                    dot={{ r: 4, fill: "#FACC15" }}
                  />
                </LineChart>
              )}
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-16 text-center"
        ></motion.div>
      </div>
    </section>
  );
};

export default GrowthSection;
