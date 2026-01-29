import GeneralSettings from "../../components/setting/GeneralSettings";
import NotificationSecurity from "../../components/setting/NotificationSecurity";
import AppearanceSettings from "../../components/setting/AppearanceSettings";
import PasswordUpdate from "../../components/setting/PasswordUpdate";
import DashboardStats from "../../components/DashboardStats";

const SettingsPage = () => {
  return (
    <>
      <DashboardStats
        title="Setting"
        buttonText="Payment setup"
        showButton={false}
        extraButton={false}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        <GeneralSettings />
        <NotificationSecurity />
        <AppearanceSettings />
        <PasswordUpdate />
      </div>
    </>
  );
};

export default SettingsPage;
