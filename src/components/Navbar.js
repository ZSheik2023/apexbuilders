import React, {useState,useEffect} from 'react'
import logo from "../images/logo.png"
import { Icon } from '@iconify/react';
import {Link,NavLink,useLocation} from "react-router-dom"
import "../css/Navbar.css"
import "../css/Button.css"



const Navbar = () => {
  const [navToggle,setNavToggle] = useState(true)
  const closeNavbar = ()=>{
    setNavToggle(true)
  }
  const menuclick = () => {
    if(navToggle){
      setNavToggle(false)
    }
    else{
      setNavToggle(true)
    }
  }
  const{pathname} = useLocation();
  useEffect(() => {
    closeNavbar();
  }, [pathname]);
  return (
    <div>
      <div className='navbar-div'>
      <div className='Navbar'>
        <div className='navbar'>
        <div className='logo'>
            <Link to="/"><img src={logo} className='logo' alt='logo'/></Link>
        </div>
        <div>
            <ul className='menu'>
                <li className='link'><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink></li>
                <li className='link'><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About</NavLink></li>
                <li className='link'><NavLink to="/service" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Services</NavLink></li>
            </ul>
        </div>
        <div className='Nav-btns'>
              <Link to="/contact"><button className='btn-1'>Contact Us</button></Link>
            <div className='hamburger'>
              <Icon icon={navToggle ? "icon-park:hamburger-button"  : "ep:close-bold"} className='menu-btn' width="64" onClick={menuclick} />
            </div>
        </div>
        </div>
      </div>
      <div className={navToggle ? "menu-container-hide "  : "menu-container-show"}>
        <ul className='nav-menu'>
          <li className='link-menu'><Link to="/" className='linked'>Home</Link></li>
          <div className='link-contain'>
          <hr className='link-divide'/>
          </div>
          <li className='link-menu'><Link to="/about" className='linked'>About</Link></li>
          <div className='link-contain'>
          <hr className='link-divide'/>
          </div>
          <li className='link-menu'><Link to="/service" className='linked'>Services</Link></li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Navbar
