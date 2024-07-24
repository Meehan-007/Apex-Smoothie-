import React, { useState } from 'react';
import hero from '../assests/PBJ2.jpg'
import { Link } from 'react-router-dom'; 
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from '../contexts/CartContext';
import UpSellModal from './UpSellModal';

const HeroCover2 = () => {

  const smoothieOfTheMonth = {
    id: 23,
    price: "9",
    smoothie_name: "PB&JO"
  }
  const [showModal, setShowModal] = useState(false);
  const { state, dispatch } = useCart();

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);


  const handleAddToCart = (smoothie, addOns) => {
    console.log("adding your smoothie")
    console.log(smoothie);
    console.log(addOns);
    const addOnPrices = {
      creatine: 1,
      glutamine: 1,
      superGreens: 1,
      citruline: 1,
      extraProtein: 1.5,
    };

    const totalAddOnPrice = Object.entries(addOns).reduce(
      (total, [key, value]) => total + (value ? addOnPrices[key] : 0),
      0
    );

    const finalSmoothie = {
      ...smoothie,
      price: parseFloat(smoothie.price) + totalAddOnPrice,
      addOns, 
      uniqueId: uuidv4(),
    };

    dispatch({ type: 'ADD_TO_CART', payload: finalSmoothie });
    toast.success('added to your cart!', {
      position: 'top-center', // You can change the position
      autoClose: 2000, // Set the notification auto-close duration in milliseconds
    });
  };

 

const handleConfirmAddOns = (addOns) => {
  handleAddToCart(smoothieOfTheMonth, addOns);
  console.log('Add-Ons Confirmed:', addOns);
} 




  return (
    <section className="space_center col-10 w-75 margin-top-XXL">
      <ToastContainer />
      <div className=" colcenter w-50 col TabletL-w-90">
        <h1> The best seller PB&JO </h1>
        <img className='portrait web-none tablet-show margin-top-M w-100 imagecrop' src={hero} alt="smoothie of the month" />
        <p className='margin-top-M'> Our delicious peanut butter smoothie is made with your choice of liquid, blended with fresh strawberries, creamy peanut butter, and vanilla protein. It's a perfect balance of sweet and savory,
          and provides a healthy and satisfying treat any time of day. </p>
        <h5 className='margin-top-S greenfill textcenter' style={{ width: '50px' }}> 9.00 </h5>
        <div className='row center margin-top-M mobile-col-reverse'>
          <Link className='mobile-w-100 mobile-margin-top' to={`/SmoothieInfo/23`}> <button className="buttonMediumSecondary mobile-w-100"> Learn More </button> </Link>
          <button className="buttonMedium mobile-w-100 margin-left-L marginreset" onClick={handleShowModal}> Add to Cart </button> 
          <UpSellModal
        show={showModal}
        handleClose={handleCloseModal}
        handleConfirmAddOns={handleConfirmAddOns}
      />
        </div>
      </div>



      <img className='portrait margin-left-XL tablet-none' src={hero} alt="smoothie of the month" />



    </section>

  );
};

export default HeroCover2;