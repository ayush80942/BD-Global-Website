import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import HeroSection from './HeroSection';
import Footer from '../commonComponents/Footer/Footer';
import Whatwedo from './Whatwedo';
import FeaturedPackages from './FeaturedPackages';
import WhyChooseUs from './WhyChooseUs';
import CallToActionCard from '../commonComponents/Card/Card';
import Testimonials from './Testimonials';
import ContactForm from './ContactForm';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Whatwedo />
      <WhyChooseUs />
      <FeaturedPackages />
      <CallToActionCard />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
