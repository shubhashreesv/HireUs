import React from 'react';
import './Home4.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const Home4 = () => {
  return (
    <div className="home4-container">
      <div className="home4-left">
        <div className="home4-image">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAmWL2hAGQ7ear68IjJ0lgJrzXEWEArsRYyg&s" 
            alt="User-Friendly Platform" 
          />
        </div>
      </div>
      <div className="home4-right">
        <h1>User-Friendly Platform</h1>
        <p>Our platform is designed for easy navigation and setup. No complicated processes or technical skills required.</p>
        <p>Explore the benefits of our platform and how it can enhance your freelance experience.</p>
        <Link to="/skills" className="sign-up-btn">Find what suits your interest</Link>
      </div>
    </div>
  );
};

export default Home4;
