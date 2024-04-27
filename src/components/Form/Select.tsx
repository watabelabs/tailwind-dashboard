import React, { useState } from "react";

const options = [
  "1-10 Employees",
  "11-50 Employees",
  "51-200 Employees",
  "201-500 Employees",
  "501-1000 Employees",
  "1000+ Employees",
];

const Select = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div>
      <div className="relative">
        <select
          name="company-size"
          id="company-size"
          defaultValue=""
          className="pl-3 peer placeholder-transparent"
          placeholder={props.label}
        >
          {options.map((opt, idx) => (
            <option key={idx} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <label
          htmlFor={props.id}
          className="
          absolute
          left-2
          -top-2.5
          px-1
          text-gray-600 
          text-xs
          bg-white
          transition-all
          peer-placeholder-shown:text-base
          peer-placeholder-shown:text-gray-400
          peer-placeholder-shown:top-2.5
          peer-placeholder-shown:left-2
          peer-focus:-top-2.5
          peer-focus:text-gray-600
          peer-focus:text-xs
          peer-focus:left-2
          "
        >
          {props.label}
        </label>
        <p className="hidden text-sm text-red-500 mt-1">
          Error message goes here
        </p>
      </div>
    </div>
  );
};

export default Select;
