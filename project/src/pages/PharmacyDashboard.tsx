import React, { useState } from 'react';
import { Package, TrendingUp, Users, MapPin, Plus, Eye, Edit, Trash2, Clock, Activity, Pill, FileText, Shield } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const PharmacyDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'EcoFlow Cup',
      stock: 15,
      price: 45,
      sold: 8,
      status: 'active',
      category: 'Menstrual Cups'
    },
    {
      id: 2,
      name: 'ComfortMax Brief',
      stock: 8,
      price: 32,
      sold: 5,
      status: 'active',
      category: 'Period Underwear'
    },
    {
      id: 3,
      name: 'Pain Relief Tablets',
      stock: 25,
      price: 15,
      sold: 12,
      status: 'active',
      category: 'Medication'
    }
  ]);

  const prescriptions = [
    {
      id: 'RX-001',
      patient: 'Sarah Johnson',
      doctor: 'Dr. Smith',
      medication: 'Pain Relief Tablets',
      quantity: 2,
      status: 'ready',
      date: '2024-01-15'
    },
    {
      id: 'RX-002',
      patient: 'Emma Rodriguez',
      doctor: 'Dr. Wilson',
      medication: 'Iron Supplements',
      quantity: 1,
      status: 'processing',
      date: '2024-01-14'
    }
  ];

  const stats = [
    { title: 'Daily Sales', value: '₹8,450', change: '+12%', icon: TrendingUp, color: 'purple' },
    { title: 'Prescriptions', value: '24', change: '+6', icon: FileText, color: 'indigo' },
    { title: 'Customers', value: '156', change: '+18', icon: Users, color: 'violet' },
    { title: 'Pending Orders', value: '3', change: '-2', icon: Clock, color: 'purple' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100 pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full blur-3xl opacity-15 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-gradient-to-r from-indigo-400 to-violet-400 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full blur-3xl opacity-12 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header with User Name */}
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl p-8 mb-8 text-white shadow-2xl animate-fade-in">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <img
                    src={user?.avatar || 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'}
                    alt={user?.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                    <Shield className="w-5 h-5 text-purple-600" />
                  </div>
                </div>
                <div>
                  <h1 className="text-4xl font-bold mb-2">Welcome, {user?.name}!</h1>
                  <p className="text-xl opacity-90 mb-1">Professional Pharmacy Portal</p>
                  <p className="opacity-75">Manage your pharmacy operations and patient care</p>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="w-6 h-6 text-blue-300" />
                    <div className="text-2xl font-bold">Verified</div>
                  </div>
                  <div className="text-sm opacity-90">Licensed Pharmacy</div>
                  <div className="text-xs opacity-75">License: PH-2024-001</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                      <p className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</p>
                      <p className={`text-sm font-medium text-${stat.color}-600 flex items-center`}>
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {stat.change}
                      </p>
                    </div>
                    <div className={`p-4 bg-gradient-to-br from-${stat.color}-100 to-${stat.color}-200 rounded-2xl shadow-lg`}>
                      <IconComponent className={`w-8 h-8 text-${stat.color}-600`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tabs */}
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/30">
            <div className="border-b border-gray-200/50">
              <nav className="flex space-x-8 px-8">
                {[
                  { id: 'overview', name: 'Overview', icon: Activity },
                  { id: 'products', name: 'Products', icon: Package },
                  { id: 'prescriptions', name: 'Prescriptions', icon: FileText },
                  { id: 'customers', name: 'Customers', icon: Users },
                  { id: 'location', name: 'Location', icon: MapPin }
                ].map(tab => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-6 px-1 border-b-2 font-medium text-sm transition-all duration-300 flex items-center space-x-2 ${
                        activeTab === tab.id
                          ? 'border-purple-500 text-purple-600 transform scale-105'
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

            <div className="p-8">
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-fade-in">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 border-2 border-purple-200 shadow-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <Activity className="w-6 h-6 mr-2 text-purple-600" />
                        Today's Activity
                      </h3>
                      <div className="space-y-4">
                        {[
                          { text: '3 prescriptions filled', color: 'green', icon: FileText, time: '30 min ago' },
                          { text: '12 products sold', color: 'blue', icon: Package, time: '1 hour ago' },
                          { text: '2 pending prescriptions', color: 'yellow', icon: Clock, time: '2 hours ago' },
                          { text: 'Inventory updated', color: 'purple', icon: Package, time: '3 hours ago' }
                        ].map((activity, index) => (
                          <div key={index} className="flex items-center justify-between p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                            <div className="flex items-center space-x-3">
                              <div className={`p-2 bg-${activity.color}-100 rounded-lg`}>
                                <activity.icon className={`w-4 h-4 text-${activity.color}-600`} />
                              </div>
                              <span className="text-gray-700 font-medium">{activity.text}</span>
                            </div>
                            <span className="text-xs text-gray-500">{activity.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-indigo-50 to-violet-50 rounded-2xl p-6 border-2 border-indigo-200 shadow-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <Pill className="w-6 h-6 mr-2 text-indigo-600" />
                        Quick Actions
                      </h3>
                      <div className="space-y-3">
                        <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-4 rounded-xl font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                          Process Prescription
                        </button>
                        <button className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white py-3 px-4 rounded-xl font-medium hover:from-indigo-700 hover:to-violet-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                          Update Inventory
                        </button>
                        <button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white py-3 px-4 rounded-xl font-medium hover:from-violet-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                          View Reports
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'products' && (
                <div className="animate-fade-in">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-800">Product Inventory</h3>
                    <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 shadow-lg">
                      <Plus className="w-5 h-5" />
                      <span>Add Product</span>
                    </button>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/30">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gradient-to-r from-purple-50 to-indigo-50">
                          <tr>
                            <th className="text-left py-4 px-6 font-semibold text-gray-700">Product</th>
                            <th className="text-left py-4 px-6 font-semibold text-gray-700">Category</th>
                            <th className="text-left py-4 px-6 font-semibold text-gray-700">Stock</th>
                            <th className="text-left py-4 px-6 font-semibold text-gray-700">Price</th>
                            <th className="text-left py-4 px-6 font-semibold text-gray-700">Sold</th>
                            <th className="text-left py-4 px-6 font-semibold text-gray-700">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {products.map((product, index) => (
                            <tr key={product.id} className="border-b border-gray-100 hover:bg-purple-50/50 transition-colors duration-300">
                              <td className="py-4 px-6 font-medium text-gray-800">{product.name}</td>
                              <td className="py-4 px-6">
                                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                                  {product.category}
                                </span>
                              </td>
                              <td className="py-4 px-6">
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                  product.stock > 10 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                }`}>
                                  {product.stock} units
                                </span>
                              </td>
                              <td className="py-4 px-6 font-semibold">₹{product.price}</td>
                              <td className="py-4 px-6">{product.sold}</td>
                              <td className="py-4 px-6">
                                <div className="flex space-x-2">
                                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                    <Eye className="w-4 h-4" />
                                  </button>
                                  <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                                    <Edit className="w-4 h-4" />
                                  </button>
                                  <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                    <Trash2 className="w-4 h-4" />
                                  </button>
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

              {activeTab === 'prescriptions' && (
                <div className="animate-fade-in">
                  <h3 className="text-2xl font-bold text-gray-800 mb-8">Prescription Management</h3>
                  <div className="space-y-6">
                    {prescriptions.map((prescription, index) => (
                      <div key={prescription.id} className="bg-white/80 backdrop-blur-sm border-2 border-purple-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center space-x-3 mb-3">
                              <div className="p-2 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg">
                                <FileText className="w-5 h-5 text-purple-600" />
                              </div>
                              <h4 className="text-xl font-semibold text-gray-800">Prescription {prescription.id}</h4>
                            </div>
                            <div className="space-y-1 text-gray-600">
                              <p><span className="font-medium">Patient:</span> {prescription.patient}</p>
                              <p><span className="font-medium">Doctor:</span> {prescription.doctor}</p>
                              <p><span className="font-medium">Medication:</span> {prescription.medication} × {prescription.quantity}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-500 mb-3">{prescription.date}</div>
                            <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                              prescription.status === 'ready' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                            }`}>
                              {prescription.status === 'ready' ? 'Ready for Pickup' : 'Processing'}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'location' && (
                <div className="animate-fade-in">
                  <h3 className="text-2xl font-bold text-gray-800 mb-8">Pharmacy Location</h3>
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-12 text-center border-2 border-purple-200 shadow-lg">
                    <MapPin className="w-20 h-20 text-purple-400 mx-auto mb-6" />
                    <h4 className="text-2xl font-semibold text-gray-800 mb-4">Update Your Location</h4>
                    <p className="text-gray-600 mb-8 text-lg">
                      Set your pharmacy location to help patients find you easily and improve service accessibility
                    </p>
                    <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Set Location
                    </button>
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

export default PharmacyDashboard;