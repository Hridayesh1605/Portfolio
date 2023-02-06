import React from 'react'
import './Profile.css'
import Typical from 'react-typical'
import down from '../../assets/Home/down-layer.png'

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>

                        <a href="https://www.facebook.com/hridayesh.more.7" target="_blank" class="btn-social btn-facebook"><i class="fa fa-facebook"></i></a>

                        <a href="https://github.com/Hridayesh1605" target="_blank" class="btn-social btn-github"><i class="fa fa-github-alt"></i></a>

                        <a href="https://www.instagram.com/hridayeshmore/" target="_blank" class="btn-social btn-instagram"><i class="fa fa-instagram"></i></a>

                        <a href="https://www.linkedin.com/in/hridayesh-more-8b60a2183/" target="_blank" class="btn-social btn-linkedin"><i class="fa fa-linkedin"></i></a>
                        </div>






                    </div>





                    <div className="profile-details-name">
                        <span className="primary">
                            Hello, I'M <span className="hl">Hridayesh</span>
                        </span>
                    </div>


                    <div className="profile-details-role">
                        <span className="primary-text">
                            <h1>
                                <Typical
                                    steps={['Enthusiatic Developer', 2000, 'Frontend Dev', 2000, 'React Js Dev', 2000]}
                                    loop={Infinity}
                                    wrapper="p"
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Building Application With Front end operation.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            Hire Me
                        </button>
                        <a href='resume.pdf' download='Hridayesh Resume.pdf'>
                            <button className='btn hl-btn'>Get Resume</button>
                        </a>
                    </div>

                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
            

        </div>
    )
}
