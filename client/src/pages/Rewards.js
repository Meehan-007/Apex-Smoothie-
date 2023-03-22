import React from 'react';
import { Link } from 'react-router-dom'; 

import cover from '../assests/rewardscover2.jpeg'
import smoothie1 from '../assests/orange.jpg' 
import smoothie2 from '../assests/blueberry.jpeg' 
import smoothie3 from '../assests/Strawberry.jpg'

//import Auth from '../utils/Auth'; 

const Rewards = () => {
 
    return ( 
  <section className='paddingbottom'>  

{/* this is to provide a buffer so the image does not go under the navigation because the nav has a z index */}
<div className='web-none TabletS-show' id='buffer' style={{ "width" : "100%"}}> </div>
  
  <div> 
      <img className="backgroundcover"  src={cover} alt="cover" /> 
      {/* <Link to="/signup"> <button className='buttonLarge'>  Sign Up </button> </Link>  */}
      </div>  

      <section className='pagemarginleft pagemarginright space_center col margin-top-XL'> 
         <h1> reward perks </h1> 
         <div className='row margin-top-XL space_center mobile-col'> 
         <img className="portrait2 circle shadow" src={smoothie1} alt="smoothie" />  
         <p className='w-50 margin-left-XXL mobile-w-100 marginreset mobile-margin-top'> 
         Our new smoothie rewards program is designed to make it easy for customers to earn rewards without the hassle of signing up. All you need to do is provide us with your phone number when you order, 
         and we'll automatically track your progress towards earning rewards. It's a hassle-free way to enjoy your favorite smoothies and get rewarded for your loyalty.</p>
         </div>  


         
         <div className='row margin-top-XL space_center mobile-col-reverse'>  
         <p className='w-50 mobile-w-100 marginreset mobile-margin-top'> 
         You can enjoy a free smoothie after purchasing nine of your favorite drinks with our loyalty program. That's right - after your ninth purchase, the tenth smoothie is on us. 
         It's our way of saying thank you for your loyalty, and we can't wait to see you back for your free smoothie!</p>
         <img className="portrait2 circle shadow margin-left-XXL marginreset" src={smoothie2} alt="smoothie" />  
         </div>  







         <div className='row margin-top-XL space_center mobile-col'> 
         <img className="portrait2 circle shadow" src={smoothie3} alt="smoothie" />  
         <p className='w-50 margin-left-XXL mobile-w-100 marginreset mobile-margin-top'> 
         If you'd like to celebrate your birthday with a free smoothie from us, simply let us know when placing your order, and we'll be happy to treat you to a complimentary drink! Please note that we may 
         request one form of identification to confirm your birthdate.</p>
         </div>
      </section> 
      </section>
    );
  };
  
  export default Rewards;