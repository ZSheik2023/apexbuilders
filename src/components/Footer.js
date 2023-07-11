import React from 'react'
import logo from "../images/logo.png"
import { Icon } from '@iconify/react';
import "../css/Footer.css"

export default function Footer() {
  return (
    <div className='footer-div'>
      <div className='footer'>
      <div>
        <img src={logo} alt="logo" className='footerlogo'/>
      </div>
      <div className='footer-subdiv'>
        <div>
          <h2 className='pages-h'>Pages</h2>
        <div className='pages-div'>
          <div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact US</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>License</li>
              <li>Changelog</li>
              <li>Password</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          </div>
        </div>
        <div>
          <div className='address-div'>
            <h3>Address :</h3>
            <p>4517 Washington Ave. <br/> Manchester, Kentucky 39495</p>
          </div>
          <div className='Social-div'>
            <h3>Social Media</h3>
            <div className='icon-div'>
              <Icon icon="ic:baseline-facebook"  className='icon'/>
              <Icon icon="ic:round-mail"  className='icon'/>
              <Icon icon="ri:instagram-line"  className='icon'/>
              <Icon icon="mdi:linkedin"  className='icon'/>
              <Icon icon="mdi:twitter"  className='icon'/>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
