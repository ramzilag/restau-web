import React from 'react';
import img from '../../assets/slaade.jpg'
const OurStory = () => {
  return (
    <section className="bg-gray-100 py-16 pt-60">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
        <div className="md:w-1/2">
          <img
            src={img}
            alt="Salad and wooden spoons"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:ml-8 mt-8 md:mt-0 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="font-greyqo text-red-500 text-5xl font-semibold mb-2">Our Story</h2>
          <h3 className="text-3xl font-bold mb-4">HOW WE BEGIN</h3>
          <p className="text-gray-700 mb-6">
            The Restbeef Steakhouse was est in 1989 in Chicago City. With more than 30 years of experience and based on traditional recipes, we understand how to best serve our customers through tried service principles. Instead of following trends, we set them. We create steaks and grills we’re proud to serve and deliver it fast, with a smile. No matter where you find us, we’re making sure each meal our clients enjoy is delicious and one-of-a-kind. Our steak is always perfect and our professional team is working hard to make you happy.
          </p>
          <a href="/About" className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded">learn more About Us</a>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
