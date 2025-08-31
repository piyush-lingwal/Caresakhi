import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart, Star, Gift, Package, Heart, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CareSakhiKits = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
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
    },
    {
      id: 103,
      name: 'Travel Essentials Kit',
      price: 75,
      originalPrice: 95,
      rating: 4.7,
      reviews: 1245,
      image: 'https://images.pexels.com/photos/7319069/pexels-photo-7319069.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Compact kit designed for women on the go',
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
      description: 'Maximum comfort with premium materials',
      includes: ['1 Premium Cup', '4 Comfort Briefs', 'Wellness Guide'],
      badge: 'Premium',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      id: 105,
      name: 'Eco Warrior Kit',
      price: 95,
      originalPrice: 125,
      rating: 4.8,
      reviews: 1567,
      image: 'https://images.pexels.com/photos/7319326/pexels-photo-7319326.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'For the environmentally conscious woman',
      includes: ['2 Eco Cups', '2 Organic Underwear', 'Sustainability Guide'],
      badge: 'Eco-Friendly',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      id: 106,
      name: 'Professional Kit',
      price: 110,
      originalPrice: 140,
      rating: 4.7,
      reviews: 892,
      image: 'https://images.pexels.com/photos/7319070/pexels-photo-7319070.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Designed for busy professional women',
      includes: ['1 Professional Cup', '3 Work-Day Briefs', 'Discreet Pouch'],
      badge: 'Professional',
      gradient: 'from-gray-500 to-slate-500'
    }
  ];

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(kits.length / itemsPerSlide);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  const handleAddToCart = (kit) => {
    addItem({
      id: kit.id,
      name: kit.name,
      price: kit.price,
      image: kit.image,
      quantity: 1
    });
  };

  const getCurrentSlideKits = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return kits.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              CareSakhi Kits
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Curated collections designed for every woman's unique needs and lifestyle. 
            Complete solutions that make your period care journey effortless.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-2xl rounded-full p-4 hover:shadow-3xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-2xl rounded-full p-4 hover:shadow-3xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-3 gap-8 px-8">
                    {kits.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((kit, index) => (
                      <div
                        key={kit.id}
                        className="group bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden transform hover:-translate-y-4 hover:scale-105 border border-gray-100"
                        style={{ 
                          animationDelay: `${index * 0.2}s`,
                          animation: 'fadeInUp 0.8s ease-out forwards'
                        }}
                      >
                        {/* Kit Badge */}
                        {kit.badge && (
                          <div className="absolute top-4 left-4 z-10">
                            <span className={`bg-gradient-to-r ${kit.gradient} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse`}>
                              {kit.badge}
                            </span>
                          </div>
                        )}

                        {/* Kit Image */}
                        <div className="relative overflow-hidden">
                          <img
                            src={kit.image}
                            alt={kit.name}
                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          {/* Floating Heart */}
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <button className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
                              <Heart className="w-5 h-5 text-pink-600" />
                            </button>
                          </div>
                        </div>

                        {/* Kit Content */}
                        <div className="p-8">
                          {/* Rating */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < Math.floor(kit.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-gray-600">({kit.reviews})</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Sparkles className="w-4 h-4 text-purple-500" />
                              <span className="text-sm font-medium text-purple-600">Kit</span>
                            </div>
                          </div>

                          {/* Kit Name */}
                          <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                            {kit.name}
                          </h3>

                          {/* Description */}
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {kit.description}
                          </p>

                          {/* What's Included */}
                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                              <Package className="w-4 h-4 mr-2 text-emerald-600" />
                              What's Included:
                            </h4>
                            <ul className="space-y-2">
                              {kit.includes.map((item, index) => (
                                <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Price */}
                          <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center space-x-3">
                              <span className="text-3xl font-bold text-gray-800">
                                ₹{kit.price}
                              </span>
                              <span className="text-lg text-gray-400 line-through">
                                ₹{kit.originalPrice}
                              </span>
                            </div>
                            <div className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold">
                              Save ₹{kit.originalPrice - kit.price}
                            </div>
                          </div>

                          {/* Add to Cart Button */}
                          <button
                            onClick={() => handleAddToCart(kit)}
                            className={`w-full bg-gradient-to-r ${kit.gradient} text-white py-4 px-6 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 group`}
                          >
                            <ShoppingCart className="w-6 h-6 group-hover:animate-bounce" />
                            <span>Add Kit to Cart</span>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-3 mt-12">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setIsAutoPlaying(false);
                }}
                className={`transition-all duration-500 hover:scale-125 ${
                  index === currentSlide
                    ? 'w-12 h-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full shadow-lg'
                    : 'w-4 h-4 bg-gray-300 rounded-full hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Kit Benefits */}
          <div className="mt-16 bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Why Choose CareSakhi Kits?</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Gift className="w-8 h-8 text-pink-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Complete Solutions</h4>
                <p className="text-gray-600">Everything you need in one convenient package</p>
              </div>
              
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Package className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Better Value</h4>
                <p className="text-gray-600">Save up to 40% compared to buying individually</p>
              </div>
              
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Expert Curated</h4>
                <p className="text-gray-600">Carefully selected by women's health experts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareSakhiKits;