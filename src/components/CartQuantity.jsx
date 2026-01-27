import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const CartQuantity = () => {
   const navigate = useNavigate();
  return (
    <nav className="cursor-pointer flex items-center hover:text-gray-500" onClick={() => navigate("/cart")}>
      <FaCartShopping fontSize={30} />
    </nav>
  );
};

export default CartQuantity;
