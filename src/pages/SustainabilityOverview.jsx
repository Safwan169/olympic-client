const SustainabilityOverview = () => {
    return (
      <div className="bg-[#121212] text-white min-h-screen px-6 py-12">
        {/* Header Section */}
        <div
          className="relative w-full h-72 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://olympicbd.com/wp-content/uploads/2022/05/CSR-Image.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl font-bold tracking-wide">Sustainability Overview</h1>
          </div>
        </div>
  
        {/* Content Section */}
        <div className="max-w-5xl mx-auto py-12 space-y-10">
          {/* Section 1: Introduction */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Our Commitment
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Olympic Industries is dedicated to improving the lives of workers and communities
              through sustainable business practices. We align our initiatives with the
              <span className="text-cc0000 font-semibold"> United Nations Sustainable Development Goals (SDGs)</span>.
              Our focus areas include health & nutrition, education, climate action, and gender equity.
            </p>
          </section>
  
          {/* Section 2: Key Focus Areas */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Key Focus Areas
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-cc0000 rounded-full"></span>
                <p>
                  <span className="font-semibold">Health & Nutrition:</span> Providing access to healthcare
                  and promoting better nutrition in local communities.
                </p>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-cc0000 rounded-full"></span>
                <p>
                  <span className="font-semibold">Education:</span> Supporting educational programs and
                  providing resources to improve learning outcomes.
                </p>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-cc0000 rounded-full"></span>
                <p>
                  <span className="font-semibold">Climate Action:</span> Reducing our environmental
                  footprint and investing in renewable energy.
                </p>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-cc0000 rounded-full"></span>
                <p>
                  <span className="font-semibold">Gender Equity:</span> Creating equal opportunities for
                  women and empowering female leaders.
                </p>
              </li>
            </ul>
          </section>
  
          {/* Section 3: Our Impact */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Our Impact
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Through our sustainability efforts, we have positively impacted thousands of lives.
              Our commitment to ethical business practices ensures long-term success for both
              the company and the communities we serve.
            </p>
          </section>
  
          {/* Section 4: Get More Information */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Learn More
            </h2>
            <p className="text-gray-400">
              For detailed insights and full reports on our sustainability projects, visit our
              official website:
              <a
                href="https://olympicbd.com/sustainability/overview/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cc0000 underline hover:text-red-600 transition"
              >
                Olympic Industries Sustainability Overview
              </a>
            </p>
          </section>
        </div>
      </div>
    );
  };
  
  export default SustainabilityOverview;
  