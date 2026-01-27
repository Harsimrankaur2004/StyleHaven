import Input from "../../../components/Input";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Category = ({ handleChange }) => {
  return (
    <div className="border-b border-gray-300">
      <h1 className="py-3 pl-3 pr-10 bg-white rounded mt-5 font-bold">
        Category
      </h1>
      <div className="px-4 py-2 ">
        <label className="relative flex items-center gap-2 px-2 py-0.5 cursor-pointer group ">
          <input
            className="peer hidden"
            type="radio"
            name="test"
            value=""
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
          name="test"
          value="t-shirt"
          title="T-shirt"
          handleChange={handleChange}
        />
        <Input
          name="test"
          value="top"
          title="Top"
          handleChange={handleChange}
        />
        <Input
          name="test"
          value="bottoms"
          title="bottoms"
          handleChange={handleChange}
        />
        <Input
          name="test"
          value="jacket"
          title="Jacket"
          handleChange={handleChange}
        />
        <Input
          name="test"
          value="dress"
          title="Dress"
          handleChange={handleChange}
        />
        <Input
          name="test"
          value="footwear"
          title="Footwear"
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Category;
