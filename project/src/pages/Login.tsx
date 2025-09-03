import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Eye, EyeOff, Heart, Sparkles, Users, Building, ShoppingBag } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [selectedUserType, setSelectedUserType] = useState('customer');

  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/account';

  const userTypes = [
    {
      id: 'customer',
      name: 'Customer',
      icon: ShoppingBag,
      description: 'Shop for menstrual products',
      gradient: 'from-pink-500 to-rose-500',
      bgPattern: 'from-pink-50 via-rose-50 to-pink-100'
    },
    {
      id: 'distributer',
      name: 'Distributor',
      icon: Users,
      description: 'Manage your distribution network',
      gradient: 'from-green-500 to-emerald-500',
      bgPattern: 'from-green-50 via-emerald-50 to-green-100'
    },
    {
      id: 'pharmacy',
      name: 'Pharmacy',
      icon: Building,
      description: 'Manage pharmacy operations',
      gradient: 'from-purple-500 to-indigo-500',
      bgPattern: 'from-purple-50 via-indigo-50 to-purple-100'
    }
  ];

  const currentUserType = userTypes.find(type => type.id === selectedUserType);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const success = await login(formData.email, formData.password);
    if (success) {
      navigate(from, { replace: true });
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${currentUserType.bgPattern} pt-24 pb-12 transition-all duration-1000 ease-in-out`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-32 left-10 w-32 h-32 bg-gradient-to-r ${currentUserType.gradient} rounded-full blur-3xl opacity-20 animate-pulse`}></div>
        <div className={`absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r ${currentUserType.gradient} rounded-full blur-3xl opacity-15 animate-pulse`} style={{ animationDelay: '1s' }}></div>
        <div className={`absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r ${currentUserType.gradient} rounded-full blur-3xl opacity-10 animate-pulse`} style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Icons */}
        <div className="absolute top-1/4 right-1/4 animate-float">
          <Heart className="w-8 h-8 text-pink-300 opacity-30" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float-delay">
          <Sparkles className="w-6 h-6 text-purple-300 opacity-40" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-md mx-auto">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20 animate-fade-in">
            {/* Logo */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <div className="relative">
                  <img 
                    src="/navbar logo2.png" 
                    alt="CareSakhi Logo" 
                    className="h-32 lg:h-40 w-auto object-contain transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -inset-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur opacity-20 animate-pulse"></div>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
              <p className="text-gray-600">Sign in to your {currentUserType.name.toLowerCase()} account</p>
            </div>

            {/* User Type Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Account Type
              </label>
              <div className="grid grid-cols-3 gap-2">
                {userTypes.map(type => {
                  const IconComponent = type.icon;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedUserType(type.id)}
                      className={`p-3 rounded-xl text-center transition-all duration-300 transform hover:scale-105 ${
                        selectedUserType === type.id
                          ? `bg-gradient-to-r ${type.gradient} text-white shadow-lg scale-105`
                          : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <IconComponent className="w-5 h-5 mx-auto mb-1" />
                      <div className="text-xs font-medium">{type.name}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dynamic Welcome Message */}
            <div className={`mb-6 p-4 rounded-xl bg-gradient-to-r ${currentUserType.bgPattern} border border-white/50 transform transition-all duration-500`}>
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-full bg-gradient-to-r ${currentUserType.gradient}`}>
                  <currentUserType.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{currentUserType.name} Portal</h3>
                  <p className="text-sm text-gray-600">{currentUserType.description}</p>
                </div>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl animate-fade-in">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 group-hover:border-pink-300"
                    placeholder="Enter your email"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                <div className="relative group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent pr-12 transition-all duration-300 group-hover:border-pink-300"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500 transition-colors"
                  />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-pink-600 hover:text-pink-700 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-gradient-to-r ${currentUserType.gradient} text-white py-4 px-4 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 hover:shadow-xl`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Signing in...</span>
                  </div>
                ) : (
                  `Sign In as ${currentUserType.name}`
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="my-8 flex items-center">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-sm text-gray-500">or</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center space-x-3 py-3 px-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:shadow-md transform hover:scale-105">
                <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  G
                </div>
                <span className="text-gray-700">Continue with Google</span>
              </button>
              
              <button className="w-full flex items-center justify-center space-x-3 py-3 px-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:shadow-md transform hover:scale-105">
                <div className="w-5 h-5 bg-gradient-to-r from-blue-700 to-blue-800 rounded text-white text-xs flex items-center justify-center font-bold">
                  f
                </div>
                <span className="text-gray-700">Continue with Facebook</span>
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <Link
                  to="/register"
                  className={`bg-gradient-to-r ${currentUserType.gradient} bg-clip-text text-transparent font-semibold hover:underline transition-all duration-300`}
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 animate-float opacity-30">
            <div className={`w-16 h-16 bg-gradient-to-r ${currentUserType.gradient} rounded-full blur-xl`}></div>
          </div>
          <div className="absolute bottom-1/3 right-1/3 animate-float-delay opacity-20">
            <div className={`w-12 h-12 bg-gradient-to-r ${currentUserType.gradient} rounded-full blur-xl`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
