import { useCart } from "../../context/CartContext";

const CancleOrderButton = () => {
  const { cancelOrderBtn } = useCart();

  const handleClick = () => {
    cancelOrderBtn();
    alert("Order is cancelled.");
  };
  return (
    <button
      onClick={handleClick}
      className="bg-red-500 py-3 px-15 rounded-2xl text-base text-white hover:opacity-65 active:opacity-40 cursor-pointer mr-3 mt-3"
    >
      Cancel Order
    </button>
  );
};

export default CancleOrderButton;
