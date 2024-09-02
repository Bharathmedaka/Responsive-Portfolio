// import React from 'react'
import { Element } from 'react-scroll'
import '../contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {Link} from 'react-scroll'
export default function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_n51nqjq', 'template_ie7tyzl', form.current, {
        publicKey: 'UwRjDGNUrkF-mNHS5',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <Element name='contact' id='my_contact'>
        <p className='subtitle'>Get In Touch</p>
        <h1><b>Contact Me</b></h1>
        <div className='contact_container'>
            <div className='contact_sec'>
            <form ref={form} onSubmit={sendEmail}>
                <input type='text' id='name' name="user_name" placeholder='Enter Your Name' className='input'></input><br/>
                <input type='email' id='email' name="user_email" placeholder='Enter Your Email' className='input'></input><br/>
                <textarea name="message" placeholder='Enter the message' className='textarea'></textarea><br/>
                <button type="submit" className="btn btn-dark" id='contbtn'><i class="fa-solid fa-paper-plane fa-xl" style={{marginLeft: "3px",marginRight: "7px"}}></i>Send Message</button>
            </form>  
            </div>
            <footer>
              <h3><b>Bharath Kishore</b></h3>
              <div className='list_items'>
                <ul>
                  <li>
                    <Link to="about" smooth={true} duration={200}><b>About</b></Link>
                  </li>
                  <li>
                    <Link to="skills" smooth={true} duration={200}><b>Skills</b></Link>
                  </li>
                  <li>
                    <Link to="projects" smooth={true} duration={200}><b>Projects</b></Link>
                  </li>
                  <li>
                    <Link to="contact" smooth={true} duration={200}><b>Contact</b></Link>
                  </li>
                </ul>
                <a href="mailto:bharathkishore935@gmail.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-envelope fa-2xl" style={{color: "#000000",}}></i>
                </a>
                <a href="https://www.linkedin.com/in/medaka-bharath-kishore-71a6a4269/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin fa-2xl" style={{color: "#000000",}}></i>
                </a>
                <a href="https://github.com/Bharathmedaka" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-github fa-2xl" style={{color: "#000000",}}></i>
                </a>
              </div>
            </footer>
            <footer className="footer">
              <p>&copy; 2024 Bharath Kishore. All Rights Reserved.</p>
            </footer>
        </div>
    </Element>
    
  )
}
