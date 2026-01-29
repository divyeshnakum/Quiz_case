// StudentProfile.jsx
import React from "react";
import ImgStudentPro4 from "../../assets/images/image-student-p4.png";
import StudentPayment from "../../assets/images/student-payment-img.png";
import { ChevronLeftIcon,Phone,Mail } from "lucide-react";
import {
  bgCartColor,
  bgColor,
  GreenSuccessCol,
  borderColor,
  textColSecondary,
  textColPrimary,
  TextGray,
} from "../../components/ColorLayout";
import ReusableTableCard from "../../components/ReusableTableCard";
import Blog from "../../components/Blog";

const StudentProfile = ({ student, onBack }) => {
  if (!student) return null;

  const bggray = "bg-gray-300";
  // ✅ Table Columns
  const columns = [
    { label: "Sr No.", key: "index" },
    { label: "Quiz Title", key: "title" },
    { label: "Attempts", key: "attempts" },
    { label: "Status", key: "status" },
    { label: "Score", key: "score" },
    { label: "Transaction", key: "transaction" },
  ];

  // ✅ Table Data
  const quizzes = [
    {
      title: "Monthly GK Quiz",
      attempts: 5,
      status: "Attempted",
      score: "120pt",
      transaction: "Success",
    },
    {
      title: "Science Basics",
      attempts: 20,
      status: "Skip",
      score: "0pt",
      transaction: "Faild",
    },
    {
      title: "Coding Basics",
      attempts: 103,
      status: "Notify",
      score: "0pt",
      transaction: "-",
    },
    {
      title: "C++ Aptitude",
      attempts: 97,
      status: "Notify",
      score: "0pt",
      transaction: "-",
    },
  ];

  // ✅ Status Colors
  const statusColorMap = {
    Live: "text-red-500 border-red-600 w-full",
    Upcoming: "text-yellow-500 border-yellow-600 w-full",
    Expired: "text-gray-500 border-gray-600 w-full",
    Draft: "text-green-500 border-green-600 w-full",
  };

  const initials = student.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className={` max-w-7xl mx-auto`}>
      {/* Back Button */}
      <button
        onClick={onBack}
        className={` ${textColPrimary} font-semibold flex items-center group mb-4 `}
      >
        <span>
          <ChevronLeftIcon
            className="h-5 w-5 group-hover:w-6 group-hover:h-6"
          />
        </span>
        <span className={`${textColPrimary} ml-2    `}>
          Back to Student Listwadaszd
        </span>
      </button>

      {/* Profile Card */}
      <div
        className={`${bgCartColor} border ${borderColor}  rounded-2xl p-4 mb-4 flex flex-col md:flex-row  md:justify-between gap-4`}
      >
        <div className="flex items-center pl-4 gap-8">
          <div
            className={`w-20 h-20 rounded-full ${bggray}  flex items-center justify-center text-2xl font-bold ${TextGray}`}
          >
            {student.image ? (
              <img
                src={student.image}
                className="w-16 h-16 rounded-full object-cover"
              />
            ) : (
              <div className="w-full h-full rounded-full  flex items-center justify-center text-xl font-semibold">
                {initials}
              </div>
            )}
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">
              {student.name}
            </h2>
            <p className={`${textColSecondary}`}>{student.course}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {student.skills?.map((skill) => (
                <span
                  key={skill}
                  className={`px-2  ${bggray} ${textColPrimary} rounded-full text-sm`}
                >
                  {skill}
                </span>
              ))}
            </div>
            <div
              className={`flex flex-col sm:flex-row sm:items-center gap-4 text-sm mt-2 ${textColSecondary}`}
            >
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> {student.email}
              </span>
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> {student.phone}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-start">
          <span
            className={`px-3 py-1 ${GreenSuccessCol} cursor-pointer rounded-full font-medium`}
          >
            {student.status}
          </span>
        </div>
      </div>

      {/* Stats */}

      {/* Blog */}
      <Blog hideExtras />

      {/* Start Quiz Report */}
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className={`  overflow-x-auto lg:col-span-3`}>
          <ReusableTableCard
            title="Recent Quiz"
            viewAllLink="/quizzes"
            columns={columns}
            data={quizzes}
            statusColorMap={statusColorMap}
          />
        </div>

        {/* Support / Help Tickets */}
        <div
          className={`${bgCartColor} border ${borderColor} rounded-2xl p-4 `}
        >
          <div className={`border-b text-left pb-3 ${borderColor}`}>
            <h3 className={`text-sm sm:text-xl  text-left ${textColSecondary}`}>
              Support / Help Ticket
            </h3>
          </div>
          <div className={`flex flex-col items-center justify-center`}>
            <img
              src={ImgStudentPro4}
              alt="No complaints"
              className="w-full h-full px-5 pt-2 sm:px-2 sm:pt-8 mb-2"
            />
            <div className={`w-full sm:px-6`}>
              <p className={`${TextGray} text-xs sm:text-lg text-center pb-4`}>
                Ooops! Currently no have any complaint
              </p>
            </div>
          </div>
        </div>
        {/* Student perfomans */}
        <div
          className={`${bgCartColor} border ${borderColor} rounded-2xl p-4 overflow-x-auto lg:col-span-2`}
        >
          <div className={`border-b text-left pb-3 ${borderColor}`}>
            <h3 className={`text-sm sm:text-xl  text-left ${textColSecondary}`}>
              Student Perfomans
            </h3>
          </div>
          <div className={`flex flex-col items-center justify-center`}>
            <img
              src={ImgStudentPro4}
              alt="No complaints"
              className="w-full h-full py-2 px-5 sm:px-28"
            />
            <p className={`${TextGray} text-xs sm:text-lg text-center pb-1`}>
              Ooops! Currently no have any complaint
            </p>
          </div>
        </div>
        {/* Payment Method */}
        <div
          className={`${bgCartColor} border ${borderColor} rounded-2xl p-4 `}
        >
          <div className={`border-b text-left pb-3 ${borderColor}`}>
            <h3 className={`text-sm sm:text-xl  text-left ${textColSecondary}`}>
              Payment Method
            </h3>
          </div>
          <div className={`flex flex-col items-center justify-center`}>
            <img
              src={StudentPayment}
              alt="No complaints"
              className="w-full h-full px-5 py-2 sm:px-10 sm:py-6 mb-2"
            />
            <div className={`w-full pb-2`}>
              <p className={`${textColSecondary} text-xs sm:text-sm text-center pb-2`}>
                Sakshi has been a verified UPI
              </p>
              <p
                className={` ${bgColor} ${textColSecondary} border rounded-xl px-2 py-1 text-xs overflow-hidden text-ellipsis whitespace-nowrap `}
              >
                sksdsds8943754@icicic.pay
              </p>
            </div>
          </div>
        </div>
        {/* End Quiz Report   */}
      </div>
    </div>
  );
};

export default StudentProfile;
