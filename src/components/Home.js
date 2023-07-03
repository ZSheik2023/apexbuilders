import React from 'react'
import "../css/Button.css"
import "../css/Home.css"
import imgB1 from "../images/pexels-anamul-rezwan-1216589.jpg"
import imgS1 from "../images/pexels-kindel-media-9875412.jpg"
import imgS2 from "../images/pexels-ksenia-chernaya-5691592.jpg"
import imgS3 from "../images/pexels-medhat-ayad-447592.jpg"
import imgS4 from "../images/pexels-andrea-piacquadio-3931131.jpg"
import imgS5 from "../images/pexels-kindel-media-8487764.jpg"
import imgS6 from "../images/pexels-mikael-blomkvist-8960992.jpg"
import imgB51 from "../images/construction-truck-2.png"
import imgB52 from "../images/construction-truck-1.png"
import ServiceDiv from './ServiceDiv'


export default function Home() {
  return (
    <div>
      <div className='hero'>
        <h1 className='hero-h'>
          Experienced Craftsmen for all <br /> your Construction needs
        </h1>
        <p className='hero-p'>
          We provide comprehensive construction services to <br /> meet all of your needs. From residential remodelling <br /> to commercial construction.
        </p>
        <div className='heroBtn-div'>
          <button className='btn-2'>Learn more</button>
          <button className='btn-3'>Our Services</button>
        </div>
      </div>
      <div className='blog-1'>
        <div>
          <h2 className='b1-h'>Our Vision</h2>
          <h4 className='b1-sh'>At Apex, our vision is to be a leading player in the <br /> construction industry, known for delivering projects of <br /> exceptional quality and value.</h4>
          <ul className='b1-list'>
            <li>Lead in construction quality and timely delivery</li>
            <li>Maintain high safety and environmental standards</li>
            <li>Invest in technology and process improvement</li>
          </ul>
        </div>
        <img src={imgB1} alt="b1-img" className='b1-img' />
      </div>
      <ServiceDiv title="Our Services" img1={imgS1} title1="Solar Installation" img2={imgS2} title2="Painting" img3={imgS3} title3="Interior Design" visibilityst1="none" visibilityst2="none" visibilityst3="none"/>
      <div className='blog-2'>
        <h2 className='b2-h'>Our Goals</h2>
        <div className='b2-div'>
          <div className='b2-box'>
            <p className='b2-p'> Expertly shaping the future <br /> of construction, one <br /> project at a time.</p>
          </div>
          <div className='b2-box'>
            <p className='b2-p'>Elevating construction <br /> through expert solutions <br /> and innovation.</p>
          </div>
          <div className='b2-box'>
            <p className='b2-p'> Empowering excellence <br /> through integrity, innovation, <br /> and teamwork.</p>
          </div>
        </div>
      </div>
      <div className='blog-3'>
        <h1 className='b3-h'>Industrial Achivements</h1>
        <h2 className='b3-sh'>Trustworthy & Reliable</h2>
        <p className='b3-p'>The Apex website provides a comprehensive overview of the construction industry, including current <br /> trends, market analysis, and innovative solutions. Repel is a one-stop destination for everything <br /> related to the industry.</p>
          <div className='b3-div1'>
            <div>
              <h3 className='b3d-h'>130+</h3>
              <p className='b3d-p'>Completed Projects</p>
            </div>
            <div>
              <h3 className='b3d-h'>80+</h3>
              <p className='b3d-p'>Satisfied Clients</p>
            </div>
          </div>
          <div className='b3-div2'>
            <div>
              <h3 className='b3d-h'>15+</h3>
              <p className='b3d-p'>On-going Projects</p>
            </div>
            <div>
              <h3 className='b3d-h'>40+</h3>
              <p className='b3d-p'>Government Projects</p>
            </div>
          </div>
        </div>
        <div className='blog-4'>
          <div className='b4-div1'>
            <h2>Do you have a project <br/> to discuss?</h2>
            <button>learn more</button>
          </div>
        </div>
        <ServiceDiv title="Our Services" img1={imgS4} title1="Jake Warner" img2={imgS5} title2="Linda Rose" img3={imgS6} title3="George will" st1="Chairman" st2="Senior Engineer" st3="Architect" visibility="none"/>
        <div className='blog-5'>
          <img src={imgB51} alt="" />
          <div>
            <h2>Construction Solutions for Every Need</h2>
            <p>From design to completion, our customized construction <br/> solutions meet all your needs</p>
            <button className='btn-5'>Contact Us</button>
          </div>
          <img src={imgB52} alt="" />
        </div>
    </div>
  )
}
