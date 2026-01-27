import QuantitySelector from "./QuantitySelector";
import RemoveItemButton from "./RemoveItemButton";

const CartItem = () => {
  return (
    <div className="flex md:p-4 p-2 sm:p-3">
      <div className="w-45 h-42 border border-gray-500 p-1 rounded">
        <img
          className="w-full h-full object-contain"
          src="https://i.pinimg.com/1200x/59/9a/2e/599a2e0330633cf95c461831d45165de.jpg"
          alt=""
        />
      </div>
      <div className="ml-3">
        <div className="font-bold min-[850px]:text-xl ">Men's Tipped Johnny Collar Sweater Polo</div>
        <div className="mb-2 lg:mb-5">Color: Green</div>
        <div className="xl:hidden">$200</div>
        <QuantitySelector />
        <RemoveItemButton />
      </div>
      <div className="flex-1 text-end font-bold text-xl hidden xl:block">$200</div>
    </div>
  );
};

export default CartItem;
