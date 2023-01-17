const router = require('express').Router(); 
const {
    getAllSmoothie,
    getSmoothieById
  } = require('../../controllers/smoothie-controller'); 



// Set up GET all and POST at /api/pizzas
router
  .route('/')
  .get(getAllSmoothie)
  

// Set up GET one, PUT, and DELETE at /api/pizzas/:id
router
  .route('/:id')
  .get(getSmoothieById)
  

module.exports = router;