import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/useCart"

const CartCount = () => {
  const { cartQuantity } = useCart();
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/cart")}
      className="relative flex items-center cursor-pointer hover:scale-110 duration-100"
    >
      <nav>
        <FaCartShopping fontSize={30} />
      </nav>
      <div className="absolute h-5 w-5 flex justify-center items-center top-2 -right-1 rounded-full text-white bg-red-600">
        {cartQuantity}
      </div>
    </div>
  );
};

export default CartCount;
