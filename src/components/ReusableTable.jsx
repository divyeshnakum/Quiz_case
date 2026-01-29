import { useState } from "react";
// Icons
import { FiSearch, FiRefreshCw, FiFilter } from "react-icons/fi";
import { FaTrash, FaSort, FaPencilAlt } from "react-icons/fa";
import {
  bgCartColor,
  bgColor,
  borderColor,
  textColPrimary,
  textColSecondary,
} from "./ColorLayout";
import Dropdown from "./Dropdown";
import RowActionMenu from "./RowActionMenu";
import Pagination from "./Pagination";

const ReusableTable = ({
  data = [],
  columns = [],
  showSearch = true,
  showFilter = true,
  isQuizzesPage = true,
  onSecondColumnClick,
  showLimitedRows = false,
  ViewStudent,
  showDashboardOn = false,
  showPagination=true,
  limitRows = 2, 
}) => {
  const [openRow, setOpenRow] = useState(null);
  const hoverbg = "hover:bg-[#F8F8F8]";
  const hoverText = "group-hover:text-black";
  const [dropdownOpen, setDropdownOpen] = useState(false); // tracks filter dropdown
  const [selectedStatus, setSelectedStatus] = useState("");

  // Dynamic options passed to Dropdown
  const statusOptions = ["Verified", "Pending", "Rejected"];

  const [menuPos, setMenuPos] = useState({ top: 0, left: 0 });

  // 🔥 Internal handler for 2nd column click
  const defaultSecondColumnClick = (row) => {};

  const handleEditClick = (e, id) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setMenuPos({
      top: rect.bottom + window.scrollY,
      left: rect.right + window.scrollX,
    });

    setOpenRow(id);
  };

  return (
    <>
      <div
        className={`${bgCartColor} mt-4 p-4 border ${borderColor} rounded-2xl`}
      >
        {(showSearch || showFilter) && (
          <div className="flex h-full items-center justify-between pb-4 mr-6 sm:mr-0 ">
            {showSearch && (
              <div
                className={`relative w-full sm:max-w-sm ${textColSecondary}`}
              >
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" />
                <input
                  placeholder="Search here"
                  className={`border ${bgCartColor} ${borderColor}  rounded-md pl-8 pr-2 py-2 w-full text-sm`}
                />
              </div>
            )}

            <div className="relative flex w-full items-center text-right  justify-end -mr-6 sm:mr-0">
              {showFilter && (
                <Dropdown
                  options={statusOptions} // Pass your dropdown items
                  defaultValue="Verification Status" // Optional default value
                  open={dropdownOpen} // Controlled open state
                  setOpen={setDropdownOpen} // Function to toggle dropdown
                  onSelect={(val) => setSelectedStatus(val)} // Callback when an item is selected
                  width="40 sm:50 lg:w-55" // Optional: set width of button
                />
              )}
            </div>
            {/* QUIZZES PAGE BUTTONS */}
            {isQuizzesPage && (
              <div className="flex items-center justify-end gap-2 w-fit">
                {/* Filter */}
                <button
                  title="Filter"
                  className={`flex items-center justify-center sm:w-20 sm:h-10 h-8 w-8
               px-2 py-1 sm:px-1 sm:py-2 border rounded-lg text-sm cursor-pointer ${textColSecondary} ${borderColor}`}
                >
                  <FiFilter className="w-5 h-5" />

                  <span className="hidden sm:inline ml-2">Filter</span>
                </button>

                {/* Sort */}
                <button
                  title="Sort"
                  className={`flex items-center justify-center sm:w-20 sm:h-10 h-8 w-8
               px-2 py-1 sm:px-1 sm:py-2 border rounded-lg text-sm cursor-pointer ${textColSecondary} ${borderColor}`}
                >
                  <FaSort className="w-5 h-5" />
                  <span className="hidden sm:inline ml-2">Sort</span>
                </button>

                {/* Refresh */}
                <button
                  title="Refresh"
                  className={`flex items-center justify-center sm:w-20 sm:h-10 h-8 w-8
               px-2 py-1 sm:px-1 sm:py-2 border rounded-lg text-sm cursor-pointer ${textColSecondary} ${borderColor}`}
                >
                  <FiRefreshCw className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        )}
        {showDashboardOn &&(
          <div className={`flex items-center justify-between`}>
            <span className={`sm:text-xl text-md ${textColPrimary}`}>Recently joined Student</span>
            <button className={`text-sx sm:text-md  ${textColSecondary} cursor-pointer hover:underline`}
            onClick={ViewStudent}>
            View All
          </button></div>
        )}
        {/* ✅ RESPONSIVE FIX */}
        <div
          className={`w-full overflow-x-auto transition-all duration-200 ${
            dropdownOpen ? "blur-xs" : ""
          }   `}
          onClick={() => setOpenRow(null)}
        >
          <table
            className={`w-full text-xs sm:text-sm border-separate border-spacing-y-2`}
          >
            <thead className={`${textColSecondary} ${bgColor}`}>
              <tr>
                <th className="p-3 text-left rounded-l-2xl">Sr No.</th>

                {columns.map((col) => (
                  <th key={col.key} className="p-1 sm:p-3 text-center">
                    {col.label}
                  </th>
                ))}

                <th className="p-3 text-left rounded-r-2xl">Action</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr
                  key={item.id}
                  className={`group ${textColSecondary} ${hoverbg} 
                    group transition-all duration-200
                    ${
                      openRow && openRow !== item.id
                        ? "blur-sm pointer-events-none"
                        : ""
                    }
                    ${openRow === item.id ? "relative z-30" : ""}
                   
                  `}
                >
                  {/* 1st column */}
                  <td className={`p-3 rounded-l-2xl ${hoverText}`}>
                    {String(index + 1).padStart(2, "0")}
                  </td>

                  {columns.map((col, colIndex) => (
                    <td
                      key={col.key}
                      className={`p-3 ${hoverText}
                      ${colIndex === 0 ? "cursor-pointer" : ""} 
                    `}
                      // 🔥 Use parent handler if provided, else default
                      onClick={
                        colIndex === 0
                          ? () =>
                              onSecondColumnClick
                                ? onSecondColumnClick(item)
                                : defaultSecondColumnClick(item)
                          : undefined
                      }
                    >
                      {col.render ? col.render(item) : item[col.key]}
                    </td>
                  ))}

                  <td className={`  ${hoverText} rounded-r-2xl `}>
                    <div className="relative flex gap-3">
                      <button
                        className={`border p-1 ${borderColor} rounded-md cursor-pointer`}
                      >
                        <FaTrash className="w-5 h-5" />
                      </button>

                      <button
                        className={`border p-1 ${borderColor} rounded-md cursor-pointer`}
                        // ⭐ TOGGLE menu per row
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenRow(openRow === item.id ? null : item.id);
                        }}
                      >
                        <FaPencilAlt className="w-5 h-5" />
                      </button>

                      <RowActionMenu isOpen={openRow === item.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
{showPagination &&(
          <Pagination data={data} />)}
        </div>
        {/* Pagination  */}
      </div>
    </>
  );
};

export default ReusableTable;
