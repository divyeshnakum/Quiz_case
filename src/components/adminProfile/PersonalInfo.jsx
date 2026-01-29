import { bgCartColor, borderColor, textColPrimary, textColSecondary, TextGray } from "../ColorLayout";

const InfoItem = ({ label, value }) => (
  <div className={`border-b border-dotted ${borderColor} `}>
    <p className={`text-sm font-medium `}>{label}</p>
    <p className={` text-sm ${TextGray}`}>{value}</p>
  </div>
);

const PersonalInfo = ({ data }) => {
  return (
    <div
      className={`border ${borderColor} rounded-2xl ${bgCartColor} rounded-xl p-4`}
    >
      <div className={` ${textColPrimary} border-b ${borderColor} md-2 sm:mb-4`}>
        <h3 className="font-semibold mb-1 sm:mb-2">Personal Information</h3>
      </div>
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-5 ${textColSecondary}`}>
        {data.map((item, index) => (
          <InfoItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PersonalInfo;
