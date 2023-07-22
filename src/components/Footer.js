import React from 'react'
import logo from "../images/logo.png"
import {Link} from "react-router-dom"
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
              <li><Link to="/" className='linked-f'>Home</Link></li>
              <li><Link to="/about" className='linked-f'>About</Link></li>
              <li><Link to="/service" className='linked-f'>Services</Link></li>
              <li><Link to="/contact" className='linked-f'>Contact US</Link></li>
            </ul>
          </div>
          <div>
            <ul>
              <li className='linked-f'>License</li>
              <li className='linked-f'>Changelog</li>
              <li className='linked-f'>Password</li>
              <li className='linked-f'>Privacy policy</li>
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
              <a href="https://www.facebook.com/" target='_blank' rel="noreferrer"><Icon icon="ic:baseline-facebook"  className='icon'/></a>
              <a href="https://mail.google.com/" target='_blank' rel="noreferrer"><Icon icon="ic:round-mail"  className='icon'/></a>
              <a href="https://www.instagram.com/" target='_blank' rel="noreferrer"><Icon icon="ri:instagram-line"  className='icon'/></a>
              <a href="https://www.linkedin.com/" target='_blank' rel="noreferrer"><Icon icon="mdi:linkedin"  className='icon'/></a>
              <a href="https://twitter.com/" target='_blank' rel="noreferrer"><Icon icon="mdi:twitter"  className='icon'/></a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
