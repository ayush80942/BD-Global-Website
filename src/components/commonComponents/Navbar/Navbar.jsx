import React, { useState } from 'react';
import { Assets } from '../../../assets/assets';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="relative z-20 pt-6 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Navbar */}
        <div className="hidden lg:flex items-center justify-between">
          {/* Left Section - Logo and Navigation */}
          <div className="flex items-center bg-white rounded-lg px-8 py-4 shadow-lg">
            {/* Logo */}
            <Link to="/" className="flex items-center mr-8">
              <img src={Assets.logo} alt="Background" className="w-8 h-8" />
            </Link>
            
            {/* Navigation Menu */}
            <nav className="flex items-center space-x-6">
              <Link 
                to="/" 
                className={`font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-teal-600' 
                    : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`font-medium transition-colors ${
                  isActive('/services') 
                    ? 'text-teal-600' 
                    : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                Services
              </Link>
              <Link 
                to="/pricing" 
                className={`font-medium transition-colors ${
                  isActive('/pricing') 
                    ? 'text-teal-600' 
                    : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                Pricing
              </Link>
              <Link 
                to="/about-us" 
                className={`font-medium transition-colors ${
                  isActive('/about-us') 
                    ? 'text-teal-600' 
                    : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                About Us
              </Link>
              <Link 
                to="/resources" 
                className={`font-medium transition-colors ${
                  isActive('/resources') 
                    ? 'text-teal-600' 
                    : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                Resources
              </Link>
              <Link 
                to="/contact" 
                className={`font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-teal-600' 
                    : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Right Section - Phone, WhatsApp, Get Started */}
          <div className="flex items-center bg-white rounded-lg px-6 py-3 shadow-lg">
            {/* Phone Number */}
            <div className="flex items-center mr-4">
              <svg className="w-4 h-4 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="text-gray-700 text-sm">+91 7678522441</span>
            </div>

            {/* WhatsApp Button */}
            <button 
              onClick={() => window.open('https://wa.me/917678522441', '_blank')}
              className="bg-green-500 cursor-pointer hover:bg-green-600 text-white px-4 py-2 rounded-md mr-3 flex items-center text-sm font-medium transition-colors">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp
            </button>

            {/* Get Started Button */}
            <Link 
              to="/contact"
              className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Tablet Navbar */}
        <div className="hidden md:flex lg:hidden items-center justify-between bg-white rounded-lg px-4 py-3 shadow-lg">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-bold mr-2">
              BD
            </div>
            <span className="text-gray-800 font-semibold text-lg">BD Global</span>
          </Link>

          {/* Tablet Actions */}
          <div className="flex items-center space-x-3">
            <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md flex items-center text-sm font-medium transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </button>
            <button 
              onClick={toggleMobileMenu}
              className="bg-gray-800 text-white px-3 py-2 rounded-md"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="flex md:hidden items-center justify-between bg-white rounded-lg px-4 py-3 shadow-lg">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="bg-teal-600 text-white px-2 py-1 rounded text-xs font-bold mr-2">
              BD
            </div>
            <span className="text-gray-800 font-semibold text-base">BD Global</span>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="bg-gray-800 text-white px-3 py-2 rounded-md"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Navigation Links */}
            <nav className="flex flex-col">
              <Link 
                to="/" 
                onClick={closeMobileMenu}
                className={`px-6 py-4 border-b border-gray-100 font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-teal-600 bg-teal-50' 
                    : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                onClick={closeMobileMenu}
                className={`px-6 py-4 border-b border-gray-100 font-medium transition-colors ${
                  isActive('/services') 
                    ? 'text-teal-600 bg-teal-50' 
                    : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
                }`}
              >
                Services
              </Link>
              <Link 
                to="/pricing" 
                onClick={closeMobileMenu}
                className={`px-6 py-4 border-b border-gray-100 font-medium transition-colors ${
                  isActive('/pricing') 
                    ? 'text-teal-600 bg-teal-50' 
                    : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
                }`}
              >
                Pricing
              </Link>
              <Link 
                to="/about-us" 
                onClick={closeMobileMenu}
                className={`px-6 py-4 border-b border-gray-100 font-medium transition-colors ${
                  isActive('/about-us') 
                    ? 'text-teal-600 bg-teal-50' 
                    : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
                }`}
              >
                About Us
              </Link>
              <Link 
                to="/resources" 
                onClick={closeMobileMenu}
                className={`px-6 py-4 border-b border-gray-100 font-medium transition-colors ${
                  isActive('/resources') 
                    ? 'text-teal-600 bg-teal-50' 
                    : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
                }`}
              >
                Resources
              </Link>
              <Link 
                to="/contact" 
                onClick={closeMobileMenu}
                className={`px-6 py-4 border-b border-gray-100 font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-teal-600 bg-teal-50' 
                    : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Actions */}
            <div className="p-4 bg-gray-50 space-y-3">
              {/* Phone Number */}
              <div className="flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-gray-700 text-sm">+91 7678522441</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col space-y-2">
                <button 
                  onClick={() => window.open('https://wa.me/917678522441', '_blank')}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md flex items-center justify-center text-sm font-medium transition-colors">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp
                </button>
                <Link 
                  to="/contact"
                  onClick={closeMobileMenu}
                  className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-md text-center text-sm font-medium transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;