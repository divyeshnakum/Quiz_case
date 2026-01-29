import Blog from "../../components/Blog";
import DashboardStats from "../../components/DashboardStats";
import { FiSearch } from "react-icons/fi";
import { bgCartColor, borderColor, textColPrimary, textColSecondary } from "../../components/ColorLayout";

const Payment = () => {
  return (
    <>
      <DashboardStats
        title="Payment"
        buttonText="Payment setup"
        showButton={false}
        extraButton={true}
        extraButtonText="Export"
      />
      <Blog />
      <div className={`w-full p-4 mt-4 md:p-6 border rounded-2xl ${borderColor} ${bgCartColor}`}>
        {/* Title */}
        <h2 className={`text-lg ${textColPrimary} font-semibold mb-4`}>Payout Trends</h2>

        {/* Cards */}

        {/* Rewards Table Header */}
        <div className="mt-4">
          <h3 className={` ${textColSecondary} text-sm font-semibold mb-2`}>Rewards Table</h3>

          {/* Filters */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className={`${textColSecondary} relative w-full sm:max-w-2xl`}>
              <FiSearch
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 "
              />
              <input
                type="text"
                placeholder="Search User / UPI / Payment ID"
                className={`w-full md:w-1/2 px-4 py-2 border rounded-lg ${borderColor} pl-8 text-sm outline-none`}
              />
            </div>

            <div className="flex gap-2">
              <button className={`px-4 py-2 border rounded-lg text-sm ${textColSecondary} ${borderColor}`}>
                Status
              </button>
              <button className={`px-4 py-2 border rounded-lg text-sm ${textColSecondary} ${borderColor}`}>
                Date
              </button>
              <button className={`px-4 py-2 border rounded-lg text-sm ${textColSecondary} ${borderColor}`}>
                Amount
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Payment;
