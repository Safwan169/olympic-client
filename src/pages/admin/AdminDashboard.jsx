import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../componants/Admin/Navbar";
import Sidebar from "../../componants/Admin/Sidebar";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar with dynamic width and hover effect */}
      <div
        className={`transition-all duration-300 group ${
          sidebarOpen ? "w-64" : "w-28"
        } hover:w-48`} // Hover effect to expand sidebar
      >
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar toggleSidebar={toggleSidebar} />
        <main className=" border-l border-l-gray-300 flex-1 overflow-y-auto bg-gray-800 text-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
