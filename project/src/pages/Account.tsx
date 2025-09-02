import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Package, Heart, Settings, LogOut, Edit, Save, X, MapPin, Wallet as WalletIcon, Crown, Star, ShoppingCart, CheckCircle, AlertTriangle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Account = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '123-456-7890',
    address: '123 Wellness Way',
    city: 'Mumbai',
    state: 'Maharashtra',
    zipCode: '400001'
  });

  const getThemeConfig = () => {
    return {
      gradient: 'from-pink-500 to-rose-500',
      bgPattern: 'from-pink-50 to-rose-50',
      accent: 'pink',
      icon: Crown,
      title: 'Customer Account',
      subtitle: 'Your personal wellness journey'
    };
  };

  const theme = getThemeConfig();

  const handleSave = () => {
    setIsEditing(false);
  };

  const mockProducts = [
    { id: 1, name: 'EcoFlow Cup', price: 45, image: 'https://images.pexels.com/photos/7319325/pexels-photo-7319325.jpeg?auto=compress&cs=tinysrgb&w=300', rating: 4.8, category: 'Menstrual Cups' },
    { id: 2, name: 'ComfortMax Brief', price: 32, image: 'https://images.pexels.com/photos/7262708/pexels-photo-7262708.jpeg?auto=compress&cs=tinysrgb&w=300', rating: 4.9, category: 'Period Underwear' },
    { id: 3, name: 'Travel Kit Pro', price: 25, image: 'https://images.pexels.com/photos/7319069/pexels-photo-7319069.jpeg?auto=compress&cs=tinysrgb&w=300', rating: 4.7, category: 'Accessories' },
  ];

   const mockKits = [
    { id: 101, name: 'All-in-One Complete Kit', price: 149, image: 'https://images.pexels.com/photos/7319070/pexels-photo-7319070.jpeg?auto=compress&cs=tinysrgb&w=300', badge: 'Most Popular' },
    { id: 102, name: 'Beginner Starter Kit', price: 89, image: 'https://images.pexels.com/photos/7319325/pexels-photo-7319325.jpeg?auto=compress&cs=tinysrgb&w=300', badge: 'Best for Beginners' },
   ];

  const mockOrders = [
    { id: 'ORD-001', date: '2024-01-15', status: 'Delivered', total: 89.99 },
    { id: 'ORD-002', date: '2024-01-10', status: 'Shipped', total: 52.00 }
  ];

  const mockWishlist = [
    { id: 3, name: 'Travel Kit Pro', price: 25, image: 'https://images.pexels.com/photos/7319069/pexels-photo-7319069.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: 5, name: 'ActiveFlow Brief', price: 38, image: 'https://images.pexels.com/photos/7262708/pexels-photo-7262708.jpeg?auto=compress&cs=tinysrgb&w=300' }
  ];

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'products', name: 'Products', icon: Package },
    { id: 'kits', name: 'Kits', icon: Heart },
    { id: 'orders', name: 'Orders', icon: Package },
    { id: 'map', name: 'Find Stores', icon: MapPin },
    { id: 'wallet', name: 'Wallet', icon: WalletIcon },
    { id: 'wishlist', name: 'Wishlist', icon: Heart },
    { id: 'settings', name: 'Settings', icon: Settings }
  ];
  
  const TabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Profile Information</h2>
              {!isEditing ? (
                <button onClick={() => setIsEditing(true)} className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${theme.gradient} text-white rounded-lg text-sm`}>
                  <Edit className="w-4 h-4" />
                  <span>Edit</span>
                </button>
              ) : (
                <div className="flex space-x-2">
                  <button onClick={handleSave} className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${theme.gradient} text-white rounded-lg text-sm`}>
                    <Save className="w-4 h-4" />
                    <span>Save</span>
                  </button>
                  <button onClick={() => setIsEditing(false)} className="flex items-center space-x-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm">
                    <X className="w-4 h-4" />
                    <span>Cancel</span>
                  </button>
                </div>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(profileData).map(([key, value]) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</label>
                  <input
                    type={key === 'email' ? 'email' : 'text'}
                    value={value}
                    onChange={(e) => setProfileData({...profileData, [key]: e.target.value})}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 disabled:bg-gray-50"
                  />
                </div>
              ))}
            </div>
          </div>
        );
      case 'products':
         return (
            <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Shop Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mockProducts.map(product => (
                        <div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                           <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
                           <div className="p-4">
                               <h3 className="font-semibold">{product.name}</h3>
                               <p className="text-sm text-gray-500">{product.category}</p>
                               <div className="flex justify-between items-center mt-4">
                                   <span className="font-bold text-lg">₹{product.price}</span>
                                   <button className="bg-pink-600 text-white text-sm px-3 py-1 rounded-full">Add to Cart</button>
                               </div>
                           </div>
                        </div>
                    ))}
                </div>
            </div>
         );
      case 'kits':
        return (
            <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">CareSakhi Kits</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {mockKits.map(kit => (
                        <div key={kit.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                           <img src={kit.image} alt={kit.name} className="w-full h-40 object-cover" />
                           <div className="p-4">
                               <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-semibold">{kit.badge}</span>
                               <h3 className="font-semibold mt-2">{kit.name}</h3>
                               <div className="flex justify-between items-center mt-4">
                                   <span className="font-bold text-lg">₹{kit.price}</span>
                                   <button className="bg-pink-600 text-white text-sm px-3 py-1 rounded-full">View Kit</button>
                               </div>
                           </div>
                        </div>
                    ))}
                </div>
            </div>
        );
      case 'orders':
        return (
            <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Order History</h2>
                <div className="space-y-4">
                {mockOrders.map(order => (
                    <div key={order.id} className="border border-gray-200 rounded-lg p-4 bg-white hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                        <div>
                        <h3 className="font-semibold text-gray-800">Order {order.id}</h3>
                        <p className="text-sm text-gray-600">Placed on {order.date}</p>
                        </div>
                        <div className={`text-sm font-medium px-3 py-1 rounded-full ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                        {order.status}
                        </div>
                    </div>
                    <div className="text-right font-bold text-gray-800 mt-2">
                        ₹{order.total}
                    </div>
                    </div>
                ))}
                </div>
            </div>
        );
      case 'map':
          return (
              <div className="animate-fade-in text-center">
                  <MapPin className="w-12 h-12 text-gray-300 mx-auto mb-4"/>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Find Stores</h2>
                  <p className="text-gray-600">This feature is coming soon!</p>
              </div>
          );
      case 'wallet':
        return (
            <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">My Wallet</h2>
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg text-center">
                    <p className="text-sm text-gray-600">Current Balance</p>
                    <p className="text-4xl font-bold text-gray-800">₹250.00</p>
                </div>
            </div>
        );
      case 'wishlist':
        return (
            <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">My Wishlist</h2>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {mockWishlist.map(item => (
                        <div key={item.id} className="flex items-center space-x-4 bg-white p-3 rounded-lg border border-gray-200">
                            <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md object-cover"/>
                            <div className="flex-1">
                                <h4 className="font-semibold">{item.name}</h4>
                                <p className="text-gray-600">₹{item.price}</p>
                            </div>
                            <button className="text-pink-500 hover:text-pink-700"><ShoppingCart className="w-5 h-5"/></button>
                        </div>
                    ))}
                 </div>
            </div>
        );
      case 'settings':
         return (
            <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Settings</h2>
                 <div className="space-y-6">
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Notifications</h3>
                        <div className="space-y-2">
                            <label className="flex items-center"><input type="checkbox" className="h-4 w-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500" defaultChecked/> <span className="ml-2 text-gray-700">Email Notifications</span></label>
                            <label className="flex items-center"><input type="checkbox" className="h-4 w-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"/> <span className="ml-2 text-gray-700">Push Notifications</span></label>
                        </div>
                    </div>
                     <div className="border-t pt-6">
                        <h3 className="font-semibold text-lg mb-2 text-red-600">Danger Zone</h3>
                         <button className="bg-red-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-red-600">Delete Account</button>
                    </div>
                 </div>
            </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bgPattern} pt-20`}>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`bg-gradient-to-r ${theme.gradient} rounded-2xl p-6 mb-8 text-white shadow-lg`}>
            <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
              <img
                src={user?.avatar || 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'}
                alt={user?.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md mb-4 sm:mb-0"
              />
              <div className="text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl font-bold">Welcome back, {user?.name}!</h1>
                <p className="text-lg opacity-90">{theme.title}</p>
              </div>
            </div>
          </div>
          
          <div className="md:flex md:space-x-8">
            {/* Desktop Sidebar */}
            <aside className="hidden md:block md:w-64 flex-shrink-0">
                <div className="bg-white rounded-2xl shadow-lg p-4 sticky top-24">
                    <nav className="space-y-1">
                        {tabs.map(tab => {
                        const IconComponent = tab.icon;
                        return (
                            <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                                activeTab === tab.id
                                ? `bg-pink-100 text-pink-700 font-semibold`
                                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                            }`}
                            >
                            <IconComponent className="w-5 h-5" />
                            <span>{tab.name}</span>
                            </button>
                        );
                        })}
                         <button
                            onClick={logout}
                            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-red-600 hover:bg-red-50 transition-all duration-200"
                        >
                            <LogOut className="w-5 h-5" />
                            <span>Logout</span>
                        </button>
                    </nav>
                </div>
            </aside>

            {/* Mobile Tab Navigation */}
            <div className="md:hidden mb-6">
                <div className="flex space-x-2 overflow-x-auto pb-4 scrollbar-hide">
                    {tabs.map(tab => (
                        <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-300 ${
                            activeTab === tab.id
                            ? `bg-pink-600 text-white shadow-md`
                            : 'bg-white text-gray-600 shadow-sm'
                        }`}
                        >
                        {tab.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-1 bg-white rounded-2xl shadow-lg p-6">
              <TabContent />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;

