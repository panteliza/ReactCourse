import React from 'react'
 import './About.css'
import People from '../../components/People/People'
import peoples from '../../data/Data2'
function About() {
  return(
  <div className="About">
  <h1>Renowned Profile</h1>
    <div className="peep">
  {
    peoples.map(people=><People
      
      name={people.name}
     profession={people.profession}
      award={people.award}
      discovered={people.discovered}
     image={people.image}
     className="abc" bgColor={people.bgColor}
     
    ></People>)
  }
  </div>

</div>
  );
}

export default About;