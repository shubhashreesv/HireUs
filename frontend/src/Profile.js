import React, { useState } from 'react';
import Avatar from 'react-avatar';
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub, FaGlobe } from 'react-icons/fa';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './Profile.css';

const techStacks = [
  'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React', 'Node.js', 'Express.js', 'Fullstack', 'MERN Stack',
  'C', 'C#', 'C++', 'Java', 'Python', 'Git'
];

const ProfilePage = () => {
  const [showDescriptionBox, setShowDescriptionBox] = useState(false);
  const [description, setDescription] = useState('');
  const [savedDescription, setSavedDescription] = useState('This is a saved description about the freelancer.');
  
  const [freelancingWorks, setFreelancingWorks] = useState([]);
  const [currentWork, setCurrentWork] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  
  const [techStackSelections, setTechStackSelections] = useState([]);
  const [selectedTechStacks, setSelectedTechStacks] = useState([]);
  
  const [ongoingProgressVisible, setOngoingProgressVisible] = useState(false);
  const [completedProgressVisible, setCompletedProgressVisible] = useState(false);
  
  const handleSaveDescription = () => {
    setSavedDescription(description);
    setShowDescriptionBox(false);
  };

  const handleEditDescription = () => {
    setShowDescriptionBox(true);
  };

  const handleAddWork = () => {
    if (currentWork) {
      if (isEditing) {
        // Update existing work
        const updatedWorks = freelancingWorks.map((work, index) =>
          index === editingIndex ? currentWork : work
        );
        setFreelancingWorks(updatedWorks);
        setIsEditing(false);
        setEditingIndex(null);
      } else {
        // Add new work
        setFreelancingWorks([...freelancingWorks, currentWork]);
      }
      setCurrentWork('');
      setIsTextareaVisible(false); // Hide textarea after adding work
    } else {
      setIsTextareaVisible(true); // Show textarea if currentWork is empty
    }
  };
  

  const handleEditWork = (index) => {
    setCurrentWork(freelancingWorks[index]);
    setIsEditing(true);
    setEditingIndex(index);
    setIsTextareaVisible(true); // Show textarea when editing
  };

  const handleSaveEdit = () => {
    const updatedWorks = freelancingWorks.map((work, index) =>
      index === editingIndex ? currentWork : work
    );
    setFreelancingWorks(updatedWorks);
    setCurrentWork('');
    setIsEditing(false);
    setEditingIndex(null);
  };

  const handleTechStackSelection = (event) => {
    const value = event.target.value;
    if (value && !techStackSelections.includes(value)) {
      setTechStackSelections([...techStackSelections, value]);
    }
  };

  const handleSaveTechStacks = () => {
    setSelectedTechStacks(techStackSelections);
    setTechStackSelections([]);
  };
  const [isTextareaVisible, setIsTextareaVisible] = useState(false);

 

  return (
    <div className="profile-page-container">
      <div className="left-sidebar">
        <div className="profile-section">
          <Avatar name="Freelancer Name" size="100" round={true} className="profile-avatar" />
          <h2 className="profile-name">XYZ</h2>
          
          <div className="description-container">
            {showDescriptionBox ? (
              <div className="textarea-container">
                <textarea
                  className="profile-description-box"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Custom description about the freelancer..."
                />
                <button className="save-description-btn" onClick={handleSaveDescription}>
                  Save Changes
                </button>
              </div>
            ) : (
              <>
                <p className="saved-description">{savedDescription}</p>
                <button className="edit-description-btn" onClick={handleEditDescription}>
                  Edit
                </button>
              </>
            )}
          </div>
        </div>

        <div className="ratings-community">
          <h4 className="average-rating">Average Rating: ★★★★☆</h4>
          <h4 className="community-collaborations">Community Collaborations: 5 Projects</h4>
        </div>

        <div className="links-section">
          <h4 className="connect-title">Connect with me:</h4>
          <div className="social-links">
            <a href="https://yourwebsite.com" target="_blank" rel="noreferrer" title="Website">
              <FaGlobe className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" title="Instagram">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" title="Twitter">
              <FaTwitter className="social-icon" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" title="GitHub">
              <FaGithub className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="main-content">
      <div className="freelancing-work">
        <h3 className="freelancing-title">Freelancing Work</h3>
        {isTextareaVisible && (
          <div className="textarea-container">
            <textarea
              className="freelancing-textarea"
              value={currentWork}
              onChange={(e) => setCurrentWork(e.target.value)}
              placeholder="Enter details about your freelancing work..."
            />
            <button className="add-work-btn" onClick={handleAddWork}>
              + Add Work
            </button>
          </div>
        )}
        {!isTextareaVisible && (
          <button className="add-work-btn" onClick={() => setIsTextareaVisible(true)}>
            + Add Work
          </button>
        )}
        <div className="work-list">
          {freelancingWorks.length > 0 ? (
            freelancingWorks.map((work, index) => (
              <div className="work-item" key={index}>
                <p className="freelancing-description">{work}</p>
                <button className="edit-freelancing-btn" onClick={() => handleEditWork(index)}>
                  Edit
                </button>
              </div>
            ))
          ) : (
            <p>No details provided</p>
          )}
        </div>
      </div>

    


        <div className="progress-section">
          <button className="show-progress-btn" onClick={() => setOngoingProgressVisible(!ongoingProgressVisible)}>
            {ongoingProgressVisible ? 'Hide Ongoing Progress' : 'Show Ongoing Progress'}
          </button>
          {ongoingProgressVisible && (
            <div className="progress-content" style={{ height: '400px', width: '600px' }}>
              <h3>Ongoing Progress</h3>
              <Bar
                data={{
                  labels: ['Task 1', 'Task 2', 'Task 3'],
                  datasets: [{
                    label: 'Progress',
                    data: [70, 45, 85],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                  }]
                }}
                options={{ maintainAspectRatio: false, responsive: true }}
              />
            </div>
          )}

          <button className="show-progress-btn" onClick={() => setCompletedProgressVisible(!completedProgressVisible)}>
            {completedProgressVisible ? 'Hide Completed Progress' : 'Show Completed Progress'}
          </button>
          {completedProgressVisible && (
            <div className="progress-content" style={{ height: '400px', width: '600px' }}>
              <h3>Completed Progress</h3>
              <Bar
                data={{
                  labels: ['Project A', 'Project B', 'Project C'],
                  datasets: [{
                    label: 'Completed Tasks',
                    data: [5, 8, 12],
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1,
                  }]
                }}
                options={{ maintainAspectRatio: false, responsive: true }}
              />
            </div>
          )}
        </div>

        <div className="tech-stack-section">
          <h3>Select Tech Stacks</h3>
          <select multiple={true} value={techStackSelections} onChange={handleTechStackSelection}>
            {techStacks.map((tech, index) => (
              <option key={index} value={tech}>{tech}</option>
            ))}
          </select>
          <button className="save-tech-stacks-btn" onClick={handleSaveTechStacks}>
            Save Tech Stacks
          </button>
          <div className="selected-tech-stacks">
            <h4>Selected Tech Stacks:</h4>
            <ul>
              {selectedTechStacks.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;