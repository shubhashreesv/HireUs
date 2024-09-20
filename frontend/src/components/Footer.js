import React, { useState } from 'react';
import './Footer.css';
import axios from 'axios';  // Install axios using npm install axios
import logo from 'C:/Users/SUBHA SHREE SV/OneDrive/ドキュメント/All_Folder/Hackathon/SIH24/f_sih/frontend/src/hireus.png';
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'; // Correct imports

function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/send-message', formData);
      alert(response.data.message);
    } catch (error) {
      console.error('There was an error sending the message!', error);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <a href="logo">
              <img src={logo} alt="Your Freelance Platform Logo" className="footer-logo" />
            </a>
            <h5>Contact Information</h5>
            <ul className="list-unstyled">
              <li>Phone: 123-456-7890</li>
              <li>Email: hireus547@gmail.com</li>
              <li>Address: Kongu Engineering College</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Navigation</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/freelancers">Freelancers</a></li>
              <li><a href="/clients">Clients</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Drop Your Feedback here!</h5>
            <form className="message-form" onSubmit={handleSubmit}>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" placeholder="First & Last Name" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="Email Address" />
              <textarea name="message" value={formData.message} onChange={handleChange} className="form-control" placeholder="Your Message"></textarea>
              <button type="submit" className="btn btn-warning">Send Message</button>
            </form>
            <div className="social-links">
        <a href="#"><FaInstagram /></a> {/* Use imported icons here */}
        <a href="#"><FaLinkedin /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaGithub /></a>
      </div>
          </div>
        </div>
        <hr />
        <p className="text-center">© 2024 Your HireUs. All rights reserved.</p>
      </div>
       {/* Floating Shapes inside the footer */}
       <div className="shape circle"></div>
      <div className="shape square"></div>
      <div className="shape rectangle"></div>
      <div className="shape diamond"></div>
      <div className="shape oval"></div>
    </footer>
  );
}

export default Footer;
