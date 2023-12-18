import React,{useEffect, useState} from 'react'
import { store } from '../store/Store'
import { useNavigate } from 'react-router-dom'



function ComOne() {
  const navigate=useNavigate()
  let asdf="sadf"
  const [state, setState] = useState(store.count)
  
  console.log(state);
  function increment(){
    store.count+=1;
    
    setState(store.count)
  }
  function forapp(){
    navigate("/")
  }
  function fortwo(){
    navigate("/ComTwo")
  }
  function forthree(){
    navigate("/ComThree")
  }
    
  return (
    <div>
      <h1>count ComOne::{state}</h1>
      <br/>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={increment}>Increment</button>
      <br/>
      <br/>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={forapp}>Go..App--{`>`}</button>
      <br></br>
      <br/>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={fortwo}>Go..ComTwo--{`>`}</button>
      <br/>
      <br/>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={forthree}>Go..ComThree--{`>`}</button>
    </div>
  )
}

export default ComOne

