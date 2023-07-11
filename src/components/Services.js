import React from 'react'
import Service from './Service'
import { Icon } from '@iconify/react';
import imgS1 from "../images/pexels-kindel-media-9875412.jpg"
import imgS2 from "../images/pexels-ksenia-chernaya-5691592.jpg"
import imgS3 from "../images/pexels-medhat-ayad-447592.jpg"
import imgS4 from "../images/pexels-antoni-shkraba-5466151.jpg"
import imgS5 from "../images/pexels-mathias-reding-7108779.jpg"
import imgS6 from "../images/63fcaefbaeb788532a771f23_service-thumb-01-p-500.jpg"
import "../css/services.css"
import Faq from './Faq'
export default function Services() {
  return (
    <>
      <div className='Sblog-1'>
        <h1>Our Services</h1>
      </div>
      <div className='service-div'>
        <Service img={imgS1} title="Solar Installation" visibilityst="none" />
        <Service img={imgS2} title="Painting" visibilityst="none" />
        <Service img={imgS3} title="Interior Design" visibilityst="none" />
        <Service img={imgS4} title="Carpentery" visibilityst="none" />
        <Service img={imgS5} title="Building Construction" visibilityst="none" />
        <Service img={imgS6} title="Building Bridges" visibilityst="none" />
      </div>
      <div className='faq-container'>
        <div className='faq-head'>
          <Icon icon="tabler:help" color="#554640" width="40" />
          <h2>FAQ</h2>
        </div>
        <div className='faq-div'>
          <Faq question="how to start your own project ?" />
          <Faq question="how do I communicate throughout the project ?" />
          <Faq question="What type of projects do you specialize in ?" />
          <Faq question= "What is your process for managing projects" />
        </div>
      </div>
      <div>
      </div>
    </>
  )
}
