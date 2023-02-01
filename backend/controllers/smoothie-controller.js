// const { Smoothie } = require('../models') 

// const smoothieController = {

//     // get all pizzas
//   getAllSmoothie(req, res) {
//     Smoothie.find({})
//       .then(dbSmoothieData => res.json(dbSmoothieData))
//       .catch(err => {
//         console.log(err);
//         res.status(400).json(err);
//       });
//   },

//   // get one pizza by id
//   getSmoothieById({ params }, res) {
//     Smoothie.findOne({ _id: params.id })
//       .then(dbSmoothieData => {
//         // If no pizza is found, send 404
//         if (!dbSmoothieData) {
//           res.status(404).json({ message: 'No Smoothie found with this id!' });
//           return;
//         }
//         res.json(dbSmoothieData);
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(400).json(err);
//       });
//   }, 

// }; 

// module.exports = smoothieController;