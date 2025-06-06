import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} KRT-RoadCafeBuilders. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;