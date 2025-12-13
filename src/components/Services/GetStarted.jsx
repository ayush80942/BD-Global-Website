import React from 'react';
import Button from '../commonComponents/Button/Button';

const GetStarted = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 via-teal-600 to-green-400 overflow-hidden">
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-custom-black via-teal-700 to-green-400 bg-opacity-20"></div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to GetStarted?
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          Choose the perfect package for your business or contact us for a custom solution
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Primary CTA Button */}
          <Button onClick={() => window.location.href = `/pricing`} children="View Pricing" />

          {/* Secondary CTA Button */}
          <button onClick={() => window.location.href = `/contact`} className="bg-transparent border-2 border-white/60 hover:border-white hover:bg-white hover:text-gray-900 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 w-full sm:w-auto">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;