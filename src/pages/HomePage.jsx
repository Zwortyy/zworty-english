import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HomePage = () => (
  <div className="flex-grow">
    <div className="relative h-[calc(100vh-80px)] bg-gray-800 text-white overflow-hidden"> {/* Adjusted height for header */}
      <img  
        alt="Luxurious patio furnished with a modern pergola system" 
        className="absolute inset-0 w-full h-full object-cover opacity-50" 
        src="https://images.unsplash.com/photo-1602774895672-b553538bceb9" />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 flex flex-col items-start justify-center h-full container mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 max-w-3xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Aesthetics and Function:
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-10 max-w-2xl text-gray-200"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Transform your living spaces with our products that combine elegance and functionality. Aesthetic details and useful designs await you.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-4 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            Learn More
          </Button>
        </motion.div>
      </div>
    </div>
  </div>
);

export default HomePage;