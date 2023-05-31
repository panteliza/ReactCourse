import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Learning from './pages/Learning/Learning';

import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar/Navbar';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learning" element={<Learning />} />
      </Routes>
    </Router>
  );
}

export default App;
