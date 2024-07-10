const seedCategories = require('./category-seeds');
const seedSmoothies = require('./smoothie-seeds');
const seedSmoothieCategory = require('./smoothie-Category-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedSmoothies();
  console.log('\n----- Smoothies SEEDED -----\n');

  await seedSmoothieCategory();
  console.log('\n----- smoothie category SEEDED -----\n');

  process.exit(0);
};

seedAll();