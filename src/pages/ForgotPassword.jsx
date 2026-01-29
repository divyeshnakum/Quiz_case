import AuthLayout from "../components/AuthLayout";
import AuthForm from "../components/AuthForm";
import forgotImg from "../assets/images/forget-password.png";
import Header from "../HeaderLogin";
import { bgColor } from "../components/ColorLayout";
import { useNavigate } from "react-router-dom";
const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // ✅ after validation / API success
    navigate("/forgotValidation");
  };
  return (
    <>
      <div className={`${bgColor} h-full`}>
        <Header />
        <AuthLayout image={forgotImg}>
          <AuthForm
            title="Forgot Password"
            subtitle="Enter your email or phone"
            buttonText="Reset Password"
            fields={[
              {
                label: "Email or Phone",
                type: "text",
                placeholder: "Enter here",
              },
            ]}
            footerText="Back to"
            footerLinkText="Sign in"
            footerLinkAction="/"
            ButtonClick={handleLogin}
          />
          
        </AuthLayout>
      </div>
    </>
  );
};

export default ForgotPassword;
