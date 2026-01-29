import React from "react";
import OtpBoxUI from "../components/OtpLayout";
import Header from "../HeaderLogin";
import { bgColor } from "../components/ColorLayout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ForgotValidation = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  const handleReset = () => {
    // ✅ after validation / API success
    navigate("/resetPass");
  };

  return (
    <>
      <div className={`${bgColor}`}>
        <Header />
        <OtpBoxUI
          title="Verification"
          subtitle="Enter OTP and verify your account"
          buttonText="Verify"
          timer="00:45"
          footTitle="Didn't Receive Code?"
          footSubtitle="Resent"
          showPasswordFields={false} // new prop to show password inputs
          ButtonClick={handleReset}
        />{" "}
      </div>
    </>
  );
};

export default ForgotValidation;
