import { borderColor,bgColor,bgCartColor,textColPrimary, textColSecondary, baseColorYel, hoverColorYel } from "../ColorLayout";

const ProfileHeader = ({ name, email, role, image, onEdit }) => {
  
  return (
    <>
      <div className="flex justify-center w-full">
  <div className="flex items-center w-full max-w-full">
    
    {/* Avatar */}
    <div className="flexed-shrink-0 mr-3 sm:mr-4">
      <img
        src={image}
        alt={name}
        className="w-14 h-14 sm:w-20 sm:h-20 md:w-26 md:h-24 rounded-full object-cover border"
      />
    </div>

    {/* Profile Card */}
    <div
      className={`flex flex-col sm:flex-row items-start sm:items-center w-full border ${bgCartColor} ${borderColor} rounded-2xl p-4 gap-3 sm:gap-4`}
    >
      
      {/* Info */}
      <div className="flex-1">
        <h2
          className={`text-base sm:text-xl ${textColPrimary} font-bold`}
        >
          {name}
        </h2>
        <p className={`text-sm ${textColSecondary}`}>{email}</p>
        <p className={`text-sm ${textColSecondary}`}>{role}</p>
      </div>

      {/* Button */}
      <div className="flexed-shrink-0 w-full sm:w-auto">
        <button
          onClick={onEdit}
          className={`${baseColorYel} ${textColSecondary} ${hoverColorYel} w-full sm:w-auto px-4 sm:px-5 py-2 rounded-lg text-sm font-medium transition`}
        >
          Edit Profile
        </button>
      </div>

    </div>
  </div>
</div>

    </>
  );
};

export default ProfileHeader;
