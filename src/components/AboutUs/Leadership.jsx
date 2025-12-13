import React from 'react';

const LeadershipTeam = () => {
  const leaders = [
    {
      id: 1,
      name: "CA Rajesh Kumar",
      designation: "Founder & Managing Partner",
      experience: "FCA, B.Com,15+ Years Experience",
      description: "Expert in corporate law, taxation, and business strategy with extensive experience in helping startups and SMEs."
    },
    {
      id: 2,
      name: "CA Priya Sharma",
      designation: "Senior Partner",
      experience: "ACA, MCOM,12+ ears Experience",
      description: "Specializes in GST, ROC filings, and regulatory compliance with a track record of zero penalties for clients."
    },
    {
      id: 3,
      name: "CS Amit Patel",
      designation: "Compliance Head",
      experience: "CS, LLB, 10+ Years Experience",
      description: "Expert in company law, legal documentation, and corporate governance with focus on startup ecosystem."
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-black mb-4">
            Leadership Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the experts who drive our mission and ensure exceptional service delivery
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {leaders.map((leader, index) => (
            <div 
              key={leader.id}
              className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden flex items-center justify-center">
                  {index === 0 ? (
                    // Sample image for first leader - replace with actual image
                    <div className="w-full h-full border-4 border-emerald-400 rounded-full flex items-center justify-center">
                      <span className="text-black text-2xl font-bold">RK</span>
                    </div>
                  ) : index === 1 ? (
                    // Placeholder circle for second leader (as shown in image)
                    <div className="w-full h-full border-4 border-emerald-400 rounded-full flex items-center justify-center">
                        <span className="text-black text-2xl font-bold">PS</span>
                    </div>
                  ) : (
                    // Sample image for third leader - replace with actual image
                    <div className="w-full h-full border-4 border-emerald-400 rounded-full flex items-center justify-center">
                      <span className="text-black text-2xl font-bold">AP</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-custom-black mb-2">
                {leader.name}
              </h3>

              {/* Designation */}
              <p className="text-emerald-400 font-medium mb-2">
                {leader.designation}
              </p>

              {/* Experience */}
              <p className="text-sm text-gray-500 mb-4">
                {leader.experience}
              </p>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm">
                {leader.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;