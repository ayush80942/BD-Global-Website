import React from 'react';
import { Assets } from '../../assets/assets';

const OurStory = () => {

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FEFEFD]">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-black mb-4">
          Our Story
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          One integrated partner handling your entire backend, so you can focus on growing your business.
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center">
          <img
            src={Assets.contactUsPic}
            alt="Contact Us"
            className="w-full max-w-5xl h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default OurStory;
