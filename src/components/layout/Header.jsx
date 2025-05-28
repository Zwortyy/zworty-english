import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Info, Package, Star, Phone, Menu, X } from "lucide-react";

export const navItems = [
  { name: "About Us",   path: "/about-us",   icon: <Info size={18} /> },
  { name: "Products",   path: "/products",   icon: <Package size={18} /> },
  { name: "References", path: "/references", icon: <Star size={18} /> },
  { name: "Contact",    path: "/contact",    icon: <Phone size={18} /> },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-red-600 flex items-center justify-center rounded-md">
            {/* svg logo */}
          </div>
          <div>
            <h1 className="text-xl font-bold">KRT-RoadCafe</h1>
            <p className="text-xs text-gray-500">Pergola ve Cam Sistemleri</p>
          </div>
        </Link>

        {/* Desktop nav (md+) */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center space-x-1 text-gray-600 hover:text-red-600"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger (md-) */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen
            ? <X className="h-6 w-6 text-gray-700" />
            : <Menu className="h-6 w-6 text-gray-700" />
          }
        </button>
      </div>

      {/* Mobile dropdown nav (md-) */}
      <nav className={`${isOpen ? "block" : "hidden"} md:hidden bg-white shadow-md`}>
        <ul className="flex flex-col space-y-2 p-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="flex items-center space-x-2 text-gray-600 hover:text-red-600"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
