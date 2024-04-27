import React, { useState, useRef, useEffect } from "react";

const options = [
  "1-10 Employees",
  "11-50 Employees",
  "51-200 Employees",
  "201-500 Employees",
  "501-1000 Employees",
  "1000+ Employees",
];

const CustomSelect = ({ label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        isOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isOpen]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setHighlightedIndex((prevIndex) => (prevIndex + 1) % options.length);
    } else if (e.key === "ArrowUp") {
      setHighlightedIndex(
        (prevIndex) => (prevIndex - 1 + options.length) % options.length,
      );
    } else if (e.key === "Enter" && highlightedIndex !== -1) {
      handleSelect(options[highlightedIndex]);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="
        peer 
        w-full 
        px-4 
        py-2 
        text-left 
        bg-transparent 
        border 
        border-gray-300 
        rounded-md 
        shadow-sm 
        focus:outline-none 
        focus:ring-2 
        focus:ring-blue-500 
        focus:border-blue-500 
        flex 
        justify-between 
        items-center
        "
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {selectedOption || label}
      </button>
      <label
        htmlFor="company-size"
        className="
        absolute 
        left-2 
        top-3 
        px-1 
        text-gray-500 
        bg-white
        transition-all 
        duration-300 
        ease-linear 
        transform 
        peer-focus:-translate-y-6 
        peer-focus:scale-75 
        peer-focus:text-gray-600 
        peer-focus:top-2
        "
      >
        {label}
      </label>
      {isOpen && (
        <ul
          className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white border border-gray-300 rounded-md shadow-lg max-h-60 focus:outline-none sm:text-sm"
          tabIndex={-1}
        >
          {options.map((option, index) => (
            <li
              key={index}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${index === highlightedIndex ? "bg-gray-100" : ""}`}
              onClick={() => handleSelect(option)}
              onMouseEnter={() => setHighlightedIndex(index)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
