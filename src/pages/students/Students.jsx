// pages/Student.jsx
import React, { useEffect, useState } from "react";
import DashboardStats from "../../components/DashboardStats";
import ReusableTable from "../../components/ReusableTable";
import StudentProfile from "./StudentProfile";
import { textColPrimary } from "../../components/ColorLayout";
const Student = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    setStudents([
      {
        id: 1,
        name: "Sakshi Pande",
        college: "Ganpat University",
        dept: "Computer science",
        date: "Jan 20, 2025",
        referral: "Yes",
        status: "Rejected",
      },
      ...Array.from({ length: 9 }, (_, i) => ({
        id: i + 2,
        name: "Jignya Mishra",
        college: "Parul University",
        dept: "Electrical Engineering",
        date: "Jun 12, 2026",
        referral: "No",
        status: ["Verified", "Rejected", "Pending"][i % 3],
      })),
    ]);
  }, []);

  // 🔥 Open profile
  const openStudentProfile = (row) => {
    setSelectedStudent(row);
  };

  // 🔙 Go back
  const goBackToList = () => {
    setSelectedStudent(null);
  };

  return (
    <>
      <DashboardStats
        title="Students"
        buttonText="Add Student"
        showButton={false}
      >
        {!selectedStudent ? (
          <ReusableTable
            data={students}
            columns={[
              { key: "name", label: "Name" },
              { key: "college", label: "College" },
              { key: "dept", label: "Dept" },
              { key: "date", label: "Date" },
              { key: "referral", label: "Referral" },
              { key: "status", label: "Status" },
            ]}
            showSearch={true}
            showFilter={true}
            isQuizzesPage={false}
            onSecondColumnClick={openStudentProfile} // ✅ Click triggers profile
          />
        ) : (
          <div>
            

            <StudentProfile student={selectedStudent} onBack={goBackToList} />
          </div>
        )}
      </DashboardStats>
    </>
  );
};

export default Student;
