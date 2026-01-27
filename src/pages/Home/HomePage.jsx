import FeaturedProducts from "./FeaturedProducts";
import Header from "../../components/Header";
import Hero from "./Hero";
import PromoSplitSection from "./PromoSplitSection/PromoSplitSection";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="max-w-400 m-auto">
      <Header />
      <Hero />
      <FeaturedProducts />
      <PromoSplitSection />
      <Footer />
    </div>
  );
};

export default HomePage;