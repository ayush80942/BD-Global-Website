import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
      ),
      title: "Complete Backend Ownership",
      description: "From accounting to HR to legal to MIS — one partner for everything.",
      badge: "100% Qualified Team"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: "AI-Supported, Professionally Reviewed",
      description: "Automation accelerates execution; experts ensure accuracy and compliance.",
      badge: "No Hidden Costs"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
      title: "Scalable & Cost-Efficient",
      description: "Build a strong backend without hiring internal teams across departments.",
      badge: "500+ Services Completed"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
        </svg>
      ),
      title: "24/7 WhatsApp Support",
      description: "Get instant answers to your queries through our dedicated WhatsApp support. We're always here when you need us.",
      badge: "24/7 Available"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-black mb-4">
            Why Choose BD Global?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're more than just service providers – we're your trusted business partners
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Icon Circle */}
              <div className="w-20 h-20 bg-teal-600 text-white rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-custom-black mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 min-h-[80px]">
                {feature.description}
              </p>

              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                {feature.badge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;