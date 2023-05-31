import React from 'react'
import './Navbar.css';
export default function Navbar() {
  return (
    <nav className="navbar">
    <div className="navbar-left">
      <span className="navbar-title">JobSearch</span>
    </div>
    <div className="navbar-middle">
      <ul className="navbar-links">
        <li className="navbar-item">
          <a href="/" className="navbar-link">Home</a>
        </li>
       <li className="navbar-item">
          <a href="/about" className="navbar-link">About</a>
        </li>
        <li className="navbar-item">
          <a href="/contact" className="navbar-link">Contact</a>
        </li>
        <li className="navbar-item">
          <a href="/learning" className="navbar-link">Learning</a>
        </li>
      </ul>
    </div>
  </nav>
  )
}
