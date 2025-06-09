
import React from 'react';
import { motion } from 'framer-motion';

const PlaceholderPage = ({ title }) => (
  <div className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h1 className="text-4xl font-bold text-gray-700 mb-4">{title}</h1>
      <p className="text-lg text-gray-500">Bu sayfanın içeriği yakında eklenecektir.</p>
      <img  alt={`${title} için konsept görsel`} className="mt-8 rounded-lg shadow-xl max-w-lg mx-auto" src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f" />
    </motion.div>
  </div>
);

export default PlaceholderPage;
