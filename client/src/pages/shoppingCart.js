import React, { useEffect, useState } from 'react'; 
import StripeContainer from '../components/stripecontainer'; 


const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);  
  const [showItem, setShowItem] = useState(false)  
  const [total, setTotal] = useState(0); 
 

 
  
 

  useEffect(() => {
    const storedCart = localStorage.getItem('cart'); 
    if (storedCart) {
        setCartItems(JSON.parse(storedCart));  
        
    }
  }, []);

  useEffect(() => { 
    let calculatedTotal = 0; 
    let stripeTotal = 0; 
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
      <div style={{ width: '300px', padding: '20px', border: '1px solid #ccc' }}>
        <h2>Shopping Cart</h2>
        {cartItems.map((item) => (
          <div key={item.id} style={{ borderBottom: '1px solid #ccc', marginBottom: '10px', paddingBottom: '10px' }}>
            <p>{item.smoothie_name}</p>
           <p> ${parseFloat(item.price).toFixed(2)} </p> 
          </div>
        ))}
        <div style={{ borderTop: '1px solid #ccc', marginTop: '10px', paddingTop: '10px' }}>
        <p>Total: ${(total / 100).toFixed(2)}</p>
        </div> 

        {showItem ? <StripeContainer total={total}/> : <> <button onClick={() => setShowItem(true)}> Purchase </button></>}
      </div> 
    ) : ( 
        <p> Your cart is empty. </p> 
    )}
    </div>
  );
};

export default ShoppingCart;
