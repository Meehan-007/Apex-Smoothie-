const router = require('express').Router();
const smoothieRoutes = require('./home-Routes');
const menuRoutes = require('./menu-Routes');

// add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use('/smoothie', smoothieRoutes);
router.use('/menu', menuRoutes);

module.exports = router;
