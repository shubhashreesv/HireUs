import React, { useState } from 'react';
import Chatbot from './Chatbot'; // Ensure the correct import path
import './FloatingChatbot.css'; // Import CSS for styling

const FloatingChatbot = () => {
  const [isVisible, setIsVisible] = useState(false); // State to handle visibility

  const toggleChatbot = () => {
    setIsVisible(!isVisible); // Toggle visibility state
  };

  return (
    <>
      <div className="floating-chatbot-button">
        <button onClick={toggleChatbot}>
          {isVisible ? 'Close Chatbot' : 'Open Chatbot'}
        </button>
      </div>
      {isVisible && <Chatbot />} {/* Conditionally render the Chatbot component */}
    </>
  );
};

export default FloatingChatbot;
