import React from 'react';

const ForExistingBusinesses = () => {
  const services = [
    {
      id: 1,
      title: "Books Cleanup & Migration",
      description: "Complete cleanup of existing books and migration to new system",
      features: [
        "Data Audit",
        "Error Correction",
        "System Migration",
        "Historical Records"
      ],
      price: "₹15,999",
      buttonText: "Get Quote"
    },
    {
      id: 2,
      title: "Monthly Accounting",
      description: "Complete monthly accounting with financial reports and analysis",
      features: [
        "Monthly Bookkeeping",
        "Financial Statements",
        "MIS Reports",
        "Tax Planning"
      ],
      price: "₹8,999/month",
      buttonText: "Get Quote"
    },
    {
      id: 3,
      title: "GST & TDS Returns",
      description: "Timely filing of all GST and TDS returns with compliance support",
      features: [
        "GSTR-1 GSTR-3B",
        "TDS Returns",
        "Annual Returns",
        "Notice Handling"
      ],
      price: "₹3,999/month",
      buttonText: "Get Quote"
    },
    {
      id: 4,
      title: "ROC Compliance",
      description: "Complete ROC filing and compliance for private limited companies",
      features: [
        "Annual Filing",
        "Board Resolutions",
        "Statutory Registers",
        "DIN/DSC"
      ],
      price: "₹12,999/year",
      buttonText: "Get Quote"
    },
    {
      id: 5,
      title: "HR & Payroll Management",
      description: "Complete HR and payroll solution with statutory compliance",
      features: [
        "Payroll Processing",
        "PF & ESC",
        "Form 16",
        "HR Policies"
      ],
      price: "₹199/employee",
      buttonText: "Get Quote"
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
              <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-black">
              For Existing Businesses
            </h2>
          </div>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Optimize your operations and ensure complete compliance
          </p>

          {/* Complete Package CTA */}
          <button className="bg-emerald-400 hover:bg-emerald-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
            Growth Operation Package - ₹34,999
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-teal-300 transition-all duration-300 group"
            >
              {/* Service Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-custom-black mb-3 group-hover:text-teal-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features List */}
              <div className="mb-6">
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing and CTA - Aligned in same line */}
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-bold text-custom-black">Starting</span>
                  <span className="text-lg font-bold text-custom-black">
                    {service.price}
                  </span>
                </div>
                <button className="bg-transparent border-2 border-blue-950 hover:border-teal-500 hover:bg-teal-500 hover:text-white text-gray-700 font-semibold px-6 py-2 rounded-lg transition-all duration-300">
                  {service.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForExistingBusinesses;