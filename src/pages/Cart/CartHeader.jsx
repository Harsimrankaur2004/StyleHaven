import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";
import { FaShirt } from "react-icons/fa6";
import CartTitle from "./CartTitle";

const CartHeader = () => {
  const navigate = useNavigate();
  return (
    <header className="flex justify-evenly h-20 items-center max-w-400 m-auto shadow-xl fixed z-10 bg-white top-0 right-0 left-0">
      <Logo />
      <CartTitle />
      <nav
        className="cursor-pointer border p-2 rounded border-gray-400 hover:border-2 hover:border-black"
        onClick={() => navigate("/products")}
      >
        <FaShirt fontSize={30} />
      </nav>
    </header>
  );
};

export default CartHeader;
