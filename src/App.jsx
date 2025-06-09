import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Header, { navItems } from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ProductsPage from '@/pages/ProductsPage';
import PlaceholderPage from '@/pages/PlaceholderPage';

function App() {
  const englishNavItems = navItems.map(item => {
    let path = item.path;
    if (path === '/hakkimizda') path = '/about-us';
    if (path === '/urunler') path = '/products';
    if (path === '/referanslar') path = '/references';
    if (path === '/iletisim') path = '/contact';
    return { ...item, path };
  });

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/pergola-glass-systems" element={<PlaceholderPage title="Pergola & Glass Systems" />} />
            <Route path="/products/facade-systems" element={<PlaceholderPage title="Facade Systems" />} />
            {englishNavItems.filter(item => !['/', '/about-us', '/products'].includes(item.path)).map(item => (
              <Route key={item.name} path={item.path} element={<PlaceholderPage title={item.name} />} />
            ))}
          </Routes>
        </main>
        <Toaster />
        <Footer />
      </div>
    </Router>
  );
}

export default App;