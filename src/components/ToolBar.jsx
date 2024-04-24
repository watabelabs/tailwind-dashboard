import { HiOutlineBell, HiMenuAlt2, HiOutlineSearch } from "react-icons/hi";

const ToolBar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className="flex border-b border-gray-300 h-16">
      {!isSidebarOpen && (
        <div className="flex items-center justify-between px-6 py-4 h-16  w-80 mr-4 border-r border-gray-300">
          <a href="#" className="rounded flex">
            <img
              src="/images/logo.svg"
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
      )}
      <div className="flex-grow flex justify-between p-4">
        <div className="relative w-1/2">
          <input
            type="text"
            placeholder="search..."
            className="w-full rounded-lg px-2 py-1 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
          />
          <HiOutlineSearch className="absolute top-2 right-2" />
        </div>
        <div className="flex flex-row">
          <div className="text-gray-600 relative hover:text-black transition-colors duration-300">
            <div className="relative top-2 ml-6 mr-6 cursor-pointer inset-y-0 left-0 pl-2 flex items-center pointer-events-none before:absolute before:w-2 before:h-2 before:bg-red-500 before:rounded-full before:right-0 before:top-0 before:ring-1 before:ring-white">
              <HiOutlineBell className="h-6 w-6" />
            </div>
          </div>
          <div className="mr-6 flex items-center">
            <div className="relative w-8 h-8 rounded-full before:absolute before:w-2 before:h-2 before:bg-green-500 before:rounded-full before:right-0 before:bottom-0 before:ring-1 before:ring-white">
              <img className="rounded-full" src="/images/avatar.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolBar;
