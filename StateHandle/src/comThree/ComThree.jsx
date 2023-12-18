import React from 'react'
import { store } from '../store/Store'
import { useState,useEffect } from 'react'

function ComThree() {
  const [state, setState] = useState(store.name)

  // setState(store.name)
  useEffect(()=>{
    setState(store.name)
  },[state]);
  return (
    <div>
      <h1 >Data comes from store::::::Name of User:::::::::<span className='text-pink-600'>{state}</span></h1>
    </div>
  )
}

export default ComThree

