import React, { useEffect, useRef } from 'react'; 
import { Link } from 'react-router-dom'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from '../contexts/CartContext';


const SmoothieCards = ({ IcedRefreshersRef, LightIntensityRef, MediumIntensityRef, HighIntensityRef, CrushedFruitBowlsRef, categories }) => {

  const { state, dispatch } = useCart(); 

  const categoriesRefs = [IcedRefreshersRef, LightIntensityRef, MediumIntensityRef, HighIntensityRef, CrushedFruitBowlsRef]; 
  
   


  // const addToCart = (smoothie) => {
  //   const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
  //   existingCart.push({ smoothie_name: smoothie.smoothie_name, price: smoothie.price });
  //   localStorage.setItem('cart', JSON.stringify(existingCart)); 
  //   toast.success('added to your cart!', {
  //     position: 'top-center', // You can change the position
  //     autoClose: 2000, // Set the notification auto-close duration in milliseconds
  //   });
  // }; 

  const handleAddToCart = (smoothie) => { 
    console.log("adding your smoothie")
    dispatch( {type: 'ADD_TO_CART', payload: smoothie });
    // addToCart({ id, smoothie_name: smoothie.smoothie_name, price: smoothie.price});
    toast.success('added to your cart!', {
      position: 'top-center', // You can change the position
      autoClose: 2000, // Set the notification auto-close duration in milliseconds
    });
  };

  return (
    <div> 
      <ToastContainer />
      {categories.map((category, index) => (
       <div key={index} ref={categoriesRefs[index]} className='left col tablet-center TabletS-w-100' >
       <h4 className='margin-top-XL'>{category.category_name}</h4>
       <div className='gapM margin-top-M row flexwrap tablet-col tablet-center TabletS-w-100'>
         {category.smoothies.map(smoothie => (
           <section key={smoothie.id} className="shadow col heightfit" id='card1'>
             <img className='w-100' src={smoothie.image} alt={smoothie.smoothie_name} />
             <div className="col w-90 padding-S" id='card2'>
               <h5 className='margin-top-S'>{smoothie.smoothie_name}</h5>
               <p  className='margin-top-S w-90'>{smoothie.description}</p> 
              
             </div>
             <div className='margin-bottom-M w-90 row space_between padding-bottom-M mobile-col-reverse'> 
            
               <button className="buttonSmallSecondary mobile-w-100 mobile-margin-top"> <Link to={`/SmoothieInfo/${smoothie.id}`} className='w-100 buttonLink'> Learn more </Link></button> 
               <button className="buttonSmall mobile-w-100"  onClick={() => handleAddToCart(smoothie)}> Add to Cart </button>
               </div>
           </section>
         ))}
       </div>
     </div>
     
      ))}
    </div>
  );
};

export default SmoothieCards;

