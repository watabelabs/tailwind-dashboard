import { HiOutlineBell, HiMenuAlt2, HiOutlineSearch } from "react-icons/hi";
import { MdKeyboardCommandKey } from "react-icons/md";

const ToolBar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div
      className={`${isSidebarOpen ? "left-80" : "left-0"} fixed top-0 right-0 bg-white shadow z-20 flex border-b border-gray-300 h-20`}
    >
      {!isSidebarOpen && (
        <div className="px-6 py-4 h-20 border-r border-gray-300">
          <div className="flex items-center justify-between">
            <a href="#" className="rounded flex">
              <img
                src="/images/logo.svg"
                alt="Logo"
                style={{ objectFit: "contain" }}
                width={"60%"}
                height={"60%"}
              />
            </a>
            <button
              onClick={toggleSidebar}
              className="flex item-center mt-2 justify-center p-0.5 rounded "
            >
              <HiMenuAlt2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
      <div className="flex-grow flex justify-between p-4">
        <div className="flex flex-row relative w-1/2">
          <HiOutlineSearch className="absolute top-4 left-7" />
          <input
            type="text"
            placeholder="search..."
            className="w-full rounded-lg p-2 px-12 border-gray-300 bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-500 ml-4"
          />
          <MdKeyboardCommandKey className="w-5 h-5 absolute right-12 top-4 text-gray-400" />
          <span className="absolute right-6 top-3.5 text-1xl font-semibold text-gray-400">
            + K
          </span>
        </div>
        <div className="flex flex-row">
          <div className="text-gray-600 relative hover:text-black transition-colors duration-300 cursor-pointer">
            <div className="relative top-4 ml-6 mr-6 cursor-pointer inset-y-0 left-0 pl-2 flex items-center pointer-events-none before:absolute before:w-2 before:h-2 before:bg-red-500 before:rounded-full before:right-0 before:top-0 before:ring-1 before:ring-white">
              <HiOutlineBell className="h-6 w-6" />
            </div>
          </div>
          <div className="border-l border-gray-300 mr-6 pl-2 flex items-center cursor-pointer">
            <div className="relative w-8 h-8 rounded-full before:absolute before:w-2 before:h-2 before:bg-green-500 before:rounded-full before:right-0 before:bottom-0 before:ring-1 before:ring-white">
              <img className="rounded-full" src="/images/avatar.png" alt="" />
            </div>
            <div className="flex flex-col mt-1">
              <span className="ml-2 text-sm font-normal text-gray-600">
                johondoe@gmail.com
              </span>
              <span className="ml-2 text-xs font-normal text-gray-600">
                (SUPER ADMIN)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolBar;
