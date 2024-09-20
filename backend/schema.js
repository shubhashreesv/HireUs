const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for both freelancers and clients
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  mobileNumber: {
    type: String,
    required: true,
    trim: true,
  },
  workEmail: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    enum: ['freelancer', 'client'],
    required: true,
  },
  // Only for Freelancers
  freelancerProfile: {
    type: String,
    trim: true,
  },
  // Only for Clients
  clientCompany: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Hashing password before saving (if using password encryption)
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    // You can use bcrypt or another password hashing library here
    const bcrypt = require('bcrypt');
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
