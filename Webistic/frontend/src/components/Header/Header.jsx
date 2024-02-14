import React ,{useState}from 'react'
// import {Link, NavLink } from 'react-router-dom'
import './Header.css'


function Header() {

    let login="Log in"
    // const location = useLocation();
    // const userData = location.state?.UserStatus || {};
    const[isActive,setIsActive]=useState(false)


  return (
    <div >
      <div className="container">
        <div className='navlist'>
          
          <div className='logo' >
            <img src="./1.png" alt="Description of the image" className='img1' />
          </div>
          <div className='nav' >
              <a className='lists'> Home</a>
              <a className='lists'> About</a>
              <a className='lists'> Consulting</a>
              <a className='lists'> Service</a>
              <a className='lists'> Hire Experts</a>
              <a className='lists'> Portfolio</a>
              <a className='lists'> Contact Us</a>
              <a className='lists'> FAQ</a>
          </div>
          <div className='nav' >
              <a className='rightnav'> Enquiry</a>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Header
