import React, { useEffect, useState } from 'react';
// import StripeContainer from '../components/stripecontainer'; 
import CheckoutForm from "../components/CheckoutForm";
import { MdClose } from "react-icons/md"
import { Elements } from "@stripe/react-stripe-js"; 
import { useCart } from '../contexts/CartContext';


const ShoppingCart = (props) => {  
 const { state, dispatch } = useCart();

console.log("here is the shopping cart", state); 







  const { stripePromise } = props;
  const [ clientSecret, setClientSecret ] = useState('');
 
 

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    const API_URL = process.env.NODE_ENV === 'production'
    ? 'https://apex-smoothies.herokuapp.com/'
    : 'http://localhost:3001/';  
    console.log('front end total', state.total); 
  
    // `REACT_APP_API_URL`
      fetch(`${API_URL}payment/create-payment-intent?amount=${state.total}`)
      .then((res) => res.json())
      .then(({clientSecret}) => setClientSecret(clientSecret));
  }, [state.total]);

 
  const handleDeleteItem = (smoothie) => {

    dispatch( {type: 'REMOVE_FROM_CART', payload: smoothie})
  };





 

  return (
    <div   style={{ background: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

     
       
      
        {state.cart.length > 0 ? (
          <div className="margin-top-XXL" style={{ width: '300px', padding: '20px', border: '1px solid #ccc' }} >
            <h2>Shopping Cart</h2>
            {/* {cartItems.map((item, index) => (  */}
               {state.cart.map((smoothie) => (
              <div key={smoothie.id} className='margin-top-L row space_between' style={{ borderBottom: '1px solid #ccc', marginBottom: '10px', paddingBottom: '10px' }}>
               {/* <div key={item.id} className='margin-top-L row space_between' style={{ borderBottom: '1px solid #ccc', marginBottom: '10px', paddingBottom: '10px' }}> */}
                <div>
                  <p>{smoothie.smoothie_name}</p>
                  <p>${parseFloat(smoothie.price).toFixed(2)}</p>
                </div>

                <button style={{ width: '28px', height: '28px' }} onClick={() => handleDeleteItem(smoothie)}><MdClose style={{ color: "grey", width: '22px', height: '22px' }} className='icon-size' /></button>

              

              </div>
            ))}
            <div className='margin-top-M margin-bottom-S'>
              <p>Total: ${(state.total / 100).toFixed(2)}</p>
            </div> 
          <> 
            {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret, }}>
          <CheckoutForm />
        </Elements>
      )} 
      </> 
            {/* <button class="buttonLarge" onClick={() => setShowItem(true)}>Purchase</button> */}
          </div>

        ) : (
          <p>Your cart is empty.</p>
        )}
    </div >
  );
};

export default ShoppingCart;
