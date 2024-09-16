import React from "react";
import profile from "../Image/profile.png";
import "../Components/css/About.css";
import resume from "../file/resume (2).pdf";
import { FaDownload } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";

export default function About() {
  return (
    <div className="about-container">
      <div className="item">
        <div className="text">
          <Fade direction="down" delay={3} duration={3000}>
            <h1>About Me</h1>
          </Fade>
          <Fade direction="left" delay={3.5} duration={3000}>
            <p>
              Hi, My name is Pawan Tyagi. I am a 22 year old MERN developer
              residing in Haryana Mahendergarh. I am graduated from BCA in
              Computer Application, I am well-versed in the latest web
              development technologies. Graduating with honors to my name, I am
              eager to apply my skills in a challenging role where I can
              continue to learn and grow as a developer. Passionate about
              creating clean, efficient code and developing user-friendly
              interfaces, I am excited to collaborate with like-minded
              professionals to build innovative solutions that drive business
              success.
            </p>
          </Fade>
          <Fade direction="up" delay={4} duration={3000}>
            <a href={resume} download>
              Resume <FaDownload />
            </a>
          </Fade>
        </div>
        <div className="image">
          <Fade direction="left" delay={2} duration={3000}>
            <img src={profile} alt="" />
          </Fade>
        </div>
      </div>
    </div>
  );
}
