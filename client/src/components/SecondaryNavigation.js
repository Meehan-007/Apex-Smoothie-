import React from 'react';
import { Link } from 'react-router-dom'; 

// NEED TO SET UP SCROLLS ON THIS PAGE
//import Auth from '../utils/Auth'; 

const secondarynav = () => {
  
  
    return (
      <section className="pagemarginleft pagemarginright row space_center margin-top-M"> 
       

       <div className='row space_between w-75 TabletL-w-90 flexwrap TabletS-w-100'> 
              <Link to="/"> Category 1 </Link> 
              <Link to="/"> Category 1 </Link> 
              <Link to="/"> Category 1 </Link> 
              <Link to="/"> Category 1 </Link> 
              <Link to="/"> Category 1 </Link> 
               
          </div>      
               
               
          

      </section>
      
    );
  };
  
  export default secondarynav;