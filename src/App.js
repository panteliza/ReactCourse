import React from 'react';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Joblist from './components/Joblist/Joblist';



function App() {
  return (
    // <Router>
    <>
    <div className='main-theme'>
      <Navbar />
      <Header/>
      <Joblist/>
      </div>
    </>

      /* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learning" element={<Learning />} />
      </Routes>
    </Router> */
  );
}

export default App;
