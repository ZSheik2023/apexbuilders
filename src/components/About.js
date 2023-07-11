import React from 'react'
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
  return (
    <div>
      <div className='Ablog-1'>
        <h1>About Us</h1>
      </div>
      <div className='Ablog-2'>
        <div>
          <h2>Building for future</h2>
          <p>Our company has a rich history of success, built on a foundation of <br /> hard work, honesty, and a passion for construction. <br /><br /><br />
            At Apex, we are committed to building structures that stand the <br /> test of time. Our team of experienced professionals is dedicated to <br /> delivering high-quality construction projects that exceed our clients'<br /> expectations. We believe in the power of purposeful construction, <br /> and we work tirelessly to ensure that each and every project we <br /> undertake is built with a clear goal in mind.</p>
          <button className='btn-6'>Our Services</button>
        </div>
        <img src={imgB2} alt="this is a b2 img" />
      </div>
      <div className='Ablog-3'>
        <h2>Apex Philosophy</h2>
        <p>At Apex, our mission is to revolutionize the construction industry by developing innovative solutions that improve safety, efficiency, and sustainability. We believe that construction should be a collaborative process that prioritizes the well-being of everyone involved, from workers to clients and the environment.<br /><br />

          Our goal is to provide construction professionals with tools and technologies that make their jobs easier, safer, and more sustainable. We are committed to staying on the cutting edge of industry trends and technologies, so we can continue to deliver the most advanced and effective solutions to our clients.<br /><br />

          Our philosophy is grounded in the values of innovation, collaboration, and sustainability. We strive to be leaders in our industry by constantly seeking out new technologies, materials, and methods that allow us to deliver projects more efficiently and effectively.<br /><br />

          Whether you're a contractor, engineer, architect, or building owner, we're here to help you achieve your construction goals with the latest and most effective tools and technologies available.</p>
      </div>
      <div className='Ablog-4'>
        <img src={imgB4} alt="this is a imgB4" />
        <div>
          <h2>Constructing a Better <br /> Tomorrow</h2>
          <p>A project focused on using construction-related <br /> efforts to improve the future, such as sustainable <br /> building practices and infrastructure development.</p>
          <ul>
            <li>Sustainable building practices</li>
            <li>Livable, sustainable cities</li>
            <li>Safe and relaible Construction</li>
          </ul>
          <button className='btn-4'>Contact Us</button>
        </div>
      </div>
      <ServiceDiv title="Our Services" img1={imgS1} title1="Solar Installation" img2={imgS2} title2="Painting" img3={imgS3} title3="Interior Design" visibilityst1="none" visibilityst2="none" visibilityst3="none" />
      <div className='Ablog-5'>
        <h2>The Map for your <br /> Dream Home</h2>
        <div className='Ab-5div'>
          <div>
            <h3>Schedule Appointment</h3>
            <p>A meeting organized at a specific time <br /> and place to discuss a specific topic or <br /> to carry out a task, which is <br />prearranged through various means <br /> such as email, phone calls.</p>
          </div>
          <div>
            <h3>Business Consultation</h3>
            <p>It is provides professional expertise <br /> and guidance to improve business <br /> operations, strategies, and <br /> performance. Consultants work <br />closely with clients.</p>
          </div>
          <div>
            <h3>Start Your Projects</h3>
            <p>It has motivates individuals or <br /> organizations to identify opportunities, <br /> develop plans, allocate resources, and <br /> take proactive steps to turn ideas into <br /> successful initiatives.</p>
          </div>
        </div>
      </div>
      <ServiceDiv title="Our Services" img1={imgS4} title1="Jake Warner" img2={imgS5} title2="Linda Rose" img3={imgS6} title3="George will" st1="Chairman" st2="Senior Engineer" st3="Architect" visibility="none" />
      <div className='Ablog-6'>
        <h2>INTERNATIONAL AWARDS</h2>
        <div>
          <ul>
            <li>Green Globes Award</li>
            <li>ENR Global Best Projects Award</li>
            <li>International Safety Award</li>
            <li>World Architecture Festival Award</li>
            <li>Global Good Award</li>
          </ul>
          <ul>
            <li>BREEAM Award</li>
            <li>The Structural Awards</li>
            <li>Energy Globe Award</li>
            <li>The Constructor Award</li>
            <li>RIBA International Prize</li>
          </ul>
          <ul>
            <li>Skyscraper of the Year Award</li>
            <li>Building of the Year Award</li>
            <li>The Civic Trust Awards</li>
            <li>Construction Computing Awards</li>
            <li>LEED Platinum Certification</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
