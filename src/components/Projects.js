import React, { useState } from 'react';

const Projects = ({ activeProfile, isDark, currentProfile }) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectStats, setProjectStats] = useState({});
  const [likedProjects, setLikedProjects] = useState(new Set());
  const [savedProjects, setSavedProjects] = useState(new Set());
  const [notification, setNotification] = useState(null);
  const [stats, setStats] = useState({});
  const [isZoomed, setIsZoomed] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  
  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 2000);
  };
  const displayedProjects = showAll ? currentProfile.projects : currentProfile.projects.slice(0, 4);
  
  // Initialize stats from localStorage or start from 0
  React.useEffect(() => {
    const savedStats = localStorage.getItem('projectStats');
    const savedLiked = localStorage.getItem('likedProjects');
    const savedSaved = localStorage.getItem('savedProjects');
    
    if (savedStats) {
      setProjectStats(JSON.parse(savedStats));
    } else {
      const initialStats = {};
      currentProfile.projects.forEach((_, index) => {
        initialStats[index] = {
          likes: 0,
          saves: 0,
          views: 0,
          downloads: 0
        };
      });
      setProjectStats(initialStats);
    }
    
    if (savedLiked) {
      setLikedProjects(new Set(JSON.parse(savedLiked)));
    }
    
    if (savedSaved) {
      setSavedProjects(new Set(JSON.parse(savedSaved)));
    }
  }, [currentProfile.projects]);
  
  const handleLike = (index, e) => {
    e?.stopPropagation();
    
    // Check if user already liked this project
    if (likedProjects.has(index)) {
      showNotification('You already liked this artwork!', 'info');
      return;
    }
    
    const newLiked = new Set(likedProjects);
    const newStats = { ...projectStats };
    
    newLiked.add(index);
    newStats[index] = { ...newStats[index], likes: (newStats[index]?.likes || 0) + 1 };
    showNotification('Liked! ❤️', 'success');
    
    setLikedProjects(newLiked);
    setProjectStats(newStats);
    
    // Save to localStorage
    localStorage.setItem('likedProjects', JSON.stringify([...newLiked]));
    localStorage.setItem('projectStats', JSON.stringify(newStats));
  };
  
  const handleSave = (index, e) => {
    e?.stopPropagation();
    const newSaved = new Set(savedProjects);
    const newStats = { ...projectStats };
    
    if (savedProjects.has(index)) {
      newSaved.delete(index);
      newStats[index] = { ...newStats[index], saves: Math.max(0, (newStats[index]?.saves || 0) - 1) };
      showNotification('Removed from saved', 'info');
    } else {
      newSaved.add(index);
      newStats[index] = { ...newStats[index], saves: (newStats[index]?.saves || 0) + 1 };
      showNotification('Saved successfully! 📌', 'success');
    }
    
    setSavedProjects(newSaved);
    setProjectStats(newStats);
    
    // Save to localStorage
    localStorage.setItem('savedProjects', JSON.stringify([...newSaved]));
    localStorage.setItem('projectStats', JSON.stringify(newStats));
  };
  
  const handleView = (index) => {
    const newStats = { ...projectStats };
    newStats[index] = { ...newStats[index], views: (newStats[index]?.views || 0) + 1 };
    setProjectStats(newStats);
    localStorage.setItem('projectStats', JSON.stringify(newStats));
  };
  
  const handleDownload = (index, projectName) => {
    const newStats = { ...projectStats };
    newStats[index] = { ...newStats[index], downloads: (newStats[index]?.downloads || 0) + 1 };
    setProjectStats(newStats);
    localStorage.setItem('projectStats', JSON.stringify(newStats));
    
    // Simulate download (since actual images may not exist)
    showNotification('Download started! 📥', 'success');
    
    // Optional: Create actual download if image exists
    try {
      const link = document.createElement('a');
      link.href = `/artist-images/${projectName.toLowerCase().replace(/\s+/g, '-')}.jpg`;
      link.download = `${projectName.replace(/\s+/g, '_')}_artwork.jpg`;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.log('Download simulation');
    }
  };
  const projectIcons = {
    'Online Food Order Website': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    'Shifra AI Virtual Assistant': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    'Tic Tac Toe Game': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M16 14h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    'Weather App': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    'Task Manager': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    'Calculator App': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  };

  return (
    <section id={activeProfile === 'developer' ? 'projects' : 'work'} className={`py-16 px-4 sm:px-6 ${
      isDark ? 'bg-gray-900/50' : 'bg-gray-50'
    }`} style={{scrollMarginTop: '40px'}}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-black'
          }`}>
            {activeProfile === 'developer' ? 'Featured Projects' : 'Portfolio'}
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {activeProfile === 'developer' 
              ? 'Some of the projects I\'ve built with passion and dedication'
              : 'A collection of my artistic works and creative expressions'
            }
          </p>
        </div>
        
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayedProjects.map((project, index) => {
            const stats = activeProfile === 'artist' ? projectStats[index] : null;
            const isLiked = likedProjects.has(index);
            const isSaved = savedProjects.has(index);
            
            return (
            <div 
              key={index} 
              className={`group relative rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 ${
                isDark 
                  ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' 
                  : 'bg-white hover:bg-gray-50 border border-gray-200 shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={`/images/project-${index + 1}.jpg`}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className={`w-full h-full flex items-center justify-center ${
                  isDark ? 'bg-gray-700' : 'bg-gray-100'
                }`} style={{display: 'none'}}>
                  <div className={`p-4 rounded-xl ${
                    isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {projectIcons[project.name] || (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    )}
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
              
              {/* Project Title */}
              <h3 className={`font-bold mb-3 transition-colors text-xl ${
                isDark ? 'text-white group-hover:text-blue-500' : 'text-black group-hover:text-blue-500'
              }`}>
                {project.name}
              </h3>
              
              {/* Tech Stack / Medium */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.split(', ').map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-3">
                <button 
                  onClick={() => {
                    handleView(index);
                    setSelectedProject(project);
                  }}
                  className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isDark ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {activeProfile === 'artist' ? 'View Artwork' : 'View Project'}
                </button>
                <button 
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    isDark ? 'border border-gray-600 text-gray-400 hover:bg-gray-700' : 'border border-gray-300 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>
              </div>
            </div>
          )})}
        </div>
        
        {/* View All Projects Button */}
        {currentProfile.projects.length > 4 && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setShowAll(!showAll)}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105 ${
                isDark ? 'border border-gray-600 text-gray-300 hover:bg-gray-800' : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              {showAll ? 'Show Less' : `View All ${activeProfile === 'artist' ? 'Artworks' : 'Projects'} (${currentProfile.projects.length})`}
            </button>
          </div>
        )}
        
        {/* Modern Artwork Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelectedProject(null)}>
            <div className={`max-w-5xl w-full max-h-[95vh] rounded-3xl overflow-hidden shadow-2xl ${
              isDark ? 'bg-gray-900' : 'bg-white'
            }`} onClick={(e) => e.stopPropagation()}>
              
              {/* Header */}
              <div className={`flex items-center justify-between p-6 border-b ${
                isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50/50'
              }`}>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    isDark ? 'bg-amber-500/20 text-amber-400' : 'bg-amber-100 text-amber-600'
                  }`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className={`text-2xl font-bold ${
                      isDark ? 'text-white' : 'text-black'
                    }`}>{selectedProject.name}</h2>
                    <p className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>Pencil Sketch Artwork</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLike(currentProfile.projects.indexOf(selectedProject), e);
                    }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all hover:scale-105 ${
                      likedProjects.has(currentProfile.projects.indexOf(selectedProject))
                        ? 'bg-red-500 text-white'
                        : isDark ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <svg className="w-4 h-4" fill={likedProjects.has(currentProfile.projects.indexOf(selectedProject)) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="text-sm font-medium">{projectStats[currentProfile.projects.indexOf(selectedProject)]?.likes || 0}</span>
                  </button>
                  
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      isDark ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="flex flex-col lg:flex-row h-[calc(95vh-120px)]">
                {/* Image Section */}
                <div className={`flex-1 relative bg-gradient-to-br ${
                  isDark ? 'from-gray-800 to-gray-900' : 'from-gray-50 to-gray-100'
                } flex items-center justify-center p-8`}>
                  <img 
                    src={`/artist-images/${selectedProject.name.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                    alt={selectedProject.name}
                    className={`max-w-full max-h-full object-contain rounded-2xl shadow-2xl cursor-zoom-in transition-all duration-500 ${
                      isZoomed ? 'scale-125 cursor-zoom-out' : 'scale-100 hover:scale-105'
                    }`}
                    onClick={() => setIsZoomed(!isZoomed)}
                    onLoad={(e) => {
                      setImageLoaded(true);
                      setImageDimensions({
                        width: e.target.naturalWidth,
                        height: e.target.naturalHeight
                      });
                    }}
                    onError={(e) => {
                      e.target.src = '/artist-images/Krishna-image.jpg';
                    }}
                  />
                  
                  {/* Zoom Indicator */}
                  <div className={`absolute bottom-4 right-4 px-3 py-2 rounded-full backdrop-blur-md text-sm font-medium ${
                    isDark ? 'bg-black/50 text-white' : 'bg-white/50 text-black'
                  }`}>
                    {isZoomed ? 'Click to zoom out' : 'Click to zoom in'}
                  </div>
                </div>
                
                {/* Info Section */}
                <div className={`lg:w-96 p-6 flex flex-col ${
                  isDark ? 'bg-gray-800/30' : 'bg-gray-50/30'
                }`}>
                  <div className="flex-1">
                    <p className={`text-base leading-relaxed mb-6 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>{selectedProject.description}</p>
                    
                    {/* Medium Tags */}
                    <div className="mb-6">
                      <h4 className={`text-sm font-semibold mb-3 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>Medium Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.split(', ').map((tech, index) => (
                          <span key={index} className={`px-3 py-2 text-sm rounded-xl font-medium transition-all hover:scale-105 ${
                            isDark ? 'bg-amber-500/20 text-amber-400 hover:bg-amber-500/30' : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                          }`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Stats */}
                    <div className={`grid grid-cols-3 gap-4 p-4 rounded-2xl mb-6 ${
                      isDark ? 'bg-gray-700/50' : 'bg-white/50'
                    }`}>
                      <div className="text-center">
                        <div className={`text-2xl font-bold ${
                          isDark ? 'text-white' : 'text-black'
                        }`}>{projectStats[currentProfile.projects.indexOf(selectedProject)]?.views || 0}</div>
                        <div className={`text-xs ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>Views</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-2xl font-bold ${
                          isDark ? 'text-white' : 'text-black'
                        }`}>{projectStats[currentProfile.projects.indexOf(selectedProject)]?.likes || 0}</div>
                        <div className={`text-xs ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>Likes</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-2xl font-bold ${
                          isDark ? 'text-white' : 'text-black'
                        }`}>{projectStats[currentProfile.projects.indexOf(selectedProject)]?.saves || 0}</div>
                        <div className={`text-xs ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>Saves</div>
                      </div>
                    </div>
                    
                    {/* Downloads Counter */}
                    <div className={`text-center p-3 rounded-xl mb-4 ${
                      isDark ? 'bg-gray-700/30' : 'bg-white/30'
                    }`}>
                      <div className={`text-lg font-semibold ${
                        isDark ? 'text-white' : 'text-black'
                      }`}>{projectStats[currentProfile.projects.indexOf(selectedProject)]?.downloads || 0}</div>
                      <div className={`text-xs ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>Downloads</div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button 
                      onClick={() => {
                        setSelectedProject(null);
                        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`w-full py-3 px-6 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg ${
                        isDark 
                          ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-black hover:from-amber-400 hover:to-orange-400' 
                          : 'bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-500 hover:to-orange-500'
                      }`}
                    >
                      Commission Similar Artwork
                    </button>
                    
                    <div className="flex gap-3">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSave(currentProfile.projects.indexOf(selectedProject), e);
                        }}
                        className={`flex-1 py-2 px-4 rounded-lg font-medium border transition-all hover:scale-105 ${
                          savedProjects.has(currentProfile.projects.indexOf(selectedProject))
                            ? 'bg-red-500 text-white border-red-500'
                            : isDark 
                              ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                              : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {savedProjects.has(currentProfile.projects.indexOf(selectedProject)) ? 'Saved' : 'Save'}
                      </button>
                      
                      <button 
                        onClick={() => handleDownload(currentProfile.projects.indexOf(selectedProject), selectedProject.name)}
                        className={`flex-1 py-2 px-4 rounded-lg font-medium border transition-all hover:scale-105 ${
                          isDark 
                            ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                            : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Notification */}
        {notification && (
          <div className={`fixed top-24 right-6 px-4 py-2 rounded-lg shadow-lg z-50 transition-all duration-300 ${
            notification.type === 'success' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
          }`}>
            {notification.message}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;