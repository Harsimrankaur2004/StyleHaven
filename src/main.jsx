import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./input.css";
import App from "./App.jsx";
import { CartProvider } from "./pages/Cart/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>,
);
