/* eslint-disable no-unused-vars */
import { FaBullhorn, FaChartLine, FaUsers } from "react-icons/fa";

const StatsCard = ({ icon: Icon, value, label }) => {
  return (
    <div className="relative h-32 w-full sm:w-[300px] py-0 border border-gray-500 flex flex-col justify-end items-center rounded-lg">
      {/* Icon positioned at the top-center */}
      <div className="absolute -top-6 bg-gray-800 rounded-full px-2 py-2">
        <Icon className="text-4xl text-[#e3b8a0]" />
      </div>

      {/* Ensure full width for text container */}
      <div className="w-full text-center mt-12">
        <div className="space-y-1">
          <p className="text-2xl font-bold text-gray-300">{value}</p>
          <p className="text-sm text-gray-900 bg-slate-300 w-full text-center py-1 rounded-b-md font-bold block">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
};

const DesiredBrands = () => {
  return (
    <div className="bg-black text-white py-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-xl font-dancing sm:text-2xl md:text-4xl font-bold">
          Country’s Most
        </h2>
        <h1 className="text-3xl font-dancing sm:text-4xl md:text-6xl font-bold text-[#e3b8a0] my-2">
          Desired Brands
        </h1>

        <div className="stats-container mt-8">
          <div className="stats-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16  space-y-5 md:space-x-4 md:space-y-0 justify-center">
            <StatsCard
              icon={FaChartLine}
              value="BDT 3000"
              label="TURNOVER IN FY 23"
            />
            <StatsCard icon={FaBullhorn} value="70" label="BRANDS" />
            <StatsCard icon={FaUsers} value="8,000+" label="NO. OF EMPLOYEES" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesiredBrands;
