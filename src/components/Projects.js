import React from 'react'
import { Element } from 'react-scroll'
import {Link} from 'react-scroll'
import '../projects.css'
import weatherimg from '../assets/weather.jpg'
import calcimg from '../assets/calc.jpg'
import todoimg from '../assets/todo.jpg'
import textimg from '../assets/text.jpg'
export default function Projects() {
  return (
    <Element name='projects' id='my_projects'>
      <p className='subtitle'>Explore My Recent</p>
      <h1><b>Projects</b></h1>
      <div className='project_container'>
        <div className='project_box'>
          <div className='project_img'>
            <img src={weatherimg} alt=""/>
          </div>
          <h4 className='app_name'><b>Weather App</b></h4>
            <a href='https://bharathmedaka.github.io/Weather-App/'>
              <button type="button" className="btn btn-dark" id='probtn'><i className="fa-solid fa-display fa-lg" style={{ marginRight: "8px"}}></i>Show Demo</button>
            </a> 
        </div>
        <div className='project_box'>
          <div className='project_img'>
            <img src={calcimg} alt=""/>
          </div>
          <h4 className='app_name'><b>Calculator</b></h4>
            <a href='https://bharathmedaka.github.io/Calculator-App/'>
              <button type="button" className="btn btn-dark" id='probtn'><i className="fa-solid fa-display fa-lg" style={{ marginRight: "8px"}}></i>Show Demo</button>
            </a>
        </div>
        <div className='project_box'>
          <div className='project_img'>
            <img src={todoimg} alt=""/>
          </div>
          <h4 className='app_name'><b>To-Do-List</b></h4>
            <a href='https://bharathmedaka.github.io/To-Do-List-App/'>
              <button type="button" className="btn btn-dark" id='probtn'><i className="fa-solid fa-display fa-lg" style={{ marginRight: "8px"}}></i>Show Demo</button>
            </a>
        </div>
        <div className='project_box'>
          <div className='project_img'>
            <img src={textimg} alt=""/>
          </div>
          <h4 className='app_name'><b>TextUtils App</b></h4>
            <a href='https://bharathmedaka.github.io/TextUtils-App/'>
              <button type="button" className="btn btn-dark" id='probtn'><i className="fa-solid fa-display fa-lg" style={{ marginRight: "8px"}}></i>Show Demo</button>
            </a>
        </div>
      </div>
    </Element>
  )
}
