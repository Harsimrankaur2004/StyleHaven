import CartHeader from "./CartHeader";
import CartItems from "./CartItems";
import CartTitle from "./CartTitle";
import OrderSumary from "./OrderSumary";

const Cart = () => {
  return (
    <div className="max-w-400 m-auto">
      <CartHeader />
      <div className="flex flex-col mt-30 lg:p-10">
      <CartTitle  />
        <div className="flex justify-center rounded p-5 flex-wrap w-full gap-5">
          <CartItems />
          <OrderSumary />
        </div>
      </div>
    </div>
  );
};

export default Cart;
