import { Transition } from "@headlessui/react";
import { useState } from "react";
import ToolBar from "./ToolBar";
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
  HiMenuAlt2,
  HiOutlineSearch,
  HiMail,
  HiOutlineCreditCard,
  HiOutlineUsers,
  HiTrendingUp,
} from "react-icons/hi";
import PayrollTable from "./PayrollTable";
import Form from "./Form";

import CommandPelette from "./ui/CommandPalette";
import ProjectCard from "./ui/ProjectCard";
import RatingComponent from "./ui/Rating";
import UserDetails from "./ui/UserDetails";
import Stats from "./ui/Stats";

const projects = [
  { id: 1, title: "GraphQL API", initials: "GA", team: "Engineering" },
  {
    id: 2,
    title: "New Benefits Plan",
    initials: "NB",
    team: "Human Resources",
  },
  {
    id: 3,
    title: "Onboarding Emails",
    initials: "OE",
    team: "Customer Success",
  },
  { id: 4, title: "iOS App", initials: "IA", team: "Engineering" },
  {
    id: 5,
    title: "Marketing Site Design",
    initials: "MS",
    team: "Engineering",
  },
  { id: 6, title: "Hire CFO", initials: "HC", team: "Human Resources" },
  { id: 7, title: "Android App", initials: "AA", team: "Engineering" },
  { id: 8, title: "Co-op Program", initials: "CP", team: "Human Resources" },
  { id: 9, title: "New Customer Portal", initials: "NC", team: "Engineering" },
  {
    id: 10,
    title: "Employee Recognition Program",
    initials: "ER",
    team: "Human Resources",
  },
  { id: 11, title: "Implement NPS", initials: "IN", team: "Customer Success" },
  {
    id: 12,
    title: "Open Source Web Client",
    initials: "OS",
    team: "Engineering",
  },
];

const projectList = [
  {
    id: 1,
    title: "New Benefits Plan",
    initials: "GA",
    team: "Engineering",
  },
  {
    id: 2,
    title: "Where verbybody knows your name",
    initials: "NB",
    team: "Human Resources",
  },
  {
    id: 3,
    title: "How can we help you?",
    initials: "OE",
    team: "Customer Success",
  },
  {
    id: 4,
    title: "Human 😊 Friendly ❤️  Timely ⏳ Support",
    initials: "IA",
    team: "Engineering",
  },
  {
    id: 5,
    title: "Kickoffs, Heartbeats, and Cycles",
    initials: "MS",
    team: "Engineering",
  },
  {
    id: 6,
    title: "6-WEEKER: Login Notifications, Cloud Files & Doors",
    initials: "HC",
    team: "Human Resources",
  },
  {
    id: 7,
    title: "A total redesign of the Company logo/brand",
    initials: "AA",
    team: "Engineering",
  },
  {
    id: 8,
    title: "Chart with reporter from Inc. Magazine",
    initials: "CP",
    team: "Human Resources",
  },
];

