// Page3.jsx

import React from 'react';
import './Page6.css'; 

import FIMG1 from './assets/FIMG1.png';
import FIMG2 from './assets/FIMG2.png';
import FIMG3 from './assets/FIMG3.png';
import FIMG4 from './assets/FIMG4.png';
import FIMG5 from './assets/FIMG5.png';
import FIMG6 from './assets/FIMG6.png';
import FIMG7 from './assets/FIMG7.png';
import FIMG8 from './assets/FIMG8.png';
import FIMG9 from './assets/FIMG9.png';
import FIMG10 from './assets/FIMG10.png';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Page6 = () => {
  return (
    <div className="page6-container">
      <h6 className="center-heading">Our Work</h6>
      <h1><span style={{ color: '#701ABC' }}>Featured </span>Website Design Projects</h1>
      <h3>Custom B2C, B2B and eCommerce solutions</h3>
      <h2>optimized for traffic, engagement and conversion.</h2>

      <div className="icons-section">
        <div className="icon">
          
          <StarOutlineIcon style={{ fontSize: 30 }}/>
          <p>FEATURED</p>
        </div>
        <div className="icon">
          <HandshakeOutlinedIcon style={{ fontSize: 30 }}/>
          <p>B2B</p>
        </div>
        <div className="icon">
        <AccountBalanceWalletOutlinedIcon style={{ fontSize: 30 }}/>
          <p>B2C</p>
        </div>
        <div className="icon">
          {/* Add your icon component or image here */}
          <ShoppingCartOutlinedIcon style={{ fontSize: 30 }}/>
          <p>ECOMMERCE</p>
        </div>
      </div>

      <div className="images-section">
        <div className="image-container">
          <img src= {FIMG1 }alt="FIMG1 " />
        </div>
        <div className="image-container">
          <img src={FIMG2} alt="FIMG2" />
        </div>
        <div className="image-container">
          <img src={FIMG9 } alt="FIMG9" />
        
        </div>
        <div className="image-container">
          <img src={FIMG10 } alt="FIMG10" />
          
        </div>
        <div className="image-container">
          <img src={FIMG3 } alt="FIMG3" />
         
        </div>
        <div className="image-container">
          <img src={FIMG4 } alt="FIMG4" />
      
        </div>
        <div className="image-container">
          <img src={FIMG5 } alt="FIMG5" />
         
        </div>
      
        <div className="image-container">
          <img src={FIMG6 } alt="FIMG6" />
        
        </div>
        <div className="image-container">
          <img src={FIMG7 } alt="FIMG7" />
      
        </div>
        <div className="image-container">
          <img src={FIMG8 } alt="FIMG8" />
          
        </div>
      </div>
    </div>
  );
};

export default Page6;
