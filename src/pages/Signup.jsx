import AuthLayout from "../components/AuthLayout";
import AuthForm from "../components/AuthForm";
import signupImg from "../assets/images/Login-cuate-2.png";
import Header from "../HeaderLogin";
import { bgColor } from "../components/ColorLayout";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // ✅ after validation / API success
    navigate("/signValidation");
  };
  return (
    <>
      {" "}
      <div className={`${bgColor}`}>
        <Header />
        <AuthLayout image={signupImg}>
          <AuthForm
            title="Create Account"
            subtitle="Enter your details to create an account"
            buttonText="Sign Up"
            fields={[
              {
                label: "Email",
                type: "email",
                placeholder: "Your email address",
              },
              { label: "Password", type: "password", placeholder: "Password" },
              {
                label: "Confirm Password",
                type: "password",
                placeholder: "Confirm password",
              },
            ]}
            showRememberMe
            showForgotPassword
            footerText="Already have an account?"
            footerLinkText="Sign in"
            footerLinkAction="/"
            forgotLink="../forgotPassword"
            ButtonClick={handleLogin}
          />
        </AuthLayout>
      </div>
    </>
  );
};

export default Signup;
