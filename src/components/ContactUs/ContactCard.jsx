import React from 'react';

const ContactCard = () => {
  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      title: "Call Us",
      line1: "+91 98765 43210",
      line2: "+91 87654 32109",
      description: "Speak directly with our experts",
      buttonText: "Call Now",
      buttonAction: () => window.open('tel:+919876543210', '_self')
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      ),
      title: "WhatsApp",
      line1: "Instant Support",
      line2: "24/7 Available",
      description: "Get immediate answers to your queries",
      buttonText: "Chat Now",
      buttonAction: () => window.open('https://wa.me/919876543210', '_blank')
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
      title: "Email",
      line1: "info@bdglobal.com",
      line2: "support@bdglobal.com",
      description: "Detailed inquiries and documentation",
      buttonText: "Send Email",
      buttonAction: () => window.open('mailto:info@bdglobal.com', '_self')
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
      ),
      title: "Book Meeting",
      line1: "Free Consultation",
      line2: "30 Minutes",
      description: "Schedule a detailed discussion",
      buttonText: "Book Now",
      buttonAction: () => console.log('Book meeting clicked')
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-black mb-4">
            Multiple Ways to Reach Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the most convenient way to connect with our team
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <div 
              key={index}
              className="text-center bg-gray-50 rounded p-8 shadow-lg transition-all duration-300 transform hover:-translate-y-1 min-h-[380px] flex flex-col justify-between"
            >
              {/* Top Section */}
              <div>
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-r from-custom-black via-teal-700 to-green-400 text-white rounded-full flex items-center justify-center mb-5 mx-auto shadow-md">
                  {method.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-custom-black mb-3">
                  {method.title}
                </h3>

                {/* Contact Details */}
                <div className="mb-4 space-y-1">
                  <p className="text-sm font-medium text-custom-black">
                    {method.line1}
                  </p>
                  <p className="text-sm font-medium text-custom-black">
                    {method.line2}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-8 leading-relaxed px-2">
                  {method.description}
                </p>
              </div>

              {/* Bottom Section - Button */}
              <div className="">
                <button
                  onClick={method.buttonAction}
                  className="w-full px-4 py-2.5 border-2 cursor-pointer border-gray-400 text-custom-black rounded-md hover:bg-black hover:text-white hover:border-white transition-all duration-300 font-medium text-sm bg-white"
                >
                  {method.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactCard;