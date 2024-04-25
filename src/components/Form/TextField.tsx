const TextField = (props) => {
  return (
    <div>
      <div className="relative">
        <input
          id={props.id}
          name={props.id}
          type="text"
          className="pl-3 peer placeholder-transparent"
          placeholder={props.label}
        />
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

export default TextField;
