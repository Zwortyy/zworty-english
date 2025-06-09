
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ProductCategories = ({ onCategoryClick }) => {
  const categories = [
    {
      id: 'pergola',
      title: 'Pergola & Cam',
      subtitle: 'Sistemleri',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Modern ve şık pergola ve cam sistemleri ile yaşam alanlarınızı genişletin.'
    },
    {
      id: 'cephe',
      title: 'Cephe',
      subtitle: 'Sistemleri',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Yenilikçi cephe sistemleri ile binalarınıza modern bir görünüm kazandırın.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-center text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ürünlerimiz
        </motion.h1>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              className="product-card bg-white rounded-lg overflow-hidden shadow-md"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              onClick={() => onCategoryClick(category)}
            >
              <div className="relative">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 right-0 p-2 bg-primary text-white rounded-tl-lg">
                  <ArrowRight size={24} />
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-3xl font-bold">
                  <span className="text-primary">{category.title}</span> {category.subtitle}
                </h2>
                <p className="mt-3 text-gray-600">{category.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCategories;
