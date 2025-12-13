import React from 'react';

const ForNewBusinesses = () => {
  const services = [
    {
      id: 1,
      title: "Incorporation & Business Setup",
      description: "Launch your company with a fully compliant and organized foundation.",
      features: [
        "Pvt Ltd, LLP, OPC, Partnership registration",
        "GST, PAN, TAN, PF, ESIC",
        "MSME/Udyam, Shops Act, FSSAI",
        "MOA, AOA, partnership deed",
        "Founder agreements",
        "Compliance onboarding kit",
        "Bank account assistance",
        <span><b>AI Assist:</b> Accelerated drafting and documentation preparation.</span>,
      ],
      // price: "₹6,999",
      buttonText: "Get Quote"
    },
    {
      id: 2,
      title: "Accounting, Tax & Compliance",
      description: "Accurate, reliable, and timely monthly financial operations.",
      features: [
        "Monthly bookkeeping",
        "Ledger & bank reconciliation",
        "GST, TDS, Income Tax filing",
        "ROC compliance",
        "P&L, Balance Sheet, Cash Flow",
        "Vendor & customer ledgers",
        "Compliance calendar",
        "Audit support documentation",
        <span><b>AI Assist:</b> Data extraction, classification and MIS preparation.</span>
      ],
      buttonText: "Get Quote"
    },
    {
      id: 3,
      title: "HR, Payroll & Employee Operations",
      description: "Structured processes for a smooth employee lifecycle.",
      features: [
        "Offer letters, contracts, NDAs",
        "Payroll processing",
        "PF, ESIC, PT compliance",
        "Exit management",
        "Attendance & leave systems",
        "HR policies & handbook",
        <span><b>AI Assist:</b> Instant HR document generation.</span>
      ],
      buttonText: "Get Quote"
    },
    {
      id: 4,
      title: "Legal & Business Documentation",
      description: "Professionally reviewed documentation for daily business operations.",
      features: [
        "NDAs, MOUs, service agreements",
        "Vendor & employment contracts",
        "Shareholder agreements (basic)",
        "Lease agreements",
        "Notices & resolutions",
        "Website policies",
        "Document repository setup",
        <span><b>AI Assist:</b> Smart drafts; experts finalize.</span>
      ],
      buttonText: "Get Quote"
    },
    {
      id: 5,
      title: "MIS, Reporting & Virtual CFO",
      description: "Financial clarity and strategic decision-making support.",
      features: [
        "Monthly MIS dashboard",
        "Profitability & cashflow analysis",
        "Forecasting & budgeting",
        "Pricing advisory",
        "Investor reporting",
        "Board support",
        "SOPs & internal controls",
        <span><b>AI Assist:</b> Predictive financial insights & dashboards.</span>
      ],
      buttonText: "Get Quote"
    },
    {
      id: 6,
      title: "Technology, Automation & Growth Support",
      description: "Integrated digital solutions to streamline operations and accelerate business expansion.",
      features: [
        "Website development",
        "CRM setup & automations",
        "Workflow automation",
        "Pitch deck creation",
        "CMA preparation",
        "Financial modelling",
        "Fundraising support (Debt + Equity)",
      ],
      buttonText: "Get Quote"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-10">
          {/* Icon */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gray-50 backdrop-blur-sm rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-black">
              Explore Our Services
            </h2>
          </div>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Everything your business needs to run efficiently, stay compliant and scale with confidence.
            BD Global delivers comprehensive backend management using AI-supported workflows and professional expertise, ensuring accuracy, transparency and timely execution.
          </p>
        </div>

        {/* Complete Package CTA */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 mb-10">

          <button className="w-full sm:w-auto bg-emerald-400 hover:bg-emerald-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 text-center">
            Complete Startup Success Kit - ₹6,999
          </button>

          <button className="w-full sm:w-auto bg-emerald-400 hover:bg-emerald-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 text-center">
            Complete Growth Pack - ₹14,999
          </button>

          <button className="w-full sm:w-auto bg-emerald-400 hover:bg-emerald-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 text-center">
            Scale/CFO Kit - ₹29,999
          </button>

        </div>


        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-teal-300 transition-all duration-300 group flex flex-col"
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
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
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

              {/* CTA pinned to bottom */}
              <div className="flex items-center justify-between mt-auto pt-4">
                <button className="mt-4 bg-transparent border-2 border-blue-950 hover:border-teal-500 hover:bg-teal-500 hover:text-white text-gray-700 font-semibold px-6 py-2 rounded-lg transition-all duration-300">
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

export default ForNewBusinesses;