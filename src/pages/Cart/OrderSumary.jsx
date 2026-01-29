import { useCart } from "./CartContext";

const OrderSumary = () => {
  const { totalPrice, orderPlace, orderPlaceButton, orderBtnHidden } = useCart();

  return (
    <div className="px-4 py-3 border border-t h-65 w-80 rounded border-gray-500 text-xl">
      <h1 className="text-3xl font-bold pb-3 my-3">Order Summary</h1>
      <div className="flex justify-between">
        <span>Sub-total</span>
        <span>${totalPrice()}</span>
      </div>

      <div className="flex justify-between border-b pb-4">
        <span>Shipping</span>
        <span>Free</span>
      </div>

      <div className="flex justify-between font-bold pt-2">
        <span>Total</span>
        <span>${totalPrice()}</span>
      </div>
      <div className="text-center">
        <button
          onClick={() => orderPlaceButton()}
          className={`bg-[#1e1e1e] text-white py-3 text-base px-15 rounded-2xl mt-3 hover:opacity-65 active:opacity-40 cursor-pointer ${orderPlace ? "pointer-events-none" : ""} ${orderBtnHidden ? "hidden" : ""}`}
        >
          {orderPlace ? "Order Placed" : "Place Order"}
        </button>
      </div>
    </div>
  );
};

export default OrderSumary;
