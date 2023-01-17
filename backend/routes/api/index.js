const router = require('express').Router();
const smoothieRoutes = require('./smoothie-routes');

// add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use('/smoothie', smoothieRoutes);

module.exports = router;