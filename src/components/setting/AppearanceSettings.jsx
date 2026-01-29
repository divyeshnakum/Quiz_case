import {
  setAdminTheme,
  applyAdminTheme,
  getAdminTheme,
} from "../../utils/AdminTheme";
import {
  borderColor,
  bgColor,
  bgCartColor,
  textColPrimary,
  textColSecondary,
} from "../ColorLayout";
import { useEffect, useState } from "react";

const AppearanceSettings = () => {
  const [adminTheme, setAdminThemeState] = useState();

  useEffect(() => {
    const savedTheme = getAdminTheme();
    setAdminThemeState(savedTheme);
    applyAdminTheme(savedTheme);

    if (savedTheme === "system") {
      const media = window.matchMedia("(prefers-color-scheme: dark)");
      const listener = () => applyAdminTheme("system");
      media.addEventListener("change", listener);

      return () => media.removeEventListener("change", listener);
    }
  }, []);

  const handleChange = (theme) => {
    setAdminThemeState(theme);
    setAdminTheme(theme);
  };
  return (
    <div
      className={`border ${bgCartColor} ${borderColor} rounded-2xl shadow p-4`}
    >
      <div className={`border-b pb-2 mb-2 ${borderColor} ${textColPrimary} `}>
        <h2 className="text-base sm:text-lg font-semibold">
          Appearance / Theme Settings
        </h2>
      </div>
      <div
        className={`border-b pb-2 mb-2 border-dashed ${textColSecondary} ${borderColor}`}
      >
        <h3 className="text-sm font-semibold ">Notification Toggles</h3>
      </div>

      <div className={`mb-4 text-xs ${textColSecondary}`}>
        <p className=" mb-2">Admin Panel Theme Mode</p>
        <div className="flex gap-4 ">
          <label>
            <input
              type="radio"
              name="admin"
              className="accent-black"
              checked={adminTheme === "dark"}
              onChange={() => handleChange("dark")}
            />{" "}
            Dark
          </label>
          <label>
            <input
              type="radio"
              name="admin"
              className="accent-black"
              checked={adminTheme === "light"}
              onChange={() => handleChange("light")}
            />{" "}
            Light
          </label>
          <label>
            <input
              type="radio"
              name="admin"
              className="accent-black"
              checked={adminTheme === "system"}
              onChange={() => handleChange("system")}
            />{" "}
            System
          </label>
        </div>
      </div>

      <div className={` ${textColSecondary} mb-6 text-xs`}>
        <p className=" mb-2 ">Students App Theme Mode</p>
        <div className="flex gap-4">
          <label>
            <input type="radio" name="student" className="accent-black" /> Dark
          </label>
          <label>
            <input type="radio" name="student" className="accent-black" /> Light
          </label>
          <label>
            <input
              type="radio"
              name="student"
              className="accent-black"
              defaultChecked
            />{" "}
            System
          </label>
        </div>
      </div>

      <button className={`w-full bg-gray-300 py-3 rounded-xl cursor-pointer`}>
        Default
      </button>
    </div>
  );
};

export default AppearanceSettings;
