import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { store } from '../store/Store';
import { useNavigate } from "react-router-dom";
// import ComThree from '../comThree/ComThree';


function ComTwo() {

  const navigate=useNavigate();

const[val,setVal]=useState("arman")

async function submit(){
  try{

    console.log(val);
    await axios.post("http://localhost:3300/getUser",{val})
    .then(res=>{
      console.log(res.data);
      console.log(res.data.email);
      console.log(res.data.firstName+" "+res.data.lastName);
      store.name=res.data.firstName+" "+res.data.lastName
      navigate('/ComThree')
    })
    .catch(e=>{
      console.log("error in res from server");
    })

  }
  catch{
    console.log("Error to call api")
  }
}

  return (
    <div>
      <h1>Finding data from dtatbase</h1>
      <input onChange={(e)=>{
        setVal(e.target.value)
      }} placeholder='input data' className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded' ></input>
      <button onClick={submit} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>get data</button>
    </div>
  )
}

export default ComTwo

