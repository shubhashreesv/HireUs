import React from 'react';
import './ProfileHeader.css'; // Add styling later
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'; // Correct imports

const ProfileHeader = () => {
  return (
    <div className="profile-header-container">
      <img 
        src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png" 
        alt="Profile" 
        className="profile-image" 
      />
      <h2 className="profile-name">XYZ</h2>
      <p className="profile-title">Senior Web Developer</p>
      <p className="profile-bio">
        Experienced in leveraging agile frameworks to provide a robust synopsis for high-level overviews.
      </p>
      <div className="social-links">
        <a href="#"><FaInstagram /></a> {/* Use imported icons here */}
        <a href="#"><FaLinkedin /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaGithub /></a>
      </div>
    </div>
  );
};

export default ProfileHeader;
