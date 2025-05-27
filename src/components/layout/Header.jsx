import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Info, Package, Star, Phone } from 'lucide-react';

export const navItems = [
  { name: 'About Us', path: '/about-us', icon: <Info size={18} /> },
  { name: 'Products', path: '/products', icon: <Package size={18} /> },
  { name: 'References', path: '/references', icon: <Star size={18} /> },
  { name: 'Contact', path: '/contact', icon: <Phone size={18} /> },
];

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white shadow-md sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-10 h-10 bg-red-600 flex items-center justify-center rounded-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </motion.div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">KRT-RoadCafe</h1>
              <p className="text-xs text-gray-500">Pergola ve Cam Sistemleri</p>
            </div>
          </Link>
          <nav className="hidden md:flex space-x-6 items-center">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link 
                  to={item.path} 
                  className="text-gray-600 hover:text-red-600 transition-colors duration-300 flex items-center space-x-1 group"
                >
                  <span className="group-hover:text-red-500 transition-colors duration-300">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              </motion.div>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            {/* Language button removed */}
            <button className="md:hidden text-gray-600 hover:text-red-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;