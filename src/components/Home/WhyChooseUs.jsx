import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: (
          <svg
            className="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <title>ic_fluent_owner_24_filled</title>
              <desc>Created with Sketch.</desc>
              <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="ic_fluent_owner_24_filled" fill="currentColor" fill-rule="nonzero">
                  <path d="M17.0016031,15.2440856 L17.0009052,21.2451182 C17.0009052,21.8527788 16.3161092,22.2081862 15.8192057,21.8584172 L12.0007623,19.1706254 L8.18435794,21.8583162 C7.68747081,22.2082475 7.00251516,21.8528589 7.00251516,21.2451182 L7.00069412,15.2459273 C8.37018531,16.3435035 10.1084262,17 12,17 C13.8926316,17 15.6317588,16.3427691 17.0016031,15.2440856 Z M12,2 C15.8659932,2 19,5.13400675 19,9 C19,12.8659932 15.8659932,16 12,16 C8.13400675,16 5,12.8659932 5,9 C5,5.13400675 8.13400675,2 12,2 Z" id="🎨-Color"> </path>
                </g>
              </g>
            </g>
          </svg>
      ),
      title: "Complete Backend Ownership",
      description: "From accounting to HR to legal to MIS — one partner for everything.",
      badge: "100% Qualified Team"
    },
    {
      icon: (
        <svg
          className="w-9 h-9"
          fill="currentColor"
          viewBox="0 0 512 512"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <title>ai</title>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="icon" fill="currentColor" transform="translate(64.000000, 64.000000)">
                <path d="M320,64 L320,320 L64,320 L64,64 L320,64 Z M171.749388,128 L146.817842,128 L99.4840387,256 L121.976629,256 L130.913039,230.977 L187.575039,230.977 L196.319607,256 L220.167172,256 L171.749388,128 Z M260.093778,128 L237.691519,128 L237.691519,256 L260.093778,256 L260.093778,128 Z M159.094727,149.47526 L181.409039,213.333 L137.135039,213.333 L159.094727,149.47526 Z M341.333333,256 L384,256 L384,298.666667 L341.333333,298.666667 L341.333333,256 Z M85.3333333,341.333333 L128,341.333333 L128,384 L85.3333333,384 L85.3333333,341.333333 Z M170.666667,341.333333 L213.333333,341.333333 L213.333333,384 L170.666667,384 L170.666667,341.333333 Z M85.3333333,0 L128,0 L128,42.6666667 L85.3333333,42.6666667 L85.3333333,0 Z M256,341.333333 L298.666667,341.333333 L298.666667,384 L256,384 L256,341.333333 Z M170.666667,0 L213.333333,0 L213.333333,42.6666667 L170.666667,42.6666667 L170.666667,0 Z M256,0 L298.666667,0 L298.666667,42.6666667 L256,42.6666667 L256,0 Z M341.333333,170.666667 L384,170.666667 L384,213.333333 L341.333333,213.333333 L341.333333,170.666667 Z M0,256 L42.6666667,256 L42.6666667,298.666667 L0,298.666667 L0,256 Z M341.333333,85.3333333 L384,85.3333333 L384,128 L341.333333,128 L341.333333,85.3333333 Z M0,170.666667 L42.6666667,170.666667 L42.6666667,213.333333 L0,213.333333 L0,170.666667 Z M0,85.3333333 L42.6666667,85.3333333 L42.6666667,128 L0,128 L0,85.3333333 Z" id="Combined-Shape"> </path>
              </g>
            </g>
          </g>
        </svg>
      ),
      title: "AI-Supported, Professionally Reviewed",
      description: "Automation accelerates execution; experts ensure accuracy and compliance.",
      badge: "No Hidden Costs"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Scalable & Cost-Efficient",
      description: "Build a strong backend without hiring internal teams across departments.",
      badge: "500+ Services Completed"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
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
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center h-full"
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
              <p className="text-gray-600 text-sm leading-relaxed mb-6 min-h-[80px] flex-1">
                {feature.description}
              </p>

              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mt-auto">
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