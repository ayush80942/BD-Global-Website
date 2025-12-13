import React, { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "We had the opportunity to work alongside BD Global Services on a common client engagement where they handled the business operations and compliance execution, while our firm was involved on the professional advisory side. Their structured processes, timely coordination, and documentation discipline ensured smooth execution of the assignment. The collaboration reflected a clear understanding of roles and regulatory requirements.",
      name: "CA Harvinder Singh",
      title: "Founder & Partner, HSDG & Associates",
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQFrTIZ6dv8w9w/profile-displayphoto-shrink_200_200/B56ZP9mKOeH0AY-/0/1735126461277?e=1767225600&v=beta&t=OWwrR9dqBNRPP3AdKkxyGp8eNJd3D76NyofIzgpbm6M",
      rating: 5
    },
    {
      id: 2,
      quote: "Excellent service for all our compliance needs. The WhatsApp support is a game-changer - we get immediate responses to all our queries.",
      name: "Neeraj Sharma",
      title: "MD, CFC Group",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3UmGLzdgbQyGjIslAb3u05ppA4QWRotMWwQ&s",
      rating: 5
    },
    {
      id: 3,
      quote: "Switched to BD Global for our accounting needs and couldn't be happier. Their team cleaned up our books and now we have complete transparency.",
      name: "Tariq Ahmed",
      title: "MD, Aksa Legacies Pvt Ltd",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQEdejTiSX6ZRA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1669439654517?e=1767225600&v=beta&t=m4UQjI3CM3r6A7kTYOqWayP9svBSlIQmn-Hr6ZGLQM0",
      rating: 5
    },
    {
      id: 4,
      quote: "Their GST filing and compliance support has been exceptional. Professional service with transparent pricing - exactly what we needed.",
      name: "Sneha Gupta",
      title: "Owner, Style Boutique",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 5,
      quote: "From company formation to ongoing support, BD Global has been our trusted partner. Their expertise in ICAI compliance is unmatched.",
      name: "Vikram Singh",
      title: "Founder, Digital Marketing Pro",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextTestimonial = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 150);
  };

  const prevTestimonial = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setIsTransitioning(false);
    }, 150);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 150);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-black mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it – hear from businesses we've helped succeed
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-6xl mx-auto mb-16 px-16">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            disabled={isTransitioning}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white border-2 border-teal-500 text-teal-500 rounded-full hover:bg-teal-500 hover:text-white transition-all duration-300 shadow-lg z-10 disabled:opacity-50"
          >
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            disabled={isTransitioning}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white border-2 border-teal-500 text-teal-500 rounded-full hover:bg-teal-500 hover:text-white transition-all duration-300 shadow-lg z-10 disabled:opacity-50"
          >
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonial Card */}
          <div className="relative">
            <div 
              className={`bg-gray-50 rounded-2xl p-8 md:p-12 text-center shadow-xl hover:shadow-2xl transition-all duration-700 ease-in-out transform ${
                isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            >
              {/* Large Quote Icon */}
              {/* <div className="text-8xl md:text-9xl text-teal-400 mb-0 leading-none select-none font-serif">"</div> */}

              {/* Stars */}
              <div className="flex justify-center mt-0 mb-6">
                {renderStars(testimonials[currentIndex].rating)}
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl text-custom-black mb-8 leading-relaxed font-medium max-w-3xl mx-auto">
                {testimonials[currentIndex].quote}
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 rounded-full mr-4 shadow-md"
                />
                <div className="text-left">
                  <div className="font-semibold text-custom-black">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonials[currentIndex].title}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  index === currentIndex ? 'bg-teal-500 scale-110' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Quote */}
              <p className="text-sm text-custom-black mb-4 leading-relaxed">
                "{testimonial.quote.substring(0, 100)}..."
              </p>

              {/* Author */}
              <div className="flex items-center justify-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full mr-3 shadow-md"
                />
                <div className="text-left">
                  <div className="font-semibold text-custom-black text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-600">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;