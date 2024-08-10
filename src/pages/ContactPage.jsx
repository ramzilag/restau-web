import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact/Contact'
import ContactInfo from '../components/Contact/ContactInfo';
import DeliveryBanner from '../components/Contact/DeliveryBanner ';
import Aboutus from '../components/Home/AboutSection';

const ContactPage = () => {
  return (
    <div>
      <Header />
      <Contact/>
      <ContactInfo/>
      <DeliveryBanner/>
      
      <Aboutus/>
      
      <Footer />
    </div>
  );
}

export default ContactPage;
