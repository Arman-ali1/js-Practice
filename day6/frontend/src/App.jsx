import { useState } from 'react'

import './App.css'
import Home from './components/home/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black text-white'>
    <h1 className='text-red-800 text-4xl'>Arman Ali</h1>
      <Home/>
    </div>
  )
}

export default App
