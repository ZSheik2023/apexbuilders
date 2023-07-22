import React,{useEffect} from 'react'
import "../css/service.css"
import AOS from "aos"
import "aos/dist/aos.css"

export default function Service(props) {
  const shstyle = {
    display: props.visibilityst
  }
  useEffect(()=>{
    AOS.init({duration:600})
  },[])
  return (
    <div>
        <div className='service'>
            <img src={props.img} alt="this is a img" className='service-img'data-aos={props.animate} data-aos-duration="500" data-aos-once="true" data-aos-offset="80"/>
            <h3 className='service-h'data-aos={props.animatehtext} data-aos-duration="700" data-aos-once="true" data-aos-offset="80">{props.title}</h3>
            <p className='service-sh' style={shstyle}data-aos={props.animatetext} data-aos-duration="500" data-aos-once="true" data-aos-offset="80">{props.st}</p>
        </div>
    </div>
  )
}
