import { IoIosCheckmarkCircle } from "react-icons/io";
import RadioColor from "../../../components/RadioColor";

const Colors = ({ handleChange }) => {
  return (
    <div className="border-b border-gray-300 py-4">
      <div className="flex justify-evenly pb-3">
        <h1 className="font-bold">Colors</h1>
        <label className="relative flex gap-2 px-2 py-0.5 cursor-pointer group  ">
          <input
            className="peer hidden"
            value=""
            type="radio"
            name="test-2"
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
      </div>

      <div className="flex gap flex-wrap">
        <RadioColor
          value={"blue"}
          color={"bg-blue-400"}
          handleChange={handleChange}
        />
        <RadioColor
          value={"red"}
          color={"bg-red-500"}
          handleChange={handleChange}
        />
        <RadioColor
          value={"brown"}
          color={"bg-red-700"}
          handleChange={handleChange}
        />
        <RadioColor
          value={"black"}
          color={"bg-black"}
          handleChange={handleChange}
        />
        <RadioColor
          value={"green"}
          color={"bg-green-400"}
          handleChange={handleChange}
        />
        <RadioColor
          value={"maroon"}
          color={"bg-pink-900"}
          handleChange={handleChange}
        />
        <RadioColor
          value={"white"}
          color={"bg-white"}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Colors;
