import FeaturedProducts from "./FeaturedProducts";
import Header from "../../components/Header";
import Hero from "./Hero";
import PromoSplitSection from "./PromoSplitSection";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <Header />

      <main className="max-w-400 mx-auto pt-4">
        <Hero />
        <FeaturedProducts />
        <PromoSplitSection />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
