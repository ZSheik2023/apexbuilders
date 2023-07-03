import React from 'react'
import "../css/service.css"

export default function Service(props) {
  const shstyle = {
    display: props.visibilityst
  }
  return (
    <div>
        <div className='service'>
            <img src={props.img} alt="this is a img" className='service-img'/>
            <h3 className='service-h'>{props.title}</h3>
            <p className='service-sh' style={shstyle}>{props.st}</p>
        </div>
    </div>
  )
}
