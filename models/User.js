const mongoose = require('mongoose')
const passportmongoose = require('passport-local-mongoose');

// Mongoose Model
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    required: true,
    trim: true,
  }
})
userSchema.plugin(passportmongoose, {
  usernameField: 'email',
  
});
// Export Mongoose "User" model
module.exports = mongoose.model('User', userSchema)