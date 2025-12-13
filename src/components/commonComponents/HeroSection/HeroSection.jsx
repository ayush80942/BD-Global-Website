import React from 'react';
import Navbar from '../Navbar/Navbar';

const HeroSection = ({ 
  title, 
  highlightedWord, 
  subtitle, 
  features = [], 
  showNavbar = true,
  backgroundGradient = "from-custom-black via-teal-700 to-green-400",
  highlightColor = "text-orange-400"
}) => {
    return (
        <div className={`relative bg-linear-to-r ${backgroundGradient}`}>
            {/* Background overlay */}
            <div className="absolute inset-0 bg-opacity-20"></div>

            {/* Header integrated within Hero */}
            {showNavbar && <Navbar />}

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center -mt-20 pt-48 pb-20">
                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight">
                    {title}{' '}
                    {highlightedWord && (
                        <span className={highlightColor}>{highlightedWord}</span>
                    )}
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-3xl leading-relaxed font-light">
                    {subtitle}
                </p>

                {/* Features List */}
                {features.length > 0 && (
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 text-white"
                            >
                                <div className="w-5 h-5 bg-white bg-opacity-90 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                                    <div className="w-3 h-3 bg-teal-500 bg-opacity-80 rounded-full flex items-center justify-center">
                                        {feature.icon || (
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                                <span className="text-base md:text-lg font-medium">
                                    {feature.text}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default HeroSection;