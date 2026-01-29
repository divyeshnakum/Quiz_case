import { useState, useRef, useEffect } from "react";
// icons
import FilterDropDownIcon from "../assets/icons/filter-drop-down-arrow.png";
import FilterDropUpIcon from "../assets/icons/filter-drop-up-arrow.png";
import { borderColor, bgCartColor, bgColor, textColSecondary } from "./ColorLayout";

const Dropdown = ({open,setOpen}) => {
  const [value, setValue] = useState("Verification status");
  const ref = useRef(null);

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setOpen]);

  return (
    <div
      ref={ref}
      className="relative w-auto"
    >
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center sm:justify-between  sm:w-44 w-32 ml-2
                   px-2 sm:px-4 py-2 border rounded-lg sm:text-sm text-[10px] ${textColSecondary} ${borderColor} ${bgCartColor} `}
      >
      {value}
        <img src={FilterDropDownIcon} className="w-6 h-6" />
      </button>

      {/* Dropdown */}
      {open && (
        <>
          {/* Transparent overlay to detect outside clicks */}

          <div
            className={`absolute right-0 mt-2 w-44 sm:w-56 z-50 ${bgColor} border ${borderColor}  rounded-xl shadow-lg p-2`}
          >
            {["Verified", "Pending", "Rejected"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setValue(item);
                  setOpen(false);
                }}
                className={`w-full text-sm px-3 py-2 rounded-md border my-1.5 ${textColSecondary} ${bgCartColor} text-center`}
              >
                {item}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Dropdown;
