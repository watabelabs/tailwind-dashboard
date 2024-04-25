const CheckBox = (props) => {
  return (
    <div className="flex items-center">
      <input
        id={props.id}
        name="terms-and-privacy"
        type="checkbox"
        className=""
      />
      <label htmlFor={props.id} className="ml-2 block text-sm text-gray-900">
        {props.label} to the{" "}
        <a className="text-indigo-600 hover:text-indigo-600" href="#">
          Terms and{" "}
        </a>{" "}
        and{" "}
        <a href="#" className="text-indigo-600 hover:text-indigo-500">
          Privacy Policy
        </a>
      </label>
    </div>
  );
};

export default CheckBox;
