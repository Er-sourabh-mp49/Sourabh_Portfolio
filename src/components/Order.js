import React, { useState } from 'react';

const Order = ({ isDark }) => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      name: "Basic Portrait",
      price: "₹2,000",
      features: ["Single person portrait", "A4 size (8x12 inches)", "Pencil sketch", "2-3 days delivery"],
      popular: false
    },
    {
      name: "Premium Portrait", 
      price: "₹3,500",
      features: ["Single person portrait", "A3 size (12x16 inches)", "Charcoal & Graphite", "Detailed shading", "3-5 days delivery"],
      popular: true
    },
    {
      name: "Custom Artwork",
      price: "₹5,000+",
      features: ["Multiple subjects", "Custom size", "Mixed medium", "Complex backgrounds", "7-10 days delivery"],
      popular: false
    }
  ];

  return (
    <section id="order" className="py-16 px-4 sm:px-6" style={{scrollMarginTop: '40px'}}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-black'
          }`}>
            Order Custom Artwork
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Choose from our packages or request a custom quote for your unique vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div key={index} className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
              pkg.popular 
                ? isDark ? 'bg-blue-600/20 border-2 border-blue-500' : 'bg-blue-50 border-2 border-blue-500'
                : isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200 shadow-lg'
            }`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className={`text-xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>{pkg.name}</h3>
                <div className={`text-3xl font-bold ${
                  pkg.popular ? 'text-blue-500' : isDark ? 'text-white' : 'text-black'
                }`}>{pkg.price}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className={`flex items-center ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => setSelectedPackage(pkg)}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                  pkg.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : isDark ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-black'
                }`}
              >
                Select Package
              </button>
            </div>
          ))}
        </div>

        <div className={`rounded-2xl overflow-hidden ${isDark ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' : 'bg-gradient-to-br from-blue-50 to-white border border-gray-200 shadow-xl'}`}>
          <div className={`p-8 text-center ${isDark ? 'bg-blue-600/10' : 'bg-blue-600/5'}`}>
            <h3 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              Ready to Bring Your Vision to Life?
            </h3>
            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Let's create something beautiful together
            </p>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${isDark ? 'bg-blue-600/20' : 'bg-blue-100'}`}>
                  <svg className={`w-8 h-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>Email Me</h4>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-3`}>Quick response guaranteed</p>
                <a href="mailto:sourabhmp49@gmail.com" className={`inline-block px-6 py-2 rounded-lg font-medium transition-colors ${isDark ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>
                  sourabhmp49@gmail.com
                </a>
              </div>

              <div className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${isDark ? 'bg-green-600/20' : 'bg-green-100'}`}>
                  <svg className={`w-8 h-8 ${isDark ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>Call Me</h4>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-3`}>Direct consultation available</p>
                <a href="tel:+918964087020" className={`inline-block px-6 py-2 rounded-lg font-medium transition-colors ${isDark ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-green-600 hover:bg-green-700 text-white'}`}>
                  +91 8964087020
                </a>
              </div>

              <div className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${isDark ? 'bg-purple-600/20' : 'bg-purple-100'}`}>
                  <svg className={`w-8 h-8 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>Order Process</h4>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-3`}>Simple 6-step process</p>
                <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className={`px-6 py-2 rounded-lg font-medium transition-colors ${isDark ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-purple-600 hover:bg-purple-700 text-white'}`}>
                  View Process
                </button>
              </div>
            </div>

            <div className={`mt-8 p-6 rounded-xl ${isDark ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
              <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                  <div className={`text-2xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>50%</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Advance Payment</div>
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-bold ${isDark ? 'text-green-400' : 'text-green-600'}`}>2-10</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Days Delivery</div>
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-bold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>100%</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;