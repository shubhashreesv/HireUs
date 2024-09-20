import React from 'react';
import './Home5.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const Home5 = () => {
  return (
    <div className="home5-container">
      <div className="home5-left">
        <h1>Secure Payment System</h1>
        <p>Rest assured with our secure escrow account system that protects your earnings and ensures fair payment for your work.</p>
        <div className="features">
          <div className="feature">
            <span className="icon"></span>
            <span>Enhanced Job Matching</span>
          </div>
          <div className="feature">
            <span className="icon"></span>
            <span>Performance-Based Profiles</span>
          </div>
        </div>
        <Link to="/escrow" className="sign-up-btn">View Payment Form</Link>
      </div>
      <div className="home5-right">
        <div className="home5-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGrpmLGHe5odbrkfQ3lWimF9rQkFV-I22Ieg&s" alt="Secure Payment System" className="main-image" />
        </div>
      </div>
    </div>
  );
};

export default Home5;
