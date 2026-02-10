import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// CORRECTED IMPORTS:
import LandingPage from './pages/LandingPage'; 
import LoginPage from './pages/Login';         // Changed from './pages/LoginPage'
import RegisterPage from './pages/Register';   // Changed from './pages/RegisterPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;