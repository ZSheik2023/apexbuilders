import React,{useState} from 'react'
import { Icon } from '@iconify/react';
import "../css/faq.css"

export default function Faq(props) {
    const [faqtoggle,setfaqtoggle] = useState(true)
  const faqclick = () => {
    if(faqtoggle){
      setfaqtoggle(false)
    }
    else{
      setfaqtoggle(true)
    }
  }
  return (
    <div className='faq'>
      <div>
        <h4>{props.question}</h4>
        <Icon icon="majesticons:plus-line" width="36" color='white' onClick={faqclick} style={faqtoggle ? {rotate:"0deg" ,transition:"500ms"}:{rotate:"45deg" ,transition:"500ms"}}/>
      </div>
      <p style={faqtoggle ? {maxHeight:0 ,overflow:"hidden" ,transition:"500ms"}:{maxHeight:100, overflow:"hidden" ,transition:"500ms"}}>Lorem ipsum dolor sit amet consectetur adipiscing <br/> elit Ut et massa mi. Aliquam in hendrerit urna. <br/> Pellentesque sit amet sapien.</p>
    </div>
  )
}
