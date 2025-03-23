import React, { useState } from 'react';
import Sidebar from '../../componants/Admin/Sidebar'
import Header from '../../componants/Admin/Navbar'
import { Outlet } from 'react-router-dom';



const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('dashboard');
  
  // Mock user data
  const user = {
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    avatar: "/api/placeholder/40/40"
  };

  const handleMouseEnter = () => {
    setSidebarOpen(true);
  };

  const handleMouseLeave = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <Header user={user} />
        
      
      <div className='p-5'>
      <Outlet />
      </div>
      </div>
    </div>
  );
};

export default AdminDashboard;