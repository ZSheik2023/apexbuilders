import React,{useEffect} from 'react'
import {Link} from "react-router-dom"
import AOS from "aos"
import "aos/dist/aos.css"
import "../css/About.css"
import "../css/Button.css"
import ServiceDiv from './ServiceDiv'
import imgS1 from "../images/pexels-kindel-media-9875412.jpg"
import imgS2 from "../images/pexels-ksenia-chernaya-5691592.jpg"
import imgS3 from "../images/pexels-medhat-ayad-447592.jpg"
import imgS4 from "../images/pexels-andrea-piacquadio-3931131.jpg"
import imgS5 from "../images/pexels-kindel-media-8487764.jpg"
import imgS6 from "../images/pexels-mikael-blomkvist-8960992.jpg"
import imgB2 from "../images/pexels-anete-lusina-4792479.jpg"
import imgB4 from '../images/pexels-mikael-blomkvist-8961343.jpg'

export default function About() {
  document.title = "Apex Buliders - About"
  useEffect(()=>{
    AOS.init({duration:600})
  },[])
  return (
    <div>
      <div className='Ablog-1'>
        <h1 data-aos="zoom-out" data-aos-duration="1000" data-aos-once="true" data-aos-offset="80">About Us</h1>
      </div>
      <div className='Ablog-2'>
        <div>
          <h2 data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" data-aos-offset="80">Building for future</h2>
          <p data-aos="fade-right" data-aos-duration="1100" data-aos-once="true" data-aos-offset="80">Our company has a rich history of success, built on a foundation of  hard work, honesty, and a  passion for construction. <br /><br /><br />
            At Apex, we are committed to building structures that stand the test of time. Our team of experienced professionals is dedicated to delivering high-quality construction projects that exceed our clients' expectations. We believe in the power of purposeful construction, and we work tirelessly to ensure that each and every project we undertake is built with a clear goal in mind.</p>
            <Link to="/service"  ><button className='btn-6'data-aos="fade-right" data-aos-duration="00" data-aos-once="true" data-aos-offset="80">Our Services</button></Link>
        </div>
        <img src={imgB2} alt="this is a b2 img" data-aos="zoom-out" data-aos-duration="1000" data-aos-once="true" data-aos-offset="80"/>
      </div>
      <div className='Ablog-3'>
        <h2 data-aos="fade-right" data-aos-duration="500" data-aos-once="true" data-aos-offset="80">Apex Philosophy</h2>
        <p data-aos="fade-up" data-aos-duration="600" data-aos-once="true" data-aos-offset="80">At Apex, our mission is to revolutionize the construction industry by developing innovative solutions that improve safety, efficiency, and sustainability. We believe that construction should be a collaborative process that prioritizes the well-being of everyone involved,from workers to clients and the environment.<br /><br />

          Our goal is to provide construction professionals with tools and technologies that make their jobs easier, safer, and more sustainable. We are committed to staying on the cutting edge of industry trends and technologies, so we can continue to deliver the most advanced and effective solutions to our clients.<br /><br />

          Our philosophy is grounded in the values of innovation, collaboration, and sustainability. We strive to be leaders in our industry by constantly seeking out new technologies, materials, and methods that allow us to deliver projects more efficiently and effectively.<br /><br />

          Whether you're a contractor, engineer, architect, or building owner, we're here to help you achieve your construction goals with the latest and most effective tools and technologies available.</p>
      </div>
      <div className='Ablog-4'>
        <img src={imgB4} alt="this is a imgB4" data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" data-aos-offset="80"/>
        <div>
          <h2 data-aos="fade-right" data-aos-duration="500" data-aos-once="true" data-aos-offset="80">Constructing a Better <br /> Tomorrow</h2>
          <p data-aos="fade-right" data-aos-duration="500" data-aos-once="true" data-aos-offset="80">A project focused on using construction-related <br /> efforts to improve the future, such as sustainable <br /> building practices and infrastructure development.</p>
          <ul>
            <li data-aos="fade-right" data-aos-duration="500" data-aos-once="true" data-aos-offset="80">Sustainable building practices</li>
            <li data-aos="fade-right" data-aos-duration="600" data-aos-once="true" data-aos-offset="80">Livable, sustainable cities</li>
            <li data-aos="fade-right" data-aos-duration="700" data-aos-once="true" data-aos-offset="80">Safe and relaible Construction</li>
          </ul>
          <Link to="/contact"  ><button className='btn-4' data-aos="fade-right" data-aos-duration="500" data-aos-once="true" data-aos-offset="80">Contact Us</button></Link>
        </div>
      </div>
      <ServiceDiv title="Our Services" img1={imgS1} title1="Solar Installation" img2={imgS2} title2="Painting" img3={imgS3} title3="Interior Design" visibilityst1="none" visibilityst2="none" visibilityst3="none" />
      <div className='Ablog-5'>
        <h2 data-aos="fade-right" data-aos-duration="500" data-aos-once="true" data-aos-offset="80">The Map for your <br /> Dream Home</h2>
        <div className='Ab-5div'>
          <div data-aos="fade-right" data-aos-duration="500" data-aos-once="true" data-aos-offset="80">
            <h3>Schedule Appointment</h3>
            <p>A meeting organized at a specific time <br /> and place to discuss a specific topic or <br /> to carry out a task, which is <br />prearranged through various means <br /> such as email, phone calls.</p>
          </div>
          <div data-aos="fade-left" data-aos-duration="500" data-aos-once="true" data-aos-offset="80">
            <h3>Business Consultation</h3>
            <p>It is provides professional expertise <br /> and guidance to improve business <br /> operations, strategies, and <br /> performance. Consultants work <br />closely with clients.</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="500" data-aos-once="true" data-aos-offset="80">
            <h3>Start Your Projects</h3>
            <p>It has motivates individuals or <br /> organizations to identify opportunities, <br /> develop plans, allocate resources, and <br /> take proactive steps to turn ideas into <br /> successful initiatives.</p>
          </div>
        </div>
      </div>
      <ServiceDiv title="Our Services" img1={imgS4} title1="Jake Warner" img2={imgS5} title2="Linda Rose" img3={imgS6} title3="George will" st1="Chairman" st2="Senior Engineer" st3="Architect" visibility="none" />
      <div className='Ablog-6'>
        <h2 data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" data-aos-offset="80">INTERNATIONAL AWARDS</h2>
        <div>
          <ul>
            <li data-aos="fade-right" data-aos-duration="500" data-aos-once="true" data-aos-offset="80">Green Globes Award</li>
            <li data-aos="fade-right" data-aos-duration="600" data-aos-once="true" data-aos-offset="80">ENR Global Best Projects Award</li>
            <li data-aos="fade-right" data-aos-duration="700" data-aos-once="true" data-aos-offset="80">International Safety Award</li>
            <li data-aos="fade-right" data-aos-duration="800" data-aos-once="true" data-aos-offset="80">World Architecture Festival Award</li>
            <li data-aos="fade-right" data-aos-duration="900" data-aos-once="true" data-aos-offset="80">Global Good Award</li>
          </ul>
          <ul>
            <li data-aos="fade-right" data-aos-duration="500" data-aos-once="true" data-aos-offset="80">BREEAM Award</li>
            <li data-aos="fade-right" data-aos-duration="600" data-aos-once="true" data-aos-offset="80">The Structural Awards</li>
            <li data-aos="fade-right" data-aos-duration="700" data-aos-once="true" data-aos-offset="80">Energy Globe Award</li>
            <li data-aos="fade-right" data-aos-duration="800" data-aos-once="true" data-aos-offset="80">The Constructor Award</li>
            <li data-aos="fade-right" data-aos-duration="900" data-aos-once="true" data-aos-offset="80">RIBA International Prize</li>
          </ul>
          <ul>
            <li data-aos="fade-right" data-aos-duration="500" data-aos-once="true" data-aos-offset="80">Skyscraper of the Year Award</li>
            <li data-aos="fade-right" data-aos-duration="600" data-aos-once="true" data-aos-offset="80">Building of the Year Award</li>
            <li data-aos="fade-right" data-aos-duration="700" data-aos-once="true" data-aos-offset="80">The Civic Trust Awards</li>
            <li data-aos="fade-right" data-aos-duration="800" data-aos-once="true" data-aos-offset="80">Construction Computing Awards</li>
            <li data-aos="fade-right" data-aos-duration="900" data-aos-once="true" data-aos-offset="80">LEED Platinum Certification</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
