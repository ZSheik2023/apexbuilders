import React,{useState,useEffect} from 'react'
import Faq from './Faq'
import "../css/Button.css"
import "../css/Contact.css"
import AOS from "aos"
import "aos/dist/aos.css"
import Cimg1 from "../images/silvia-brazzoduro-YSxcf6C_SEg-unsplash.jpg"
import { Icon } from '@iconify/react'
export default function Contactus() {
  const [formvalue1,setformvalue1] = useState("")
  const [formvalue2,setformvalue2] = useState("")
  const [formvalue3,setformvalue3] = useState("")
  const [formvalue4,setformvalue4] = useState("")
  document.title = "Apex Buliders - Contact"
  useEffect(()=>{
    AOS.init({duration:600})
  },[])
  return (
    <div>
      <div className='Cblog-1'>
        <h1>About Us</h1>
      </div>
      <div className='form-div' data-aos="zoom-out" data-aos-duration="1000" data-aos-once="true" data-aos-offset="80">
        <form>
          <input type="text" placeholder='Name' required  value={formvalue1} onChange={(e)=>{setformvalue1(e.target.value)}} data-aos="zoom-out" data-aos-duration="1000" data-aos-once="true" data-aos-offset="80" data-aos-delay="200"/><br/>
          <input type="text" placeholder='Email' required  value={formvalue2} onChange={(e)=>{setformvalue2(e.target.value)}}data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" data-aos-offset="80" data-aos-delay="200"/><br/>
          <input type="text" placeholder='Phone Number'  required value={formvalue3} onChange={(e)=>{setformvalue3(e.target.value)}} data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" data-aos-offset="80" data-aos-delay="20"/><br/>
          <textarea cols="30" rows="5" placeholder='Message' required  value={formvalue4} onChange={(e)=>{setformvalue4(e.target.value)}} data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" data-aos-offset="80" data-aos-delay="20"></textarea><br/>
          <button type="submit" className='btn-4' onClick={(e)=> {e.preventDefault(); setformvalue1("");setformvalue2("");setformvalue3("");setformvalue4("")}} data-aos="fade-right" data-aos-duration="1500" data-aos-once="true" data-aos-offset="80" data-aos-delay="200">Confirm Book</button>
        </form>
        <div>
          <img src={Cimg1} alt="form img" width="390px" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true" data-aos-offset="80" data-aos-delay="20"/>
        </div>
      </div>
      <div className='contact-info'>
      <Icon icon="ic:round-phone" width="64"  data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" data-aos-offset="80"/>
      <p data-aos="fade-left" data-aos-duration="1000" data-aos-once="true" data-aos-offset="80">028 6984 6586</p>
      </div>
      <div className='contact-info'>
      <Icon icon="material-symbols:mail" width="64"  data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" data-aos-offset="80"/>
      <p data-aos="fade-left" data-aos-duration="1000" data-aos-once="true" data-aos-offset="80">apexBuild@gmail.com</p>
      </div>
      <div className='faq-container'>
        <div className='faq-head'>
          <Icon icon="tabler:help" color="#554640" width="40" />
          <h2>FAQ</h2>
        </div>
        <div className='faq-div'>
          <Faq question="how to start your own project ?" animate="fade-right"/>
          <Faq question="how do I communicate throughout the project ?" animate="fade-left"/>
          <Faq question="What type of projects do you specialize in ?" animate="fade-right"/>
          <Faq question= "What is your process for managing projects" animate="fade-left"/>
        </div>
      </div>
    </div>
  )
}
