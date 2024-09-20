import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/submit-form', formData);
      alert(response.data.message);
    } catch (error) {
      console.error('There was an error submitting the form!', error);
    }
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name"
        className="form-control" 
        placeholder="First & Last Name" 
        value={formData.name} 
        onChange={handleChange} 
      />
      <input 
        type="email" 
        name="email"
        className="form-control" 
        placeholder="Email Address" 
        value={formData.email} 
        onChange={handleChange} 
      />
      <textarea 
        name="message"
        className="form-control" 
        placeholder="Your Message" 
        value={formData.message} 
        onChange={handleChange} 
      ></textarea>
      <button type="submit" className="btn btn-warning">Send Message</button>
    </form>
  );
};

export default ContactForm;
