import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Order from './components/Order';
import Footer from './components/Footer';

function App() {
  const [activeProfile, setActiveProfile] = useState('developer');
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${
        isDark ? 'bg-black' : 'bg-white'
      }`}>
        <div className="text-center">
          <div className={`w-16 h-16 border-4 border-t-transparent rounded-full animate-spin mb-4 ${
            isDark ? 'border-blue-500' : 'border-blue-600'
          }`}></div>
          <p className={isDark ? 'text-white' : 'text-black'}>Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  const profiles = {
    developer: {
      name: "Sourabh Vishwakarma",
      title: "Frontend Developer",
      bio: "Passionate frontend developer crafting beautiful, responsive user interfaces with modern web technologies.",
      skills: ["HTML", "CSS", "JavaScript", "React", "C++", "Python"],
      projects: [
        { name: "Online Food Order", tech: "HTML, CSS, JavaScript", description: "Full-featured food ordering platform with cart functionality" },
        { name: "AI Virtual Assistant", tech: "Python, React", description: "Intelligent virtual assistant with voice recognition" },
        { name: "Tic Tac Toe Game", tech: "JavaScript, CSS", description: "Interactive game with AI opponent and score tracking" },
        { name: "Weather App", tech: "React, API", description: "Real-time weather application with location-based forecasts" },
        { name: "Task Manager", tech: "JavaScript, LocalStorage", description: "Productivity app with drag-and-drop functionality" },
        { name: "Calculator App", tech: "HTML, CSS, JavaScript", description: "Scientific calculator with advanced mathematical operations" },
        { name: "Calculator App", tech: "HTML, CSS, JavaScript", description: "Scientific calculator with advanced mathematical operations" }
      ]
    },
    artist: {
      name: "Sourabh Vishwakarma",
      title: "Pencil Sketch Artist",
      bio: "Traditional pencil sketch artist specializing in realistic portraits and detailed illustrations.",
      skills: ["Pencil Drawing", "Charcoal", "Graphite", "Portraits", "Realistic Art", "Shading"],
      projects: [
        { name: "Lord Krishna Portrait", tech: "Charcoal, Graphite", description: "Realistic detailed portrait with intricate shading" },
        { name: "Portrait Study", tech: "Pencil, Graphite", description: "Detailed human portrait showcasing realistic features" },
        { name: "Character Sketch", tech: "Pencil, Charcoal", description: "Original character design with detailed expressions" },
        { name: "Nature Study", tech: "Graphite, Pencil", description: "Detailed botanical and landscape sketches" },
        { name: "Animal Portrait", tech: "Charcoal, Pencil", description: "Realistic animal studies with texture details" }
      ]
    }
  };

  const currentProfile = profiles[activeProfile];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className={`h-full transition-all duration-150 ${
            activeProfile === 'developer' ? 'bg-blue-500' : 'bg-amber-500'
          }`}
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
      
      <Navbar 
        activeProfile={activeProfile}
        setActiveProfile={setActiveProfile}
        isDark={isDark}
        setIsDark={setIsDark}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        currentProfile={currentProfile}
      />
      
      <Hero 
        activeProfile={activeProfile}
        isDark={isDark}
        currentProfile={currentProfile}
      />
      
      <About 
        activeProfile={activeProfile}
        isDark={isDark}
      />
      
      {activeProfile === 'developer' ? (
        <>
          <Skills 
            activeProfile={activeProfile}
            isDark={isDark}
            currentProfile={currentProfile}
          />
          
          <Projects 
            activeProfile={activeProfile}
            isDark={isDark}
            currentProfile={currentProfile}
          />
        </>
      ) : (
        <>
          <Projects 
            activeProfile={activeProfile}
            isDark={isDark}
            currentProfile={currentProfile}
          />
          
          <Order 
            isDark={isDark}
          />
        </>
      )}
      
      <Contact 
        isDark={isDark}
      />
      
      <Footer 
        isDark={isDark}
        currentProfile={currentProfile}
      />
      
      {scrollProgress > 20 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`fixed bottom-6 right-6 w-12 h-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-40 ${
            activeProfile === 'developer'
              ? isDark ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'
              : isDark ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;