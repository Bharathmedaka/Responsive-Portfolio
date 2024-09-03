import React from 'react'
import { Element } from 'react-scroll';
import {Link} from 'react-scroll'
import myimage from '../assets/passport_photo.jpg';
import '../about.css'
export default function About() {
  return (
    <Element name='about' id='about_me'>
      <p className='subtitle'>Get To Know More</p>
      <h1><b>About Me</b></h1>
      <div className='about_container'>
        <div className='img_container'>
            <img src={myimage} alt="" className='about_img' />
        </div>
        <div className='big_box'>
          <div className='main_box'>
            <div className='box'>
              <i class="fa-solid fa-graduation-cap fa-xl" style={{color: "#000000", margin: '20px'}}></i>
              <h4>Education</h4>
              <p> Pursuing B.Tech at SR Gudlavalleru Engineering College</p>
            </div>
            <div className='box'>
              <i class="fa-solid fa-code fa-xl" style={{color: "#000000", margin: '20px'}}></i>
              <h4>Coding</h4>
              <p>Actively engaged in solving coding problems</p>
            </div>
          </div>
          <div className='content-sec'>
              <p>I'm Bharath Kishore, a passionate web developer enthusiast
                pursuing B.Tech in Mechanical Engineering.Proficient in Python
                programming and good knowledge on frontend technologies and also
                basic knowledge on SQL.I enjoy solving complex problems and am
                always eager to take on new challenges that help me expand
                my skill set.
              </p>
          </div>
        </div>
      </div>
      



      
    </Element>
  )
}
