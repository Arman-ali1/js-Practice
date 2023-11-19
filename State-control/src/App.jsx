// import { useState } from 'react'
import Count from './components/Count'
import Card from './components/Card'
function App() {
  return (
    <>
      <div flex justify-center items-center flex-col>
        <div className="flex justify-center items-center flex-row">
            <Card name="asdf"/>
            <Card name="Arman"/>
            <Card name="Ali"/>
            <Card />
            
        </div>
        <Count/>
      </div>
    </>
  )
}

export default App
