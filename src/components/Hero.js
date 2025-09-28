import React, { useState, useEffect } from 'react';

const Hero = ({ activeProfile, isDark, currentProfile }) => {



  return (
    <section id="home" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8" style={{ paddingTop: '80px', scrollMarginTop: '80px' }}>
      <div className="max-w-7xl mx-auto w-full">
        {activeProfile === 'developer' ? (
          // Developer Hero - Modern Layout
          <div className="relative">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className={`absolute top-20 left-10 w-32 h-32 rounded-lg opacity-10 animate-pulse ${isDark ? 'bg-blue-500' : 'bg-blue-300'
                }`}></div>
              <div className={`absolute top-40 right-20 w-24 h-24 rounded-full opacity-10 animate-bounce ${isDark ? 'bg-green-500' : 'bg-green-300'
                }`}></div>
              <div className={`absolute bottom-32 left-1/3 w-16 h-16 rounded-lg opacity-10 animate-pulse ${isDark ? 'bg-purple-500' : 'bg-purple-300'
                }`}></div>
            </div>

            <div className="relative z-10 text-center">


              {/* Main Title */}
              <div className="mb-8">
                <h1 className={`text-5xl sm:text-7xl md:text-8xl font-bold leading-tight mb-4 ${isDark ? 'text-white' : 'text-black'
                  }`}>
                  Frontend
                </h1>
                <h1 className={`text-4xl sm:text-6xl md:text-7xl font-light bg-gradient-to-r bg-clip-text text-transparent ${isDark ? 'from-blue-400 via-purple-400 to-green-400' : 'from-blue-600 via-purple-600 to-green-600'
                  }`}>
                  Developer
                </h1>
              </div>

              {/* Bio */}
              <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-10 ${isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                {currentProfile.bio}
              </p>



              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                  className={`px-10 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg ${isDark
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                    }`}
                >
                  View Projects
                </button>
                <a
                  href="/resume.pdf"
                  download
                  className={`px-10 py-4 rounded-full font-medium border-2 transition-all duration-300 transform hover:scale-105 inline-block text-center ${isDark
                      ? 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black'
                      : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                    }`}
                >
                  Download Resume
                </a>
              </div>

              {/* Social Links */}
              <div className="mt-8 flex justify-center gap-6">
                <a href="https://github.com/Er-sourabh-mp49" className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 ${isDark
                    ? 'bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white'
                  }`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/sourabh-vishwakarma-049633253" className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 ${isDark
                    ? 'bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white'
                  }`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>



                <a href="https://leetcode.com/u/Sourabh_Vishwakarma_18/" className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 ${isDark
                    ? 'bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white'
                  }`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.518 2.524 8.117.96 2.04-1.226 2.7-3.604 2.7-3.604h-1.751c-.25.956-.97 1.69-2.121 1.69-.817 0-1.484-.544-1.484-1.217s.667-1.217 1.484-1.217c.178 0 .35.016.514.05v1.121a.5.5 0 0 1-.981.142 1.13 1.13 0 0 0-.533-.142c-.465 0-.842.33-.842.738 0 .408.377.738.842.738.626 0 1.2-.434 1.48-1.053v-1.121c0-.4-.326-.726-.726-.726h-2.65c0-1.390.726-2.3 1.797-2.3 1.394 0 2.030 1.211 2.030 1.211v-1.564s-.636-1.147-2.030-1.147c-1.071 0-1.797.91-1.797 2.3h-.726c0-1.664.726-3.026 2.523-3.026 1.797 0 2.756 1.362 2.756 2.711v1.564c0 .4.326.726.726.726h2.65c.4 0 .726-.326.726-.726v-1.121c-.28.619-.854 1.053-1.48 1.053-.465 0-.842-.33-.842-.738 0-.408.377-.738.842-.738.178 0 .35.016.514.05v1.121a.5.5 0 0 0 .981-.142v-1.121c0-.4-.326-.726-.726-.726h-2.65c0-1.349-.959-2.711-2.756-2.711-1.797 0-2.523 1.362-2.523 3.026h.726c0-1.390.726-2.3 1.797-2.3 1.394 0 2.030 1.147 2.030 1.147v1.564s-.636-1.211-2.030-1.211c-1.071 0-1.797.91-1.797 2.3h2.65c.4 0 .726.326.726.726v1.121a1.13 1.13 0 0 1 .533.142.5.5 0 0 0 .981-.142v-1.121c-.164-.034-.336-.05-.514-.05-.817 0-1.484.544-1.484 1.217s.667 1.217 1.484 1.217c1.151 0 1.871-.734 2.121-1.69h1.751s-.66 2.378-2.7 3.604c-2.599 1.564-5.869 1.205-8.117-.96l-.039-.038-4.277-4.193a5.938 5.938 0 0 1-1.271-1.818 5.83 5.83 0 0 1-.349-1.017 5.527 5.527 0 0 1-.062-2.362 5.35 5.35 0 0 1 .125-.513 5.266 5.266 0 0 1 1.209-2.104L7.116 6.226l5.406-5.788A1.374 1.374 0 0 1 13.483 0z" />
                  </svg>
                </a>
                
              </div>

            </div>
          </div>
        ) : (
          // Artist Hero - Modern Layout
          <div className="relative text-center">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
              <div className={`absolute top-20 left-20 w-64 h-64 rounded-full opacity-10 animate-pulse ${isDark ? 'bg-gradient-to-r from-amber-400 to-orange-400' : 'bg-gradient-to-r from-amber-300 to-orange-300'
                }`}></div>
              <div className={`absolute bottom-32 right-16 w-48 h-48 rounded-full opacity-10 animate-bounce ${isDark ? 'bg-gradient-to-r from-orange-400 to-red-400' : 'bg-gradient-to-r from-orange-300 to-red-300'
                }`}></div>
              <div className={`absolute top-1/2 left-10 w-32 h-32 transform rotate-45 opacity-10 animate-spin ${isDark ? 'bg-amber-500' : 'bg-amber-400'
                }`} style={{ animationDuration: '20s' }}></div>
            </div>

            <div className="relative z-10">
              {/* Main Title with Animation */}
              <div className="mb-12">
                <h1 className={`text-5xl sm:text-7xl md:text-8xl font-black mb-4 tracking-tight ${isDark ? 'text-white' : 'text-black'
                  } transform hover:scale-105 transition-transform duration-500`}>
                  SKETCH
                </h1>
                <div className="relative">
                  <h2 className={`text-4xl sm:text-6xl md:text-7xl font-light bg-gradient-to-r bg-clip-text text-transparent animate-pulse ${isDark ? 'from-amber-400 via-orange-400 to-red-400' : 'from-amber-600 via-orange-600 to-red-600'
                    }`}>
                    ARTIST
                  </h2>
                  <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 rounded-full ${isDark ? 'bg-gradient-to-r from-amber-400 to-orange-400' : 'bg-gradient-to-r from-amber-600 to-orange-600'
                    }`}></div>
                </div>
              </div>

              {/* Bio with Typewriter Effect */}
              <p className={`text-xl sm:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                Transforming <span className={`font-semibold ${isDark ? 'text-amber-400' : 'text-amber-600'
                  }`}>imagination</span> into reality through the art of pencil sketching
              </p>

              {/* Enhanced Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button
                  onClick={() => {
                    const projectsSection = document.getElementById('work');
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className={`group relative px-12 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-2xl overflow-hidden ${isDark
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-black hover:from-amber-400 hover:to-orange-400'
                      : 'bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-500 hover:to-orange-500'
                    }`}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Explore Gallery
                  </span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </button>

                <button
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className={`group px-12 py-5 rounded-2xl border-2 font-semibold text-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 backdrop-blur-sm ${isDark
                      ? 'border-amber-400/50 text-amber-400 hover:bg-amber-400/10 hover:border-amber-300'
                      : 'border-amber-600/50 text-amber-600 hover:bg-amber-600/10 hover:border-amber-500'
                    }`}
                >
                  <span className="flex items-center gap-3">
                    <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    Commission Work
                  </span>
                </button>
              </div>

              {/* Floating Elements */}
              <div className="mt-16 flex justify-center gap-8">
                {['✏️', '🎨', '✨'].map((emoji, index) => (
                  <div key={index} className={`text-3xl animate-bounce opacity-60`} style={{ animationDelay: `${index * 0.5}s` }}>
                    {emoji}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Hero;