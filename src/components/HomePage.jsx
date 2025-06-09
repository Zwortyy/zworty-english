import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCategories from '@/components/ProductCategories';
import PergolaDetail from '@/components/PergolaDetail';
import CepheDetail from '@/components/CepheDetail';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  
  const handleBackClick = () => {
    setSelectedCategory(null);
  };
  
  const renderDetailView = () => {
    if (!selectedCategory) return null;

    if (selectedCategory.id === 'pergola') {
      return <PergolaDetail category={selectedCategory} onBackClick={handleBackClick} />;
    } else if (selectedCategory.id === 'cephe') {
      return <CepheDetail category={selectedCategory} onBackClick={handleBackClick} />;
    }
    return null;
  };

  return (
    <div>
      {selectedCategory ? renderDetailView() : <ProductCategories onCategoryClick={handleCategoryClick} />}
      
      <section className="bg-primary text-white py-16 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <motion.h2 
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Detaylı bilgi almak için bizimle iletişime geçin.
              </motion.h2>
              <p className="text-white/80 mb-6">
                Ürünlerimiz hakkında daha fazla bilgi almak, fiyat teklifi istemek veya sorularınızı sormak için bizimle iletişime geçebilirsiniz.
              </p>
              <Button className="bg-white text-primary hover:bg-white/90">
                İletişime Geç <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="md:w-1/3">
              <motion.div 
                className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4">İletişim Bilgilerimiz</h3>
                <div className="space-y-3">
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +90 (212) 123 45 67
                  </p>
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@esveraaluminyum.com
                  </p>
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    İstanbul, Türkiye
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;