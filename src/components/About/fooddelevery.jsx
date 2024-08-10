import React from 'react';
import deleveryimg from '../../assets/delevery.jpg'
const FoodDeliveryBanner = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${deleveryimg})` }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white bg-opacity-90 p-8 max-w-md mx-auto text-center rounded-lg shadow-lg">
          <h2 className="font-greyqo text-red-600 text-4xl mb-4">Fast and Furious</h2>
          <h1 className="text-black text-5xl font-bold mb-6">FOOD DELIVERY</h1>
          <p className="text-lg text-gray-700 mb-6">
            We deliver fast, faster, and in the fastest way! It doesn’t matter where you are: working at the office, sitting at home, or taking a walk in the park. If you are hungry, we will find you anywhere and deliver fresh and hot meals from our menu. To make an order, select the needed meal from our menu page, fill in an order form, and wait for a call. We will call you back immediately (or maybe in 3-5 minutes), clarify the details, and send your order. All our delivery men are the fastest drivers in the world, so your order will stay hot!
          </p>
          <a href="/" className="inline-block bg-red-600 text-white py-2 px-4 rounded-full">LEARN MORE</a>
        </div>
      </div>
    </div>
  );
};

export default FoodDeliveryBanner;
