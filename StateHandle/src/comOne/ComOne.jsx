import React,{useState} from 'react'
import { store } from '../store/Store'
function ComOne() {
  let asdf="sadf"
  const [state, setState] = useState(store.count)
  console.log(state);
  function increment(){
    store.count+=1;
    setState(store.count)
  }
  return (
    <div>
      <h1>count ComOne::{state}</h1>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={increment}>Increment</button>

    </div>
  )
}

export default ComOne

