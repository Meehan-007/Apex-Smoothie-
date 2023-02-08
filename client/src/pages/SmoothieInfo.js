import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom'; 




const Smoothieinfo = () => {
  const { id } = useParams();
  const [Smoothies, setSmoothies] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/smoothie/${id}`)
      .then(res => {
        console.log(res.data);
        setSmoothies(res.data);
      }) 
      .catch(err => console.error(err));
  }, []);
  
  
    return (
      <section className='col paddingbottom'>  

  <div className='space_center'> 
  
      <section className="space_center col-10 w-75 margin-top-XXL">
        <div className=" colcenter w-50 col TabletL-w-90"> 
          <h1> {Smoothies.smoothie_name} </h1>  
          <img className='portrait margin-top-M w-100 imagecrop' src={Smoothies.image} alt={Smoothies.smoothie_name} />

          <p className='margin-top-M'> {Smoothies.smoothie_description} </p> 
           {/* <Link to="/SmoothieInfo"> <button className="buttonLarge margin-top-M mobile-w-100"> buy now! </button> </Link> */}
          
        </div> 


         
               {/* <img className='portrait margin-left-XL tablet-none' src={hero} alt="smoothie of the month" />  */}
               
           

        </section>
      
   
  </div>  
  <div className='pagemarginleft pagemarginright margin-top-XL'> 
    <h4> Ingredients </h4> 
    <p> {Smoothies.description}</p> 
       <Link to="/about"> Want to learn where we source our Ingredients? </Link> 
  </div> 
   <h1 className='margin-top-XXL pagemarginleft pagemarginright'> Nutrition Info </h1>   
      <div> 
         <div> <p> Calories </p>  <p> {Smoothies.calories} </p>     </div>
         <div> <p> Protein </p>  <p> {Smoothies.protein}g </p>     </div> 
         <div> <p> Carbohydrates </p>  <p> {Smoothies.carbohydrates}g </p>     </div> 
         <div> <p> Fat </p>  <p> {Smoothies.fat}g </p>     </div>

      </div>
  
  
  </section> 
    );
  };
  
  export default Smoothieinfo;