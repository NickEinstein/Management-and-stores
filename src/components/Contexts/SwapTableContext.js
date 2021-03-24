import React, { useState, useEffect, createContext } from 'react';

export const SwapTableContext = createContext();


const SwapTableContextProvider = (props) => {
   
   const [table6, setTable6] = useState(true)
   const [table10, setTable10] = useState(false)
   const [valued, setValue] = useState([])
   const [valued2, setValue2] = useState([])
   const [valued3, setValue3] = useState([])
   const [valued4, setValue4] = useState([])
   const [valued5, setValue5] = useState([])
   const [valued6, setValue6] = useState([])

   const handleTable6 =()=>{
    setTable6(true)
    setTable10(false)
   }
   const handleTable10 =()=>{
    setTable6(false)
    setTable10(true)
   }
   const handleValue =(T81)=>{
    setValue(T81)
   
   }
   const handleValue2 =(T82)=>{
    setValue2(T82)
   
   }
   const handleValue3 =(T83)=>{
    setValue3(T83)
   
   }
   const handleValue4 =(T84)=>{
    setValue4(T84)
   
   }
   const handleValue5 =(T85)=>{
    setValue5(T85)
   
   }
   const handleValue6 =(T86)=>{
    setValue6(T86)
   
   }
  return (
      
    <SwapTableContext.Provider value = {{table6, table10,valued,valued2,valued3,valued4,valued5,valued6, handleValue,handleValue2,handleValue3,handleValue4,handleValue5,handleValue6, handleTable6,handleTable10}}>
{props.children}
    </SwapTableContext.Provider>

   
  );
};
export default SwapTableContextProvider;