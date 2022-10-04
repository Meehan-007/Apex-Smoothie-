import React from 'react';
import hero from '../assests/Strawberry.jpg' 


//import Auth from '../utils/Auth'; 

const SmoothieCards = () => {
  
  
    return (
      <section className="Portrait shadow pagemarginleft space_center col " style={{ width: 350 }}> 
       <img className='w-100' src={hero} style={{ height: 300 }} alt="smoothie of the month" /> 
        <div className="col space_evenly w-90" style={{ height: 250}}>
          <h3> Smoothies </h3> 
          <p style={{ width: '90%' }}>  ullamco laboris nisi 
              ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit 
               culpa qui officia deserunt. </p> 
            <button className="buttonLarge"> Learnmore </button> 
            </div> 
              
               
          

        </section>
      
    );
  };
  
  export default SmoothieCards;