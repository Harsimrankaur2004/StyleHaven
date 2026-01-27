import Input from "../../../components/Input";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Gender = ({ handleChange }) => {
  return (
    <div className="pt-4">
      <h1 className="font-bold">Gender</h1>
      <label className="relative flex items-center gap-2 px-2 py-0.5 cursor-pointer group">
        <input
          className="peer hidden"
          value=""
          type="radio"
          name="test-3"
          onChange={handleChange}
        />
        <span
          className="w-5 h-5
            rounded-full bg-white group-hover:border-amber-400 border peer-checked:border-0 peer-checked:bg-transparent 
            peer-checked:[&_svg]:scale-100
      "
        >
          <IoIosCheckmarkCircle
            className="w-6 h-6 scale-0 transition-transform 
       "
          />
        </span>
        <span className="select-none">All</span>
      </label>
      <Input
        name="test-3"
        value="female"
        title="Women"
        handleChange={handleChange}
      />
      <Input
        name="test-3"
        value="male"
        title="Men"
        handleChange={handleChange}
      />
    </div>
  );
};

export default Gender;
