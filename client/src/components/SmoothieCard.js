import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from '../contexts/CartContext'; 
import UpSellModal from './UpSellModal';

const SmoothieCards = ({ IcedRefreshersRef, LightIntensityRef, MediumIntensityRef, HighIntensityRef, CrushedFruitBowlsRef, categories }) => {
  const { dispatch } = useCart(); 

  const categoriesRefs = [IcedRefreshersRef, LightIntensityRef, MediumIntensityRef, HighIntensityRef, CrushedFruitBowlsRef];
  const [showModal, setShowModal] = useState(false); 

  const handleCloseModal = () => setShowModal(false); 
  const [selectedSmoothie, setSelectedSmoothie] = useState(null);

  const handleShowModal = (smoothie) => {
    setSelectedSmoothie(smoothie);
    setShowModal(true);
  };

  const handleAddToCart = (smoothie, addOns) => { 
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
    console.log("adding your smoothie")
    dispatch({ type: 'ADD_TO_CART', payload: finalSmoothie }); 
     
    toast.success('added to your cart!', {
      position: 'top-center', 
      autoClose: 2000, 
    });
  };

  const handleConfirmAddOns = (addOns) => {
    handleAddToCart(selectedSmoothie, addOns);
    console.log('Add-Ons Confirmed:', addOns);
  }   



  return (
    <div>
      <ToastContainer /> 
      <UpSellModal
               show={showModal}
               handleClose={handleCloseModal}
               handleConfirmAddOns={handleConfirmAddOns}
             />
      {categories.map((category, index) => (
        <div key={index} ref={categoriesRefs[index]} className='left col tablet-center TabletS-w-100' >
          <h4 className='margin-top-XL'>{category.category_name}</h4>
          <div className='gapM margin-top-M row flexwrap tablet-col tablet-center TabletS-w-100'> 

            {category.smoothies.map(smoothie => (
              <section key={smoothie.id} className="shadow col heightfit" id='card1'>
                <img className='w-100' src={smoothie.image} alt={smoothie.smoothie_name} />
                <div className="col w-90 padding-S" id='card2'>
                  <h5 className='margin-top-S'>{smoothie.smoothie_name}</h5>
                  <p className='margin-top-S w-90'>{smoothie.description}</p>
                  <h5 className='margin-top-S greenfill textcenter'> {smoothie.price}.00 </h5>
                </div>
                <div className='margin-bottom-M w-90 row space_between padding-bottom-M mobile-col-reverse'>
                  <button className="buttonSmallSecondary mobile-w-100 mobile-margin-top"> <Link to={`/SmoothieInfo/${smoothie.id}`} className='w-100 buttonLink'> Learn more </Link></button>
                  <button className="buttonSmall mobile-w-100" onClick={() => handleShowModal(smoothie)}> Add to Cart </button>
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

