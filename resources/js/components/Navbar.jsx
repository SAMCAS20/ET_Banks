import { useState } from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  return (
    <div className="flex justify-between items-center bg-white shadow-md py-4 px-6 sm:px-4">
      <div className="flex items-center">
        <span className="font-semibold text-lg mr-6 sm:mr-4">Welcome, User</span>
      </div>
      <div className="flex items-center">
        <div className="relative hidden sm:block">
          <input
            type="text"
            className="bg-gray-100 rounded-md px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Search..."
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
        <div className="relative mr-4">
          <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <FaBell className="h-6 w-6" />
            <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
              3
            </span>
          </button>
        </div>
        <div className="relative">
          <button
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
          >
            <FaUserCircle className="h-8 w-8" />
          </button>
          {showProfileDropdown && (
            <div className="absolute right-0 mt-4 bg-white shadow-lg rounded-md w-48 py-2">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Profile
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Settings
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;