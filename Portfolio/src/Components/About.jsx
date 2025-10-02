import React from "react";
import { FaDownload, FaCode, FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";
import image from "../assets/Image/profile.png"
import resume from "../assets/file/Resume 1.pdf"
export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 py-20 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image with Effects */}
          <div className="relative group animate-slide-in-left">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative">
              <div className="bg-slate-800 rounded-2xl p-2 transform transition duration-500 hover:scale-105">
                <img 
                  src={image} 
                  alt="Pawan Tyagi" 
                  className="rounded-xl w-full h-auto object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 animate-slide-in-right">
            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                <FaCode className="text-purple-400 text-2xl mb-2" />
                <p className="text-gray-300 text-sm">Frontend Developer</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300">
                <FaGraduationCap className="text-pink-400 text-2xl mb-2" />
                <p className="text-gray-300 text-sm">BCA Graduate</p>
              </div>
            </div>

            {/* Main Description */}
           <div className="bg-slate-800/30 backdrop-blur-md p-6 rounded-xl border border-slate-700/50">
  <h3 className="text-2xl font-semibold text-white mb-4">
    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Pawan Tyagi</span>
  </h3>
  <p className="text-gray-300 leading-relaxed mb-4">
    A passionate <span className="font-semibold text-white">Frontend Developer</span> from Mahendergarh, Haryana, with a strong foundation in <span className="text-purple-400">Next.js, React, Redux, and modern web technologies</span>. I hold a BCA degree and enjoy turning ideas into seamless, scalable, and visually appealing digital experiences.
  </p>
  <p className="text-gray-300 leading-relaxed">
    I focus on writing clean, efficient code and building <span className="text-pink-400">user-friendly interfaces</span> that combine performance with design. Always eager to learn and innovate, I thrive on collaborating with teams to deliver impactful solutions that make a difference.
  </p>
</div>


            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2">
              {["Html", 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind', 'Shadcn',].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm hover:scale-110 transition-transform duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Download Button */}
            <div className="pt-4">
              <a 
                href={resume} 
                download
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
              >
                Download Resume
                <FaDownload className="text-lg animate-bounce" />
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: "22", label: "Years Old" },
            { number: "BCA", label: "Degree" },
            { number: "Frontend", label: "Developer" },
            { number: "100%", label: "Dedication" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out;
        }
      `}</style>
    </div>
  );
}