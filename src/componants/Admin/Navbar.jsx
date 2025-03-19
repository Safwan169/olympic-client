const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-5 bg-gray-800 shadow-lg py-2 text-white border-b border-gray-200">
      <div className="text-2xl font-semibold  ">Admin Dashboard</div>
      <div className="flex items-center space-x-4">
        <span className="text-gray-700 text-lg">Admin</span>
        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
          <img
            src="https://randomuser.me/api/portraits/men/45.jpg" // Replace with a user avatar
            alt="Admin Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
