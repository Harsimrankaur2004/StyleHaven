import PriceSort from "./PriceSort";
import ProductsGrid from "./ProductsGrid";

const ProductsContent = ({ handleClick, result }) => {
  return (
    <div className="min-[718px]:ml-80 mt-20 p-4 flex flex-col">
      <PriceSort handleClick={handleClick} />
      <ProductsGrid result={result} />
    </div>
  );
};

export default ProductsContent;
