import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Package, Heart, Settings, LogOut, Edit, Save, X, MapPin, Wallet as WalletIcon, Users, Award, Crown, Star, ShoppingCart } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Account = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  });

  // Theme configuration based on user type
  const getThemeConfig = () => {
    switch (user?.userType) {
      case 'distributer':
        return {
          gradient: 'from-green-500 to-emerald-500',
          bgPattern: 'from-green-50 to-emerald-50',
          accent: 'green',
          icon: Users,
          title: 'Distributor Dashboard',
          subtitle: 'Manage your distribution network'
        };
      case 'pharmacy':
        return {
          gradient: 'from-purple-500 to-indigo-500',
          bgPattern: 'from-purple-50 to-indigo-50',
          accent: 'purple',
          icon: Award,
          title: 'Pharmacy Portal',
          subtitle: 'Professional healthcare management'
        };
      default:
        return {
          gradient: 'from-pink-500 to-rose-500',
          bgPattern: 'from-pink-50 to-rose-50',
          accent: 'pink',
          icon: Crown,
          title: 'Customer Account',
          subtitle: 'Your personal wellness journey'
        };
    }
  };

  const theme = getThemeConfig();
  const ThemeIcon = theme.icon;

  const handleSave = () => {
    // In a real app, this would update the user profile via API
    setIsEditing(false);
  };

  const mockOrders = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      status: 'Delivered',
      total: 89.99,
      items: [
        { name: 'EcoFlow Cup', quantity: 1, price: 45 },
        { name: 'ComfortMax Brief', quantity: 2, price: 32 }
      ]
    },
    {
      id: 'ORD-002',
      date: '2024-01-10',
      status: 'Shipped',
      total: 52.00,
      items: [
        { name: 'PureFlex Cup', quantity: 1, price: 52 }
      ]
    }
  ];

  const mockWishlist = [
    {
      id: 3,
      name: 'Travel Kit Pro',
      price: 25,
      image: 'https://images.pexels.com/photos/7319069/pexels-photo-7319069.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 5,
      name: 'ActiveFlow Brief',
      price: 38,
      image: 'https://images.pexels.com/photos/7262708/pexels-photo-7262708.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'products', name: 'Products', icon: Package },
    { id: 'kits', name: 'CareSakhi Kits', icon: Heart },
    { id: 'orders', name: 'Orders', icon: Package },
    { id: 'map', name: 'Find Stores', icon: MapPin },
    { id: 'wallet', name: 'Wallet', icon: WalletIcon },
    { id: 'wishlist', name: 'Wishlist', icon: Heart },
    { id: 'settings', name: 'Settings', icon: Settings }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bgPattern} pt-20`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-10 w-32 h-32 bg-gradient-to-r ${theme.gradient} rounded-full blur-3xl opacity-10 animate-pulse`}></div>
        <div className={`absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r ${theme.gradient} rounded-full blur-3xl opacity-8 animate-pulse`} style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header with User Name */}
          <div className={`bg-gradient-to-r ${theme.gradient} rounded-3xl p-8 mb-8 text-white shadow-2xl animate-fade-in`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <img
                    src={user?.avatar || 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'}
                    alt={user?.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                    <ThemeIcon className={`w-5 h-5 text-${theme.accent}-600`} />
                  </div>
                </div>
                <div>
                  <h1 className="text-4xl font-bold mb-2">Welcome back, {user?.name}!</h1>
                  <p className="text-xl opacity-90 mb-1">{theme.title}</p>
                  <p className="opacity-75">{theme.subtitle}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold">Level 3</div>
                  <div className="text-sm opacity-90">
                    {user?.userType === 'distributer' ? 'Gold Distributor' : 
                     user?.userType === 'pharmacy' ? 'Verified Pharmacy' : 
                     'Premium Member'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20">
            <div className="md:flex">
              {/* Enhanced Sidebar */}
              <div className={`md:w-80 bg-gradient-to-b ${theme.bgPattern} border-r border-white/30`}>
                <div className="p-8">
                  {/* User Stats Card */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-lg">
                    <div className="text-center">
                      <div className={`text-3xl font-bold text-${theme.accent}-600 mb-2`}>
                        {user?.userType === 'distributer' ? '₹12,450' : 
                         user?.userType === 'pharmacy' ? '₹8,750' : 
                         '₹2,340'}
                      </div>
                      <div className="text-sm text-gray-600">
                        {user?.userType === 'distributer' ? 'Total Sales' : 
                         user?.userType === 'pharmacy' ? 'Monthly Revenue' : 
                         'Total Savings'}
                      </div>
                      <div className="flex items-center justify-center space-x-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 fill-yellow-400 text-yellow-400`} />
                        ))}
                        <span className="text-sm text-gray-600 ml-2">4.9</span>
                      </div>
                    </div>
                  </div>

                  <nav className="space-y-2">
                    {tabs.map(tab => {
                      const IconComponent = tab.icon;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`w-full flex items-center space-x-4 px-6 py-4 rounded-2xl text-left transition-all duration-300 transform hover:scale-105 ${
                            activeTab === tab.id
                              ? `bg-gradient-to-r ${theme.gradient} text-white shadow-lg scale-105`
                              : 'text-gray-600 hover:bg-white/60 hover:shadow-md'
                          }`}
                        >
                          <IconComponent className="w-6 h-6" />
                          <span className="font-medium">{tab.name}</span>
                        </button>
                      );
                    })}
                    
                    <button
                      onClick={logout}
                      className="w-full flex items-center space-x-4 px-6 py-4 rounded-2xl text-left text-red-600 hover:bg-red-50 hover:shadow-md transition-all duration-300 transform hover:scale-105"
                    >
                      <LogOut className="w-6 h-6" />
                      <span className="font-medium">Logout</span>
                    </button>
                  </nav>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-8">
                {activeTab === 'profile' && (
                  <div className="animate-fade-in">
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-3xl font-bold text-gray-800">Profile Information</h2>
                      {!isEditing ? (
                        <button
                          onClick={() => setIsEditing(true)}
                          className={`flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${theme.gradient} text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                        >
                          <Edit className="w-5 h-5" />
                          <span>Edit Profile</span>
                        </button>
                      ) : (
                        <div className="flex space-x-3">
                          <button
                            onClick={handleSave}
                            className={`flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${theme.gradient} text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                          >
                            <Save className="w-5 h-5" />
                            <span>Save</span>
                          </button>
                          <button
                            onClick={() => setIsEditing(false)}
                            className="flex items-center space-x-2 px-6 py-3 bg-gray-300 text-gray-700 rounded-xl hover:bg-gray-400 transition-all duration-300 transform hover:scale-105"
                          >
                            <X className="w-5 h-5" />
                            <span>Cancel</span>
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {Object.entries(profileData).map(([key, value]) => (
                        <div key={key} className="relative group">
                          <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </label>
                          <input
                            type={key === 'email' ? 'email' : key === 'phone' ? 'tel' : 'text'}
                            value={value}
                            onChange={(e) => setProfileData({...profileData, [key]: e.target.value})}
                            disabled={!isEditing}
                            className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-${theme.accent}-500 disabled:bg-gray-50 transition-all duration-300 group-hover:border-${theme.accent}-300`}
                          />
                          <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${theme.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'products' && (
                  <div className="animate-fade-in">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Shop Products</h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                      {[
                        {
                          id: 1,
                          name: 'EcoFlow Cup',
                          price: 45,
                          image: 'https://images.pexels.com/photos/7319325/pexels-photo-7319325.jpeg?auto=compress&cs=tinysrgb&w=300',
                          rating: 4.8,
                          category: 'Menstrual Cups'
                        },
                        {
                          id: 2,
                          name: 'ComfortMax Brief',
                          price: 32,
                          image: 'https://images.pexels.com/photos/7262708/pexels-photo-7262708.jpeg?auto=compress&cs=tinysrgb&w=300',
                          rating: 4.9,
                          category: 'Period Underwear'
                        },
                        {
                          id: 3,
                          name: 'Travel Kit Pro',
                          price: 25,
                          image: 'https://images.pexels.com/photos/7319069/pexels-photo-7319069.jpeg?auto=compress&cs=tinysrgb&w=300',
                          rating: 4.7,
                          category: 'Accessories'
                        },
                        {
                          id: 4,
                          name: 'PureFlex Cup',
                          price: 52,
                          image: 'https://images.pexels.com/photos/7319326/pexels-photo-7319326.jpeg?auto=compress&cs=tinysrgb&w=300',
                          rating: 4.9,
                          category: 'Premium Cups'
                        },
                        {
                          id: 5,
                          name: 'ActiveFlow Brief',
                          price: 38,
                          image: 'https://images.pexels.com/photos/7262708/pexels-photo-7262708.jpeg?auto=compress&cs=tinysrgb&w=300',
                          rating: 4.8,
                          category: 'Athletic Wear'
                        },
                        {
                          id: 6,
                          name: 'Starter Kit',
                          price: 89,
                          image: 'https://images.pexels.com/photos/7319070/pexels-photo-7319070.jpeg?auto=compress&cs=tinysrgb&w=300',
                          rating: 4.9,
                          category: 'Starter Kits'
                        }
                      ].map(product => (
                        <div key={product.id} className={`bg-white/80 backdrop-blur-sm border-2 border-${theme.accent}-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover"
                          />
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-semibold text-gray-800">{product.name}</h3>
                              <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm text-gray-600">{product.rating}</span>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">{product.category}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-xl font-bold text-gray-800">₹{product.price}</span>
                              <button className={`bg-gradient-to-r ${theme.gradient} text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                                Add to Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center">
                      <Link
                        to="/products"
                        className={`inline-block bg-gradient-to-r ${theme.gradient} text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                      >
                        View All Products
                      </Link>
                    </div>
                  </div>
                )}

                {activeTab === 'kits' && (
                  <div className="animate-fade-in">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">CareSakhi Kits</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {[
                        {
                          id: 101,
                          name: 'All-in-One Complete Kit',
                          price: 149,
                          originalPrice: 199,
                          image: 'https://images.pexels.com/photos/7319070/pexels-photo-7319070.jpeg?auto=compress&cs=tinysrgb&w=300',
                          includes: ['2 Menstrual Cups', '3 Period Underwear', 'Travel Kit', 'Care Guide'],
                          badge: 'Most Popular'
                        },
                        {
                          id: 102,
                          name: 'Beginner Starter Kit',
                          price: 89,
                          originalPrice: 120,
                          image: 'https://images.pexels.com/photos/7319325/pexels-photo-7319325.jpeg?auto=compress&cs=tinysrgb&w=300',
                          includes: ['1 Menstrual Cup', '2 Period Underwear', 'Instruction Guide'],
                          badge: 'Best for Beginners'
                        },
                        {
                          id: 103,
                          name: 'Travel Essentials Kit',
                          price: 75,
                          originalPrice: 95,
                          image: 'https://images.pexels.com/photos/7319069/pexels-photo-7319069.jpeg?auto=compress&cs=tinysrgb&w=300',
                          includes: ['1 Menstrual Cup', 'Sterilizer', 'Travel Pouch', 'Cleaning Tablets'],
                          badge: 'Travel Ready'
                        },
                        {
                          id: 104,
                          name: 'Comfort Plus Kit',
                          price: 125,
                          originalPrice: 160,
                          image: 'https://images.pexels.com/photos/7262708/pexels-photo-7262708.jpeg?auto=compress&cs=tinysrgb&w=300',
                          includes: ['1 Premium Cup', '4 Comfort Briefs', 'Wellness Guide'],
                          badge: 'Premium'
                        }
                      ].map(kit => (
                        <div key={kit.id} className={`bg-white/80 backdrop-blur-sm border-2 border-${theme.accent}-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                          <div className="relative mb-4">
                            <img
                              src={kit.image}
                              alt={kit.name}
                              className="w-full h-48 object-cover rounded-xl"
                            />
                            <div className="absolute top-3 left-3">
                              <span className={`bg-gradient-to-r ${theme.gradient} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                                {kit.badge}
                              </span>
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{kit.name}</h3>
                          
                          <div className="mb-4">
                            <h4 className="font-semibold text-gray-800 mb-2">Includes:</h4>
                            <ul className="space-y-1">
                              {kit.includes.map((item, index) => (
                                <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-2">
                              <span className="text-2xl font-bold text-gray-800">₹{kit.price}</span>
                              <span className="text-lg text-gray-400 line-through">₹{kit.originalPrice}</span>
                            </div>
                            <div className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-bold">
                              Save ₹{kit.originalPrice - kit.price}
                            </div>
                          </div>
                          
                          <Link
                            to="/checkout"
                            className={`w-full bg-gradient-to-r ${theme.gradient} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2`}
                          >
                            <ShoppingCart className="w-5 h-5" />
                            <span>Add Kit & Checkout</span>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'orders' && (
                  <div className="animate-fade-in">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Order History</h2>
                    
                    <div className="space-y-6">
                      {mockOrders.map(order => (
                        <div key={order.id} className={`border-2 border-${theme.accent}-100 rounded-2xl p-6 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-semibold text-gray-800">Order {order.id}</h3>
                              <p className="text-gray-600">Placed on {order.date}</p>
                            </div>
                            <div className="text-right">
                              <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                                order.status === 'Delivered' 
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-blue-100 text-blue-800'
                              }`}>
                                {order.status}
                              </div>
                              <div className="text-2xl font-bold text-gray-800 mt-2">
                                ₹{order.total}
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            {order.items.map((item, index) => (
                              <div key={index} className="flex justify-between text-sm bg-gray-50 p-3 rounded-lg">
                                <span>{item.name} x {item.quantity}</span>
                                <span className="font-medium">₹{item.price * item.quantity}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'map' && (
                  <div className="animate-fade-in">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Find Nearby Stores</h2>
                    
                    {/* User Profiles Section */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Community Profiles</h3>
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className={`bg-white/80 backdrop-blur-sm border-2 border-${theme.accent}-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`}>
                          <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                            <Users className="w-6 h-6 mr-2 text-pink-600" />
                            Fellow Customers
                          </h4>
                          <div className="space-y-4">
                            {[
                              { name: 'Priya Sharma', location: 'Mumbai, Maharashtra', rating: '4.8★', status: 'Active user', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100' },
                              { name: 'Anjali Patel', location: 'Delhi, India', rating: '5.0★', status: 'New member', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100' }
                            ].map((customer, index) => (
                              <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl hover:from-pink-100 hover:to-rose-100 cursor-pointer transition-all duration-300 transform hover:scale-105">
                                <div className="flex items-center space-x-3">
                                  <img
                                    src={customer.avatar}
                                    alt={customer.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                                  />
                                  <div>
                                    <div className="font-medium text-gray-800">{customer.name}</div>
                                    <div className="text-sm text-gray-600">{customer.location}</div>
                                    <div className="text-xs text-pink-600">{customer.status} • {customer.rating}</div>
                                  </div>
                                </div>
                                <button className={`text-${theme.accent}-600 hover:text-${theme.accent}-700 font-medium text-sm transition-colors`}>
                                  Connect
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className={`bg-white/80 backdrop-blur-sm border-2 border-${theme.accent}-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`}>
                          <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                            <Award className="w-6 h-6 mr-2 text-purple-600" />
                            Top Distributors
                          </h4>
                          <div className="space-y-4">
                            {[
                              { name: 'Meera Gupta', location: 'Bangalore, Karnataka', level: 'Gold Level', coins: '1,250 coins', avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100' },
                              { name: 'Kavya Singh', location: 'Chennai, Tamil Nadu', level: 'Silver Level', coins: '890 coins', avatar: 'https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&w=100' }
                            ].map((distributor, index) => (
                              <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl hover:from-green-100 hover:to-emerald-100 cursor-pointer transition-all duration-300 transform hover:scale-105">
                                <div className="flex items-center space-x-3">
                                  <img
                                    src={distributor.avatar}
                                    alt={distributor.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                                  />
                                  <div>
                                    <div className="font-medium text-gray-800">{distributor.name}</div>
                                    <div className="text-sm text-gray-600">{distributor.location}</div>
                                    <div className="text-xs text-green-600">{distributor.level} • {distributor.coins}</div>
                                  </div>
                                </div>
                                <button className="text-green-600 hover:text-green-700 font-medium text-sm transition-colors">
                                  View
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className={`bg-gradient-to-r ${theme.bgPattern} rounded-2xl p-8 text-center mb-6 border-2 border-${theme.accent}-200`}>
                      <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-semibold text-gray-800 mb-2">Interactive Map</h3>
                      <p className="text-gray-600 mb-6">
                        Find nearby New Age Distributors and Pharmacies
                      </p>
                      <button className={`bg-gradient-to-r ${theme.gradient} text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                        Enable Location
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === 'wallet' && (
                  <div className="animate-fade-in">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">CareSakhi Wallet</h2>
                    
                    <div className={`bg-gradient-to-r ${theme.gradient} rounded-3xl p-8 text-white mb-8 shadow-2xl`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-2xl font-semibold mb-2">Current Balance</h3>
                          <div className="text-4xl font-bold">₹250.00</div>
                          <div className="text-lg opacity-90 mt-2">
                            {user?.userType === 'distributer' ? '+ 125 CareSakhi Coins' : 
                             user?.userType === 'pharmacy' ? '+ 75 CareSakhi Coins' : 
                             '+ 25 CareSakhi Coins'}
                          </div>
                        </div>
                        <div className="text-right">
                          <WalletIcon className="w-16 h-16 opacity-80 mb-2" />
                          <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
                            <div className="text-sm opacity-90">This Month</div>
                            <div className="text-xl font-bold">+₹125</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className={`bg-white/80 backdrop-blur-sm border-2 border-${theme.accent}-100 rounded-2xl p-6 shadow-lg`}>
                        <h4 className="font-semibold text-gray-800 mb-4">Quick Actions</h4>
                        <div className="space-y-3">
                          <button className="w-full bg-green-600 text-white py-3 px-4 rounded-xl font-medium hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
                            Add Money
                          </button>
                          <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-xl font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                            View Transactions
                          </button>
                        </div>
                      </div>

                      <div className={`bg-white/80 backdrop-blur-sm border-2 border-${theme.accent}-100 rounded-2xl p-6 shadow-lg`}>
                        <h4 className="font-semibold text-gray-800 mb-4">Recent Activity</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                            <span className="text-gray-600">Cashback received</span>
                            <span className="text-green-600 font-medium">+₹25</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                            <span className="text-gray-600">Purchase payment</span>
                            <span className="text-red-600 font-medium">-₹45</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'wishlist' && (
                  <div className="animate-fade-in">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Wishlist</h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {mockWishlist.map(item => (
                        <div key={item.id} className={`bg-white/80 backdrop-blur-sm border-2 border-${theme.accent}-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-48 object-cover"
                          />
                          <div className="p-6">
                            <h3 className="font-semibold text-gray-800 mb-3">{item.name}</h3>
                            <div className="flex items-center justify-between">
                              <span className="text-xl font-bold text-gray-800">₹{item.price}</span>
                              <button className={`bg-gradient-to-r ${theme.gradient} text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                                Add to Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'settings' && (
                  <div className="animate-fade-in">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Account Settings</h2>
                    
                    <div className="space-y-6">
                      <div className={`bg-gradient-to-r ${theme.bgPattern} rounded-2xl p-6 border-2 border-${theme.accent}-200`}>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Notifications</h3>
                        <div className="space-y-4">
                          {[
                            'Email notifications for orders',
                            'Marketing emails',
                            'SMS notifications',
                            'Push notifications'
                          ].map((setting, index) => (
                            <label key={index} className="flex items-center group cursor-pointer">
                              <input 
                                type="checkbox" 
                                className={`w-5 h-5 text-${theme.accent}-600 border-gray-300 rounded focus:ring-${theme.accent}-500 transition-colors`} 
                                defaultChecked={index < 2} 
                              />
                              <span className="ml-3 text-gray-700 group-hover:text-gray-900 transition-colors">{setting}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className={`bg-gradient-to-r ${theme.bgPattern} rounded-2xl p-6 border-2 border-${theme.accent}-200`}>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Privacy</h3>
                        <div className="space-y-4">
                          {[
                            'Make profile public',
                            'Share data for analytics',
                            'Allow marketing communications'
                          ].map((setting, index) => (
                            <label key={index} className="flex items-center group cursor-pointer">
                              <input 
                                type="checkbox" 
                                className={`w-5 h-5 text-${theme.accent}-600 border-gray-300 rounded focus:ring-${theme.accent}-500 transition-colors`} 
                                defaultChecked={index === 0} 
                              />
                              <span className="ml-3 text-gray-700 group-hover:text-gray-900 transition-colors">{setting}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                        <h3 className="text-xl font-semibold text-red-800 mb-4">Danger Zone</h3>
                        <p className="text-red-600 mb-4">
                          Once you delete your account, there is no going back. Please be certain.
                        </p>
                        <button className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
                          Delete Account
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
