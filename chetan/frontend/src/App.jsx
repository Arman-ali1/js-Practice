import { useState } from 'react'

import './App.css'
import Image from './assets/arrow-left.png'
// import TradingViewWidget from './TradingViewWidget'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen  overflow-y-hidden   w-full text-black  flex items-center justify-center flex-col'>
        <div className='h-14  flex items-center justify-around flex-row gap-x-8'>
          <img className='h-10 font-bold ' src={Image} />
          <h1 className='text-3xl font-bold'>Complete Profile</h1>
        </div>
        <div className='bg-white text-black flex items-center justify-around flex-col p-10 gap-6 rounded-lg shadow-2xl'>
          <input className='rounded-lg p-4 border border-xl border-gray-400 ' placeholder="Enter text..."/>
          <input className='rounded-lg p-4 border border-xl border-gray-400 ' placeholder="Enter text..."/>
          <input className='rounded-lg p-4 border border-xl border-gray-400 ' placeholder="Enter text..."/>
          <input className='rounded-lg p-4 border border-xl border-gray-400 ' placeholder="Enter text..."/>
          <input className='rounded-lg p-4 border border-xl border-gray-400 ' placeholder="Enter text..."/>
        </div>
        <div className='bg-white rounded-lg  p-2 shadow-2xl mt-3'>
          <button className='bg-blue-500 text-white p-3 rounded-lg shadow-2xl w-72  '>Submit</button>
        </div>
      </div>
      {/* <TradingViewWidget/> */}
    </>
  )
}

export default App
