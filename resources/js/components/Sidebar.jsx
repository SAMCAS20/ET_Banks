import { useState } from "react";
import {
  FaChartBar,
  FaMoneyBillAlt,
  FaRssSquare,
  FaStar,
  FaCog,
  FaSignOutAlt,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import logo from '../assets/logo.jpg'; // Import the logo image

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Overview", src: FaChartBar },
    { title: "Banks", src: FaMoneyBillAlt },
    { title: "Blogs", src: FaRssSquare },
    { title: "Reviews", src: FaStar },
    { title: "Settings", src: FaCog },
    { title: "Logout", src: FaSignOutAlt, gap: true },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } bg-dark-purple h-screen p-5 pt-8 relative duration-300`}
      >
        <div
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full p-1 ${
            !open ? "bg-white" : "bg-dark-purple"
          }`}
          onClick={() => setOpen(!open)}
        >
          {open ? <FaAngleLeft className="text-dark-purple" /> : <FaAngleRight className="text-dark-purple" />}
        </div>
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            alt="Logo"
            className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
          />
          <h1 className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}>
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-indigo hover:text-indigo-600 active:bg-light-indigo active:text-indigo-600 text-gray-300 text-sm items-center gap-x-4 ${
                Menu.gap ? "mt-9" : "mt-2"
              } ${index === 0 && "bg-light-white text-indigo-600"}`}
            >
              <Menu.src className="text-2xl" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>{Menu.title}</span>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
};

export default Sidebar;