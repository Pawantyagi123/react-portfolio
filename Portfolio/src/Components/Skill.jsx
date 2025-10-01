import React, { useState } from 'react';
import { FaBootstrap, FaCss3, FaHtml5 } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiRedux } from 'react-icons/si';

export default function Skill() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: 'HTML5', icon: <FaHtml5/>, color: 'from-orange-500 to-red-500', category: 'Markup' },
    { name: 'CSS3', icon: <FaCss3/>, color: 'from-blue-500 to-cyan-500', category: 'Styling' },
    { name: 'JavaScript', icon: <IoLogoJavascript/>, color: 'from-yellow-400 to-yellow-600', category: 'Language' },
    { name: 'React', icon: <RiReactjsFill/>, color: 'from-cyan-400 to-blue-500', category: 'Library' },
    { name: 'Next.js', icon: <RiNextjsFill/>, color: 'from-slate-700 to-gray-900', category: 'Framework' },
    { name: 'Redux', icon: <SiRedux/>, color: 'from-purple-500 to-violet-600', category: 'State Management' },
    { name: 'Bootstrap', icon: <FaBootstrap/>, color: 'from-purple-600 to-indigo-600', category: 'Framework' },
    { name: 'Tailwind CSS', icon: <RiTailwindCssFill/>, color: 'from-teal-400 to-cyan-500', category: 'Framework' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 py-20 px-6" id="skill">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-down">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Frontend <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
            Proficient in modern frontend technologies and frameworks
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500`}></div>
              
              {/* Card */}
              <div className="relative bg-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 group-hover:border-transparent transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-2xl">
                {/* Icon Container */}
                <div className="flex justify-center items-center mb-4">
                  <div className={`w-24 h-24 rounded-xl bg-gradient-to-br ${skill.color} p-0.5 transform transition-transform duration-500 group-hover:scale-110`}>
                    <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center text-5xl text-white">
                      {skill.icon}
                    </div>
                  </div>
                </div>

                {/* Skill Name */}
                <h3 className="text-white font-semibold text-center mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                  {skill.name}
                </h3>

                {/* Category Tag */}
                <div className={`text-xs text-center px-3 py-1 rounded-full bg-gradient-to-r ${skill.color} bg-opacity-10 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  {skill.category}
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} animate-spin-slow`} style={{ padding: '1px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }}></div>
                </div>
              </div>

              {/* Hover Tooltip */}
              {hoveredSkill === index && (
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-xl border border-slate-700 animate-bounce-in z-10">
                  {skill.category}
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45 border-r border-b border-slate-700"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: '8+', label: 'Technologies' },
            { number: 'React', label: 'Specialist' },
            { number: '100%', label: 'Responsive' },
            { number: 'Modern', label: 'Design' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${1 + index * 0.1}s` }}
            >
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fade-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: translateX(-50%) translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }


        .animate-fade-down {
          animation: fade-down 1s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-bounce-in {
          animation: bounce-in 0.3s ease-out;
        }

       
      `}</style>
    </div>
  );
}