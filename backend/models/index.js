// import models
const Smoothie = require('./smoothie');
const Category = require('./category');
const SmoothieCategory = require('./smoothieCategory');


// Products belongToMany Tags (through ProductTag)
Smoothie.belongsToMany(Category, {
  through: SmoothieCategory,
  as: 'categories',
  foreignKey: 'smoothie_id'
});
// Tags belongToMany Products (through ProductTag)
Category.belongsToMany(Smoothie, {
  through: SmoothieCategory,
  as: 'smoothies',
  foreignKey: 'category_id'
});
module.exports = {
  Smoothie,
  Category,
  SmoothieCategory,
};