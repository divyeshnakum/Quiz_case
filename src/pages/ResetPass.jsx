import React from "react";
import OtpBoxUI from "../components/OtpLayout";
import Header from "../HeaderLogin";
import { bgColor } from "../components/ColorLayout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Notification from "../components/notification/Notification";
const ResetPass = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  const handleLogin = () => {
    navigate("/dashboard");
  };
  return (
    <>
      <div className={`${bgColor}`}>
        <Header />
        <OtpBoxUI
          title="Reset Password"
          buttonText="Reset Password"
          subtitle="Enter your new password to continue"
          footTitle="Make sure password contain least 8 digits alphabets numerical."
          showPasswordFields={true} // Show password inputs
          ButtonClick={handleLogin}
        />{" "}
        <Notification
          show={show}
          type="success"
          title="Password reset successfully"
          message="Your password has been updated"
          onClose={() => setShow(false)}
        />
      </div>
    </>
  );
};

export default ResetPass;
