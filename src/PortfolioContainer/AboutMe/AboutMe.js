import React, { useState } from 'react'
import './AboutMe.css'

export default function AboutMe() {

  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show0, setShow0] = useState(false);



  function cont1() {
    if (show === true) {
      setShow(!show);
      setShow2(false);
      setShow1(false);
      setShow3(false);
      setShow0(false);
    }
    if (show === false) {
      setShow(!show);
      setShow2(false);
      setShow1(false);
      setShow3(false);
      setShow0(false);
    }
  }

  function cont2() {
    if (show1 === true) {
      setShow1(!show1);
      setShow(false);
      setShow2(false);
      setShow3(false);
      setShow0(false);
    }
    if (show1 === false) {
      setShow1(!show1);
      setShow(false);
      setShow2(false);
      setShow3(false);
      setShow0(false);
    }
  }

  function cont3() {
    if (show2 === true) {
      setShow2(!show2);
      setShow(false);
      setShow1(false);
      setShow3(false);
      setShow0(false);
    }
    if (show2 === false) {
      setShow2(!show2);
      setShow(false);
      setShow1(false);
      setShow3(false);
      setShow0(false);
    }
  }

  function cont4() {
    if (show3 === true) {
      setShow3(!show3);
      setShow(false);
      setShow1(false);
      setShow2(false);
      setShow0(false);
    }
    if (show3 === false) {
      setShow3(!show3);
      setShow(false);
      setShow1(false);
      setShow2(false);
      setShow0(false);
    }
  }

  function cont0() {
    if (show0 === true) {
      setShow0(!show0);
      setShow(false);
      setShow1(false);
      setShow2(false);
      setShow3(false);
    }
    if (show0 === false) {
      setShow0(!show0);
      setShow(false);
      setShow1(false);
      setShow2(false);
      setShow3(false);
    }
  }


  return (
    <div className='about-me'>
      <h2>About me</h2>


      <ul>
        <div className='section'>
          <div className='select1'>
            <li><button className='btn-sec' type="button" onClick={cont0}>Profile</button></li>
            <li><button className='btn-sec' type="button" onClick={cont1}>Education</button></li>



            <li><button className='btn-sec' type="button" onClick={cont2}>Programing Skills</button></li>

            <li><button className='btn-sec' type="button" onClick={cont3}>Projects</button></li>

            <li><button className='btn-sec' type="button" onClick={cont4}>Extra Curriculum Activity</button></li>
          </div>
          <div className='select2'>
            {show &&
              <div className='education'>
                <div className='first-sentence'><b>Matriculation(X),ST. Paul High School</b><p> March 2015 - March 2016 </p>
                  <p>Successfully Pass with 74%</p></div>

                <div className='sec-sentence'>
                  <b> Intermediate(XII),Shri L.P.Raval Jr. College of Commerce & Science</b>
                  <p>February 2017 - February 2018</p>
                  <p>Successfully Pass with 68.15%</p>
                </div>

                <div className='third-sentence'>
                  <b> Bachelor of Engineering, Vidyavardhini's College of Engineering and Technology</b>
                  <p>May 2018 - May 2022</p>
                  <p>Successfully Pass with CGPI 7.38</p>
                </div>
              </div>
            }

            {show1 && <><div className='skill-box'>
              <span className='title'>HTML</span>
              <div className='skill-bar'>
                <span className='skill-per html'>
                  <span className='tooltip'>95%</span>
                </span>

              </div>
            </div>
              <div className='skill-box'>
                <span className='title'>CSS</span>
                <div className='skill-bar'>
                  <span className='skill-per css'>
                    <span className='tooltip'>90%</span>
                  </span>

                </div>
              </div>
              <div className='skill-box'>
                <span className='title'>Javascript</span>
                <div className='skill-bar'>
                  <span className='skill-per javascript'>
                    <span className='tooltip'>65%</span>
                  </span>

                </div>
              </div>
              <div className='skill-box'>
                <span className='title'>React</span>
                <div className='skill-bar'>
                  <span className='skill-per react'>
                    <span className='tooltip'>75%</span>
                  </span>

                </div>
              </div>
              <div className='skill-box'>
                <span className='title'>Java</span>
                <div className='skill-bar'>
                  <span className='skill-per java'>
                    <span className='tooltip'>60%</span>
                  </span>

                </div>
              </div>

              <div className='skill-box'>
                <span className='title'>SQL</span>
                <div className='skill-bar'>
                  <span className='skill-per sql'>
                    <span className='tooltip'>80%</span>
                  </span>

                </div>
              </div>

            </>}

            {show2 && <div className='projects'>
              <div className='first-pro'><b>GYM APP <span className='date'>June 2022 - June 2022</span> </b><p> A Responsive and user-friendly website to find exercise and its step-wise tutorial </p>
                <p>Technical Stack Used:- React Js</p></div>

              <div className='sec-pro'>
                <b> Memory Game <span className='date'>May 2022 - May 2022</span></b>
                <p>A simply memory game, in which we have to select two cards of the same image to score a point</p>
                <p>Technical Stack Used:- HTML , CSS , Javascript</p>
              </div>

              <div className='third-pro'>
                <b> Typing Test <span className='date'>November 2022 - November 2022</span></b>
                <p>A simple typing test that calculates the accuracy and time required to type a certain paragraph</p>
                <p>Technical Stack: React Js</p>
              </div>
            </div>}
            {show3 && <div className='curriculum'>
              <div className='first-activity'><b>Organizing Commitee ,  Zeal <span className='date'>March 2018 - March 2019</span> </b></div>

              <div className='sec-activity'>
                <b> Technical Head ,  Hackathon <span className='date'>March 2019 - March 2022</span></b>

              </div>


            </div>}

            {show0 && <>
              <div className='personal-det'>
                <div className='name'>
                  <b>Name</b>
                  <p>Hridayesh Sanjay More</p>
                </div>
                <div className='DOB'>
                  <b>Date of Birth</b>
                  <p>16th May 2000</p>
                </div>
                <div className='nationality'>
                  <b>Nationality</b>
                  <p>Indian</p>
                </div>
                <div className='address'>
                  <b>Address</b>
                  <p>B.I.T Chawl, Damodar Natya Gruha, Krishna Nagar, Parel, Mumbai-401107</p>
                </div>

                <div className='contact'>
                  <b>Contact No.</b>
                  <p>+917738756301</p>
                </div>

                <div className='email'>
                  <b>Email</b>
                  <p>hridayeshsmore@gmail.com</p>
                </div>

              </div>
            </>}
          </div>

        </div>


      </ul>


    </div>
  )
}
