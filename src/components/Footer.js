import React from 'react';

const Footer = ({ isDark, currentProfile }) => {
  return (
    <footer className={`py-12 px-4 sm:px-6 border-t ${
      isDark ? 'border-gray-800 bg-gray-900/50' : 'border-gray-200 bg-gray-50'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className={`text-2xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              {currentProfile.name}
            </h3>
            <p className={`text-sm leading-relaxed mb-4 max-w-md ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {currentProfile.bio}
            </p>
            <div className="flex space-x-4">
              <a href="#" className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 ${
                isDark 
                  ? 'bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white' 
                  : 'bg-gray-200 text-gray-600 hover:bg-blue-600 hover:text-white'
              }`}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="" className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 ${
                isDark 
                  ? 'bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white' 
                  : 'bg-gray-200 text-gray-600 hover:bg-blue-600 hover:text-white'
              }`}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://leetcode.com/u/Sourabh_Vishwakarma_18/" className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 ${
                isDark 
                  ? 'bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white' 
                  : 'bg-gray-200 text-gray-600 hover:bg-blue-600 hover:text-white'
              }`}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.518 2.524 8.117.96 2.04-1.226 2.7-3.604 2.7-3.604h-1.751c-.25.956-.97 1.69-2.121 1.69-.817 0-1.484-.544-1.484-1.217s.667-1.217 1.484-1.217c.178 0 .35.016.514.05v1.121a.5.5 0 0 1-.981.142 1.13 1.13 0 0 0-.533-.142c-.465 0-.842.33-.842.738 0 .408.377.738.842.738.626 0 1.2-.434 1.48-1.053v-1.121c0-.4-.326-.726-.726-.726h-2.65c0-1.390.726-2.3 1.797-2.3 1.394 0 2.030 1.211 2.030 1.211v-1.564s-.636-1.147-2.030-1.147c-1.071 0-1.797.91-1.797 2.3h-.726c0-1.664.726-3.026 2.523-3.026 1.797 0 2.756 1.362 2.756 2.711v1.564c0 .4.326.726.726.726h2.65c.4 0 .726-.326.726-.726v-1.121c-.28.619-.854 1.053-1.48 1.053-.465 0-.842-.33-.842-.738 0-.408.377-.738.842-.738.178 0 .35.016.514.05v1.121a.5.5 0 0 0 .981-.142v-1.121c0-.4-.326-.726-.726-.726h-2.65c0-1.349-.959-2.711-2.756-2.711-1.797 0-2.523 1.362-2.523 3.026h.726c0-1.390.726-2.3 1.797-2.3 1.394 0 2.030 1.147 2.030 1.147v1.564s-.636-1.211-2.030-1.211c-1.071 0-1.797.91-1.797 2.3h2.65c.4 0 .726.326.726.726v1.121a1.13 1.13 0 0 1 .533.142.5.5 0 0 0 .981-.142v-1.121c-.164-.034-.336-.05-.514-.05-.817 0-1.484.544-1.484 1.217s.667 1.217 1.484 1.217c1.151 0 1.871-.734 2.121-1.69h1.751s-.66 2.378-2.7 3.604c-2.599 1.564-5.869 1.205-8.117-.96l-.039-.038-4.277-4.193a5.938 5.938 0 0 1-1.271-1.818 5.83 5.83 0 0 1-.349-1.017 5.527 5.527 0 0 1-.062-2.362 5.35 5.35 0 0 1 .125-.513 5.266 5.266 0 0 1 1.209-2.104L7.116 6.226l5.406-5.788A1.374 1.374 0 0 1 13.483 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-semibold mb-4 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className={`text-sm transition-colors ${
                  isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                }`}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className={`text-sm transition-colors ${
                  isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                }`}>
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className={`text-sm transition-colors ${
                  isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                }`}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className={`text-sm transition-colors ${
                  isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                }`}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className={`text-sm transition-colors ${
                  isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                }`}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`font-semibold mb-4 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Contact
            </h4>
            <ul className="space-y-2">
              <li className={`text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                sourabhmp49gmail.com
              </li>
              <li className={`text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                    91+ 8964087020
              </li>
              <li className={`text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                    Bhopal, Madhaya Pradesh, India.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center ${
          isDark ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <p className={`text-sm ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            &copy; 2024 {currentProfile.name}. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className={`text-sm transition-colors ${
              isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
            }`}>
              Privacy Policy
            </a>
            <a href="#" className={`text-sm transition-colors ${
              isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
            }`}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;