import React from 'react'
import "../css/Button.css"
import "../css/Home.css"
import imgB1 from "../images/pexels-anamul-rezwan-1216589.jpg"
import imgS1 from "../images/pexels-kindel-media-9875412.jpg"
import imgS2 from "../images/pexels-ksenia-chernaya-5691592.jpg"
import imgS3 from "../images/pexels-medhat-ayad-447592.jpg"
import ServiceDiv from './ServiceDiv'


export default function Home() {
  return (
    <div>
      <div className='hero'>
        <h1 className='hero-h'>
            Experienced Craftsmen for all <br/> your Construction needs
        </h1>
        <p className='hero-p'>
            We provide comprehensive construction services to <br/> meet all of your needs. From residential remodelling <br/> to commercial construction.
        </p>
        <div className='heroBtn-div'>
            <button className='btn-2'>Learn more</button>
            <button className='btn-3'>Our Services</button>
        </div>
      </div>
      <div className='blog-1'>
        <div>
          <h2 className='b1-h'>Our Vision</h2>
          <h4 className='b1-sh'>At Apex, our vision is to be a leading player in the <br/> construction industry, known for delivering projects of <br/> exceptional quality and value.</h4>
          <ul className='b1-list'>
            <li>Lead in construction quality and timely delivery</li>
            <li>Maintain high safety and environmental standards</li>
            <li>Invest in technology and process improvement</li>
          </ul>
        </div>
        <img src={imgB1} alt="b1-img" className='b1-img' />
      </div>
      <ServiceDiv title="Our Services" img1={imgS1} title1="Solar Installation" img2={imgS2} title2="Painting" img3={imgS3} title3="Interior Design"/>
    </div>
  )
}
