import React, { useState } from "react";
import {
  baseColorYel,
  bgCartColor,
  bgColor,
  borderColor,
  hoverColorYel,
  textColPrimary,
  textColSecondary,
  TextGray,
} from "../../components/ColorLayout";
const NotificationForm = ({ initialData = {}, onSubmit,isOpen, onClose }) => {
  const [notificationType, setNotificationType] = useState(
    initialData.notificationType || "",
  );
  const [message, setMessage] = useState(initialData.message || "");
  const [sendTo, setSendTo] = useState(initialData.sendTo || "");
  const [scheduleOption, setScheduleOption] = useState(
    initialData.scheduleOption || "now",
  );
  const [scheduleDate, setScheduleDate] = useState(
    initialData.scheduleDate || "",
  );

  const [icon, setIcon] = useState(initialData.icon || null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      notificationType,
      message,
      sendTo,
      scheduleOption,
      scheduleDate,
      icon,
    };
    if (onSubmit) onSubmit(formData);
  };

  const handleClose = () => {};
  // ✅ CHANGED: Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setIcon(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  if (!isOpen) return null;


  return (<>
    <div className="absolute inset-0 bg-transparent " />
     
    <div className="absolute inset-0 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className={`${bgCartColor} border ${borderColor} rounded-2xl h-full max-h-min w-full max-w-md p-4`}
      >
        <div className={`flex items-center justify-between mb-2 ${textColPrimary}`}>
          <h2 className="text-lg font-semibold">New Notification</h2>
          <button
            onClick={onClose}
            className="cursor-pointer"
          >
            ✕
          </button>
        </div>
        <div className={` border-t border-b ${borderColor} ${textColSecondary} py-4`}>
          {/* Notification Type */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Notification Type
            </label>
            <input
              type="text"
              value={notificationType}
              placeholder="Notification type"
              onChange={(e) => setNotificationType(e.target.value)}
              className={`w-full border ${borderColor} rounded-xl p-2 placeholder:${TextGray}`}
            />
          </div>

          {/* Message */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your custom message here"
              className={`w-full border ${borderColor} rounded-xl p-2 placeholder:${TextGray}`}
            />
          </div>

          {/* Send To */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Send To</label>
            <input
              type="text"
              value={sendTo}
              placeholder="Sent to all"
              onChange={(e) => setSendTo(e.target.value)}
              className={`w-full border ${borderColor} rounded-xl p-2 placeholder:${TextGray}`}
            />
          </div>

          {/* Icon Upload */}
          {/* ✅ CHANGED: Icon Upload */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Icon (Optional)
            </label>
            <div className="flex items-center gap-2">
              <div
                className={`w-10 h-10 border border-dashed ${borderColor} rounded flex items-center justify-center overflow-hidden`}
              >
                {icon ? (
                  <img
                    src={icon}
                    alt="icon preview"
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span className={`${TextGray} text-xl`}>+</span>
                )}
              </div>

              {/* Hidden file input */}
              <input
                type="file"
                accept=".svg, .png"
                id="icon-upload"
                className="hidden"
                onChange={handleFileChange} // ✅ CHANGED
              />
              <label
                htmlFor="icon-upload"
                className={`${baseColorYel} ${TextGray} px-3 py-1 rounded-md cursor-pointer`}
              >
                Upload SVG/PNG
              </label>
            </div>
          </div>

          {/* Schedule */}
          <div className="">
            <label className="block text-sm font-medium mb-1">Schedule</label>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="schedule"
                  value="now"
                  checked={scheduleOption === "now"}
                  onChange={() => setScheduleOption("now")}
                  className="accent-black"
                />
                Send Now
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="schedule"
                  value="later"
                  checked={scheduleOption === "later"}
                  onChange={() => setScheduleOption("later")}
                  className="accent-black"
                />
                Schedule for Later
              </label>
              {scheduleOption === "later" && (
                <input
                  type="datetime-local"
                  value={scheduleDate}
                  onChange={(e) => setScheduleDate(e.target.value)}
                  className={`w-full border  rounded-xl ${borderColor} ${bgColor} p-2 `}
                />
              )}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-4 gap-3">
          <button
            type="button"
            onClick={onClose}
            className={`border rounded-xl px-4 py-2 ${hoverColorYel}  cursor-pointer sm:w-26`}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`border ${borderColor} rounded-xl px-4 py-2 sm:w-26 cursor-pointer ${baseColorYel} ${hoverColorYel}`}
          >
            Save
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default NotificationForm;
