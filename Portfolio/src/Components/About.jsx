import React from "react";
import profile from "../Image/profile.png";
import "../Components/css/About.css";
import resume from "../file/resume (2).pdf";
import { FaDownload } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";

export default function About() {
  return (
    <div className="about-containr">
      <Fade direction="left" cascade duration={4000}>
        <div className="item">
          <div className="text">
            <Fade direction="down" delay={2} duration={3000}> 
              <h1>About Me</h1>
            </Fade>
            <Fade direction="left" delay={4} duration={3000}>
              <p>
                Hi, My name is Pawan Tyagi. I am a 22 year old MERN developer
                residing in Haryana Mahendergarh. I am graduated from BCA in
                Computer Application, I am well-versed in the latest web
                development technologies. Graduating with honors to my name, I
                am eager to apply my skills in a challenging role where I can
                continue to learn and grow as a developer. Passionate about
                creating clean, efficient code and developing user-friendly
                interfaces, I am excited to collaborate with like-minded
                professionals to build innovative solutions that drive business
                success.
              </p>
            </Fade>
            <Fade direction="up" delay={5} duration={3000}>
              <a href={resume} download>
                Resume <FaDownload />
              </a>
            </Fade>
          </div>
          <div className="image">
            <Fade direction="right" delay={2} duration={3000}>
              <img src={profile} alt="" />
            </Fade>
          </div>
        </div>
      </Fade>

      <Fade direction="right" cascade duration={2000}>
        <div className="skills">
          <Fade direction="right" cascade duration={3000}>
            <h1 style={{ paddingTop: "20px" }}>Skills</h1>
          </Fade>
          <div className="skill-item">
            <Fade direction="up" cascade duration={2000}>
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
            </Fade>
          </div>
        </div>
      </Fade>
    </div>
  );
}
