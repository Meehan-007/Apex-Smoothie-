import React, { useEffect, useRef } from 'react'; 
import { Link } from 'react-router-dom'; 

const SmoothieCards = ({ IcedRefreshersRef, LightIntensityRef, MediumIntensityRef, HighIntensityRef, CrushedFruitBowlsRef, categories }) => {

  const categoriesRefs = [IcedRefreshersRef, LightIntensityRef, MediumIntensityRef, HighIntensityRef, CrushedFruitBowlsRef];

  return (
    <div>
      {categories.map((category, index) => (
       <div key={index} ref={categoriesRefs[index]} className='left col mobile-w-100 mobile-center' >
       <h4 className='margin-top-XL'>{category.category_name}</h4>
       <div className='gapM margin-top-M row flexwrap mobile-col mobile-center mobile-w-100'>
         {category.smoothies.map(smoothie => (
           <section key={smoothie.id} className="shadow col height-fit" id='card1'>
             <img className='w-100' src={smoothie.image} alt={smoothie.smoothie_name} />
             <div className="col w-90 padding-S" id='card2'>
               <h5 className='margin-top-S'>{smoothie.smoothie_name}</h5>
               <p style={{ width: '90%' }} className='margin-top-S'>{smoothie.description}</p>
             </div>
             <Link to={`/SmoothieInfo/${smoothie.id}`} className="w-90 margin-bottom-S">
               <button className="buttonLarge w-100">Learn more</button>
             </Link>
           </section>
         ))}
       </div>
     </div>
     
      ))}
    </div>
  );
};

export default SmoothieCards;

