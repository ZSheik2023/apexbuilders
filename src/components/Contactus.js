import React from 'react'
import Faq from './Faq'

export default function Contactus() {
  return (
    <div>
      <div className='faq-div'>
          <Faq question="how to start your own project ?" />
          <Faq question="how do I communicate throughout the project ?" />
          <Faq question="What type of projects do you specialize in ?" />
          <Faq question= "What is your process for managing projects" />
        </div>
    </div>
  )
}
