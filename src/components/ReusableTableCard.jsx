import React from "react";
import { bgCartColor,bgColor,textColPrimary,textColSecondary ,borderColor} from "./ColorLayout";

const ReusableTableCard = ({
  title,
  viewAllLink,
  columns,
  data,
  statusColorMap,
  onViewAllClick,
}) => {
  const tdClass = "px-2 py-3";

  return (
    <div className={`${bgCartColor} border ${borderColor} p-4 rounded-2xl `}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 gap-2">
        <h3 className={`text-lg sm:text-xl font-semibold ${textColPrimary}`}>
          {title}
        </h3>

        {viewAllLink && (
          <button
            onClick={onViewAllClick}
            className={`text-sm sm:text-base font-medium ${textColSecondary} hover:underline cursor-pointer`}
          >
            View all
          </button>
        )}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-y-2 min-w-[500px]">
          <thead>
            <tr className="text-center text-xs sm:text-xl">
              {columns.map((col, index) => (
                <th
                  key={col.key}
                  className={`${tdClass} ${bgColor} ${textColPrimary}
          ${index === 0 ? "rounded-l-2xl" : ""}
          ${index === columns.length - 1 ? "rounded-r-2xl" : ""}`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className=" text-xs sm:text-xl">
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className={`text-center ${textColSecondary}`}>
                {columns.map((col, colIndex) => (
                  <td
                    key={col.key}
                    className={`${tdClass} ${bgColor}
            ${colIndex === 0 ? "rounded-l-2xl" : ""}
            ${colIndex === columns.length - 1 ? "rounded-r-2xl" : ""}`}
                  >
                    {col.key === "index" ? (
                      rowIndex + 1
                    ) : col.isStatus ? (
                      <span
                        className={`inline-block px-2 py-0.5 text-sm border rounded-2xl
                ${statusColorMap[row.status]}`}
                      >
                        {row.status}
                      </span>
                    ) : (
                      row[col.key]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReusableTableCard;
