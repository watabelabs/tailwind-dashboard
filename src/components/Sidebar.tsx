import { Transition } from "@headlessui/react";

import {
  HiChartSquareBar,
  HiChatAlt,
  HiChevronDown,
  HiCog,
  HiCube,
  HiFire,
  HiHome,
  HiOutlineBell,
  HiOutlineLogout,
  HiOutlineTrendingUp,
} from "react-icons/hi";

const Sidebar = ({ toggleContent, isContentOpen }) => {
  return (
    <div>
      <div className="px-6 pt-4">
        <ul className="flex flex-col space-y-2">
          <li className="text-gray-600 relative hover:text-black transition-colors duration-300">
            <div className="inset-y-0 left-0 pl-2 flex items-center absolute pointer-events-none">
              <HiHome className="h-5 w-5" />
            </div>
            <a className="rounded text-lg inline-block w-full pl-10 pr-4 py-2 hover:bg-gray-200 transition-all duration-300">
              Dashboard
            </a>
          </li>
          <li className="text-gray-600 relative hover:text-black transition-colors duration-300">
            <div
              onClick={toggleContent}
              className="flex justify-between items-center cursor-pointer"
            >
              <a className="rounded text-lg inline-block w-full pl-10 pr-4 py-2 hover:bg-gray-200 transition-all duration-300">
                <HiFire className="h-5 w-5 absolute left-3" /> Content
              </a>
              <HiChevronDown
                className={`h-5 w-5 absolute right-3 transition-transform duration-300 ${isContentOpen ? "rotate-180" : ""}`}
              />
            </div>
            {/* Transition for submenu */}
            <Transition
              show={isContentOpen}
              enter="transition-all duration-300 ease-out"
              enterFrom="opacity-0 max-h-0"
              enterTo="opacity-100 max-h-xl"
              leave="transition-all duration-300 ease-in"
              leaveFrom="opacity-100 max-h-xl"
              leaveTo="opacity-0 max-h-0"
            >
              <ul className="flex flex-col pl-2 ml-5 text-gray-800 border-l border-gray-400">
                <li className="inline-block w-full px-4 py-2 rounded hover:bg-gray-200 hover:text-black transition-colors duration-300">
                  <a href="#">Courses</a>
                </li>

                <li className="inline-block w-full px-4 py-2 rounded hover:bg-gray-200 hover:text-black transition-colors duration-300">
                  <a href="#">Categories</a>
                </li>
                <li className="inline-block w-full px-4 py-2 rounded hover:bg-gray-200 hover:text-black transition-colors duration-300">
                  <a href="#">Instructors</a>
                </li>
                <li className="inline-block w-full px-4 py-2 rounded hover:bg-gray-200 hover:text-black transition-colors duration-300">
                  <a href="#">Video Library</a>
                </li>
              </ul>
            </Transition>
          </li>

          <li className="text-gray-600 relative hover:text-black transition-colors duration-300">
            <div className="inset-y-0 left-0 pl-2 flex items-center absolute pointer-events-none">
              <HiCube className="h-5 w-5" />
            </div>
            <a className="rounded text-lg inline-block w-full pl-10 pr-4 py-2 hover:bg-gray-200 transition-all duration-300">
              Design
            </a>
          </li>
          <li className="text-gray-600 relative hover:text-black transition-colors duration-300">
            <div className="inset-y-0 left-0 pl-2 flex items-center absolute pointer-events-none">
              <HiChartSquareBar className="h-5 w-5" />
            </div>
            <a className="rounded text-lg inline-block w-full pl-10 pr-4 py-2 hover:bg-gray-200 transition-all duration-300">
              Market & Sell
            </a>
          </li>
          <li className="text-gray-600 relative hover:text-black transition-colors duration-300">
            <div className="inset-y-0 left-0 pl-2 flex items-center absolute pointer-events-none">
              <HiOutlineTrendingUp className="h-5 w-5" />
            </div>
            <a className="rounded text-lg inline-block w-full pl-10 pr-4 py-2 hover:bg-gray-200 transition-all duration-300">
              Reporting
            </a>
          </li>
          <li className="text-gray-600 relative hover:text-black transition-colors duration-300">
            <div className="inset-y-0 left-0 pl-2 flex items-center absolute pointer-events-none">
              <HiChatAlt className="h-5 w-5" />
            </div>
            <a className="rounded text-lg inline-block w-full pl-10 pr-4 py-2 hover:bg-gray-200 transition-all duration-300">
              Support
            </a>
          </li>
        </ul>
      </div>

      <div className="px-6 pt-8"></div>
      <div className="px-6 pt-8">
        <hr className="border-gray-300" />
      </div>

      <div className="px-6 pt-4">
        <ul className="flex flex-col space-y-2">
          <li className="text-gray-600 relative hover:text-black">
            <div className="inset-y-0 left-0 pl-2 flex items-center absolute pointer-events-none">
              <HiCog className="h-5 w-5" />
            </div>
            <a className="rounded text-lg inline-block w-full pl-10 pr-4 py-2 hover:bg-gray-200">
              Settings
            </a>
          </li>
          <li className="text-gray-600 relative hover:text-black">
            <div className="inset-y-0 left-0 pl-2 flex items-center absolute pointer-events-none">
              <HiOutlineBell className="h-5 w-5" />
            </div>
            <a className="rounded text-lg inline-block w-full pl-10 pr-4 py-2 hover:bg-gray-200">
              Notifications
            </a>
          </li>
          <li className="text-gray-600 relative hover:text-black">
            <div className="inset-y-0 left-0 pl-2 flex items-center absolute pointer-events-none">
              <HiOutlineLogout className="h-5 w-5" />
            </div>
            <a className="rounded text-lg inline-block w-full pl-10 pr-4 py-2 hover:bg-gray-200">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
