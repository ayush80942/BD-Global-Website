import React from 'react';

const OfficeHoursAndServices = () => {
  const officeHours = [
    { day: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
    { day: "Saturday", time: "9:00 AM - 5:00 PM" },
    { day: "Sunday", time: "10:00 AM - 4:00 PM" },
    { day: "Public Holidays", time: "Emergency Support Only" }
  ];

  const quickServices = [
    "Free Business Consultation",
    "Quote for Services",
    "Compliance Check",
    "Document Status",
    "Technical Support",
    "Account Manager Connect"
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Office Hours Card */}
          <div className="bg-white rounded-lg p-8 shadow-lg min-h-[450px] flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-custom-black">Office Hours</h3>
            </div>

            {/* Office Hours List */}
            <div className="space-y-0 mb-6 flex-grow">
              {officeHours.map((schedule, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center py-4">
                    <span className="text-sm font-medium text-gray-700">{schedule.day}</span>
                    <span className={`text-sm font-medium ${
                      schedule.time === "Emergency Support Only" 
                        ? "text-teal-600" 
                        : "text-gray-900"
                    }`}>
                      {schedule.time}
                    </span>
                  </div>
                  {index < officeHours.length  && (
                    <hr className="border-gray-200" />
                  )}
                </div>
              ))}
            </div>

            {/* Emergency Support Box */}
            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mt-auto">
              <h4 className="text-sm font-semibold text-teal-800 mb-2">Emergency Support</h4>
              <p className="text-xs text-teal-700 leading-relaxed">
                For urgent matters outside office hours, contact us via WhatsApp for immediate assistance.
              </p>
            </div>
          </div>

          {/* Quick Services Card */}
          <div className="bg-white rounded-lg p-8 shadow-lg min-h-[450px] flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-custom-black">Quick Services</h3>
            </div>

            {/* Services List */}
            <div className="space-y-5 mb-8 flex-grow">
              {quickServices.map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm font-medium text-gray-700 leading-6">{service}</span>
                </div>
              ))}
            </div>

            {/* WhatsApp Button */}
            <div className="mt-auto">
              <button 
                onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                className="w-full cursor-pointer bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Get Quick Help on WhatsApp
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OfficeHoursAndServices;