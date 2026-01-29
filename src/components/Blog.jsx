import React from "react";
import arrowIcon from "../assets/icons/arrow.png";
import {
  textColPrimary,
  textColSecondary,
  borderColor,
  bgCartColor,
  hoverColorYel,
} from "./ColorLayout";

const Blog = ({ hideExtras = false }) => {
  const stats = [
    { label: "Total Student", value: 182 },
    { label: "Total Quiz", value: 251 },
    { label: "Live Quizzes", value: "02" },
    { label: "Active Student", value: 3312 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {stats.map((item, index) => (
        <div
          key={index}
          className={`${bgCartColor} ${hoverColorYel} border ${borderColor} p-4 rounded-xl transition`}
        >
          <div
            className={`flex justify-between mb-3 text-lg font-bold ${textColPrimary}`}
          >
            <span>{item.label}</span>

            {/* Arrow icon */}
            {!hideExtras && (
              <img src={arrowIcon} className="w-6 h-6 rounded-full" />
            )}
          </div>

          <div className={`${textColPrimary} text-2xl font-bold mb-4`}>
            {item.value}
          </div>

          {/* Bottom info */}
          {!hideExtras && (
            <div className="text-xs flex gap-1 items-center">
              <span className={`${textColSecondary} border px-2 rounded-2xl`}>
                2%
              </span>
              <span className={textColSecondary}>Increase from last month</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Blog;
