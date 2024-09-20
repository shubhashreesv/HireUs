import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home1.css';
import { toast } from "react-toastify";
import { FaUser } from 'react-icons/fa'; // Import a user icon from react-icons or use any other icon
import logo from './hireus.png';

function Home1() {
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

  return (
    <div className="home-container">
      <main className="main-content">
        <div className="content-wrapper">
          <h2>Find Your Next Gig Here</h2>
          <h1>Discover and apply for short-term job opportunities across multiple industries.</h1>
          <h1 className="subtitle">
            Get started by creating your profile and exploring the available projects. It’s easy to find your next freelance gig!
          </h1>
          <button className="browse-button">Browse Opportunities</button>
        </div>
      </main>
    </div>
  );
}

export default Home1;