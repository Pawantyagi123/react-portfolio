import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import { Fade } from 'react-awesome-reveal';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center px-6 py-20 relative overflow-hidden" id="home">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Main Content */}
          <Fade direction="down" cascade duration={1500}>
            <div className="flex-1 space-y-8">
              {/* Greeting Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-gray-300 text-sm font-medium">Available for work</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  HEY, I'M{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Pawan Tyagi
                  </span>
                </h1>
                
                <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
                A Result-Oriented Web Developer building and managing Websites and
                Web Applications that leads to the success of the overall product
              </p>

              {/* CTA Buttons */}
              <div className="flex items-center gap-4 pt-4">
                <Link 
                  to="/projects" 
                  className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
                >
                  <span className="relative z-10">View Projects</span>
                  <svg 
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300 relative z-10" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>

                <a 
                  href="#contact" 
                  className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-blue-500 hover:text-white transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </Fade>

          {/* Social Links Sidebar */}
          <div className="flex lg:flex-col gap-6 justify-center lg:justify-start">
            <Tippy placement='right' content={<span style={{color: 'white'}}>LinkedIn</span>}>
              <a 
                href="https://www.linkedin.com/in/pawan-tyagi-196606270" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 text-blue-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
              >
                <FaLinkedin className="text-2xl relative z-10" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </Tippy>

            <Tippy placement='right' content={<span style={{color: 'white'}}>Twitter</span>}>
              <a 
                href="https://x.com/Pawantyagi15426" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-sky-500/20 to-sky-600/20 border border-sky-500/30 text-sky-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-500/50"
              >
                <FaTwitter className="text-2xl relative z-10" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-500 to-sky-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </Tippy>

            <Tippy placement='right' content={<span style={{color: 'white'}}>Github</span>}>
              <a 
                href="https://github.com/Pawantyagi123" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-500/20 to-gray-600/20 border border-gray-500/30 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/50"
              >
                <FaGithub className="text-2xl relative z-10" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </Tippy>

            <Tippy placement='right' content={<span style={{color: 'white'}}>Dev.to</span>}>
              <a 
                href="https://dev.to/pawantyagi123" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 text-purple-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
              >
                <FaBookOpen className="text-2xl relative z-10" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </Tippy>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-gray-500 text-sm">Scroll Down</span>
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}