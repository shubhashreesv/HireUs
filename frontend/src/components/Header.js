import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaUser } from 'react-icons/fa'; // Import a user icon from react-icons or use any other icon
import logo from 'C:/Users/SUBHA SHREE SV/OneDrive/ドキュメント/All_Folder/Hackathon/SIH24/f_sih/frontend/src/hireus.png'; // Adjust path if necessary
import './Header.css';

function Header() {
  const navigate = useNavigate();

  // Check if user details are stored in localStorage
  const userDetails = JSON.parse(localStorage.getItem('userDetails'));

  const handleLogout = () => {
    // Clear all items from localStorage
    localStorage.clear();
    // Notify the user of successful logout
    toast.success("Logged out successfully");
    // Redirect to home page or login page after logout
    navigate('/');
  };

  // Handler to redirect to portfolio page
  const handlePortfolioRedirect = () => {
    navigate('/profile');
  };

  return (
    <header className="home-header">
      <Link to="/">
        <img src={logo} alt="Your Freelance Platform Logo" className="header-logo" />
      </Link>
      <nav className="nav-links">
        <Link to="/" style={{ color: "white" }}>Home</Link>
        <Link to="/features" style={{ color: "white" }}>Features</Link>
        <Link to="/escrow" style={{ color: "white" }}>Payment</Link>
        <Link to="/about" style={{ color: "white" }}>About</Link>
        <Link to="/jobs" style={{ color: "white" }}>Jobs</Link>
        <Link to="/more" style={{ color: "white" }}>More</Link>
        
        {userDetails ? (
          <>
            <Link to="/profile" className="btn btn-secondary profile-link">
              <FaUser /> Profile
            </Link>
            <button onClick={handleLogout} className="btn btn-primary logout-button">
              Log Out
            </button>
          </>
        ) : (
          <Link to="/login" className="btn login-link">
            Log In
          </Link>
        )}
        <button onClick={handlePortfolioRedirect} className="btn btn-secondary demo-button">
          Create/Update Profile
        </button>
      </nav>
    </header>
  );
}

export default Header;
