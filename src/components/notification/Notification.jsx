import { useEffect } from "react";
import { baseColorYel, BlueInfoCol, GreenSuccessCol, RedErrorCol, textColPrimary } from "../ColorLayout";

const Notification = ({
  show,
  type = "success",
  title = "Success",
  message = "",
  onClose,
  autoClose = true,
  duration = 2000,
}) => {
  useEffect(() => {
    if (show && autoClose) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [show, autoClose, duration, onClose]);

  if (!show) return null;

  const variants = {
    success: {
      bg: `${baseColorYel}`,
      text: `${textColPrimary}`,
      icon: "✓",
    },
    error: {
      bg: `${RedErrorCol}`,
      text: "text-white",
      icon: "✕",
    },
    info: {
      bg: `${BlueInfoCol}`,
      text: "text-white",
      icon: "ℹ",
    },
  };

  const current = variants[type];

  return (
    <div className="fixed top-32 left-1/2 z-50 w-[90%] max-w-md -translate-x-1/2">
      <div
        className={`flex items-start gap-3 rounded-lg px-4 py-3 shadow-lg ${current.bg} ${current.text}`}
      >
        {/* Icon */}
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white font-bold text-green-600">
          {current.icon}
        </div>

        {/* Text */}
        <div className="flex-1 text-sm">
          <p className="font-semibold">{title}</p>
          <p className="opacity-90">{message}</p>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="text-lg leading-none opacity-70 hover:opacity-100"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Notification;
