import React from 'react'
import Service from './Service'
import "../css/service.css"
import "../css/Button.css"

export default function ServiceDiv(props) {
  return (
    <div>
      <div className='ServiceDiv'>
        <h2 className='Div-title'>{props.title}</h2>
        <div className='div-imgs'>  
        <Service img={props.img1} title={props.title1}/>
        <Service img={props.img2} title={props.title2}/>
        <Service img={props.img3} title={props.title3}/>
        </div>
        <div className='btn-div'>
        <button className='btn-4'>Show more</button>
        </div>
      </div>
    </div>
  )
}
