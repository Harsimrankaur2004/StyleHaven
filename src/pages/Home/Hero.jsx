import image from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden mt-15">
      {/* Background Image */}
      <img
        src={image}
        alt="Fashion collection"
        className="w-full h-130 sm:h-155 md:h-180 lg:h-205 object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/30 flex items-center justify-center">
        {/* Hero Content */}
        <div
          className="text-white text-center max-w-3xl px-6 space-y-6"
          style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.6)" }}
        >
          {/* Headings */}
          <h1
            className="font-semibold tracking-tight leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
          >
            Elevate Your
          </h1>

          <h1
            className="font-semibold tracking-tight leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
          >
            Everyday Style
          </h1>

          {/* Subtext */}
          <p className="mt-4" style={{ fontSize: "clamp(1rem, 2vw, 1.4rem)" }}>
            Discover timeless pieces designed for comfort, confidence, and
            modern living.
          </p>

          {/* CTA Button */}
          <div className="mt-8 flex justify-center">
            <a href="#featuredProducts">
              <button
                className="px-12 py-3 rounded-full font-semibold
                bg-white/20 backdrop-blur-sm text-white border border-white
                hover:bg-white hover:text-black hover:scale-105
                transition-all duration-300 active:scale-95 shadow-lg"
              >
                See the Collection
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
