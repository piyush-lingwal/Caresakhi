import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Download } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { state } = useCart();
  const { user, logout } = useAuth();
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Period Tracker', href: '/period-tracker' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-md shadow-md z-50 border-b border-gray-100 h-20">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          
          <Link to="/" className="flex items-center group flex-shrink-0">
            <img 
              src="/navbar logo3.png" 
              alt="CareSakhi" 
              loading="lazy"
              className="h-14 w-auto object-contain transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav role="navigation" className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link-desktop font-medium text-base px-4 py-2 rounded-full transition-all duration-150 ease-in-out active:scale-95 focus-visible:bg-pink-100 ${isActive(item.href) ? 'active bg-pink-50' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            <div className="hidden md:flex items-center space-x-2">
                <a
                    href="/CareSakhi.apk"
                    download="CareSakhi-App.apk"
                    className="flex items-center space-x-2 bg-pink-600 text-white px-3 py-2 rounded-full font-medium text-sm hover:bg-pink-700 transition-all duration-300"
                >
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">Download App</span>
                </a>
            </div>
            
            <Link to="/cart" aria-label="Cart" className="relative p-2 text-gray-700 hover:text-pink-600 transition-colors rounded-full hover:bg-pink-50">
              <ShoppingCart className="w-5 h-5" />
              {state.itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {state.itemCount}
                </span>
              )}
            </Link>

            {/* Desktop User/Auth Buttons */}
            <div className="hidden lg:flex items-center">
              {user ? (
                <div className="relative">
                  <button
                    aria-label="User Menu"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center space-x-2 p-2 text-gray-700 rounded-lg hover:bg-gray-100"
                  >
                    <User className="w-5 h-5" />
                    <span className="font-medium text-base">{user.name}</span>
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-100 animate-fade-in">
                      <div className="py-2">
                        <Link to="/account" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600">My Account</Link>
                        <Link to="/wallet" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600">Wallet</Link>
                        <button onClick={logout} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">Logout</button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center space-x-1">
                  <Link to="/login" className="text-gray-700 font-medium text-base px-3 py-2 rounded-full hover:bg-gray-100">Login</Link>
                  <Link to="/register" className="bg-pink-600 text-white px-4 py-2 rounded-full font-medium text-base hover:bg-pink-700">Sign Up</Link>
                </div>
              )}
            </div>
            
            {/* Mobile Menu Button */}
            <button
              aria-label="Toggle Mobile Menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 border-t border-gray-100 py-4 bg-white shadow-lg animate-fade-in">
            <nav className="space-y-2 px-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium ${isActive(item.href) ? 'bg-pink-50 text-pink-600' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-gray-100 pt-4 mt-4 space-y-3">
                {user ? (
                  <>
                    <Link to="/account" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg">My Account</Link>
                    <button onClick={() => { logout(); setIsMenuOpen(false); }} className="block w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg">Logout</button>
                  </>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Link to="/login" onClick={() => setIsMenuOpen(false)} className="flex-1 text-center px-4 py-3 text-gray-700 bg-gray-100 rounded-lg">Login</Link>
                    <Link to="/register" onClick={() => setIsMenuOpen(false)} className="flex-1 text-center px-4 py-3 bg-pink-600 text-white rounded-lg font-medium">Sign Up</Link>
                  </div>
                )}
                <a href="/CareSakhi.apk" download="CareSakhi-App.apk" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center space-x-2 bg-emerald-600 text-white px-4 py-3 rounded-lg font-medium"><Download className="w-5 h-5" /> <span>Download App</span></a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
