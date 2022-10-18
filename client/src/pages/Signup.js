import React from 'react';

import logo from '../assests/logo.png' 
import apple from '../assests/.root/apple.jpg'  
import google from '../assests/.root/google.jpg'  
import facebook from '../assests/.root/Vector.jpg' 
 


function MyForm2() {
  
 
  
    return (
      <section className='margin-top-XXL col center w-100 paddingbottom'> 
        
     <form className="col space_evenly center border1" style={{ height: 800, width: 400 }}>  

     <img className="imagesize_large" src={logo} alt="logo" />
       <label className='col margin-top-M'>Email<input className='w-100 margin-top-S' style={{ width: 310, height: 45 }} type="text" name="name" /> </label> 
      
       
       <input className='buttonLarge' type="submit" value="Next" />
       

       <section className='row space_between center' style={{ width: 310}}> 
       
       <div className='hr' style={{ width: 120}}/>
       
        <p> or </p> 
       <div className='hr' style={{ width: 120}}/>
       

        </section>

       <div className='col'> 
       <button className='buttonLargeWhite row space_evenly center'> <img className="imagesize_small" src={google} alt="google icon" /> Sign up with Google </button> 
     <button className='buttonLargeWhite row space_evenly center margin-top-M'> <img className="imagesize_facebook" src={facebook} alt="facebook icon" /> Sign up with Facebook</button> 
     <button className='buttonLargeWhite row space_evenly center margin-top-M'> <img className="imagesize_small" src={apple} alt="Apple icon" /> Signup with Apple </button> 
     </div>

     
     </form>  
     </section>
      ) 
  }; 

  
  export default MyForm2;