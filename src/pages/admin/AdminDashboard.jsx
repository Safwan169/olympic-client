import React, { useState } from "react";
import Sidebar from "../../componants/Admin/Sidebar";
import Header from "../../componants/Admin/Navbar";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const user = {
    name: "Olympic Admin",
    email: "admin@gmail.com",
    role: "Admin",
    avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  };

  const handleMouseEnter = () => setSidebarOpen(true);
  const handleMouseLeave = () => setSidebarOpen(false);

  const sidebarWidth = sidebarOpen ? 256 : 80; // 64 * 4 = 256px, 20 * 4 = 80px

  return (
    <div className="h-screen overflow-hidden relative">
      {/* Sidebar */}
      <div
        className="fixed top-0 left-0 h-screen z-50 transition-all duration-300"
        style={{ width: `${sidebarWidth}px` }}
      >
        <Sidebar
          sidebarOpen={sidebarOpen}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
      </div>

      {/* Main content */}
      <div
        className="h-screen flex flex-col transition-all duration-300"
        style={{ marginLeft: `${sidebarWidth}px` }}
      >
        <Header user={user} />
        <main className="flex-1 overflow-y-auto p-6 bg-gray-200">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
