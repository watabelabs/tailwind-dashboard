import React from "react";

import {
  HiOutlineMail,
  HiOutlineCheckCircle,
  HiOutlineThumbUp,
  HiOutlineChatAlt2,
} from "react-icons/hi";

const activities = [
  {
    id: 1,
    type: "message",
    user: "Christoph Hellmuth",
    action: "sent message to thread in channel ",
    target: "#f-insights",
    message:
      "Excepteur velit voluptate excepteur occaecat sint occaecat ex ipsum officia eiusmod fugiat.",
    time: "14:47",
    link: "#",
  },
  {
    id: 2,
    type: "reaction",
    user: "Jules Pricer",
    action: "added reaction ",
    target: "✅ in channel #f-insights",
    time: "14:16",
    link: "#",
  },
  {
    id: 3,
    type: "reaction",
    user: "Jules Pricer",
    action: "added reaction ",
    target: "👍 in channel #random",
    time: "13:59",
    link: "#",
  },
  {
    id: 4,
    type: "message",
    user: "Carlos Sine",
    action: "sent message to thread in channel ",
    target: "#f-insights",
    message:
      "Duis nisi pariatur excepteur aliqua ipsum eu ut voluptate ullamco sit do cillum labore voluptate ea.",
    time: "14:47",
    link: "#",
  },
  {
    id: 5,
    type: "commit",
    user: "Krzysztof Nowak",
    action: "pushed 1 commit to ",
    target: "branch master",
    time: "14:16",
    link: "#",
  },
  {
    id: 6,
    type: "pull-request",
    user: "Jules Pricer",
    action: "opened pull request ",
    target: "[INFRA-79] - Add bench job resource",
    time: "13:59",
    link: "#",
  },
  {
    id: 7,
    type: "commit",
    user: "Alicia Tran",
    action: "merged branch ",
    target: "feature/login to master",
    time: "11:46",
    link: "#",
  },
  {
    id: 8,
    type: "issue",
    user: "Manuel Litt",
    action: "opened issue ",
    target: "Unexpected behavior on login",
    time: "09:32",
    link: "#",
  },
  {
    id: 9,
    type: "deployment",
    user: "Brianna Forbes",
    action: "deployed to ",
    target: "staging environment",
    time: "08:15",
    link: "#",
  },
  {
    id: 10,
    type: "message",
    user: "Sandra Adams",
    action: "commented on ticket ",
    target: "Server downtime",
    message:
      "We need to look into the server configurations to prevent further downtime.",
    time: "Yesterday",
    link: "#",
  },
];

const ActivityIcon = ({ type }) => {
  switch (type) {
    case "message":
      return <HiOutlineMail className="h-5 w-5 text-blue-500" />;
    case "success":
      return <HiOutlineCheckCircle className="h-5 w-5 text-green-500" />;
    case "thumb":
      return <HiOutlineThumbUp className="h-5 w-5 text-yellow-500" />;
    case "chat":
      return <HiOutlineChatAlt2 className="h-5 w-5 text-gray-500" />;
    default:
      return null;
  }
};

const Activity = ({ activity }) => (
  <div className="flex space-x-4 relative">
    <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full z-10">
      <ActivityIcon type={activity.type} />
    </div>
    {activity.type === "message" && (
      <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-200" />
    )}
    <div className={`flex-1 pb-4 ${activity.type === "message" ? "pl-4" : ""}`}>
      <div className="text-xs text-gray-500">{activity.time}</div>
      <div
        className={`flex items-start mt-1 ${activity.message ? "space-x-2" : ""}`}
      >
        {activity.message && (
          <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <ActivityIcon type={activity.type} />
          </div>
        )}
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900">
            {activity.user}{" "}
            <span className="font-normal">{activity.action}</span>{" "}
            <a href="#" className="text-blue-600 hover:underline">
              {activity.target}
            </a>
          </p>
          {activity.message && (
            <div className="mt-2 bg-gray-50 border border-gray-200 rounded px-3 py-2 text-sm text-gray-500">
              {activity.message}
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

const ActivityFeed = () => (
  <div className="bg-white p-6 rounded-lg shadow space-y-4">
    <h3 className="text-lg font-semibold">Latest activity</h3>
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <div key={index} className="relative">
          <Activity activity={activity} />
          {index < activities.length - 1 && (
            <div className="absolute left-5 top-full bottom-full w-px bg-gray-200 z-0" />
          )}
        </div>
      ))}
    </div>
  </div>
);

export default ActivityFeed;
