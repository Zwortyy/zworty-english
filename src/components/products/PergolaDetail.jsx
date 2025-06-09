
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PergolaDetail = ({ category, onBackClick }) => {
  const pergolaProducts = [
    {
      id: 'camli-bioklimatik',
      title: 'Camlı Bioklimatik Pergola',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Her mekânda uygulanabilecek Bioclimatic Sistemleri dünyanın birçok açılır tavan sisteminin sunmadığı, katlama ve toplanma hareketini bir arada sunmaktadır. Her açıda açılabilen cam lameller sayesinde, gün içinde istenilen oranda faydalanma olanağı sağlar.'
    },
    {
      id: 'bioklimatik-pergola',
      title: 'Bioklimatik Pergola',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Cam lamellerin yaptığı katlama hareketi sayesinde, çatıdan havalandırma yaparken gölgelendirme özelliğini kaybetmez. Sistem açıkken bile özel tasarım cam lameller sayesinde, yağmur ve kardan etkilenmeden havalandırma sağlar.'
    },
    {
      id: 'sahil-cam-tavan',
      title: 'Sahil Cam Tavan Sistemleri',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Cam lamellerin yaptığı katlama hareketi sayesinde, lamellerin dış temizliği çatıya çıkmaya gerek kalmadan içeriden temizlenebilir. Alüminyum parçalar, elektrostatik fırın boya sayesinde uzun ömürlüdür.'
    },
    {
      id: 'hareketli-cam-tavan',
      title: 'Hareketli Cam Tavan Sistemleri',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Roofing Roof sistemleri müşteri memnuniyeti, kalite ve kolay kurulum düşünülerek tasarlanmıştır.'
    },
    {
      id: '120lik-pergola',
      title: '120\'lik Pergola Sistemleri',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Geniş açıklıklar için ideal olan 120\'lik pergola sistemleri, dayanıklı yapısı ve şık tasarımı ile öne çıkar.'
    },
    {
      id: '170lik-pergola',
      title: '170\'lik Pergola Sistemleri',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Ekstra geniş alanlar için tasarlanan 170\'lik pergola sistemleri, maksimum dayanıklılık ve konfor sunar.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            className="flex items-center text-gray-600 hover:text-primary mr-4"
            onClick={onBackClick}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Geri
          </Button>
          
          <div className="breadcrumb">
            <span className="breadcrumb-item">Ana Sayfa</span>
            <ChevronRight className="breadcrumb-separator h-4 w-4" />
            <span className="breadcrumb-item">Ürünler</span>
            <ChevronRight className="breadcrumb-separator h-4 w-4" />
            <span className="breadcrumb-item font-medium text-primary">{category.title} {category.subtitle}</span>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 mb-8 md:mb-0">
            <div className="product-sidebar sticky top-24">
              <h3 className="product-sidebar-title">Ürünlerimiz</h3>
              <ul className="space-y-1">
                {pergolaProducts.map((product) => (
                  <li key={product.id}>
                    <a href="#" className="product-sidebar-link">
                      {product.title}
                    </a>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <h3 className="product-sidebar-title">Katalog</h3>
                <a href="#" className="product-sidebar-link text-primary flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                  Katalog İndir
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:w-3/4 md:pl-8">
            <motion.div
              className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                <span className="text-primary">Pergola & Cam</span> Sistemleri
              </h1>
              <p className="text-gray-600">
                Modern yaşam alanları için yenilikçi çözümler sunan pergola ve cam sistemlerimiz ile tanışın.
              </p>
            </motion.div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {pergolaProducts.map((product) => (
                <motion.div
                  key={product.id}
                  className="product-card bg-white rounded-lg overflow-hidden shadow-md"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-3">{product.description}</p>
                    <div className="mt-4">
                      <a href="#" className="text-primary font-medium flex items-center hover:underline">
                        Detaylı Bilgi
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <div className="mt-12 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Daha Fazla Bilgi İçin</h3>
              <p className="text-gray-600 mb-4">
                Ürünlerimiz hakkında detaylı bilgi almak, fiyat teklifi istemek veya özel projeleriniz için bizimle iletişime geçebilirsiniz.
              </p>
              <Button className="contact-button">
                İletişime Geç
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PergolaDetail;
