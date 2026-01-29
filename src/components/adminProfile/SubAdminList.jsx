import { baseColorYel, bgCartColor, bgColor, borderColor, hoverColorYel, textColPrimary, textColSecondary } from "../ColorLayout";
import SearchIcon from "../../assets/icons/uil_search.png";
import { useEffect ,useState} from "react";
import ReusableTable from "../ReusableTable";
const SubAdminList = ({  onAdd,children  }) => {
    
  
  return (
    <div className={`border ${borderColor} ${bgCartColor} rounded-2xl  p-4`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
        <h3 className={`font-bold ${textColPrimary}`}>Sub Admin List</h3>

        <button
          onClick={onAdd}
          className={`${baseColorYel} ${textColSecondary} ${hoverColorYel} font-semibold px-4 py-2 rounded-lg text-sm`}
        >
          Add New Sub Admin
        </button>
      </div>
      {/* Search + Filters */}
      <div
        className={`flex flex-col items-center justify-between sm:flex-row gap-3 mb-4 border rounded-2xl ${borderColor} ${bgColor} ${textColSecondary} p-2`}
      >
        <div className="w-full flex items-center sm:max-w-sm">
          <img
            src={SearchIcon}
            className="absolute text-center justify-center ml-3 w-4 h-4"
          />
          <input
            placeholder="Search by name or email..."
            className={`border ${bgCartColor} ${borderColor} rounded-lg pl-8 pr-4 py-2 w-full text-sm`}
          />
        </div>
        <div className={`flex flex-row gap-2 md:gap-4`}>
          <select className={`border ${bgCartColor} ${borderColor} rounded-lg px-1 sm:px-3 py-1`}>
            <option>All - Roles</option>
            <option>A - Roles</option>
            <option>B - Roles</option>
            <option>C - Roles</option>
          </select>

          <select className={`border ${bgCartColor} ${borderColor} rounded-lg px-1 sm:px-3 py-1`}>
            <option>All - Status</option>
            <option>A - Status</option>
            <option>B - Status</option>
            <option>C - Status</option>
          </select>
        </div>{" "}
      </div>

      {/* Table */}
      <div className="overflow-x-auto ">
     {children  }
      </div>
    </div>
  );
};

export default SubAdminList;
