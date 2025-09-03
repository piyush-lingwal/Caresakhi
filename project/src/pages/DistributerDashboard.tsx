import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Package, Settings, LogOut, Edit, Wallet as WalletIcon, Users, BarChart2, PlusCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const DistributerDashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // --- MOCK DATA (from your original component) ---
  const mockStats = {
    totalPharmacies: 78,
    monthlyRevenue: 125000,
    pendingOrders: 12,
    topProduct: 'EcoFlow Cup'
  };

  const mockPharmacies = [
    { id: 1, name: 'Wellness Pharmacy', location: 'Mumbai', status: 'Active', sales: 25000 },
    { id: 2, name: 'City Health Meds', location: 'Delhi', status: 'Active', sales: 18000 },
    { id: 3, name: 'New Age Pharma', location: 'Bangalore', status: 'Pending', sales: 0 },
  ];

  const mockProducts = [
    { id: 1, name: 'EcoFlow Cup', stock: 150, price: 45 },
    { id: 2, name: 'ComfortMax Brief', stock: 200, price: 32 },
    { id: 101, name: 'All-in-One Kit', stock: 80, price: 149 },
  ];

  // --- DYNAMIC FUNCTIONS (from your original component) ---
  const handleAddPharmacy = () => alert('Add New Pharmacy form would appear here.');
  const handleAddProduct = () => alert('Add New Product form would appear here.');
  const handleWithdraw = () => alert('Withdrawal process would start here.');

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart2 },
    { id: 'pharmacies', name: 'Manage Pharmacies', icon: Users },
    { id: 'products', name: 'My Products', icon: Package },
    { id: 'wallet', name: 'My Wallet', icon: WalletIcon },
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'settings', name: 'Settings', icon: Settings }
  ];

  const TabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="animate-fade-in space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                    <h3 className="text-sm font-medium text-blue-800">Total Pharmacies</h3>
                    <p className="text-3xl font-bold text-blue-900">{mockStats.totalPharmacies}</p>
                </div>
                 <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                    <h3 className="text-sm font-medium text-green-800">Monthly Revenue</h3>
                    <p className="text-3xl font-bold text-green-900">₹{mockStats.monthlyRevenue.toLocaleString()}</p>
                </div>
                 <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl">
                    <h3 className="text-sm font-medium text-yellow-800">Pending Orders</h3>
                    <p className="text-3xl font-bold text-yellow-900">{mockStats.pendingOrders}</p>
                </div>
                 <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl">
                    <h3 className="text-sm font-medium text-pink-800">Top Product</h3>
                    <p className="text-2xl sm:text-3xl font-bold text-pink-900 truncate">{mockStats.topProduct}</p>
                </div>
            </div>
          </div>
        );
      case 'pharmacies':
        return (
          <div className="animate-fade-in">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">Manage Pharmacies</h2>
                <button onClick={handleAddPharmacy} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center space-x-2 hover:bg-blue-700 transition-colors transform active:scale-95">
                    <PlusCircle className="w-4 h-4" />
                    <span>Add New Pharmacy</span>
                </button>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
                {/* Pharmacy list for mobile */}
                <div className="md:hidden divide-y divide-gray-200">
                    {mockPharmacies.map(p => (
                        <div key={p.id} className="p-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-bold text-gray-800">{p.name}</p>
                                    <p className="text-sm text-gray-500">{p.location}</p>
                                </div>
                                <span className={`text-xs font-medium px-2 py-1 rounded-full ${p.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>{p.status}</span>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <p className="text-md font-semibold">Sales: ₹{p.sales.toLocaleString()}</p>
                                <a href="#" className="text-blue-600 hover:text-blue-900 text-sm font-medium">View</a>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Pharmacy table for desktop */}
                <div className="hidden md:block">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Sales</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {mockPharmacies.map(p => (
                                <tr key={p.id}>
                                    <td className="px-6 py-4 whitespace-nowrap"><div className="font-medium text-gray-900">{p.name}</div><div className="text-sm text-gray-500">{p.location}</div></td>
                                    <td className="px-6 py-4 whitespace-nowrap"><span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${p.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>{p.status}</span></td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">₹{p.sales.toLocaleString()}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><a href="#" className="text-blue-600 hover:text-blue-900">View</a></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
          </div>
        );
       case 'products':
         return (
             <div className="animate-fade-in">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">My Products</h2>
                    <button onClick={handleAddProduct} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center space-x-2 hover:bg-blue-700 transition-colors transform active:scale-95">
                        <PlusCircle className="w-4 h-4" />
                        <span>Add Product</span>
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mockProducts.map(product => (
                        <div key={product.id} className="bg-white border border-gray-200 rounded-lg p-4">
                           <h3 className="font-semibold text-gray-800">{product.name}</h3>
                           <div className="flex justify-between items-center mt-4">
                               <div>
                                   <p className="text-sm text-gray-500">Stock</p>
                                   <p className="font-bold text-lg">{product.stock}</p>
                               </div>
                               <div>
                                   <p className="text-sm text-gray-500">Price</p>
                                   <p className="font-bold text-lg">₹{product.price}</p>
                               </div>
                               <button className="text-blue-500 hover:text-blue-700 p-2 rounded-full hover:bg-blue-50 transition-colors"><Edit className="w-4 h-4"/></button>
                           </div>
                        </div>
                    ))}
                </div>
             </div>
         );
      case 'wallet':
        return (
             <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">My Wallet</h2>
                 <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-center mb-6">
                    <p className="text-sm text-gray-600">Available for Withdrawal</p>
                    <p className="text-4xl font-bold text-gray-800">₹75,320.50</p>
                    <button onClick={handleWithdraw} className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors transform active:scale-95">Withdraw Funds</button>
                </div>
                 <h3 className="font-semibold text-lg mb-2">Transaction History</h3>
                 {/* This would be a similar list to the customer wallet */}
             </div>
        );
      // Other cases (profile, settings) can be added here
      default:
        return <div>Content for {activeTab}</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
           <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 mb-8 text-white shadow-lg">
                <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
                <img
                    src={user?.avatar || 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'}
                    alt={user?.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-white shadow-md mb-4 sm:mb-0"
                />
                <div className="text-center sm:text-left">
                    <h1 className="text-xl sm:text-3xl font-bold">Welcome, {user?.name}!</h1>
                    <p className="text-md sm:text-lg opacity-90">Distributor Dashboard</p>
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
                                ? `bg-blue-100 text-blue-700 font-semibold`
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
                            ? `bg-blue-600 text-white shadow-md`
                            : 'bg-white text-gray-600 shadow-sm'
                        }`}
                        >
                        {tab.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-1 bg-white rounded-2xl shadow-lg p-4 sm:p-6">
              <TabContent />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistributerDashboard;

