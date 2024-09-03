//import { Container } from '@mui/material'
import React from 'react'
import { Element } from 'react-scroll';
import myimage from '../assets/passport_photo.jpg';
import '../home.css'; 
import {Link} from 'react-scroll'
export default function Home() {
  return (
    <Element name="header" className="about">
      <section id="header"> 
        <div className="image-sec">
          <img src={myimage} alt="About me"/>
        </div>
        <div className="introContent">
          <span id="hello">Hello,</span>
          <span className="introText">I'm <span id="introName">Bharath</span><br/>Web Developer</span>
          <p id="intropara"><b><i>I'm passionate about coding and web development.</i></b></p>
          <div className="btns">
            <Link to="contact" smooth={true} duration={200}>
            <button className="btn btn-success" id='my_btn'>
            <i className="fa-solid fa-suitcase" style={{marginRight: "8px"}}></i>
            Hire Me
            </button>
            </Link>
            <a href="https://drive.google.com/file/d/1LxVnIRZvhuw2aYXlMpEN3KciKD45Mt_w/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-success ms-4" id='my_btn'>
            <i className="fa-solid fa-file" style={{marginRight: "8px"}}></i>
            My Resume
            </button>
            </a>
          </div>
        </div>
      </section>
    </Element>
  );
}