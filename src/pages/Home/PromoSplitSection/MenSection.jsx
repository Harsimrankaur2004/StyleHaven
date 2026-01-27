import { useNavigate } from "react-router-dom";
import img1 from "../../../assets/men-products.png";

const MenSection = () => {
  const navigate = useNavigate();

  return (
    <div data-aos="fade-right" className="promo-section flex-1 relative">
      <img src={img1} alt="" className="h-70 sm:h-90 w-full brightness-75" />
      <div className="product-descript absolute top-15 sm:top-25 lg:left-5 left-5 flex flex-col gap-3 text-white">
        <h1 className="text-4xl sm:text-6xl md:text-4xl lg:text-5xl font-bold text-start">
          NEW
        </h1>
        <h1 className="text-4xl sm:text-6xl md:text-4xl lg:text-5xl font-bold text-start">
          ARRIVALS
        </h1>
        <p className="lg:text-2xl">FRESH LOOKS FOR HIM</p>
        <button onClick={() => navigate("/products?search=male")} className="rounded btn-color text-white py-2 px-3 font-sans w-35 cursor-pointer active:opacity-75 transition ">
          SHOP MEN'S
        </button>
      </div>
    </div>
  );
};

export default MenSection;
