// import React from "react";
// import Header from "./Header";


// const PrivateContainer = ({children}) =>{
//     return (
//        <>
//         <Header></Header>
//         <div>

//            {children}
            
//         </div>
//        </>
//     )
// }

// export default PrivateContainer;
// PrivateContainer.jsx
import React from 'react';

const PrivateContainer = ({ children }) => {
  return <div className="private-container">{children}</div>;
};

export default PrivateContainer;
