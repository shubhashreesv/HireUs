import React, { useState } from 'react';
import './skill.css';
const Skill = () => {
  // Question data as an array of objects
  
  const questionBank = [
    {
      "questionText": "Which aspect of freelancing interests you the most?",
      "options": [
        { "text": "Being my own boss and setting my own schedule", "category": "Autonomy" },
        { "text": "Working on diverse projects and meeting various clients", "category": "Variety" },
        { "text": "Having the flexibility to work from anywhere", "category": "Flexibility" },
        { "text": "Building my personal brand and growing my business", "category": "BrandBuilding" }
      ]
    },
    {
      "questionText": "What type of freelance work are you most interested in?",
      "options": [
        { "text": "Offering creative services like writing, design, or photography", "category": "CreativeWork" },
        { "text": "Providing technical services like web development or IT support", "category": "TechnicalWork" },
        { "text": "Helping businesses with administrative tasks or virtual assistance", "category": "AdministrativeWork" },
        { "text": "Consulting or offering expert advice in a specific field", "category": "Consulting" }
      ]
    },
    {
      "questionText": "How do you prefer to find new freelance clients?",
      "options": [
        { "text": "Through online freelance platforms and job boards", "category": "ClientAcquisition" },
        { "text": "By networking and attending industry events", "category": "ClientAcquisition" },
        { "text": "Through referrals from friends and colleagues", "category": "ClientAcquisition" },
        { "text": "By building a strong online presence and showcasing my work", "category": "BrandBuilding" }
      ]
    },
    {
      "questionText": "What is your preferred method for managing freelance projects?",
      "options": [
        { "text": "Using project management tools and software", "category": "ProjectManagement" },
        { "text": "Keeping track of tasks and deadlines manually", "category": "ProjectManagement" },
        { "text": "Relying on regular communication and updates with clients", "category": "ProjectManagement" },
        { "text": "Outsourcing project management tasks to others", "category": "ProjectManagement" }
      ]
    },
    {
      "questionText": "Which skill do you think is most important for a successful freelancer?",
      "options": [
        { "text": "Self-discipline and time management", "category": "PersonalDevelopment" },
        { "text": "Strong communication and client management", "category": "PersonalDevelopment" },
        { "text": "Expertise and proficiency in your field of work", "category": "PersonalDevelopment" },
        { "text": "Ability to market and sell your services effectively", "category": "BrandBuilding" }
      ]
    },
    {
      "questionText": "How do you handle challenges or setbacks in freelancing?",
      "options": [
        { "text": "By reassessing my strategies and making adjustments", "category": "PersonalDevelopment" },
        { "text": "By seeking advice and support from other freelancers", "category": "PersonalDevelopment" },
        { "text": "By focusing on problem-solving and finding alternative solutions", "category": "PersonalDevelopment" },
        { "text": "By taking a break and recharging to regain motivation", "category": "PersonalDevelopment" }
      ]
    },
    {
      "questionText": "What is your approach to setting freelance rates and pricing?",
      "options": [
        { "text": "Researching market rates and setting competitive prices", "category": "BrandBuilding" },
        { "text": "Offering lower rates initially to build a client base", "category": "BrandBuilding" },
        { "text": "Setting rates based on the value and complexity of the project", "category": "BrandBuilding" },
        { "text": "Negotiating rates with clients based on their budget", "category": "BrandBuilding" }
      ]
    },
    {
      "questionText": "What tools or resources do you find most useful for freelancing?",
      "options": [
        { "text": "Freelance marketplaces and job boards", "category": "ClientAcquisition" },
        { "text": "Productivity and project management software", "category": "ProjectManagement" },
        { "text": "Accounting and invoicing tools", "category": "ProjectManagement" },
        { "text": "Online learning platforms and courses for skill development", "category": "PersonalDevelopment" }
      ]
    },
    {
      "questionText": "How do you balance work and personal life as a freelancer?",
      "options": [
        { "text": "By setting clear boundaries and working hours", "category": "PersonalDevelopment" },
        { "text": "By creating a dedicated workspace to separate work from personal life", "category": "PersonalDevelopment" },
        { "text": "By scheduling regular breaks and time off", "category": "PersonalDevelopment" },
        { "text": "By incorporating personal activities and hobbies into my daily routine", "category": "PersonalDevelopment" }
      ]
    },
    {
      "questionText": "What motivates you to stay focused and productive as a freelancer?",
      "options": [
        { "text": "Setting and achieving personal and professional goals", "category": "PersonalDevelopment" },
        { "text": "Receiving positive feedback and recognition from clients", "category": "BrandBuilding" },
        { "text": "Enjoying the flexibility and freedom of freelancing", "category": "Flexibility" },
        { "text": "The potential for financial rewards and career growth", "category": "PersonalDevelopment" }
      ]
    }
  ];
  

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [resultText, setResultText] = useState('');

  const handleOptionClick = (category) => {
    // Update the scores for each category
    setScores((prevScores) => ({
      ...prevScores,
      [category]: (prevScores[category] || 0) + 1
    }));

    // Move to the next question
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questionBank.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      calculateResult();
      setShowResult(true);
    }
  };

  const calculateResult = () => {
    // Find the category with the highest score
    const highestScoreCategory = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    
    let suggestion = '';

    switch (highestScoreCategory) {
    case 'Autonomy':
      suggestion = 'You value autonomy and enjoy being in control of your work schedule. Consider freelancing roles like a freelance writer, consultant, or virtual assistant, which offer you the flexibility to manage your own time and projects, allowing you to be your own boss.';
      break;
    case 'Variety':
      suggestion = 'You thrive on variety and enjoy working on different projects. Freelancing as a project manager, content creator, or digital marketer could be ideal, as these roles offer diverse tasks and interactions with various clients, keeping your work dynamic and engaging.';
      break;
    case 'Flexibility':
      suggestion = 'Flexibility is important to you. Freelancing roles such as web developer, graphic designer, or online tutor allow you to work from anywhere and set your own hours, giving you the freedom to balance your work with your personal life.';
      break;
    case 'BrandBuilding':
      suggestion = 'You’re focused on building your personal brand. Consider freelancing as a social media manager, brand consultant, or content strategist. These roles enable you to showcase your skills, establish a reputation, and develop a strong professional presence.';
      break;
    case 'CreativeWork':
      suggestion = 'You have a passion for creative work. Freelancing as a photographer, illustrator, or writer would allow you to explore your creativity and take on projects that align with your artistic interests and talents.';
      break;
    case 'TechnicalWork':
      suggestion = 'You’re interested in technical services. Freelancing as a web developer, IT consultant, or data analyst would let you apply your specialized skills and work on complex, rewarding projects in your field.';
      break;
    case 'AdministrativeWork':
      suggestion = 'You prefer administrative tasks. Freelancing roles like a virtual assistant, project coordinator, or administrative consultant offer opportunities to support businesses and streamline their operations, leveraging your organizational skills.';
      break;
    case 'Consulting':
      suggestion = 'You excel at offering expert advice. Consider freelancing as a business consultant, financial advisor, or industry expert. These roles allow you to utilize your expertise, provide valuable insights, and guide clients toward success.';
      break;
    case 'ClientAcquisition':
      suggestion = 'You’re adept at finding and acquiring new clients. Freelancing as a sales consultant, business development specialist, or marketing strategist could be ideal, as these roles involve connecting with potential clients and building a robust client base.';
      break;
    case 'ProjectManagement':
      suggestion = 'You’re skilled at managing projects. Freelancing as a project manager, operations manager, or coordinator would offer you the chance to oversee and coordinate projects effectively, using tools and strategies to ensure timely and successful completion.';
      break;
    case 'PersonalDevelopment':
      suggestion = 'You’re committed to personal development. Freelancing roles like a career coach, productivity consultant, or self-improvement writer provide opportunities for growth, allowing you to enhance your skills and achieve your professional goals.';
      break;
    default:
      suggestion = 'You have a unique set of preferences and strengths. Freelancing offers a range of opportunities that can align with your interests and goals, so you can customize your career path to fit what suits you best.'; 
    }

    console.log(suggestion);


    setResultText(suggestion);
  };

  return (
    <div className="app-container">
      {!showResult ? (
        <div className="question-container">
          <h2 className="question-text">{questionBank[currentQuestionIndex].questionText}</h2>
          <div className="optionsWrapper">
            <div className="optionsBox">
              {questionBank[currentQuestionIndex].options.map((option, index) => (
                <button key={index} onClick={() => handleOptionClick(option.category)} className="optionButton">
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="result-container">
          <h2 className="result-title">Your Suggested Career Path</h2>
          <p className="result-text">{resultText}</p>
          <button onClick={() => window.location.reload()} className="startOverButton">Start Over</button>
        </div>
      )}
    </div>
  );
};

export default Skill;