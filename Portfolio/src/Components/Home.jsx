import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter,FaLinkedin,FaGithub } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import "../Components/css/home.css";
import { Fade } from 'react-awesome-reveal';

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-hero">
      <Fade direction="down" cascade>
        <div className="home-text">
          <h1>HEY, I'M Pawan Tyagi</h1>
        
          <div className="home-para">
          
          <p>
            A Result-Oriented Web Developer building and managing Websites and
            Web Applications that leads to the success of the overall product
          </p>
          
          </div>
         
          <Link to={"/projects"} className="link">
            Projects
          </Link>
        </div>
        </Fade>
       
        <div className="social-links">
          <div className="hero-social-link">
            <a href="https://www.linkedin.com/in/pawan-tyagi-196606270" className="home-hero__social-icon-link" target="_blank"><FaLinkedin/></a>
          </div>

          <div className="hero-social-link">
            <a href="https://x.com/Pawantyagi15426" className="home-hero__social-icon-link" target="_blank"><FaTwitter/></a>
          </div>
          <div className="hero-social-link">
            <a href="https://github.com/Pawantyagi123" className="home-hero__social-icon-link" target="_blank"><FaGithub/></a>
          </div>
          <div className="hero-social-link">
            <a href="https://dev.to/pawantyagi123" className="home-hero__social-icon-link" target="_blank"><FaBookOpen/></a>
          </div>
        </div>
        
      </div>
    </div>
  );
}
