import { useCart } from "./CartContext";

const CancleOrderButton = () => {
  const { cancelOrderBtnHidden, cancelOrderBtn } = useCart();
  return (
    <button
      onClick={() => cancelOrderBtn()}
      className={` ${cancelOrderBtnHidden ? "hidden" : "block"} bg-red-500 py-3 px-6 rounded-2xl text-white hover:opacity-65 active:opacity-40 cursor-pointer`}
    >
      Cancel Order
    </button>
  );
};

export default CancleOrderButton;
