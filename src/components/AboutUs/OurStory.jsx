import React from 'react';

const OurStory = () => {
  const challenges = [
    "Accounting firms only do accounting.",
    "HR agencies only handle staffing.",
    "Legal consultants only draft documents.",
    "Tech teams only build websites."
  ];

  const responsibilities = [
    "Financial operations",
    "Statutory compliance",
    "HR & payroll",
    "Legal documentation",
    "MIS & reporting",
    "Process automation",
    "Financial planning",
    "Investor readiness"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-custom-black mb-6">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          
          {/* Opening Statement */}
          <div className="text-center">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              BD Global was founded after recognizing a fundamental problem faced by most Indian businesses:
            </p>
            <p className="text-xl md:text-2xl font-semibold text-custom-black leading-relaxed italic border-l-4 border-teal-600 pl-6 py-4 text-left">
              "Entrepreneurs spend too much time managing backend work and too little time building their business."
            </p>
          </div>

          {/* The Problem */}
          <div className="space-y-3 pl-6 border-l-2 border-gray-300">
            {challenges.map((challenge, index) => (
              <p 
                key={index}
                className="text-gray-700 text-lg leading-relaxed"
              >
                {challenge}
              </p>
            ))}
          </div>

          {/* Impact Statement */}
          <div className="text-center">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              That leaves founders juggling multiple vendors, chasing updates, and worrying about compliance, documentation, payroll, filings, reporting and systems.
            </p>
          </div>

          <div className="w-16 h-1 bg-gray-300 mx-auto"></div>

          {/* The Solution */}
          <div className="space-y-8">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              We saw the need for a <span className="font-semibold text-teal-600">single integrated partner</span> that takes full responsibility for:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4">
              {responsibilities.map((responsibility, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2"
                >
                  <span className="text-teal-600 font-bold">•</span>
                  <p className="text-gray-700">{responsibility}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-16 h-1 bg-gray-300 mx-auto"></div>

          {/* Creation Statement */}
          <div className="text-center space-y-6">
            <p className="text-2xl md:text-3xl font-bold text-custom-black">
              BD Global Services was created to fill this gap.
            </p>
          </div>

          {/* Our Approach */}
          <div className="space-y-6 text-center">
            <p className="text-lg text-gray-700">
              By combining <span className="font-semibold">standardized operational systems</span>, <span className="font-semibold">AI-supported efficiency</span>, and <span className="font-semibold">professional oversight</span>, we built a scalable model of <span className="text-teal-600 font-bold text-xl">Business Backend as a Service (BBaaS)</span>.
            </p>
          </div>

          <div className="w-16 h-1 bg-gray-300 mx-auto"></div>

          {/* Closing Statement */}
          <div className="text-center bg-white py-12 px-8 rounded-lg shadow-sm">
            <p className="text-xl md:text-2xl font-semibold text-custom-black leading-relaxed">
              Today, BD Global supports entrepreneurs with the clarity, structure and stability needed to grow confidently.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStory;
