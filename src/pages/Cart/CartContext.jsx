import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartEmpty, setCartEmpty] = useState(true);
  const [orderPlace, setOrderPlace] = useState(false);
  const [orderBtnHidden, setOrderBtnHidden] = useState(true);
  const [hideRemoveBtn, setHideRemoveBtn] = useState(false);
  const [cancelOrderBtnHidden, setCancelOrderBtnHidden] = useState(true);

  const addToCart = (product) => {
    setCartEmpty(false);
    setOrderBtnHidden(false);
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
    if (cart.length <= 1) {
      setCartEmpty(true);
    }
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
    setHideRemoveBtn(true);
    setCancelOrderBtnHidden(false);
  };

  const cancelOrderBtn = () => {
    setOrderPlace(false);
    setCart([]);
    setCartEmpty(true);
    setCancelOrderBtnHidden(true);
    setOrderBtnHidden(true);
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
        cancelOrderBtnHidden,
        cancelOrderBtn,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
