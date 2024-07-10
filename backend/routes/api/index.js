const router = require('express').Router();
const smoothieRoutes = require('./homeRoutes');
const menuRoutes = require('./menuRoutes');

// add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use('/smoothie', smoothieRoutes);
router.use('/menu', menuRoutes);

module.exports = router;