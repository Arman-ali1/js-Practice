import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='root'>
      <Header/>
      <Home/>
    </div>
  )
}

export default App
