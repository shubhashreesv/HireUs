import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h3>Portfolio</h3>
      <div className="portfolio-item">
       <a href="https://www.canva.com/templates/?query=portfolio"> <img src="https://cdn.prod.website-files.com/622217130a9cad1a33ea9b0a/63cee340b3d1b871aeb92918_creative%20portfolio.png" alt="Portfolio Item" /></a>
        <h4>Project Name</h4>
        <p>Project description and technology used.</p>
      </div>
      {/* Add more portfolio items */}
    </div>
  );
};

export default Portfolio;