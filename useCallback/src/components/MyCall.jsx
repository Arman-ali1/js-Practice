

import React, { useState, useCallback, useMemo } from 'react';
const MyCall = () => {
 const[state,setState]=useState(0);
 const funwithoutMemoFunction2=()=>{
    console.log("without memo");
 }
 const updateState=()=>{
  setState(state+1)
 }
const withMemoFunction=useMemo(()=>{
  let i=0;
  while(i<900000000){
    i++;
  }
  console.log("useMemo");
}, [state])
  return (
    <div>
      <h1>arman</h1>
      <h1>state::{state}</h1>
      <button onClick={funwithoutMemoFunction2} >withoutMemoFunction</button><br></br><br></br>
      <button onClick={updateState} > With useMemo </button>
    </div>);};

// Child component that receives the callback
// const ChildComponent = ({ onChange }) => {
//   // Some rendering here...
//   console.log("renderChild");
//   return (
//     <button onClick={onChange}>Click me</button>
//   );
// };




export default MyCall
