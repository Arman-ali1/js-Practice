import './Component.css'
import React from 'react'
// import ReactDOM from 'react-dom'
// import { SocialIcon } from 'react-social-icons'
// import {pic1} from '../images/mail.jpeg'
//////////////done////////////////////////
import new_home_logo from'../images/new_home.png'
import new_mail_logo from'../images/new_mail.png'
import new_call_logo from'../images/new_call.png'
import new_person_logo from'../images/new_person.png'
import new_msg_logo from'../images/new_msg.png'
import new_linkedin_logo from'../images/new_linkedin.png'
import new_instagram_logo from'../images/new_instagram.png'

// import mail_logo from'../images/mail.jpeg' 
// import home_logo from'../images/home.png'
// import insta_logo from'../images/insta.jpeg'
// import linkedin_logo from'../images/linkedin.jpeg'
// import msg_logo from'../images/msg.png'
// import person_logo from'../images/person.jpeg'
// import phone_logo from'../images/phone.jpeg'

const Component = () => {
    // const mail=pic1.mail;
  return (
    
    <div className='whole'>
        <div className='left'>
            <h2 style={{color:'white'}}> TAKE THE SILK ROAD TO </h2>
            <h1 style={{color:'blue'}}> Digitizing Your Business </h1>
            <h1 style={{color:'blue'}}>Growth</h1>
            {/* <hr/> */}
            <div>
                <h2 className='footer'> Follow Us &nbsp;
                {/* <SocialIcon network="instagram" style={{ height: 32, width: 32,margin:14 }} /> */}
                <img src={new_instagram_logo} alt=""/>
                <img src={new_linkedin_logo}  alt="" />
                {/* <SocialIcon network="linkedin" style={{ height: 32, width: 32 , }} /> */}
                </h2>
            </div>
        </div>
        <div className='right'>
            
            <h1 className='headin'>Start A Conversation With Us</h1> 
            <fieldset> 
                <form action="#" method="get"> 
                {/* <SocialIcon network="person" style={{ height: 32, width: 32 , }} /> */}
                <img style={{height: 32, width: 32}}src={new_person_logo} alt=""/>
                    <label for="firstname">Name*</label> 
                    <input 
                        type="text"
                        
                        
                        required 
                    /> 
                    <hr/>
                    {/* <SocialIcon network="home" style={{ height: 32, width: 32 , }} /> */}
                    <img src={new_home_logo} alt=""/>
                    <label for="lastname">Company Name*</label> 
                    <input 
                        type="text"
                        name="lastname"
                        id="lastname"
                        placeholder=""
                        required 
                    /> 
                    <hr/>
                    {/* <br /> */}
                    {/* <SocialIcon network="email" style={{ height: 32, width: 32 , }} /> */}
                    {/* <img src={mail} alt=""/> */}
                    <img src={new_mail_logo} alt=""/>
                    {/* <img src="mail.jpeg" alt=" " width="500" height="600"></img> */}
                    <label for="email">Email* </label> 
                    <input 
                        type="email"
                        // name="email"
                        // id="email"
                        // placeholder="Enter email"
                        required 
                    /> 
                    <hr/>
                    {/* <br /><br />  */}
                    {/* <SocialIcon network="phone" style={{ height: 32, width: 32 , }} /> */}
                    <img src={new_call_logo} alt=""/>
                    <label for="tel">Phone*</label> 
                    <input 
                        type="tel"
                        // name="tel"
                        // id="tel"
                        // placeholder="Enter Mobile number"
                        required 
                    /> 
                    <br />
                    <hr/>
                    {/* <SocialIcon network="message" style={{ height: 32, width: 32  }} /> */}
                    <img src={new_msg_logo} alt=""/>
                    <label for="tel">Your Message*</label> 
                    <input 
                        type="tel"
                        // name="tel"
                        // id="tel"
                        // placeholder="Enter Mobile number"
                        required 
                    /> 
                    <br /><br /><br />  
                    <hr/>
                    <br/>
                    <button type="submit" value="Submit"> 
                        SUBMIT 
                    </button>
                </form> 
            </fieldset> 
        </div>
        {/* <div className='footer'>
            <p style={{color:'white'}}>Follow Us</p>
        </div> */}
    </div>
  )
}

export default Component