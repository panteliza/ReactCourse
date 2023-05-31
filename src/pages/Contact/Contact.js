// import React, { useState } from 'react';
// import './Contact.css';

// export default function Contact() {
//   const [bgColor, setBgColor] = useState('pink');
//   const [text, setText] = useState('Click me');

//   function handleClick() {
//     let bg;
//     let newText;

//     if (bgColor === 'pink') {
//       bg = 'purple';
//       newText = 'Oops!!!';
//     } else if (bgColor==='purple'){
//       bg = 'blue';
//       newText = 'Go back';
//     }else {
//       bg='pink';
//       newText='Click me';
//     }

//     setBgColor(bg);
//     setText(newText);
//   }

//   return (
//     <div className='Contact' style={{ backgroundColor: bgColor }}>
//       <button className='btn' onClick={handleClick}>
//         {text}
//       </button>
//     </div>
//   );
// }
import React, { useState } from 'react'

export default function Contact() {
  
  const[num,setnum]=useState(0);
function Handle ()  {
   const newNum = num+1;
  setnum(newNum);
}
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={Handle}>Add</button>
    </div>
  )
}

