import { IoIosCheckmarkCircle } from "react-icons/io";

const Input = ({handleChange, name, value, title}) => {
  return (
    <div>
      <label className="relative flex items-center gap-2 px-2 py-0.5 cursor-pointer group has-checked:pointer-events-none">
        <input className="peer hidden" type="radio" name={name} value={value} onChange={handleChange} />
        <span
          className="w-5 h-5
            rounded-full bg-white group-hover:border-amber-400 border peer-checked:border-0 peer-checked:bg-transparent 
            peer-checked:[&_svg]:scale-100
      "
        >
          <IoIosCheckmarkCircle
            className={`scale-0 transition-transform w-6 h-6 
       `} />
        </span>
        <span className="select-none">{title}</span>
      </label>
    </div>
  );
};

export default Input;
