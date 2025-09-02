import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { ChevronDown, Sparkles, Leaf, Shield, Star, Heart, Award, Users, TrendingUp, ShoppingCart } from 'lucide-react';

// Simple Link component (replace with your router implementation in production)
const Link = ({ to, children, className, ...props }) => (
  <a href={to} className={className} {...props}>{children}</a>
);

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  const heroContent = useMemo(() => [
    {
      title: "Your Trusted Period Companion",
      subtitle: "Sustainable • Comfortable • Empowering",
      description: "Join thousands of women who trust CareSakhi for their menstrual health. Better for you, better for the planet.",
      cta: "Shop Now",
      ctaSecondary: "Track Period",
      stats: { users: "50,000+", satisfaction: "98%", products: "15+" },
      theme: "from-pink-600 via-purple-600 to-pink-600"
    },
    {
      title: "Premium Quality Protection",
      subtitle: "Medical Grade • Long Lasting",
      description: "Our medical-grade silicone cups and innovative period underwear provide superior comfort and reliability.",
      cta: "Explore Products",
      ctaSecondary: "Learn More",
      stats: { protection: "12 Hours", comfort: "99%", quality: "Medical Grade" },
      theme: "from-purple-600 via-blue-600 to-purple-600"
    },
    {
      title: "Revolutionizing Women's Health",
      subtitle: "Innovation • Science • Care",
      description: "Advanced technology meets traditional care. Experience the future of menstrual health with our award-winning products.",
      cta: "Get Started",
      ctaSecondary: "Watch Demo",
      stats: { awards: "15+", research: "5 Years", innovation: "Cutting Edge" },
      theme: "from-blue-600 via-teal-600 to-blue-600"
    }
  ], []);

  const testimonialCards = useMemo(() => [
    { name: "Sarah J.", text: "Life-changing!", rating: 5, avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Emma R.", text: "Best decision ever", rating: 5, avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Lisa C.", text: "Incredible comfort", rating: 5, avatar: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100" }
  ], []);

  const keyBenefits = useMemo(() => [
    { icon: Leaf, text: 'Eco-Friendly', color: 'text-green-500' },
    { icon: Shield, text: 'Medical Grade', color: 'text-blue-500' },
    { icon: Sparkles, text: '12hr Protection', color: 'text-purple-500' },
    { icon: Award, text: 'Award Winning', color: 'text-orange-500' }
  ], []);

  const nextSlide = useCallback(() => {
    if (!isPaused) {
      setCurrentSlide((prev) => (prev + 1) % heroContent.length);
    }
  }, [heroContent.length, isPaused]);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const currentContent = heroContent[currentSlide];

  return (
    <section 
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero section with product information"
    >
      {/* Enhanced Background with Performance */}
      <div className="absolute inset-0 opacity-10" role="presentation">
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full blur-3xl animate-pulse top-20 left-10"
          style={{ willChange: 'transform' }}
        ></div>
        <div 
          className="absolute w-48 h-48 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full blur-3xl animate-pulse bottom-20 right-10" 
          style={{ animationDelay: '2s', willChange: 'transform' }}
        ></div>
        <div 
          className="absolute w-32 h-32 bg-gradient-to-r from-blue-300 to-pink-300 rounded-full blur-2xl animate-pulse top-1/2 right-1/4" 
          style={{ animationDelay: '4s', willChange: 'transform' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-8 lg:py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center min-h-[60vh] lg:min-h-[50vh]">
            {/* Content Section - Centered */}
            <div className="text-center space-y-6 lg:space-y-8 max-w-4xl">
              {/* Enhanced Trust Badge */}
              <div className={`inline-flex items-center space-x-2 lg:space-x-3 bg-white/95 backdrop-blur-xl text-pink-800 px-4 lg:px-6 py-2 lg:py-3 rounded-full text-xs lg:text-sm font-semibold shadow-xl border border-pink-200/50 transition-all duration-1000 hover:scale-105 hover:shadow-2xl relative z-20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {testimonialCards.map((testimonial, i) => (
                      <img
                        key={i}
                        src={testimonial.avatar}
                        alt={`${testimonial.name} testimonial`}
                        className="w-5 h-5 lg:w-6 lg:h-6 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    ))}
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Sparkles className="w-4 h-4 lg:w-5 lg:h-5 text-pink-600 animate-pulse" />
                </div>
                <span className="whitespace-nowrap">Trusted by 50,000+ Women</span>
              </div>
              
              {/* Dynamic Title with Theme Colors */}
              <div className="space-y-3 lg:space-y-4">
                <h1 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
                  <span className={`bg-gradient-to-r ${currentContent.theme} bg-clip-text text-transparent bg-300% animate-gradient`}>
                    {currentContent.title}
                  </span>
                </h1>
                
                <p className={`text-base sm:text-lg lg:text-xl font-semibold text-gray-700 transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
                  {currentContent.subtitle}
                </p>
                
                <p className={`text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                  {currentContent.description}
                </p>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center transition-all duration-1000 delay-700 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
                <Link
                  to="/products"
                  className={`group relative bg-gradient-to-r ${currentContent.theme} bg-300% animate-gradient text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-bold text-base lg:text-lg transition-all duration-500 hover:shadow-xl hover:scale-105 transform inline-flex items-center justify-center overflow-hidden focus:outline-none focus:ring-4 focus:ring-pink-300/50`}
                  aria-label={`${currentContent.cta} - Browse our products`}
                >
                  <span className="relative flex items-center justify-center space-x-2">
                    <span>{currentContent.cta}</span>
                    <ChevronDown className="w-4 h-4 lg:w-5 lg:h-5 rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
                </Link>
                
                <Link
                  to="/period-tracker"
                  className="group border-2 border-gray-300 text-gray-700 px-6 lg:px-8 py-3 lg:py-4 rounded-full font-bold text-base lg:text-lg hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-500 hover:shadow-lg hover:scale-105 inline-flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-emerald-300/50"
                  aria-label={`${currentContent.ctaSecondary} - Track your menstrual cycle`}
                >
                  <span>{currentContent.ctaSecondary}</span>
                </Link>
              </div>

              {/* Dynamic Stats with Enhanced Animation */}
              <div className={`flex flex-wrap justify-center gap-6 lg:gap-8 pt-4 lg:pt-6 transition-all duration-1000 delay-900 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                {Object.entries(currentContent.stats).map(([key, value], index) => (
                  <div 
                    key={key} 
                    className="text-center group hover:scale-110 transition-all duration-300 cursor-default"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r ${currentContent.theme} bg-clip-text text-transparent mb-1 transition-all duration-300`}>
                      {value}
                    </div>
                    <div className="text-gray-600 font-medium capitalize text-sm sm:text-base group-hover:text-gray-800 transition-colors">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Key Benefits */}
              <div className={`flex flex-wrap justify-center gap-4 lg:gap-6 pt-6 lg:pt-8 transition-all duration-1000 delay-1100 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
                {keyBenefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div 
                      key={index} 
                      className="flex items-center space-x-2 lg:space-x-3 text-gray-600 group hover:scale-110 transition-all duration-300 cursor-default"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="p-2 lg:p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:rotate-12">
                        <IconComponent className={`w-5 h-5 lg:w-6 lg:h-6 ${benefit.color} group-hover:scale-125 transition-transform duration-300`} />
                      </div>
                      <span className="font-semibold group-hover:text-gray-800 transition-colors text-sm sm:text-base lg:text-lg">{benefit.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Slide Indicators */}
        <div className="flex justify-center space-x-3 mt-8 lg:mt-12">
          {heroContent.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-500 hover:scale-125 focus:outline-none focus:scale-125 ${
                index === currentSlide
                  ? `w-6 lg:w-8 h-2 lg:h-3 bg-gradient-to-r ${currentContent.theme} rounded-full shadow-lg`
                  : 'w-2 lg:w-3 h-2 lg:h-3 bg-gray-300 rounded-full hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

     
    </section>
  );
};

export default Hero;
