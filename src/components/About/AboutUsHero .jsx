import React from 'react';
import heroImage from '../../assets/Hero.jpg'; // Ensure the path is correct
import Header from '../Header';

const AboutUsHero = () => {
  return (
    <div className="relative h-[50vh] md:h-[40vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
        <Header />
        <div>
          <h2 className="text-2xl md:text-4xl font-bold">Our Story</h2>
          <h1 className="text-3xl md:text-5xl font-bold">ABOUT US</h1>
        </div>
      </div>
    </div>
  );
}

export default AboutUsHero;
