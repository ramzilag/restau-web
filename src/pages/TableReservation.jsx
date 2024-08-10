import React from 'react';
import Header from '../components/Header'; // Adjust the path based on your project structure
import Footer from '../components/Footer'; // Adjust the path based on your project structure
import reserv from '../assets/reservatioon.jpg'
import Benefit from '../components/About/Benifits'
import Aboutus from '../components/Home/AboutSection';


 
 const TableReservation = () => {
   return (
     <div>
       <Header /> {/* Call your existing Header component */}
       <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage:  `url(${reserv})` }}>
         <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white">
           <div className="mb-8">
             <h1 className="text-6xl md:text-7xl font-extrabold">Take Your Place</h1>
             <h2 className="text-4xl md:text-5xl font-semibold mt-4">TABLE RESERVATION</h2>
           </div>
           <p className="text-lg max-w-lg mx-auto mb-8">
             If you plan your leisure in advance and do not want to get into a situation when the planned dinner is canceled due to the lack of free seats, reserve a table in advance. You can reserve a table by filling out the form below.
           </p>
         </div>
       </div>
 
       {/* Form section placed below the image */}
       <div className="w-full bg-gray-100 py-12 flex justify-center">
         <form className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-2xl">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
             <div>
               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
               <input
                 className="shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-600"
                 id="name"
                 type="text"
                 placeholder="Enter your name"
               />
             </div>
             <div>
               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
               <input
                 className="shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-600"
                 id="email"
                 type="email"
                 placeholder="Enter your email"
               />
             </div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
             <div>
               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone Number</label>
               <input
                 className="shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-600"
                 id="phone"
                 type="tel"
                 placeholder="Enter your phone number"
               />
             </div>
             <div>
               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">Reservation Date</label>
               <input
                 className="shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-600"
                 id="date"
                 type="date"
               />
             </div>
           </div>
           <div className="mb-6">
             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">Reservation Time</label>
             <input
               className="shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-600"
               id="time"
               type="time"
             />
           </div>
           <div className="mb-6">
             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="people">Number of People</label>
             <input
               className="shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-600"
               id="people"
               type="number"
               placeholder="Enter number of people"
             />
           </div>
           <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-600 transition ease-in-out duration-200">
             Reserve Now
           </button>
         </form>
       </div>
        <Benefit/>
        <Aboutus/>
       <Footer /> {/* Call your existing Footer component */}
     </div>
   );
 };
 
 export default TableReservation;
 