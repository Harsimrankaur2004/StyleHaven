import { useCart } from "./CartContext";

const CancleOrderButton = () => {
  const { cancelOrderBtn } = useCart();
  return (
    <button
      onClick={() => cancelOrderBtn()}
      className="bg-red-500 py-3 px-15 rounded-2xl text-base text-white hover:opacity-65 active:opacity-40 cursor-pointer mr-3 mt-3"
    >
      Cancel Order
    </button>
  );
};

export default CancleOrderButton;
