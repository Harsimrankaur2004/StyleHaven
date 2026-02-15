import { useCart } from "../../context/useCart";

const CartTitle = () => {
  const { cartQuantity } = useCart();
  return <div className={`ml-10 text-xl sm:text-3xl`}>My Cart: ({cartQuantity} items)</div>;
};

export default CartTitle;
