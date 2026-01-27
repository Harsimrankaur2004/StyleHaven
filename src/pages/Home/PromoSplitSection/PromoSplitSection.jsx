import MenSection from "./MenSection";
import WomenSection from "./WomenSection";

const PromoSplitSection = () => {
  return (
    <section className="flex flex-col gap-3 md:flex-row lg:px-6 py-6">
      <MenSection />
      <WomenSection />
    </section>
  );
};

export default PromoSplitSection;
