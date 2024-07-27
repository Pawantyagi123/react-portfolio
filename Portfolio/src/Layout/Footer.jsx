import React from "react";
import "./Footer.css"; // Make sure to create this CSS file
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            I am a passionate developers dedicated to creating amazing web
            experiences. Follow me on social media to stay updated with our
            latest projects.
          </p>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <ul>
            <li>
              <span>Address:</span> Narnaul, Haryana, India
            </li>
            <li>
              <span>Phone:</span> +91 9499210600
            </li>
            <li>
              <span>Email:</span> pawantyaginnl2002@gmail.com
            </li>
          </ul>
        </div>
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="footer-social-links">
            <a href="https://www.instagram.com/pawan_tyagi2002/">
              <FaInstagram />
            </a>
            <a
              href="https://x.com/Pawantyagi15426"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/pawan.tyagi.9480"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/pawan-tyagi-196606270"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} WebDev | Designed by Pawan Tyagi
      </div>
    </footer>
  );
}
