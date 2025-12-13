import React from 'react'
import HeroSection from '../commonComponents/HeroSection/HeroSection';

function ServiceHero() {
  const features = [
    {
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      ),
      text: "No Hidden Charges"
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      ),
      text: "ICAI, ICSI, ICMAI Professionals & Advocates"
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      ),
      text: "24/7 Support"
    }
  ];

  return (
    <HeroSection
      title="Our"
      highlightedWord="Services"
      features={features}
      showNavbar={true}
      subtitle="End-to-End Business Solutions for Every Stage of Growth"
      backgroundGradient="from-custom-black via-teal-700 to-green-400"
      highlightColor="text-orange-400"
    />
  )
}

export default ServiceHero;