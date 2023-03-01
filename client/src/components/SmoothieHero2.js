import React from 'react';
import hero from '../assests/PBJ2.jpg' 
import { Link } from 'react-router-dom'; 

//import Auth from '../utils/Auth'; 

const heroCover2 = () => {
  
  
    return (
      <section className="space_center col-10 w-75 margin-top-XXL">
        <div className=" colcenter w-50 col TabletL-w-90"> 
          <h1> Smoothie of the Month </h1>  
          <img className='portrait web-none tablet-show margin-top-M w-100 imagecrop' src={hero} alt="smoothie of the month" /> 
          <p className='margin-top-M'> Our delicious peanut butter smoothie is made with your choice of liquid, blended with fresh strawberries, creamy peanut butter, and vanilla protein. It's a perfect balance of sweet and savory, 
          and provides a healthy and satisfying treat any time of day. </p> 
           <Link to={`/SmoothieInfo/23`}> <button className="buttonLarge margin-top-M mobile-w-100"> Learn More </button> </Link>
          
        </div> 


         
               <img className='portrait margin-left-XL tablet-none' src={hero} alt="smoothie of the month" /> 
               
           

        </section>
      
    );
  };
  
  export default heroCover2;