import React from 'react';
import logo from '../assets/logo.png'; // Adjust the path to your logo

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full flex items-center justify-between p-4 bg-transparent text-white z-50">
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold">REST</span> {/* First part of the text */}
        <img src={logo} alt="Restbeef Logo" className="h-14" /> {/* Logo */}
        <span className="text-2xl font-bold">BEEF</span> {/* Second part of the text */}
      </div>

      <div className="flex items-center space-x-6 ml-auto">
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-red-500">HOME</a>
          <a href="/about" className="hover:text-red-500">ABOUT</a>
          <a href="/menu" className="hover:text-red-500">MENU</a>
          <a href="/contact" className="hover:text-red-500">CONTACT</a>
        </nav>
        <a href="/TableReservation" className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded">BOOK A TABLE</a>
      </div>
    </header>
  );
}

export default Header;
