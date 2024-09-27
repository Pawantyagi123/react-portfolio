import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import "./Navbar.css";
import logo from "../Image/Pawan tyagi (3).png";
import Tippy from '@tippyjs/react';
import { FaTwitter,FaLinkedin,FaGithub } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";

export default function App() {
  const [show, setShow] = useState(false);

  function handleNavbar() {
    setShow(!show);
  }

  return (
    <>
      <nav>
        <NavLink to={"/"} style={{ textDecoration: "none" }}>
          <div className="logo">
            <img src={logo} alt="logo" style={{ width: "70px",borderRadius: "50%" }} />
            <h4>Pawan Tyagi</h4>
          </div>
        </NavLink>
        <div className="NavLinks">
          <ul>
            <li><NavLink to={"/"} >Home</NavLink></li>
            <li><NavLink to={"/about"} >About</NavLink></li>
            <li><NavLink to={"/skills"} >Skill</NavLink></li>
            <li><NavLink to={"/projects"}>Projects</NavLink></li>
            <li><NavLink to={"/contact"} >Contact</NavLink></li>
          </ul>
        </div>
        {!show && (
  <button onClick={handleNavbar} className="hamburger-button text-white">
    <svg
      className="hamburger-icon w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M2 6h22M6 12h16M10 18h12"
      />
    </svg>
  </button>
)}

      </nav>
      <div className={show ? "sidebar show" : "sidebar"}>
        <RxCross2 className="close-icon" onClick={handleNavbar} />
        <ul>
          <li><NavLink to={"/"} onClick={handleNavbar}>Home</NavLink></li>
          <li><NavLink to={"/about"} onClick={handleNavbar}>About</NavLink></li>
          <li><NavLink to={"/skills"} onClick={handleNavbar}>Skill</NavLink></li>
          <li><NavLink to={"/projects"} onClick={handleNavbar}>Projects</NavLink></li>
          <li><NavLink to={"/contact"} onClick={handleNavbar}>Contact</NavLink></li>
        </ul>
        <div className='socialnav-links'>
        <div className="hero-social-link">
      <Tippy placement='bottom' content={<span style={{color: 'white'}}>Linkdin</span>} >

        <a href="https://www.linkedin.com/in/pawan-tyagi-196606270" className="home-hero__social-icon-link" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        </Tippy>
      </div>

      <div className="hero-social-link">
      <Tippy placement='bottom' content={<span style={{color: 'white'}}>Twitter</span>} >
        <a href="https://x.com/Pawantyagi15426" className="home-hero__social-icon-link" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        </Tippy>
      </div>

      <div className="hero-social-link">
      <Tippy placement='bottom' content={<span style={{color: 'white'}}>Github</span>} >
        <a href="https://github.com/Pawantyagi123" className="home-hero__social-icon-link" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        </Tippy>
      </div>

      <div className="hero-social-link">
      <Tippy placement='bottom' content={<span style={{color: 'white'}}>Dev.to</span>} >
        <a href="https://dev.to/pawantyagi123" className="home-hero__social-icon-link" target="_blank" rel="noopener noreferrer">
          <FaBookOpen />
        </a>
        </Tippy>
      </div>
        </div>
      </div>
    </>
  );
}
