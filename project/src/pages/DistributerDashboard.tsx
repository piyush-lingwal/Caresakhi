import React, { useState } from 'react';
import { Package, TrendingUp, Users, MapPin, Plus, Eye, Edit, Trash2, Trophy, Coins, Award, Star, Target, Zap } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const DistributerDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [walletData] = useState({ balance: 12450, coins: 125 });
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'EcoFlow Cup',
      stock: 25,
      price: 45,
      sold: 15,
      status: 'active'
    },
    {
      id: 2,
      name: 'ComfortMax Brief',
      stock: 12,
      price: 32,
      sold: 8,
      status: 'active'
    },
    {
      id: 3,
      name: 'Travel Kit Pro',
      stock: 5,
      price: 25,
      sold: 3,
      status: 'low_stock'
    }
  ]);

  const orders = [
    {
      id: 'ORD-001',
      customer: 'Sarah Johnson',
      product: 'EcoFlow Cup',
      quantity: 2,
      amount: 90,
      status: 'pending',
      date: '2024-01-15'
    },
    {
      id: 'ORD-002',
      customer: 'Emma Rodriguez',
      product: 'ComfortMax Brief',
      quantity: 1,
      amount: 32,
      status: 'completed',
      date: '2024-01-14'
    }
  ];

  const stats = [
    { title: 'Total Sales', value: '₹12,450', change: '+15%', icon: TrendingUp, color: 'green' },
    { title: 'Active Products', value: '12', change: '+2', icon: Package, color: 'emerald' },
    { title: 'Customers', value: '48', change: '+8', icon: Users, color: 'teal' },
    { title: 'Orders Today', value: '6', change: '+3', icon: Target, color: 'green' }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: TrendingUp },
    { id: 'products', name: 'Products', icon: Package },
    { id: 'orders', name: 'Orders', icon: Users },
    { id: 'customers', name: 'Customers', icon: Users },
    { id: 'location', name: 'Location', icon: MapPin }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-3xl opacity-15 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-teal-400 to-green-400 rounded-full blur-3xl opacity-12 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl p-6 sm:p-8 mb-8 text-white shadow-2xl animate-fade-in">
            <div className="flex flex-col sm:flex-row items-center sm:justify-between">
              <div className="flex items-center space-x-4 sm:space-x-6 mb-4 sm:mb-0">
                <div className="relative flex-shrink-0">
                  <img
                    src={user?.avatar || 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150'}
                    alt={user?.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <h1 className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">Hello, {user?.name}!</h1>
                  <p className="text-md sm:text-xl opacity-90">New Age Distributor Dashboard</p>
                </div>
              </div>
              <div className="text-center sm:text-right">
                <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
                  <div className="flex items-center space-x-2 mb-2">
                    <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300" />
                    <div className="text-xl sm:text-2xl font-bold">Level 3</div>
                  </div>
                  <div className="text-sm opacity-90">Gold Distributor</div>
                  <div className="text-xs opacity-75">Next: Platinum (250 more coins)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                      <p className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">{stat.value}</p>
                      <p className={`text-sm font-medium text-${stat.color}-600 flex items-center`}>
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {stat.change}
                      </p>
                    </div>
                    <div className={`p-3 sm:p-4 bg-gradient-to-br from-${stat.color}-100 to-${stat.color}-200 rounded-2xl shadow-lg`}>
                      <IconComponent className={`w-6 h-6 sm:w-8 sm:h-8 text-${stat.color}-600`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tabs */}
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/30">
            <div className="border-b border-gray-200/50">
              <nav className="flex space-x-4 sm:space-x-8 px-4 sm:px-8 overflow-x-auto scrollbar-hide">
                {tabs.map(tab => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 sm:py-6 px-1 border-b-2 font-medium text-sm transition-all duration-300 flex items-center space-x-2 whitespace-nowrap ${
                        activeTab === tab.id
                          ? 'border-green-500 text-green-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span>{tab.name}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="p-4 sm:p-8">
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-fade-in">
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-6 sm:p-8 border-2 border-yellow-200 shadow-lg">
                    <div className="flex flex-col sm:flex-row items-center sm:justify-between mb-6">
                      <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                        <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl shadow-lg">
                          <Trophy className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-800">CareSakhi Rewards</h3>
                          <p className="text-gray-600">Earn coins for every successful order and milestone</p>
                        </div>
                      </div>
                      <div className="text-center sm:text-right">
                        <div className="text-4xl font-bold text-yellow-600">{walletData.coins}</div>
                        <div className="text-sm text-gray-600">Available Coins</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 shadow-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <TrendingUp className="w-6 h-6 mr-2 text-green-600" />
                        Recent Activity
                      </h3>
                      {/* Activity content here */}
                    </div>
                    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border-2 border-emerald-200 shadow-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <Zap className="w-6 h-6 mr-2 text-emerald-600" />
                        Quick Actions
                      </h3>
                      <div className="space-y-3">
                         <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-4 rounded-xl font-medium hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg">Add New Product</button>
                         <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-4 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg">Update Inventory</button>
                         <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-4 rounded-xl font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg">View Reports</button>
                       </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'products' && (
                <div className="animate-fade-in">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">Product Inventory</h3>
                    <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-medium hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 shadow-lg">
                      <Plus className="w-5 h-5" />
                      <span>Add Product</span>
                    </button>
                  </div>
                  
                  {/* Mobile Product List */}
                  <div className="md:hidden space-y-4">
                    {products.map(product => (
                      <div key={product.id} className="bg-white border rounded-lg p-4 shadow-sm">
                        <div className="flex justify-between items-start">
                           <h4 className="font-bold text-gray-800">{product.name}</h4>
                           <span className={`px-3 py-1 rounded-full text-xs font-medium ${ product.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{product.status === 'active' ? 'Active' : 'Low Stock'}</span>
                        </div>
                        <div className="flex justify-between items-end mt-2">
                           <div>
                              <p className="text-sm text-gray-500">Stock: <span className="font-medium text-gray-800">{product.stock}</span></p>
                              <p className="text-sm text-gray-500">Price: <span className="font-medium text-gray-800">₹{product.price}</span></p>
                           </div>
                           <div className="flex space-x-2">
                             <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"><Eye className="w-4 h-4" /></button>
                             <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"><Edit className="w-4 h-4" /></button>
                             <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"><Trash2 className="w-4 h-4" /></button>
                           </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Desktop Product Table */}
                  <div className="hidden md:block bg-white rounded-2xl shadow-xl overflow-hidden border border-white/30">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                         <thead className="bg-gradient-to-r from-green-50 to-emerald-50">
                           <tr>
                             <th className="text-left py-4 px-6 font-semibold text-gray-700">Product</th>
                             <th className="text-left py-4 px-6 font-semibold text-gray-700">Stock</th>
                             <th className="text-left py-4 px-6 font-semibold text-gray-700">Price</th>
                             <th className="text-left py-4 px-6 font-semibold text-gray-700">Sold</th>
                             <th className="text-left py-4 px-6 font-semibold text-gray-700">Status</th>
                             <th className="text-left py-4 px-6 font-semibold text-gray-700">Actions</th>
                           </tr>
                         </thead>
                         <tbody>
                           {products.map((product) => (
                             <tr key={product.id} className="border-b border-gray-100 hover:bg-green-50/50 transition-colors duration-300">
                               <td className="py-4 px-6 font-medium text-gray-800">{product.name}</td>
                               <td className="py-4 px-6"><span className={`px-3 py-1 rounded-full text-xs font-medium ${ product.stock > 10 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{product.stock} units</span></td>
                               <td className="py-4 px-6 font-semibold">₹{product.price}</td>
                               <td className="py-4 px-6">{product.sold}</td>
                               <td className="py-4 px-6"><span className={`px-3 py-1 rounded-full text-xs font-medium ${ product.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{product.status === 'active' ? 'Active' : 'Low Stock'}</span></td>
                               <td className="py-4 px-6">
                                 <div className="flex space-x-2">
                                   <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"><Eye className="w-4 h-4" /></button>
                                   <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"><Edit className="w-4 h-4" /></button>
                                   <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"><Trash2 className="w-4 h-4" /></button>
                                 </div>
                               </td>
                             </tr>
                           ))}
                         </tbody>
                       </table>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistributerDashboard;

