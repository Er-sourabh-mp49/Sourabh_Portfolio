import React from 'react';

const Order = ({ isDark }) => {
  const packages = [
    {
      name: "Basic",
      price: "₹ 300",
      features: ["Single portrait", "A4 size", "2-3 days"],
      popular: false
    },
    {
      name: "Premium", 
      price: "₹ 500",
      features: ["Detailed portrait", "A3 size", "3-5 days"],
      popular: true
    },
    {
      name: "Custom",
      price: "₹ 800+",
      features: ["Multiple subjects", "Any size", "7-10 days"],
      popular: false
    }
  ];

  return (
    <section id="order" className="py-16 px-4 sm:px-6" style={{scrollMarginTop: '40px'}}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-black'
          }`}>
            Commission Artwork
          </h2>
          <p className={`text-lg ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Choose your package and let's create something beautiful together.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {packages.map((pkg, index) => (
            <div key={index} className={`relative p-6 rounded-xl border transition-all hover:scale-105 ${
              pkg.popular 
                ? isDark 
                  ? 'bg-blue-500/10 border-blue-500' 
                  : 'bg-blue-50 border-blue-500'
                : isDark 
                  ? 'bg-gray-800/50 border-gray-700' 
                  : 'bg-white border-gray-200'
            }`}>
              {pkg.popular && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Popular
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <h3 className={`text-lg font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>{pkg.name}</h3>
                
                <div className={`text-2xl font-bold mb-4 ${
                  pkg.popular 
                    ? 'text-blue-500'
                    : isDark ? 'text-white' : 'text-black'
                }`}>{pkg.price}</div>

                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className={`text-sm ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      • {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-all ${
                    pkg.popular
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : isDark 
                        ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Process */}
        <div className={`p-8 rounded-xl mb-8 ${
          isDark ? 'bg-gray-800/50 border border-gray-700' : 'bg-white border border-gray-200'
        }`}>
          <h3 className={`text-xl font-bold mb-6 text-center ${
            isDark ? 'text-white' : 'text-black'
          }`}>
            How to Order
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Choose Package', desc: 'Select your preferred artwork package' },
              { step: '2', title: 'Contact Me', desc: 'Send your photo and requirements' },
              { step: '3', title: 'Pay Advance', desc: '50% payment to start the work' },
              { step: '4', title: 'Get Artwork', desc: 'Receive your completed sketch' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center font-bold ${
                  isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'
                }`}>
                  {item.step}
                </div>
                <h4 className={`font-semibold mb-2 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>{item.title}</h4>
                <p className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className={`text-center p-8 rounded-xl ${
          isDark ? 'bg-gray-800/50 border border-gray-700' : 'bg-gray-50 border border-gray-200'
        }`}>
          <h3 className={`text-xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-black'
          }`}>
            Ready to Start Your Commission?
          </h3>
          <p className={`mb-6 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Contact me to discuss your project details and get started.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:sourabhmp49@gmail.com" 
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
            >
              Email Me
            </a>
            <a 
              href="tel:+918964087020" 
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                isDark 
                  ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                  : 'bg-white hover:bg-gray-100 text-black border border-gray-300'
              }`}
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;