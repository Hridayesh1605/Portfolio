import React, { useEffect } from 'react'
import Profile from './Profile'
// import Footer from './Footer/Footer'
import AboutMe from '../AboutMe/AboutMe'
import Card from '../Project-card/Card'
import Contact from './Contact'

import './Home.css'
import Aos from "aos"
import "aos/dist/aos.css"

export default function Home() {
  useEffect(()=>{
    Aos.init({ duration: 2000});
  },[]);
  return (
    <div className='home-container'>
        <Profile/>
        
        
        <div  className='card'><Card/></div>
        <div className='ab-con'>
        <div data-aos="fade-right"
     
     className='Am'><AboutMe/></div>
        
        <div className='c'><Contact/></div>
        </div>
        

      
    </div>
  )
}
