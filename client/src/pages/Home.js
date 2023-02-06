import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
import SmoothieHero from '../components/SmoothieHero'  
import SmoothieCards from '../components/SmoothieCard' 

import Smoothiecover2 from '../assests/Smoothiecover2.jpeg'

//import Auth from '../utils/Auth'; 

const Home = () => { 

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/smoothie')
      .then(res => {
        console.log(res.data);
        setCategories(res.data);
      }) 
      .catch(err => console.error(err));
  }, []);
  
    return (  
  <section className='col paddingbottom'>  

  <div className='space_center'> 
  <SmoothieHero/> 
  </div>
    <section className='space_center col flexclear pagemarginleft pagemarginleft-tablet marginreset '> 

  
    
<SmoothieCards categories={categories} />;
  </section>
  </section>
    );
};
  export default Home;