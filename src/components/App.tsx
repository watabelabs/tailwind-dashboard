import { Transition } from "@headlessui/react";
import { useState } from "react";

import {
  HiArrowLeft,
  HiArrowRight,
  HiChartSquareBar,
  HiChatAlt,
  HiChevronDown,
  HiCog,
  HiCube,
  HiFire,
  HiHome,
  HiOutlineBell,
  HiOutlineLogout,
  HiOutlineSelector,
  HiOutlineTrendingUp,
} from "react-icons/hi";

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isContentOpen, setContentOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleContent = () => {
    setContentOpen(!isContentOpen);
  };

  const sidebarTransitionStyles = `transform transition-transform duration-500 ${
    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
  }`;

  return (
    <div className="flex justify-center w-full min-h-screen">
      <div
        className={`w-80 ${sidebarTransitionStyles} border border-r-2 inset-1 sm:block flex flex-col justify-between bg-gray-100  border-gray-200"`}
      >
        <div>
          <div className="px-6 pt-8">
            <div className="flex items-center justify-between">
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
                className="flex item-center justify-center p-0.5 rounded "
              >
                {isSidebarOpen ? <HiArrowRight /> : <HiArrowLeft />}
              </button>
            </div>
          </div>

          <div className="px-6 pt-4">
            <hr className="border-gray-300" />
          </div>

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

          <div className="px-6 pt-8">
            <hr className="border-gray-300" />
          </div>
        </div>

        <div className="pl-6 pr-4 py-4 bg-gray-200 flex items-stretch justify-between">
          <div className="flex items-center">
            <div className="relative w-8 h-8 rounded-full before:absolute before:w-2 before:h-2 before:bg-green-500 before:rounded-full before:right-0 before:bottom-0 before:ring-1 before:ring-white">
              <img className="rounded-full" src="/images/user_img.png" alt="" />
            </div>
            <div className="flex flex-col pl-3">
              <div className="text-sm text-black">mtabe</div>
              <span className="text-xs text-gray-800 font-light tracking-tight">
                mtabe@gmail.com
              </span>
            </div>
          </div>
          <button className="self-end text-black rounded focus:outline-none focus:ring-1 focus:ring-gray-500 focus:text-white">
            <HiOutlineSelector />
          </button>
        </div>
      </div>
      <div className="p-10 flex-auto">main content</div>
    </div>
  );
};

export default App;
