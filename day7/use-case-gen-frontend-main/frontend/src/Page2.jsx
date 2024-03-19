import React from 'react';
import './Page2.css';
import Image1 from './assets/Image1.png';

export const Page2 = () => {


  const handlesubmit=()=>{
    alert("Form Submitted Successfully");
  }

  return (
    <div className="Page2-container">
      <header className="header-section">
      <h1>WHICH PACKAGE DO <span style={{ color: '#701ABC' }}>I CHOOSE?</span>
</h1>
</header>
<div className="questions-section">
        <div className="left1">
        <p>Excellent! It is normal to get confused about the package you should choose. <br/>
         But we'll make this easier for you. Just answer these questions: <br/>
         
        <p>
        What are your business goals?<br/>
        Who, what, and where is your target customer? <br/>
        How much are you willing to spend?<br/>
        </p>


        As we learn more about you and your business, we help you determine <br/>the package best suited to your needs.</p>
          <button onClick={handlesubmit} className="action-button">Get Started Now</button>
        </div>
        <div className="right1">
        <img className="image" src={Image1} alt="Image1" />
        </div>
      </div>
      <div className="bottom-section">
      <h1 className="bottom-section-heading">
        WHAT DO OUR <span style={{ color: '#701ABC' }}>AFFORDABLE</span> PACKAGES <br/>
        <span className="second-line">FOR DIGITAL <span style={{ color: '#701ABC' }}>SERVICE INCLUDE?</span></span>
      </h1>
      </div>
    </div>
  )
}
export default Page2;