import React from 'react';
 
import SmoothieHero from '../components/SmoothieHero'  
import SmoothieCards from '../components/SmoothieCard' 

import Smoothiecover2 from '../assests/Smoothiecover2.jpeg'

//import Auth from '../utils/Auth'; 

const Home = () => { 

    return (  
  <section className='col paddingbottom'>  

  <div className='space_center'> 
  <SmoothieHero/> 
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
  export default Home;