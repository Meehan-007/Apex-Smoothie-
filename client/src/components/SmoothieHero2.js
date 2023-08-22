import React from 'react';
import hero from '../assests/PBJ2.jpg' 
import { Link } from 'react-router-dom'; 

//import Auth from '../utils/Auth'; 

const heroCover2 = () => {
  
  const addToCart = (smoothie) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    existingCart.push({ smoothie_name: 'Peanut Butter', price: 11.00 });
    localStorage.setItem('cart', JSON.stringify(existingCart));
  };
  
    return (
      <section className="space_center col-10 w-75 margin-top-XXL">
        <div className=" colcenter w-50 col TabletL-w-90"> 
          <h1> Smoothie of the Month </h1>  
          <img className='portrait web-none tablet-show margin-top-M w-100 imagecrop' src={hero} alt="smoothie of the month" /> 
          <p className='margin-top-M'> Our delicious peanut butter smoothie is made with your choice of liquid, blended with fresh strawberries, creamy peanut butter, and vanilla protein. It's a perfect balance of sweet and savory, 
          and provides a healthy and satisfying treat any time of day. </p> 

          <div className='mobile-col-reverse'> 
           <Link to={`/SmoothieInfo/23`}> <button className="buttonMediumSecondary margin-top-M mobile-w-100"> Learn More </button> </Link>
           <button className="buttonMedium mobile-w-100 margin-left-L"  onClick={() => addToCart()}> Add to Cart </button> 
           </div>
        </div> 


         
               <img className='portrait margin-left-XL tablet-none' src={hero} alt="smoothie of the month" /> 
               
           

        </section>
      
    );
  };
  
  export default heroCover2;