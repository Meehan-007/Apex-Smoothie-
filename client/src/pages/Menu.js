import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRef } from 'react'; 

import SmoothieCards from '../components/SmoothieCard' 
import Smoothiecover2 from '../assests/Smoothiecover2.jpeg' 
import SecondaryNavigation from '../components/SecondaryNavigation'
import HeroCover2 from '../components/SmoothieHero2'; 


//import Auth from '../utils/Auth'; 

const Menu = () => { 
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/menu')
      .then(res => {
        console.log(res.data);
        setCategories(res.data);
      }) 
      .catch(err => console.error(err));
  }, []); 

const IcedRefreshersRef = useRef(null);
const LightIntensityRef = useRef(null);
const MediumIntensityRef = useRef(null);
const HighIntensityRef = useRef(null);
const CrushedFruitBowlsRef = useRef(null);



    return (  
  <section className='col paddingbottom'>  

  <div className='space_center'> 
  <HeroCover2/> 
  </div>
    <div className='margin-top-XL'> 
      <SecondaryNavigation  IcedRefreshersRef={IcedRefreshersRef}
        LightIntensityRef={LightIntensityRef}
        MediumIntensityRef={MediumIntensityRef}
        HighIntensityRef={HighIntensityRef}
        CrushedFruitBowlsRef={CrushedFruitBowlsRef} />
    </div>
    <section className='space_center col pagemarginleft pagemarginright pagemarginleft-tablet pagemarginright-tablet marginreset '> 
<SmoothieCards IcedRefreshersRef={IcedRefreshersRef}
        LightIntensityRef={LightIntensityRef}
        MediumIntensityRef={MediumIntensityRef}
        HighIntensityRef={HighIntensityRef}
        CrushedFruitBowlsRef={CrushedFruitBowlsRef}
        categories={categories} />
   
  </section>
  </section>
    );
};
  export default Menu;