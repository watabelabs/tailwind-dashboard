import React, { useEffect, useState } from "react";
import { Dialog, Combobox, Transition } from "@headlessui/react";
import { HiOutlineSearch } from "react-icons/hi";
import useCtrlKToggle from "../../hooks/useCtrlKToggle";

const CommandPalette = ({ projects, onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  useCtrlKToggle(setIsOpen, isOpen);

  const filteredProjects = query
    ? projects.filter(
        (project) =>
          project.title.toLowerCase().includes(query.toLowerCase()) ||
          project.team.toLowerCase().includes(query.toLowerCase()),
      )
    : [];

  return (
    <Transition.Root
      show={isOpen}
      as={React.Fragment}
      afterLeave={() => setQuery("")}
    >
      <Dialog
        onClose={setIsOpen}
        className="
      fixed
      z-40
      inset-0
      p-4
      pt-[25vh]
      overflow-y-auto
      "
      >
        <Transition.Child
          enter="duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-500/75" />
        </Transition.Child>

        <Transition.Child
          enter="duration-300 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Combobox
            onChange={(project) => {
              // TODO: navigate to project
              setIsOpen(false);
            }}
            as="div"
            className="
        relative 
        mx-auto 
        max-w-xl 
        rounded-xl
        bg-white
        shadow-2xl
        ring-1
        ring-black/5
        divide-y
        divide-gray-100
        overflow-hidden
          "
          >
            <div className="flex items-center px-4">
              <HiOutlineSearch className="h-6 w-6 text-gray-500" />
              <Combobox.Input
                onChange={(event) => {
                  // TODO: wire up search logic
                  setQuery(event.target.value);
                }}
                className="w-full 
            bg-transparent
            border-0
            text-sm
            text-gray-800
            placeholder-gray-400
            focus:ring-0
            h-12
            "
                placeholder="Search..."
              />
            </div>
            {filteredProjects.length > 0 && (
              <Combobox.Options
                static
                className="py-4 text-sm max-h-96 overflow-y-auto"
              >
                {filteredProjects.map((project, idx) => (
                  <Combobox.Option key={idx} value={project}>
                    {({ active }) => (
                      <div
                        className={`space-x-1 px-4 py-2 ${active ? "bg-indigo-600" : "bg-white"}`}
                      >
                        <span
                          className={`font-medium ${active ? "text-white" : "text-gray-900"} `}
                        >
                          {project.title}
                        </span>
                        <span
                          className={`${active ? "text-indigo-200" : "text-gray-400"}`}
                        >
                          in {project.team}
                        </span>
                      </div>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            )}
            {query.length > 0 && filteredProjects.length === 0 && (
              <p className="p-4 text-sm text-gray-500">No results found</p>
            )}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default CommandPalette;
