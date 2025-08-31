import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Heart, Sparkles, Users, Building, ShoppingBag, Star, CheckCircle, Shield, Crown, Award } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'customer'
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  
  const { register, isLoading } = useAuth();
  const navigate = useNavigate();

  const userTypes = [
    {
      id: 'customer',
      name: 'Customer',
      icon: ShoppingBag,
      description: 'Shop for premium menstrual products',
      benefits: ['Exclusive discounts', 'Period tracking', 'Expert support', 'Wellness insights'],
      gradient: 'from-pink-500 to-rose-500',
      bgPattern: 'from-pink-50 via-rose-50 to-pink-100',
      welcomeMessage: 'Welcome to your journey of sustainable period care!',
      badgeIcon: Crown,
      badgeText: 'Premium Member'
    },
    {
      id: 'distributer',
      name: 'Distributor',
      icon: Users,
      description: 'Join our distribution network',
      benefits: ['Earn commissions', 'Business dashboard', 'Marketing support', 'Growth analytics'],
      gradient: 'from-green-500 to-emerald-500',
      bgPattern: 'from-green-50 via-emerald-50 to-green-100',
      welcomeMessage: 'Empower women in your community while building your business!',
      badgeIcon: Award,
      badgeText: 'Business Partner'
    },
    {
      id: 'pharmacy',
      name: 'Pharmacy',
      icon: Building,
      description: 'Partner with us as a pharmacy',
      benefits: ['Inventory management', 'Prescription tracking', 'Professional tools', 'Healthcare insights'],
      gradient: 'from-purple-500 to-indigo-500',
      bgPattern: 'from-purple-50 via-indigo-50 to-purple-100',
      welcomeMessage: 'Enhance your pharmacy services with our partnership!',
      badgeIcon: Shield,
      badgeText: 'Licensed Partner'
    }
  ];

  const currentUserType = userTypes.find(type => type.id === formData.userType);
  const BadgeIcon = currentUserType.badgeIcon;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    const success = await register(formData.name, formData.email, formData.password, formData.userType);
    if (success) {
      // Redirect based on user type
      if (formData.userType === 'distributer') {
        navigate('/distributer-dashboard');
      } else if (formData.userType === 'pharmacy') {
        navigate('/pharmacy-dashboard');
      } else {
        navigate('/account');
      }
    } else {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${currentUserType.bgPattern} pt-24 pb-12 transition-all duration-1000 ease-in-out`}>
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-32 left-10 w-40 h-40 bg-gradient-to-r ${currentUserType.gradient} rounded-full blur-3xl opacity-20 animate-pulse`}></div>
        <div className={`absolute bottom-20 right-10 w-56 h-56 bg-gradient-to-r ${currentUserType.gradient} rounded-full blur-3xl opacity-15 animate-pulse`} style={{ animationDelay: '1.5s' }}></div>
        <div className={`absolute top-1/2 left-1/4 w-28 h-28 bg-gradient-to-r ${currentUserType.gradient} rounded-full blur-3xl opacity-10 animate-pulse`} style={{ animationDelay: '3s' }}></div>
        <div className={`absolute top-1/3 right-1/3 w-36 h-36 bg-gradient-to-r ${currentUserType.gradient} rounded-full blur-3xl opacity-12 animate-pulse`} style={{ animationDelay: '4.5s' }}></div>
        
        {/* Enhanced Floating Icons */}
        <div className="absolute top-1/4 right-1/4 animate-float">
          <Star className="w-8 h-8 text-yellow-300 opacity-40" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float-delay">
          <Sparkles className="w-6 h-6 text-purple-300 opacity-50" />
        </div>
        <div className="absolute top-2/3 right-1/3 animate-float" style={{ animationDelay: '1s' }}>
          <Heart className="w-7 h-7 text-pink-300 opacity-35" />
        </div>
        <div className="absolute top-1/6 left-1/2 animate-float-delay" style={{ animationDelay: '2.5s' }}>
          <currentUserType.icon className="w-6 h-6 text-gray-300 opacity-30" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 lg:p-10 border border-white/30 animate-fade-in">
            {/* Enhanced Logo Section */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <div className="relative group">
                  <img 
                    src="/navbar logo2.png" 
                    alt="CareSakhi Logo" 
                    className="h-24 lg:h-28 w-auto object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute -inset-4 bg-gradient-to-r ${currentUserType.gradient} rounded-full blur-xl opacity-20 animate-pulse group-hover:opacity-30 transition-opacity duration-500`}></div>
                  
                  {/* Floating Badge */}
                  <div className={`absolute -top-2 -right-2 bg-gradient-to-r ${currentUserType.gradient} text-white p-2 rounded-full shadow-lg animate-bounce-subtle`}>
                    <BadgeIcon className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-800 mb-3 animate-slide-up">Join CareSakhi</h1>
              <p className="text-gray-600 text-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>Create your {currentUserType.name.toLowerCase()} account</p>
            </div>

            {/* Enhanced User Type Selector */}
            <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Choose Your Account Type
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {userTypes.map(type => {
                  const IconComponent = type.icon;
                  const TypeBadgeIcon = type.badgeIcon;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setFormData({...formData, userType: type.id})}
                      className={`relative p-6 rounded-2xl text-center transition-all duration-500 transform hover:scale-105 border-2 ${
                        formData.userType === type.id
                          ? `bg-gradient-to-br ${type.bgPattern} border-transparent shadow-2xl scale-105 ring-4 ring-opacity-30`
                          : 'bg-white/80 border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-xl'
                      }`}
                      style={{
                        ringColor: formData.userType === type.id ? `rgb(${type.id === 'customer' ? '236, 72, 153' : type.id === 'distributer' ? '34, 197, 94' : '147, 51, 234'})` : 'transparent'
                      }}
                    >
                      {/* Selection Indicator */}
                      {formData.userType === type.id && (
                        <div className={`absolute -top-3 -right-3 bg-gradient-to-r ${type.gradient} text-white p-2 rounded-full shadow-lg animate-bounce-subtle`}>
                          <CheckCircle className="w-5 h-5" />
                        </div>
                      )}
                      
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 transition-all duration-300 ${
                        formData.userType === type.id
                          ? `bg-gradient-to-r ${type.gradient} text-white shadow-lg`
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      
                      <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                        formData.userType === type.id ? 'text-gray-800' : 'text-gray-600'
                      }`}>
                        {type.name}
                      </h3>
                      
                      <p className={`text-sm mb-3 transition-colors duration-300 ${
                        formData.userType === type.id ? 'text-gray-700' : 'text-gray-500'
                      }`}>
                        {type.description}
                      </p>
                      
                      {/* Badge */}
                      <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                        formData.userType === type.id
                          ? `bg-gradient-to-r ${type.gradient} text-white`
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        <TypeBadgeIcon className="w-3 h-3" />
                        <span>{type.badgeText}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Enhanced Dynamic Welcome Message */}
            <div className={`mb-8 p-6 rounded-2xl bg-gradient-to-r ${currentUserType.bgPattern} border-2 border-white/50 transform transition-all duration-700 animate-scale-in shadow-lg`} style={{ animationDelay: '0.4s' }}>
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-2xl bg-gradient-to-r ${currentUserType.gradient} shadow-xl animate-glow`}>
                  <currentUserType.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-3 text-lg">{currentUserType.welcomeMessage}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {currentUserType.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2 animate-slide-up" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Error Message with Animation */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl animate-fade-in shadow-lg">
                <p className="text-red-600 text-sm font-medium">{error}</p>
              </div>
            )}

            {/* Enhanced Register Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative group animate-slide-up" style={{ animationDelay: '0.6s' }}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 group-hover:border-pink-300 bg-white/90 backdrop-blur-sm"
                  placeholder="Enter your full name"
                />
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${currentUserType.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              </div>

              <div className="relative group animate-slide-up" style={{ animationDelay: '0.7s' }}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 group-hover:border-pink-300 bg-white/90 backdrop-blur-sm"
                  placeholder="Enter your email"
                />
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${currentUserType.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative group animate-slide-up" style={{ animationDelay: '0.8s' }}>
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
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent pr-12 transition-all duration-300 group-hover:border-pink-300 bg-white/90 backdrop-blur-sm"
                      placeholder="Create a password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors p-1 rounded-lg hover:bg-gray-100"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${currentUserType.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
                </div>

                <div className="relative group animate-slide-up" style={{ animationDelay: '0.9s' }}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent pr-12 transition-all duration-300 group-hover:border-pink-300 bg-white/90 backdrop-blur-sm"
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors p-1 rounded-lg hover:bg-gray-100"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${currentUserType.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
                </div>
              </div>

              {/* Enhanced Terms Agreement */}
              <div className="flex items-start animate-slide-up" style={{ animationDelay: '1s' }}>
                <input
                  type="checkbox"
                  required
                  className={`w-5 h-5 text-${currentUserType.id === 'customer' ? 'pink' : currentUserType.id === 'distributer' ? 'green' : 'purple'}-600 border-gray-300 rounded focus:ring-${currentUserType.id === 'customer' ? 'pink' : currentUserType.id === 'distributer' ? 'green' : 'purple'}-500 mt-1 transition-colors`}
                />
                <label className="ml-3 text-sm text-gray-600 leading-relaxed">
                  I agree to the{' '}
                  <Link to="/terms-of-service" className={`text-${currentUserType.id === 'customer' ? 'pink' : currentUserType.id === 'distributer' ? 'green' : 'purple'}-600 hover:underline transition-colors font-medium`}>
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy-policy" className={`text-${currentUserType.id === 'customer' ? 'pink' : currentUserType.id === 'distributer' ? 'green' : 'purple'}-600 hover:underline transition-colors font-medium`}>
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {/* Enhanced Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-gradient-to-r ${currentUserType.gradient} text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 hover:shadow-2xl animate-slide-up shadow-lg`}
                style={{ animationDelay: '1.1s' }}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Creating your account...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <currentUserType.icon className="w-5 h-5" />
                    <span>Create {currentUserType.name} Account</span>
                  </div>
                )}
              </button>
            </form>

            {/* Enhanced Divider */}
            <div className="my-8 flex items-center animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-6 text-sm text-gray-500 bg-white rounded-full py-2 shadow-sm">or continue with</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Enhanced Social Login */}
            <div className="space-y-4 animate-slide-up" style={{ animationDelay: '1.3s' }}>
              <button className="w-full flex items-center justify-center space-x-3 py-4 px-6 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:shadow-lg transform hover:scale-105 bg-white/90 backdrop-blur-sm">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white text-sm flex items-center justify-center font-bold shadow-md">
                  G
                </div>
                <span className="text-gray-700 font-medium">Continue with Google</span>
              </button>
              
              <button className="w-full flex items-center justify-center space-x-3 py-4 px-6 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:shadow-lg transform hover:scale-105 bg-white/90 backdrop-blur-sm">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-700 to-blue-800 rounded-lg text-white text-sm flex items-center justify-center font-bold shadow-md">
                  f
                </div>
                <span className="text-gray-700 font-medium">Continue with Facebook</span>
              </button>
            </div>

            {/* Enhanced Sign In Link */}
            <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: '1.4s' }}>
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className={`bg-gradient-to-r ${currentUserType.gradient} bg-clip-text text-transparent font-bold hover:underline transition-all duration-300 text-lg`}
                >
                  Sign in
                </Link>
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-gray-200 animate-fade-in" style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>Secure & Encrypted</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span>GDPR Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-4 h-4 text-pink-600" />
                  <span>Trusted by 50K+ Users</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Floating Elements */}
          <div className="absolute top-1/4 left-1/4 animate-float opacity-30">
            <div className={`w-20 h-20 bg-gradient-to-r ${currentUserType.gradient} rounded-full blur-xl`}></div>
          </div>
          <div className="absolute bottom-1/3 right-1/3 animate-float-delay opacity-20">
            <div className={`w-16 h-16 bg-gradient-to-r ${currentUserType.gradient} rounded-full blur-xl`}></div>
          </div>
          <div className="absolute top-1/6 right-1/6 animate-float opacity-25" style={{ animationDelay: '2s' }}>
            <div className={`w-12 h-12 bg-gradient-to-r ${currentUserType.gradient} rounded-full blur-xl`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;