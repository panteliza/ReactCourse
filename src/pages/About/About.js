import React from 'react'
import People from '../../components/People/People'


export default function About() {
  return (
    <>
    <div>
      <h1>Noble Scientists</h1>
      </div>
      <div>
      <People profile="Eliza Pant" profession="physicist and chemist" award="(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)" bgColor='pink'/>
      </div>
        
      <div>
      <People profile="Monica Geller" profession="geochemist" award="(Miyake Prize for geochemistry, Tanaka Prize)" bgColor='blue'/>
      </div>

    
    </>
  )
}
