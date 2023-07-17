import React from 'react'
import Service from './Service'
import {Link} from "react-router-dom"
import "../css/service.css"
import "../css/Button.css"

export default function ServiceDiv(props) {
  const myVisibility = {
    display: props.visibility
  }
  return (
    <div>
      <div className='ServiceDiv'>
        <h2 className='Div-title'>{props.title}</h2>
        <div className='div-imgs'>  
        <Service img={props.img1} title={props.title1} visibilityst={props.visibilityst1} st={props.st1}/>
        <Service img={props.img2} title={props.title2} visibilityst={props.visibilityst2} st={props.st2}/>
        <Service img={props.img3} title={props.title3} visibilityst={props.visibilityst3} st={props.st3}/>
        </div>
        <div className='btn-div'>
        <Link to="/service" className='linked'><button className='btn-4' style={myVisibility}>Show more</button></Link>
        </div>
      </div>
    </div>
  )
}
