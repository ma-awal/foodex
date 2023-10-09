import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import axios from 'axios';
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [food, setFood] = useState({});
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/foods');
      setFood(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
