import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Directors and Sponsors', value: 32.38, color: '#4B3F3F' },
  { name: 'Institutions', value: 22.55, color: '#FF6B6B' },
  { name: 'Foreign Investors', value: 34.30, color: '#808080' },
  { name: 'General Public', value: 10.77, color: '#FF3B3B' },
];

const tableData = [
  { label: 'Authorized Capital', value: '৳ 2,000,000,000', bgColor: '#2E2E2E' },
  { label: '# of Shares Authorized', value: '200,000,000', bgColor: '#383838' },
  { label: 'Paid-Up Capital', value: '৳ 1,999,388,860', bgColor: '#505050' },
  { label: '# of Shares Issued', value: '199,938,886', bgColor: '#606060' },
  { label: 'Face Value per Share', value: '৳ 10.00', bgColor: '#808080' },
  { label: 'Market Lot', value: '1 Share', bgColor: '#E2725B' },
  { label: 'Sector (DSE Listing)', value: 'Food & Allied', bgColor: '#FA8072' },
  { label: 'Market Category', value: 'A', bgColor: '#FF6B6B' },
  { label: 'Year End', value: 'June 30', bgColor: '#FF4C4C' },
  { label: 'Year of Listing (DSE)', value: '1989', bgColor: '#FF3333' },
];

const ShareStructure = () => {
  return (
    <div className="bg-[#121212] text-white min-h-screen px-6 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">SHARE STRUCTURE</h1>
        <p className="text-md text-gray-400 mt-2">
          SHAREHOLDING PATTERN AS ON <span className="text-red-500">DEC 31, 2024</span>
        </p>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Pie Chart Section */}
        <div className="flex justify-center">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={120}
              innerRadius={60}
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              iconSize={10}
              layout="horizontal"
              align="center"
              verticalAlign="bottom"
            />
          </PieChart>
        </div>

        {/* Table Section */}
        <div>
          <table className="w-full text-left">
            <tbody>
              {tableData.map((row, index) => (
                <tr
                  key={index}
                  className="transition hover:scale-105"
                  style={{
                    backgroundColor: row.bgColor,
                    color: index < 5 ? '#ffffff' : '#000000',
                  }}
                >
                  <td className="py-3 px-4 font-semibold border-b border-gray-600">
                    {row.label}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-600">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Shareholding Pattern Legend */}
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-gray-400">
              {item.name} <span className="text-white font-semibold">{item.value}%</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShareStructure;
