import React from 'react';
import { Link } from 'react-router-dom';
import './EscrowHome.css';

function EscrowHome() {
  return (
    <div className="home-container">
      <div className="content-box">
        <h1>Welcome to Escrow Payment Gateway</h1>
        <p>Click the button and deposit the amount.</p>
        <div className="button-group">
          {/* Client Button */}
          <Link to="/client" className="btn btn-success custom-button">Client</Link>
        </div>
      </div>
    </div>
  );
}

export default EscrowHome;
