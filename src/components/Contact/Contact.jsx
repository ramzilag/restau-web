import React from 'react';

import backimg from '../../assets/location.jpg';

const ContactPage = () => {
  return (
    <>
    
      <section className="relative h-[50vh]"> {/* Adjusted height */}
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backimg})`,
            filter: 'brightness(0.7)', // Dim the background image for better text visibility
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h2 className="font-greyqo text-lg md:text-5xl mb-2  italic">How to Find</h2> {/* Updated style */}
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide">OUR CONTACTS</h1> {/* Updated style */}
        </div>
      </section>
      
    
    </>
  );
};

export default ContactPage;
