import React from 'react';
import hero from '../assests/PBJ2.jpg'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from '../contexts/CartContext';

//import Auth from '../utils/Auth'; 

const HeroCover2 = () => {

  const smoothieOfTheMonth = {
    id: 23,
    price: "9",
    smoothie_name: "PB&JO"
  }



  const { state, dispatch } = useCart();

  const handleAddToCart = (smoothie) => {
    console.log("adding your smoothie")
    dispatch({ type: 'ADD_TO_CART', payload: smoothie });
    toast.success('added to your cart!', {
      position: 'top-center', // You can change the position
      autoClose: 2000, // Set the notification auto-close duration in milliseconds
    });
  };



  return (
    <section className="space_center col-10 w-75 margin-top-XXL">
      <ToastContainer />
      <div className=" colcenter w-50 col TabletL-w-90">
        <h1> The best seller PB&JO </h1>
        <img className='portrait web-none tablet-show margin-top-M w-100 imagecrop' src={hero} alt="smoothie of the month" />
        <p className='margin-top-M'> Our delicious peanut butter smoothie is made with your choice of liquid, blended with fresh strawberries, creamy peanut butter, and vanilla protein. It's a perfect balance of sweet and savory,
          and provides a healthy and satisfying treat any time of day. </p>
        <h5 className='margin-top-S greenfill' style={{ width: '50px' }}> 11.00 </h5>
        <div className='mobile-col-reverse'>
          <Link to={`/SmoothieInfo/23`}> <button className="buttonMediumSecondary margin-top-M mobile-w-100"> Learn More </button> </Link>
          <button className="buttonMedium mobile-w-100 margin-left-L" onClick={() => handleAddToCart(smoothieOfTheMonth)}> Add to Cart </button>
        </div>
      </div>



      <img className='portrait margin-left-XL tablet-none' src={hero} alt="smoothie of the month" />



    </section>

  );
};

export default HeroCover2;