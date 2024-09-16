import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import "./Navbar.css";
import logo from "../Image/Pawan tyagi (3).png";

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
            <li><NavLink exact to={"/"} >Home</NavLink></li>
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
          <li><NavLink exact to={"/"} onClick={handleNavbar}>Home</NavLink></li>
          <li><NavLink to={"/about"} onClick={handleNavbar}>About</NavLink></li>
          <li><NavLink to={"/skills"} onClick={handleNavbar}>Skill</NavLink></li>
          <li><NavLink to={"/projects"} onClick={handleNavbar}>Projects</NavLink></li>
          <li><NavLink to={"/contact"} onClick={handleNavbar}>Contact</NavLink></li>
        </ul>
      </div>
    </>
  );
}
