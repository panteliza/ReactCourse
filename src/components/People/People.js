import React from 'react'

export default function People({name,profession,award,discovered,image,bgColor}) {
  return (
    <>
      
      <section className='profile-name' style={{backgroundColor:bgColor}}>
        <h2>{name}</h2>
        <img  className='avatar'src={image} width={70} height={70} />
        <ul>
          <li>
            <b>Profession:</b>{profession}
          </li>
          <li>
            <b>Awards:</b> {award}
            <li>

            <b>Discovered:</b> {discovered}
            </li>

          </li>
        </ul>


      </section>
   </>
  )
}
