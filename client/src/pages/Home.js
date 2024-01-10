import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import cover from '../assests/HomeCover.JPG' 
 
 
import SmoothieCards from '../components/SmoothieCard' 



//import Auth from '../utils/Auth'; 

const Home = () => {  

  const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://apex-smoothies.herokuapp.com/'
  : 'http://localhost:3001/';

  const [categories, setCategories] = useState([]);
console.log(API_URL);
  useEffect(() => {
    axios
      .get(`${API_URL}api/smoothie`)
      .then(res => {
        console.log(res.data);
        setCategories(res.data);
      }) 
      .catch(err => console.error(err));
  }, []);
  
    return (  
  <section className='paddingbottom'>  

{/* this is to provide a buffer so the image does not go under the navigation because the nav has a z index */}
<div className='web-none TabletS-show' id='buffer' style={{ "width" : "100%"}}> </div>
  
  <div> 
      <img className="backgroundcover"  src={cover} alt="cover" /> 
      {/* <Link to="/signup"> <button className='buttonLarge'>  Sign Up </button> </Link>  */}
      </div>  
 
    <section className='space_center col pagemarginleft pagemarginright pagemarginleft-tablet pagemarginright-tablet marginreset '> 

  
    
<SmoothieCards categories={categories} />;
  </section>
  </section>
    );
};
  export default Home;