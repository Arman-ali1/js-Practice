import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>arman ali</h1>
        <Home/>
      </div>
    </>
  )
}

export default App
