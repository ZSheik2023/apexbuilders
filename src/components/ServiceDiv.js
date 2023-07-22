import React,{useEffect} from 'react'
import Service from './Service'
import {Link} from "react-router-dom"
import "../css/service.css"
import "../css/Button.css"
import AOS from "aos"
import "aos/dist/aos.css"

export default function ServiceDiv(props) {
  const myVisibility = {
    display: props.visibility
  }
  useEffect(()=>{
    AOS.init({duration:600})
  },[])
  return (
    <div>
      <div className='ServiceDiv'>
        <h2 className='Div-title' data-aos="fade-down" data-aos-duration="500" data-aos-once="true">{props.title}</h2>
        <div className='div-imgs'>  
        <Service img={props.img1} title={props.title1} visibilityst={props.visibilityst1} st={props.st1}  animate="fade-right" animatehtext="fade-right" animatetext="fade-right"/>
        <Service img={props.img2} title={props.title2} visibilityst={props.visibilityst2} st={props.st2} animate="fade-up" animatehtext="fade-up" animatetext="fade-up"/>
        <Service img={props.img3} title={props.title3} visibilityst={props.visibilityst3} st={props.st3} animate="fade-left" animatehtext="fade-left" animatetext="fade-left"/>
        </div>
        <div className='btn-div'>
        <Link to="/service" className='linked'><button className='btn-4' style={myVisibility} data-aos="fade-up" data-aos-duration="500" data-aos-once="true">Show more</button></Link>
        </div>
      </div>
    </div>
  )
}
