import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutUsHero from '../components/About/AboutUsHero ';
import AboutUsContent from '../components/About/AboutUsContent';
import Team from '../components/About/Team'
import Benefits from '../components/About/Benifits';
import FoodDeliveryBanner from '../components/About/fooddelevery';
import Aboutus from '../components/Home/AboutSection';
const AboutPage = () => {
  return (
    <div>
      <Header />
      <AboutUsHero/>
      <AboutUsContent/>
      <Team/>
      <Benefits/>
      <FoodDeliveryBanner/>
      <Aboutus/>
      <Footer />
    </div>
  );
}

export default AboutPage;
