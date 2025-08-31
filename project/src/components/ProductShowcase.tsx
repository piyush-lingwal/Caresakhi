import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Info } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const { addItem } = useCart();

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'cups', name: 'Menstrual Cups' },
    { id: 'underwear', name: 'Period Underwear' },
    { id: 'accessories', name: 'Accessories' }
  ];

  const products = [
    {
      id: 1,
      name: 'EcoFlow Cup',
      category: 'cups',
      price: 45,
      originalPrice: 60,
      rating: 4.8,
      reviews: 1234,
      image: 'https://images.pexels.com/photos/7319325/pexels-photo-7319325.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['12hr Protection', 'Medical Grade Silicone', '10 Year Lifespan'],
      sizes: ['Small', 'Medium', 'Large'],
      colors: ['Clear', 'Pink', 'Purple']
    },
    {
      id: 2,
      name: 'ComfortMax Brief',
      category: 'underwear',
      price: 32,
      originalPrice: 40,
      rating: 4.9,
      reviews: 892,
      image: 'https://images.pexels.com/photos/7262708/pexels-photo-7262708.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Ultra Absorbent', 'Leak-Proof', 'Machine Washable'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Nude', 'Navy']
    },
    {
      id: 3,
      name: 'Travel Kit Pro',
      category: 'accessories',
      price: 25,
      originalPrice: 35,
      rating: 4.7,
      reviews: 456,
      image: 'https://images.pexels.com/photos/7319069/pexels-photo-7319069.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Sterilizer Included', 'Compact Design', 'Travel Friendly'],
      sizes: ['One Size'],
      colors: ['Pink', 'Blue', 'Green']
    },
    {
      id: 4,
      name: 'PureFlex Cup',
      category: 'cups',
      price: 52,
      originalPrice: 65,
      rating: 4.9,
      reviews: 2156,
      image: 'https://images.pexels.com/photos/7319326/pexels-photo-7319326.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Extra Soft', 'Easy Removal', 'Platinum Silicone'],
      sizes: ['Small', 'Medium', 'Large'],
      colors: ['Clear', 'Teal', 'Rose']
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const handleQuickAdd = (product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      size: product.sizes[0],
      color: product.colors[0]
    });
  };

  const handleAddToCart = (product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      size: product.sizes[0],
      color: product.colors[0]
    });
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-600 to-orange-600 bg-clip-text text-transparent">
              Revolutionary Products
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our premium collection of sustainable menstrual products, 
            designed for comfort, protection, and environmental responsibility.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full p-2 shadow-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden bg-gray-100 aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Discount Badge */}
                {product.originalPrice > product.price && (
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Save ${product.originalPrice - product.price}
                  </div>
                )}

                {/* Quick Actions */}
                <div className={`absolute top-4 right-4 flex flex-col space-y-2 transition-all duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}>
                  <button className="bg-white p-2 rounded-full shadow-lg hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow-lg hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
                    <Info className="w-5 h-5" />
                  </button>
                </div>

                {/* Quick Add to Cart */}
                <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <button 
                    onClick={() => handleQuickAdd(product)}
                    className="w-full bg-emerald-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Quick Add</span>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-500 mb-4">
                  {product.reviews} reviews
                </p>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl font-bold text-gray-800">
                    ₹{product.price}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-lg text-gray-400 line-through">
                      ₹{product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Size Options */}
                <div className="mb-4">
                  <div className="flex space-x-1">
                    {product.sizes.slice(0, 3).map((size, index) => (
                      <button
                        key={index}
                        className="text-xs border border-gray-300 px-2 py-1 rounded hover:border-emerald-500 hover:text-emerald-600 transition-colors"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button 
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-xl font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products */}
        <div className="text-center mt-12">
          <Link 
            to="/products"
            className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105 transform"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;