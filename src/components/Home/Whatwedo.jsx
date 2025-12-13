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
  stroke="currentColor"
  strokeWidth="2"
  viewBox="0 0 24 24"
>
  <circle cx="12" cy="12" r="3" />
  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06-2.12 2.12-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21h-3v-.08a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06-2.12-2.12.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3v-3h.08a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06 2.12-2.12.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3h3v.08a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06 2.12 2.12-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21v3h-.08a1.65 1.65 0 0 0-1.51 1z" />
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
