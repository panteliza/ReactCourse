import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  
  faClock
  
} from "@fortawesome/free-solid-svg-icons";
import "./Joblist.css";
export default function Joblist({title,location,photo,company}) {
  return (
    <div className="main-job">
      {/* heading section */}
        <div clasName="job-list-heading">
          <div className="job-list-title">
            <h3 className="main-name">{title}</h3>

            <div className="icon-now">
              <div><FontAwesomeIcon icon={faClock} /></div>
              <div>Now</div>
            </div>
          </div>
          <div className="job-para">{location}</div>
        </div>
        
      {/* Underline Section */}
      <div className="job-underline">

      </div>

      {/* Description section */}
      <div className="job-description">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Corrupti,laboriosam</p>
      </div>

      {/* Logo and name */}
      <div className="logo-name">
        <div className="logo"> <img src={photo} alt="company name" className="image" /></div>
        <div className="namee"><strong>{company}</strong></div>
      </div>


      {/* Apply Now Button */}
      <div className="job-apply">
        <button className="job-apply-button">
          <b>Apply Now</b>
        </button>
      </div>

    </div>
  );
}
