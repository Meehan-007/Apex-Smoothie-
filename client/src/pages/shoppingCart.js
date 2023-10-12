import React, { useEffect, useState } from 'react';
// import StripeContainer from '../components/stripecontainer'; 
import CheckoutForm from "../components/CheckoutForm";
import { MdClose } from "react-icons/md"
import { Elements } from "@stripe/react-stripe-js"; 


const ShoppingCart = (props) => { 

  const { stripePromise } = props; 
  console.log(stripePromise)
  const [ clientSecret, setClientSecret ] = useState('');
  const [cartItems, setCartItems] = useState([]);
  // const [showItem, setShowItem] = useState(false)
  const [total, setTotal] = useState(0);
  // const [amount, setAmount] = useState(1); 

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads 

    const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://apex-smoothies.herokuapp.com/'
  : 'http://localhost:3001/'; 

    fetch(`${API_URL}payment/create-payment-intent`)
      .then((res) => res.json())
      .then(({clientSecret}) => setClientSecret(clientSecret));
  }, []);



 
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
    <div   style={{ background: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

     
       
      
        {cartItems.length > 0 ? (
          <div className="margin-top-XXL" style={{ width: '300px', padding: '20px', border: '1px solid #ccc' }} >
            <h2>Shopping Cart</h2>
            {cartItems.map((item, index) => (
              <div key={index} className='margin-top-L row space_between' style={{ borderBottom: '1px solid #ccc', marginBottom: '10px', paddingBottom: '10px' }}>

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
