import React from 'react';
import { ShoppingCart, Star, Package, Sparkles, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

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
      description: 'Everything you need for a complete sustainable period experience.',
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
      description: 'The perfect introduction to sustainable period care.',
      includes: ['1 Menstrual Cup', '2 Period Underwear', 'Instruction Guide'],
      badge: 'Best for Beginners',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
        id: 103,
        name: 'Travel Essentials Kit',
        price: 75,
        originalPrice: 95,
        rating: 4.7,
        reviews: 1245,
        image: 'https://images.pexels.com/photos/7319069/pexels-photo-7319069.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'A compact kit designed for women on the go.',
        includes: ['1 Menstrual Cup', 'Sterilizer', 'Travel Pouch', 'Cleaning Tablets'],
        badge: 'Travel Ready',
        gradient: 'from-blue-500 to-cyan-500'
    },
    {
        id: 104,
        name: 'Comfort Plus Kit',
        price: 125,
        originalPrice: 160,
        rating: 4.9,
        reviews: 987,
        image: 'https://images.pexels.com/photos/7262708/pexels-photo-7262708.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Maximum comfort with our premium materials.',
        includes: ['1 Premium Cup', '4 Comfort Briefs', 'Wellness Guide'],
        badge: 'Premium',
        gradient: 'from-purple-500 to-indigo-500'
    }
  ];

  const handleAddToCart = (kit, e) => {
    e.stopPropagation(); // Prevents link navigation when adding to cart
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
            <Link to={`/product/${kit.id}`} key={kit.id} className="group block">
              <div
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 h-full flex flex-col"
              >
                <div className="relative">
                  <img
                    src={kit.image}
                    alt={kit.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                   <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm text-gray-800 font-semibold px-6 py-3 rounded-full flex items-center space-x-2 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`bg-gradient-to-r ${kit.gradient} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                      {kit.badge}
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-gray-800">{kit.name}</h3>
                    <div className="flex items-center space-x-1 text-sm text-gray-600 flex-shrink-0 ml-4">
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <span className="font-bold">{kit.rating}</span>
                        <span>({kit.reviews})</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 flex-grow">{kit.description}</p>
                  <div className="mb-6 mt-auto">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <Package className="w-5 h-5 mr-2 text-emerald-600" />
                      What's Included:
                    </h4>
                    <ul className="space-y-1.5">
                      {kit.includes.map((item, index) => (
                        <li key={index} className="flex items-center space-x-3 text-sm text-gray-700">
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
                    onClick={(e) => handleAddToCart(kit, e)}
                    className={`w-full bg-gradient-to-r ${kit.gradient} text-white py-3 px-6 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3`}
                  >
                    <ShoppingCart className="w-6 h-6" />
                    <span>Add Kit to Cart</span>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareSakhiKits;

