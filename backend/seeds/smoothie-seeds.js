const { Smoothie } = require('../models');

const smoothieData = [
  {
    smoothie_name: 'Plain T-Shirt',
    description: "14.99",
    image:
    "https://static.seattletimes.com/wp-content/uploads/2018/01/a8e801dc-f665-11e7-bf8f-ddd02ba4a187-780x1181.jpg",
    category_id: 1,
  },
  {
    smoothie_name: 'Plain T-Shirt',
    description: "14.99",
    image:
    "https://static.seattletimes.com/wp-content/uploads/2018/01/a8e801dc-f665-11e7-bf8f-ddd02ba4a187-780x1181.jpg",
    category_id: 2,
  }, 
  {
    smoothie_name: 'strawblast',
    description: "14.99",
    image:
    "https://static.seattletimes.com/wp-content/uploads/2018/01/a8e801dc-f665-11e7-bf8f-ddd02ba4a187-780x1181.jpg",
    category_id: 5,
  },
  
 
];

const seedSmoothies = () => Smoothie.bulkCreate(smoothieData);

module.exports = seedSmoothies;








