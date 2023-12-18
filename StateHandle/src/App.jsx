import { useState,useEffect } from 'react'
import {store} from "../src/store/Store"
import ComOne from './comOne/ComOne';
import ComTwo from './comTwo/ComTwo';
import ComThree from './comThree/ComThree';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate=useNavigate();
  const [count, setCount] = useState(store.count)

function comone(){
  navigate("/ComOne")
}

console.log(store);
  return (
    <>
    
      <h1>Vite Application start</h1>

      <br/>

      <h2>Count: {count}</h2>

      <br/>
      <br/>
      <br/>
      
      <button onClick={comone} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'> Go... ComOne--{`>`}</button>
    
    </>
  )
}

export default App
