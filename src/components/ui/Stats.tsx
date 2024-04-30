import {
  HiArrowNarrowDown,
  HiArrowNarrowUp,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const Stats = ({ stat }) => {
  const { title, percentage, value, icon, description, status } = stat;
  return (
    <div className="flex flex-col w-1/3 p-8 border-r boder-gray-300 last:border-r-0 m-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-gray-100 p-2 rounded-full border border-gray-300">
            {icon}
          </div>
          <div>
            <p className="text-sm text-gray-500">{title}</p>
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-semibold text-gray-900">{value}</h3>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-1 rounded-full border-0 border-gray-300">
          <HiOutlineInformationCircle
            className={`h-8 w-8 fill-green-400  bg-green-400 text-white rounded-full`}
          />
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <span className="pt-1 text-xs text-gray-500">{description}</span>
        <div className="flex items-center gap-x-1">
          <span
            className={`text-xs font-medium ${status === "up" ? "text-green-500" : "text-rose-500"}`}
          >
            {percentage}
          </span>
          <div className="p-1 border border-gray-300">
            {status === "up" ? (
              <HiArrowNarrowUp className="h-2 w-2 text-green-500" />
            ) : (
              <HiArrowNarrowDown className="h-2 w-2 text-rose-500" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
