import { FaCheckCircle, FaChevronRight } from 'react-icons/fa';
import bgImage from '../assets/cookieBG.jpg';

const CorporateGovernance = () => {
  return (
    <div className="bg-[#121212] text-white min-h-screen px-6 py-12">
      {/* Header Section */}
      <div
        className="relative w-full h-72 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center justify-center">
          <h1 className="text-4xl font-bold tracking-wide animate-fade-in">Corporate Governance</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto py-12 space-y-10 animate-fade-in">
        {/* Code of Conduct */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Code of Conduct
          </h2>
          <ul className="space-y-3">
            {[
              'Put the interests of the company and stakeholders above all others.',
              'Exercise due diligence, fiscal prudence, and fiduciary responsibilities.',
              'Maintain confidentiality of company information.',
              'Ensure compliance with all laws, rules, and regulations.',
              'Avoid undue favors, conflicts of interest, and misuse of company property.',
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-400 hover:text-white transition duration-300"
              >
                <FaCheckCircle className="text-cc0000 mt-1" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Chairman of the Board */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Chairman of the Board
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Mr. Aziz Mohammad Bhai has been Chairman of Olympic Industries Limited since July 23, 2023. 
            He ensures that the Board operates smoothly and effectively.
          </p>
          <h3 className="text-lg font-semibold mb-2">Responsibilities:</h3>
          <ul className="space-y-2">
            {[
              'Preside over Board meetings and ensure active participation.',
              'Resolve disagreements and align decisions harmoniously.',
              'Support and guide the Managing Director.',
              'Ensure Board Committees are functioning properly.',
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-400 hover:text-white transition duration-300"
              >
                <FaChevronRight className="text-cc0000 mt-1" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Managing Director */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Managing Director
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            The Managing Director acts as the CEO, implementing Board decisions and managing company operations.
          </p>
          <h3 className="text-lg font-semibold mb-2">Responsibilities:</h3>
          <ul className="space-y-2">
            {[
              'Set strategic goals and lead key management to achieve them.',
              'Secure funding and execute business plans.',
              'Maintain effective communication with stakeholders.',
              'Control costs, improve efficiency, and oversee risk management.',
              'Ensure company performance meets stakeholder expectations.',
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-400 hover:text-white transition duration-300"
              >
                <FaChevronRight className="text-cc0000 mt-1" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Other Board Members */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Other Board Members
          </h2>
          <h3 className="text-lg font-semibold mb-2">Roles:</h3>
          <ul className="space-y-2">
            {[
              'Define company vision, mission, and values.',
              'Develop business strategies and oversee execution.',
              'Delegate responsibilities and maintain internal controls.',
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-400 hover:text-white transition duration-300"
              >
                <FaChevronRight className="text-cc0000 mt-1" />
                {item}
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">Responsibilities:</h3>
          <ul className="space-y-2">
            {[
              'Attend meetings and contribute to strategic decisions.',
              'Act in the best interest of the company and stakeholders.',
              'Maintain confidentiality and avoid conflicts of interest.',
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-400 hover:text-white transition duration-300"
              >
                <FaChevronRight className="text-cc0000 mt-1" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Composition of the Board */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Composition of the Board
          </h2>
          <p className="text-gray-400">
            Olympic’s Board of Directors is comprised of **9 Directors**, including two Independent Directors.
            The Chairman and Managing Director are separate individuals as part of the governance structure.
          </p>
        </section>

        {/* Learn More */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Learn More
          </h2>
          <p className="text-gray-400">
            For more details on Olympic Industries' corporate governance policies and board structure, visit:
            <a
              href="https://olympicbd.com/sustainability/overview/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cc0000 underline hover:text-red-600 transition"
            >
              Olympic Industries Corporate Governance Overview
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default CorporateGovernance;
