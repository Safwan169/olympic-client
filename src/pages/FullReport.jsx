import { useState } from 'react';
import { FaFilePdf, FaDownload, FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const reports = [
  {
    id: 1,
    year: '2020-2021',
    title: 'Integrated Educational Cultural Program Annual Report 2020',
    format: 'PDF',
    size: '0.40MB',
    date: '2021-06-10',
    link: '/reports/educational-program-2020.pdf',
  },
  {
    id: 2,
    year: '2020-2021',
    title: 'Sustainability Report FY 2020-2021',
    format: 'PDF',
    size: '0.57MB',
    date: '2021-08-12',
    link: '/reports/sustainability-2020-2021.pdf',
  },
  {
    id: 3,
    year: '2021-2022',
    title: 'Annual Financial Report 2021',
    format: 'PDF',
    size: '0.65MB',
    date: '2022-02-15',
    link: '/reports/financial-report-2021.pdf',
  },
  {
    id: 4,
    year: '2021-2022',
    title: 'Sustainability Report FY 2021-2022',
    format: 'PDF',
    size: '0.80MB',
    date: '2022-04-18',
    link: '/reports/sustainability-2021-2022.pdf',
  },
  {
    id: 5,
    year: '2022-2023',
    title: 'Corporate Social Responsibility Report 2022',
    format: 'PDF',
    size: '0.72MB',
    date: '2023-03-22',
    link: '/reports/csr-report-2022.pdf',
  },
  {
    id: 6,
    year: '2022-2023',
    title: 'Annual Financial Report 2022',
    format: 'PDF',
    size: '0.78MB',
    date: '2023-06-10',
    link: '/reports/financial-report-2022.pdf',
  },
  {
    id: 7,
    year: '2023-2024',
    title: 'Market Analysis Report 2023',
    format: 'PDF',
    size: '0.85MB',
    date: '2024-01-15',
    link: '/reports/market-analysis-2023.pdf',
  },
  {
    id: 8,
    year: '2023-2024',
    title: 'Sustainability Report FY 2023-2024',
    format: 'PDF',
    size: '0.95MB',
    date: '2024-02-10',
    link: '/reports/sustainability-2023-2024.pdf',
  },
];

const ITEMS_PER_PAGE = 4;

const FullReport = () => {
  const [search, setSearch] = useState('');
  const [yearFilter, setYearFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Get unique years for the filter dropdown
  const years = ['All', ...new Set(reports.map((report) => report.year))];

  // Filter and Search Logic
  const filteredReports = reports
    .filter((report) =>
      report.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((report) => (yearFilter === 'All' ? true : report.year === yearFilter))
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  // Pagination Logic
  const totalPages = Math.ceil(filteredReports.length / ITEMS_PER_PAGE);
  const currentReports = filteredReports.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="bg-[#121212] text-white min-h-screen px-6 py-12">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold tracking-wide">
          Full Reports
        </h1>
        <p className="text-gray-400 mt-2">
          Explore and download our latest reports.
        </p>
      </div>

      {/* Search & Filter */}
      <div className="flex justify-between items-center mb-8">
        {/* Search */}
        <input
          type="text"
          placeholder="Search reports..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-1/2 bg-[#1e1e1e] text-white border border-gray-700 px-4 py-2 rounded-md focus:outline-none focus:border-cc0000"
        />

        {/* Filter by Year */}
        <select
          value={yearFilter}
          onChange={(e) => setYearFilter(e.target.value)}
          className="bg-[#1e1e1e] text-white border border-gray-700 px-4 py-2 rounded-md focus:outline-none focus:border-cc0000"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Report List */}
      <div className="space-y-6">
        {currentReports.map((report) => (
          <div
            key={report.id}
            className="flex justify-between items-center bg-[#1e1e1e] rounded-lg p-5 shadow-lg hover:shadow-xl transition cursor-pointer"
          >
            {/* Left Side */}
            <div className="flex items-center gap-4">
              <FaFilePdf className="text-red-500 text-4xl" />
              <div>
                <h3 className="text-lg font-semibold">{report.title}</h3>
                <p className="text-sm text-gray-400">
                  Format: {report.format} | Size: {report.size} | Date: {report.date}
                </p>
              </div>
            </div>

            {/* Download Button */}
            <a
              href={report.link}
              download
              className="flex items-center gap-2 bg-cc0000 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              <FaDownload />
              Download
            </a>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md ${
            currentPage === 1 ? 'bg-gray-700 cursor-not-allowed' : 'bg-cc0000 hover:bg-red-600'
          }`}
        >
          <FaAngleLeft />
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-4 py-2 rounded-md ${
              currentPage === i + 1 ? 'bg-red-500' : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md ${
            currentPage === totalPages ? 'bg-gray-700 cursor-not-allowed' : 'bg-cc0000 hover:bg-red-600'
          }`}
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default FullReport;
