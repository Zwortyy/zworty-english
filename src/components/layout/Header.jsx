// src/components/Header.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Info, Package, Star, Phone, Menu, X } from 'lucide-react';

export const navItems = [
  { name: 'About Us',   path: '/about-us',   icon: <Info size={18} /> },
  { name: 'Products',   path: '/products',   icon: <Package size={18} /> },
  { name: 'References', path: '/references', icon: <Star size={18} /> },
  { name: 'Contact',    path: '/contact',    icon: <Phone size={18} /> },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-white shadow-md sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/logo-text.png"
            alt="KRT-RoadCafeBuilders Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-md"
          />
          <div>
            <h1 className="text-xl font-bold text-gray-800">KRT-RoadCafe</h1>
            <p className="text-xs text-gray-500">Pergola ve Cam Sistemleri</p>
          </div>
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-600 hover:text-red-600 focus:outline-none"
          onClick={() => setIsOpen(prev => !prev)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map(item => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center space-x-1 text-gray-600 hover:text-red-600 transition-colors duration-300"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile dropdown nav */}
      <nav className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-md`}>
        <ul className="flex flex-col space-y-2 p-4">
          {navItems.map(item => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="flex items-center space-x-2 text-gray-600 hover:text-red-600"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
