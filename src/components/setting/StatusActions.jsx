import React from "react";
import { BgButtonYel, borderColor, hoverColorYel } from "../ColorLayout";

const StatusActions = () => {
  return (
    <div className={`border ${borderColor} rounded-2xl shadow p-4 w-full`}>
      <div className={`border-b ${borderColor}   mb-4`}>
        <h2 className="font-semibold text-base sm:text-lg mb-2">Status & Actions</h2>
      </div>
      {/* Account Status */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs sm:text-sm">Account Status</span>
        <span className="px-4 py-1 text-xs sm:text-sm font-semibold rounded-full bg-green-200 text-green-900">
          Active
        </span>
      </div>

      {/* Buttons */}
      <div className="space-y-3">
        <button className={`w-full ${BgButtonYel} ${hoverColorYel}  py-2 rounded-xl text-xs sm:text-sm font-medium`}>
          Suspend Sub Admin
        </button>

        <button className={`w-full ${BgButtonYel} ${hoverColorYel}  py-2 rounded-xl text-xs sm:text-sm font-medium`}>
          Reset Password
        </button>

        <button className={`w-full bg-red-100 text-red-700  py-2 rounded-xl text-xs sm:text-sm font-medium`}>
          Delete Sub Admin
        </button>
      </div>
    </div>
  );
};

export default StatusActions;
