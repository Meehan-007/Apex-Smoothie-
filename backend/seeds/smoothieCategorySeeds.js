const { SmoothieCategory } = require('../models');

const smoothieCategoryData = [


  // items with iced refreshers
  {
    smoothie_id: 1,
    category_id: 4,
  },
  {
    smoothie_id: 2,
    category_id: 4,
  },
  {
    smoothie_id: 3,
    category_id: 4,
  },
  {
    smoothie_id: 4,
    category_id: 4,
  },
  {
    smoothie_id: 5,
    category_id: 4,
  },

  // items with light intesity ids 6 to 12
  {
    smoothie_id: 6,
    category_id: 5,
  },
  {
    smoothie_id: 6,
    category_id: 3,
  },
  {
    smoothie_id: 7,
    category_id: 5,
  },
  {
    smoothie_id: 7,
    category_id: 3,
  },
  {
    smoothie_id: 8,
    category_id: 5,
  },
  {
    smoothie_id: 8,
    category_id: 3,
  },
  {
    smoothie_id: 9,
    category_id: 5,
  },
  {
    smoothie_id: 9,
    category_id: 1,
  },
  {
    smoothie_id: 10,
    category_id: 5,
  },
  {
    smoothie_id: 11,
    category_id: 5,
  },
  {
    smoothie_id: 11,
    category_id: 1,
  },
  {
    smoothie_id: 12,
    category_id: 1,
  },


  // items with medium intensity   13 to 23

  {
    smoothie_id: 13,
    category_id: 6,
  },
  {
    smoothie_id: 14,
    category_id: 6,
  },
  {
    smoothie_id: 14,
    category_id: 3,
  },
  {
    smoothie_id: 15,
    category_id: 6,
  },
  {
    smoothie_id: 16,
    category_id: 6,
  },
  {
    smoothie_id: 17,
    category_id: 6,
  },
  {
    smoothie_id: 17,
    category_id: 3,
  },
  {
    smoothie_id: 18,
    category_id: 6,
  },
  {
    smoothie_id: 18,
    category_id: 1,
  },
  {
    smoothie_id: 19,
    category_id: 6,
  },
  {
    smoothie_id: 20,
    category_id: 6,
  },
  {
    smoothie_id: 21,
    category_id: 6,
  },
  {
    smoothie_id: 22,
    category_id: 6,
  },
  {
    smoothie_id: 23,
    category_id: 6,
  },
  {
    smoothie_id: 23,
    category_id: 1,
  },
  {
    smoothie_id: 23,
    category_id: 2,
  },


  // items with High inteisty 24 to 31 

  {
    smoothie_id: 24,
    category_id: 7,
  },

  {
    smoothie_id: 25,
    category_id: 7,
  },
  {
    smoothie_id: 26,
    category_id: 7,
  },
  {
    smoothie_id: 26,
    category_id: 1,
  },
  {
    smoothie_id: 26,
    category_id: 2,
  },
  {
    smoothie_id: 27,
    category_id: 7,
  },
  {
    smoothie_id: 28,
    category_id: 7,
  },
  {
    smoothie_id: 29,
    category_id: 7,
  },
  {
    smoothie_id: 30,
    category_id: 7,
  },
  {
    smoothie_id: 30,
    category_id: 1,
  },
  {
    smoothie_id: 30,
    category_id: 2,
  },
  {
    smoothie_id: 31,
    category_id: 7,
  },

  // items with the fruit bowl 32 to 33

  {
    smoothie_id: 32,
    category_id: 8,
  },
  {
    smoothie_id: 32,
    category_id: 3,
  },
  {
    smoothie_id: 33,
    category_id: 8,
  },
  {
    smoothie_id: 33,
    category_id: 3,
  },
];

const seedSmoothieCategory = () => SmoothieCategory.bulkCreate(smoothieCategoryData);

module.exports = seedSmoothieCategory;