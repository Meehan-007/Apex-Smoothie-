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
    <section className='space_center col flexclear pagemarginleft pagemarginleft-tablet marginreset '> 

    <div className='left col mobile-w-100 mobile-center'><h4 className='margin-top-XL'> Specials </h4>
   <div className='gapM margin-top-M row flexwrap mobile-col mobile-center mobile-w-100'><SmoothieCards/> <SmoothieCards/> <SmoothieCards/> <SmoothieCards/> </div> 
  </div> 

  
  <div className='left col mobile-w-100 mobile-center'><h4 className='margin-top-XL'> Specials </h4>
  <div className=' margin-top-M gapM row flexwrap mobile-col mobile-center'><SmoothieCards/> <SmoothieCards/> <SmoothieCards/> <SmoothieCards/> </div>
  </div>  

  <div className='left col mobile-w-100 mobile-center'><h4 className='margin-top-XL'> Specials </h4>
   <div className='margin-top-M gapM row flexwrap mobile-col mobile-center'><SmoothieCards/> <SmoothieCards/> <SmoothieCards/> <SmoothieCards/> </div> 
  </div>  
  
  </section>
  </section>
    );
};
  export default Menu;