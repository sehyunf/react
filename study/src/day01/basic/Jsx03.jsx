// import React from "react"

// export default function Jsx03() {
//   const name = "박세현"
//   const age = 25
//   return (
//     <React.Fragment>
//       <p>
//         이름 : {name}
//       </p>
//       <p>
//         나이 : {age}
//       </p>

//     </React.Fragment>
//   )
// } 

import React from 'react';

const Jsx03 = () => {
  const name = "박세현"
  const age = 25
  return (
    <div>
      <p>{name}, {age}</p>
    </div>
  );
};

export default Jsx03;