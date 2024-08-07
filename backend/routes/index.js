const router = require('express').Router();
// Import all of the API routes from /api/index.js (no need for index.js though since it's implied)
const apiRoutes = require('./api');
const paymentRoutes = require('./payment')


// add prefix of `/api` to all of the api routes imported from the `api` directory
router.use('/api', apiRoutes);
router.use('/payment', paymentRoutes)


router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error! you at index</h1>');
});

module.exports = router;
