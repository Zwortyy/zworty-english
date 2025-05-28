import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Info, Package, Star, Phone, Menu, X } from 'lucide-react';

export const navItems = [
  { name: 'About Us', path: '/about-us', icon: <Info size={18} /> },
  { name: 'Products', path: '/products', icon: <Package size={18} /> },
  { name: 'References', path: '/references', icon: <Star size={18} /> },
  { name: 'Contact', path: '/contact', icon: <Phone size={18} /> },
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-10 h-10 bg-red-600 flex items-center justify-center rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-6 h-6"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </motion.div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">KRT-RoadCafe</h1>
              <p className="text-xs text-gray-500">Pergola ve Cam Sistemleri</p>
            </div>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-600 hover:text-red-600 focus:outline-none"
            onClick={() => setIsOpen(prev => !prev)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation links */}
          <nav
            className={
              `absolute bg-white w-full left-0 top-full shadow-md md:shadow-none md:static
               ${isOpen ? 'block' : 'hidden'} md:block`
            }
          >
            <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
              {navItems.map(item => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="flex items-center space-x-1 py-2 text-gray-600 hover:text-red-600 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
