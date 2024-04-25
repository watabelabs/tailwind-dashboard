const Radio = (props) => {
  return (
    <div className="flex items-center">
      <input id={props.id} name="terms-and-privacy" type="radio" className="" />
      <label htmlFor={props.id} className="ml-2 block text-sm text-gray-900">
        {props.label}
      </label>
    </div>
  );
};

export default Radio;
