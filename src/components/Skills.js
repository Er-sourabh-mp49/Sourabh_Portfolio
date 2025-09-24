import React, { useState } from 'react';

const Skills = ({ activeProfile, isDark, currentProfile }) => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  
  if (activeProfile !== 'developer') return null;

  const skillIcons = {
    'HTML': (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.413l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
      </svg>
    ),
    'CSS': (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.413l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
      </svg>
    ),
    'JavaScript': (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
      </svg>
    ),
    'React': (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.095-1.36 1.56-.465-.467-.92-.992-1.36-1.56z"/>
      </svg>
    ),
    'C++': (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.109-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79V11.61h-.79v.785h-.79v.79h.79v.785h.79v-.785h.79v-.79zm2.962 0h-.79V11.61h-.79v.785h-.79v.79h.79v.785h.79v-.785h.79v-.79z"/>
      </svg>
    ),
    'Python': (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
      </svg>
    ),
  };

  const skillsData = {
    'HTML': { level: 90, color: 'orange' },
    'CSS': { level: 85, color: 'blue' },
    'JavaScript': { level: 80, color: 'yellow' },
    'React': { level: 75, color: 'cyan' },
    'C++': { level: 70, color: 'purple' },
    'Python': { level: 65, color: 'green' },
    'C':{ level: 80, color: 'red'}
  };



  return (
    <section id="skills" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8" style={{paddingTop: '40px', scrollMarginTop: '40px'}}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-black'
          }`}>
            Skills & Technologies
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Technologies I work with to bring ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {(showAllSkills ? currentProfile.skills : currentProfile.skills.slice(0, 4)).map((skill, index) => {
            const skillData = skillsData[skill];
            
            return (
              <div
                key={index}
                className={`group relative p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                  isDark 
                    ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-700/50' 
                    : 'bg-white/50 border-gray-200 hover:bg-white/80'
                } shadow-lg hover:shadow-2xl`}
              >
                {/* Skill Icon */}
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                    isDark 
                      ? skillData.color === 'orange' ? 'bg-orange-500/20 text-orange-400' :
                        skillData.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                        skillData.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400' :
                        skillData.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' :
                        skillData.color === 'purple' ? 'bg-purple-500/20 text-purple-400' : 'bg-green-500/20 text-green-400'
                      : skillData.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                        skillData.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                        skillData.color === 'yellow' ? 'bg-yellow-100 text-yellow-600' :
                        skillData.color === 'cyan' ? 'bg-cyan-100 text-cyan-600' :
                        skillData.color === 'purple' ? 'bg-purple-100 text-purple-600' : 'bg-green-100 text-green-600'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    {skillIcons[skill]}
                  </div>
                </div>
                
                {/* Skill Name */}
                <h3 className={`text-center font-semibold text-lg mb-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {skill}
                </h3>
                
                {/* Progress Bar */}
                <div className={`w-full h-2 rounded-full overflow-hidden ${
                  isDark ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ease-out ${
                      skillData.color === 'orange' ? 'bg-gradient-to-r from-orange-400 to-orange-500' :
                      skillData.color === 'blue' ? 'bg-gradient-to-r from-blue-400 to-blue-500' :
                      skillData.color === 'yellow' ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' :
                      skillData.color === 'cyan' ? 'bg-gradient-to-r from-cyan-400 to-cyan-500' :
                      skillData.color === 'purple' ? 'bg-gradient-to-r from-purple-400 to-purple-500' : 'bg-gradient-to-r from-green-400 to-green-500'
                    }`}
                    style={{ width: `${skillData.level}%` }}
                  ></div>
                </div>
                
                {/* Percentage */}
                <div className="text-center mt-2">
                  <span className={`text-sm font-medium ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {skillData.level}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* View All Skills Button */}
        {currentProfile.skills.length > 4 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAllSkills(!showAllSkills)}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              } shadow-lg hover:shadow-xl`}
            >
              {showAllSkills ? 'Show Less' : 'View All Skills'}
            </button>
          </div>
        )}
        
        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className={`text-sm ${
            isDark ? 'text-gray-500' : 'text-gray-500'
          }`}>
            Always learning and exploring new technologies
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;