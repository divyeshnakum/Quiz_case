import { baseColorYel, bgCartColor, borderColor, hoverColorYel, textColPrimary, textColSecondary, TextGray } from "../ColorLayout";

const GeneralSettings = () => {
  
  return (
    <div
      className={`${bgCartColor} ${borderColor}  border rounded-2xl shadow-md p-4 `}
    >
      {/* Header */}
      <div className={`border-b ${textColPrimary} ${borderColor} mb-4`}>
        <h2 className="text-lg sm:text-xl font-semibold mb-2">
          General Settings
        </h2>
      </div>

      {/* Form Grid */}
      <div className={` ${textColSecondary} grid grid-cols-1 md:grid-cols-2 gap-6`}>
        {/* Platform Name */}
        <div>
          <label className="block text-xs sm:text-sm font-medium mb-2">
            Platform Name
          </label>
          <input
            type="text"
            placeholder="Quiz Cash"
            className={`w-full text-xs sm:text-sm rounded-lg border ${borderColor} placeholder:${TextGray} px-4 py-2 `}
          />
        </div>

        {/* Support Email */}
        <div>
          <label className="block text-xs sm:text-sm font-medium mb-2">
            Support Email
          </label>
          <input
            type="email"
            placeholder="support@quizcash.com"
            className={`w-full text-xs sm:text-sm rounded-lg border ${borderColor} placeholder:${TextGray} px-4 py-2 `}
          />
        </div>

        {/* Support Phone */}
        <div>
          <label className="block text-xs sm:text-sm font-medium mb-2">
            Support Phone
          </label>
          <input
            type="text"
            placeholder="+1 (555) 123-4567"
            className={`w-full text-xs sm:text-sm rounded-lg border ${borderColor} placeholder:${TextGray} px-4 py-2 `}
          />
        </div>

        {/* Support UPI ID */}
        <div>
          <label className="block text-xs sm:text-sm font-medium mb-2">
            Support UPI ID
          </label>
          <input
            type="text"
            placeholder="quzc25@icici.pay"
            className={`w-full text-xs sm:text-sm rounded-lg border ${borderColor} placeholder:${TextGray} px-4 py-2 `}
          />
        </div>
      </div>

      {/* Footer Text */}
      <div className={` ${textColSecondary} mt-6`}>
        <label className="block text-xs sm:text-sm font-medium mb-2">
          Footer Text
        </label>
        <textarea
          rows={4}
          placeholder="© 2025 Quiz App Inc. All rights reserved."
          className={`w-full rounded-lg text-xs sm:text-sm border ${borderColor} placeholder:${TextGray} px-4 py-2 `}
        />
      </div>

      {/* Button */}
      <button className={`w-full mt-4 ${baseColorYel} ${hoverColorYel} ${textColSecondary} font-semibold py-2 rounded-xl cursor-pointer`}>
        Save Changes
      </button>
    </div>
  );
};

export default GeneralSettings;
