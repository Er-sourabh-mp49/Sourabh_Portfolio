import React, { useState } from 'react';

const Projects = ({ activeProfile, isDark, currentProfile }) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectStats, setProjectStats] = useState({});
  const [likedProjects, setLikedProjects] = useState(new Set());
  const [savedProjects, setSavedProjects] = useState(new Set());
  const [notification, setNotification] = useState(null);
  
  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 2000);
  };
  const displayedProjects = showAll ? currentProfile.projects : currentProfile.projects.slice(0, 4);
  
  // Initialize stats for each project
  React.useEffect(() => {
    const initialStats = {};
    currentProfile.projects.forEach((_, index) => {
      initialStats[index] = {
        likes: Math.floor(Math.random() * 500) + 50,
        saves: Math.floor(Math.random() * 200) + 20,
        views: Math.floor(Math.random() * 2000) + 200
      };
    });
    setProjectStats(initialStats);
  }, [currentProfile.projects]);
  
  const handleLike = (index, e) => {
    e.stopPropagation();
    const newLiked = new Set(likedProjects);
    const newStats = { ...projectStats };
    
    if (likedProjects.has(index)) {
      newLiked.delete(index);
      newStats[index] = { ...newStats[index], likes: newStats[index].likes - 1 };
      showNotification('Removed from likes', 'info');
    } else {
      newLiked.add(index);
      newStats[index] = { ...newStats[index], likes: newStats[index].likes + 1 };
      showNotification('Added to likes! ❤️');
    }
    
    setLikedProjects(newLiked);
    setProjectStats(newStats);
  };
  
  const handleSave = (index, e) => {
    e.stopPropagation();
    const newSaved = new Set(savedProjects);
    const newStats = { ...projectStats };
    
    if (savedProjects.has(index)) {
      newSaved.delete(index);
      newStats[index] = { ...newStats[index], saves: newStats[index].saves - 1 };
      showNotification('Removed from saved', 'info');
    } else {
      newSaved.add(index);
      newStats[index] = { ...newStats[index], saves: newStats[index].saves + 1 };
      showNotification('Saved successfully! 📌');
    }
    
    setSavedProjects(newSaved);
    setProjectStats(newStats);
  };
  
  const handleView = (index) => {
    const newStats = { ...projectStats };
    newStats[index] = { ...newStats[index], views: newStats[index].views + 1 };
    setProjectStats(newStats);
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
        
        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className={`max-w-2xl w-full rounded-2xl overflow-hidden ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="relative h-64">
                <img 
                  src={`/images/project-${currentProfile.projects.indexOf(selectedProject) + 1}.jpg`}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  ×
                </button>
              </div>
              <div className="p-6">
                <h3 className={`text-2xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  {selectedProject.name}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tech.split(', ').map((tech, index) => (
                    <span key={index} className={`px-3 py-1 text-sm rounded-full ${
                      isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <p className={`text-base leading-relaxed mb-6 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {selectedProject.description}
                </p>
                <div className="flex gap-3">
                  {activeProfile === 'developer' ? (
                    <>
                      <button className={`flex-1 py-3 px-6 rounded-lg font-medium transition-colors ${
                        isDark 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}>
                        Live Demo
                      </button>
                      <button className={`flex-1 py-3 px-6 rounded-lg font-medium border transition-colors ${
                        isDark 
                          ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                          : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                      }`}>
                        Source Code
                      </button>
                    </>
                  ) : (
                    <>
                      <button className={`flex-1 py-3 px-6 rounded-lg font-medium transition-colors ${
                        isDark 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}>
                        View Details
                      </button>
                      <button className={`flex-1 py-3 px-6 rounded-lg font-medium border transition-colors ${
                        isDark 
                          ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                          : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                      }`}>
                        Source Code
                      </button>
                    </>
                  )}
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