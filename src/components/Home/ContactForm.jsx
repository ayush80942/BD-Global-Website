import React, { useState } from 'react';
import Button from '../commonComponents/Button/Button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    serviceType: '',
    preferredCallbackTime: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919876543210', '_blank');
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-black mb-4">
            Let's Start Your Business Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get in touch with our experts for a free consultation and personalized business solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-custom-black mb-1">Phone</h3>
                <p className="text-gray-600">+91 98765 43210</p>
                <p className="text-gray-600">+91 87654 32109</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-custom-black mb-1">Email</h3>
                <p className="text-gray-600">info@bdglobal.com</p>
                <p className="text-gray-600">support@bdglobal.com</p>
              </div>
            </div>

            {/* Office Address */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-custom-black mb-1">Office Address</h3>
                <p className="text-gray-600">123 Business Tower,</p>
                <p className="text-gray-600">Commercial Complex,</p>
                <p className="text-gray-600">Mumbai - 400001, India</p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-custom-black mb-1">Business Hours</h3>
                <p className="text-gray-600">Mon - Sat: 9:00 AM - 7:00 PM</p>
                <p className="text-gray-600">Sunday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>

            {/* Instant Support Card */}
            <div className="bg-gradient-to-r from-custom-black to-green-400 rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Instant Support</h3>
              <p className="text-white/90 mb-4">Get immediate answers on WhatsApp</p>
              <button 
                onClick={handleWhatsAppClick}
                className="bg-white cursor-pointer text-custom-black hover:bg-gray-100 px-6 py-2 rounded-lg font-medium transition-colors duration-300"
              >
                Chat on WhatsApp
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-custom-black mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-custom-black mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-custom-black mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Mobile and Service Type Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-custom-black mb-2">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-custom-black mb-2">
                    Service Type
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Select service type</option>
                    <option value="company-registration">Company Registration</option>
                    <option value="gst-registration">GST Registration</option>
                    <option value="accounting">Accounting Services</option>
                    <option value="compliance">Compliance</option>
                    <option value="website-development">Website Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Preferred Callback Time */}
              <div>
                <label className="block text-sm font-medium text-custom-black mb-2">
                  Preferred Callback Time
                </label>
                <select
                  name="preferredCallbackTime"
                  value={formData.preferredCallbackTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="">Select preferred time</option>
                  <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                  <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                  <option value="evening">Evening (4:00 PM - 7:00 PM)</option>
                  <option value="anytime">Anytime</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-custom-black mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all resize-vertical"
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit"
                className="w-full"
                showArrow={false}
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;