import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/Logo.jpg";
import profilePic from "../assets/img/user.png";

const Navbar = () => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-md">
      <div className="flex items-center gap-8">
        <img src={logo} alt="Logo" className="h-10 rounded-md shadow-sm" />
        <div className="flex gap-6 text-sm font-medium items-center">
          <Link to="/" className="text-white no-underline hover:underline transition">Home</Link>
          <Link to="/about" className="text-white no-underline hover:underline transition">About</Link>
          <Link to="/destination" className="text-white no-underline hover:underline transition">Destination</Link>
          <Link to="/contact" className="text-white no-underline hover:underline transition">Contact</Link>
        </div>
      </div>

      <div className="relative">
        <button
          onClick={() => setShowProfileDropdown((prev) => !prev)}
          className="flex items-center gap-2 focus:outline-none"
        >
          <img
            src={profilePic}
            alt="User"
            className="w-9 h-9 rounded-full border-2 border-white object-cover"
          />
          <FaChevronDown className="text-white text-xs" />
        </button>

        {showProfileDropdown && (
          <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg z-50">
            <ul className="py-2 text-sm">
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => navigate("/admin")}
              >
                Admin
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => navigate("/")}
              >
                Keluar
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
