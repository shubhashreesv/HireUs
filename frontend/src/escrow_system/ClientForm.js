import React, { useState } from 'react';
import './ClientForm.css';

function ClientForm() {
  const [amount, setAmount] = useState('');
  const [projectId, setProjectId] = useState('');
  const [freelancerName, setFreelancerName] = useState('');
  const [freelancerEmail, setFreelancerEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate depositing money and show success message
    setMessage('Amount deposited successfully, and the account is locked!');
  };

  return (
    <div className="client-form-container">
      <h2>Escrow payment details</h2>
      <form onSubmit={handleSubmit} className="form-group">
        <div className="mb-3">
          <label className="form-label">Amount to Deposit</label>
          <input type="number" className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Project ID</label>
          <input type="text" className="form-control" value={projectId} onChange={(e) => setProjectId(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Freelancer Name</label>
          <input type="text" className="form-control" value={freelancerName} onChange={(e) => setFreelancerName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Freelancer Email</label>
          <input type="email" className="form-control" value={freelancerEmail} onChange={(e) => setFreelancerEmail(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Save and Deposit</button>
      </form>

      {message && <div className="alert alert-success mt-3">{message}</div>}
    </div>
  );
}

export default ClientForm;
