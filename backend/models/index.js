// import models
const Smoothie = require('./Smoothie');
const Category = require('./Category');
const SmoothieCategory = require('./SmoothieCategory');


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