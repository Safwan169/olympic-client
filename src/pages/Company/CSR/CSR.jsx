import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function CSRSustainability() {
  const [activeTab, setActiveTab] = useState("overview");
  const [animatedValues, setAnimatedValues] = useState({
    treesPlanted: 0,
    wasteReduced: 0,
    communityProjects: 0,
    energySaved: 0,
  });

  // Sample data - would be fetched from CMS/API in production
  const cmsData = {
    title: "CSR & Sustainability",
    overview: {
      description:
        "At Olympic Industries, our commitment to corporate social responsibility and sustainability is embedded in our business strategy. We believe in creating positive impacts on communities while ensuring environmental stewardship.",
      imageUrl: "/api/placeholder/800/400",
      stats: {
        treesPlanted: 25000,
        wasteReduced: 40,
        communityProjects: 75,
        energySaved: 30,
      },
    },
    environmentalInitiatives: {
      title: "Environmental Initiatives",
      description:
        "Our environmental management system focuses on reducing our carbon footprint, managing waste efficiently, and conserving natural resources.",
      imageUrl:
        "https://olympicbd.com/wp-content/uploads/2016/06/Body-Image-1.jpg",
      initiatives: [
        {
          title: "Renewable Energy",
          description:
            "Solar panels installed across our facilities generate 15% of our total energy requirement.",
        },
        {
          title: "Waste Reduction",
          description:
            "Implemented closed-loop recycling systems that have reduced waste sent to landfills by 40%.",
        },
        {
          title: "Water Conservation",
          description:
            "Water recycling initiatives have decreased our freshwater consumption by 28% since 2020.",
        },
      ],
      chartData: [
        { name: "2020", Carbon: 100, Waste: 100, Water: 100 },
        { name: "2021", Carbon: 92, Waste: 85, Water: 88 },
        { name: "2022", Carbon: 80, Waste: 72, Water: 78 },
        { name: "2023", Carbon: 70, Waste: 65, Water: 72 },
        { name: "2024", Carbon: 60, Waste: 60, Water: 65 },
      ],
    },
    communityEngagement: {
      title: "Community Engagement",
      description:
        "We actively engage with communities through targeted programs that focus on education, healthcare, and skill development.",
      imageUrl: "",
      programs: [
        {
          title: "Education Support",
          description:
            "Provided scholarships to 1,200+ students and renovated 45 schools in underprivileged areas.",
        },
        {
          title: "Healthcare Access",
          description:
            "Organized 120+ medical camps serving over 50,000 individuals in rural communities.",
        },
        {
          title: "Skills Development",
          description:
            "Trained 3,500+ youth in various vocational skills enhancing their employability.",
        },
      ],
      chartData: [
        { name: "Education", value: 45 },
        { name: "Healthcare", value: 30 },
        { name: "Skills Development", value: 15 },
        { name: "Disaster Relief", value: 10 },
      ],
    },
    sustainablePractices: {
      title: "Sustainable Practices",
      description:
        "Our sustainable business practices ensure ethical sourcing, responsible manufacturing, and circular economy principles.",
      imageUrl: "/api/placeholder/600/400",
      practices: [
        {
          title: "Sustainable Sourcing",
          description:
            "80% of our raw materials are sourced from certified sustainable suppliers.",
        },
        {
          title: "Packaging Innovation",
          description:
            "Reduced plastic usage by 35% through innovative eco-friendly packaging solutions.",
        },
        {
          title: "Energy Efficiency",
          description:
            "Energy-efficient equipment and processes have reduced energy consumption by 30%.",
        },
      ],
      chartData: [
        { name: "2020", value: 40 },
        { name: "2021", value: 55 },
        { name: "2022", value: 65 },
        { name: "2023", value: 75 },
        { name: "2024", value: 90 },
      ],
    },
  };

  // Animation for stats numbers
  useEffect(() => {
    const { treesPlanted, wasteReduced, communityProjects, energySaved } =
      cmsData.overview.stats;
    const animationDuration = 2000; // 2 seconds
    const steps = 50;
    const interval = animationDuration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setAnimatedValues({
        treesPlanted: Math.round(treesPlanted * progress),
        wasteReduced: Math.round(wasteReduced * progress),
        communityProjects: Math.round(communityProjects * progress),
        energySaved: Math.round(energySaved * progress),
      });

      if (currentStep === steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Colors for charts
  const COLORS = ["#f59e0b", "#ef4444", "#10b981", "#3b82f6"];

  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-6 text-amber-400">
            {cmsData.title}
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            {cmsData.overview.description}
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gray-900 rounded-lg p-6 text-center shadow-md border-t-2 border-red-600 transform transition-transform duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-amber-400 mb-2">
              {animatedValues.treesPlanted.toLocaleString()}+
            </div>
            <div className="text-gray-300">Trees Planted</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 text-center shadow-md border-t-2 border-red-600 transform transition-transform duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-amber-400 mb-2">
              {animatedValues.wasteReduced}%
            </div>
            <div className="text-gray-300">Waste Reduced</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 text-center shadow-md border-t-2 border-red-600 transform transition-transform duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-amber-400 mb-2">
              {animatedValues.communityProjects}+
            </div>
            <div className="text-gray-300">Community Projects</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 text-center shadow-md border-t-2 border-red-600 transform transition-transform duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-amber-400 mb-2">
              {animatedValues.energySaved}%
            </div>
            <div className="text-gray-300">Energy Saved</div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap border-b border-gray-700 mb-10">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-6 py-3 font-medium text-sm transition-colors duration-300 ${
              activeTab === "overview"
                ? "text-amber-400 border-b-2 border-red-600"
                : "text-gray-400 hover:text-amber-300"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("environment")}
            className={`px-6 py-3 font-medium text-sm transition-colors duration-300 ${
              activeTab === "environment"
                ? "text-amber-400 border-b-2 border-red-600"
                : "text-gray-400 hover:text-amber-300"
            }`}
          >
            Environmental Initiatives
          </button>
          <button
            onClick={() => setActiveTab("community")}
            className={`px-6 py-3 font-medium text-sm transition-colors duration-300 ${
              activeTab === "community"
                ? "text-amber-400 border-b-2 border-red-600"
                : "text-gray-400 hover:text-amber-300"
            }`}
          >
            Community Engagement
          </button>
          <button
            onClick={() => setActiveTab("practices")}
            className={`px-6 py-3 font-medium text-sm transition-colors duration-300 ${
              activeTab === "practices"
                ? "text-amber-400 border-b-2 border-red-600"
                : "text-gray-400 hover:text-amber-300"
            }`}
          >
            Sustainable Practices
          </button>
        </div>

        {/* Tab Content */}
        <div className="min-h-96">
          {/* Environment Tab */}
          {activeTab === "environment" && (
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-amber-400">
                  {cmsData.environmentalInitiatives.title}
                </h3>
                <p className="mb-6">
                  {cmsData.environmentalInitiatives.description}
                </p>

                <div className="space-y-6">
                  {cmsData.environmentalInitiatives.initiatives.map(
                    (initiative, index) => (
                      <div
                        key={index}
                        className="bg-gray-900 rounded-lg p-6 shadow-md border-l-2 border-red-600"
                      >
                        <h4 className="text-lg font-semibold mb-2 text-amber-400">
                          {initiative.title}
                        </h4>
                        <p className="text-gray-300">
                          {initiative.description}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div>
                <div className="bg-gray-900 p-6 rounded-lg shadow-md mb-6">
                  <h4 className="text-lg font-semibold mb-4 text-amber-400">
                    Resource Efficiency Progress (Indexed to 2020=100)
                  </h4>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={cmsData.environmentalInitiatives.chartData}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="name" stroke="#d1d5db" />
                        <YAxis stroke="#d1d5db" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#111827",
                            borderColor: "#374151",
                          }}
                          itemStyle={{ color: "#f3f4f6" }}
                        />
                        <Legend />
                        <Bar
                          dataKey="Carbon"
                          fill="#ef4444"
                          name="Carbon Emissions"
                        />
                        <Bar
                          dataKey="Waste"
                          fill="#f59e0b"
                          name="Waste Generated"
                        />
                        <Bar
                          dataKey="Water"
                          fill="#3b82f6"
                          name="Water Usage"
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-sm text-gray-400 mt-4">
                    Lower values indicate better performance as we reduce our
                    environmental impact year over year.
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    // src={cmsData.environmentalInitiatives.imageUrl}
                    alt="Environmental Initiatives"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Community Tab */}
          {activeTab === "community" && (
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-amber-400">
                  {cmsData.communityEngagement.title}
                </h3>
                <p className="mb-6">
                  {cmsData.communityEngagement.description}
                </p>

                <div className="space-y-6">
                  {cmsData.communityEngagement.programs.map(
                    (program, index) => (
                      <div
                        key={index}
                        className="bg-gray-900 rounded-lg p-6 shadow-md border-l-2 border-red-600"
                      >
                        <h4 className="text-lg font-semibold mb-2 text-amber-400">
                          {program.title}
                        </h4>
                        <p className="text-gray-300">{program.description}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div>
                <div className="bg-gray-900 p-6 rounded-lg shadow-md mb-6">
                  <h4 className="text-lg font-semibold mb-4 text-amber-400">
                    CSR Budget Allocation by Category
                  </h4>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={cmsData.communityEngagement.chartData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) =>
                            `${name}: ${(percent * 100).toFixed(0)}%`
                          }
                        >
                          {cmsData.communityEngagement.chartData.map(
                            (entry, index) => (
                              <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                              />
                            )
                          )}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#111827",
                            borderColor: "#374151",
                          }}
                          itemStyle={{ color: "#f3f4f6" }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src={cmsData.communityEngagement.imageUrl}
                    alt="Community Engagement"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Sustainable Practices Tab */}
          {activeTab === "practices" && (
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-amber-400">
                  {cmsData.sustainablePractices.title}
                </h3>
                <p className="mb-6">
                  {cmsData.sustainablePractices.description}
                </p>

                <div className="space-y-6">
                  {cmsData.sustainablePractices.practices.map(
                    (practice, index) => (
                      <div
                        key={index}
                        className="bg-gray-900 rounded-lg p-6 shadow-md border-l-2 border-red-600"
                      >
                        <h4 className="text-lg font-semibold mb-2 text-amber-400">
                          {practice.title}
                        </h4>
                        <p className="text-gray-300">{practice.description}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div>
                <div className="bg-gray-900 p-6 rounded-lg shadow-md mb-6">
                  <h4 className="text-lg font-semibold mb-4 text-amber-400">
                    Sustainable Products (% of Total Portfolio)
                  </h4>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={cmsData.sustainablePractices.chartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="name" stroke="#d1d5db" />
                        <YAxis stroke="#d1d5db" domain={[0, 100]} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#111827",
                            borderColor: "#374151",
                          }}
                          itemStyle={{ color: "#f3f4f6" }}
                        />
                        <Bar
                          dataKey="value"
                          fill="#10b981"
                          name="Sustainable Products %"
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-sm text-gray-400 mt-4">
                    We aim to reach 100% sustainable product portfolio by 2030.
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src={cmsData.sustainablePractices.imageUrl}
                    alt="Sustainable Practices"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-amber-400">
                  Our Sustainability Journey
                </h3>
                <p className="mb-6">
                  At Olympic Industries, sustainability isn't just a goal—it's
                  integrated into everything we do. Our comprehensive approach
                  covers environmental stewardship, community development, and
                  sustainable business practices.
                </p>

                <div className="space-y-6">
                  <div className="bg-gray-900 rounded-lg p-6 shadow-md border-l-2 border-red-600">
                    <h4 className="text-lg font-semibold mb-2 text-amber-400">
                      2024 Annual Report Highlights
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-red-600 mr-2 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        30% reduction in carbon emissions since 2020 baseline
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-red-600 mr-2 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Over 75 community projects impacting 120,000+ lives
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-red-600 mr-2 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        90% of new products developed with sustainability
                        criteria
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-red-600 mr-2 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Achieved 35% reduction in plastic packaging waste
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-900 rounded-lg p-6 shadow-md border-l-2 border-red-600">
                    <h4 className="text-lg font-semibold mb-2 text-amber-400">
                      Awards & Recognition
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-amber-400 mr-2 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Best Sustainability Report - Asia Food Industry Awards
                        2024
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-amber-400 mr-2 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Green Factory Certification - 3 manufacturing facilities
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-amber-400 mr-2 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Corporate Social Responsibility Excellence Award 2024
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-gray-900 p-6 rounded-lg shadow-md mb-6">
                  <h4 className="text-lg font-semibold mb-4 text-amber-400">
                    Our Sustainability Framework
                  </h4>
                  {/* <img
                    src="/api/placeholder/500/300"
                    alt="Sustainability Framework"
                    className="w-full h-auto object-cover rounded-lg mb-4"
                  /> */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-4 bg-gray-800 rounded-lg">
                      <div className="text-red-600 text-2xl font-bold mb-2">
                        Planet
                      </div>
                      <p className="text-sm text-gray-300">
                        Environmental stewardship & resource efficiency
                      </p>
                    </div>
                    <div className="p-4 bg-gray-800 rounded-lg">
                      <div className="text-red-600 text-2xl font-bold mb-2">
                        People
                      </div>
                      <p className="text-sm text-gray-300">
                        Community engagement & social development
                      </p>
                    </div>
                    <div className="p-4 bg-gray-800 rounded-lg">
                      <div className="text-red-600 text-2xl font-bold mb-2">
                        Progress
                      </div>
                      <p className="text-sm text-gray-300">
                        Sustainable business practices & innovation
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold mb-4 text-amber-400">
                    UN Sustainable Development Goals
                  </h4>
                  <p className="mb-4 text-gray-300">
                    Our initiatives align with the following UN SDGs:
                  </p>
                  <div className="grid grid-cols-4 gap-2">
                    {[2, 6, 7, 8, 9, 12, 13, 17].map((goal) => (
                      <div
                        key={goal}
                        className="rounded-lg overflow-hidden border border-gray-700 transform transition-transform duration-300 hover:scale-110"
                      >
                        {/* <img
                          src={`/api/placeholder/100/100`}
                          alt={`SDG Goal ${goal}`}
                          className="w-full h-auto"
                        /> */}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-4">
                    Click on each goal to learn more about our related
                    initiatives.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Download Annual Report CTA */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-black rounded-lg p-8 shadow-xl border border-red-600">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2 text-amber-400">
                Download Our Full Sustainability Report
              </h3>
              <p className="text-gray-300">
                Get detailed insights into our sustainability journey, ESG
                metrics, and future commitments.
              </p>
            </div>
            <button className="px-8 py-3 bg-red-600 text-white font-medium rounded-lg shadow-md flex items-center transform transition-transform duration-300 hover:bg-red-700 hover:scale-105">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download 2024 Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
