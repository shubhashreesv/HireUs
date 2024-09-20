import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EscrowHome from './EscrowHome';
import ClientForm from './ClientForm';
import './EscrowApp.css';

function EscrowApp() {
  return (
    <div className="EscrowApp">
      <Routes>
        <Route path="/" element={<EscrowHome />} />
        <Route path="escrowhome" element={<EscrowHome />} />
        <Route path="client" element={<ClientForm />} />
        {/* Catch-all route for invalid paths */}
        <Route path="*" element={<EscrowHome />} />
      </Routes>
    </div>
  );
}

export default EscrowApp;
