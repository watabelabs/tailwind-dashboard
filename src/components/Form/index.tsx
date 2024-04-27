import Autocomplete from "./AutoComplete";
import CheckBox from "./CheckBox";
import CustomSelect from "./CustomSelect";
import Dropdown from "./Dropdown";
import Radio from "./Radio";
import Select from "./Select";
import TextField from "./TextField";

const options = [
  "1-10 Employees",
  "11-50 Employees",
  "51-200 Employees",
  "201-500 Employees",
  "501-1000 Employees",
  "1000+ Employees",
];

const suggestions = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
];

const Form = () => {
  return (
    <div className="w-2/3 shadow-lg p-5 border border-gray-300">
      <h2 className="text-2xl font-light">Form Elements</h2>
      <div className="mt-5 grid grid-cols-2 md:grid-flow-row space-x-6">
        <TextField id="email" label="Email Address" />
        <TextField id="name" label="First Name" />
      </div>

      <div className="mt-5 grid grid-cols-2 md:grid-flow-row space-x-6">
        <Select id="company-size" label="Select Company Size" />
        <Autocomplete suggestions={suggestions} label="Search Fruits" />
      </div>

      <div className="mt-5 grid grid-cols-2 md:grid-flow-row space-x-6">
        <CustomSelect label="Select Size" />
        <Dropdown label="Select Options" options={options} />
      </div>

      <div className="mt-5 grid grid-cols-2 md:grid-flow-row space-x-6">
        <CheckBox id="terms-and-privacy" label="I agree" />
      </div>

      <div className="mt-5 flex flex-col space-y-2">
        <p>Select Gender</p>
        <Radio id="gender" name="gender" label="Male" />
        <Radio id="female" name="gender" label="Female" />
      </div>
    </div>
  );
};

export default Form;
