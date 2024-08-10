import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-red-700 text-white py-12">
      <div className="container mx-auto flex flex-col items-center">
        {/* Scroll to Top Button */}
        <button onClick={scrollToTop} className="text-3xl mb-6">
          <i className="fas fa-arrow-up"></i>
        </button>
        
        <div className="w-full flex flex-col md:flex-row justify-between items-start">
          {/* About Us Section */}
          <div className="text-center md:text-left md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-2">About Us</h2>
            <p className="text-sm">
              The Restbeef Steakhouse was est in 1989 in Chicago City. With more than 30 years of experience and base on traditional recipes, we understand how to best serve our customers through tried and true service principles.
            </p>
          </div>

          {/* Stay In Touch Section */}
          <div className="text-center md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-2">Stay In Touch</h2>
            <form className="flex flex-col items-center md:flex-row md:justify-center">
              <input type="email" placeholder="Enter your email" className="p-2 rounded text-black mb-2 md:mb-0 md:mr-2"/>
              <button className="bg-white text-red-700 px-4 py-2 rounded">Subscribe</button>
            </form>
            <div className="flex justify-center mt-4 space-x-4">
              <a href="/" className="text-2xl"><i className="fab fa-facebook"></i></a>
              <a href="/" className="text-2xl"><i className="fab fa-twitter"></i></a>
              <a href="/" className="text-2xl"><i className="fab fa-instagram"></i></a>
              <a href="/" className="text-2xl"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          {/* Contacts Section */}
          <div className="text-center md:text-right md:w-1/3">
            <h2 className="text-3xl font-bold mb-2">Contacts</h2>
            <p className="text-sm">817 N sennaoua Ave,</p>
            <p className="text-sm">+213.77.77.77.77</p>
            <p className="text-sm">Everyday from 10am - 11pm</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
