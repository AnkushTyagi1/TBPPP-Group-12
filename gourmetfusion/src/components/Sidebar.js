import React from 'react'
import { Link } from 'react-router-dom'
import './SideBar.css'

const Sidebar = ({hamBurger,setHamBurger}) => {
    function toggleSideBar(){
        setHamBurger(false);
    }

  return (
      <div className='sideBar'
      style={{
        transform: hamBurger ? "translateX(0%)" : "translateX(200%)",
        transition: "transform 0.3s ease",
        display: hamBurger ? "block" : "none"
      }}
      > 
            <ul>
                <li>
            <Link to='/' className='navLink' onClick={toggleSideBar}>
                    Home
            </Link>
                    </li>
                
                <li>
            <Link to='/about' className='navLink' onClick={toggleSideBar}>
                    About
            </Link>
                    </li>
                
                <li>
            <Link to='/product' className='navLink' onClick={toggleSideBar}>
                    Product
            </Link>
                    </li>
                
                <li>
            <Link to='/sustainability' className='navLink' onClick={toggleSideBar}>
                    Sustainability
            </Link>
                    </li>
                
                <li>
            <Link to='/contact' className='navLink' onClick={toggleSideBar}>
                    ContactUs
            </Link>
                    </li>
                    
            </ul>
    </div>
  )
}

export default Sidebar
