import React, { useEffect, useState } from 'react';
import StripeContainer from '../components/stripecontainer';
import { MdClose } from "react-icons/md"

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showItem, setShowItem] = useState(false)
  const [total, setTotal] = useState(0);
  // const [amount, setAmount] = useState(1); 

  console.log(cartItems);



  const handleDeleteItem = (index) => {
    const updatedCart = cartItems.filter((_, itemIndex) => itemIndex !== index);

    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // const handleQuantityChange = (index, newAmount) => {
  //   const updatedCart = cartItems.map((item, itemIndex) => {
  //     if (itemIndex === index) {
  //       return { ...item, amount: newAmount };
  //     }
  //     return item;
  //   });
  //   setCartItems(updatedCart);
  // };



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
      
        {
          showItem ? (
          <StripeContainer total = { total } />  
           ) : ( 
            <>
            {cartItems.length > 0 ? (
              <div style = {{ width: '300px', padding: '20px', border: '1px solid #ccc' }} >
        <h2>Shopping Cart</h2>
          {cartItems.map((item, index) => (
          <div key={index} className='row space_between' style={{ borderBottom: '1px solid #ccc', marginBottom: '10px', paddingBottom: '10px' }}>

            <div>
              <p>{item.smoothie_name}</p>
              <p>${parseFloat(item.price).toFixed(2)}</p>
            </div>

            <button style={{ width: '28px', height: '28px' }} onClick={() => handleDeleteItem(index)}><MdClose style={{ color: "grey", width: '22px', height: '22px' }} className='icon-size' /></button>

            {/* <button onClick={() => handleQuantityChange(index, item.amount - 1)}>Subtract</button>
              <p>{item.amount}</p>
              <button onClick={() => handleQuantityChange(index, item.amount + 1)}>Add</button>  */}

          </div>
        ))}
      <div className='margin-top-M margin-bottom-S'>
        <p>Total: ${(total / 100).toFixed(2)}</p>
      </div>
      <button class="buttonLarge" onClick={() => setShowItem(true)}>Purchase</button>
    </div> 
    
  ) : (
    <p>Your cart is empty.</p>
  )} 
  </>
)}
    </div >
  );
};

export default ShoppingCart;
