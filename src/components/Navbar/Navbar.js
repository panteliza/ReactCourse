import React from 'react'
import './Navbar.css';
export default function Navbar() {
  return (
    <div className="navbar">
    <div className="navbar-left">
      <div className="navbar-title"><strong>Job</strong>Search</div>
    </div>
    <div className="navbar-middle">
      <ul className="navbar-links">
        <li className="navbar-item">
          <a href="/" className="navbar-link">Jobs</a>
        </li>
       <li className="navbar-item">
          <a href="/companies" className="navbar-link">Companies</a>
        </li>
        <li className="navbar-item">
          <a href="/about" className="navbar-link">About</a>
        </li>
        <li className="navbar-item">
          <a href="/contact" className="navbar-link">Contact</a>
        </li>
        <li className="navbar-item">
          <a href="/blog" className="navbar-link">Blog</a>
        </li>
        <li className="navbar-item">
          <a href="/login" className="navbar-link">Login</a>
        </li>
        <li className="navbar-item">
          <a href="/register" className="navbar-link">Register</a>
        </li>
      </ul>
    </div>
  </div>
  )
}
