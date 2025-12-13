import React from 'react';

const AddOnServices = () => {
  const services = [
    {
      id: 1,
      title: "CRM Setup & Training",
      description: "Customer relationship management system setup and team training",
      price: "₹25,999",
      buttonText: "Learn More"
    },
    {
      id: 2,
      title: "Business Pitch Deck",
      description: "Professional pitch deck for investors and business presentations",
      price: "₹15,999",
      buttonText: "Learn More"
    },
    {
      id: 3,
      title: "SOP Documentation",
      description: "Standard operating procedures documentation for business processes",
      price: "₹12,999",
      buttonText: "Learn More"
    },
    {
      id: 4,
      title: "Financial Model & Projections",
      description: "Detailed financial modeling and business projections",
      price: "₹20,999",
      buttonText: "Learn More"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Icon and Heading Aligned */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gray-50 backdrop-blur-sm rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-black">
              Add-On Services
            </h2>
          </div>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Additional services to accelerate your business growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-teal-300 transition-all duration-300 group text-center h-full flex flex-col"
            >
              {/* Service Content */}
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-custom-black mb-4 leading-tight group-hover:text-teal-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-xl font-bold text-custom-black">Starting</span>
                  <span className="text-xl font-bold text-custom-black">
                    {service.price}
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-transparent border-2 border-blue-950 hover:border-teal-500 hover:bg-teal-500 hover:text-white text-gray-700 font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                {service.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddOnServices;