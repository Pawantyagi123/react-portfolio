import React from 'react'
import image from "../assets/Image/notfound.jpg"
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-red-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Image Section */}
          <div className="flex-1 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <div className="relative overflow-hidden rounded-3xl border border-slate-700/50 shadow-2xl">
              <img 
                src={image} 
                alt="404 Not Found" 
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating 404 Badge */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-red-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-4xl shadow-2xl shadow-red-500/50 animate-bounce">
              404
            </div>
          </div>

          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            {/* Large 404 Text */}
            <div className="space-y-2">
              <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Oops!
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-purple-500 rounded-full mx-auto lg:mx-0"></div>
            </div>

            {/* Error Message */}
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Page Not Found
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed max-w-md">
                The page you're looking for doesn't exist or has been moved. Don't worry, let's get you back on track!
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/" 
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
              >
                <svg 
                  className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="relative z-10">Back to Home</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <button 
                onClick={() => window.history.back()}
                className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <svg 
                  className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Go Back
              </button>
            </div>

            {/* Error Code Details */}
            <div className="pt-6 space-y-2">
              <p className="text-sm text-gray-500">
                Error Code: <span className="text-red-400 font-mono">404</span>
              </p>
              <p className="text-sm text-gray-500">
                Status: <span className="text-red-400 font-mono">Page Not Found</span>
              </p>
            </div>
          </div>
        </div>

        {/* Additional Help Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link 
              to="/projects" 
              className="px-4 py-2 bg-slate-800/50 border border-slate-700 text-gray-300 text-sm rounded-lg hover:border-blue-500/50 hover:text-white transition-all duration-300"
            >
              View Projects
            </Link>
            <Link 
              to="/about" 
              className="px-4 py-2 bg-slate-800/50 border border-slate-700 text-gray-300 text-sm rounded-lg hover:border-blue-500/50 hover:text-white transition-all duration-300"
            >
              About Me
            </Link>
            <Link 
              to="/contact" 
              className="px-4 py-2 bg-slate-800/50 border border-slate-700 text-gray-300 text-sm rounded-lg hover:border-blue-500/50 hover:text-white transition-all duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
