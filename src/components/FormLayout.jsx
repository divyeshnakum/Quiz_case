// components/FormLayout.jsx
import React from "react";
import { bgCartColor, textColPrimary } from "./ColorLayout";

const FormLayout = ({ title, actions, children }) => {
  return (
    <div className="max-w-full max-h-screen mt-4">
      <div className={`max-h-full  rounded-xl shadow-sm md:p-6 ${bgCartColor} overflow-y-auto`}>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className={` ${textColPrimary} text-xl font-semibold `}>
            {title}
          </h2>

          {/* Actions (Search / Filter etc.) */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            {actions}
          </div>
        </div>

        {/* Content */}
        <div className="w-full overflow-x-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FormLayout;
