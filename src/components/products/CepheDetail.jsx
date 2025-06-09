import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CepheDetail = ({ category, onBackClick }) => {
  const cepheProducts = [
    {
      id: 'isi-yalitimli-yalitimsiz-dograma',
      title: 'Alüminyum Isı Yalıtımlı & Yalıtımsız Doğrama Sistemleri',
      image: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/fa91945e-a673-4929-819b-bd6194c563da/322b2dd733da7c8be9f8a6a3f78050c5.png',
      mainDescription: 'Enerji Tasarrufu ve dış cephe konforunu artırmak için inşa edilmiş alüminyum ısıyalıtımlı ve yalıtımsız doğrama sistemlerimiz, çeşitli tasarım seçenekleriyle sunulmaktadır. Modern mimari anlayışıyla birleşen bu sistemler, uzun ömürlü ve dayanıklıdır.',
      features: [
        {
          title: 'Isı Yalıtımı',
          description: 'Termal kesit; ısı yalıtımı sağlayan özel bir termal kesit ile üretilir. Böylece iç ve dış ortamlar arasındaki sıcaklık aktarımını en aza indirir.'
        },
        {
          title: 'Yalıtım Malzemeleri',
          description: 'Gözenekleri poliüretan veya polistiren gibi soğutucuk malzemeleri kullanılır.'
        },
        {
          title: 'Dayanıklılık',
          description: 'Konstrüksiyon Direnci: Alüminyum, oksitlenmeye karşı dayanıklıdır, bu nedenle uzun ömürlüdür. Mekanik Dayanıklılık: Yüksek dayanımlı yapısıyla dış etkenlere karşı direnç gösterir.'
        },
        {
          title: 'Estetik',
          description: 'Farklı Tasarımlar: Çeşitli renk ve yüzey kaplamaları ile estetik görünümler sunar. Modern Görünüm: İnce çerçeveleri sayesinde modern mimariyle uyumlu bir görünüm sağlar.'
        },
        {
          title: 'Güvenlik',
          description: 'Hırsızlık Önleyici: Güçlü yapı sayesinde girişime karşı daha dayanıklıdır. Yangına Dayanıklılık: Alüminyum, yanma durumunda alev almaz.'
        },
        {
          title: 'Enerji Verimliliği',
          description: 'Isı Tasarrufu: Isı yalıtımı sayesinde enerji tasarrufu sağlar, bu da maliyet kaybını önler.'
        }
      ]
    },
    {
      id: 'aluminyum-isi-yalitimli-surme',
      title: 'Alüminyum Isı Yalıtımlı Sürme Sistemleri',
      image: 'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      mainDescription: 'Geniş açıklıklar ve modern tasarımlar için ideal olan ısı yalıtımlı sürme sistemleri, yüksek performans ve estetiği bir araya getirir.',
      features: []
    },
    {
      id: 'kapakli-aluminyum-giydirme',
      title: 'Kapaklı Alüminyum Giydirme Cephe Sistemleri',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      mainDescription: 'Binalara modern ve prestijli bir görünüm kazandıran kapaklı giydirme cephe sistemleri, farklı kapak seçenekleriyle tasarım esnekliği sunar.',
      features: []
    },
    {
      id: 'aluminyum-silikon-giydirme',
      title: 'Alüminyum Silikon Giydirme Cephe Sistemleri',
      image: 'https://images.unsplash.com/photo-1506749841056-9b01500c655a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      mainDescription: 'Camın ön planda olduğu, kesintisiz bir cephe görünümü sağlayan silikon giydirme sistemleri, minimalist ve şık tasarımlar için idealdir.',
      features: []
    },
    {
      id: 'aluminyum-kompozit-panel',
      title: 'Alüminyum Kompozit Panel ile Cephe Kaplama Sistemleri',
      image: 'https://images.unsplash.com/photo-1581092580497-c1a42d4f7e8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      mainDescription: 'Hafif, dayanıklı ve estetik alüminyum kompozit paneller, binalara modern bir kimlik kazandırırken, renk ve doku çeşitliliğiyle öne çıkar.',
      features: []
    }
  ];

  const [selectedProduct, setSelectedProduct] = React.useState(cepheProducts[0]);

  const handleProductSelect = (productId) => {
    const product = cepheProducts.find(p => p.id === productId);
    setSelectedProduct(product);
  };

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
          <aside className="md:w-1/4 mb-8 md:mb-0">
            <div className="product-sidebar sticky top-24">
              <h3 className="product-sidebar-title">Ürünlerimiz</h3>
              <ul className="space-y-1">
                {cepheProducts.map((product) => (
                  <li key={product.id}>
                    <a 
                      href="#" 
                      className={`product-sidebar-link ${selectedProduct.id === product.id ? 'active' : ''}`}
                      onClick={(e) => { e.preventDefault(); handleProductSelect(product.id); }}
                    >
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
          </aside>
          
          <main className="md:w-3/4 md:pl-8">
            {selectedProduct && (
              <motion.div
                key={selectedProduct.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-primary text-white p-6 rounded-t-lg">
                  <h1 className="text-3xl font-bold mb-2">
                    {selectedProduct.title}
                  </h1>
                </div>
                
                <div className="bg-white p-6 rounded-b-lg shadow-lg">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/2">
                      <img  
                        src={selectedProduct.image} 
                        alt={selectedProduct.title} 
                        className="w-full h-auto object-cover rounded-md shadow-md product-detail-image"
                       src="https://images.unsplash.com/photo-1575029644286-efb9039cac46" />
                    </div>
                    <div className="lg:w-1/2">
                      <h2 className="text-2xl font-semibold text-primary mb-3">
                        {selectedProduct.title}
                      </h2>
                      <p className="text-gray-700 mb-4">
                        {selectedProduct.mainDescription}
                      </p>
                      {selectedProduct.features && selectedProduct.features.length > 0 && (
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">Özellikler:</h3>
                          <ul className="list-disc list-inside space-y-2 text-gray-600">
                            {selectedProduct.features.map((feature, index) => (
                              <li key={index}>
                                <span className="font-semibold">{feature.title}:</span> {feature.description}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
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
          </main>
        </div>
      </div>
    </div>
  );
};

export default CepheDetail;