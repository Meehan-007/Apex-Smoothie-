import React from 'react';





// const Cards = ({ categories, key}) => {
//   console.log(categories) 
//   console.log(categories[0].smoothies[key])
// //   const imageData = categories.smoothies.image;
// // const base64 = Buffer.from(imageData).toString('base64');
// // const dataUrl = `data:image/jpeg;base64,${base64}`; 

//     return (
//       <section className=" shadow space_center col height-fit" id='card1'  > 
//        {/* <img className='w-100' src={dataUrl}  alt="smoothie of the month" />  */}
//         <div className="col space_evenly w-90 h-100 padding-S" id='card2' >
//           <h5> {categories.smoothies.smoothie_name} </h5> 
//           <p style={{ width: '90%' }}>  {categories.smoothies.description} </p> 
//             <button className="buttonLarge w-100" > Learnmore </button> 
//             </div> 
              
               
          

  //       </section>
      
  //   );
  // }; 

  const SmoothieCards = ({ categories }) => {
    return (
      <div>
        {categories.map(category => (
          <div key={category.id} className='left col mobile-w-100 mobile-center'>
            <h4 className='margin-top-XL'>{category.category_name}</h4>
            <div className='gapM margin-top-M row flexwrap mobile-col mobile-center mobile-w-100'>
              {category.smoothies.map(smoothie => (
              
              <section key={smoothie.id} className=" shadow space_center col height-fit" id='card1'  > 
         <img className='w-100' src={smoothie.image} alt={smoothie.smoothie_name} />

         <div className="col space_evenly w-90 h-100 padding-S" id='card2' >
           <h5> {smoothie.smoothie_name} </h5> 
           <p style={{ width: '90%' }}>  {smoothie.description} </p> 
             <button className="buttonLarge w-100" > Learnmore </button> 
             </div> 
         </section>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  
  export default SmoothieCards;