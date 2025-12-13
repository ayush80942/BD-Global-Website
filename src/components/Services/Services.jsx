import React from 'react'
import Navbar from '../commonComponents/Navbar/Navbar'
import Footer from '../commonComponents/Footer/Footer'
import ServiceHero from './ServiceHero'
import ForNewBusinesses from './NewBusiness'
import ForExistingBusinesses from './ExistingBusiness'
import AddOnServices from './AddOnServices'
import GetStarted from './GetStarted'

function Services() {
  return (
    <>
        <ServiceHero/>
        <ForNewBusinesses/>
        <GetStarted/>
        <Footer />
    </>
  )
}

export default Services