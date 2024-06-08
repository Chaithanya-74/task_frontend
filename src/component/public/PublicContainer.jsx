import React from 'react';
import Header from './Header';


const PublicContainer = ({children}) =>{
     return (
        <>
         <Header></Header>
         <div>

            {children}
             
         </div>
        </>
     )
}

export default PublicContainer;