import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  Bell,
  Mail,
  User,
  Settings,
  LogOut,
  CircleUserRound,
  Menu,
  X,
  Moon,
  Sun,
  HelpCircle,
  BarChart2,
  Grid,
  Home,
} from "lucide-react";
import useHandleLogout from "../../hooks/useHandleLogout";

const Header = ({ user, toggleSidebar, sidebarOpen }) => {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [messagesOpen, setMessagesOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const dropdownRef = useRef(null);
  const notificationsRef = useRef(null);
  const messagesRef = useRef(null);
  const { handleLogout } = useHandleLogout();

  // Handle outside clicks for all dropdowns
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target)
      ) {
        setNotificationsOpen(false);
      }
      if (messagesRef.current && !messagesRef.current.contains(event.target)) {
        setMessagesOpen(false);
      }
    }

    if (profileDropdownOpen || notificationsOpen || messagesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [profileDropdownOpen, notificationsOpen, messagesOpen]);

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
    setNotificationsOpen(false);
    setMessagesOpen(false);
  };

  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen);
    setProfileDropdownOpen(false);
    setMessagesOpen(false);
  };

  const toggleMessages = () => {
    setMessagesOpen(!messagesOpen);
    setProfileDropdownOpen(false);
    setNotificationsOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Mock notification and message data
  const notifications = [
    { id: 1, title: "New user registered", time: "2 min ago", read: false },
    { id: 2, title: "Sales report updated", time: "1 hour ago", read: false },
    { id: 3, title: "New comment on post", time: "3 hours ago", read: true },
  ];

  const messages = [
    {
      id: 1,
      sender: "Alex Johnson",
      content: "When will the update be ready?",
      time: "5 min ago",
      avatar: null,
      read: false,
    },
    {
      id: 2,
      sender: "Maria Garcia",
      content: "Please check the latest report",
      time: "2 hours ago",
      avatar: null,
      read: false,
    },
    {
      id: 3,
      sender: "David Kim",
      content: "Meeting rescheduled to 3pm",
      time: "1 day ago",
      avatar: null,
      read: false,
    },
    {
      id: 4,
      sender: "Sarah Wilson",
      content: "Approved your request",
      time: "2 days ago",
      avatar: null,
      read: true,
    },
  ];

  return (
    <div className="sticky top-0">
      <header
        className={`${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
        } shadow-md w-full z-20 transition-colors duration-300`}
      >
        <div className="flex items-center justify-between px-4 py-3 lg:px-6 max-w-screen-2xl mx-auto">
          {/* Left: Logo and hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleSidebar}
              className={`p-2 rounded-lg ${
                darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
              } transition-colors lg:hidden`}
              aria-label="Toggle sidebar"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <div className="hidden lg:flex items-center gap-1">
              <span className="font-bold text-xl text-blue-600">Admin</span>
              <span className="font-bold text-xl">Panel</span>
            </div>

            {/* Quick Navigation */}
            <div className="hidden md:flex items-center gap-1 ml-4">
              <button
                className={`p-2 rounded-lg ${
                  darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
                } transition-colors`}
              >
                <Home size={18} />
              </button>
              <button
                className={`p-2 rounded-lg ${
                  darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
                } transition-colors`}
              >
                <BarChart2 size={18} />
              </button>
              <button
                className={`p-2 rounded-lg ${
                  darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
                } transition-colors`}
              >
                <Grid size={18} />
              </button>
            </div>
          </div>

          {/* Middle: Search */}
          <div className="relative w-full max-w-md mx-4 hidden sm:block">
            <Search
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
              size={18}
            />
            <input
              type="text"
              placeholder="Search dashboard..."
              className={`w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                darkMode
                  ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  : "bg-gray-100 border-transparent text-gray-800 placeholder-gray-500"
              }`}
            />
          </div>

          {/* Right: Icons and Profile */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${
                darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
              } transition-colors`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Help */}
            <button
              className={`p-2 rounded-lg ${
                darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
              } transition-colors hidden sm:flex`}
            >
              <HelpCircle size={20} />
            </button>

            {/* Notification Bell */}
            <div className="relative" ref={notificationsRef}>
              <button
                onClick={toggleNotifications}
                className={`p-2 rounded-lg ${
                  darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
                } transition-colors relative`}
                aria-label="Notifications"
              >
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                  {notifications.filter((n) => !n.read).length}
                </span>
              </button>

              {/* Notifications Dropdown */}
              {notificationsOpen && (
                <div
                  className={`absolute right-0 mt-3 w-80 rounded-xl shadow-xl z-30 overflow-hidden border animate-fadeIn ${
                    darkMode
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-100"
                  }`}
                >
                  <div
                    className={`px-4 py-3 flex justify-between items-center ${
                      darkMode ? "border-b border-gray-700" : "border-b"
                    }`}
                  >
                    <p className="font-semibold">Notifications</p>
                    <button className="text-xs text-blue-500 hover:underline">
                      Mark all as read
                    </button>
                  </div>

                  <div className="max-h-96 overflow-y-auto">
                    {notifications.length > 0 ? (
                      notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`px-4 py-3 flex items-start gap-3 ${
                            notification.read
                              ? ""
                              : darkMode
                              ? "bg-gray-700/50"
                              : "bg-blue-50/50"
                          } ${
                            darkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"
                          } transition-colors cursor-pointer`}
                        >
                          <div
                            className={`mt-1 p-2 rounded-full ${
                              notification.read ? "bg-gray-200" : "bg-blue-100"
                            }`}
                          >
                            <Bell
                              size={16}
                              className={
                                notification.read
                                  ? "text-gray-500"
                                  : "text-blue-500"
                              }
                            />
                          </div>
                          <div>
                            <p
                              className={`text-sm ${
                                darkMode ? "text-white" : "text-gray-800"
                              }`}
                            >
                              {notification.title}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {notification.time}
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-4 text-center text-gray-500 text-sm">
                        No notifications
                      </div>
                    )}
                  </div>

                  <div
                    className={`px-4 py-2 text-center ${
                      darkMode ? "border-t border-gray-700" : "border-t"
                    }`}
                  >
                    <a
                      href="#"
                      className="text-sm text-blue-500 hover:underline"
                    >
                      View all notifications
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Messages */}
            <div className="relative" ref={messagesRef}>
              <button
                onClick={toggleMessages}
                className={`p-2 rounded-lg ${
                  darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
                } transition-colors relative`}
                aria-label="Messages"
              >
                <Mail size={20} />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center">
                  {messages.filter((m) => !m.read).length}
                </span>
              </button>

              {/* Messages Dropdown */}
              {messagesOpen && (
                <div
                  className={`absolute right-0 mt-3 w-80 rounded-xl shadow-xl z-30 overflow-hidden border animate-fadeIn ${
                    darkMode
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-100"
                  }`}
                >
                  <div
                    className={`px-4 py-3 flex justify-between items-center ${
                      darkMode ? "border-b border-gray-700" : "border-b"
                    }`}
                  >
                    <p className="font-semibold">Messages</p>
                    <button className="text-xs text-blue-500 hover:underline">
                      Mark all as read
                    </button>
                  </div>

                  <div className="max-h-96 overflow-y-auto">
                    {messages.length > 0 ? (
                      messages.map((message) => (
                        <div
                          key={message.id}
                          className={`px-4 py-3 flex items-start gap-3 ${
                            message.read
                              ? ""
                              : darkMode
                              ? "bg-gray-700/50"
                              : "bg-blue-50/50"
                          } ${
                            darkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"
                          } transition-colors cursor-pointer`}
                        >
                          <div className="flex-shrink-0">
                            {message.avatar ? (
                              <img
                                src={message.avatar}
                                alt={message.sender}
                                className="w-10 h-10 rounded-full"
                              />
                            ) : (
                              <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                  darkMode ? "bg-gray-700" : "bg-blue-100"
                                }`}
                              >
                                <span
                                  className={`text-sm font-medium ${
                                    darkMode ? "text-white" : "text-blue-600"
                                  }`}
                                >
                                  {message.sender
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-baseline">
                              <p
                                className={`text-sm font-medium truncate ${
                                  darkMode ? "text-white" : "text-gray-800"
                                }`}
                              >
                                {message.sender}
                              </p>
                              <p className="text-xs text-gray-500 ml-2 whitespace-nowrap">
                                {message.time}
                              </p>
                            </div>
                            <p
                              className={`text-xs mt-1 truncate ${
                                darkMode ? "text-gray-300" : "text-gray-600"
                              }`}
                            >
                              {message.content}
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-4 text-center text-gray-500 text-sm">
                        No messages
                      </div>
                    )}
                  </div>

                  <div
                    className={`px-4 py-2 text-center ${
                      darkMode ? "border-t border-gray-700" : "border-t"
                    }`}
                  >
                    <a
                      href="#"
                      className="text-sm text-blue-500 hover:underline"
                    >
                      View all messages
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleProfileDropdown}
                className={`flex items-center  space-x-2 p-1 rounded-full ${
                  darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
                } transition-colors`}
                aria-label="User menu"
              >
                {user.avatar ? (
                  // <img
                  //   src={user.avatar}
                  //   alt="Profile"
                  //   className="w-8 h-8 rounded-full object-cover border-2 border-blue-500"
                  // />
                  <CircleUserRound />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    {user.name?.charAt(0) || <CircleUserRound size={20} />}
                  </div>
                )}
              </button>

              {/* Dropdown */}
              {profileDropdownOpen && (
                <div
                  className={`absolute right-0 mt-3  w-60 rounded-xl shadow-xl z-30 overflow-hidden border animate-fadeIn ${
                    darkMode
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-100"
                  }`}
                >
                  <div
                    className={`px-4 py-4 ${
                      darkMode ? "border-b border-gray-700" : "border-b"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {user.avatar ? (
                        <img
                          src={user.avatar}
                          alt="Profile"
                          className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg font-semibold">
                          {user.name?.charAt(0) || (
                            <CircleUserRound size={24} />
                          )}
                        </div>
                      )}
                      <div>
                        <p
                          className={`font-semibold ${
                            darkMode ? "text-white" : "text-gray-800"
                          }`}
                        >
                          {user.name}
                        </p>
                        <p className="text-xs text-gray-500 truncate max-w-[180px]">
                          {user.email}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <div
                        className={`p-2 rounded-lg ${
                          darkMode ? "bg-gray-700" : "bg-gray-100"
                        } text-center`}
                      >
                        <p className="text-xs text-gray-500">Role</p>
                        <p
                          className={`text-sm font-medium ${
                            darkMode ? "text-white" : "text-gray-800"
                          }`}
                        >
                          {user.role || "Admin"}
                        </p>
                      </div>
                      <div
                        className={`p-2 rounded-lg ${
                          darkMode ? "bg-gray-700" : "bg-gray-100"
                        } text-center`}
                      >
                        <p className="text-xs text-gray-500">Status</p>
                        <p
                          className={`text-sm font-medium ${
                            darkMode ? "text-white" : "text-gray-800"
                          }`}
                        >
                          <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1"></span>
                          Online
                        </p>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#"
                    className={`flex items-center gap-2 px-4 py-3 text-sm ${
                      darkMode
                        ? "text-white hover:bg-gray-700"
                        : "text-gray-700 hover:bg-gray-50"
                    } transition-colors`}
                  >
                    <User size={16} /> View Profile
                  </a>

                  <a
                    href="#"
                    className={`flex items-center gap-2 px-4 py-3 text-sm ${
                      darkMode
                        ? "text-white hover:bg-gray-700"
                        : "text-gray-700 hover:bg-gray-50"
                    } transition-colors`}
                  >
                    <Settings size={16} /> Account Settings
                  </a>

                  <button
                    onClick={handleLogout}
                    className={`flex items-center gap-2 w-full px-4 py-3 text-sm text-red-500 ${
                      darkMode ? "hover:bg-red-900/20" : "hover:bg-red-50"
                    } transition-colors`}
                  >
                    <LogOut size={16} /> Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="px-4 pb-3 block sm:hidden">
          <div className="relative w-full">
            <Search
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
              size={18}
            />
            <input
              type="text"
              placeholder="Search..."
              className={`w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                darkMode
                  ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  : "bg-gray-100 border-transparent text-gray-800 placeholder-gray-500"
              }`}
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
