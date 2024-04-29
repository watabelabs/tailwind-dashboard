import React from "react";
import {
  HiChevronDown,
  HiCheckCircle,
  HiPencilAlt,
  HiXCircle,
  HiDotsHorizontal,
  HiOutlineCreditCard,
  HiCheck,
} from "react-icons/hi";

import { FaCcVisa } from "react-icons/fa6";
import { BsPaypal } from "react-icons/bs";
import { FaMobileRetro } from "react-icons/fa6";

const subscriptions = [
  {
    plan: "Premium Plan",
    details: "Billing Monthly | Next Invoice on Jul 29 for $9.99",
    active: true,
  },
];

const paymentMethods = [
  {
    plan: "Visa**** 4242",
    details: "Expires Sep 2024",
    active: true,
    icon: <FaCcVisa className="h-5 w-5 text-blue-500" />,
  },
  {
    plan: "Paypal",
    details: "Expires Sep 2024",
    active: false,
    icon: <BsPaypal className="h-5 w-5 text-blue-900" />,
  },
  {
    plan: "M-Pesa",
    details: "(+255) 700-000-000",
    active: false,
    icon: <FaMobileRetro className="h-5 w-5 text-red-700" />,
  },
];

const Tab = ({ name, isSelected }) => (
  <button
    className={`px-4 py-2 text-sm font-medium leading-5 text-gray-700 rounded-t-lg focus:outline-none ${
      isSelected ? "bg-blue-100 text-blue-600 shadow" : "hover:bg-gray-100"
    }`}
  >
    {name}
  </button>
);

const ActionButton = () => (
  <div className="relative inline-block text-left">
    <button
      className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
      id="menu-button"
      aria-expanded="true"
      aria-haspopup="true"
    >
      Actions
      <HiChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
    </button>
  </div>
);

const HeaderTabs = ({ activeTab }) => {
  return (
    <div className="bg-white px-4 py-5 sm:px-4 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex space-x-4">
          <Tab name="Overview" isSelected={activeTab === "overview"} />
          <Tab name="Events & Logs" isSelected={activeTab === "events"} />
        </div>
        <ActionButton />
      </div>
    </div>
  );
};

