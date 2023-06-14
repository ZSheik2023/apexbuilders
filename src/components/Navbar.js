import React from 'react'
import logo from "../images/logo.png"
import { Icon } from '@iconify/react';
import "../css/Navbar.css"

const Navbar = () => {
  return (
    <div>
      <div className='Navbar'>
        <div className='logo'>
            <img src={logo} className='logo' alt='logo'/>
        </div>
        <div>
            <ul className='menu'>
                <li className='link'>Home</li>
                <li className='link'>About</li>
                <li className='link'>Services</li>
            </ul>
        </div>
        <div className='Nav-btns'>
            <button className='contact-btn'>Contact Us</button>
            <Icon icon="icon-park:hamburger-button" className='Nav-menu' width="64" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
