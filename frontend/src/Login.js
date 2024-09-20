import React, { useState } from 'react';
import './Login.css'; // Ensure you update this file with relevant CSS
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', formData);

      if (response.status === 200) {
        alert('Login Successful!');
        navigate('/skills');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container className="login-container">
      <div className="background-shape shape1"></div>
      <div className="background-shape shape2"></div>
      <div className="background-shape shape3"></div>
      <div className="background-shape shape4"></div>
      <div className="background-shape shape5"></div>
      <div className="background-shape shape6"></div>
      <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        
        {/* Login Form */}
        <Col xs={10} md={6} lg={4}>
          <div className="login-form bg-light p-5 shadow rounded">
            <h2 className="text-center mb-4">Login</h2>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <div className="password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="form-control"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="show-password-btn"
                  >
                    {showPassword ? "Hide" : "Show"} Password
                  </button>
                </div>
              </div>

              <div className="form-buttons text-center mt-3">
                <Button type="submit" variant="primary" className="login-btn">Login</Button>
              </div>

              <div className="mt-3 text-center">
                Don't have an account? <Link to="/signup" style={{ textDecoration: "none" }}>Sign up here</Link>
              </div>
            </form>
          </div>

        </Col>
      </Row>
    </Container>
  );
};

export default Login;
