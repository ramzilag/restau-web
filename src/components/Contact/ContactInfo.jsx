import React from 'react';

const ContactInfo = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between text-center md:text-left">
        <div className="mb-8 md:mb-0">
          <h3 className="font-greyqo text-red-600 text-5xl  mb-4">Working Hours</h3>
          <p className="text-gray-700">Weekdays<br/>From 10:00 to 23:00</p>
          <p className="text-gray-700 mt-4">Weekend<br/>From 10:00 to 23:00<br/>or to the last client</p>
        </div>
        <div className="mb-8 md:mb-0">
          <h3 className="font-greyqo text-red-600 text-5xl  mb-4">Contact Info</h3>
          <p className="text-gray-700">Our Phone<br/>+213.77.77.77.77</p>
          <p className="text-gray-700 mt-4">Our Location<br/>817 N sennaoua Ave,<br/>algeria, IL 60622</p>
        </div>
        <div>
          <h3 className="font-greyqo text-red-600 text-5xl  mb-4">Stay in Touch</h3>
          <p className="text-gray-700">Social Links</p>
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            {/* Replace # with actual links */}
            <a href="/"><i className="fab fa-facebook-f text-gray-700"></i></a>
            <a href="/"><i className="fab fa-twitter text-gray-700"></i></a>
            <a href="/"><i className="fab fa-instagram text-gray-700"></i></a>
            <a href="/"><i className="fab fa-youtube text-gray-700"></i></a>
          </div>
          <p className="text-gray-700 mt-4">Email and Support</p>
          <p className="text-gray-700">General: ramzi@gg.com</p>
          <p className="text-gray-700">Clients Support:ramzi@gg.com </p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