export const stats = [
  {
    title: "Total Revenue",
    percentage: "+32.40%",
    value: "$150,243.00",
    icon: <HiTrendingUp className="h-5 w-5 text-blue-500" />,
    description: "vs last week $123,235.00",
    status: "up",
  },
  {
    title: "Total Orders",
    percentage: "-12.40%",
    value: "$23,456.00",
    icon: <HiOutlineCreditCard className="h-5 w-5 text-blue-500" />,
    description: "vs last week $72,235.00",
    status: "down",
  },
  {
    title: "Total Customers",
    percentage: "+2.40%",
    value: "$82,234.00",
    icon: <HiOutlineUsers className="h-5 w-5 text-blue-500" />,
    description: "vs last week $30,235.00",
    status: "up",
  },
  {
    title: "Total Projects",
    percentage: "-1.40%",
    value: "$82,234.00",
    icon: <HiOutlineCreditCard className="h-5 w-5 text-blue-500" />,
    description: "vs last week 200,000.00",
    status: "down",
  },
];

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isContentOpen, setContentOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openSearch = () => {
    setIsOpen(true);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleContent = () => {
    setContentOpen(!isContentOpen);
  };

  const sidebarTransitionStyles = `transform transition-transform duration-500 ${
    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
  }`;

  const mainContentWidth = isSidebarOpen ? "flex-1" : "flex-auto";

  return (
    <>
      <div className="flex justify-center w-full min-h-screen">
        <div
          className={`${isSidebarOpen ? "flex" : "hidden"} w-80 fixed inset-y-0 left-0 z-40 ${sidebarTransitionStyles} border border-r-2 inset-1 sm:block flex flex-col justify-between bg-gray-100 border-gray-200`}
        >
          <div
            className={`${isSidebarOpen ? "flex flex-col justify-between h-full" : "hidden"}`}
          >
            {/* top section starts */}
            <div>
              <CommandPelette projects={projects} onOpen={openSearch} />
              <div className="px-6 py-4 h-20 border-b border-gray-300">
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
                    className="flex item-center mt-2 justify-center p-0.5 rounded"
                  >
                    <HiMenuAlt2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-2 px-6 py-4 relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="border border-gray-300 bg-gray-100 rounded-lg p-2 w-full focus:outline-none"
                  />
                  <HiOutlineSearch className="h-5 w-5 absolute right-10 text-gray-600" />
                </div>
                <ul className="flex flex-col space-y-2">
                  <li className="text-gray-600 relative hover:text-black transition-colors duration-300">
                    <div className="inset-y-0 left-0 pl-6 flex items-center absolute pointer-events-none">
                      <HiHome className="h-5 w-5" />
                    </div>
                    <a className="rounded text-lg inline-block w-full pl-14 pr-4 py-2 hover:bg-gray-200">
                      Dashboard
                    </a>
                  </li>
                  <li className="text-gray-600 relative hover:text-black transition-colors duration-300">
                    <div className="inset-y-0 left-0 pl-6 flex items-center absolute pointer-events-none">
                      <HiMail className="h-5 w-5" />
                    </div>
                    <a className="rounded text-lg inline-block w-full pl-14 pr-4 py-2 hover:bg-gray-200">
                      Messages
                    </a>
                  </li>
                  <li className="text-gray-600 relative hover:text-black transition-colors duration-300">
                    <div
                      onClick={toggleContent}
                      className="flex justify-between items-center cursor-pointer"
                    >
                      <a className="rounded text-lg inline-block w-full pl-14 pr-4 py-2 hover:bg-gray-200 transition-all duration-300">
                        <HiFire className="h-5 w-5 absolute left-6" /> Content
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
                      <ul className="flex flex-col pl-2 ml-8 text-gray-800 border-l border-gray-400">
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
                    <div className="inset-y-0 left-0 pl-6 flex items-center absolute pointer-events-none">
                      <HiCube className="h-5 w-5" />
                    </div>
                    <a className="rounded text-lg inline-block w-full pl-14 pr-4 py-2 hover:bg-gray-200">
                      Design
                    </a>
                  </li>
                  <li className="text-gray-600 relative hover:text-black transition-colors duration-300">
                    <div className="inset-y-0 left-0 pl-6 flex items-center absolute pointer-events-none">
                      <HiChartSquareBar className="h-5 w-5" />
                    </div>
                    <a className="rounded text-lg inline-block w-full pl-14 pr-4 py-2 hover:bg-gray-200">
                      Market & Sell
                    </a>
                  </li>
                  <li className="text-gray-600 relative hover:text-black transition-colors duration-300">
                    <div className="inset-y-0 left-0 pl-6 flex items-center absolute pointer-events-none">
                      <HiOutlineTrendingUp className="h-5 w-5" />
                    </div>
                    <a className="rounded text-lg inline-block w-full pl-14 pr-4 py-2 hover:bg-gray-200">
                      Reporting
                    </a>
                  </li>
                  <li className="text-gray-600 relative hover:text-black transition-colors duration-300">
                    <div className="inset-y-0 left-0 pl-6 flex items-center absolute pointer-events-none">
                      <HiChatAlt className="h-5 w-5" />
                    </div>
                    <a className="rounded text-lg inline-block w-full pl-14 pr-4 py-2 hover:bg-gray-200">
                      Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* top section ends */}

            {/* bottom section starts */}
            <div>
              <div className="px-6 py-4">
                <hr className="border-gray-300" />
              </div>
              <ul className="flex flex-col space-y-2">
                <li className="text-gray-600 relative hover:text-black">
                  <div className="inset-y-0 left-0 pl-6 flex items-center absolute pointer-events-none">
                    <HiCog className="h-5 w-5" />
                  </div>
                  <a className="rounded text-lg inline-block w-full pl-14 pr-4 py-2 hover:bg-gray-200">
                    Settings
                  </a>
                </li>
                <li className="text-gray-600 relative hover:text-black">
                  <div className="inset-y-0 left-0 pl-6 flex items-center absolute pointer-events-none">
                    <HiOutlineBell className="h-5 w-5" />
                  </div>
                  <a className="rounded text-lg inline-block w-full pl-14 pr-4 py-2 hover:bg-gray-200">
                    Notifications
                  </a>
                </li>
                <li className="text-gray-600 relative hover:text-black">
                  <div className="inset-y-0 left-0 pl-6 flex items-center absolute pointer-events-none">
                    <HiOutlineLogout className="h-5 w-5" />
                  </div>
                  <a className="rounded text-lg inline-block w-full pl-14 pr-4 py-2 hover:bg-gray-200">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
            {/* bottom section ends */}
          </div>
        </div>

        {/* Main Content */}
        <div
          className={`${isSidebarOpen ? "ml-80 " : "ml-0"} flex-1 min-h-screen flex flex-col transition-width duration-500 ${mainContentWidth}`}
        >
          <ToolBar
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
            onSearchEnter={openSearch}
          />

          <div className="p-8 flex flex-col mt-16">
            {/* content area starts */}
            <h1 className="font-sans text-3xl text-gray-600">
              Welcome back, <span className="font-light">Mtabe!</span>
            </h1>

            <div className="flex flex-row border border-gray-300 mt-4">
              {stats.map((stat, index) => (
                <Stats stat={stat} key={index} />
              ))}
            </div>

            <div className="mt-8">
              <h1 className="font-sans text-2xl mb-6 text-gray-600">
                Latest <span className="font-semibold">Payroll</span>
              </h1>
              <PayrollTable />
            </div>

            <div className="my-11">
              <Form />
            </div>

            <div className="my-11">
              <UserDetails />
            </div>

            <div className="my-11">
              <RatingComponent />
            </div>

            <div className="my-11 w-full">
              <div className="flex items-center justify-between">
                <h1 className="font-sans text-2xl mb-6 text-gray-600">
                  Latest <span className="font-semibold">Projects</span>
                </h1>
                <button className="flex items-center justify-center p-2 rounded bg-gray-100 text-gray-600">
                  View All
                </button>
              </div>

              <div className="grid grid-cols-4 sm:grid-rows-1">
                {projectList.map((project, index) => (
                  <ProjectCard project={project} key={index} />
                ))}
              </div>
            </div>

            {/* content area ends */}
          </div>
        </div>
        {/* Main Content Ends */}
      </div>
    </>
  );
};

export default App;
