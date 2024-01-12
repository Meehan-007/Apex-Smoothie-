const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Best Sellers',
  },
  {
    category_name: 'High in Protien',
  },
  {
    category_name: 'Vegan Friendly',
  },
  {
    category_name: 'Iced Refreshers',
  },
  {
    category_name: 'Light Intensity',

  },
  {
    category_name: 'Medium Intensity',


  },
  {
    category_name: 'High Intensity',

  },
  {
    category_name: 'Crushed Fruit Bowls',

  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
