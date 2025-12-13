import React from 'react';
import Button from '../commonComponents/Button/Button';

const WhyChoosePackages = () => {
  const features = [
    {
      id: 1,
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      ),
      title: "Client-First Commitment",
      description: "Your trust and satisfaction come first"
    },
    {
      id: 2,
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      title: "Qualified Professionals",
      description: "All work reviewed by qualified professionals from ICAI, ICSI, ICMAI & Advocates"
    },
    {
      id: 3,
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      ),
      title: "Fast Turnaround",
      description: "Most services completed within 7-15 working days"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-black mb-4">
            Why Choose Our Packages?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {features.map((feature) => (
            <div key={feature.id} className="text-center">
              {/* Icon Circle */}
              <div className="mx-auto w-20 h-20 bg-gradient-to-r from-[#0A1D43] to-[#36D399] rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-custom-black mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="bg-gradient-to-r from-[#0A1D43] to-[#36D399] rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Choose Your Package?
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get started today with a free consultation to determine the best package for your needs
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={() => window.location.href = `/contact`} className='bg-emerald-400' children="Get Free Consultation"/>

            <button className="bg-transparent border-2 border-white/60 hover:border-white hover:bg-white hover:text-gray-900 text-white font-semibold px-10 py-3 rounded-lg transition-all duration-300 w-full sm:w-auto">
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoosePackages;