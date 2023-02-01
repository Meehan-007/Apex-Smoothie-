const router = require('express').Router(); 
const sequelize = require('../../config/connection'); 
const { Op } = require("sequelize");
const { Smoothie, Category, SmoothieCategory } = require('../../models');



router.get('/', async (req, res) => {
  try {
      
    const smoothies = await Smoothie.findAll({ 
       attributes: ['id', 'smoothie_name', 'image','description'],
  include: [{
      model: Category, 
      as: 'categories',
      through: {
          model: SmoothieCategory,
      },
      attributes: ['category_name'],
      where: {
          id: {
              [Op.or]: [5]
          }
      }
  }],
  order: [[Category, 'category_name', 'ASC']] 
  
}); 

  var data = {}; 
  console.log(data)
  smoothies.forEach((smoothie) => {
      if (!data[smoothie.categories.category_name]) data[smoothie.categories.category_name] = [];
      data[smoothie.categories.category_name].push(smoothie);
  }); 
  console.log(data)
  res.status(200).json(smoothies);
} catch(err) {
  
  res.status(500).json({
    
      message: 'Error retrieving smoothies', 
      error: err, 
  }); 
  
 } 


}); 

 // attributes: ['id', 'username', 'email'],

router.get("/:id", async (req, res) => {
  try {
      const smoothieId = req.params.id;
      const smoothie = await Smoothie.findByPk(smoothieId,{
        // attributes: { exclude: ['password'] }
      });
      res.status(200).json(smoothie); 
      
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});
  

module.exports = router;