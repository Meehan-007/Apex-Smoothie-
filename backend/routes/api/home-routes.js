const router = require('express').Router(); 
const sequelize = require('../../config/Connection'); 
const { Op } = require("sequelize");
const { Smoothie, Category, SmoothieCategory } = require('../../models/Index');


router.get('/', async (req, res) => {
  try {
    
    const categories = await Category.findAll({
      where: {
        id: {
          [Op.or]: [1, 2, 3]
        }
      },
      include: [{
        model: Smoothie,
        as: 'smoothies',
        through: {
          model: SmoothieCategory,
        },
        attributes: ['id', 'smoothie_name', 'image', 'description', 'price'],
      }],
    //  order: [[Category, 'id', 'ASC']]
    });

    console.log("Successfully retrieved categories:", categories);
    res.status(200).json(categories);
  } catch (err) {
    console.error("Error retrieving categories:", err);
    res.status(500).json({
      message: 'Error retrieving categories',
      error: err,
    });
  }
});



router.get("/:id", async (req, res) => {
  Smoothie.findOne({ 
    where: {
      id: req.params.id
    },
     
        
      }).then(smoothie => { 
      res.json(smoothie); 
      
  }) .catch (err => {
      res.status(500).json({ message: err.message });
  });
});
  

module.exports = router;