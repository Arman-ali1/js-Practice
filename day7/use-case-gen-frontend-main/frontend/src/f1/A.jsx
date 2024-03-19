import React, { useState } from 'react'
import './A.css'



function A() {

    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState('')
    const[message,setMessage]=useState('')

    function enqbutton(){
        console.log(name,email,phone,message);
        alert('Your query has been submitted');
    }
    function handleContact(){
        alert('We contact you soon');
    }

  return (
    <div className='a1'>
        <div className='a2'>
        <div className='a2right'>
            <h1>All the features you need - for one low price</h1>
            <h3>✓ Professional, Modern Design</h3>
            <h3>✓ Mobile-Friendly</h3>
            <h3>✓ Search Engine Optimized</h3>
            <h3>✓ Real-time Traffic Stats and Analytics</h3>
            <h3>✓ Hosting and Updates Included</h3>
            <h3>✓ Friendly and Reliable Support</h3>
            <h3>✓ Go Live in as Little as 1 Week!</h3>
            <h3>... and much more!</h3>
            
        </div>
        <div className='a2left'>
            <img className='a2left' src='./Picture2.png' />
            <h3 className='imageText'>E LOW PRICE</h3>
        </div>
        
        </div>
    </div>
  )
}

export default A
