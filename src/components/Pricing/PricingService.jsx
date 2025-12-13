import React from 'react';

const AddOnServices = () => {
  const addOnServices = [
    {
      id: 1,
      title: "Additional Month Accounting",
      price: "₹5,999"
    },
    {
      id: 2,
      title: "Extra Employee Payroll",
      price: "₹199/employee"
    },
    {
      id: 3,
      title: "Additional GST Return",
      price: "₹1,999"
    },
    {
      id: 4,
      title: "ROC Annual Filing",
      price: "₹8,999"
    },
    {
      id: 5,
      title: "TDS Return Filing",
      price: "₹2,999"
    },
    {
      id: 6,
      title: "Custom Website Page",
      price: "₹2,999"
    },
    {
      id: 7,
      title: "Professional Logo Design",
      price: "₹4,999"
    },
    {
      id: 8,
      title: "Business Pitch Deck",
      price: "₹15,999"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-black mb-4">
            Add-On Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enhance your package with additional services as needed
          </p>
        </div>

        {/* Services Grid - Uniform cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {addOnServices.map((service) => (
            <div 
              key={service.id}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-teal-300 transition-all duration-300 group cursor-pointer h-40 flex flex-col justify-center"
            >
              {/* Service Content */}
              <div className="text-center">
                {/* Title */}
                <h3 className="text-base font-semibold text-custom-black mb-4 leading-tight group-hover:text-teal-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Price */}
                <div>
                  <span className="text-2xl font-bold text-blue-950">
                    {service.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddOnServices;