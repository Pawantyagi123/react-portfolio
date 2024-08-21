import React from 'react'
import profile from "../Image/profile.png"
import "../Components/css/About.css"
import resume from "../file/resume (2).pdf"
import { FaDownload } from "react-icons/fa6";

export default function About() {
  return (
    <div className='about-containr'>
      <div className="item">
        <div className="text">
<h1>About Me</h1>
<p>Hi, My name is Pawan Tyagi. I am a 22 year old MERN developer residing in Haryana Mahendergarh. I am graduated from BCA in Computer Application, I am well-versed in the latest web development technologies. Graduating with honors to my name, I am eager to apply my skills in a challenging role where I can continue to learn and grow as a developer. Passionate about creating clean, efficient code and developing user-friendly interfaces, I am excited to collaborate with like-minded professionals to build innovative solutions that drive business success.</p>
<a href={resume} download>Resume <FaDownload/></a>
        </div>
        <div className="image">
          <img src={profile} alt="" />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <div className="skill-item">
          <h3>HTML</h3>
          <h3>CSS</h3>
          <h3>JAVASCRIPT</h3>
          <h3>REACT</h3>
          <h3>Redux Toolkit</h3>
          <h3>BOOTSTRAP</h3>
          <h3>Material Ui</h3>
          <h3>NODE</h3>
          <h3>EXPRESS</h3>
          <h3>MONGODB</h3>
          <h3>Git</h3>
          <h3>Github</h3>
          <h3>VERCEL</h3>
          <h3>Netlify</h3>
          <h3>Postman</h3>
        </div>
      </div>
    </div>
  )
}
