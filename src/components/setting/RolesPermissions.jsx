import React, { useState } from "react";
import { BgButtonYel, bgCartColor, borderColor, hoverColorYel } from "../ColorLayout";

const Toggle = ({ enabled, onChange }) => {
  return (
    <button
      onClick={onChange}
      className={`w-10 h-5 flex items-center rounded-full px-1 transition ${
        enabled ? "bg-yellow-400" : "bg-gray-300"
      }`}
    >
      <span
        className={`w-4 h-4 bg-white rounded-full shadow transform transition ${
          enabled ? "translate-x-5" : ""
        }`}
      />
    </button>
  );
};
const RolesPermissions = () => {
  const [permissions, setPermissions] = useState({
    quizzes: true,
    analytics: true,
    rewards: true,
    students: false,
    admins: false,
  });

  const togglePermission = (key) => {
    setPermissions({ ...permissions, [key]: !permissions[key] });
  };

  return (
    <div className={`${bgCartColor} border ${borderColor} rounded-2xl shadow p-4 w-full`}>
      <div className={`border-b ${borderColor}   mb-4`}>
      <h2 className="font-semibold text-base sm:text-lg pb-2">Roles & Permissions</h2>
</div>
      {/* Roles */}
      <div className="mb-4">
        <p className="text-xs sm:text-sm mb-2">Roles</p>
        <div className="flex gap-2">
          <span className={`px-3 py-1 ${BgButtonYel} ${hoverColorYel} cursor-pointer rounded-lg text-xs sm:text-sm`}>
            Editor
          </span>
          <span className={`px-3 py-1 ${BgButtonYel} ${hoverColorYel} cursor-pointer rounded-lg text-xs sm:text-sm`}>
            Support
          </span>
        </div>
      </div>

      {/* Permissions */}
      <div className="space-y-4">
        {[
          ["Manage Quizzes", "quizzes"],
          ["View Analytics", "analytics"],
          ["Distribute Rewards", "rewards"],
          ["Student Approval", "students"],
          ["Manage other sub-admins", "admins"],
        ].map(([label, key]) => (
          <div key={key} className="flex justify-between items-center">
            <span className="text-xs sm:text-sm">{label}</span>
            <Toggle
              enabled={permissions[key]}
              onChange={() => togglePermission(key)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RolesPermissions;
