const { Schema, model } = require('mongoose'); 

const categoriesSchema = new Schema(
    {
        category_name: {
        type: String,
        required: true,
        unique: true,
      },
    
    },
  
  );
  


module.exports = Category;