import React from 'react';
import Button from '../commonComponents/Button/Button';

const Whatwedo = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 21h18" />
          <path d="M5 21V7l7-4 7 4v14" />
          <path d="M9 21v-6h6v6" />
        </svg>

      ),
      title: "Incorporation & Business Setup",
      description: "Launch your company with a fully compliant and organized foundation.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <path d="M8 6h8" />
          <path d="M8 10h8" />
          <path d="M8 14h4" />
        </svg>

      ),
      title: "Accounting, Tax & Compliance",
      description: "Accurate, reliable, and timely monthly financial operations.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="9" cy="7" r="3" />
          <circle cx="17" cy="7" r="3" />
          <path d="M3 21v-2a6 6 0 0 1 6-6h2" />
          <path d="M13 21v-2a6 6 0 0 1 6-6h2" />
        </svg>
      ),
      title: "HR, Payroll & Employee Operations",
      description: "Structured processes for a smooth employee lifecycle.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M8 13h8" />
          <path d="M8 17h6" />
        </svg>

      ),
      title: "Legal & Business Documentation",
      description: "Professionally reviewed documentation for daily business operations.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 3v18h18" />
          <path d="M7 14v4" />
          <path d="M12 10v8" />
          <path d="M17 6v12" />
        </svg>

      ),
      title: "MIS, Reporting & Virtual CFO",
      description: "Financial clarity and strategic decision-making support.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16.5,19 C17.8807119,19 19,17.8807119 19,16.5 C19,15.1192881 17.8807119,14 16.5,14 C15.1192881,14 14,15.1192881 14,16.5 C14,17.8807119 15.1192881,19 16.5,19 Z" />
              <path d="M10,5 L12,3" />
              <path d="M7.5,10 C8.88071187,10 10,8.88071187 10,7.5 C10,6.11928813 8.88071187,5 7.5,5 C6.11928813,5 5,6.11928813 5,7.5 C5,8.88071187 6.11928813,10 7.5,10 Z" />
              <path d="M8,16 L16,8" />
              <path d="M5.5,21 C6.88071187,21 8,19.8807119 8,18.5 C8,17.1192881 6.88071187,16 5.5,16 C4.11928813,16 3,17.1192881 3,18.5 C3,19.8807119 4.11928813,21 5.5,21 Z" />
              <path d="M18.5,8 C19.8807119,8 21,6.88071187 21,5.5 C21,4.11928813 19.8807119,3 18.5,3 C17.1192881,3 16,4.11928813 16,5.5 C16,6.88071187 17.1192881,8 18.5,8 Z" />
              <path d="M12,21 L14,19" />
            </g>
          </g>
        </svg>
      ),
      title: "Technology, Automation & Growth Support",
      description: "Integrated digital solutions to streamline operations and accelerate business expansion.",
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-black mb-4">
            What We Do
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive business solutions designed to support your growth at every stage
          </p>
        </div>

        {/* Services Grid - centered cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full max-w-xs"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mb-6 mx-auto">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-custom-black text-center mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-center leading-relaxed">
                {service.description}
              </p>

              {/* Features List
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul> */}
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button onClick={() => window.location.href = '/services'} children="View All Services" />
        </div>

      </div>
    </section>
  );
};

export default Whatwedo;
