const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class SmoothieCategory extends Model {}

SmoothieCategory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },   
    smoothie_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Smoothie',
        key: 'id'
      }
    }, 
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'SmoothieCategory',
  }
);

module.exports = SmoothieCategory;