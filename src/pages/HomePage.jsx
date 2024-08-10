import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/Home/HeroSection';
import Footer from '../components/Footer';
import MenuSection from '../components/Home/MenuSection';
import OurStory from '../components/Home/Ourstory';
import Testimonials from '../components/Home/TestimonialsSection';
import ContactForm from '../components/Home/ContactSection';
import NewsSection from '../components/Home/GallerySection';
import Aboutus from '../components/Home/AboutSection';

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <MenuSection />
      <OurStory/>
      <Testimonials/>
      <ContactForm/>
      <NewsSection/>
      <Aboutus/>
      <Footer />
    </div>
  );
}

export default HomePage;
