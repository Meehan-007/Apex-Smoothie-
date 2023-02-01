const { SmoothieCategory } = require('../models');

const smoothieCategoryData = [
  {
    smoothie_id: 1,
    category_id: 1,
  },
  { 
    smoothie_id: 2,
    category_id: 2,
  }, 
  { 
    smoothie_id: 3,
    category_id: 5,
  },
  
];

const seedSmoothieCategory = () => SmoothieCategory.bulkCreate(smoothieCategoryData);

module.exports = seedSmoothieCategory;