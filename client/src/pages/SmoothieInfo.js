import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom'; 




const Smoothieinfo = () => {
  const { id } = useParams();
  const [Smoothies, setSmoothies] = useState([]); 

  const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://apex-smoothies.herokuapp.com/api'
  : 'http://localhost:3001/api';

  useEffect(() => {
    axios
      .get(`${API_URL}/smoothie/${id}`)
      .then(res => {
        console.log(res.data);
        setSmoothies(res.data);
      }) 
      .catch(err => console.error(err));
  }, []);
  
  
    return (
  <section className='space_center margin-top-XXL'>  


<section className='colcenter w-50 col TabletL-w-90'> 
  
    <h1> {Smoothies.smoothie_name} </h1>  
    <img className='portrait web-none tablet-show margin-top-M w-100 imagecrop' src={Smoothies.image} alt={Smoothies.smoothie_name} />
    <h4 className='margin-top-L'> Ingredients </h4>  
    <p> {Smoothies.description}</p> 
    <Link to="/about" className=''> Want to learn where we source our Ingredients? </Link> 
  
   {/* <h1 className='margin-top-XXL pagemarginleft pagemarginright'> Nutrition Info </h1>    */}
      <table className='styled-table margin-top-M'> 
         <tr> <th> Calories </th>  <td> {Smoothies.calories} </td>     </tr>
         <tr> <th> Protein </th>  <td> {Smoothies.protein}g </td>     </tr> 
         <tr> <th> Carbohydrates </th>  <td> {Smoothies.carbohydrates}g </td>     </tr> 
         <tr> <th> Fat </th>  <td> {Smoothies.fat}g </td>     </tr>

      </table>
      </section>


{/* 
  <div className='space_center'>  */}
  
      {/* <section className="space_center col-10 w-75 margin-top-XXL">
        <div className=" colcenter w-50 col TabletL-w-90">  */}
          
          <img className='portrait margin-left-XL tablet-none' src={Smoothies.image} alt={Smoothies.smoothie_name} />

          {/* <p className='margin-top-M'> {Smoothies.smoothie_description} </p>  */}
           {/* <Link to="/SmoothieInfo"> <button className="buttonLarge margin-top-M mobile-w-100"> buy now! </button> </Link> */}
          
        {/* </div>  */}


         
               {/* <img className='portrait margin-left-XL tablet-none' src={hero} alt="smoothie of the month" />  */}
               
           

        {/* </section> */}
      
   
  {/* </div>   */}

  
  
  </section> 
    );
  };
  
  export default Smoothieinfo;