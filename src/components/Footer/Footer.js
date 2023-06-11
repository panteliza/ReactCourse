import React from 'react'
import './Footer.css'
import { BsInstagram,BsTwitter,BsLinkedin } from 'react-icons/bs';

export default function Footer() {
  return (
    <div className='footer'>
  <div className="footer-jobsearch">
  <h2>JobSearch</h2>
  <p>We always make ......</p>
    </div>

    {/* Company ko div */}
    <div className="footer-company">
      <h3> Company</h3>
      <div className="footer-company">
          <li className='footer-lilist'>Features</li>
          <li className='footer-lilist'>About us</li>
          <li className='footer-lilist'>News</li>
          <li className='footer-lilist'>FAQs</li>

       </div>
      
    </div>

    {/* Resources ko div */}
    <div className="footer-company">
      <h3>Resources</h3>
        <div className='footer-list'>
          <li className='footer-lilist'>Account</li>
          <li className='footer-lilist'>About us</li>
          <li className='footer-lilist'>News</li>
          <li className='footer-lilist'>FAQs</li>
          </div>
        
     
    </div>

    {/* Support ko div */}
    <div className="footer-company">
      <h3>Support</h3>
      <div className='footer-list'>
          <li className='footer-lilist'>Account</li>
          <li className='footer-lilist'>About us</li>
          <li className='footer-lilist'>News</li>
          <li className='footer-lilist'>FAQs</li>
</div>
     
    </div>
    {/* contact info ko div */}

    <div className="footer-company">
      <h2>Contact Info</h2>
       <p>infoteach@outlook.com</p>
       <div className='social-media'>
        <BsInstagram className='icon-p'/>
       <BsTwitter className='icon-p'/>
<BsLinkedin className='icon-p'/>
       </div>
    </div>
    
    </div>
  )
}
