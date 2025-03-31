import React from "react";
import {
  TrendingUp,
  Award,
  Settings,
  ClipboardList,
  AlertCircle,
  Info,
  CheckCircle,
  ChevronRight,
} from "lucide-react";

// Sample data
const productionData = {
  totalProduction: 12500,
  targetProduction: 15000,
  lastMonthProduction: 11800,
  percentageChange: 5.9,
};

const qualityData = {
  defectRate: 1.2,
  qualityScore: 97.8,
  inspectionsPassed: 982,
  inspectionsFailed: 18,
};

const maintenanceData = {
  plannedDowntime: 24,
  unplannedDowntime: 8,
  machineEfficiency: 92.5,
  maintenanceTickets: 7,
};

const orderData = {
  totalOrders: 145,
  pendingOrders: 38,
  completedOrders: 107,
  recentOrders: [
    {
      id: "ORD-7829",
      customer: "Acme Corp",
      value: 78500,
      status: "Completed",
      date: "28 Mar 2025",
    },
    {
      id: "ORD-7830",
      customer: "TechGiant Inc",
      value: 125000,
      status: "In Progress",
      date: "29 Mar 2025",
    },
    {
      id: "ORD-7831",
      customer: "Global Supplies",
      value: 47200,
      status: "Pending",
      date: "30 Mar 2025",
    },
    {
      id: "ORD-7832",
      customer: "Innovate Solutions",
      value: 92400,
      status: "In Progress",
      date: "31 Mar 2025",
    },
  ],
};

const upcomingEvents = [
  { id: 1, title: "Quality Audit", date: "2 Apr 2025", type: "Quality" },
  {
    id: 2,
    title: "Maintenance Schedule",
    date: "5 Apr 2025",
    type: "Maintenance",
  },
  { id: 3, title: "Client Meeting", date: "8 Apr 2025", type: "Sales" },
  { id: 4, title: "Team Training", date: "10 Apr 2025", type: "HR" },
];

