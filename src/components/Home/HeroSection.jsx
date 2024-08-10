import React from 'react';
import heroImage from '../../assets/Hero.jpg'; // Ensure the path is correct
import Header from '../Header';

const HeroSection = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Non-blurred background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Blurred background */}
      <div 
        className="absolute inset-0 bg-cover bg-center filter blur-sm opacity-70"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
        <Header />
        <div className="mt-16">
          <h2 className="font-greyqo text-lg md:text-5xl mb-2">Best Steaks and Grill</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">RESTBEEF STEAKHOUSE</h1>
          <p className="text-sm md:text-lg mb-8">We are making the original steaks based on traditional recipes. We use only fresh meat from the best suppliers. Our staff are professionals, and we make everything to leave our clients satisfied.</p>
          <div className="flex flex-wrap justify-center space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto">
              Watch Menu
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto">
              Book a Table
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
