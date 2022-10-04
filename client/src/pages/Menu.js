import React from 'react';
 

import SmoothieCards from '../components/SmoothieCard' 

import Smoothiecover2 from '../assests/Smoothiecover2.jpeg' 
import SecondaryNavigation from '../components/SecondaryNavigation'
import HeroCover2 from '../components/SmoothieHero2';

//import Auth from '../utils/Auth'; 

const Menu = () => { 

    return (  
  <section className='col paddingbottom'>  

  <div className='space_center'> 
  <HeroCover2/> 
  </div>
    <div className='margin-top-XL'> 
      <SecondaryNavigation/>
    </div>
  <h4 className='margin-top-XL pagemarginleft'> Specials </h4> 
  <div className='margin-top-M row  pagemarginleft gapM overflow'> <img className="imagesize_cover" src={Smoothiecover2} alt="smoothie" /> <img className="imagesize_cover" src={Smoothiecover2} alt="smoothie" /> <img className="imagesize_cover" src={Smoothiecover2} alt="smoothie" /> <img className="imagesize_cover" src={Smoothiecover2} alt="smoothie" /> <img className="imagesize_cover" src={Smoothiecover2} alt="smoothie" /> <img className="imagesize_cover" src={Smoothiecover2} alt="smoothie" /> <img className="imagesize_cover" src={Smoothiecover2} alt="smoothie" /> </div>
  <h4 className='margin-top-XL pagemarginleft'> Specials </h4>  
  <div className='margin-top-M row pagemarginleft gapM overflow'> <img className="imagesize_cover" src={Smoothiecover2} alt="smoothie" /> <img className="imagesize_cover" src={Smoothiecover2} alt="smoothie" /> <img className="imagesize_cover" src={Smoothiecover2} alt="smoothie" /> <img className="imagesize_cover" src={Smoothiecover2} alt="smoothie" /> <img className="imagesize_cover" src={Smoothiecover2} alt="smoothie" /> <img className="imagesize_cover" src={Smoothiecover2} alt="smoothie" /> <img className="imagesize_cover" src={Smoothiecover2} alt="smoothie" /> </div>
  <h4 className='margin-top-XL pagemarginleft'> Specials </h4> 
  <div className='margin-top-M row pagemarginleft gapM overflow'> <img className="imagesize_cover" src={Smoothiecover2} alt="smoothie" /> <img className="imagesize_cover" src={Smoothiecover2} alt="smoothie" /> <img className="imagesize_cover" src={Smoothiecover2} alt="smoothie" /> <img className="imagesize_cover" src={Smoothiecover2} alt="smoothie" /> <img className="imagesize_cover" src={Smoothiecover2} alt="smoothie" /> <img className="imagesize_cover" src={Smoothiecover2} alt="smoothie" /> <img className="imagesize_cover" src={Smoothiecover2} alt="smoothie" /> </div> 
  </section>
    );
};
  export default Menu;