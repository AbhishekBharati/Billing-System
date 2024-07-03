const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  userName: String,
  role: {
    type: String,
    enum: ['admin', 'Master']
  },
  phone: Number,
  email: String,
  password: String
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
