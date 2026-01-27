import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../commonComponents/Navbar/Navbar';
import { Assets } from '../../assets/assets';
import Button from '../commonComponents/Button/Button';
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-linear-to-r from-slate-800 via-teal-700 to-emerald-400 py-6">
      {/* Background overlay with business people silhouette effect */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0">
        <img src={Assets.BgImgae} alt="Background" className="object-cover w-full h-full opacity-70" />
      </div>

      {/* Header integrated within Home */}
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center pt-32 pb-12">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl leading-tight">
          A Fully Managed Business Backend {' '}
          <br />
          <span className="text-orange-400">So You Can Focus on Growth</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-gray-200 mb-12 max-w-3xl leading-relaxed font-light">
          BD Global Services operates as your extended business operations team, managing accounting, compliance, HR, legal, MIS, technology and financial planning — with AI-assisted systems and qualified professionals ensuring accuracy, speed and reliability.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          <Button
            children="Get a Proposal"
            onClick={() => navigate("/contact")}
          />
          <Link
            to="/pricing"
            className="border border-white text-white px-6 py-3 rounded-md text-sm font-semibold 
               hover:bg-white hover:text-black transition-all duration-300 ease-in-out 
               flex items-center justify-center shadow-lg"
          >
            View Pricing
          </Link>

          <Link
            to="/contact"
            className="border border-white text-white px-6 py-3 rounded-md text-sm font-semibold 
               hover:bg-white hover:text-black transition-all duration-300 ease-in-out 
               flex items-center justify-center shadow-lg"
          >
            Book Free Consultation
          </Link>
        </div>


        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-center">
          <div className="text-white">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">500+</div>
            <div className="text-xs md:text-sm text-gray-200 font-medium">Happy Clients</div>
          </div>
          <div className="text-white">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">15+</div>
            <div className="text-xs md:text-sm text-gray-200 font-medium">Years Experience</div>
          </div>
          <div className="text-white">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">100%</div>
            <div className="text-xs md:text-sm text-gray-200 font-medium">Qualified Professionals</div>
          </div>
          <div className="text-white">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">24/7</div>
            <div className="text-xs md:text-sm text-gray-200 font-medium">WhatsApp Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;