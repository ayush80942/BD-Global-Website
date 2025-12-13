import React from 'react';

const ContactOffice = () => {
  const officeDetails = {
    name: "BD Global Office",
    address: [
      "123 Business Tower,",
      "Commercial Complex,",
      "Andheri East,",
      "Mumbai - 400001, India"
    ],
    phone: "+91 98765 43210",
    email: "info@bdglobal.com"
  };

  const handleGetDirections = () => {
    // You can replace this with actual coordinates or address
    const address = "123 Business Tower, Commercial Complex, Andheri East, Mumbai - 400001, India";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-black mb-4">
            Visit Our Office
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Located in the heart of Mumbai's business district
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Side - Office Information Card */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="space-y-8">
              
              {/* Office Address */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-custom-black mb-2">
                    {officeDetails.name}
                  </h3>
                  <div className="text-gray-600 leading-relaxed">
                    {officeDetails.address.map((line, index) => (
                      <p key={index} className="text-sm">{line}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <a 
                    href={`tel:${officeDetails.phone}`}
                    className="text-lg font-semibold text-custom-black hover:text-teal-600 transition-colors duration-300"
                  >
                    {officeDetails.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <a 
                    href={`mailto:${officeDetails.email}`}
                    className="text-lg font-semibold text-custom-black hover:text-teal-600 transition-colors duration-300"
                  >
                    {officeDetails.email}
                  </a>
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="pt-4">
                <button
                  onClick={handleGetDirections}
                  className="w-full cursor-pointer px-8 py-3 border-2 border-custom-black text-custom-black font-medium rounded-lg hover:bg-custom-black hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Get Directions
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Map Card */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 h-80 lg:h-96 flex flex-col items-center justify-center">
              {/* Map Icon */}
              {/* <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
               */}
              {/* Map Text */}
              {/* <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-700 mb-1">Interactive Map</h4>
                <p className="text-sm text-gray-500">Coming Soon</p>
              </div> */}

              {/* Optional: You can replace this with an actual embedded map */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNTInMzkuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="BD Global Office Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactOffice;