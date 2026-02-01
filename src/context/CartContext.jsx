import { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  cart: [],
  orderPlace: false,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (state.orderPlace) return state;
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };

    case "REMOVE_ITEM":
      if (state.orderPlace) return state;
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "PLACE_ORDER":
      if (state.cart.length === 0) return state;
      return {
        ...state,
        orderPlace: true,
      };

    case "CANCEL_ORDER":
      return {
        cart: [],
        orderPlace: false,
      };

    case "INCREASE_QTY":
      if (state.orderPlace) return state;
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      };

    case "DECREASE_QTY":
      if (state.orderPlace) return state;
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          )
          .filter((item) => item.quantity !== 0),
      };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState, () => {
    // INIT FROM LOCAL STORAGE
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const storedOrder = JSON.parse(localStorage.getItem("orderPlace")) || false;

    return {
      cart: storedCart,
      orderPlace: storedCart.length ? storedOrder : false,
    };
  });

  const showCancelOrderBtn = state.orderPlace;
  const cartEmpty = state.cart.length === 0;
  const hideRemoveBtn = state.orderPlace;
  const orderBtnHidden = cartEmpty || state.orderPlace;

  useEffect(() => {
    if (state.cart.length === 0) {
      localStorage.removeItem("cart");
    } else {
      localStorage.setItem("cart", JSON.stringify(state.cart));
    }
  }, [state.cart]);

  useEffect(() => {
    localStorage.setItem("orderPlace", JSON.stringify(state.orderPlace));
  }, [state.orderPlace]);

  const addToCart = (product) =>
    dispatch({ type: "ADD_TO_CART", payload: product });

  const itemQuantity = (id) => {
    const item = state.cart.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  const cartQuantity = state.cart.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const increaseQty = (id) => dispatch({ type: "INCREASE_QTY", payload: id });

  const decreaseQty = (id) => dispatch({ type: "DECREASE_QTY", payload: id });

  const removeItem = (id) => dispatch({ type: "REMOVE_ITEM", payload: id });

  const totalPrice = () => {
    return state.cart.reduce(
      (total, item) => total + item.newPrice * item.quantity,
      0,
    );
  };

  const orderPlaceButton = () => dispatch({ type: "PLACE_ORDER" });
  const cancelOrderBtn = () => dispatch({ type: "CANCEL_ORDER" });

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
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
        orderPlace: state.orderPlace,
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
