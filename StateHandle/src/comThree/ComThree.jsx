import React from 'react'
import { store } from '../store/Store'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function ComThree() {
  const [state, setState] = useState(store.name)

  // setState(store.name)
  const navigate=useNavigate();
  function forapp(){
    navigate("/")
  }
  return (
    <div>
      <h1 >Data comes from store::::::Name of User:::::::::<span className='text-pink-600'>{state}</span></h1>
      <br></br>
      <button  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={forapp}>Go.. Home</button>
    </div>
  )
}

export default ComThree

