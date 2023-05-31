// import React, { useState } from 'react';
// import myBioData from '../../data/Data3';
// import './Learning.css'

// export default function Learning() {
//   const[addData,setAddData]=useState(myBioData)
//   function handleClick(){
//     setAddData([]);
//   }

//   return (
//     <div>
//       <div className='container'>
//         {addData.map((myData) => (
//           <h1 className='ctn' key={myData.id}>
//             Name: {myData.myName} & Age: {myData.age}
//           </h1>
//         ))}
//         <button onClick={handleClick}>Clear</button>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import myBioData from '../../data/Data3';
import './Learning.css'

export default function Learning() {
  const[addData,setAddData]=useState(myBioData)
  function handleClick(){
    setAddData([]);
  }

  return (
    <div>
      <div className='container'>
        {addData.map((myData) => (
          <h1 className='ctn' key={myData.id}>
            Name: {myData.myName} & Age: {myData.age}
          </h1>
        ))}
        <button onClick={handleClick}>Update</button>
      </div>
    </div>
  );
}
