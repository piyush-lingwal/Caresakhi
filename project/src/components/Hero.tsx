import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Sparkles, Leaf, Shield, Award } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const heroContent = [
    {
      title: "Your Trusted Period Companion",
      subtitle: "Sustainable • Comfortable • Empowering",
      description: "Join thousands of women who trust CareSakhi for their menstrual health. Better for you, better for the planet.",
      cta: "Shop Now",
      ctaSecondary: "Track Period",
      stats: { users: "50,000+", satisfaction: "98%", products: "15+" }
    },
    {
      title: "Premium Quality Protection",
      subtitle: "Medical Grade • Long Lasting",
      description: "Our medical-grade silicone cups and innovative period underwear provide superior comfort and reliability.",
      cta: "Explore Products",
      ctaSecondary: "Learn More",
      stats: { protection: "12 Hours", comfort: "99%", quality: "Medical Grade" }
    },
    {
      title: "Revolutionizing Women's Health",
      subtitle: "Innovation • Science • Care",
      description: "Advanced technology meets traditional care. Experience the future of menstrual health with our award-winning products.",
      cta: "Get Started",
      ctaSecondary: "Watch Demo",
      stats: { awards: "15+", research: "5 Years", innovation: "Cutting Edge" }
    }
  ];

  const testimonialCards = [
    { name: "Sarah J.", text: "Life-changing!", rating: 5, avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50" },
    { name: "Emma R.", text: "Best decision ever", rating: 5, avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50" },
    { name: "Lisa C.", text: "Incredible comfort", rating: 5, avatar: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=50&h=50" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroContent.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentContent = heroContent[currentSlide];

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden overflow-x-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-64 h-64 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full blur-3xl animate-pulse top-20 left-10"></div>
        <div className="absolute w-48 h-48 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full blur-3xl animate-pulse bottom-20 right-10" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-10 lg:py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[60vh] lg:min-h-[50vh]">
            
            {/* Content Section */}
            <div className="text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1">
              {/* Badge */}
              <div className={`inline-flex items-center space-x-2 lg:space-x-3 bg-white/90 backdrop-blur-lg text-pink-800 px-4 lg:px-6 py-2 lg:py-3 rounded-full text-xs lg:text-sm font-semibold shadow-lg border border-pink-200 transition-all duration-1000 relative z-20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {testimonialCards.map((testimonial, i) => (
                      <img
                        key={i}
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-5 h-5 lg:w-6 lg:h-6 rounded-full border-2 border-white shadow-md"
                      />
                    ))}
                  </div>
                  <Sparkles className="w-4 h-4 lg:w-5 lg:h-5 text-pink-600 animate-pulse" />
                </div>
                <span className="whitespace-nowrap">Trusted by 50,000+ Women</span>
              </div>
              
              {/* Title & Text */}
              <div className="space-y-3 lg:space-y-4">
                <h1 className={`text-[clamp(1.8rem,5vw,3.5rem)] font-bold leading-tight transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
                  <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent bg-300% animate-gradient">
                    {currentContent.title}
                  </span>
                </h1>
                
                <p className={`text-base sm:text-lg lg:text-xl font-semibold text-gray-700 transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
                  {currentContent.subtitle}
                </p>
                
                <p className={`text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                  {currentContent.description}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start transition-all duration-1000 delay-700 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
                <Link
                  to="/products"
                  className="group relative bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-300% animate-gradient text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full font-bold text-base lg:text-lg transition-all duration-500 hover:shadow-xl hover:scale-105 transform inline-flex items-center justify-center overflow-hidden"
                >
                  <span className="relative flex items-center justify-center space-x-2">
                    <span>{currentContent.cta}</span>
                    <ChevronDown className="w-4 h-4 lg:w-5 lg:h-5 rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
                
                <Link
                  to="/period-tracker"
                  className="group border-2 border-gray-300 text-gray-700 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full font-bold text-base lg:text-lg hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-500 hover:shadow-lg hover:scale-105 inline-flex items-center justify-center"
                >
                  <span>{currentContent.ctaSecondary}</span>
                </Link>
              </div>

              {/* Stats */}
              <div className={`flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6 pt-4 lg:pt-6 transition-all duration-1000 delay-900 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                {Object.entries(currentContent.stats).map(([key, value]) => (
                  <div key={key} className="text-center group hover:scale-110 transition-transform duration-300">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-pink-600 mb-1 group-hover:text-purple-600 transition-colors">
                      {value}
                    </div>
                    <div className="text-gray-600 font-medium capitalize text-xs sm:text-sm">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className={`flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-6 pt-4 lg:pt-6 transition-all duration-1000 delay-1100 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
                {[
                  { icon: Leaf, text: 'Eco-Friendly', color: 'text-green-500' },
                  { icon: Shield, text: 'Medical Grade', color: 'text-blue-500' },
                  { icon: Sparkles, text: '12hr Protection', color: 'text-purple-500' },
                  { icon: Award, text: 'Award Winning', color: 'text-orange-500' }
                ].map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="flex items-center space-x-1 lg:space-x-2 text-gray-600 group hover:scale-110 transition-all duration-300">
                      <div className="p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md group-hover:shadow-lg transition-shadow">
                        <IconComponent className={`w-4 h-4 lg:w-5 lg:h-5 ${benefit.color} group-hover:scale-125 transition-transform duration-300`} />
                      </div>
                      <span className="font-semibold group-hover:text-gray-800 transition-colors text-xs sm:text-sm lg:text-base">{benefit.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Image Section */}
            <div className="relative order-1 lg:order-2">
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-700 mx-auto max-w-md lg:max-w-none">
                <div className="bg-gradient-to-br from-pink-100 via-white to-purple-100 rounded-3xl p-4 lg:p-8 shadow-2xl backdrop-blur-lg border border-white/50 relative overflow-hidden">
                  <div className="relative z-10 group">
                    <img 
                      src="https://images.pexels.com/photos/7319070/pexels-photo-7319070.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Sustainable menstrual products"
                      className="w-full h-auto max-h-[420px] object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6 text-white">
                        <h3 className="text-lg lg:text-xl font-bold mb-1">Premium Collection</h3>
                        <p className="text-xs lg:text-sm opacity-90">Medical-grade silicone products</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mt-8 lg:mt-12">
          {heroContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-500 hover:scale-125 ${
                index === currentSlide
                  ? 'w-6 lg:w-8 h-2 lg:h-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full shadow-lg'
                  : 'w-2 lg:w-3 h-2 lg:h-3 bg-gray-300 rounded-full hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })} 
        className="absolute bottom-4 lg:bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce group cursor-pointer"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
          <ChevronDown className="w-6 h-6 text-gray-600 group-hover:text-pink-600 transition-colors" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
