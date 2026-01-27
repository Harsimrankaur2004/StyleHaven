const RadioColor = ({handleChange, color, value }) => {
  return (
    <div>
      <label className="flex items-center gap-2 cursor-pointer group p-1">
        <input
          className="peer hidden"
          type="radio"
          name="test-2"
          value={value}
          onChange={handleChange}
        />
        <span
          className={`h-8 w-8 rounded-full shadow
            items-center justify-center group-hover:border-3 group-hover:border-amber-400 peer-checked:border-3 peer-checked:border-amber-400 ${color}`}
        ></span>
      </label>
    </div>
  );
};

export default RadioColor;
