import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4 relative inline-block">
              About Us
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              I am a passionate developer dedicated to creating amazing web
              experiences. Follow me on social media to stay updated with my
              latest projects.
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 ransition-colors duration-300">
                <svg className="w-5 h-5 mt-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-blue-400">Narnaul, Haryana, India</span>
              </li>
              <li className="flex items-center gap-3  transition-colors duration-300">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-blue-400">+91 9499210600</span>
              </li>
              <li className="flex items-center gap-3  transition-colors duration-300">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-blue-400">pawantyaginnl2002@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4 relative inline-block">
              Follow Us
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </h2>
            <p className="text-gray-400 mb-6">Stay connected through social media</p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/pawan_tyagi2002/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-purple-500/50"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://x.com/Pawantyagi15426"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/50"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="https://www.facebook.com/pawan.tyagi.9480"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-600/50"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/pawan-tyagi-196606270"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-700/50"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} WebDev. All rights reserved.
            </p>
            <p>
              Designed with <span className="text-blue-400">♥</span> by{" "}
              <span className="text-white font-semibold">Pawan Tyagi</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}