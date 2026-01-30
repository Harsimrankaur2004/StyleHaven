import { useNavigate } from "react-router-dom";
import bagCart from "../../assets/cart-bag.png"

const EmptyCart = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col justify-center items-center border h-screen">
      <div className="w-50 h-50">

      <img src={bagCart} alt="" />
      </div>
      <div className="text-xl">Your cart is currently empty.</div>
      <button onClick={() => navigate("/products")} className="bg-[#1e1e1e] text-white py-3 px-10 rounded-2xl mt-3 hover:opacity-65 active:opacity-40 cursor-pointer">Continue shopping</button>
    </div>
  );
};

export default EmptyCart;
