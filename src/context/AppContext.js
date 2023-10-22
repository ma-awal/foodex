import React, { useState } from 'react';
import { createContext } from 'react';
import data from '../data/data.js';
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [food, setFood] = useState(data);
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  const addToCart = (item) => {
    setCart([...cart, item]);
    setCartItemCount(cartItemCount + 1);
  };

  const value = {
    cart,
    food,
    setFood,
    addToCart,
    setCart,
    cartItemCount,
    setCartItemCount,
    show,
    setShow,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export { AppContext, AppProvider };
