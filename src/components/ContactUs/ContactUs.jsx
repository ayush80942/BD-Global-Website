import React from 'react'
import Navbar from '../commonComponents/Navbar/Navbar'
import Footer from '../commonComponents/Footer/Footer'
import ContactHero from './ContactHero'
import CallToActionCard from '../commonComponents/Card/Card'
import ContactCard from './ContactCard'
import ContactForm from '../Home/ContactForm'
import ContactServices from './ContactServices'
import ContactOffice from './ContactOffice'

function ContactUs() {
  return (
    <>
        <ContactHero/>
        <ContactCard/>
        <ContactForm/>
        <ContactServices/>
        <ContactOffice/>
        <Footer />
    </>
  )
}

export default ContactUs