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
        model: 'smoothie',
        key: 'id'
      }
    }, 
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'smoothieCategory',
  }
);

module.exports = SmoothieCategory;