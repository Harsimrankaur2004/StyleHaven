import { useNavigate } from "react-router-dom";
import image from "../../assets/hero.png"

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section data-aos="zoom-in" className="sm:px-6 w-full overflow-x-hidden relative mt-20">
      <img src={image} alt="hero image" className="w-full h-100 object brightness-75 contrast-110 saturate-90" />
      <div className="text-white absolute sm:top-1/4 sm:left-[10%] sm:bg-transparent sm:inset-auto flex flex-col justify-center text-center bg-black/20 inset-0">
        <h1 className="text-5xl md:text-6xl font-serif ">Build for the</h1>
        <h1 className="text-5xl md:text-6xl font-serif mb-1.5">Season Ahead</h1>
        <p className="mb-2.5 text-xl">DISCOVER THE LATEST TRENDS</p>
        <div>
          <button onClick={() => navigate("/products")} className="px-6 py-3 border hover:bg-gray-300 hover:font-bold hover:text-black hover:border-0 w-60 border-white font-sans rounded cursor-pointer active:opacity-75 transition">
            Explore the collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
