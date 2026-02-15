import { useRef, useState } from "react";
import { useCart } from "../../context/useCart";

const Card = ({ id, img, title, star, reviews, prevPrice, newPrice, color }) => {
  const [ added, setAdded ] = useState(false)
  const { addToCart, orderPlace } = useCart();
  const timeoutRef = useRef(null);;

  const handleClick = () => {
    if (orderPlace) return;
    clearTimeout(timeoutRef.current);

    addToCart({img, title, newPrice, id, color });
    setAdded(true)
    timeoutRef.current = setTimeout(() => {
      setAdded(false)
    }, 2000);
  }

  return (
    <div id={id} className="flex-1 basis-35 max-[400px]:w-30 md:basis-40 border border-gray-300 p-4 rounded sm:grow-0 items-center max-w-50 sm:max-w-60 flex flex-col">
      <div className="max-[400x]:w-25 max-[400px]:h-35 w-35 h-30 sm:max-w-45 rounded-2xl">
        <img
          className="w-full h-full object-contain"
          src={img}
          alt="product-image"
        />
      </div>
      <div>
        <div className="truncate max-[400px]:w-30 w-35  ">{title}</div>
        <div className="flex text-yellow-400">
          {star}
          {star}
          {star}
          {star}
          {star}
        </div>
        <div>{reviews}</div>

        <del className="text-red-600 font-bold sm:font-bold">
          {prevPrice}
        </del>
        <span className="font-bold sm:font-bold ml-2">${newPrice}</span>
      </div>
      <button onClick={handleClick} className="bg-[#1f1f1f] text-white px-8 rounded-4xl py-2 mt-2 cursor-pointer hover:opacity-55 active:opacity-40">
       {added ? "Added" : "Add" }
      </button>
    </div>
  );
};

export default Card;
