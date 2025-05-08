import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNews } from '../context/NewsContext';
import { Menu, X, User, Home } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { categories } = useNews();
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <header className="sticky top-0 z-10 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <span className="text-2xl font-bold text-blue-600">NewsHub</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`transition-colors hover:text-blue-600 ${
                location.pathname === '/' ? 'text-blue-600 font-medium' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            {categories.slice(0, 4).map(category => (
              category !== 'All' && (
                <Link 
                  key={category}
                  to={`/category/${category}`}
                  className={`transition-colors hover:text-blue-600 ${
                    location.pathname === `/category/${category}` ? 'text-blue-600 font-medium' : 'text-gray-700'
                  }`}
                >
                  {category}
                </Link>
              )
            ))}
            <Link 
              to="/profile" 
              className={`transition-colors hover:text-blue-600 ${
                location.pathname === '/profile' ? 'text-blue-600 font-medium' : 'text-gray-700'
              }`}
            >
              Profile
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-blue-600"
              onClick={closeMenu}
            >
              <div className="flex items-center">
                <Home size={18} className="mr-2" />
                Home
              </div>
            </Link>
            {categories.map(category => (
              category !== 'All' && (
                <Link 
                  key={category}
                  to={`/category/${category}`}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-blue-600"
                  onClick={closeMenu}
                >
                  {category}
                </Link>
              )
            ))}
            <Link 
              to="/profile" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-blue-600"
              onClick={closeMenu}
            >
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                Profile
              </div>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;