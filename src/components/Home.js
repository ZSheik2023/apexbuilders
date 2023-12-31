import React, {useEffect} from 'react'
import {Link} from "react-router-dom"
import AOS from "aos"
import "aos/dist/aos.css"
import "../css/Button.css"
import "../css/Home.css"
import imgB1 from "../images/pexels-anamul-rezwan-1216589.jpg"
import imgS1 from "../images/pexels-kindel-media-9875412.jpg"
import imgS2 from "../images/pexels-ksenia-chernaya-5691592.jpg"
import imgS3 from "../images/pexels-medhat-ayad-447592.jpg"
import imgS4 from "../images/pexels-andrea-piacquadio-3931131.jpg"
import imgS5 from "../images/pexels-kindel-media-8487764.jpg"
import imgS6 from "../images/pexels-mikael-blomkvist-8960992.jpg"
import ServiceDiv from './ServiceDiv'


export default function Home() {
  document.title = "Apex Buliders - Home"
  useEffect(()=>{
    AOS.init({duration:600})
  },[])
  return (
    <div className='home-page'>
      <div className='hero'>
        <h1 className='hero-h'data-aos="fade-up" data-aos-duration="500">
          Experienced Craftsmen for all <br /> your Construction needs
        </h1>
        <p className='hero-p'data-aos="fade-up" data-aos-duration="800">
          We provide comprehensive construction services to <br /> meet all of your needs. From residential remodelling <br /> to commercial construction.
        </p>
        <div className='heroBtn-div'>
        <Link to="/about" ><button className='btn-2' data-aos="fade-right" data-aos-duration="1000">Learn more</button></Link>
        <Link to="/service"  ><button className='btn-3' data-aos="fade-left" data-aos-duration="1000">Our Services</button></Link> 
        </div>
      </div>
      <div className='blog-1'>
        <div>
          <h2 className='b1-h'data-aos="fade-right" data-aos-duration="500"data-aos-once="true" data-aos-offset="80">Our Vision</h2>
          <h4 className='b1-sh' data-aos="fade-right" data-aos-duration="600"data-aos-once="true" data-aos-offset="80">At Apex, our vision is to be a leading player in the <br /> construction industry, known for delivering projects of <br /> exceptional quality and value.</h4>
          <ul className='b1-list'>
            <li data-aos="fade-right" data-aos-duration="800" data-aos-once="true" data-aos-offset="80">Lead in construction quality and timely delivery</li>
            <li data-aos="fade-right" data-aos-duration="900" data-aos-once="true" data-aos-offset="80">Maintain high safety and environmental standards</li>
            <li data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" data-aos-offset="80">Invest in technology and process improvement</li>
          </ul>
        </div>
        <img src={imgB1} alt="b1-img" className='b1-img' data-aos="zoom-out" data-aos-once="true"/>
      </div>
      <ServiceDiv title="Our Services" img1={imgS1} title1="Solar Installation" img2={imgS2} title2="Painting" img3={imgS3} title3="Interior Design" visibilityst1="none" visibilityst2="none" visibilityst3="none"/>
      <div className='blog-2'>
        <h2 className='b2-h'data-aos="fade-up" data-aos-duration="500" data-aos-once="true">Our Goals</h2>
        <div className='b2-div'>
          <div className='b2-box'data-aos="fade-right" data-aos-duration="500" data-aos-once="true" data-aos-offset="80">
            <p className='b2-p'> Expertly shaping the future <br /> of construction, one <br /> project at a time.</p>
          </div>
          <div className='b2-box'data-aos="fade-down" data-aos-duration="500" data-aos-once="true" data-aos-offset="80">
            <p className='b2-p'>Elevating construction <br /> through expert solutions <br /> and innovation.</p>
          </div>
          <div className='b2-box'data-aos="fade-left" data-aos-duration="500" data-aos-once="true" data-aos-offset="80">
            <p className='b2-p'> Empowering excellence <br /> through integrity, innovation, <br /> and teamwork.</p>
          </div>
        </div>
      </div>
      <div className='blog-3'>
        <div className='b3-div'>
        <h1 className='b3-h'data-aos="fade-down" data-aos-duration="500" data-aos-once="true">Industrial Achivements</h1>
        <h2 className='b3-sh'data-aos="fade-up" data-aos-duration="500" data-aos-once="true">Trustworthy & Reliable</h2>
        <p className='b3-p'data-aos="fade-down" data-aos-duration="500" data-aos-once="true" >The Apex website provides a comprehensive overview of the construction industry, including current <br /> trends, market analysis, and innovative solutions. Repel is a one-stop destination for everything <br /> related to the industry.</p>
          <div className='b3-div1'>
            <div>
              <h3 className='b3d-h'data-aos="fade-left" data-aos-duration="600" data-aos-once="true">130+</h3>
              <p className='b3d-p'data-aos="fade-right" data-aos-duration="800" data-aos-once="true">Completed Projects</p>
            </div>
            <div>
              <h3 className='b3d-h'data-aos="fade-left" data-aos-duration="600" data-aos-once="true">80+</h3>
              <p className='b3d-p'data-aos="fade-right" data-aos-duration="800" data-aos-once="true">Satisfied Clients</p>
            </div>
          </div>
          <div className='b3-div2'>
            <div>
              <h3 className='b3d-h'data-aos="fade-left" data-aos-duration="600" data-aos-once="true">15+</h3>
              <p className='b3d-p'data-aos="fade-right" data-aos-duration="800" data-aos-once="true">On-going Projects</p>
            </div>
            <div>
              <h3 className='b3d-h'data-aos="fade-left" data-aos-duration="600" data-aos-once="true">40+</h3>
              <p className='b3d-p'data-aos="fade-right" data-aos-duration="800" data-aos-once="true">Government Projects</p>
            </div>
          </div>
          </div>
        </div>
        <div className='blog-4' data-aos="zoom-in" data-aos-duration="500" data-aos-once="true">
          <div className='b4-div1'>
            <h2>Do you have a project <br/> to discuss?</h2>
            <Link to="/contact"  ><button>learn more</button></Link>
          </div>
        </div>
        <ServiceDiv title="Our Services" img1={imgS4} title1="Jake Warner" img2={imgS5} title2="Linda Rose" img3={imgS6} title3="George will" st1="Chairman" st2="Senior Engineer" st3="Architect" visibility="none"/>
        <div>
        <div className='blog-5'>
          <div className='b5-div' >
          <div>
            <h2 data-aos="fade-left" data-aos-duration="500" data-aos-once="true">Construction Solutions for Every Need</h2>
            <p data-aos="fade-right" data-aos-duration="600" data-aos-once="true">From design to completion, our customized construction <br/> solutions meet all your needs</p>
            <Link to="/contact"  ><button className='btn-5' data-aos="fade-down" data-aos-duration="800" data-aos-once="true">Contact Us</button></Link>
          </div>
          </div>
        </div>
        </div>
    </div>
  )
}
