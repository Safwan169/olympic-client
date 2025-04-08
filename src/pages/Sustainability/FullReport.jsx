import { useState } from 'react';

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

const ReportCard = ({ report }) => {
  return (
    <div className="bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-800 hover:border-red-600 transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="hidden md:block">
            <div className="bg-gray-800 p-3 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center">
              <span className="text-xs font-semibold px-2 py-1 rounded bg-red-900 text-red-200">{report.year}</span>
            </div>
            <h3 className="text-lg font-semibold mt-2 text-gray-100">{report.title}</h3>
            <div className="mt-2 flex flex-wrap gap-x-4 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                {report.format}
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                {report.size}
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                {report.date}
              </span>
            </div>
          </div>
        </div>
        <a
          href={report.link}
          download
          className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-red-700 text-gray-100 px-4 py-2 rounded-md transition-colors duration-200 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-y-1 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 12.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 13.586V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Download
        </a>
      </div>
    </div>
  );
};

const PaginationButton = ({ children, active, disabled, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center w-10 h-10 rounded-md transition-colors duration-200 ${
        active 
          ? 'bg-red-600 text-white' 
          : disabled 
            ? 'bg-gray-800 text-gray-600 cursor-not-allowed' 
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
      }`}
    >
      {children}
    </button>
  );
};

const NoReportsFound = () => (
  <div className="py-12 text-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <h3 className="mt-4 text-xl font-medium text-gray-400">No reports found</h3>
    <p className="mt-2 text-gray-500">Try adjusting your search or filter criteria</p>
  </div>
);

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
  const totalPages = Math.max(1, Math.ceil(filteredReports.length / ITEMS_PER_PAGE));
  const currentReports = filteredReports.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Reset to page 1 when filters change
  const handleFilterChange = (newYearFilter) => {
    setYearFilter(newYearFilter);
    setCurrentPage(1);
  };

  const handleSearchChange = (newSearch) => {
    setSearch(newSearch);
    setCurrentPage(1);
  };

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Publications & Reports
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Access and download our comprehensive collection of reports and publications.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="mb-8 bg-gray-900 p-4 rounded-lg border border-gray-800">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search reports..."
                value={search}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full bg-gray-800 text-white pl-10 pr-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Filter by Year */}
            <div className="w-full md:w-48">
              <select
                value={yearFilter}
                onChange={(e) => handleFilterChange(e.target.value)}
                className="w-full bg-gray-800 text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none transition-all duration-200"
                style={{ 
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundPosition: 'right 0.5rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '1.5em 1.5em',
                  paddingRight: '2.5rem'
                }}
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Report List */}
        <div className="space-y-4 mb-8">
          {currentReports.length > 0 ? (
            currentReports.map((report) => (
              <ReportCard key={report.id} report={report} />
            ))
          ) : (
            <NoReportsFound />
          )}
        </div>

        {/* Pagination */}
        {filteredReports.length > 0 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <PaginationButton
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M9.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </PaginationButton>
            <PaginationButton
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </PaginationButton>
            
            <div className="px-4 text-sm text-gray-400">
              Page <span className="font-medium text-white">{currentPage}</span> of{" "}
              <span className="font-medium text-white">{totalPages}</span>
            </div>
            
            <PaginationButton
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </PaginationButton>
            <PaginationButton
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </PaginationButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default FullReport;