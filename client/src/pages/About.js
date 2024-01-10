import React from 'react';
 


import homeCover from '../assests/HomeCover.JPG' 
import aboutPhoto1 from '../assests/AboutPhoto1.JPG' 
import aboutPhoto2 from '../assests/AboutPhoto2.JPG' 



const about = () => {
  
  
    return ( 

       <> 
       {/* this is to provide a buffer so the image does not go under the navigation because the nav has a z index */}
<div className='web-none TabletS-show' id='buffer' style={{ "width" : "100%"}}> </div>
      <img className="w-100" src={homeCover} alt="smoothie" /> 
      

      <section className='pagemarginleft pagemarginright space_center col margin-top-M paddingbottom'> 
       


      <h1 className='textcenter w-90'> About Apex </h1> 
      
      <p className='margin-top-M w-90'> Welcome to Apex, your ultimate destination for delicious and nutritious smoothies that will help you achieve your fitness goals. At Apex, we believe that healthy eating doesn't have to be boring or tasteless, which is why we have created a range of smoothies that are not only packed with essential vitamins and nutrients, but also taste amazing.

We use only the freshest and highest quality ingredients in our smoothies, and each one is carefully crafted to give you the perfect balance of taste and nutrition. Whether you're looking to build muscle, lose weight, or just maintain a healthy lifestyle, our smoothies are the perfect choice.

At Apex, we are committed to helping you achieve your fitness goals, and we believe that a healthy diet is the foundation for a healthy life. So why not try one of our delicious smoothies today and start your journey towards a healthier, happier you? </p>   

      <div className='row space_between margin-top-M w-90 space_evenly center tablet-col'> 
       <img className="imagesize_cover tablet-margin-top" src={aboutPhoto1} alt="apex gym" />
       <img className="imagesize_cover tablet-margin-top" src={aboutPhoto2} alt="apex gym" /> 
       </div>

       <h2 className='margin-top-M textcenter w-90'> Our commitment to excellence </h2>
    <div className='row space_evenly margin-top-S padding-S w-90 mobile-col mobile-h-100'> 
    
       <ul className='w-25 mobile-w-100'>
       <li> We use Natural whole foods in all our shakes </li>  
       <li > Our Protein is rBGH-free and GMO-free </li>  
       <li > No trans fat </li> </ul>  
       
       <ul className='w-25 mobile-w-100'>
       <li> No high fructose corn syrup or porcessed sugar  </li> 
       <li > Lactos and gluten free </li> 
       <li > No preseratives and No added sugar!  </li>  </ul>  
          
        </div> 
       

       

     
       </section> 
        </> 
        
    );
  };
  
  export default about;