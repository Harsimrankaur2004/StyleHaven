import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch {
      return [];
    }
  });

  const [orderPlace, setOrderPlace] = useState(() => {
    return JSON.parse(localStorage.getItem("orderPlace")) || false;
  });
  const showCancelOrderBtn = orderPlace;
  const cartEmpty = cart.length === 0;
  const hideRemoveBtn = orderPlace;
  const orderBtnHidden = cartEmpty || orderPlace;

  useEffect(() => {
  if (cart.length === 0) {
    localStorage.removeItem("cart");
  } else {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  localStorage.setItem("orderPlace", JSON.stringify(orderPlace));
}, [cart, orderPlace]);


  const addToCart = (product) => {
    if (orderPlace) return;
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
    if (orderPlace) return;
    setCart((cart) =>
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQty = (id) => {
    if (orderPlace) return;
    setCart((cart) =>
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const totalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.newPrice * item.quantity,
      0,
    );
  };

  const orderPlaceButton = () => {
    if (cartEmpty) return;
    setOrderPlace(true);
  };

  const cancelOrderBtn = () => {
    setOrderPlace(false);
    setCart([]);
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
        cartEmpty,
        hideRemoveBtn,
        orderPlaceButton,
        orderPlace,
        orderBtnHidden,
        showCancelOrderBtn,
        cancelOrderBtn,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
