import React from 'react'

export default function People({profile,profession,bgColor,award}) {
  return (
    <div>
      
      <section className='profile-name' style={{backgroundColor:bgColor}}>
        <h2>{profile}</h2>
        <img  className='avatar'src="https://i.imgur.com/MK3eW3As.jpg" alt="eliza pant" width={70} height={70} />
        <ul>
          <li>
            <b>Profession:</b>{profession}
          </li>
          <li>
            <b>Awards: 4</b> {award}
            <li>

            <b>Discovered:</b> polonium (element)
            </li>

          </li>
        </ul>


      </section>
    </div>
  )
}
