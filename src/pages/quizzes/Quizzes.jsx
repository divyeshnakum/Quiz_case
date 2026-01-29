// pages/Student.jsx
import React, { useEffect, useState } from "react";
import DashboardStats from "../../components/DashboardStats";
import Blog from "../../components/Blog";
import ReusableTable from "../../components/ReusableTable";
import { useNavigate } from "react-router-dom";
import QuizPages from "./QuizPages";

const Quizzes = () => {
  const [students, setStudents] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setStudents([
      {
        id: 1,
        title: "Basic of Aptitude",
        category: "Aptitude",
        diffilculty: "Median",
        questions: "20",
        participants: "1245",
        status: "Published",
        created: "12 jan 2026",
      },
      ...Array.from({ length: 9 }, (_, i) => ({
        id: i + 2,
        title: "Basic of Aptitude",
        category: "Aptitude",
        diffilculty: "Median",
        questions: "20",
        participants: "1245",
        status: ["Published", "Draft", "Unpublished"][i % 3],
        created: "12 jan 2026",
      })),
    ]);
  }, []);

    // function to open modal
    const handleOpenModal = () => {
      setOpenModal(true);
    };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div>
        <div className="relative">
          {/* BLUR ONLY THIS */}
          <div className={`duration-200 ${openModal ? "blur-sm" : ""}`}>
            <DashboardStats
              title="Quzzes"
              buttonText="Add new quiz"
              showButton={true}
              onButtonClick={handleOpenModal}
            >
              <Blog hideExtras />

              <ReusableTable
                data={students}
                columns={[
                  { key: "title", label: "Title" },
                  { key: "category", label: "Category" },
                  { key: "diffilculty", label: "Diffilculty" },
                  { key: "questions", label: "Questions" },
                  { key: "participants", label: "Participants" },
                  { key: "status", label: "Status" },
                  { key: "created", label: "Created" },
                ]}
                showSearch={true} // ✅ SEARCH VISIBLE
                showFilter={false} // ✅ FILTER VISIBLE
                isQuizzesPage={true} // ✅ FILTER'S VISIBLE
              />
            </DashboardStats>
          </div>
          <QuizPages isOpen={openModal} onClose={handleCloseModal} />
        </div>
      </div>
    </>
  );
};

export default Quizzes;
