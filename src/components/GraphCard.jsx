import React from "react";
import {
  bgCartColor,
  bgColor,
  textColSecondary,
  borderColor,
} from "./ColorLayout";

const GraphCard = ({ title, children }) => {
  return (
    <div
      className={`${bgCartColor} p-4 sm:p-4 md:p-5 rounded-2xl border ${borderColor} w-full`}
    >
      {/* Graph */}
      <div
        className={`h-48 sm:h-56 md:h-64 ${bgColor} flex items-center justify-center`}
      >
        {children || "Graph Here"}
      </div>

      {/* Title at Bottom */}
      <h3
        className={`mt-2 text-center text-sm sm:text-base md:text-lg ${textColSecondary}`}
      >
        {title}
      </h3>
    </div>
  );
};

export default GraphCard;
