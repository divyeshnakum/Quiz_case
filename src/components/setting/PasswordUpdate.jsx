import {
  baseColorYel,
  bgCartColor,
  borderColor,
  hoverColorYel,
  textColPrimary,
  textColSecondary,
  TextGray,
} from "../ColorLayout";

const PasswordUpdate = () => {
  return (
    <div
      className={` ${bgCartColor} border ${borderColor} h-fit rounded-2xl shadow p-4`}
    >
      <div className={`border-b ${textColPrimary} ${borderColor} mb-4 pb-2`}>
        <h2 className="text-base sm:text-lg font-semibold ">Password Update</h2>
      </div>
      <div className={`${textColSecondary} grid grid-row gap-2`}>
        <label className="block text-xs sm:text-sm font-medium">
          Update Password
        </label>
        <input
          className={`w-full text-xs sm:text-sm rounded-lg border ${borderColor} placeholder:${TextGray} px-4 py-2 `}
          placeholder="Old Password"
          type="password"
        />
        <input
          className={`w-full text-xs sm:text-sm rounded-lg border ${borderColor} placeholder:${TextGray} px-4 py-2 `}
          placeholder="New Password"
          type="password"
        />

        <button
          className={`w-full ${baseColorYel} ${hoverColorYel} font-semibold py-2 rounded-xl cursor-pointer  `}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default PasswordUpdate;
