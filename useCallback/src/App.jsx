import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usecall from './components/Usecall'
import MyCall from './components/MyCall'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Usecall/> */}
      <MyCall></MyCall>
    </>
  )
}

export default App
