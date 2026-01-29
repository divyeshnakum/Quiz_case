import Header from "./HeaderLogin";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPass from "./pages/ResetPass";
import SignValidation from "./pages/SignValidation";
import ForgotValidation from "./pages/ForgotValidation";
import Dashboard from "./pages/Dashboard";
import Student from "./pages/students/Students";
import Quizzes from "./pages/quizzes/Quizzes";
import QuizPages from "./pages/quizzes/QuizPages";
import Rewards from "./pages/rewards/Rewards";
import Analytics from "./pages/analytics/Analytics";
import NotificationForm from "./pages/adminProfile/NotificationForm";
import AdminProfilePage from "./pages/adminProfile/AdminProfilePage";
import { getAdminTheme,applyAdminTheme } from "./utils/AdminTheme";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    const savedTheme = getAdminTheme();
    applyAdminTheme(savedTheme);

    if (savedTheme === "system") {
      const media = window.matchMedia("(prefers-color-scheme: dark)");
      const listener = () => applyAdminTheme("system");
      media.addEventListener("change", listener);

      return () => media.removeEventListener("change", listener);
    }
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signValidation" element={<SignValidation />}></Route>
          <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
          <Route path="/resetPass" element={<ResetPass />}></Route>
          <Route
            path="/forgotValidation"
            element={<ForgotValidation />}
          ></Route>
          <Route path="/dashboars" element={<Dashboard />}></Route>
          <Route path="/students" element={<Student />}></Route>
          <Route path="/quizzes" element={<Quizzes />}></Route>
          <Route path="/quizmodal" element={<QuizPages />}></Route>
          <Route path="/rewards" element={<Rewards />}></Route>
          <Route path="/analytics" element={<Analytics />}></Route>
          <Route path="/notification" element={<NotificationForm />}></Route>
          <Route path="/adminprofile" element={<AdminProfilePage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
