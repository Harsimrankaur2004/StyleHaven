import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

// ----- Components -----
import Header from "../../components/Header";
import ProductsContent from "./ProductsContent";
import SideBar from "./Sidebar/SideBar";
import Card from "./Card";

// ----- Data -----
import productsData from "../../db/data";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const searchFromURL = searchParams.get("search");

  useEffect(() => {
    searchFromURL ? setSelectedCategory(searchFromURL) : "";
  }, [searchFromURL]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
    navigate(`/products?search=${encodeURIComponent(value)}`);
  };

  const handleClick = (e) => {
    const range = e.target.value;

    if (range === "50" || "100" || "150" || "200" || "250") {
      setSelectedCategory(range);
    }
  };

  function filteredData(products, selected) {
    const normalize = (val) => String(val).toLowerCase().trim();
    let filteredProducts = products;

    if (selected) {
      selected = normalize(selected);
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title, gender }) =>
          normalize(category) === selected ||
          normalize(gender) === selected ||
          normalize(color) === selected ||
          normalize(company) === selected ||
          normalize(newPrice) === selected ||
          normalize(title).includes(selected),
      );
    }

    return filteredProducts.map(
      ({ id, img, title, star, reviews, prevPrice, newPrice, color }) => (
        <Card
          key={id}
          id={id}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          color={color}
        />
      ),
    );
  }

  const result = filteredData(productsData, selectedCategory);

  return (
    <div className="max-w-400 m-auto">
      <Header />
      <SideBar handleChange={handleChange} />
      <ProductsContent handleClick={handleClick} result={result} />
    </div>
  );
};

export default ProductsPage;
