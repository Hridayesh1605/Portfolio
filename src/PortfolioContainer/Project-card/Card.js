import React, { useEffect } from 'react'
import './Card.css'
import project1 from '../../assets/Home/project1.png'

import { NavLink} from "react-router-dom"
import project2 from '../../assets/Home/project2.png'
import project3 from '../../assets/Home/project3.png'
import {Parallax} from 'react-parallax'
import darkbg from '../../assets/Home/bg2.jpg'
import Aos from "aos"
import "aos/dist/aos.css"

const card = () => {
  
  return (
    <div className='container-proj'>

      <Parallax strength={600} bgImage={darkbg}>
      {/* <div class="custom-shape-divider-top-1674472564">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div> */}
<div className='spacer layer1'></div>
      <h1 className='project-heading'>Projects</h1>
      <div data-aos="fade-right" className='project-container'>
        <div  className='project-card'>
          <img src={project1} alt="image"/>
          <h2 className='project-title'>GYM APP</h2>
          <div className='project-details'>
            <p className='det'> A Responsive and user-friendly website to find exercise and its step-wise tutorial</p>
            <div className='pro-btn'>
              <button className='pro-view'><a href='https://gym-g870cyn1p-hridayesh1605.vercel.app/'>View</a></button>
              <button className='pro-source'><a href='https://github.com/Hridayesh1605/gym_app.git'>Source</a></button>


            </div>
          </div>
        </div>

        <div className='project-card'>
          <img src={project2} alt="image"/>
          <h2 className='project-title'>Typing Test</h2>
          <div className='project-details'>
            <p className='det'>A simple typing test that calculates the accuracy and time required to type a certain paragraph</p>
            <div className='pro-btn'>
              <button className='pro-view'><a href='https://precious-piroshki-d40ef1.netlify.app/'>View</a></button>
              <button className='pro-source'><a href='https://github.com/Hridayesh1605/typing-speed-test.git'>Source</a></button>


            </div>
          </div>
        </div>

        <div className='project-card'>
          <img src={project3} alt="image"/>
          <h2 className='project-title'>Memory Game</h2>
          <div className='project-details'>
            <p className='det'>A simply memory game, in which we have to select two cards of the same image to score a point</p>
            <div className='pro-btn'>
              <button className='pro-view'><a href='https://memorygame-2.vercel.app/'>View</a></button>
              <button className='pro-source'><a href='https://github.com/Hridayesh1605/memorygame-2.git'>Source</a></button>


            </div>
          </div>
        </div>
      </div>
      {/* <div class="custom-shape-divider-bottom-1674476493">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
    </svg>
</div> */}
<div class="custom-shape-divider-bottom-1674476859">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
    </svg>
</div>
      </Parallax>

      

      
      
    </div>

    
  )
}

export default card
