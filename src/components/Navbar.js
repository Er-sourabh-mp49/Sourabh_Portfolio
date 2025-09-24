import React, { useState, useRef, useEffect } from 'react';

const Navbar = ({ activeProfile, setActiveProfile, isDark, setIsDark, isMobileMenuOpen, setIsMobileMenuOpen, currentProfile }) => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return (
    <nav className={`fixed top-4 left-4 right-4 z-50 backdrop-blur-md border transition-colors duration-300 rounded-2xl ${
      isDark 
        ? 'bg-black/80 border-gray-800' 
        : 'bg-white/80 border-gray-200'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold">
            <span className="sm:hidden">Sourabh</span>
            <span className="hidden sm:inline">{currentProfile.name}</span>
          </div>
          
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-2">
              <a href="#home" className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                isDark 
                  ? 'text-gray-300 hover:bg-gray-800 hover:text-white' 
                  : 'text-gray-600 hover:bg-gray-100 hover:text-black'
              }`}>Home</a>
              <a href="#about" className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                isDark 
                  ? 'text-gray-300 hover:bg-gray-800 hover:text-white' 
                  : 'text-gray-600 hover:bg-gray-100 hover:text-black'
              }`}>About</a>
              {activeProfile === 'developer' && (
                <a href="#skills" className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  isDark 
                    ? 'text-gray-300 hover:bg-gray-800 hover:text-white' 
                    : 'text-gray-600 hover:bg-gray-100 hover:text-black'
                }`}>Skills</a>
              )}
              <a href={activeProfile === 'artist' ? '#work' : '#projects'} className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                isDark 
                  ? 'text-gray-300 hover:bg-gray-800 hover:text-white' 
                  : 'text-gray-600 hover:bg-gray-100 hover:text-black'
              }`}>{activeProfile === 'artist' ? 'Work' : 'Projects'}</a>
              {activeProfile === 'artist' && (
                <a href="#order" className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  isDark 
                    ? 'text-gray-300 hover:bg-gray-800 hover:text-white' 
                    : 'text-gray-600 hover:bg-gray-100 hover:text-black'
                }`}>Order</a>
              )}
              <a href="#contact" className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                isDark 
                  ? 'text-gray-300 hover:bg-gray-800 hover:text-white' 
                  : 'text-gray-600 hover:bg-gray-100 hover:text-black'
              }`}>Contact</a>
            </div>
          </div>
          
          {/* Right Side Controls */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full transition-colors ${
                isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
            
            {/* Profile Toggle Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <span className="text-sm font-medium">
                  {activeProfile === 'developer' ? 'Developer' : 'Artist'}
                </span>
                <svg className={`w-4 h-4 transition-transform ${
                  isProfileDropdownOpen ? 'rotate-180' : ''
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isProfileDropdownOpen && (
                <div className={`absolute right-0 mt-2 w-32 rounded-lg shadow-lg border ${
                  isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                }`}>
                  <button
                    onClick={() => {
                      setActiveProfile('developer');
                      setIsProfileDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm rounded-t-lg transition-colors ${
                      activeProfile === 'developer'
                        ? isDark ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'
                        : isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    Developer
                  </button>
                  <button
                    onClick={() => {
                      setActiveProfile('artist');
                      setIsProfileDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm rounded-b-lg transition-colors ${
                      activeProfile === 'artist'
                        ? isDark ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'
                        : isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    Artist
                  </button>
                </div>
              )}
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 border-t ${
            isDark ? 'border-gray-800' : 'border-gray-200'
          }`}>
            <div className="flex flex-col space-y-2 pt-4">
              <a href="#home" className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                isDark 
                  ? 'text-gray-300 hover:bg-gray-800 hover:text-white' 
                  : 'text-gray-600 hover:bg-gray-100 hover:text-black'
              }`} onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              <a href="#about" className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                isDark 
                  ? 'text-gray-300 hover:bg-gray-800 hover:text-white' 
                  : 'text-gray-600 hover:bg-gray-100 hover:text-black'
              }`} onClick={() => setIsMobileMenuOpen(false)}>About</a>
              {activeProfile === 'developer' && (
                <a href="#skills" className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  isDark 
                    ? 'text-gray-300 hover:bg-gray-800 hover:text-white' 
                    : 'text-gray-600 hover:bg-gray-100 hover:text-black'
                }`} onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
              )}
              <a href={activeProfile === 'artist' ? '#work' : '#projects'} className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                isDark 
                  ? 'text-gray-300 hover:bg-gray-800 hover:text-white' 
                  : 'text-gray-600 hover:bg-gray-100 hover:text-black'
              }`} onClick={() => setIsMobileMenuOpen(false)}>{activeProfile === 'artist' ? 'Work' : 'Projects'}</a>
              {activeProfile === 'artist' && (
                <a href="#order" className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  isDark 
                    ? 'text-gray-300 hover:bg-gray-800 hover:text-white' 
                    : 'text-gray-600 hover:bg-gray-100 hover:text-black'
                }`} onClick={() => setIsMobileMenuOpen(false)}>Order</a>
              )}
              <a href="#contact" className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                isDark 
                  ? 'text-gray-300 hover:bg-gray-800 hover:text-white' 
                  : 'text-gray-600 hover:bg-gray-100 hover:text-black'
              }`} onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
              
              {/* Mobile Profile Toggle */}
              <div className={`flex space-x-1 rounded-full p-1 w-fit ${
                isDark ? 'bg-gray-800' : 'bg-gray-100'
              }`}>
                <button
                  onClick={() => setActiveProfile('developer')}
                  className={`px-3 py-1.5 text-sm rounded-full transition-all ${
                    activeProfile === 'developer' 
                      ? isDark ? 'bg-white text-black' : 'bg-black text-white'
                      : isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Developer
                </button>
                <button
                  onClick={() => setActiveProfile('artist')}
                  className={`px-3 py-1.5 text-sm rounded-full transition-all ${
                    activeProfile === 'artist' 
                      ? isDark ? 'bg-white text-black' : 'bg-black text-white'
                      : isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Artist
                </button>
              </div>
              
              {/* Mobile Theme Toggle */}
              <button
                onClick={() => setIsDark(!isDark)}
                className={`flex items-center space-x-2 p-2 rounded-lg transition-colors w-fit ${
                  isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {isDark ? (
                  <>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Light Mode</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                    <span className="text-sm">Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;