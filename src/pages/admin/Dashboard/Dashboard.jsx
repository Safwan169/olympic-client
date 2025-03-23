import React from 'react';
import { BarChart2, Users, ShoppingBag, FileText } from 'lucide-react';

const Dashboard = () => {
  return (
    <main className="flex-1 overflow-y-auto p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard</h2>
      
      {/* Dashboard Stats */}
      <StatsCards />
      
      {/* Recent Activity & Tasks Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity />
        <UpcomingTasks />
      </div>
    </main>
  );
};

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {/* Stat Card 1 */}
      <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow duration-300">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Total Revenue</p>
            <p className="text-2xl font-bold text-gray-900">$24,576</p>
          </div>
          <div className="p-3 rounded-full bg-green-100 text-green-500">
            <BarChart2 size={24} />
          </div>
        </div>
        <div className="mt-2">
          <span className="text-green-500 text-sm font-medium">+12.5%</span>
          <span className="text-gray-500 text-sm"> from last month</span>
        </div>
      </div>
      
      {/* Stat Card 2 */}
      <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow duration-300">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">New Customers</p>
            <p className="text-2xl font-bold text-gray-900">1,432</p>
          </div>
          <div className="p-3 rounded-full bg-blue-100 text-blue-500">
            <Users size={24} />
          </div>
        </div>
        <div className="mt-2">
          <span className="text-blue-500 text-sm font-medium">+8.2%</span>
          <span className="text-gray-500 text-sm"> from last month</span>
        </div>
      </div>
      
      {/* Stat Card 3 */}
      <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow duration-300">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Total Orders</p>
            <p className="text-2xl font-bold text-gray-900">3,859</p>
          </div>
          <div className="p-3 rounded-full bg-purple-100 text-purple-500">
            <ShoppingBag size={24} />
          </div>
        </div>
        <div className="mt-2">
          <span className="text-purple-500 text-sm font-medium">+5.7%</span>
          <span className="text-gray-500 text-sm"> from last month</span>
        </div>
      </div>
      
      {/* Stat Card 4 */}
      <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow duration-300">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Pending Tasks</p>
            <p className="text-2xl font-bold text-gray-900">42</p>
          </div>
          <div className="p-3 rounded-full bg-yellow-100 text-yellow-500">
            <FileText size={24} />
          </div>
        </div>
        <div className="mt-2">
          <span className="text-red-500 text-sm font-medium">+24.3%</span>
          <span className="text-gray-500 text-sm"> from last week</span>
        </div>
      </div>
    </div>
  );
};

const RecentActivity = () => {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="text-lg font-medium">Recent Activity</h3>
        <button className="text-sm text-blue-500 hover:text-blue-700">View All</button>
      </div>
      <div className="p-4">
        <ul className="space-y-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <li key={item} className="flex items-start">
              <div className="flex-shrink-0">
                <img 
                  src={`/api/placeholder/32/32`} 
                  alt="User" 
                  className="w-8 h-8 rounded-full"
                />
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-800">
                  <span className="font-medium">User {item}</span> 
                  {' '}completed task <span className="font-medium">Task #{item*11}</span>
                </p>
                <p className="text-xs text-gray-500">{item} hour{item !== 1 ? 's' : ''} ago</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const UpcomingTasks = () => {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="text-lg font-medium">Upcoming Tasks</h3>
        <button className="text-sm text-blue-500 hover:text-blue-700">View All</button>
      </div>
      <div className="p-4">
        <ul className="space-y-3">
          {[1, 2, 3, 4, 5].map((item) => (
            <li key={item} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md transition-colors duration-200">
              <div className="flex items-center">
                <input type="checkbox" className="mr-3" />
                <span className="text-sm">Complete project proposal #{item}</span>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                item % 3 === 0 ? 'bg-red-100 text-red-800' : 
                item % 3 === 1 ? 'bg-yellow-100 text-yellow-800' : 
                'bg-green-100 text-green-800'
              }`}>
                {item % 3 === 0 ? 'High' : item % 3 === 1 ? 'Medium' : 'Low'}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;