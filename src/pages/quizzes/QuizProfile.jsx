import React, { useEffect, useState } from "react";
import ReusableTable from "../../components/ReusableTable";
import Blog from "../../components/Blog";
import DeleteIcon from "../../assets/icons/delete-icon.png";
import DropDownIcon from "../../assets/icons/filter-drop-down-arrow.png";
import BackIcon from "../../assets/icons/back-arrow-icon.png";
import CodeImg from "../../assets/images/code-img.png";
import {
  bgCartColor,
  bgColor,
  GreenSuccessCol,
  borderColor,
  textColSecondary,
  textColPrimary,
} from "../../components/ColorLayout";
const QuizProfile = ({ student, onBack }) => {
  const bggray = "bg-gray-300";

  const [students, setStudents] = useState([]);

  useEffect(() => {
    setStudents([
      {
        id: 1,
        name: "Basic of Aptitude",
        college: "Aptitude",
        score: "Median",
        timeTaken: "20",
        upiStatus: "1245",
        status: "Published",
        created: "12 jan 2026",
      },
      ...Array.from({ length: 9 }, (_, i) => ({
        id: i + 2,
        name: "Basic of Aptitude",
        college: "Aptitude",
        score: "Median",
        timeTaken: "20",
        upiStatus: "1245",
        status: ["Published", "Draft", "Unpublished"][i % 3],
        created: "12 jan 2026",
      })),
    ]);
  }, []);

  return (
    <>
      <div className={` max-w-7xl mx-auto`}>
        <div>
          {/* Start QuizProfile  */}
          <div>
            <button
              onClick={onBack}
              className={` ${textColPrimary} font-semibold flex items-center group mb-4 `}
            >
              <span>
                <img
                  src={BackIcon}
                  alt=""
                  className="h-4 w-2.5 group-hover:w-3 group-hover:h-4.5"
                />
              </span>
              <span className={`${textColPrimary} ml-2    `}>
                Back to Quiz List
              </span>
            </button>
          </div>

          {/* Start QuizProfile  */}
          <div>
            <div
              className={`${bgCartColor} border ${borderColor} rounded-2xl p-4 mb-4 flex flex-col md:flex-row md:justify-between gap-4`}
            >
              {/* Left section: Image + Info */}
              <div className="flex items-center gap-6">
                {/* Image */}
                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center`}
                >
                  <img
                    src={CodeImg}
                    alt="Quiz"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Quiz Details */}
                <div className="flex flex-col gap-1">
                  {/* Title */}
                  <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                    {student.title}
                  </h2>

                  {/* Category & Difficulty */}
                  <div className="flex flex-wrap gap-3 mt-1">
                    <span
                      className={`${bggray} text-xs sm:text-sm px-2 py-1 rounded-md`}
                    >
                      Category: {student.category}
                    </span>
                    <span
                      className={`${bggray} text-xs sm:text-sm px-2 py-1 rounded-md`}
                    >
                      Difficulty: {student.diffilculty}
                    </span>
                  </div>

                  {/* Quiz ID */}
                  <p className=" text-xs sm:text-sm mt-1">
                    Quiz ID: {student.quizId}
                  </p>

                  {/* Created / Last Updated */}
                  <p className="text-xs sm:text-sm">
                    Created: {student.created} | Last updated: {student.updated}
                  </p>
                </div>
              </div>

              {/* Right section (optional buttons) */}
              <div className="flex items-start gap-2 mt-4 md:mt-0">
                <select className="px-3 py-1 border rounded-lg">
                  <option hidden>Status</option>
                  <option>Paid</option>
                  <option>Pending</option>
                  <option>Failed</option>
                </select>
                <button className="border px-3 py-1 flex rounded-lg text-sm gap-1 cursor-pointer">
                  <img src={DeleteIcon} className="w-5 h-5" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* End QuizProfile  */}

        {/* Blog */}
        <div>
          <Blog hideExtras />
        </div>

        {/* Table */}
        <div>
          <ReusableTable
            data={students}
            columns={[
              { key: "name", label: "Name" },
              { key: "college", label: "College" },
              { key: "score", label: "Score" },
              { key: "timeTaken", label: "Time taken" },
              { key: "upiStatus", label: "UPI Status" },
              { key: "status", label: "Status" },
              { key: "created", label: "Created" },
            ]}
            showSearch={false} // ✅ SEARCH VISIBLE
            showFilter={false} // ✅ FILTER VISIBLE
            isQuizzesPage={true} // ✅ FILTER'S VISIBLE
          />
        </div>
      </div>
    </>
  );
};
export default QuizProfile;
