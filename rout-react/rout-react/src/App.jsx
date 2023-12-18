import { useState } from 'react'

import './App.css'
import Password from './components/Password'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Password/>
      <h1>Vite + React</h1>
      
    </>
  )
}

export default App
