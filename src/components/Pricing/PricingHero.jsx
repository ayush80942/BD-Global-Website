import React from 'react'
import HeroSection from '../commonComponents/HeroSection/HeroSection';

function PricingHero() {
    const features = [
        {
            icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
            ),
            text: "Response within 2 hours"
        },
        {
            icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
            ),
            text: "Expert Consultation"
        },
        {
            icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
            ),
            text: "24/7 WhatsApp Support"
        }
    ];

    return (
        <HeroSection
            title="Simple, Transparent "
            highlightedWord="Pricing"
            subtitle="Choose the perfect package for your business needs with no hidden costs"
            features={features}
            showNavbar={true}
            backgroundGradient="from-custom-black via-teal-700 to-green-400"
            highlightColor="text-orange-400"
        />
    );
};

export default PricingHero;