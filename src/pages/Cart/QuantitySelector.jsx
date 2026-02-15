import { useCart } from "../../context/useCart";
const btnStyle =
  "bg-gray-200 text-gray-600 flex-1 flex justify-center items-center cursor-pointer text-2xl font-bold";

const QuantitySelector = ({ id }) => {
  const { itemQuantity, increaseQty, decreaseQty } = useCart();

  return (
    <div className="flex border border-gray-500 h-7 justify-center rounded w-25 my-2">
      <button className={btnStyle} onClick={() => increaseQty(id)}>
        +
      </button>
      <div className="px-3 text-center font-bold text-xl">
        {itemQuantity(id)}
      </div>
      <button className={btnStyle} onClick={() => decreaseQty(id)}>
        -
      </button>
    </div>
  );
};

export default QuantitySelector;
