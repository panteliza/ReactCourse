import React from 'react';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Joblist from './components/Joblist/Joblist';
import records from './data/JobRecord';
import Middle from './components/Middle/Middle';
import Footer from './components/Footer/Footer';


function App() {
  return (
    
    <>
    <div className='main-theme'>
      <Navbar />
      <Header/>
     
  
      <div className='job-theme'>
      {
    records.map(record=>
      <Joblist 
      key={record.id}
      title={record.title}
     location={record.location}
      photo={record.photo}
      company={record.company}
     ></Joblist>)
  }
  </div>
      
        
        <Middle/>
        <Footer/>
      </div>
      
    </>

      
  );
}

export default App;
