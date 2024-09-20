import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const Signup = () => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    workEmail: '',
    password: '',
    confirmPassword: '',
    freelancerProfile: '',
    clientCompany: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleUserTypeSelect = (type) => {
    setUserType(type);
    setStep(2);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const data = {
      name: formData.name,
      email: formData.email,
      mobileNumber: formData.mobileNumber,
      workEmail: formData.workEmail,
      password: formData.password,
      userType: userType,
      freelancerProfile: formData.freelancerProfile,
      clientCompany: formData.clientCompany,
    };

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Network response was not ok');
      }

      const result = await response.json();
      console.log(result.message);
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleGoogleLoginSuccess = async (credentialResponse) => {
    try {
      const response = await axios.post('http://localhost:5000/api/google-signup', {
        token: credentialResponse.credential,
      });
      console.log(response.data);
      // Handle successful Google sign-up
    } catch (error) {
      console.error('Google signup failed:', error);
    }
  };

  const handleGoogleLoginFailure = (error) => {
    console.error('Google login failed:', error);
  };

  return (
    <div className="signup-container">
      <div className="background-shape shape1"></div>
      <div className="background-shape shape2"></div>
      <div className="background-shape shape4"></div>
      <div className="background-shape shape5"></div>
      <div className="background-shape shape6"></div>
      {step === 1 && (
        <Container className="my-5">
          <Row className="justify-content-center">
            <Col md={6} className="text-center">
              <div className="user-type-selection bg-light p-4 rounded shadow">
                <h2 className="mb-4">Are you a Freelancer or a Client?</h2>
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="mx-2 mb-2" 
                  onClick={() => handleUserTypeSelect('freelancer')}
                >
                  Freelancer
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="mx-2 mb-2" 
                  onClick={() => handleUserTypeSelect('client')}
                >
                  Client
                </Button>
                <div className="mt-3">
                  Already have an account?{' '}
                  <Link to="/login">
                    <Button variant="link">Login</Button>
                  </Link>
                </div>
                <div className="mt-4">
                  <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
                    <GoogleLogin
                      onSuccess={handleGoogleLoginSuccess}
                      onError={handleGoogleLoginFailure}
                    />
                  </GoogleOAuthProvider>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )}

      {step === 2 && (
        <form onSubmit={handleSubmit} className="signup-form">
          <h2>Sign Up as a {userType === 'freelancer' ? 'Freelancer' : 'Client'}</h2>

          <div>
            <label htmlFor="name">Name:</label>
            <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="mobileNumber">Mobile Number:</label>
            <input 
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="workEmail">Work Email Address:</label>
            <input 
              type="email"
              name="workEmail"
              value={formData.workEmail}
              onChange={handleChange}
              required
            />
          </div>


          <div><label htmlFor="password">Password:</label>
<div style={{ display: 'flex', alignItems: 'center' }}>
  <input 
    type={showPassword ? "text" : "password"}
    name="password"
    value={formData.password}
    onChange={handleChange}
    required
    style={{ marginRight: '10px', flex: 1, padding: '10px', fontSize: '16px' }}
  />
  <button 
    type="button" 
    onClick={togglePasswordVisibility}
    style={{ backgroundColor: 'grey', color: 'white', border: 'none', cursor: 'pointer', padding: '3px 7px', fontSize: '12px' ,  width: '100px',
      height: '50px' }}  >
    {showPassword ? "Hide" : "Show"}
  </button>
</div>
</div>

<div><label htmlFor="confirmPassword">Confirm Password:</label>
<div style={{ display: 'flex', alignItems: 'center' }}>
  <input 
    type={showConfirmPassword ? "text" : "password"}
    name="confirmPassword"
    value={formData.confirmPassword}
    onChange={handleChange}
    required
    style={{ marginRight: '10px', flex: 1, padding: '10px', fontSize: '16px' }}
  />
  <button 
    type="button" 
    onClick={toggleConfirmPasswordVisibility}
    style={{ backgroundColor: 'grey', color: 'white', border: 'none', cursor: 'pointer', padding: '3px 7px', fontSize: '12px' ,  width: '100px',
      height: '50px' }} // Reduced padding and font size
  >
    {showConfirmPassword ? "Hide" : "Show"}
  </button>
</div>
</div>
 




          {userType === 'freelancer' && (
            <div>
              <label htmlFor="freelancerProfile">Freelancer Profile:</label>
              <textarea
                name="freelancerProfile"
                value={formData.freelancerProfile}
                onChange={handleChange}
                placeholder="Describe your skills, projects, etc."
                required
              />
            </div>
          )}

          {userType === 'client' && (
            <div>
              <label htmlFor="clientCompany">Company Name (if applicable):</label>
              <input
                type="text"
                name="clientCompany"
                value={formData.clientCompany}
                onChange={handleChange}
                placeholder="Enter your company name"
              />
            </div>
          )}

          <div className="form-buttons">
            <button type="button" onClick={handleBack} className="back-button">Back</button>
            <Button type="submit" variant="primary">Sign Up</Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Signup;
