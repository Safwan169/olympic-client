import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  Bell, 
  Mail, 
  User, 
  Settings, 
  LogOut, 
  ChevronDown
} from 'lucide-react';

const Header = ({ user }) => {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    }
    
    // Add event listener when dropdown is open
    if (profileDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    
    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [profileDropdownOpen]);

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  const handleLogout = () => {
    alert("Logging out...");
    // Implement logout logic here
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100 relative">
            <Bell size={20} />
            <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">3</span>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 relative">
            <Mail size={20} />
            <span className="absolute top-0 right-0 h-4 w-4 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center">5</span>
          </button>
          
          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={toggleProfileDropdown}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <img 
                src={user.avatar} 
                alt="Profile" 
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm font-medium hidden md:block">{user.name}</span>
              <ChevronDown size={16} className="hidden md:block" />
            </button>
            
            {profileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 animate-fadeIn">
                <div className="px-4 py-2 border-b">
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
                
                <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <User size={16} className="mr-2" />
                  Profile
                </a>
                
                <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <Settings size={16} className="mr-2" />
                  Settings
                </a>
                
                <button 
                  onClick={handleLogout}
                  className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  <LogOut size={16} className="mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;