import { useState } from 'react'
import './App.css'
import Home from './components/Home.jsx';
import Container from './components/Container.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Arman Ali</h1>
      <Home />
      <Container/>
    </>
  )
}

export default App
