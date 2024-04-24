import {
  HiArrowNarrowDown,
  HiArrowNarrowUp,
  HiCurrencyDollar,
  HiOutlineBookmark,
  HiOutlineUsers,
} from "react-icons/hi";

interface StatsCardProps {
  title?: string;
  percentage?: string;
  value?: string;
  status?: string;
  icon?: string;
}

const stats = [
  {
    title: "Total Revenue",
    percentage: "+32.40%",
    value: "$10,243.00",
    icon: <HiCurrencyDollar className="h-6 w-6" />,
    status: "up",
  },
  {
    title: "Total Dish Ordered",
    percentage: "-12.40%",
    value: "23,456.00",
    icon: <HiOutlineUsers className="h-6 w-6" />,
    status: "down",
  },
  {
    title: "Total Customer",
    percentage: "+2.40%",
    value: "$1,234.00",
    icon: <HiOutlineBookmark className="h-6 w-6" />,
    status: "up",
  },
];

const StatsCard = ({ title, value, icon }: StatsCardProps) => {
  return (
    <div className="flex gap-6">
      {stats.map((stat, index) => (
        <div className="flex flex-col p-4 w-1/3 bg-white shadow-md rounded-md gap-y-3">
          <div className="flex items-center gap-x-3">
            <div className="p-2 bg-gray-500 rounded-lg">{stat.icon}</div>
            <span
              className={`text-md font-medium ${stat.status === "up" ? "text-green-500" : "text-red-500"} `}
            >
              {stat.percentage}
            </span>
            <div
              className={`p-0.5 rounded-full ${stat.status === "up" ? "bg-green-500" : "bg-red-500"}`}
            >
              {stat.status === "up" ? (
                <HiArrowNarrowUp className="fill-current text-white" />
              ) : (
                <HiArrowNarrowDown className="fill-current text-white" />
              )}
            </div>
          </div>
          <div className="text-3xl font-semibold text-gray-500">
            {stat.value}
          </div>
          <div className="text-md tracking-wide text-gray-500">
            {stat.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCard;
