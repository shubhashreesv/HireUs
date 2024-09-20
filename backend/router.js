const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('./schema'); 
router.post('/signup', async (req, res) => {
    const { name, email, mobileNumber, workEmail, password, userType, freelancerProfile, clientCompany } = req.body;
  
    try {
      // Check if the email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already exists' });
      }
  
      // Create a new user
      const newUser = new User({
        name,
        email,
        mobileNumber,
        workEmail,
        password,
        userType,
        freelancerProfile: userType === 'freelancer' ? freelancerProfile : '',
        clientCompany: userType === 'client' ? clientCompany : '',
      });
  
      // Save the user in the database
      await newUser.save();
  
      res.status(201).json({ message: 'User signed up successfully' });
    } catch (error) {
      console.error('Signup error:', error);
  
      // Handle specific error codes
      if (error.code === 11000) {
        return res.status(400).json({ message: 'Duplicate key error: ' + JSON.stringify(error.keyValue) });
      }
      
      // Handle other errors
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });
  
module.exports = router;
