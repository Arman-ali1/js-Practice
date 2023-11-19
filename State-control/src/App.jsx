// import { useState } from 'react'

import Card from './components/Card'
function App({name="arman"}) {
  return (
    <>
      <div className="flex justify-center items-center flex-row">
          <Card name="asdf"/>
          <Card name="Arman"/>
          <Card name="Ali"/>
          <Card />
      </div>

    </>
  )
}

export default App
