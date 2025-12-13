import React from 'react';

const Foundation = () => {
  const foundationPillars = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: "Mission",
      description: "To provide comprehensive, reliable, and affordable business support services through AI automation + professional expertise, enabling entrepreneurs to focus fully on what they do best — building their business"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
        </svg>
      ),
      title: "Vision",
      description: "To become India’s leading AI-enabled business consulting partner, empowering 10,000+ businesses to operate efficiently, stay compliant, and scale sustainably."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      ),
      title: "Values",
      description: "Integrity, transparency, client-centricity, and excellence in service delivery. We believe in building long-term relationships based on trust."
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-black mb-4">
            Our Foundation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Built on strong principles and unwavering commitment to client success
          </p>
        </div>

        {/* Foundation Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {foundationPillars.map((pillar, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-custom-black via-teal-700 to-green-400 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300 shadow-md">
                <div className="text-white">
                  {pillar.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-custom-black mb-4">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Foundation;