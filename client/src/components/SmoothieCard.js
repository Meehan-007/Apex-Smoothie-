import React, { useEffect, useRef } from 'react'; 
import { Link } from 'react-router-dom'; 

const SmoothieCards = ({ IcedRefreshersRef, LightIntensityRef, MediumIntensityRef, HighIntensityRef, CrushedFruitBowlsRef, categories }) => {

  const categoriesRefs = [IcedRefreshersRef, LightIntensityRef, MediumIntensityRef, HighIntensityRef, CrushedFruitBowlsRef];

  return (
    <div>
      {categories.map((category, index) => (
       <div key={index} ref={categoriesRefs[index]} className='left col tablet-center TabletS-w-100' >
       <h4 className='margin-top-XL'>{category.category_name}</h4>
       <div className='gapM margin-top-M row flexwrap tablet-col tablet-center TabletS-w-100'>
         {category.smoothies.map(smoothie => (
           <section key={smoothie.id} className="shadow col heightfit" id='card1'>
             <img className='w-100' src={smoothie.image} alt={smoothie.smoothie_name} />
             <div className="col w-90 padding-S" id='card2'>
               <h5 className='margin-top-S'>{smoothie.smoothie_name}</h5>
               <p  className='margin-top-S w-90'>{smoothie.description}</p>
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

