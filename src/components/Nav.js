import React, { useState } from 'react';
import logo from '../assets/Logo.svg';
import Login from './Login';
import './Nav.css';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleLogin = () => {
    setLoginOpen(!loginOpen);
  };

  return (
    <>
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <a href="/" className='logo'><img src={logo} alt="logo" /></a>
        <div className='menu-icon' onClick={toggleMenu}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
        <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><button onClick={toggleLogin}>Login</button></li>
        </ul>
      </nav>
      <Login isOpen={loginOpen} onClose={toggleLogin} />
    </>
  );
};

export default Nav;
