import { useNavigate } from "react-router-dom";
import data from "../../db/data";
import { FaLongArrowAltRight } from "react-icons/fa";

const FeaturedProducts = () => {
  const navigate = useNavigate();
  return (
    <div data-aos="fade-up" className="mt-8  p-4">
      <div className="flex justify-center items-center gap-6">
        <div className="h-px flex-1  bg-gray-300"></div>
        <h1 className="font-serif flex-0.5 text-2xl sm:text-4xl font-bold">
          Feaured Products
        </h1>
        <div className="h-px flex-1 bg-gray-300"></div>
      </div>
      <div className="border-b sm:p-5 py-5 border-gray-300 overflow-x-scroll no-scrollbar">
        <div className="flex gap-2 sm:gap-5 xl:justify-center">
          {data.slice(0, 5).map((d, index) => (
            <div
              key={index}
              className="w-56 py-2 md:p-4 md:py-5 flex flex-col items-center justify-center shadow"
            >
              <div className="w-30 h-35 md:w-40 md:h-52 mb-2">
                <img
                  className="w-full h-full rounded-2xl object-cover"
                  src={d.img}
                  alt=""
                />
              </div>

              <div className="px-4 text-center">
                <div className="font-bold sm:font-bold truncate w-25 md:w-40 md:text-xl">
                  {d.title}
                </div>
                <div className="font-bold sm:font-bold">${d.newPrice}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-35 m-auto mt-1">
        <button
          onClick={() => navigate("/products")}
          className="sm:bg-black font-bold sm:font-bold text-black sm:text-white py-2 px-8 font-sans w-40 cursor-pointer sm:active:opacity-75 sm:transition sm:hover:opacity-80"
        >
          VIEW ALL <FaLongArrowAltRight className="inline" />
        </button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
