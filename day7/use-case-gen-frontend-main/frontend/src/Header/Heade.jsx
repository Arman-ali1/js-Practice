import React ,{useState}from 'react'
// import {Link, NavLink } from 'react-router-dom'
import './Header.css'


function Header() {

    let login="Log in"
    // const location = useLocation();
    // const userData = location.state?.UserStatus || {};
    const[isActive,setIsActive]=useState(false)

    const handleenquery=()=>{
      alert('we will contact u soon')
    }

  return (
    <div >
      <div className="container">
        <div className='navlist'>
          
          <div className='logo' >
            <img src="./1.png" alt="Description of the image" className='img1' />
            <p className='webistic'>webistic</p>
          </div>
          <div className='nav' >
              <a href='/' className='lists'> Home</a>
              <a href='/' className='lists'> About</a>
              <a href='/' className='lists'> Consulting</a>
              <a href='/' className='lists'> Service</a>
              <a href='/' className='lists'> Hire Experts</a>
              <a href='/' className='lists'> Portfolio</a>
              <a href='/' className='lists'> Contact Us</a>
              <a href='/' className='lists'> FAQ</a>
          </div>
          <div className='nav' >
              <a onClick={handleenquery} className='rightnav'> Enquiry</a>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Header
