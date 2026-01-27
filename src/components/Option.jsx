const Option = ({ value, title }) => {
  return (
    <option className="text-center text-black" value={value}>
      {title}
    </option>
  );
};

export default Option;
