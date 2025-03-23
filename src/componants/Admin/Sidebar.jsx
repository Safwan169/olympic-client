import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Menu,
  Home, 
  ShoppingBag, 
  Users, 
  BarChart2, 
  FileText, 
  Settings, 
  HelpCircle
} from 'lucide-react';

const Sidebar = ({ sidebarOpen, setActiveMenu, handleMouseEnter, handleMouseLeave }) => {
  // Sidebar menu items with routes
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} />, path: '/admin/dashboard' },
    { id: 'milestone', label: 'Milestone', icon: <ShoppingBag size={20} />, path: '/admin/milestone' },
    { id: 'customers', label: 'Customers', icon: <Users size={20} />, path: '/customers' },
    { id: 'analytics', label: 'Analytics', icon: <BarChart2 size={20} />, path: '/analytics' },
    { id: 'reports', label: 'Reports', icon: <FileText size={20} />, path: '/reports' },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} />, path: '/settings' },
    { id: 'help', label: 'Help', icon: <HelpCircle size={20} />, path: '/help' },
  ];

  return (
    <div 
      className={`bg-white border-r text-gray-700 transition-all duration-500 ease-in-out ${sidebarOpen ? 'w-64' : 'w-20'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <h1 className={`text-xl font-bold whitespace-nowrap overflow-hidden transition-opacity duration-300 ${sidebarOpen ? 'opacity-100' : 'opacity-0 w-0'}`}>
          Admin Panel
        </h1>
        <button className="p-1 rounded-md hover:bg-gray-100">
          <Menu size={24} />
        </button>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) => `
              flex items-center px-4 py-3 transition-all duration-300 ease-in-out 
              ${isActive 
                ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-500' 
                : 'text-gray-600 hover:bg-gray-100'
              }
            `}
            onClick={() => setActiveMenu(item.id)}
          >
            <div className={`transition-all duration-300 ease-in-out ${sidebarOpen ? 'mr-3' : 'mx-auto'}`}>
              {item.icon}
            </div>
            <span className={`whitespace-nowrap transition-all duration-300 ${sidebarOpen ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
              {item.label}
            </span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;