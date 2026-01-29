import React from "react";
import {
  borderColor,
  baseColorYel,
  hoverColorYel,
  bgCartColor,
  textColPrimary,
  textColSecondary,
  bgColor,
} from "../ColorLayout";

const AddSubAdminModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {" "}
      <div className="absolute inset-0 bg-transparent " />
      <div className="absolute inset-0 z-50 flex items-center justify-center  px-4">
        <div
          className={`w-full p-4 max-w-2xl border ${borderColor} rounded-2xl ${bgColor}`}
        >
          {/* Header */}
          <div className={`flex items-center justify-between pd-3 pb-4 ${textColPrimary}`}>
            <h2 className="text-lg font-semibold">Add New Sub Admin</h2>
            <button onClick={onClose} className="cursor-pointer">
              ✕
            </button>
          </div>

          <div
            className={`border-t border-b ${borderColor} py-3 sm:py-4 md:py-6 lg:py-8 ${textColSecondary} ${borderColor}`}
          >
            {/* Body */}
            <div className="space-y-4">
              {/* Row 1 */}
              <div className={` grid grid-cols-1 sm:grid-cols-2 gap-4 `}>
                <div>
                  <label className="block text-sm mb-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter Full Name"
                    className={`w-full rounded-2xl border px-4 py-2 ${borderColor}`}
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Phone Number</label>
                  <input
                    type="text"
                    placeholder="Enter Phone Number"
                    className={`w-full rounded-2xl border px-4 py-2 ${borderColor}`}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className={`w-full rounded-2xl border px-4 py-2 ${borderColor}`}
                />
              </div>

              {/* Role */}
              <div>
                <label className="block text-sm mb-1">Role</label>
                <input
                  type="text"
                  placeholder="Editor"
                  className={`w-full rounded-2xl border px-4 py-2 ${borderColor}`}
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm mb-1">Create Password</label>
                <input
                  type="password"
                  placeholder="********"
                  className={`w-full rounded-2xl border px-4 py-2 ${borderColor}`}
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className={`flex items-center justify-end gap-4 pt-4 ${textColSecondary}`}>
            <button
              onClick={onClose}
              className={`px-4 py-2 rounded-md  ${hoverColorYel} cursor-pointer`}
            >
              Cancel
            </button>
            <button
              className={`px-4 py-2 rounded-md font-semibold ${baseColorYel} ${hoverColorYel}`}
            >
              Create Sub Admin
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSubAdminModal;
