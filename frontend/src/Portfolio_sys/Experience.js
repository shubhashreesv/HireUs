import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience-container">
      <h3>Work Experience</h3>
      <div className="experience-item bg-light p-4 mb-4 rounded">
        <h4>Senior Web Developer</h4>
        <span className="company">ABC Tech Solutions</span>
        <span className="duration"> | Jan 2020 - Present</span>
        <span className="location"> | Punjab, India</span>
        <p className="experience-description">
          Leading a team of developers to create scalable web applications.
        </p>
        <ul className="responsibilities">
          <li>Developed a responsive e-commerce platform, boosting sales by 30%.</li>
          <li>Managed a cross-functional team of 8 developers.</li>
          <li>Implemented CI/CD pipelines using Jenkins and Docker.</li>
        </ul>
      </div>
      {/* Additional experience sections */}
    </div>
  );
};

export default Experience;