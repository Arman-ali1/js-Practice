import React, { useState } from 'react'
import Eye from './Eye';
import EyeOff from './EyeOff'



function Password() {
    const [password, setPassword] = useState(false)
  return (
    <>
      <h1>Password</h1>
      <div className='flex items-center justify-center '>
     
        <div className='-ml-10 cursor-pointer'>
            {
                password ?<Eye/>:<EyeOff/>
            }
        </div>
      </div>
      
        
    </>
  )
}

export default Password
