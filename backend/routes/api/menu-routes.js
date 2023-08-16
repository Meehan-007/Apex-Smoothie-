const router = require('express').Router(); 
const sequelize = require('../../config/connection'); 
const { Op } = require("sequelize");
const { Smoothie, Category, SmoothieCategory } = require('../../models');



router.get('/', async (req, res) => {
  try {
    console.log("Started the / route");
    console.log(Category);
    const categories = await Category.findAll({
      where: {
        id: {
          [Op.or]: [4, 5, 6, 7, 8]
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
  try {
      const smoothieId = req.params.id;
      const smoothie = await Smoothie.findByPk(smoothieId,{
         
      });
      res.status(200).json(smoothie); 
      
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});
  

module.exports = router;