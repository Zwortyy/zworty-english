import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';

const productCategories = [
  {
    title: 'Pergola & Glass Systems',
    imageDescription: 'Pergola and glass system installed in a modern courtyard',
    imageUrlPlaceholder: 'Modern pergola and glass systems',
    link: '/products/pergola-glass-systems',
  },
  {
    title: 'Facade Systems',
    imageDescription: 'Glass facade of a modern office building',
    imageUrlPlaceholder: 'Modern glass facade systems',
    link: '/products/facade-systems',
  },
];

const ProductCard = ({ title, imageDescription, imageUrlPlaceholder, link, index }) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg overflow-hidden group"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
  >
    <Link to={link} className="block">
      <div className="relative h-72 w-full overflow-hidden">
        <img  
          alt={imageDescription} 
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
         src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4 p-2 bg-gray-900 bg-opacity-75 rounded-full text-white group-hover:bg-red-600 transition-colors duration-300">
          <ArrowRight size={24} />
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
          {title}
        </h2>
      </div>
    </Link>
  </motion.div>
);

const ProductsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Our Products</h1>
          <p className="text-lg text-gray-600 mt-2">Solutions that add value to your living spaces.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {productCategories.map((category, index) => (
            <ProductCard key={category.title} {...category} index={index} />
          ))}
        </div>

        <motion.div
          className="bg-red-600 text-white rounded-lg shadow-xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-3/5 mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Contact us for detailed information.</h2>
              <p className="text-red-100 text-lg">We are here for custom solutions and expert support for your projects.</p>
            </div>
            <Link 
              to="/contact" 
              className="bg-white text-red-600 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 text-lg"
            >
              <span>Contact Us</span>
              <ChevronRight size={22} />
            </Link>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full opacity-50 hidden md:block"></div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full opacity-50 hidden md:block"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductsPage;