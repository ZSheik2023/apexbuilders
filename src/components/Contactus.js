import React,{useState} from 'react'
import Faq from './Faq'
import "../css/Button.css"
import "../css/Contact.css"
import Cimg1 from "../images/silvia-brazzoduro-YSxcf6C_SEg-unsplash.jpg"
import { Icon } from '@iconify/react'
export default function Contactus() {
  const [formvalue1,setformvalue1] = useState("")
  const [formvalue2,setformvalue2] = useState("")
  const [formvalue3,setformvalue3] = useState("")
  const [formvalue4,setformvalue4] = useState("")
  return (
    <div>
      <div className='Cblog-1'>
        <h1>About Us</h1>
      </div>
      <div className='form-div'>
        <form>
          <input type="text" placeholder='Name' required  value={formvalue1} onChange={(e)=>{setformvalue1(e.target.value)}}/><br/>
          <input type="text" placeholder='Email' required  value={formvalue2} onChange={(e)=>{setformvalue2(e.target.value)}}/><br/>
          <input type="text" placeholder='Phone Number'  required value={formvalue3} onChange={(e)=>{setformvalue3(e.target.value)}}/><br/>
          <textarea cols="30" rows="5" placeholder='Message' required  value={formvalue4} onChange={(e)=>{setformvalue4(e.target.value)}}></textarea><br/>
          <button type="submit" className='btn-4' onClick={(e)=> {e.preventDefault(); setformvalue1("");setformvalue2("");setformvalue3("");setformvalue4("")}}>Confirm Book</button>
        </form>
        <div>
          <img src={Cimg1} alt="form img" width="390px" />
        </div>
      </div>
      <div className='contact-info'>
      <Icon icon="ic:round-phone" width="64" />
      <p>028 6984 6586</p>
      </div>
      <div className='contact-info'>
      <Icon icon="material-symbols:mail" width="64" />
      <p>apexBuild@gmail.com</p>
      </div>
      <div className='faq-div'>
          <Faq question="how to start your own project ?" />
          <Faq question="how do I communicate throughout the project ?" />
          <Faq question="What type of projects do you specialize in ?" />
          <Faq question= "What is your process for managing projects" />
        </div>
    </div>
  )
}
