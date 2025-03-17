import React from 'react'
import gff from '../assets/gff.png'
import { Link } from 'react-router-dom'
// import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import './Nav.css';


const Nav = ({hamBurger,setHamBurger}) => {

        function toggleSideBar(){
                setHamBurger(!hamBurger)
        }
    
  return (
    <div className='nav'>
        <div className='left'>
            <Link to='/' className='navLink'>
            {/* <img src={gff}></img> */}
            <img src={gff} alt="Website logo" />

            </Link>
        </div>
        <nav className='right'>
            <ul>
                
                <li>
            <Link to='/' className='navLink'>
                    Home
            </Link>
                    </li>
                
                <li>
            <Link to='/about' className='navLink'>
                    About
            </Link>
                    </li>
                
                <li>
            <Link to='/product' className='navLink'>
                    Product
            </Link>
                    </li>
                
                <li>
            <Link to='/sustainability' className='navLink'>
                    Sustainability
            </Link>
                    </li>
                
                <li>
            <Link to='/feedback' className='navLink'>
                    Feedback
            </Link>
                    </li>
                    
            </ul>
                      
        </nav>
            <GiHamburgerMenu className='ham' onClick={toggleSideBar}/>
    </div>
  )
}

export default Nav
