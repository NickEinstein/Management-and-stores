import React, { useState, useEffect, createContext } from 'react';

export const SwapTableContext = createContext();


const SwapTableContextProvider = (props) => {
   
   const [table6, setTable6] = useState(true)
   const [table10, setTable10] = useState(false)

   const handleTable6 =()=>{
    setTable6(true)
    setTable10(false)
   }
   const handleTable10 =()=>{
    setTable6(false)
    setTable10(true)
   }
  return (
      
    <SwapTableContext.Provider value = {{table6, table10,handleTable6,handleTable10}}>
{props.children}
    </SwapTableContext.Provider>

   
  );
};
export default SwapTableContextProvider;