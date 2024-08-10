import React from 'react';
import deliveryImage from '../../assets/deleviry.jpg';

const DeliveryBanner = () => {
  return (
    <section 
      className="relative h-96 bg-cover bg-center mb-40 "
      style={{ backgroundImage: `url(${deliveryImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-30 "></div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
        <h2 className=" text-5xl md:text-6xl italic  mb-4">Fast and Furious</h2>
        <h1 className="text-4xl md:text-6xl font-bold">DELIVERY SERVICE</h1>
        <button className="mt-8 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded">
          LEARN MORE
        </button>
      </div>
    </section>
  );
};

export default DeliveryBanner;