function ManufacturingDashboard() {
  return (
    <div className="bg-gray-100 p-6">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Manufacturing Dashboard
        </h1>
      </header>

      {/* Dashboard Content */}
      <main>
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Production Status */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-700">Production</h3>
              <TrendingUp className="h-5 w-5 text-green-500" />
            </div>
            <p className="mt-2 text-3xl font-semibold text-gray-900">
              {productionData.totalProduction.toLocaleString()}
            </p>
            <div className="mt-1 flex items-center">
              <span className="text-sm text-green-600 font-medium">
                +{productionData.percentageChange}%
              </span>
              <span className="ml-2 text-sm text-gray-500">
                from last month
              </span>
            </div>
            <div className="mt-4 w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{
                  width: `${
                    (productionData.totalProduction /
                      productionData.targetProduction) *
                    100
                  }%`,
                }}
              ></div>
            </div>
            <p className="mt-1 text-xs text-gray-500">
              {Math.round(
                (productionData.totalProduction /
                  productionData.targetProduction) *
                  100
              )}
              % of target
            </p>
          </div>

          {/* Quality Metrics */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-700">Quality</h3>
              <Award className="h-5 w-5 text-blue-500" />
            </div>
            <p className="mt-2 text-3xl font-semibold text-gray-900">
              {qualityData.qualityScore}%
            </p>
            <div className="mt-1 flex items-center">
              <span className="text-sm text-gray-500">
                Defect rate: {qualityData.defectRate}%
              </span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="bg-green-50 rounded p-2 text-center">
                <span className="text-sm font-medium text-green-700">
                  {qualityData.inspectionsPassed}
                </span>
                <p className="text-xs text-green-600">Passed</p>
              </div>
              <div className="bg-red-50 rounded p-2 text-center">
                <span className="text-sm font-medium text-red-700">
                  {qualityData.inspectionsFailed}
                </span>
                <p className="text-xs text-red-600">Failed</p>
              </div>
            </div>
          </div>

          {/* Maintenance */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-700">Maintenance</h3>
              <Settings className="h-5 w-5 text-gray-500" />
            </div>
            <p className="mt-2 text-3xl font-semibold text-gray-900">
              {maintenanceData.machineEfficiency}%
            </p>
            <div className="mt-1 flex items-center">
              <span className="text-sm text-gray-500">Machine efficiency</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="bg-blue-50 rounded p-2 text-center">
                <span className="text-sm font-medium text-blue-700">
                  {maintenanceData.plannedDowntime}h
                </span>
                <p className="text-xs text-blue-600">Planned</p>
              </div>
              <div className="bg-amber-50 rounded p-2 text-center">
                <span className="text-sm font-medium text-amber-700">
                  {maintenanceData.unplannedDowntime}h
                </span>
                <p className="text-xs text-amber-600">Unplanned</p>
              </div>
            </div>
          </div>

          {/* Orders */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-700">Orders</h3>
              <ClipboardList className="h-5 w-5 text-indigo-500" />
            </div>
            <p className="mt-2 text-3xl font-semibold text-gray-900">
              {orderData.totalOrders}
            </p>
            <div className="mt-1 flex items-center">
              <span className="text-sm text-gray-500">Total active orders</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="bg-indigo-50 rounded p-2 text-center">
                <span className="text-sm font-medium text-indigo-700">
                  {orderData.pendingOrders}
                </span>
                <p className="text-xs text-indigo-600">Pending</p>
              </div>
              <div className="bg-green-50 rounded p-2 text-center">
                <span className="text-sm font-medium text-green-700">
                  {orderData.completedOrders}
                </span>
                <p className="text-xs text-green-600">Completed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Charts and Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Recent Orders */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-700">
                Recent Orders
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Order ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Customer
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Value
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orderData.recentOrders.map((order) => (
                    <tr key={order.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                        {order.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {order.customer}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        ${order.value.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${
                            order.status === "Completed"
                              ? "bg-green-100 text-green-800"
                              : order.status === "In Progress"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-amber-100 text-amber-800"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {order.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-gray-200">
              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center"
              >
                View all orders <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-700">
                Upcoming Events
              </h3>
            </div>
            <div className="p-6">
              <ul className="divide-y divide-gray-200">
                {upcomingEvents.map((event) => (
                  <li key={event.id} className="py-4 flex items-start">
                    <div className="mr-4 flex-shrink-0">
                      <div
                        className={`h-10 w-10 rounded-full flex items-center justify-center
                        ${
                          event.type === "Quality"
                            ? "bg-green-100 text-green-600"
                            : event.type === "Maintenance"
                            ? "bg-blue-100 text-blue-600"
                            : event.type === "Sales"
                            ? "bg-indigo-100 text-indigo-600"
                            : "bg-purple-100 text-purple-600"
                        }`}
                      >
                        {event.type.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {event.title}
                      </p>
                      <p className="text-sm text-gray-500">{event.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 border-t border-gray-200">
              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center"
              >
                View all events <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Alerts and Notifications */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-700">
              Alerts & Notifications
            </h3>
          </div>
          <div className="p-6">
            <div className="flex items-center p-4 mb-4 bg-yellow-50 rounded-lg">
              <AlertCircle className="h-5 w-5 text-yellow-400 mr-3" />
              <div>
                <p className="text-sm font-medium text-yellow-800">
                  Maintenance scheduled for Production Line 3
                </p>
                <p className="text-sm text-yellow-700">
                  Scheduled for 5 Apr 2025, 08:00 - 14:00
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 mb-4 bg-blue-50 rounded-lg">
              <Info className="h-5 w-5 text-blue-400 mr-3" />
              <div>
                <p className="text-sm font-medium text-blue-800">
                  Quality audit results available
                </p>
                <p className="text-sm text-blue-700">
                  March 2025 quality audit completed with 97.8% score
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-green-50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
              <div>
                <p className="text-sm font-medium text-green-800">
                  Order #ORD-7829 shipped successfully
                </p>
                <p className="text-sm text-green-700">
                  Delivered to Acme Corp on schedule
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ManufacturingDashboard;
