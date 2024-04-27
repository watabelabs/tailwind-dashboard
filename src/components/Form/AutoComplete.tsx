import React, { useState, useRef } from "react";
import { HiX as XIcon, HiChevronDown as ChevronDownIcon } from "react-icons/hi";

const Autocomplete = ({ suggestions, label }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [input, setInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const userInput = e.target.value;
    setInput(userInput);
    const filtered = userInput
      ? suggestions.filter((suggestion) =>
          suggestion.toLowerCase().includes(userInput.toLowerCase()),
        )
      : [];
    setFilteredSuggestions(filtered);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
  };

  const clearInput = () => {
    setInput("");
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    inputRef.current.focus();
  };

  const toggleSuggestions = () => {
    setShowSuggestions(!showSuggestions);
  };

  return (
    <div className="relative">
      <div className="flex items-center border border-gray-300 w-full group relative">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={handleChange}
          className="
          outline-none 
          w-full
          border-0
          pl-2
          pr-10
          py-2
          rounded-sm
          transition-all
          duration-200
          ease-in-out
          focus:ring-2
          focus:ring-gray-500
          "
          placeholder={label}
        />
        <label
          className={`px-1 bg-white absolute left-2 transition-all duration-200 ease-in-out text-gray-500 pointer-events-none ${input || showSuggestions ? "text-xs top-1 transform -translate-y-3.5" : "text-base top-1/2 transform -translate-y-1/2"}`}
          onClick={() => inputRef.current.focus()}
        >
          {label}
        </label>
        {input && (
          <XIcon
            className="h-5 w-5 text-gray-500 cursor-pointer absolute right-10"
            onClick={clearInput}
          />
        )}
        <ChevronDownIcon
          className="h-5 w-5 text-gray-500 absolute right-2 cursor-pointer"
          onClick={toggleSuggestions}
        />
      </div>
      {showSuggestions && filteredSuggestions.length > 0 && (
        <ul className="absolute z-10 left-0 right-0 max-h-60 overflow-auto bg-white border border-gray-300 rounded-md">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
