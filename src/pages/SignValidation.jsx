import React from "react";
import OtpBoxUI from "../components/OtpLayout";
import { bgColor } from "../components/ColorLayout";
import Header from "../HeaderLogin";
import { useState } from "react";
import Notification from "../components/notification/Notification";
import { useNavigate } from "react-router-dom";
const SignValidation = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  const handleLogin = () => {
    // ✅ after validation / API success
    navigate("/dashboard");
  };

  return (
    <>
      {" "}
      <div className={`${bgColor}`}>
        <Header />
        <OtpBoxUI
          title="OTP Verification"
          subtitle="Enter OTP and verify your account"
          buttonText="Verify"
          timer="00:45"
          footTitle="Didn't Receive Code?"
          footSubtitle="Resent"
          showPasswordFields={false} // new prop to show password inputs
          ButtonClick={handleLogin}
        />
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

export default SignValidation;
