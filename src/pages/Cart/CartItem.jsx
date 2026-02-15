import { useCart } from "../../context/useCart";
import QuantitySelector from "./QuantitySelector";
import RemoveItemButton from "./RemoveItemButton";

const CartItem = () => {
  const { cart } = useCart();

  return (
    <div className="md:p-4 p-2 sm:p-3">
      {cart.map((item) => (
        <div key={item.id} className="flex mb-3">
          <div className="sm:w-45 h-45 w-30 max-[391px]:h-40 max-[346px]:w-23 border border-gray-500 p-1 rounded">
            <img
              className="w-full h-full object-contain"
              src={item.img}
              alt="product image"
            />
          </div>
          <div className="ml-3 flex-1">
            <div className="font-bold sm:text-xl line-clamp-1">{item.title}</div>
            <div className="mb-2 lg:mb-5">Color: {item.color}</div>
            <div className="xl:hidden">${item.newPrice}</div>
            <QuantitySelector id={item.id} />
            <RemoveItemButton id={item.id} />
          </div>
          <div className="flex-1 text-end font-bold text-xl hidden xl:block">
            {item.newPrice}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
