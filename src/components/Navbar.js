import React, {useState} from 'react'
import logo from "../images/logo.png"
import { Icon } from '@iconify/react';
import "../css/Navbar.css"
import "../css/Button.css"


const Navbar = () => {

  const [navToggle,setNavToggle] = useState(true)
  const menuclick = () => {
    if(navToggle){
      setNavToggle(false)
    }
    else{
      setNavToggle(true)
    }
  }
  return (
    <div>
      <div className='navbar-div'>
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
              <button className='btn-1'>Contact Us</button>
            <div className='hamburger'>
              <Icon icon={navToggle ? "icon-park:hamburger-button"  : "ep:close-bold"} className='menu-btn' width="64" onClick={menuclick} />
            </div>
        </div>
      </div>
      <div className={navToggle ? "menu-container-hide "  : "menu-container-show"}>
        <ul className='nav-menu'>
          <li className='link-menu'>Home</li>
          <div className='link-contain'>
          <hr className='link-divide'/>
          </div>
          <li className='link-menu'>About</li>
          <div className='link-contain'>
          <hr className='link-divide'/>
          </div>
          <li className='link-menu'>Services</li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Navbar
