import React, { useEffect, useState } from 'react';
// import StripeContainer from '../components/stripecontainer'; 
import CheckoutForm from "../components/paymentform";
import { MdClose } from "react-icons/md"
import { Elements } from "@stripe/react-stripe-js"; 
import {loadStripe} from '@stripe/stripe-js';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  // const [showItem, setShowItem] = useState(false)
  const [total, setTotal] = useState(0);
  // const [amount, setAmount] = useState(1); 


  const stripePromise = loadStripe("pk_test_51Mz617JMbYrxGFszH51PBnJrTKtOZgdjqoeHQGPDCj9PXTQoo0qNrbagWQkvt74Pa2YanMmAs4om52L1conizo3I00T5yQCSCS") 
  
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:3001/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" }, 
      body: JSON.stringify({ amount: total }),
    })
      .then((res) => res.json())
      .then((data) => {
        const clientSecret = data.clientSecret;
        

      });
  }, [total]);


  const options = {
    // passing the client secret obtained in step 3
    clientSecret: '{{CLIENT_SECRET}}',
    // Fully customizable with appearance API.
    appearance: {/*...*/},
  };
  const handleDeleteItem = (index) => {
    const updatedCart = cartItems.filter((_, itemIndex) => itemIndex !== index);

    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };





  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));

    }
  }, []);

  useEffect(() => {
    let calculatedTotal = 0;

    cartItems.forEach((item) => {
      calculatedTotal += parseFloat(item.price);
    });
    calculatedTotal *= 100;
    setTotal(calculatedTotal);  // Convert the total back to a string with 2 decimal places  
    console.log(total)


  }, [cartItems]);

  return (
    <div style={{ background: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>

     
       
      
        {cartItems.length > 0 ? (
          <div style={{ width: '300px', padding: '20px', border: '1px solid #ccc' }} >
            <h2>Shopping Cart</h2>
            {cartItems.map((item, index) => (
              <div key={index} className='row space_between' style={{ borderBottom: '1px solid #ccc', marginBottom: '10px', paddingBottom: '10px' }}>

                <div>
                  <p>{item.smoothie_name}</p>
                  <p>${parseFloat(item.price).toFixed(2)}</p>
                </div>

                <button style={{ width: '28px', height: '28px' }} onClick={() => handleDeleteItem(index)}><MdClose style={{ color: "grey", width: '22px', height: '22px' }} className='icon-size' /></button>

              

              </div>
            ))}
            <div className='margin-top-M margin-bottom-S'>
              <p>Total: ${(total / 100).toFixed(2)}</p>
            </div> 
           
            {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          )}
            {/* <button class="buttonLarge" onClick={() => setShowItem(true)}>Purchase</button> */}
          </div>

        ) : (
          <p>Your cart is empty.</p>
        )}
    </div >
  );
};

export default ShoppingCart;
