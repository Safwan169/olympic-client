import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  Home,
  Users,
  BarChart2,
  FileText,
  Star,
  Image,
  Phone,
  LogOut,
  Newspaper,
  StickyNote,
  Briefcase,
  ShoppingBasket,
} from "lucide-react";
import useHandleLogout from "../../hooks/useHandleLogout";

const Sidebar = ({
  sidebarOpen,
  setActiveMenu,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const { handleLogout } = useHandleLogout();

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <Home size={20} />,
      path: "/admin/dashboard",
    },
    {
      id: "milestone",
      label: "Milestone",
      icon: <BarChart2 size={20} />,
      path: "/admin/milestone",
    },
    {
      id: "product",
      label: "Product",
      icon: <ShoppingBasket size={20} />,
      path: "/admin/product",
    },
    {
      id: "job-post",
      label: "Job Post",
      icon: <Briefcase size={20} />,
      path: "/admin/job-post",
    },
    {
      id: "activity",
      label: "Activity",
      icon: <FileText size={20} />,
      path: "/admin/activity",
    },
    {
      id: "achievement",
      label: "Achievement",
      icon: <Star size={20} />,
      path: "/admin/achievement",
    },
    {
      id: "banner",
      label: "Banner",
      icon: <Image size={20} />,
      path: "/admin/banner",
    },
    {
      id: "contact",
      label: "Contact",
      icon: <Phone size={20} />,
      path: "/admin/contact",
    },
    {
      id: "leadership",
      label: "Leadership",
      icon: <Users size={20} />,
      path: "/admin/leadership",
    },
    {
      id: "news",
      label: "News",
      icon: <Newspaper size={20} />,
      path: "/admin/news",
    },
  ];

  return (
    <div
      className={`bg-white border-r text-gray-700 transition-all duration-500 ease-in-out h-screen flex flex-col ${
        sidebarOpen ? "w-64" : "w-20"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)" }}
    >
      {/* Sticky Header */}
      <div className="sticky top-0 z-10 bg-white border-b p-4 flex items-center justify-between">
        <h1
          className={`text-xl font-bold whitespace-nowrap overflow-hidden transition-opacity duration-300 ${
            sidebarOpen ? "opacity-100" : "opacity-0 w-0"
          }`}
        >
          <Link to="/">Olympic BD</Link>
        </h1>
        <button className="p-1 rounded-md hover:bg-gray-100">
          <Menu size={24} />
        </button>
      </div>

      {/* Scrollable Menu */}
      <div className="flex-1 overflow-y-auto">
        <nav className="mt-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) => `
                flex items-center px-4 py-3 transition-all duration-300 ease-in-out 
                ${
                  isActive
                    ? "bg-blue-50 text-blue-600 border-r-4 border-blue-500"
                    : "text-gray-600 hover:bg-gray-100"
                }
              `}
              onClick={() => setActiveMenu(item.id)}
            >
              <div
                className={`transition-all duration-300 ease-in-out ${
                  sidebarOpen ? "mr-3" : "mx-auto"
                }`}
              >
                {item.icon}
              </div>
              <span
                className={`whitespace-nowrap transition-all duration-300 ${
                  sidebarOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
                }`}
              >
                {item.label}
              </span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Logout Button */}
      <div className="p-4 border-t">
        <button
          onClick={handleLogout}
          className="w-full flex items-center px-4 py-2 text-red-600 hover:bg-red-50 rounded-md transition"
        >
          <div
            className={`transition-all duration-300 ease-in-out ${
              sidebarOpen ? "mr-3" : "mx-auto"
            }`}
          >
            <LogOut size={20} />
          </div>
          <span
            className={`whitespace-nowrap transition-all duration-300 ${
              sidebarOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
            }`}
          >
            Logout
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
