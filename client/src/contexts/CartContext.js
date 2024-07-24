// CartContext.js
import { createContext, useReducer, useContext } from 'react';

// Define the initial state
const initialState = {
  cart: [],
  total: 0
};

const calculateTotal = (cart) => cart.reduce((accumulator, item) => accumulator + Math.round(parseFloat(item.price) * 100), 0);
localStorage.setItem('cart', JSON.stringify(initialState.cart));


// Create the context
const CartContext = createContext();

// Create the reducer function
const cartReducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case 'ADD_TO_CART':
      console.log('we added to the cart')
      const addedCart = [...state.cart, action.payload];
      return { ...state, cart: addedCart, total: calculateTotal(addedCart) };
    case 'REMOVE_FROM_CART': 
    const removedCart = state.cart.filter(item => item.uniqueId !== action.payload.uniqueId);
      return { ...state, cart: removedCart, total: calculateTotal(removedCart) };
    default:
      return state;
  }
};

// Create the CartProvider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
};
