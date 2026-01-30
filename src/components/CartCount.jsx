import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartCount = () => {
  const { cartQuantity } = useCart();
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/cart")}
      className="relative flex items-center cursor-pointer "
    >
      <nav className="hover:text-gray-500">
        <FaCartShopping fontSize={30} />
      </nav>
      <div className="absolute h-5 w-5 flex justify-center items-center top-2 -right-1 rounded-full text-white bg-red-600">
        {cartQuantity}
      </div>
    </div>
  );
};

export default CartCount;
