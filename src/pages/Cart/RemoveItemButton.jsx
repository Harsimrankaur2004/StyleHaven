import { useCart } from "../../context/useCart";

const RemoveItemButton = ({ id }) => {
  const { removeItem } = useCart();
  const { hideRemoveBtn } = useCart();

  return (
    <button
      onClick={() => {
        removeItem(id);
      }}
      className={`${hideRemoveBtn ? "hidden" : "block"} hover:text-gray-600 lg:text-xl cursor-pointer text-red-600`}
    >
      Remove
    </button>
  );
};

export default RemoveItemButton;
