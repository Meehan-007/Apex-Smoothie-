import React from 'react';
import { Link } from 'react-router-dom'; 

import HeroCover2 from '../components/SmoothieHero2';
import SmoothieFooter from '../components/NutritionInfo';

//import Auth from '../utils/Auth'; 

const Smoothieinfo = () => {
  
  
    return (
      <section className='col paddingbottom'>  

  <div className='space_center'> 
  
      <section className="space_center col-10 w-75 margin-top-XXL">
        <div className=" colcenter w-50 col TabletL-w-90"> 
          <h1> {smoothie.name} </h1>  
          <img className='portrait web-none tablet-show margin-top-M w-100 imagecrop' src={smoothie.image} alt={smoothie.smoothie_name} />

          <p className='margin-top-M'> {smoothie.description} </p> 
           {/* <Link to="/SmoothieInfo"> <button className="buttonLarge margin-top-M mobile-w-100"> buy now! </button> </Link> */}
          
        </div> 


         
               <img className='portrait margin-left-XL tablet-none' src={hero} alt="smoothie of the month" /> 
               
           

        </section>
      
   
  </div>  
  <div className='pagemarginleft pagemarginright margin-top-XL'> 
    <h4> Ingredients </h4> 
    <p> {smoothie.description}</p> 
       <Link to="/ingredients"> Want to learn where we source our Ingredients? </Link> 
  </div> 
   <h1 className='margin-top-XXL pagemarginleft pagemarginright'> Nutrition Info </h1>   
     
  
  
  </section> 
    );
  };
  
  export default Smoothieinfo;