import React from 'react';
import './ProfileHeader.css';
import './Experience.css';
import './Portfolio.css';
import ProfileHeader from './ProfileHeader';
import Experience from './Experience';
import Portfolio from './Portfolio';

function PortfolioApp() {
  return (
    <div className="App container">
      <ProfileHeader />
      <Experience />
      <Portfolio />
    </div>
  );
}

export default PortfolioApp;

