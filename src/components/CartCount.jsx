import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useCart } from "../pages/Cart/CartContext";

const CartCount = () => {
  const { cartQuantity } = useCart();
  const navigate = useNavigate();
  return (
    <div className="relative flex items-center">
      <nav
        className="cursor-pointer  hover:text-gray-500"
        onClick={() => navigate("/cart")}
      >
        <FaCartShopping fontSize={30} />
      </nav>
      <div className="absolute h-5 w-5 flex justify-center items-center top-2 -right-1 rounded-full text-white bg-red-600">{cartQuantity}</div>
    </div>
  );
};

export default CartCount;
