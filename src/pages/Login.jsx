import AuthLayout from "../components/AuthLayout";
import AuthForm from "../components/AuthForm";
import loginImg from "../assets/images/Login-cuate-1.png";
import Header from "../HeaderLogin";
import { useNavigate } from "react-router-dom";
import { bgColor } from "../components/ColorLayout";
import { useState } from "react";
const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // ✅ after validation / API success
    navigate("/dashboard");
  };
  return (
    <>
      <div className={`${bgColor} max-h-screen`}>
        <Header />
        <AuthLayout image={loginImg}>
          <AuthForm
            title="Welcome Back"
            subtitle="Enter your email and password to sign in"
            buttonText="Sign In"
            fields={[
              {
                label: "Email",
                type: "email",
                placeholder: "Your email address",
              },
              {
                label: "Password",
                type: "password",
                placeholder: "Your password",
              },
            ]}
            showRememberMe
            showForgotPassword
            footerText="Don't have an account?"
            footerLinkText="Sign up"
            footerLinkAction="signup"
            forgotLink="forgotPassword"
            ButtonClick={handleLogin}
          />
          
        </AuthLayout>
      </div>
    </>
  );
};

export default Login;
