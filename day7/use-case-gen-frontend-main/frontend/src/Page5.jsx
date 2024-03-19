import React from 'react';
import './Page5.css';
import Image4 from './assets/Image4.png';
import Image5 from './assets/Image5.png';
import Image6 from './assets/Image6.png';


function Page5() {

  const handlesubmit=()=>{
    alert("We will contact you soon!");
  }

  return (
    <div className="Page5-container">
      {/* First Section */}
      <div className="section1">
        <div className="left">
          {/* Image for the first section */}
          <img src={Image4} alt="Image4" />
        </div>
        <div className="right">
          {/* Heading, Paragraph, and Button for the first section */}
          <h2>1. Tell us about your business</h2>
          <p>Start by telling us a little about your <br/> business, and we'll begin designing your <br/> website in as little as 48 hours.
            <br/>
            <br/>
All we need are a few details including:
<br/>
<br/>

Your business name
<br/> A brief description of your company <br/> Core products and services
</p>
          <button onClick={handlesubmit} className="action-button">Get Started Now</button>
        </div>
      </div>

      {/* Second Section */}
      <div className="section2">
        <div className="left">
          {/* Heading, Paragraph, and Button for the second section */}
          <h2>2. We design your website for 
            <br/>FREE</h2>
          <p>Our designers get to work putting together <br/>a beautiful website design based on your <br/>input and any information you provided. <br/>Don't worry you will have a chance <br/> to review the site and make changes. <br/>
          <br/>

Unlike other website design firms, we <br/>actually let you preview your new website <br/> for free. This ensures you know exactly <br/> what you're getting and are 100% satisfied <br/> before you pay us a dime</p>
          <button onClick={handlesubmit} className="action-button">Get Started Now</button>
        </div>
        <div className="right">
        <img src={Image5} alt="Image5" />
        </div>
      </div>

      {/* Third Section */}
      <div className="section3">
        <div className="left">
          {/* Image for the third section */}
          <img src={Image6}alt="Image6" />
        </div>
        <div className="right">
          {/* Heading, Paragraph, and Button for the third section */}
          <h2>3. Review your site and go live</h2>
          <p>Once you approve the design and submit payment, <br/> we will make any changes, add content, <br/>complete your site, connect your domain <br/>and publish your site for the world to see! <br/>
          <br/>

Our work doesn't stop there. We handle <br/>everything including ongoing monthly updates, <br/>hosting and site security to keep <br/>your site looking great, up-to-date and safe <br/>from hackers.</p>
          <button onClick={handlesubmit} className="action-button">Get Started Now</button>
        </div>
      </div>
    </div>
  );
}

export default Page5;
