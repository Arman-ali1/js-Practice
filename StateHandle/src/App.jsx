import { useState } from 'react'
import {store} from "../src/store/Store"
import ComOne from './comOne/ComOne';
import ComTwo from './comTwo/ComTwo';
import ComThree from './comThree/ComThree';

function App() {
  const [count, setCount] = useState(0)
console.log(store);
  return (
    <>
      <h1>Vite Application start</h1>
      <h2>Count: {count}</h2>
      {/* <ComOne/>
      <h1>Current Store count value  {store.count}</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <ComTwo/>
      <p>Compoenet e start</p>
      <ComThree/> */}
    </>
  )
}

export default App
