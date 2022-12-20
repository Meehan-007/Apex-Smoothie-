import React from 'react';
import hero from '../assests/Strawberry.jpg' 


//import Auth from '../utils/Auth'; 
// style={{ width: 250 }} 
// style={{ height: 200 }} 
//style={{ height: 250}}
const SmoothieCards = () => {
  
  
    return (
      <section className=" shadow space_center col height-fit" id='card1'  > 
       <img className='w-100' src={hero}  alt="smoothie of the month" /> 
        <div className="col space_evenly w-90 h-100 padding-S" id='card2' >
          <h5> Smoothies </h5> 
          <p style={{ width: '90%' }}>  ullamco laboris nisi 
              ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit 
               culpa qui officia deserunt. </p> 
            <button className="buttonLarge w-100" > Learnmore </button> 
            </div> 
              
               
          

        </section>
      
    );
  };
  
  export default SmoothieCards;