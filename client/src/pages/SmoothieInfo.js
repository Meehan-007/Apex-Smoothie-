import React from 'react';
import { Link } from 'react-router-dom'; 

import HeroCover2 from '../components/SmoothieHero2';
import SmoothieFooter from '../components/NutritionInfo';

//import Auth from '../utils/Auth'; 

const Smoothieinfo = () => {
  
  
    return (
      <section className='col paddingbottom'>  

  <div className='space_center'> 
  <HeroCover2/> 
  </div>  
  <div className='pagemarginleft pagemarginright margin-top-XL'> 
    <h4> Ingredients </h4> 
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliqua. 
       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
       commodo consequat. Duis aute irure dolor in</p> 
       <Link to="/ingredients"> Want to learn where we source our Ingredients? </Link> 
  </div> 
  {/* <h1 className='margin-top-XXL pagemarginleft pagemarginright'> Nutrition Info </h1>   */} 

  
  
  </section> 
    );
  };
  
  export default Smoothieinfo;