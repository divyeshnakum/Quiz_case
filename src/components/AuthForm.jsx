import { Link } from "react-router-dom";
import { useState } from "react";
import {
  baseColorYel,
  hoverColorYel,
  textColPrimary,
  textColSecondary,
  bgCartColor,
  bgColor,
  borderColor,
} from "./ColorLayout";

const AuthForm = ({
  title,
  subtitle,
  fields,
  buttonText,
  ButtonClick,
  footerText,
  footerLinkText,
  footerLinkAction,
  forgotLink,
  showRememberMe = false,
  showForgotPassword = false,
}) => {
  const [remember, setRemember] = useState(false);
  return (
    <div className={`w-full h-full max-w-sm ${bgColor}`}>
      <h2 className={`text-3xl font-semibold ${textColPrimary} mb-2`}>
        {title}
      </h2>
      <p className={`text-lg  ${textColSecondary} mt-1 mb-6`}>{subtitle}</p>

      <form className="space-y-4">
        {fields.map((field, index) => (
          <div key={index}>
            <label className={`block text-sm ${textColSecondary} mb-2`}>
              {field.label}
            </label>
            <input
              type={field.type}
              placeholder={field.placeholder}
              className={`w-full rounded-xl border ${bgCartColor} ${textColSecondary} ${borderColor} px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:${baseColorYel}`}
            />
          </div>
        ))}

        {/* Remember me & Forgot password */}
        {(showRememberMe || showForgotPassword) && (
          <div className="flex items-center justify-between text-sm">
            {showRememberMe && (
              <label
                onClick={() => setRemember(!remember)}
                className="flex items-center gap-2 cursor-pointer select-none"
              >
                <div
                  className={`w-10 h-5 rounded-full relative transition ${
                    remember ? "bg-black" : `bg-gray-300`
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-4 h-4 ${bgColor} rounded-full transition ${
                      remember ? "translate-x-5" : ""
                    }`}
                  ></span>
                </div>

                <span className={`${textColSecondary}`}>Remember me</span>
              </label>
            )}

            {showForgotPassword && (
              <Link
                to={forgotLink}
                className={`${textColSecondary} hover:font-semibold`}
              >
                Forgot Password
              </Link>
            )}
          </div>
        )}

        <button
        onClick={ButtonClick}
          type="submit"
          className={`w-full ${baseColorYel} ${hoverColorYel} transition ${textColSecondary} font-medium py-2 cursor-pointer rounded-xl`}
        >
          {buttonText}
        </button>
      </form>

      {footerText && footerLinkAction && (
        <p className={`text-sm ${textColPrimary} text-center mt-4`}>
          {footerText}{" "}
          <Link
            to={footerLinkAction}
            className={` ${textColSecondary} font-medium hover:underline`}
          >
            {footerLinkText}
          </Link>
        </p>
      )}
    </div>
  );
};

export default AuthForm;
