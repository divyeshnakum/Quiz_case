import React, { useState, useEffect } from "react";
import {
  baseColorYel,
  bgColor,
  borderColor,
  hoverColorYel,
  textColPrimary,
  textColSecondary,
  TextGray,
} from "../ColorLayout";

const EditProfileModal = ({ isOpen, onClose, onSave, initialData }) => {
  const [fullName, setFullName] = useState(
    initialData?.personalInfo.fullName || "",
  );
  const [email, setEmail] = useState(initialData?.personalInfo.email || "");
  const [phone, setPhone] = useState(initialData?.personalInfo.phone || "");
  const [gender, setGender] = useState(initialData?.personalInfo.gender || "");
  const [image, setImage] = useState(initialData?.image || "");

  // Update state when profile changes
  useEffect(() => {
    if (initialData) {
      setFullName(initialData.personalInfo.fullName);
      setEmail(initialData.personalInfo.email);
      setPhone(initialData.personalInfo.phone);
      setGender(initialData.personalInfo.gender);
      setImage(initialData.image);
    }
  }, [initialData]);

  const handleSubmit = () => {
    onSave({
      name: initialData.name,
      email: initialData.email,
      role: initialData.role,
      image,
      personalInfo: { fullName, email, phone, gender },
    });
  };

  if (!isOpen) return null; // Do not render if modal is closed

  return (
    <>
      {" "}
      <div className="absolute inset-0 bg-transparent " />
      <div className="absolute inset-0  flex justify-center items-center z-50 p-4">
        <div
          className={`${bgColor} border ${borderColor} rounded-2xl w-full max-w-3xl  overflow-hidden`}
        >
          {/* Header */}
          <div
            className={` ${textColPrimary} flex justify-between items-center p-4 border-b ${borderColor}`}
          >
            <h2 className="text-lg font-semibold">Edit Profile</h2>
            <button className="cursor-pointer" onClick={onClose}>
              &times;
            </button>
          </div>

          {/* Body */}
          <div className="flex flex-col sm:flex-row p-6 gap-6">
            {/* Left: Avatar */}
            <div className="flex flex-col items-center justify-center sm:items-start gap-4 px-4 sm:px-6 md:px-8 lg:px-10">
              <img
                src={image}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover self-center "
              />
              <label className="bg-yellow-200 text-yellow-500 px-4 py-1 rounded-2xl text-sm hover:bg-yellow-300 cursor-pointer">
                Change Image
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) =>
                    setImage(URL.createObjectURL(e.target.files[0]))
                  }
                />
              </label>
            </div>

            {/* Right: Form */}
            <div className={`flex-1 grid grid-cols-1 sm:grid-cols-2 ${textColSecondary} gap-4`}>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={`w-full border ${borderColor} rounded-2xl px-3 py-2`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full border ${borderColor} rounded-2xl px-3 py-2`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`w-full border ${borderColor} rounded-2xl px-3 py-2`}
                />
              </div>

              {/* Gender */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-1">Gender</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="Male"
                      checked={gender === "Male"}
                      onChange={(e) => setGender(e.target.value)}
                      className="form-radio text-yellow-400"
                    />
                    Male
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="Female"
                      checked={gender === "Female"}
                      onChange={(e) => setGender(e.target.value)}
                      className="form-radio text-yellow-400"
                    />
                    Female
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className={`flex justify-end gap-4 p-4 border-t ${textColSecondary} ${borderColor}`}>
            <button
              onClick={onClose}
              className={`px-4 py-2 rounded-md ${hoverColorYel} cursor-pointer`}
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className={`px-4 py-2 rounded-md font-semibold ${baseColorYel} ${hoverColorYel}`}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfileModal;
