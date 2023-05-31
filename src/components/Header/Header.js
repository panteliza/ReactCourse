import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  
  faMagnifyingGlass,
  faCircleXmark,
  faHome,faLocationDot
  
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <>
    <div className='header-comp'>
    <div className="header-one">
      <div className="header-one1"><FontAwesomeIcon icon={faMagnifyingGlass} /><input className="place" type="text" placeholder="Search Job Here"></input><FontAwesomeIcon icon={faCircleXmark} /></div>

      <div className="header-one1"><FontAwesomeIcon icon={faHome} /><input className="place" type="text" placeholder="Search by compant"></input><FontAwesomeIcon icon={faCircleXmark} /></div>

      <div className="header-one1"><FontAwesomeIcon icon={faLocationDot} /><input className="place" type="text" placeholder="Search by location"></input>
      <FontAwesomeIcon icon={faCircleXmark} /></div>
      <button className="btn-header">Search</button>

</div>
<div className="header-two">
  <div className="sort-type">
 <div className="class">
  Sort-by:
 </div>
  <select>
  <option value="relevance">Relevance</option>
  <option value="inclusive">Inclusive</option>
  <option value="contains">Contains</option>
</select>
</div>
<div className="sort-type">
<div className="name">

    Type:
</div>
  
  <select>
  <option value="full-time">Full-Time</option>
  <option value="part-time">Part-Time</option>
  <option value="contract">Contract</option>
</select>
</div>
<div className="sort-type">
<div className="name">Label:</div>
  <select>
  <option value="full-time">Senior</option>
  <option value="part-time">Junior</option>
  <option value="contract">Mid</option>
</select>

</div>

<div className="clearall">Clear all</div>
</div>
</div>
   

    </>
  )
}
