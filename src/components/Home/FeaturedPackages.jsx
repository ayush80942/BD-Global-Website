import React from 'react';
import Button from '../commonComponents/Button/Button';

const FeaturedPackages = () => {

  const packages = [
    {
      id: 1,
      name: "Starter Pack",
      badge: "Most Popular",
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
      name: "Scale & CFO Pack",
      badge: "Best Value",
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
            Featured Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to meet your specific business needs
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${pkg.highlighted ? 'border-2 border-teal-400' : 'border border-gray-200'
                } flex flex-col h-full`}
            >
              {/* Badge */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                <span className={`inline-flex items-center justify-center text-center px-4 py-1 rounded-full text-xs sm:text-sm leading-tight whitespace-nowrap text-white ${pkg.highlighted ? 'bg-green-500' : 'bg-blue-500'
                  }`}>
                  {pkg.badge}
                </span>
              </div>

              {/* Package Title */}
              <h3 className="text-2xl font-bold text-custom-black mb-4 mt-4">
                {pkg.name}
              </h3>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-custom-black">{pkg.price}</span>
                  <span className="text-lg text-gray-500 line-through ml-3">{pkg.originalPrice}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, index) => {
                  const blurStartIndex = pkg.features.length - 12;
                  return (
                    <li
                      key={index}
                      className="flex items-start"
                      style={
                        index >= blurStartIndex
                          ? (() => {
                            const maxBlur = 4; // px (final blur strength)
                            const steps = pkg.features.length - blurStartIndex - 1;
                            const blurLevel =
                              ((index - blurStartIndex) / steps) * maxBlur;

                            return {
                              filter: `blur(${blurLevel}px)`,
                              WebkitMaskImage:
                                'linear-gradient(to bottom, black 0%, black 40%, transparent 100%)',
                              maskImage:
                                'linear-gradient(to bottom, black 0%, black 40%, transparent 100%)',
                            };
                          })()
                          : undefined
                      }
                    >
                      <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-teal-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>

                      <span className="text-sm text-gray-900">
                        {feature}
                      </span>
                    </li>
                  );
                })}
              </ul>


              {/* Action Buttons */}
              <div className="mt-auto">
                <button
                  className="w-full border border-gray-300 text-custom-black hover:bg-gray-50 px-6 py-3 rounded-md text-sm font-medium transition-colors cursor-pointer"
                  onClick={() => window.location.href = `/pricing?package=${pkg.id}`}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Packages Button */}
        <div className="text-center">
          <Button onClick={() => window.location.href = '/pricing'} children="View All Packages" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;