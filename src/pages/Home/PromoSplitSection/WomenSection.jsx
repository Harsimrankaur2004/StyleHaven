import { useNavigate } from "react-router-dom";
import img2 from "../../../assets/women-products.png";

const WomenSection = () => {
  const navigate = useNavigate()
  return (
    <div data-aos="fade-left" className="promo-section flex-1 relative">
      <img src={img2} alt="" className="h-70 sm:h-90 w-full brightness-90" />

      <div className="product-descript absolute right-7.5 sm:top-25 top-15 flex flex-col items-end  gap-3 text-white">
        <h1 className="text-4xl sm:text-6xl md:text-4xl lg:text-5xl text-end font-bold">
          TRENDING
        </h1>
        <h1 className="text-4xl sm:text-6xl md:text-4xl lg:text-5xl text-end font-bold">
          NOW
        </h1>
        <p className="lg:text-2xl">CHIC & STYLISH</p>
        <button onClick={() => navigate("/products?search=female")} className="rounded text-black bg-white py-2 px-3 font-sans w-44 cursor-pointer active:opacity-75 transition hover:bg-gray-200">
          SHOP WOMEN'S
        </button>
      </div>
    </div>
  );
};

export default WomenSection;
