import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [ cartEmpty, setCartEmpty] = useState(true)

  const addToCart = (product) => {
    setCartEmpty(false)
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const itemQuantity = (id) => {
    const item = cart.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const increaseQty = (id) => {
    setCart((cart) =>
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQty = (id) => {
    setCart((cart) =>
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    if(cart.length <= 1) {
      setCartEmpty(true)
    }
  };

  const totalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.newPrice * item.quantity,
      0,
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        cartQuantity,
        itemQuantity,
        increaseQty,
        decreaseQty,
        removeItem,
        totalPrice,
        cartEmpty
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
