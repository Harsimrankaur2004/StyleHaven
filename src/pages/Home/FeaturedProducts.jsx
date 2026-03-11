import { useNavigate } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import useProducts from "../../hooks/useProducts";

const FeaturedProducts = () => {
  const data = useProducts();
  const navigate = useNavigate();

  return (
    <section
      id="featuredProducts"
      data-aos="fade-up"
      className="my-10 md:my-15 scroll-mt-30 p-4"
    >
      <div className="flex justify-center items-center gap-6">
        <div className="h-px flex-1 bg-gray-300"></div>
        <h1 className="font-serif flex-0.5 text-2xl sm:text-4xl md:text-5xl font-bold">
          Featured Products
        </h1>
        <div className="h-px flex-1 bg-gray-300"></div>
      </div>
      <div className="sm:p-5 py-5 overflow-x-scroll no-scrollbar mt-5 md:mt-10">
        <div className="flex gap-2 sm:gap-5 xl:justify-center">
          {data.slice(0, 5).map((d, index) => (
            <div
              key={index}
              className="rounded-2xl w-56 py-2 md:p-4 md:py-5 flex flex-col items-center justify-center shadow-md hover:shadow-2xl transition-transform duration-300 hover:scale-105"
            >
              <div className="w-30 h-35 md:w-40 md:h-52 mb-2">
                <img
                  className="w-full h-full rounded-2xl object-cover"
                  src={d.img}
                  alt=""
                />
              </div>

              <div className="px-4 text-center">
                <div className="truncate w-25 md:w-40 md:text-xl">
                  {d.title}
                </div>
                <div className="text-xl">${d.newPrice}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={() => navigate("/products")}
          className="flex items-center gap-2 bg-black text-white font-semibold py-2 px-5 rounded-full shadow hover:opacity-90 active:scale-95 transition-all cursor-pointer"
        >
          VIEW ALL <FaLongArrowAltRight className="inline" />
        </button>
      </div>
    </section>
  );
};

export default FeaturedProducts;
