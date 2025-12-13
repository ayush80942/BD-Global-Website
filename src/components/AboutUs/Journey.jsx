import React from 'react';

const WhatweDO = () => {
  const milestones = [
    {
      service: "Business Incorporation & Setup",
      description: "Company registration, licenses, documentation, MSME, GST, and complete compliance onboarding",
      side: "left"
    },
    {
      service: "Accounting, Tax & Compliance",
      description: "Automated bookkeeping, reconciliations, GST/TDS/ITR filings, ROC compliance, and financial reporting.",
      side: "right"
    },
    {
      service: "HR, Payroll & People Operations",
      description: "Employee onboarding, payroll management, HR policies, documentation, and labour law compliance.",
      side: "left"
    },
    {
      service: "Legal & Documentation",
      description: "Contracts, NDAs, MOUs, agreements, resolutions, notices — AI-assisted drafting, professionally reviewed.",
      side: "right"
    },
    {
      service: "Monthly MIS & Virtual CFO",
      description: "Website development, branding, workflow automation, CRM setup, and business tech enablement.",
      side: "left"
    },
    {
      service: "Technology & Web Services",
      description: "Website development, branding, workflow automation, CRM setup, and business tech enablement.",
      side: "right"
    },
    {
      service: "Funding Support – Debt & Equity",
      description: "Projections, CMA reports, pitch decks, investment readiness, bank loan documentation, and advisory.",
      side: "left"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-black mb-4">
            What we do !
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We function as your outsourced business department, handling all professional tasks that typically require multiple agencies or internal hires.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-950 to-emerald-600"></div>
          <div className="lg:hidden absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-teal-400 via-teal-500 to-teal-600"></div>

          {/* Timeline Items */}
          <div className="space-y-12 lg:space-y-16">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  milestone.side === 'left'
                    ? 'lg:justify-start'
                    : 'lg:justify-end'
                }`}
              >
                {/* Desktop */}
                <div className="hidden lg:flex w-full items-center">
                  {milestone.side === 'left' ? (
                    <>
                      <div className="w-5/12 pr-8 text-right">
                        <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <h3 className="text-2xl font-bold text-custom-black mb-2">
                            {milestone.service}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                      <div className="w-2/12 flex justify-center">
                        <div className="w-4 h-4 bg-teal-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                      </div>
                      <div className="w-5/12"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-5/12"></div>
                      <div className="w-2/12 flex justify-center">
                        <div className="w-4 h-4 bg-teal-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                      </div>
                      <div className="w-5/12 pl-8 text-left">
                        <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <h3 className="text-2xl font-bold text-custom-black mb-2">
                            {milestone.service}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Mobile */}
                <div className="lg:hidden flex w-full">
                  <div className="flex-shrink-0 w-16 flex justify-center">
                    <div className="w-4 h-4 bg-teal-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  </div>
                  <div className="flex-1 ml-4">
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <h3 className="text-xl font-bold text-custom-black mb-2">
                        {milestone.service}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhatweDO;
