import CartHeader from "./CartHeader";
import CartItems from "./CartItems";
import CartTitle from "./CartTitle";
import OrderSumary from "./OrderSumary";
import { useCart } from "../../context/useCart";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const { cartEmpty } = useCart();
  return (
    <div className="max-w-400 m-auto">
      <CartHeader />
      {
        cartEmpty ? <EmptyCart /> : <div className="flex flex-col mt-25 lg:p-10">
        <CartTitle />

        <div className="flex justify-center rounded p-5 flex-wrap w-full gap-5">
          <CartItems />
          <div className="flex flex-col gap-2">
            <OrderSumary />
           
          </div>
        </div>
      </div>
      }
      
    </div>
  );
};

export default Cart;
