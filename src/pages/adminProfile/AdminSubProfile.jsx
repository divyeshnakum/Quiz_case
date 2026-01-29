import ProfileHeader from "../../components/adminProfile/ProfileHeader";
import PersonalInfo from "../../components/adminProfile/PersonalInfo";
import RolesPermissions from "../../components/setting/RolesPermissions";
import StatusActions from "../../components/setting/StatusActions";
import { useState } from "react";
import EditProfileModal from "../../components/adminProfile/EditProfileModal";
const AdminSubProfile = ({ admin, onBack }) => {
  const [modalOpen, setModalOpen] = useState(false);
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

  const handleSave = (updatedData) => {
    setProfileData((prev) => ({
      ...prev,
      ...updatedData,
      personalInfo: {
        ...prev.personalInfo,
        ...updatedData.personalInfo,
      },
    }));
    setModalOpen(false);
  };

  return (
    <div className="grid gap-4">
     

      <ProfileHeader
        name={admin.adminname}
        email={admin.email}
        role={admin.role}
        image="https://i.pravatar.cc/150"
        onEdit={() => setModalOpen(true)}
      />

      <PersonalInfo
        data={[
          { label: "Full Name", value: admin.adminname },
          { label: "Email", value: admin.email },
          { label: "Phone Number", value: admin.phone },
          { label: "Gender", value: admin.gender },
          { label: "Date Joined", value: admin.dateJoined },
          { label: "Last Activity", value: admin.lastActivity },
        ]}
      />
      <EditProfileModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        initialData={profileData}
      />
      <div className="">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-8 gap-4">
            <div className="sm:col-span-5">
          <RolesPermissions /></div>
          <div className="sm:col-span-3">
          <StatusActions /></div>
        </div>
      </div>
    </div>
  );
};

export default AdminSubProfile;
