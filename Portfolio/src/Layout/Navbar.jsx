import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import "./Navbar.css";

import logo from "../Image/Pawan tyagi (3).png"


export default function App() {
  const [show, setShow] = useState(false);
  
  function handleNavbar() {
    setShow(!show);
  }

 
  return (
    <>
      <nav>
        <Link to={"/"} style={{textDecoration:"none"}}>
        <div className="logo">
          <img src={logo} alt="" style={{width:"60px"}}/>
          <h4>Pawan Tyagi</h4>
        </div>
        </Link>
        <div className="links">
          <ul>
            <li><Link to={"/"} onClick={handleNavbar}>Home</Link></li>
            <li><Link to={"/about"} onClick={handleNavbar}>About</Link></li>
            <li><Link to={"/projects"} onClick={handleNavbar}>Projects</Link></li>
            <li><Link to={"/contact"} onClick={handleNavbar}>Contact</Link></li>
           
          </ul>
        </div>
        {!show && <button className='hamburger' onClick={handleNavbar}></button>}
      </nav>
      <div className={show ? "sidebar show" : "sidebar"}>
         <RxCross2 className="close-icon" onClick={handleNavbar} />
        <ul>
          <li><Link to={"/"} onClick={handleNavbar}>Home</Link></li>
          <li><Link to={"/about"} onClick={handleNavbar}>About</Link></li>
          <li><Link to={"/projects"} onClick={handleNavbar}>Projects</Link></li>
          <li><Link to={"/contact"} onClick={handleNavbar}>Contact</Link></li>
        </ul>
      </div>
    </>
  );
}
