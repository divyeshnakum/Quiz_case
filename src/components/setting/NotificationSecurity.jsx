import {
  baseColorYel,
  bgCartColor,
  borderColor,
  textColPrimary,
  textColSecondary,
  TextGray,
} from "../ColorLayout";
import { useState } from "react";
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

const NotificationSecurity = () => {
  const [permissions, setPermissions] = useState({
    reward: true,
    payment: true,
    registration: true,
    quiz: false,
    blocksus: false,
  });

  const togglePermission = (key) => {
    setPermissions({ ...permissions, [key]: !permissions[key] });
  };

  return (
    <div
      className={`${bgCartColor} h-fit border ${borderColor} rounded-2xl shadow p-4`}
    >
      <div
        className={`flex justify-between pb-2 mb-4 border-b ${borderColor} `}
      >
        <h2 className={` ${textColPrimary} text-base sm:text-lg font-semibold`}>Notifications & Security</h2>
        <button className={`text-xs sm:text-sm ${TextGray}`}>Reset</button>
      </div>
      <div className={`border-b pb-2 mb-2 border-dashed ${textColSecondary} ${borderColor}`}>
        <h3 className="text-xs sm:text-sm font-semibold ">Notification Toggles</h3>
      </div>
      <div className={` ${textColSecondary} space-y-4`}>
        {[
          ["Reward Distribution Alerts", "reward"],
          ["Payment Alerts", "payment"],
          ["New User Registration Alerts", "registration"],
          ["Quiz Report Alerts", "quiz"],
        ].map(([label, key]) => (
          <div key={key} className="flex justify-between items-center">
            <span className="text-sm">{label}</span>
            <Toggle
              enabled={permissions[key]}
              onChange={() => togglePermission(key)}
            />
          </div>
        ))}
      </div>

      <div className={`border-b pb-2 my-2 border-dashed ${textColSecondary} ${borderColor}`}>
        <h3 className="text-xs sm:text-sm font-semibold">System Setting</h3>
      </div>
      <div className={` space-y-3 text-xs sm:text-sm ${textColSecondary}`}>
        <div className="space-y-4">
          <p className="">Enable 2FA Login</p>

          {[["Block Suspicious IPs", "blocksus"]].map(([label, key]) => (
            <div key={key} className="flex justify-between items-center">
              <span className="text-xs sm:text-sm">{label}</span>
              <Toggle
                enabled={permissions[key]}
                onChange={() => togglePermission(key)}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col-1 sm:flex-col-2 items-center justify-between">
          <p className="">Auto Logout Timer</p>
          <div className="flex gap-4">
            <label>
              <input type="radio" name="logout" className="accent-black" /> 10m
            </label>
            <label>
              <input type="radio" name="logout" className="accent-black" /> 30m
            </label>
            <label>
              <input
                type="radio"
                name="logout"
                className="accent-black"
                defaultChecked
              />{" "}
              60m
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSecurity;
