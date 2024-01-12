import React from 'react';
import hero from '../assests/Strawberry.jpg'


//import Auth from '../utils/Auth'; 

const HeroCover = () => {


  return (
    <section className="space_center col-10 w-75 margin-top-XXL">
      <div className=" colcenter w-50 col TabletL-w-90">
        <h1> Sign up for Rewards</h1>
        <img className='portrait web-none tablet-show margin-top-M w-100 imagecrop' src={hero} alt="smoothie of the month" />
        <p className='margin-top-M'> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          culpa qui officia deserunt mollit anim id est laborum. </p>
        <button className="buttonLarge margin-top-M mobile-w-100"> Sign up for Rewards </button>
      </div>


      {/* <div className='portrait '>  */}
      <img className='portrait margin-left-XL tablet-none' src={hero} alt="smoothie of the month" />

      {/* </div> */}

    </section>

  );
};

export default HeroCover;