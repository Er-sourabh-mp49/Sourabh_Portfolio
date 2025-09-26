import React, { useEffect, useRef, useState } from 'react';

const About = ({ activeProfile, isDark }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState({
    commissionWork: 150,
    happyClients: 120,
    yearsExperience: 5
  });
  const sectionRef = useRef(null);
  
  // Animate stats on component mount
  useEffect(() => {
    if (activeProfile === 'artist' && isVisible) {
      const animateStats = () => {
        let commissionCount = 0;
        let clientCount = 0;
        let yearCount = 0;
        
        const interval = setInterval(() => {
          if (commissionCount < 150) commissionCount += 3;
          if (clientCount < 120) clientCount += 2;
          if (yearCount < 5) yearCount += 1;
          
          setStats({
            commissionWork: commissionCount,
            happyClients: clientCount,
            yearsExperience: yearCount
          });
          
          if (commissionCount >= 150 && clientCount >= 120 && yearCount >= 5) {
            clearInterval(interval);
          }
        }, 50);
      };
      
      const timer = setTimeout(animateStats, 500);
      return () => clearTimeout(timer);
    }
  }, [activeProfile, isVisible]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section ref={sectionRef} id="about" className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
      isDark ? 'bg-gray-900/50' : 'bg-gray-50'
    } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{scrollMarginTop: '40px'}}>
      <div className="max-w-7xl mx-auto w-full">
        {activeProfile === 'developer' ? (
          // Developer About Section
          <div className="space-y-16">
            {/* About Me Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className={`text-3xl sm:text-4xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  About Me
                </h2>
                <div className={`w-12 h-1 mb-6 ${
                  isDark ? 'bg-blue-500' : 'bg-blue-600'
                }`}></div>
                <div className="space-y-4">
                  <p className={`text-base leading-relaxed ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    I'm a Creative Director and UI/UX Designer from Bhopal, India, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
                  </p>
                  <p className={`text-base leading-relaxed ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
                  </p>
                </div>
              </div>
              
              {/* Image */}
              <div className="flex justify-center lg:justify-end">
                <div className={`relative w-full max-w-sm h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl ${
                  isDark ? 'bg-gray-800' : 'bg-gray-200'
                }`}>
                  <img 
                    src="/developer images/developer-photo.jpg" 
                    alt="Developer Photo"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className={`w-full h-full flex items-center justify-center text-6xl ${
                    isDark ? 'text-gray-600' : 'text-gray-400'
                  }`} style={{display: 'none'}}>
                    👨💻
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className={`absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-20 ${
                    isDark ? 'bg-blue-500' : 'bg-blue-300'
                  }`}></div>
                  <div className={`absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-20 ${
                    isDark ? 'bg-purple-500' : 'bg-purple-300'
                  }`}></div>
                </div>
              </div>
            </div>

            {/* What I'm Doing Section */}
            <div className="text-center">
              <h3 className={`text-2xl font-bold mb-2 ${
                isDark ? 'text-white' : 'text-black'
              }`}>
                What I'm Doing
              </h3>
              <div className={`w-12 h-1 mb-8 mx-auto ${
                isDark ? 'bg-blue-500' : 'bg-blue-600'
              }`}></div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                <div className={`group relative p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                  isDark ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-700/50' : 'bg-white/50 border-gray-200 hover:bg-white/80'
                } shadow-lg hover:shadow-2xl`}>
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                      isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className={`text-center font-semibold text-lg mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>Web Design</h4>
                  <p className={`text-center text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    The most modern and high-quality design made at a professional level.
                  </p>
                </div>

                <div className={`group relative p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                  isDark ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-700/50' : 'bg-white/50 border-gray-200 hover:bg-white/80'
                } shadow-lg hover:shadow-2xl`}>
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                      isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                  </div>
                  <h4 className={`text-center font-semibold text-lg mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>Web Development</h4>
                  <p className={`text-center text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    High-quality development of sites at the professional level.
                  </p>
                </div>

                <div className={`group relative p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                  isDark ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-700/50' : 'bg-white/50 border-gray-200 hover:bg-white/80'
                } shadow-lg hover:shadow-2xl`}>
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                      isDark ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className={`text-center font-semibold text-lg mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>Mobile Apps</h4>
                  <p className={`text-center text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Professional development of applications for iOS and Android.
                  </p>
                </div>

                <div className={`group relative p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                  isDark ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-700/50' : 'bg-white/50 border-gray-200 hover:bg-white/80'
                } shadow-lg hover:shadow-2xl`}>
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                      isDark ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-100 text-orange-600'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className={`text-center font-semibold text-lg mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>Photography</h4>
                  <p className={`text-center text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    I make high-quality photos of any category at a professional level.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Artist About Section
          <div className="space-y-16">
            {/* About Me Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <div className="flex justify-center lg:justify-start">
                <div className={`relative w-full max-w-sm h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl ${
                  isDark ? 'bg-gray-800' : 'bg-gray-200'
                }`}>
                  <img 
                    src="/artist-images/artist-photo.jpg" 
                    alt="Artist Photo"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className={`w-full h-full flex items-center justify-center text-6xl ${
                    isDark ? 'text-gray-600' : 'text-gray-400'
                  }`} style={{display: 'none'}}>
                    🎨
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className={`absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-20 ${
                    isDark ? 'bg-amber-500' : 'bg-amber-300'
                  }`}></div>
                  <div className={`absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-20 ${
                    isDark ? 'bg-orange-500' : 'bg-orange-300'
                  }`}></div>
                </div>
              </div>
              
              {/* Text Content */}
              <div>
                <h2 className={`text-3xl sm:text-4xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  About Me
                </h2>
                <div className={`w-12 h-1 mb-6 ${
                  isDark ? 'bg-amber-500' : 'bg-amber-600'
                }`}></div>
                <div className="space-y-4">
                  <p className={`text-base leading-relaxed ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    I'm a Creative Artist and Pencil Sketch Specialist from Bhopal, India, working in traditional and digital art mediums. I enjoy turning complex emotions into simple, beautiful and expressive artworks.
                  </p>
                  <p className={`text-base leading-relaxed ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    My job is to create your portrait so that it captures your personality and essence while being visually striking. Moreover, I add personal touch to your artwork and make sure that it is eye-catching and meaningful. My aim is to bring across your story and identity in the most creative way. I created artwork for many satisfied clients.
                  </p>
                  
                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className={`text-center p-4 rounded-xl ${
                      isDark ? 'bg-gray-800/50 border border-gray-700' : 'bg-white border border-gray-200 shadow-sm'
                    }`}>
                      <div className={`text-2xl font-bold mb-1 ${
                        isDark ? 'text-amber-400' : 'text-amber-600'
                      }`}>{stats.commissionWork}+</div>
                      <h4 className={`font-semibold text-sm mb-1 ${
                        isDark ? 'text-white' : 'text-black'
                      }`}>Total Commission Work</h4>
                      <p className={`text-xs ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>Completed Projects</p>
                    </div>
                    
                    <div className={`text-center p-4 rounded-xl ${
                      isDark ? 'bg-gray-800/50 border border-gray-700' : 'bg-white border border-gray-200 shadow-sm'
                    }`}>
                      <div className={`text-2xl font-bold mb-1 ${
                        isDark ? 'text-green-400' : 'text-green-600'
                      }`}>{stats.happyClients}+</div>
                      <h4 className={`font-semibold text-sm mb-1 ${
                        isDark ? 'text-white' : 'text-black'
                      }`}>Happy Clients</h4>
                      <p className={`text-xs ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>Satisfied Customers</p>
                    </div>
                    
                    <div className={`text-center p-4 rounded-xl ${
                      isDark ? 'bg-gray-800/50 border border-gray-700' : 'bg-white border border-gray-200 shadow-sm'
                    }`}>
                      <div className={`text-2xl font-bold mb-1 ${
                        isDark ? 'text-purple-400' : 'text-purple-600'
                      }`}>{stats.yearsExperience}+</div>
                      <h4 className={`font-semibold text-sm mb-1 ${
                        isDark ? 'text-white' : 'text-black'
                      }`}>Years Experience</h4>
                      <p className={`text-xs ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>In Art Field</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* What I'm Doing Section */}
            <div className="text-center">
              <h3 className={`text-2xl font-bold mb-2 ${
                isDark ? 'text-white' : 'text-black'
              }`}>
                What I'm Doing
              </h3>
              <div className={`w-12 h-1 mb-8 mx-auto ${
                isDark ? 'bg-amber-500' : 'bg-amber-600'
              }`}></div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                <div className={`group relative p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                  isDark ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-700/50' : 'bg-white/50 border-gray-200 hover:bg-white/80'
                } shadow-lg hover:shadow-2xl`}>
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                      isDark ? 'bg-amber-500/20 text-amber-400' : 'bg-amber-100 text-amber-600'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className={`text-center font-semibold text-lg mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>Portrait Drawing</h4>
                  <p className={`text-center text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    The most realistic and high-quality portraits made at a professional level.
                  </p>
                </div>

                <div className={`group relative p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                  isDark ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-700/50' : 'bg-white/50 border-gray-200 hover:bg-white/80'
                } shadow-lg hover:shadow-2xl`}>
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                      isDark ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-100 text-orange-600'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className={`text-center font-semibold text-lg mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>Charcoal Art</h4>
                  <p className={`text-center text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    High-quality charcoal artwork with dramatic shadows and depth.
                  </p>
                </div>

                <div className={`group relative p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                  isDark ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-700/50' : 'bg-white/50 border-gray-200 hover:bg-white/80'
                } shadow-lg hover:shadow-2xl`}>
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                      isDark ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-600'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className={`text-center font-semibold text-lg mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>Custom Sketches</h4>
                  <p className={`text-center text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Professional custom sketches for any occasion or purpose.
                  </p>
                </div>

                <div className={`group relative p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                  isDark ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-700/50' : 'bg-white/50 border-gray-200 hover:bg-white/80'
                } shadow-lg hover:shadow-2xl`}>
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                      isDark ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className={`text-center font-semibold text-lg mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>Digital Art</h4>
                  <p className={`text-center text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    I create high-quality digital artwork and illustrations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;