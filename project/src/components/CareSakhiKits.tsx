import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Gift, Package, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CareSakhiKits = () => {
  const { addItem } = useCart();

  const kits = [
    {
      id: 101,
      name: 'All-in-One Complete Kit',
      price: 149,
      originalPrice: 199,
      rating: 4.9,
      reviews: 2156,
      image: 'https://images.pexels.com/photos/7319070/pexels-photo-7319070.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Everything you need for a complete sustainable period experience',
      includes: ['2 Menstrual Cups', '3 Period Underwear', 'Travel Kit', 'Care Guide'],
      badge: 'Most Popular',
      gradient: 'from-pink-500 to-purple-500'
    },
    {
      id: 102,
      name: 'Beginner Starter Kit',
      price: 89,
      originalPrice: 120,
      rating: 4.8,
      reviews: 1834,
      image: 'https://images.pexels.com/photos/7319325/pexels-photo-7319325.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Perfect introduction to sustainable period care',
      includes: ['1 Menstrual Cup', '2 Period Underwear', 'Instruction Guide'],
      badge: 'Best for Beginners',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const handleAddToCart = (kit) => {
    addItem({
      id: kit.id,
      name: kit.name,
      price: kit.price,
      image: kit.image,
      quantity: 1
    });
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              CareSakhi Kits
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Curated collections designed for every woman's unique needs and lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {kits.map((kit) => (
            <div
              key={kit.id}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={kit.image}
                  alt={kit.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className={`bg-gradient-to-r ${kit.gradient} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                    {kit.badge}
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{kit.name}</h3>
                <p className="text-gray-600 mb-4 h-12">{kit.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">What's Included:</h4>
                  <ul className="space-y-1">
                    {kit.includes.map((item, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold text-gray-800">₹{kit.price}</span>
                    <span className="text-lg text-gray-400 line-through">₹{kit.originalPrice}</span>
                  </div>
                  <div className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold">
                    Save ₹{kit.originalPrice - kit.price}
                  </div>
                </div>
                <button
                  onClick={() => handleAddToCart(kit)}
                  className={`w-full bg-gradient-to-r ${kit.gradient} text-white py-3 px-6 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3`}
                >
                  <ShoppingCart className="w-6 h-6" />
                  <span>Add Kit to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareSakhiKits;

