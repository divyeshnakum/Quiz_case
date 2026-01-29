import ProfileHeader from "../../components/adminProfile/ProfileHeader";
import PersonalInfo from "../../components/adminProfile/PersonalInfo";
import SubAdminList from "../../components/adminProfile/SubAdminList";
import { borderColor, bgColor } from "../../components/ColorLayout";
import { useState, useEffect } from "react";
import EditProfileModal from "../../components/adminProfile/EditProfileModal";
import ReusableTable from "../../components/ReusableTable";
import AddSubAdminModal from "../../components/adminProfile/AddProfileModal";
import DashboardStats from "../../components/DashboardStats";
import AdminSubProfile from "./AdminSubProfile";
const AdminProfilePage = () => {
  const [admin, setAdmin] = useState([]);
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [open, setOpen] = useState(false);
  const [modalOpenBlur, setModalOpenBlur] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Nakum Divyesh p.",
    email: "divyesh37@xyz.com",
    role: "Super Admin",
    image: "https://i.pravatar.cc/150",
    personalInfo: {
      fullName: "Kapadia Ashish S",
      email: "ashishk37@xyz.com",
      phone: "+91 6353635263",
      gender: "Male",
      dateJoined: "15 Jan 2025",
      lastActivity: "Today 11:45 AM",
    },
  });

  const openSubAdminProfile = (row) => {
    setSelectedAdmin(row);
  };
  const handleOpenModal = () => {
    setModalOpenBlur(true);
  };

  const handleCloseModal = () => {
    setModalOpenBlur(false);
  };

  useEffect(() => {
    setAdmin([
      {
        adminname: "Divyesh",
        email: "xyz12@gmail.com",
        role: "Computer science",
        status: "Rejected",
      },
      ...Array.from({ length: 9 }, (_, i) => ({
        id: i + 2,
        adminname: "Milan",
        email: "abc12@gmail.com",
        role: "Computer science",
        status: ["Verified", "Rejected", "Pending"][i % 3],
      })),
    ]);
  }, []);

  const handleSave = (updatedData) => {
    setProfileData((prev) => ({
      ...prev,
      ...updatedData,
      personalInfo: {
        ...prev.personalInfo,
        ...updatedData.personalInfo,
      },
    }));
    setModalOpenBlur(false);
  };
  return (
    <>
      <div className="relative">
        {!selectedAdmin ? (
          <>
            <div
              className={`duration-200 ${modalOpenBlur || open ? "blur-sm" : ""}`}
            >
              <DashboardStats title="My Profile" showButton={false}>
                <div className="grid gap-4">
                  <div className="">
                    <ProfileHeader
                      name={profileData.name}
                      email={profileData.email}
                      role={profileData.role}
                      image={profileData.image}
                      onEdit={handleOpenModal}
                    />
                  </div>
                  <div>
                    {" "}
                    <PersonalInfo
                      data={[
                        {
                          label: "Full Name",
                          value: profileData.personalInfo.fullName,
                        },
                        {
                          label: "Email",
                          value: profileData.personalInfo.email,
                        },
                        {
                          label: "Phone Number",
                          value: profileData.personalInfo.phone,
                        },
                        {
                          label: "Gender",
                          value: profileData.personalInfo.gender,
                        },
                        {
                          label: "Date Joined",
                          value: profileData.personalInfo.dateJoined,
                        },
                        {
                          label: "Last Activity",
                          value: profileData.personalInfo.lastActivity,
                        },
                      ]}
                    />
                  </div>
                  <div>
                    <SubAdminList students={admin} onAdd={() => setOpen(true)}>
                      {" "}
                      <>
                        <ReusableTable
                          data={admin}
                          columns={[
                            { key: "adminname", label: "Submit Admin Name" },
                            { key: "email", label: "Email" },
                            { key: "role", label: "Role" },
                            { key: "status", label: "Status" },
                          ]}
                          showSearch={false}
                          showFilter={false}
                          isQuizzesPage={false}
                          onSecondColumnClick={openSubAdminProfile}
                        />
                      </>
                    </SubAdminList>
                  </div>
                </div>
              </DashboardStats>
            </div>
            <div>
              <EditProfileModal
                isOpen={modalOpenBlur}
                onSave={handleSave}
                initialData={profileData}
                onClose={handleCloseModal}
              />
              <AddSubAdminModal isOpen={open} onClose={() => setOpen(false)} />
            </div>
          </>
        ) : (
          <div>
            <AdminSubProfile
              isOpen={modalOpenBlur}
              admin={selectedAdmin}
              onBack={() => setSelectedAdmin(null)}
              onClose={handleCloseModal}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default AdminProfilePage;
