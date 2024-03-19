// Footer.jsx

import React from 'react';
import './Footer.css'; 
import Icon1 from './assets/Icon1.png';
import Icons2 from './assets/Icons2.png';
import Icons3 from './assets/Icons3.png';
import Icons4 from './assets/Icons4.png';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <div className="icon">
<img src={Icon1} alt="Icon1" />
        </div>
        <h3>Save Time</h3>
        <p>Many businesses try to build a website themselves, however they
              end up spending so much time trying to figure it all out. Save
              time by delegating your website to the professionals.</p>
      </div>

      <div className="footer-section">
        <div className="icon">
        <img src={Icons2} alt="Icons2" />
        </div>
        <h3>Save Money</h3>
        <p>You don't have to take out a loan or break the bank to have a
              professional and modern web presence. Our prices are a fraction
              of what other website design firms charge.
</p>
      </div>

      <div className="footer-section">
        <div className="icon"><img src={Icons3} alt="Icons3" />
        </div>
        <h3>Look Professional</h3>
        <p>People judge books by their cover. Most businesses don't realize
              the importance of having a professionally designed website. You
              could be losing potential clients with an outdated or DIY
              website..</p>
      </div>

      <div className="footer-section">
        <div className="icon">
        <img src={Icons4} alt="Icons4" />
        </div>
        <h3>Grow Your Business</h3>
        <p>Our websites don't just look great, they're designed to grow your
              business. Start attracting more customers online with a beautiful,
              search-optimized website for your business.</p>
      </div>
    </div>
  );
};

export default Footer;
