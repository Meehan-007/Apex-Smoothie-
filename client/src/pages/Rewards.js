import React from 'react';
import { Link } from 'react-router-dom'; 

import smoothie1 from '../assests/orange.jpg' 
import smoothie2 from '../assests/blueberry.jpeg' 
import smoothie3 from '../assests/Strawberry.jpg'

//import Auth from '../utils/Auth'; 

const Rewards = () => {
 
    return ( 
  <section className='paddingbottom'> 
      <div className="backgroundcover space_center"> 
      <Link to="/signup"> <button className='buttonLarge'>  Sign Up </button> </Link> 
      </div>  

      <section className='pagemarginleft pagemarginright space_center col margin-top-XL'> 
         <h1> reward perks </h1> 
         <div className='row margin-top-XL space_center'> 
         <img className="portrait2 circle shadow" src={smoothie1} alt="smoothie" />  
         <p className='w-50 margin-left-XXL'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
           et dolore magna aliqua. Ut enim ad minim veniam, 
           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
         </div> 
         <div className='row margin-top-XL space_center'>  
         <p className='w-50 '> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
           et dolore magna aliqua. Ut enim ad minim veniam, 
           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
         <img className="portrait2 circle shadow margin-left-XXL" src={smoothie2} alt="smoothie" />  
         </div> 
         <div className='row margin-top-XL space_center'> 
         <img className="portrait2 circle shadow" src={smoothie3} alt="smoothie" />  
         <p className='w-50 margin-left-XXL'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
           et dolore magna aliqua. Ut enim ad minim veniam, 
           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
         </div>
      </section> 
      </section>
    );
  };
  
  export default Rewards;