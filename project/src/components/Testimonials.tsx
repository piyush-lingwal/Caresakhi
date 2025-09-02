import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      age: 28,
      location: 'San Francisco, CA',
      rating: 5,
      text: "I've been using the EcoFlow Cup for over a year now, and it's completely changed my life. No more worrying about running out of supplies or contributing to landfill waste. The comfort is incredible!",
      product: 'EcoFlow Cup',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      verified: true
    },
    {
      id: 2,
      name: 'Emma Rodriguez',
      age: 32,
      location: 'Austin, TX',
      rating: 5,
      text: "The ComfortMax Brief is a game-changer! I can finally sleep through the night without any anxiety. The fit is perfect and they're so comfortable I forget I'm even wearing them.",
      product: 'ComfortMax Brief',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      verified: true
    },
    {
      id: 3,
      name: 'Lisa Chen',
      age: 24,
      location: 'Seattle, WA',
      rating: 5,
      text: "As a college student, the cost savings have been incredible. I've already saved over $300 this year alone! Plus, knowing I'm helping the environment makes me feel great about my choice.",
      product: 'PureFlex Cup',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150',
      verified: true
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-emerald-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-600 to-orange-600 bg-clip-text text-transparent">
              What Our Community Says
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of women who've made the switch and transformed their period experience.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[320px] flex items-center">
             <div className="p-8 lg:p-12 w-full">
                <div className="text-center">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full object-cover shadow-lg mx-auto mb-4"
                  />
                  
                  <Quote className="w-8 h-8 text-emerald-200 mb-4 mx-auto" />
                  
                  <blockquote className="text-lg sm:text-xl text-gray-800 leading-relaxed mb-6 font-light">
                    "{testimonials[currentIndex].text}"
                  </blockquote>

                  <div className="flex items-center justify-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <div className="text-lg font-semibold text-gray-800">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-emerald-600 font-medium">
                    Verified purchase: {testimonials[currentIndex].product}
                  </div>
                </div>
              </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 sm:-left-6 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:scale-110 transition-transform"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 sm:-right-6 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:scale-110 transition-transform"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
