import React from 'react'
import Navbar from '../commonComponents/Navbar/Navbar';
import Footer from '../commonComponents/Footer/Footer';
import PricingHero from './PricingHero';
import PricingSection from './PricingSection';
import AddOnServices from './PricingService';
import WhyChoosePackages from './Whychoose';

function Pricing() {
  return (
    <>
        <PricingHero />
        <PricingSection />
        {/* <AddOnServices /> */}
        <WhyChoosePackages/>
        <Footer />
    </>
  )
}

export default Pricing