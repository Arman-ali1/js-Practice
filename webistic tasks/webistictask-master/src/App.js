// // App.js

import React from 'react';
import './App.css'; // Create a new App.css file for your 
import icon1 from './iconk1.png';
import icon2 from './ricon2.png';
import icon3 from './iconk3.png';
import icon4 from './iconk4.png';
import icon5 from './iconk5.png';
import icon6 from './iconk6.png'
function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div>
              <img src={icon1} alt="" />
          </div>
          <span>Qualitative Services</span>
          <div>We focus on quality 100%. Don't like it? We change it immediately.</div>

          <div>
          <img src={icon2} alt="" />
          </div>
          <span>Scalable Operations</span>
          <div>Your website speaks! With our unique and eye-catching designs, attract business from all over the world</div>
          <div>
          <img src={icon3} alt="" />
          </div>
          <span>Dedicated Project Manager</span>
          <div>Need assistance now? We're on it! Your assigned project manager is here to cater to your individual requirements.</div>
        </div>
        <div className="col-md-6" style={{ paddingLeft: '25px' }}>
        <div>
          <img src={icon4} alt="" />
          </div>
          <span>Well-Documented NDA</span>
          <div>Privacy matters most! We make sure to keep your project strictly unique with our thorough non-disclosure agreements</div>

           <div>
          <img src={icon5} alt="" />
          </div> 
          <span>Quick Turnaround Time</span>
          <div>Working on a time crunch? You have come to the right place. We work faster than you imagine</div>
          <div>
          <img src={icon6} alt="" />
          </div> 
          <span>Agency-Centric Processes</span>
          <div>Our emphasis is solely on your unique needs. Difficult requirements? We work to deliver beyond your expectations.</div>
          <div>
            <button>LET'S GET STARTED</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
