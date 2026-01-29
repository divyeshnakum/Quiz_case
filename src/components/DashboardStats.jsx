import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import {
  bgCartColor,
  bgColor,
  baseColorYel,
  textColPrimary,
  textColSecondary,
  borderColor,
  hoverColorYel,
} from "./ColorLayout";
const DashboardStats = ({
  title = "Dashboard",
  showButton = true,
  buttonText = "Create New Quiz",
  onButtonClick,
  children,
  extraButton,
  extraButtonText,
}) => {
  const [activeButton, setActiveButton] = useState(null);

  return (
    <>
      <div className="">
        {/* Heading + Buttons */}
        <div className="flex sm:flex-row items-start sm:items-center justify-between mb-4 px-2 sm:px-4  ">
          <h2 className={`text-xl sm:text-3xl font-semibold ${textColPrimary}`}>
            {title}
          </h2>

          {/* Main Button */}
          {showButton && !extraButton && (
            <button
              onClick={onButtonClick}
              className={`flex items-center gap-2 px-2 sm:px-4 py-2.5 text-xs sm:text-base font-medium ${textColPrimary} ${baseColorYel} ${hoverColorYel} rounded-xl transition`}
            >
              <FiPlus className="w-4 h-4 sm:w-5 sm:h-5" />
              {buttonText}
            </button>
          )}

          {/* Dual Buttons */}
          {extraButton && (
            <div className="flex sm:flex-row gap-4">
              <button
                onClick={() => {
                  setActiveButton("main");
                  onButtonClick && onButtonClick();
                }}
                className={`flex items-center gap-2 px-2 sm:px-4 py-2.5 text-xs sm:text-base font-medium ${textColPrimary} ${
                  activeButton === "main" ? baseColorYel : bgCartColor
                } ${hoverColorYel} rounded-xl transition`}
              >
                {buttonText}
              </button>

              <button
                onClick={() => {
                  setActiveButton("extra");
                  extraButton.onClick && extraButton.onClick();
                }}
                className={`flex items-center gap-2 px-2 sm:px-4 py-2.5 text-xs sm:text-base font-medium ${textColPrimary} ${
                  activeButton === "extra" ? baseColorYel : bgCartColor
                } ${hoverColorYel} border ${borderColor} rounded-xl transition`}
              >
                {extraButtonText}
              </button>
            </div>
          )}
        </div>

        {/* Page Content */}
        {children}
      </div>
    </>
  );
};

export default DashboardStats;
