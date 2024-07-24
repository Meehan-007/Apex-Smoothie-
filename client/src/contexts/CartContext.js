
import { createContext, useReducer, useContext, useEffect } from 'react';

// Define the initial state
const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  total: parseFloat(localStorage.getItem('total')) || 0
};



const calculateTotal = (cart) => cart.reduce((accumulator, item) => accumulator + Math.round(parseFloat(item.price) * 100), 0);



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

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
    localStorage.setItem('total', state.total.toString());
  }, [state.cart, state.total]);

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
