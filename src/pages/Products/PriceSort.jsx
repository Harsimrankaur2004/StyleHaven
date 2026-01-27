import Option from "../../components/Option";

const PriceSort = ({ handleClick }) => {
  return (
    <div className="flex justify-end items-center mr-5">
      <div className="rounded text-center shadow bg-gray-400 text-white p-1">
        <h2 className="font-bold sm:inline  hidden border-gray-600 border-r px-2">
          PRICE:
        </h2>
        <select
          onChange={handleClick}
          className="outline-none cursor-pointer"
          name="price"
        >
          <Option value="" title="All" />
          <Option value="50" title="$50" />
          <Option value="100" title="$100" />
          <Option value="150" title="$150" />
          <Option value="200" title="$200" />
          <Option value="250" title="$250" />
        </select>
      </div>
    </div>
  );
};

export default PriceSort;
