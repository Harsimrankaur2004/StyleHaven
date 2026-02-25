// ---- external libraries ----
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom"
import AOS from "aos";
import "aos/dist/aos.css";

// ---- components ----
import HomePage from "./pages/Home/HomePage"
import ProductsPage from "./pages/Products/ProductsPage"
import CartPage from "./pages/Cart/CartPage";

const App = () => {
  const location = useLocation();

    useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // animation only once
      easing: "ease-in-out",
    });
  }, []);

   useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);


  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      
    </div>
  )
}

export default App
