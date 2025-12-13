import React from 'react';

const PricingSection = () => {
  const pricingPlans = [
    {
      id: 1,
      name: "Starter Pack",
      badge: "Most Popular Choice",
      badgeColor: "bg-yellow-500",
      // popularBadge: "Most Popular",
      popularBadgeColor: "bg-teal-500",
      price: "₹6,999",
      originalPrice: "₹10,000",
      savings: "Save ₹3,001",
      description: "Ideal For: New businesses, newly incorporated companies, founders setting up operations.",
      features: [
        "Incorporation (Pvt Ltd / LLP / OPC / Partnership) Support",
        "Up to 50 accounting transactions",
        "GST registration & filing",
        "Basic HR documents",
        "Monthly MIS summary",
        "Compliance reminders",
        "Standard legal documents",
        "Reviewed by qualified professionals",
        "Faster execution with AI-assisted workflows",
        "Secure data handling",
        "Dedicated relationship manager",
        "Standard compliance calendar",
        "Transparent monthly billing",
        "30-day cancellation notice"
      ],
      buttonText: "Start Your Business",
      buttonStyle: "bg-gradient-to-r from-[#0A1D43] to-[#36D399] text-white",
      downloadButton: true,
      isPopular: true,
      border: "border-2 border-teal-400"
    },
    {
      id: 2,
      name: "Growth Operations Pack",
      badge: "Best Value",
      badgeColor: "bg-blue-600",
      popularBadge: "Most Popular",
      popularBadgeColor: "bg-gray-800",
      price: "₹14,999",
      originalPrice: "₹30,000",
      savings: "Save ₹15,001",
      description: "Ideal For: SMEs, scaling businesses, D2C brands, agencies, service companies.",
      features: [
        "Bookkeeping",
        "GST + TDS + ITR filing",
        "HR & payroll up to 15 employees",
        "Full legal documentation",
        "Monthly MIS dashboard",
        "Vendor & customer reconciliation",
        "Annual ROC filing",
        "SOP setup",
        "Reviewed by qualified professionals",
        "Faster execution with AI-assisted workflows",
        "Secure data handling",
        "Dedicated relationship manager",
        "Standard compliance calendar",
        "Transparent monthly billing",
        "30-day cancellation notice"
      ],
      buttonText: "Get Growth",
      buttonStyle: "bg-gray-800 hover:bg-gray-900 text-white",
      downloadButton: true,
      isPopular: false
    },
    {
      id: 3,
      name: "Scale & CFO Pack",
      badge: "Coming Soon",
      badgeColor: "bg-gray-500",
      popularBadge: "Best Value",
      popularBadgeColor: "bg-gray-800",
      price: "₹29,999",
      originalPrice: "₹40,000",
      savings: "Save ₹10,001",
      description: "Ideal For: Fast-growing companies, investor-facing startups, mid-size firms.",
      features: [
        "Dedicated Virtual CFO",
        "Financial modelling & projections",
        "Budgeting & scenario planning",
        "Budgeting & scenario planning",
        "Pitch deck & investor reporting",
        "CMA preparation",
        "Fundraising support",
        "Board meeting support",
        "Reviewed by qualified professionals",
        "Faster execution with AI-assisted workflows",
        "Secure data handling",
        "Dedicated relationship manager",
        "Standard compliance calendar",
        "Transparent monthly billing",
        "30-day cancellation notice"
      ],
      buttonText: "Talk to CFO Team",
      buttonStyle: "bg-gray-800 hover:bg-gray-900 text-white",
      downloadButton: true,
      isPopular: false,
      isComingSoon: false
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-black mb-4">
            Choose Your Business Package
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to accelerate your business growth
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col ${plan.border || ''} ${plan.isComingSoon ? 'opacity-75' : ''}`}
            >
              {/* Top Badge - Only for first card */}
              {plan.badge && plan.isPopular && (
                <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 ${plan.badgeColor} text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1`}>
                  ⭐ {plan.badge}
                </div>
              )}

              {/* Header */}
              <div className="mb-6 mt-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-custom-black">
                    {plan.name}
                  </h3>

                  {/* Badge aligned with heading */}
                  {plan.popularBadge && (
                    <div className={`${plan.popularBadgeColor} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                      {plan.popularBadge}
                    </div>
                  )}
                </div>

                {/* Pricing */}
                <div className="mb-3">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl font-bold text-custom-black">
                      {plan.price}
                    </span>
                    <span className="text-base text-gray-500 line-through">
                      {plan.originalPrice}
                    </span>
                  </div>
                  <p className="text-teal-600 font-medium text-sm">
                    {plan.savings}
                  </p>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <ul className="space-y-2.5">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <div className="flex-shrink-0 w-4 h-4 bg-teal-100 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-2.5 h-2.5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-xs text-gray-700 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Buttons */}
              <div className="space-y-3 mt-auto">
                <button
                  className={`w-full py-3 px-6 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out rounded-lg font-semibold ${plan.buttonStyle}`}
                  disabled={plan.isComingSoon}
                >
                  {plan.buttonText}
                  {!plan.isComingSoon && (
                    <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  )}
                </button>

                {plan.downloadButton && (
                  <button className="w-full py-2.5 px-6 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;