const Select = (props) => {
  return (
    <div>
      <div className="relative">
        <select
          name="company-size"
          id="company-size"
          placeholder={props.label}
          className="pl-2 peer placeholder-transparent"
        >
          <option value="1-10">1-10 Employees</option>
          <option value="11-50">11-50 Employees</option>
          <option value="51-200">51-200 Employees</option>
          <option value="201-500">201-500 Employees</option>
          <option value="501-1000">501-1000 Employees</option>
          <option value="1000+">1000+ Employees</option>
        </select>
        <label
          htmlFor={props.id}
          className="
          absolute
          left-2
          -top-2
          px-1
          text-gray-600 
          text-xs
          bg-white
          transition-all
          peer-placeholder-shown:text-base
          peer-placeholder-shown:text-gray-400
          peer-placeholder-shown:top-2
          peer-placeholder-shown:left-2
          peer-focus:-top-2
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
