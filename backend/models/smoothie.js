const { Schema, model } = require('mongoose'); 

const smoothieSchema = new Schema(
    {
      smoothiename: {
        type: String,
        required: true,
        unique: true,
      },
      description: {
        type: String,
        required: true,
      }, 
      //  image: { type: String, required: true },
      cover: {
        type: String,
        required: true,
        desc: String, 
        image: 
        {
            data: Buffer, 
            ContentType: String
        }
      },
    
    },
    
  );
  
//   // set up pre-save middleware to create password
//   userSchema.pre('save', async function(next) {
//     if (this.isNew || this.isModified('password')) {
//       const saltRounds = 10;
//       this.password = await bcrypt.hash(this.password, saltRounds);
//     }
  
//     next();
//   });
  
//   // compare the incoming password with the hashed password
//   userSchema.methods.isCorrectPassword = async function(password) {
//     return bcrypt.compare(password, this.password);
//   };
  
  
  const Smoothie = model('Smoothie', smoothieSchema);
  
  module.exports = Smoothie;