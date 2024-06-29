import React, { useState } from 'react'
import logo from '../assets/Logo.svg';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
    }
  return (
    <nav className= {`navbar ${menuOpen ? "open" : ""}`}>
        <a href="#" className='logo'><img src= {logo} alt="logo"></img></a>
        {/* For mobile navbar */}
        <div className='menu-icon' onClick={toggleMenu}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>
        {/* navbar */}
        <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Services</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        

    </nav>
  )
}

export default Nav