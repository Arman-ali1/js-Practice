import React, { useState } from 'react'
import './Enquiry.css'



function Enquiry() {

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
    <div className='enq'>
        <div className='enquiry'>
        <div className='enquiryleft'>
            <img className='enquiryleft' src='./enquiry.png' />
        </div>
        <div className='enquiryright'>
            <h1>Submit your query</h1>
            <p>Don't leave confused. Just seek a free
                consultation.</p>
            <form>
                <input onChange={(e=>{
                    setName(e.target.value)
                })} type="text" placeholder="Name" className='enquiryinput' />
                <input onChange={(e=>{
                    setEmail(e.target.value)
                })} type="text" placeholder="Email" className='enquiryinput' />
                <input onChange={(e=>{
                    setPhone(e.target.value)
                })} type="text" placeholder="Phone" className='enquiryinput' />
                <input onChange={(e=>{
                    setMessage(e.target.value)
                })} type="text" placeholder="Message" className='enquiryinput' />
                
                <button id='enqbtn' onClick={enqbutton}>ENQUIRE NOW</button>
                {/* <button className='enquiryinput' id='enquirybutton' onClick={enqbutton}>Submit</button> */}
            </form>
        </div>
        
        </div>
        <div id='contact'>
            <h1>SMALL BUSINESS MARKETING PACKAGES</h1>
            <p>Entrepreneurs understand how professional Web Development 
            and Digital Marketing can help them stay ahead of the competition. 
            Get the right package to skyrocket your conversion rates.
            </p>
            <button onClick={handleContact} className='enquiryinput' id='enquirybutton'>CONTACT</button>
        </div>
    </div>
  )
}

export default Enquiry
