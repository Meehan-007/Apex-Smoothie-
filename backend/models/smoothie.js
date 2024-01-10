// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/Connection.js');

// Initialize Product model (table) by extending off Sequelize's Model class
class Smoothie extends Model {}

//update plz

Smoothie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }, 
    smoothie_name: {
      type: DataTypes.STRING,
      allowNull: false
    },  
    image: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
   calories: {
     type: DataTypes.DECIMAL, 
     
   }, 
   fat: {
    type: DataTypes.DECIMAL, 
    
  }, 
  carbohydrates: {
    type: DataTypes.DECIMAL, 
    
  }, 
  protein: {
    type: DataTypes.DECIMAL, 
    
  }, 
  price: {
    type: DataTypes.DECIMAL
  }
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Smoothie',
  }
);

module.exports = Smoothie;
