import React, { useState, useRef, useEffect } from "react";
import { HiChevronDown as ChevronDownIcon } from "react-icons/hi";

const Dropdown = ({ options, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleItemClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="flex flex-col items-start">
        <button
          onClick={toggleDropdown}
          className="flex items-center justify-between w-full px-3 py-2 text-left border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          {selectedOption || label}
          <ChevronDownIcon className="w-5 h-5 text-gray-500" />
        </button>
        <label
          className={`absolute text-gray-500 transition-all duration-300 ease-in-out pointer-events-none ${selectedOption || isOpen ? "text-xs transform -translate-y-6" : "text-base top-1/2 -translate-y-1/2"}`}
          style={{ left: "12px", top: "50%" }}
        >
          {label}
        </label>
      </div>
      {isOpen && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(option)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