const SubscriptionStatus = ({ isActive }) => (
  <span
    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${
      isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
    }`}
  >
    <HiCheckCircle
      className={`${isActive ? "text-green-400" : "text-red-400"} -ml-1 mr-1.5 h-4 w-4`}
    />
    {isActive ? "Active" : "Inactive"}
  </span>
);

const PaymentDetails = ({ subscription }) => (
  <div className="bg-white p-4 rounded-lg border border-gray-300 mb-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        {subscription.icon}
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="text-lg font-semibold text-gray-900">
              {subscription.plan}
            </h3>
            <span
              className={`flex-shrink-0 inline-block px-2 py-0.5 text-xs font-medium rounded-full ${subscription.active ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
            >
              {subscription.active ? (
                <span className="text-green-500">Default</span>
              ) : (
                <span className="text-rose-500">Inactive</span>
              )}
            </span>
          </div>
          <p className="text-sm text-gray-500">{subscription.details}</p>
        </div>
      </div>
      <div className="flex space-x-1">
        <button className="p-2 bg-gray-100 rounded-md text-gray-500 hover:text-gray-700">
          <HiPencilAlt className="h-5 w-5" />
        </button>
        <button className="p-2 bg-gray-100 rounded-md text-gray-500 hover:text-gray-700">
          <HiXCircle className="h-5 w-5" />
        </button>
        <button className="p-2 bg-gray-100 rounded-md text-gray-500 hover:text-gray-700">
          <HiDotsHorizontal className="h-5 w-5" />
        </button>
      </div>
    </div>
  </div>
);

const SubscriptionItem = ({ subscription }) => (
  <div className="bg-white p-4 rounded-lg border border-gray-300 mb-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <HiOutlineCreditCard className="h-6 w-6 text-gray-400" />
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="text-lg font-semibold text-gray-900">
              {subscription.plan}
            </h3>
            <span
              className={`flex-shrink-0 inline-block px-2 py-0.5 text-xs font-medium rounded-full ${subscription.active ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
            >
              {subscription.active ? (
                <span className="text-green-500">Active</span>
              ) : (
                <span className="text-rose-500">InActive</span>
              )}
            </span>
          </div>
          <p className="text-sm text-gray-500">{subscription.details}</p>
        </div>
      </div>
      <div className="flex space-x-1">
        <button className="p-2 bg-gray-100 rounded-md text-gray-500 hover:text-gray-700">
          <HiPencilAlt className="h-5 w-5" />
        </button>
        <button className="p-2 bg-gray-100 rounded-md text-gray-500 hover:text-gray-700">
          <HiXCircle className="h-5 w-5" />
        </button>
        <button className="p-2 bg-gray-100 rounded-md text-gray-500 hover:text-gray-700">
          <HiDotsHorizontal className="h-5 w-5" />
        </button>
      </div>
    </div>
  </div>
);

const PaymentRow = ({ payment }) => (
  <tr className="border-b">
    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
      {payment.amount}
    </td>
    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
      {payment.description}
    </td>
    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
      <span
        className={`inline-flex text-xs py-2 px-4 leading-5 font-semibold rounded-2xl ${payment.status === "Succeeded" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
      >
        {payment.status}
      </span>
    </td>
    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
      {payment.date}
    </td>
    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-right">
      <a href="#" className="text-indigo-600 hover:text-indigo-900">
        Details
      </a>
    </td>
  </tr>
);

const UserInfo = ({ user }) => (
  <div className="lg:w-1/3 border-r border-gray-200 p-4">
    <div className="flex flex-col items-center text-center space-x-3">
      <div className="rounded-full h-16 w-16 mb-4 flex items-center justify-center bg-orange-100 border border-orange-300 uppercase font-bold text-xl">
        {user.initials}
      </div>
      <div>
        <h2 className="text-3xl font-normal">{user.name}</h2>
        <p className="text-sm text-gray-600">{user.email}</p>
      </div>
    </div>

    <div className="mt-4 flex flex-col sm:flex-row justify-between border rounded-lg border-gray-200">
      <div className="w-full p-2 border border-gray-200 text-center">
        <p className="text-sm text-gray-400">Spent</p>
        <p className="text-lg font-semibold">{user.spent}</p>
      </div>
      <div className="w-full p-2 border border-gray-200 text-center">
        <p className="text-sm text-gray-400">Since</p>
        <p className="text-lg font-semibold">{user.since}</p>
      </div>
      <div className="w-full p-2 text-center">
        <p className="text-sm text-gray-400">MRR</p>
        <p className="text-lg font-semibold">{user.mrr}</p>
      </div>
    </div>

    <div className="mt-4 flex flex-row items-center justify-between">
      <div className="flex flext-row relative">
        <HiChevronDown
          className={`text-gray-400 h-5 w-5 absolute top-0.5 left-0 transition-transform duration-300 `}
        />
        <h3 className="pl-7 font-semibold">Details</h3>
      </div>
      <div>
        <h3 className="text-lg font-semibold">
          <a className="text-blue-400 cursor-pointer" href="#">
            Edit
          </a>
        </h3>
      </div>
    </div>

    <div className="py-4">
      <hr className="border-gray-200" />
    </div>
    <div className="py-8 text-gray-400">
      <p className="font-semibold">Account Details</p>
      <span className="block font-semibold text-gray-500">{user.name}</span>
      <span className="block text-gray-500">{user.email}</span>
    </div>

    <div className="text-gray-400">
      <p>Billing Emails</p>
      <span>{user.email}</span>
    </div>
    <div className="py-4">
      <hr className="border-gray-300" />
    </div>
  </div>
);

const UserDetails = () => {
  const [activeTab, setActiveTab] = React.useState("overview");

  const user = {
    initials: "RF",
    name: "Robert Fox",
    email: "john.doe@watabelabs.co.tz",
    spent: "$635.93",
    since: "Jul 2024",
    mrr: "$20.50",
  };

  const payments = [
    {
      amount: "$9.93",
      status: "Succeeded",
      description: "Subscription Update",
      date: "Sep 14, 11:14 PM",
    },
    {
      amount: "$2.00",
      status: "Succeeded",
      description: "Subscription Update",
      date: "Sep 14, 1:06 AM",
    },
    {
      amount: "$2.00",
      status: "Succeeded",
      description: "Subscription Update",
      date: "Sep 13, 1:05 AM",
    },
  ];

  return (
    <div className="">
      <div className="bg-white rounded-md shadow overflow-hidden w-full font-poppins">
        <div className="flex">
          {/* Left column */}
          <UserInfo user={user} />

          {/* Right column */}
          <div className="w-2/3">
            <div>
              <HeaderTabs activeTab={activeTab} />
            </div>

            <div className="mt-8">
              <div className="px-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-normal">Subscriptions</h3>
                  <button className="px-4 py-2 bg-blue-500 text-white text-xs font-semibold rounded hover:bg-blue-600">
                    Create
                  </button>
                </div>
                {subscriptions.map((subscription, i) => (
                  <SubscriptionItem key={i} subscription={subscription} />
                ))}
              </div>

              <div className="px-4">
                <h3 className="text-lg font-normal mb-2">Payments</h3>
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Amount
                        </th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Description
                        </th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-4 py-3 bg-gray-50"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {payments.map((payment, i) => (
                        <PaymentRow key={i} payment={payment} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8 px-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-normal">Payment Methods</h3>
                  <button className="px-4 py-2 border border-gray-300 g-white text-gray-800 text-xs font-semibold rounded-full hover:bg-white">
                    Add
                  </button>
                </div>
                {paymentMethods.map((subscription, i) => (
                  <PaymentDetails key={i} subscription={subscription} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
