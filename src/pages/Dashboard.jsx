import { useState } from "react";
import Sidebar from "../components/SideBar";
import HeaderAdmin from "../components/HeaderAdmin";
import DashboardStats from "../components/DashboardStats";
import GraphCard from "../components/GraphCard";
import ReusableTableCard from "../components/ReusableTableCard";
import {
  bgCartColor,
  textColPrimary,
  textColSecondary,
  bgColor,
} from "../components/ColorLayout";
import Student from "./students/Students";
import Blog from "../components/Blog";
import Quizzes from "./quizzes/Quizzes";
import Rewards from "./rewards/Rewards";
import Payment from "./payment/Payment";
import Analytics from "./analytics/Analytics";
import { useNavigate } from "react-router-dom";
import SettingsPage from "./setting/SettingsPage";
import NotificationForm from "./adminProfile/NotificationForm";
import AdminProfilePage from "./adminProfile/AdminProfilePage";
import QuizPages from "./quizzes/QuizPages";
import ReusableTable from "../components/ReusableTable";
const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // 🔹 Highlighted Change: Separate states for each modal
  const [isNotificationOpen, setNotificationOpen] = useState(false);
  const [isQuizOpen, setQuizOpen] = useState(false);

  const navigate = useNavigate();
  const menuNames = [
    "Dashboard",
    "Students",
    "Quizzes",
    "Rewards",
    "Payments",
    "Analytics",
    "Setting",
    "Adminprofile",
  ];

  const currentPage = menuNames[activeIndex];

  // 🔹 Highlighted Change: Open/close functions
  const openNotificationModal = () => setNotificationOpen(true);
  const closeNotificationModal = () => setNotificationOpen(false);

  const openQuizModal = () => setQuizOpen(true);
  const closeQuizModal = () => setQuizOpen(false);

  // ✅ Table Columns
  const columns = [
    { label: "Sr No.", key: "index" },
    { label: "Quiz Title", key: "title" },
    { label: "Attempts", key: "attempts" },
    { label: "Status", key: "status", isStatus: true },
  ];

  // ✅ Table Data
  const quizzes = [
    { title: "Monthly GK Quiz", attempts: 5, status: "Live" },
    { title: "Science Basics", attempts: 20, status: "Upcoming" },
    { title: "Coding Basics", attempts: 103, status: "Expired" },
    { title: "C++ Aptitude", attempts: 97, status: "Draft" },
  ];
  const studColumns = [
    { key: "name", label: "Name" },
    { key: "college", label: "College" },
    { key: "dept", label: "Dept" },
    { key: "date", label: "Date" },
    { key: "referral", label: "Referral" },
    { key: "status", label: "Status" },
  ];
  const studentData = [
    {
      id: 1,
      name: "Sakshi Pande",
      college: "Ganpat University",
      dept: "Computer science",
      date: "Jan 20, 2025",
      referral: "Yes",
      status: "Rejected",
    },
    {
      id: 2,
      name: "Jignya Mishra",
      college: "Parul University",
      dept: "Electrical Engineering",
      date: "Jun 12, 2026",
      referral: "No",
      status: "Verified",
    },
  ];
  // ✅ Status Colors
  const statusColorMap = {
    Live: "text-red-500 border-red-600 cursor-pointer w-25",
    Upcoming: "text-yellow-500 border-yellow-600 cursor-pointer w-25",
    Expired: "text-gray-500 border-gray-600 cursor-pointer w-25",
    Draft: "text-green-500 border-green-600 cursor-pointer w-25",
  };

  return (
    <>
      <div className={`flex flex-col md:flex-row min-h-screen ${bgCartColor}`}>
        {/* Sidebar */}
        <Sidebar
          className="hidden md:block w-64 flexed-shrink-0"
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />

        {/* Sidebar overlay for mobile */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div
              className="fixed inset-0 bg-black opacity-50"
              onClick={() => setSidebarOpen(false)}
            ></div>
            <Sidebar
              className={`fixed inset-y-0 left-0 w-64 ${bgCartColor} z-50`}
              setSidebarOpen={setSidebarOpen}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </div>
        )}

        {/* Main content */}
        <div className="flex-1 gap-4 flex flex-col min-h-screen p-4">
          {/* Header */}
          <HeaderAdmin
            onHamburgerClick={() => setSidebarOpen(!sidebarOpen)}
            onProfileClick={() =>
              setActiveIndex(menuNames.indexOf("Adminprofile"))
            }
            onNotifiClick={openNotificationModal} // 🔹 Open Notification modal
          />

          {/* Content area */}
          <div className={`${bgColor} relative flex-1 p-4 rounded-2xl`}>
            {/* 🔹 Stats */}
            <div
              className={`duration-200 ${
                isNotificationOpen || isQuizOpen ? "blur-sm" : ""
              }`}
            >
              {currentPage === "Dashboard" && (
                <>
                  <DashboardStats onButtonClick={openQuizModal} />
                  <Blog />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <GraphCard title="Student Activity Graph" />
                    <ReusableTableCard
                      title="Recent Quiz"
                      viewAllLink
                      onViewAllClick={() =>
                        setActiveIndex(menuNames.indexOf("Quizzes"))
                      }
                      columns={columns}
                      data={quizzes}
                      statusColorMap={statusColorMap}
                    />
                      </div>
                    <ReusableTable
                      data={studentData}
                      columns={studColumns}
                      showSearch={false}
                      showFilter={false}
                      isQuizzesPage={false}
                      showDashboardOn={true}
                      ViewStudent={() =>
                        setActiveIndex(menuNames.indexOf("Students"))
                      }
                      showPagination={false}
                    />
                </>
              )}

              {currentPage === "Students" && <Student />}
              {currentPage === "Quizzes" && <Quizzes />}
              {currentPage === "Rewards" && <Rewards />}
              {currentPage === "Payments" && <Payment />}
              {currentPage === "Analytics" && <Analytics />}
              {currentPage === "Setting" && <SettingsPage />}
              {currentPage === "Adminprofile" && <AdminProfilePage />}
            </div>

            {/* 🔹 Highlighted Change: Render modals independently */}
            {isNotificationOpen && (
              <NotificationForm
                isOpen={true}
                onClose={closeNotificationModal}
              />
            )}
            {isQuizOpen && <QuizPages isOpen={true} onClose={closeQuizModal} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
