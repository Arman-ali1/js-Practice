import React from 'react'
import './Form.css';
import Img3 from '../assets/Picture3.png';

function Form() {

    const handlesubmit=()=>{
        alert("Your message has been sent!");
    }

  return (
    <div>
       <div class="containerfooter">
        <div class="row" id='footermain'>
            <div class="col-md-6" id='left'>
                <div class="text1">
                    TAKE THE SILK ROAD TO
                </div>
                <div class="text2">
                    Digitizing Your Business Growth
                </div>
                <div class="text3">
                    {/* <p>------</p> */}
                    <img className='pic4' src='./Picture4.png' />
                    <span id='follow'>follow us</span>
                    <imgage class='follow1' src='./Picture5.png'></imgage>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                </div>
                <div>
                </div>
            </div>
            <div class="col-md-6" id='right'>
            <div>
                    <div class="text4">
                        Start A Conversation With Us
                    </div>
                </div>
                    <div class="input-container">
                        {/* <i class="fas fa-user icon"></i><br></br> */}
                        <imgage class="nameicon" src={Img3}> </imgage>
                        <input type="text" placeholder="Name*" />
                    </div>
        
                    <div class="input-container">
                        <i class="nameicon fa-solid fa-house icon"></i>
                        <input type="text" placeholder="Company Name*" />
                    </div>
        
                    <div class="input-container">
                        <i class="nameicon fas fa-envelope icon"></i>
                        <input type="email" placeholder="Email*"   />
                    </div>
        
                    <div class="input-container">
                        <i class="nameicon fas fa-phone icon"></i>
                        <input type="tel" placeholder="Phone*"  />
                    </div>
        
                    <div class="input-container">
                        <i class="nameicon fas fa-comment-alt icon"></i>
                        <input class='textcontainer' type="text" placeholder="Your Message*"  />
                </div>
        
                    <button onClick={handlesubmit} type="submit">submit</button>
                    
            </div>
        </div>
        </div>
        <div className='footertext'>
            <h3 >© Copyright 2024. All Rights reserved by Trinity Infotech | Policy
Developed by Shivam Batham , Arman Ali</h3>
        </div>
    </div>
  )
}

export default Form
