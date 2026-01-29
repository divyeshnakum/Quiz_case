import React, { useState } from "react";
import LogoImg from "../assets/images/Rectangle-1.png";
import { FiLogOut, FiSettings } from "react-icons/fi";
import { FaTrash, FaLightbulb, FaThLarge, FaPencilAlt } from "react-icons/fa";
import { MdDashboard, MdPayments } from "react-icons/md";
import { GiGraduateCap, GiMedal } from "react-icons/gi";
import {
  bgCartColor,
  bgColor,
  baseColorYel,
  hoverColorYel,
  textColPrimary,
  textColSecondary,
  RedErrorCol,
  borderColor,
  TextGray,
} from "./ColorLayout";
import { Link } from "react-router-dom";

const Sidebar = ({
  className,
  setSidebarOpen,
  activeIndex,
  setActiveIndex,
}) => {
  const menuItems = [
    { name: "Dashboard", icon: <MdDashboard className="w-10 h-10"/> },
    { name: "Students", icon: <GiGraduateCap className="w-10 h-10" /> },
    { name: "Quizzes", icon: <FaLightbulb className="w-5 h-5" /> },
    { name: "Rewards", icon: <GiMedal className="w-10 h-10" /> },
    { name: "Payments", icon: <MdPayments className="w-8 h-8" /> },
    { name: "Analytics", icon: <FaThLarge className="w-8 h-8" /> },
  ];

  return (
    <div className={`md:h-dvh md:p-4 md:pr-0`}>
      <aside
        className={`
          border-transparent rounded-r-2xl md:rounded-2xl h-full w-64 flex flex-col ${bgColor} ${className}
        `}
      >
        {/* CLOSE BUTTON (mobile) */}
        <button
          className={`absolute top-4 right-4 md:hidden text-2xl font-bold ${TextGray}`}
          onClick={() => setSidebarOpen(false)}
        >
          ✕
        </button>
        {/* Main  */}
        <div className="flex flex-col h-full  justify-between">
          <div className="">
            {/* LOGO */}
            <div className="flex justify-center items-center py-6">
              <img
                src={LogoImg}
                alt="QuizCash"
                className="h-16 object-contain"
              />
            </div>

            {/* MENU */}
            <ul className="flex-1 px-3 space-y-1 overflow-y-auto">
              {menuItems.map((item, i) => (
                <li
                  key={i}
                  onClick={() => {
                    setActiveIndex(i); // Set active menu item
                    if (window.innerWidth < 768) {
                      // Mobile check (Tailwind md breakpoint ~768px)
                      setSidebarOpen(false); // Close sidebar on mobile
                    }
                  }}
                  className={`
                group flex items-center gap-3 px-4 py-2 text-md cursor-pointer  rounded-r-2xl my-2 -ml-4 transition-all  hover:text-lg duration-200 ${textColPrimary} ${hoverColorYel}
                ${
                  activeIndex === i
                    ? `${textColPrimary} ${baseColorYel} text-lg`
                    : ""
                }
              `}
                >
                  <span
                    className={`flex justify-center items-center w-6 h-8 text-center`}
                  >
                    {item.icon}
                  </span>
                  {/* Name */}
                  <span
                    className={`${
                      activeIndex === i ? "font-bold" : "hover:font-bold"
                    }`}
                  >
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Settings manually placed here */}
          <div className="flex flex-col align-bottom justify-end gap-2">
            <div className="flex-1 px-3  overflow-y-auto">
              <div
                onClick={() => setActiveIndex(6)} // Set activeIndex to 6 for Settings
                className={`
        group flex items-center gap-3 px-4 py-2 text-md cursor-pointer rounded-r-2xl border ${textColPrimary} ${borderColor} my-2 -ml-4 hover:-ml-2 hover:px-2 transition-all duration-200 hover:font-bold hover:border-black hover:rounded-l-2xl
        ${activeIndex === 6 ? `${textColPrimary}  font-bold rounded-l-2xl ${borderColor}   -ml-2 px-2` : ""}
      `}
              >
                <span>
                  <FiSettings
                    className={`flex justify-center items-center w-6 h-8 text-center`}
                  />
                </span>
                <span className=" ">Settings</span>
              </div>
            </div>

            {/* LOGOUT at bottom */}
            <div className="pr-3 mb-4">
              <Link
                to="/"
                className={`w-full flex items-center justify-center gap-3 px-4 py-2  text-sm font-medium text-white ${RedErrorCol} rounded-r-2xl transition`}
              >
                <FiLogOut className="w-6 h-6" />
                Logout
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
