import { Home, Milestone, Newspaper, Trophy } from "lucide-react";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom

const links = [
  {
    to: "/dashboard",
    icon: <Home className="w-5 h-5 mr-3" />,
    label: "Dashboard",
  },
  {
    to: "/admin/achievement",
    icon: <Trophy className="w-5 h-5 mr-3" />,
    label: "Achievement",
  },
  {
    to: "/admin/milestone",
    icon: <Milestone className="w-5 h-5 mr-3" />,
    label: "Milestone",
  },
  {
    to: "/admin/news",
    icon: <Newspaper className="w-5 h-5 mr-3" />,
    label: "News",
  },
];

const Sidebar = ({ isOpen }) => {
  return (
    <div className="h-full bg-white text-gray-800 group shadow-lg">
      {/* Sidebar Header */}
      <div className="flex py-3.5 items-center justify-center border-b border-gray-200">
        <div className="text-lg font-semibold text-indigo-600">Olympic</div>
      </div>

      <div className="mt-4 px-6">
        {/* Menu Section */}
        <h2
          className={`text-gray-600 text-sm uppercase tracking-wider ${
            isOpen ? "block" : "hidden"
          }`}
        >
          Menu
        </h2>
        <ul className="space-y-4 mt-2">
          {links.slice(0, 2).map(({ to, icon, label }) => (
            <li
              key={to}
              className="flex items-center p-3 hover:bg-gray-200 hover:rounded-lg cursor-pointer"
            >
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `flex items-center text-sm ${
                    isActive ? "text-indigo-600" : "text-gray-800"
                  }`
                }
              >
                {icon}
                <span
                  className={`text-sm ${
                    isOpen ? "block" : "hidden"
                  } group-hover:block`}
                >
                  {label}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Apps Section */}
        <h2
          className={`text-gray-600 text-sm uppercase tracking-wider mt-6 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          Apps
        </h2>
        <ul className="space-y-4 mt-2">
          {links.slice(2).map(({ to, icon, label }) => (
            <li
              key={to}
              className="flex items-center p-3 hover:bg-gray-200 hover:rounded-lg cursor-pointer"
            >
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `flex items-center text-sm ${
                    isActive ? "text-indigo-600" : "text-gray-800"
                  }`
                }
              >
                {icon}
                <span
                  className={`text-sm ${
                    isOpen ? "block" : "hidden"
                  } group-hover:block`}
                >
                  {label}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
