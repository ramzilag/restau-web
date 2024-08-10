import React from 'react';
import backgroundImage from '../../assets/burgg.jpg'; 


const ContactForm = () => {
    return (
        <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center bottom' }}>
            <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 max-w-lg w-full">
                <h2 className="text-2xl font-bold mb-2 text-center">Got Questions?</h2>
                <p className="text-center text-gray-700 mb-6">Get in touch with us</p>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">Enter your name</label>
                        <input type="text" id="name" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Enter your email</label>
                        <input type="email" id="email" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700">Enter your message</label>
                        <textarea id="message" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500" rows="4"></textarea>
                    </div>
                    <button type="submit" className="w-full py-2 px-4 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Send Your Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;

