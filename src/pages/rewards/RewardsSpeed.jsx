import { useState } from "react";
import { borderColor,bgCartColor,bgColor,TextGray, textColPrimary, textColSecondary } from "../../components/ColorLayout";

const tabs = ["History", "Science", "Movies", "General", "Sports", "Music", "Tech"];

export default function RewardSpend() {
  const [activeTab, setActiveTab] = useState("History")
   const HoverTextYel = "hover:text-[#E0A200]";
  
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className={`${bgCartColor} ${borderColor} border rounded-2xl p-4 sm:p-6`}>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className={` ${textColPrimary} text-sm sm:text-base font-semibold `}>
              Quiz Reward Spend Breakdown
            </h2>

            <div className={`flex items-center gap-2 mt-1 ${textColPrimary}`}>
              <span className="text-2xl sm:text-3xl font-bold ">
                ₹15,480
              </span>
              <span className="text-xs sm:text-sm font-medium text-green-600">
                +5.2% this month
              </span>
            </div>
          </div>

          {/* Dropdown */}
          <div>
            <select className={`border ${borderColor} ${textColSecondary} ${bgCartColor} cursor-pointer rounded-lg px-3 py-2 text-sm`}>
              <option hidden>This Month</option>
              <option>This week</option>
              <option>Today </option>
            </select>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-6 overflow-x-auto">
          <div className={`flex gap-6 min-w-max border-b ${borderColor}`}>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 cursor-pointer text-sm font-medium transition relative
                  ${
                    activeTab === tab
                      ? "text-orange-500"
                      : "hover:text-orange-500"
                  }
                `}
              >
                {tab}

                {activeTab === tab && (
                  <span className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-orange-500 rounded-full"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
