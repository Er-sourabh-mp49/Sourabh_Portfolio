import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = ({ isDark }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = 'service_in3ljmg'; // Replace with your EmailJS service ID
      const templateId = 'template_vhjisfz'; // Replace with your EmailJS template ID
      const publicKey = 'TXO6KFaFI1LfbG-7q'; // Replace with your EmailJS public key

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
        // to_email: 'sourabhmp49@gmail.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      showNotification('Failed to send message. Please try again or contact me directly.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6" style={{scrollMarginTop: '40px'}}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-black'
          }`}>
            Let's Work Together
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Info */}
          <div>
            <h3 className={`text-2xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Get In Touch
            </h3>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  isDark ? 'bg-blue-500/20' : 'bg-blue-100'
                }`}>
                  <svg className={`w-6 h-6 ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className={`font-semibold ${
                    isDark ? 'text-white' : 'text-black'
                  }`}>Email</h4>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                    sourabhmp49@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  isDark ? 'bg-green-500/20' : 'bg-green-100'
                }`}>
                  <svg className={`w-6 h-6 ${
                    isDark ? 'text-green-400' : 'text-green-600'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className={`font-semibold ${
                    isDark ? 'text-white' : 'text-black'
                  }`}>Phone</h4>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                    91+ 8964087020
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  isDark ? 'bg-purple-500/20' : 'bg-purple-100'
                }`}>
                  <svg className={`w-6 h-6 ${
                    isDark ? 'text-purple-400' : 'text-purple-600'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className={`font-semibold ${
                    isDark ? 'text-white' : 'text-black'
                  }`}>Location</h4>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                    Bhopal, Madhaya Pradesh, India.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className={`font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-black'
              }`}>Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Er-sourabh-mp49"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 ${
                    isDark 
                      ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black'
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/sourabh-vishwakarma-049633253"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 ${
                    isDark 
                      ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black'
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://leetcode.com/u/Sourabh_Vishwakarma_18/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 ${
                    isDark 
                      ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black'
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.518 2.524 8.117.96 2.04-1.226 2.7-3.604 2.7-3.604h-1.751c-.25.956-.97 1.69-2.121 1.69-.817 0-1.484-.544-1.484-1.217s.667-1.217 1.484-1.217c.178 0 .35.016.514.05v1.121a.5.5 0 0 1-.981.142 1.13 1.13 0 0 0-.533-.142c-.465 0-.842.33-.842.738 0 .408.377.738.842.738.626 0 1.2-.434 1.48-1.053v-1.121c0-.4-.326-.726-.726-.726h-2.65c0-1.390.726-2.3 1.797-2.3 1.394 0 2.030 1.211 2.030 1.211v-1.564s-.636-1.147-2.030-1.147c-1.071 0-1.797.91-1.797 2.3h-.726c0-1.664.726-3.026 2.523-3.026 1.797 0 2.756 1.362 2.756 2.711v1.564c0 .4.326.726.726.726h2.65c.4 0 .726-.326.726-.726v-1.121c-.28.619-.854 1.053-1.48 1.053-.465 0-.842-.33-.842-.738 0-.408.377-.738.842-.738.178 0 .35.016.514.05v1.121a.5.5 0 0 0 .981-.142v-1.121c0-.4-.326-.726-.726-.726h-2.65c0-1.349-.959-2.711-2.756-2.711-1.797 0-2.523 1.362-2.523 3.026h.726c0-1.390.726-2.3 1.797-2.3 1.394 0 2.030 1.147 2.030 1.147v1.564s-.636-1.211-2.030-1.211c-1.071 0-1.797.91-1.797 2.3h2.65c.4 0 .726.326.726.726v1.121a1.13 1.13 0 0 1 .533.142.5.5 0 0 0 .981-.142v-1.121c-.164-.034-.336-.05-.514-.05-.817 0-1.484.544-1.484 1.217s.667 1.217 1.484 1.217c1.151 0 1.871-.734 2.121-1.69h1.751s-.66 2.378-2.7 3.604c-2.599 1.564-5.869 1.205-8.117-.96l-.039-.038-4.277-4.193a5.938 5.938 0 0 1-1.271-1.818 5.83 5.83 0 0 1-.349-1.017 5.527 5.527 0 0 1-.062-2.362 5.35 5.35 0 0 1 .125-.513 5.266 5.266 0 0 1 1.209-2.104L7.116 6.226l5.406-5.788A1.374 1.374 0 0 1 13.483 0z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`rounded-2xl p-8 ${
            isDark ? 'bg-gray-800/50 border border-gray-700' : 'bg-white border border-gray-200 shadow-lg'
          }`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-black placeholder-gray-500'
                  }`}
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-black placeholder-gray-500'
                  }`}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={2}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-black placeholder-gray-500'
                  }`}
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
                  isDark 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
        
        {/* Notification */}
        {notification && (
          <div className={`fixed top-24 right-6 px-6 py-4 rounded-lg shadow-lg z-50 transition-all duration-300 max-w-md ${
            notification.type === 'success' 
              ? 'bg-green-500 text-white' 
              : 'bg-red-500 text-white'
          }`}>
            <div className="flex items-center space-x-2">
              {notification.type === 'success' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
              <span>{notification.message}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;