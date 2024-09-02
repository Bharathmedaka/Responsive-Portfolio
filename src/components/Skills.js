import React from 'react'
import { Element } from 'react-scroll'
import {Link} from 'react-scroll'
import '../skills.css'
export default function Skills() {
  return (
    <Element name='skills' id='my_skills'>
        <p className='subtitle'>Explore My Skills</p>
        <h1><b>Skills</b></h1>
        <div className='skill_container'>
            <div className='skill_box'>
                <div className='each_skill'>
                    <i class="fa-solid fa-circle-check fa-xl" style={{color: "#000000"}}></i>
                    <span className='myskill'><b>HTML</b></span>
                    <p className='level'>Experienced</p>
                </div>
                <div className='each_skill'>
                    <i class="fa-solid fa-circle-check fa-xl" style={{color: "#000000"}}></i>
                    <span className='myskill'><b>CSS</b></span>
                    <p className='level'>Experienced</p>
                </div>
                <div className='each_skill'>
                    <i class="fa-solid fa-circle-check fa-xl" style={{color: "#000000"}}></i>
                    <span className='myskill'><b>JavaScript</b></span>
                    <p className='level'>Basic</p>
                </div>
                <div className='each_skill'>
                    <i class="fa-solid fa-circle-check fa-xl" style={{color: "#000000"}}></i>
                    <span className='myskill'><b>ReactJS</b></span>
                    <p className='level'>Basic</p>    
                </div>
                <div className='each_skill'>
                    <i class="fa-solid fa-circle-check fa-xl" style={{color: "#000000"}}></i>
                    <span className='myskill'><b>Python</b></span>
                    <p className='level'>Intermediate</p>
                </div>
                <div className='each_skill'>
                    <i class="fa-solid fa-circle-check fa-xl" style={{color: "#000000"}}></i>
                    <span className='myskill'><b>DSA</b></span>
                    <p className='level'>Intermediate</p>
                </div>
            </div>
            <div className='skill_box box2'>
                <div className='each_skill box2_skill'>
                    <i class="fa-solid fa-circle-check fa-xl" style={{color: "#000000"}}></i>
                    <span className='myskill'><b>MySQL</b></span>
                    <p className='level'>Basic</p>
                </div>
                <div className='each_skill box2_skill'>
                    <i class="fa-solid fa-circle-check fa-xl" style={{color: "#000000"}}></i>
                    <span className='myskill'><b>Git</b></span>
                    <p className='level'>Basic</p>
                </div>
                <div className='each_skill box2_skill'>
                    <i class="fa-solid fa-circle-check fa-xl" style={{color: "#000000"}}></i>
                    <span className='myskill'><b>Networking</b></span>
                    <p className='level'>Basic</p>
                </div>
                <div className='each_skill box2_skill'>
                    <i class="fa-solid fa-circle-check fa-xl" style={{color: "#000000"}}></i>
                    <span className='myskill'><b>PowerBI</b></span>
                    <p className='level'>Basic</p>
                </div>
            </div>
        </div>
    </Element>
  )
}
