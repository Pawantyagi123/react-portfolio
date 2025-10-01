import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { TbMenuDeep } from "react-icons/tb";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import logo from "../../assets/Image/Pawan tyagi (3).png";

export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleNavbar = () => setShow(!show);

  const handleClickNavigate = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setShow(false);
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-gray-900/80 text-white shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
          {/* Logo */}
          <NavLink to={"/"} className="flex items-center gap-3">
            <img
              src={logo}
              alt="logo"
              className="w-12 h-12 rounded-full border-2 border-emerald-400 shadow-md hover:scale-105 transition-transform duration-300"
            />
            <h4 className="text-lg md:text-xl font-bold tracking-wide">
              Pawan Tyagi
            </h4>
          </NavLink>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-8 text-base font-medium">
            {[
              { name: "Home", link: "/" },
              { name: "About", link: "#about" },
              { name: "Skills", link: "#skill" },
              { name: "Projects", link: "#project" },
              
            ].map((item) => (
              <li key={item.name}>
                {item.link === "/" ? (
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      isActive
                        ? "text-emerald-400 relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-emerald-400 after:bottom-[-6px] after:left-0"
                        : "hover:text-emerald-400 transition-colors relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-emerald-400 after:bottom-[-6px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
                    }
                  >
                    {item.name}
                  </NavLink>
                ) : (
                  <a
                    href={item.link}
                    onClick={(e) => handleClickNavigate(e, item.link)}
                    className="hover:text-emerald-400 transition-colors relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-emerald-400 after:bottom-[-6px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Toggle Button */}
          <button
            onClick={handleNavbar}
            className="block md:hidden hover:text-emerald-400 transition"
          >
            <TbMenuDeep size={28} />
          </button>
        </div>
      </nav>

      {/* Sidebar Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 md:w-64 bg-gray-900/95 backdrop-blur-lg text-white z-50 transform transition-transform duration-500 ease-in-out ${
          show ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
    onClick={handleNavbar}
    className="absolute top-4 right-4 text-white hover:text-emerald-400 transition"
  >
    <RxCross2 size={28} />
  </button>
        <div className="p-6 mt-16">
          <ul className="flex flex-col items-start gap-6 text-lg">
            {[
              { name: "Home", link: "/" },
              { name: "About", link: "#about" },
              { name: "Skills", link: "#skill" },
              { name: "Projects", link: "#project" },
            ].map((item) => (
              <li key={item.name}>
                {item.link === "/" ? (
                  <NavLink
                    to={item.link}
                    onClick={handleNavbar}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {item.name}
                  </NavLink>
                ) : (
                  <a
                    href={item.link}
                    onClick={(e) => handleClickNavigate(e, item.link)}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Social Links */}
          <div className="flex gap-4 mt-10">
            <Tippy content={<span className="text-white">LinkedIn</span>}>
              <a
                href="https://www.linkedin.com/in/pawan-tyagi-196606270"
                target="_blank"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center hover:scale-110 transition-transform shadow-md"
              >
                <FaLinkedin />
              </a>
            </Tippy>

            <Tippy content={<span className="text-white">Twitter</span>}>
              <a
                href="https://x.com/Pawantyagi15426"
                target="_blank"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center hover:scale-110 transition-transform shadow-md"
              >
                <FaTwitter />
              </a>
            </Tippy>

            <Tippy content={<span className="text-white">Github</span>}>
              <a
                href="https://github.com/Pawantyagi123"
                target="_blank"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center hover:scale-110 transition-transform shadow-md"
              >
                <FaGithub />
              </a>
            </Tippy>

            <Tippy content={<span className="text-white">Dev.to</span>}>
              <a
                href="https://dev.to/pawantyagi123"
                target="_blank"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center hover:scale-110 transition-transform shadow-md"
              >
                <FaBookOpen />
              </a>
            </Tippy>
          </div>
        </div>
      </div>
    </>
  );
}
