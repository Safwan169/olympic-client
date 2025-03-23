import { useEffect, useState } from 'react';

const Overview = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 200);
  }, []);

  return (
    <div className="flex justify-center items-center bg-[#121212] min-h-screen">
      <svg
        viewBox="0 0 600 600"
        width="90%"
        height="90%"
        className={`transition-all duration-1000 ${
          loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        {/* Outer Circle - Planet */}
        <circle
          cx="300"
          cy="300"
          r="270"
          stroke="url(#planetGradient)"
          strokeWidth="2"
          fill="none"
          className="transition-all duration-300 hover:scale-105"
        />
        <text x="75" y="120" fill="#3c803e" fontSize="16" fontWeight="bold">
          Planet
        </text>

        <defs>
          <linearGradient id="planetGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3c803e" />
            <stop offset="100%" stopColor="#8fc08f" />
          </linearGradient>
        </defs>

        {/* Country Circle */}
        <circle
          cx="300"
          cy="300"
          r="200"
          stroke="#8e8e8e"
          strokeWidth="2"
          fill="none"
          className="transition-all duration-300 hover:scale-105"
        />
        <text x="150" y="180" fill="#8e8e8e" fontSize="16" fontWeight="bold">
          Country
        </text>

        {/* Community Circle */}
        <circle
          cx="300"
          cy="300"
          r="150"
          stroke="#3b73af"
          strokeWidth="2"
          fill="none"
          className="transition-all duration-300 hover:scale-105"
        />
        <text x="180" y="230" fill="#3b73af" fontSize="16" fontWeight="bold">
          Community
        </text>

        {/* Consumers Circle */}
        <circle
          cx="230"
          cy="370"
          r="70"
          stroke="url(#consumerGradient)"
          strokeWidth="2"
          fill="none"
          className="transition-all duration-300 hover:scale-110"
        />
        <text x="180" y="380" fill="#d2691e" fontSize="16" fontWeight="bold">
          Consumers
        </text>

        <defs>
          <linearGradient id="consumerGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#d2691e" />
            <stop offset="100%" stopColor="#ffad60" />
          </linearGradient>
        </defs>

        {/* Workers and Staff Circle */}
        <circle
          cx="300"
          cy="300"
          r="100"
          stroke="url(#staffGradient)"
          strokeWidth="2"
          fill="none"
          className="transition-all duration-300 hover:scale-110"
        />
        <text x="280" y="290" fill="#ff3b3b" fontSize="16" fontWeight="bold">
          Workers & Staff
        </text>

        <defs>
          <linearGradient id="staffGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff3b3b" />
            <stop offset="100%" stopColor="#ff8080" />
          </linearGradient>
        </defs>

        {/* Olympic Logo */}
        <rect
          x="270"
          y="300"
          width="60"
          height="30"
          fill="#ff3b3b"
          rx="5"
          className="transition-all duration-300 hover:scale-105"
          style={{
            boxShadow: '0px 4px 8px rgba(0,0,0,0.3)',
          }}
        />
        <text
          x="280"
          y="320"
          fill="white"
          fontSize="14"
          fontWeight="bold"
          textAnchor="left"
        >
          Olympic
        </text>

        {/* Neighbours of Workers */}
        <text x="350" y="250" fill="#8e8e8e" fontSize="14">
          Neighbours of workers
        </text>

        {/* Families of Workers */}
        <text x="320" y="270" fill="#8e8e8e" fontSize="14">
          Families of workers
        </text>

        {/* Investors Circle */}
        <circle
          cx="420"
          cy="350"
          r="40"
          stroke="#87a8d0"
          strokeWidth="2"
          fill="none"
          className="transition-all duration-300 hover:scale-105"
        />
        <text x="410" y="350" fill="#87a8d0" fontSize="14">
          Investors
        </text>

        {/* Suppliers Circle */}
        <circle
          cx="460"
          cy="380"
          r="50"
          stroke="#8e8e8e"
          strokeWidth="2"
          fill="none"
          className="transition-all duration-300 hover:scale-105"
        />
        <text x="445" y="385" fill="#8e8e8e" fontSize="14">
          Suppliers
        </text>
      </svg>
    </div>
  );
};

export default Overview;
