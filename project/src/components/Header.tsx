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

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-md shadow-lg z-50 border-b border-gray-100 h-20">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          
          {/* Logo */}
          <Link to="/" className="flex items-center group flex-shrink-0">
            <img 
              src="/navbar logo2.png" 
              alt="CareSakhi" 
              loading="lazy"
              className="h-12 lg:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Mobile View: Period Tracker + Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
             <Link
                to="/period-tracker"
                className={`font-medium text-sm transition-all duration-300 hover:text-pink-600 relative whitespace-nowrap px-3 py-2 rounded-lg ${
                  isActive('/period-tracker') 
                    ? 'text-pink-600 bg-pink-50' 
                    : 'text-gray-700'
                }`}
              >
                Period Tracker
              </Link>
            <button
              aria-label="Toggle Mobile Menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-pink-600 transition-all duration-300 hover:scale-110 hover:bg-pink-50 rounded-lg"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav role="navigation" className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-1 justify-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium text-sm xl:text-base transition-all duration-300 hover:text-pink-600 relative whitespace-nowrap ${
                  isActive(item.href) 
                    ? 'text-pink-600' 
                    : 'text-gray-700'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions (Desktop) */}
          <div className="hidden lg:flex items-center space-x-2 lg:space-x-4 flex-shrink-0">
            <a
              href="/app-release.apk"
              download="CareSakhi-App.apk"
              className="flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-full font-medium text-sm hover:from-emerald-700 hover:to-teal-700 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-200 hover:rotate-1"
            >
              <Download className="w-4 h-4" />
              <span>Get App</span>
            </a>
            <Link
              to="/cart"
              aria-label="Cart"
              className="relative p-2 text-gray-700 hover:text-pink-600 transition-all duration-300 hover:scale-110 hover:bg-pink-50 rounded-lg flex-shrink-0"
            >
              <ShoppingCart className="w-5 h-5" />
              {state.itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium animate-pulse">
                  {state.itemCount}
                </span>
              )}
            </Link>
            {user ? (
              <div className="relative">
                <button
                  aria-label="User Menu"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 p-2 text-gray-700 hover:text-pink-600 transition-all duration-300 hover:scale-105 hover:bg-pink-50 rounded-lg"
                >
                  <User className="w-5 h-5" />
                  <span className="font-medium text-sm xl:text-base truncate max-w-[100px] xl:max-w-none">{user.name}</span>
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 animate-fade-in backdrop-blur-lg">
                    <div className="py-2">
                      <Link to="/account" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-all duration-300 hover:translate-x-1">My Account</Link>
                      <Link to="/wallet" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-all duration-300 hover:translate-x-1">Wallet</Link>
                      {user.userType === 'distributor' && <Link to="/distributor-dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-all duration-300 hover:translate-x-1">Dashboard</Link>}
                      {user.userType === 'pharmacy' && <Link to="/pharmacy-dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-all duration-300 hover:translate-x-1">Dashboard</Link>}
                      <button onClick={logout} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-all duration-300 hover:translate-x-1">Logout</button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link to="/login" className="text-gray-700 hover:text-pink-600 font-medium text-base transition-all duration-300 hover:scale-105 hover:bg-pink-50 px-3 py-2 rounded-lg whitespace-nowrap">Login</Link>
                <Link to="/register" className="bg-pink-600 text-white px-4 py-2 rounded-full font-medium text-base hover:bg-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-200 whitespace-nowrap">Sign Up</Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 border-t border-gray-100 py-4 bg-white shadow-lg animate-fade-in">
            <nav className="space-y-2 px-4">
              {navigation.filter(item => item.name !== 'Period Tracker').map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:translate-x-2 ${
                    isActive(item.href)
                      ? 'bg-pink-50 text-pink-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-pink-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="border-t border-gray-100 pt-4 mt-4 space-y-2 animate-slide-up">
                {user ? (
                  <>
                    <Link to="/account" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-pink-600 rounded-lg transition-all duration-300 hover:translate-x-2">My Account</Link>
                    <button onClick={() => { logout(); setIsMenuOpen(false); }} className="block w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-300 hover:translate-x-2">Logout</button>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-pink-600 rounded-lg transition-all duration-300 hover:translate-x-2">Login</Link>
                    <Link to="/register" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 bg-pink-600 text-white rounded-lg font-medium text-center transition-all duration-300 hover:bg-pink-700 hover:scale-105">Sign Up</Link>
                  </>
                )}
                 <a href="/app-release.apk" download="CareSakhi-App.apk" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center space-x-2 mt-4 bg-emerald-600 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-emerald-700"><Download className="w-5 h-5" /> <span>Download App</span></a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
