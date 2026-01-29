import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo_img from "./assets/images/Rectangle-1.png";
import {
  baseColorYel,
  hoverColorYel,
  textColPrimary,
  bgColor,
  borderColor,
  bgCartColor,
  TextGray,
} from "./components/ColorLayout";

const Header = ({ showAuthButtons = true, onSignIn, onSignUp }) => {
  const baseButtonClass =
    "rounded-2xl px-3 py-1 text-xs font-medium sm:px-4 sm:py-1.5 sm:text-sm  md:px-5 md:py-2 md:text-base lg:px-6 lg:py-2 lg:text-sm transition";

  const outlineButtonClass = `${baseButtonClass}   border ${borderColor} text-gray-700 ${hoverColorYel} hover:border-transparent`;

  const location = useLocation();
  const navigate = useNavigate();

  // 1. Force lowercase or match EXACTLY what is in App.js
  // Your App.js uses "/pages/Login" (Capital L)
  const isLoginActive =
    location.pathname === "/" || location.pathname === "/login";
  const isSignupActive = location.pathname === "/signup";

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={`${bgColor} w-100vh pt-2`}>
      <header className={` ${bgCartColor} sticky top-10 z-50 max-w-screen-3xl md:w-[987.5] border-transparent rounded-2xl mx-4 sm:mx-6 md:mx-18 lg:mx-24 shadow-[0_0_20px_rgba(0,0,0,0.15)]`}>
        <div className=" w-full mx-auto my-10">
          <div className={`flex h-16 items-center mx-auto px-4 sm:px-6 lg:px-10 justify-between `}>
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src={logo_img} alt="Quiz Cash" className="h-full w-fit" />
            </div>

            {/* Right Actions */}
            {showAuthButtons && (
              <>
                {/* 📱 BURGER ICON */}
                {showAuthButtons && (
                  <button
                    className={`md:hidden text-2xl border rounded-md p-1.5 ${borderColor} ${bgCartColor}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    ☰
                  </button>
                )}

                {/* 💻 DESKTOP BUTTONS */}
                <div className="hidden md:flex justify-end items-center gap-3">
                  <button
                    onClick={() => navigate("/signup")}
                    className={`${outlineButtonClass} ${textColPrimary} ${
                      location.pathname === "/signup"
                        ? `${baseColorYel} border-transparent`
                        : ""
                    }`}
                  >
                    Sign Up
                  </button>

                  <button
                    onClick={() => navigate("/")}
                    className={`${outlineButtonClass} ${textColPrimary} ${
                      location.pathname === "/"
                        ? `${baseColorYel} border-transparent`
                        : ""
                    }`}
                  >
                    Sign In
                  </button>
                </div>
              </>
            )}
          </div>

          {/* 📱 MOBILE SIDEBAR */}
          {menuOpen && showAuthButtons && (
            <>
              {/* Overlay */}
              <div
                className="fixed inset-0 bg-black/40 z-40 md:hidden"
                onClick={() => setMenuOpen(false)}
              />

              {/* Sidebar */}
              <div
                className={`fixed top-0 right-0 h-full w-[260px]  z-50 md:hidden
                    shadow-lg flex flex-col items-center pt-20 gap-4 ${bgCartColor}`}
              >
                {/* ❌ Close Button */}
                <button
                  onClick={() => setMenuOpen(false)}
                  className={`absolute top-4 left-4 text-2xl font-bold ${TextGray}`}
                  aria-label="Close menu"
                >
                  ×
                </button>

                {/* Image logo */}
                <div className="flex items-center gap-2">
                  <img
                    src={logo_img}
                    alt="Quiz Cash"
                    className="h-full w-fit"
                  />
                </div>

                {/* Sign Up Button */}
                <button
                  onClick={() => navigate("/signup")}
                    className={`${outlineButtonClass} ${textColPrimary} ${
                      location.pathname === "/signup"
                        ? `${baseColorYel} border-transparent`
                        : ""
                    }`}
                >
                  Sign Up
                </button>

                {/* Sign In Button */}
                <button
                  onClick={() => navigate("/")}
                    className={`${outlineButtonClass} ${textColPrimary} ${
                      location.pathname === "/"
                        ? `${baseColorYel} border-transparent`
                        : ""
                    }`}
                >
                  Sign In
                </button>
              </div>
            </>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
