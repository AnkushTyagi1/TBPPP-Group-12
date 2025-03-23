import React from 'react'
import { Link } from 'react-router-dom'
import './SideBar.css'
import { useEffect } from 'react'

const Sidebar = ({hamBurger,setHamBurger}) => {

const handleResize = () => {
        if (window.innerWidth > 768) {
                setHamBurger(false); 
        }
        };
        
        useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
                window.removeEventListener('resize', handleResize);
        };
        }, []);


    function toggleSideBar(){
        const width = window.innerWidth;
        if(width>768){
        setHamBurger(false);
        }
        else
        setHamBurger(!hamBurger);

    }

  return (
      <div className='sideBar'
      style={{
        transform: hamBurger ? "translateX(0%)" : "translateX(100%)",
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
            <Link to='/menu' className='navLink' onClick={toggleSideBar}>
                    MenuCard
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
            <Link to='/feedback' className='navLink' onClick={toggleSideBar}>
                    Feedback
            </Link>
                    </li>
                    
            </ul>
    </div>
  )
}

export default Sidebar
