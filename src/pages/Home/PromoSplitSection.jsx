import { useNavigate } from "react-router-dom";
import menImg from "../../assets/men-products.png"; 
import womenImg from "../../assets/women-products.png"; 

const PromoSplitSection = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: "NEW ARRIVALS",
      subtitle: "Fresh Looks for Him",
      img: menImg,
      link: "/products?search=male",
      align: "left",
      overlay: "from-black/50 to-transparent",
      buttonGradient: "from-blue-500 to-purple-500",
      textColor: "text-white",
    },
    {
      title: "TRENDING NOW",
      subtitle: "Chic & Stylish",
      img: womenImg,
      link: "/products?search=female",
      align: "right",
      overlay: "from-black/40 to-transparent",
      buttonGradient: "from-pink-500 to-yellow-400",
      textColor: "text-white",
    },
  ];
  return (
    <section className="flex flex-col gap-3 md:flex-row lg:px-6 py-6 justify-center">
      <div className="flex flex-col md:flex-row gap-6">
      {sections.map((sec, idx) => (
        <div
          key={idx}
          data-aos={sec.align === "left" ? "fade-right" : "fade-left"}
          className="relative w-full md:w-1/2 rounded-xl overflow-hidden"
        >
          {/* Image with overlay */}
          <div className="relative h-70 sm:h-90 md:h-100 lg:h-112.5 w-full">
            <img
              src={sec.img}
              alt={sec.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className={`absolute inset-0 bg-linear-to-t ${sec.overlay}`}></div>
          </div>

          {/* Text & button */}
          <div
            className={`absolute top-8 sm:top-12 md:top-16 lg:top-20 ${
              sec.align === "left" ? "left-6 sm:left-10 text-start" : "right-6 sm:right-10 text-end"
            } flex flex-col gap-3 sm:gap-4 max-w-xs sm:max-w-md ${sec.textColor}`}
          >
            <h1 className="text-4xl sm:text-6xl font-bold tracking-wide">
              {sec.title.split(" ").map((word, i) => (
                <span key={i} className="block">
                  {word}
                </span>
              ))}
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl font-medium">{sec.subtitle}</p>
            <button
              onClick={() => navigate(sec.link)}
              className={`mt-2 sm:mt-4 bg-linear-to-r ${sec.buttonGradient} cursor-pointer rounded-full py-2 sm:py-3 px-6 font-semibold shadow-lg active:scale-95`}
            >
              {sec.align === "left" ? "Shop Men's" : "Shop Women's"}
            </button>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
};

export default PromoSplitSection;
