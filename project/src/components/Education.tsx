import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, DollarSign, Clock, Users, ChevronRight, Play } from 'lucide-react';

const Education = () => {
  const [activeTab, setActiveTab] = useState(0);

  const benefits = [
    {
      icon: Leaf,
      title: 'Environmental Impact',
      stat: '11 billion',
      description: 'disposable products are thrown away annually',
      details: 'One menstrual cup can replace up to 2,400 tampons and pads over its lifetime, significantly reducing environmental waste.'
    },
    {
      icon: DollarSign,
      title: 'Cost Savings',
      stat: '$2,000+',
      description: 'saved over 10 years with reusable products',
      details: 'While the initial investment is higher, reusable products pay for themselves within the first year of use.'
    },
    {
      icon: Clock,
      title: 'Convenience',
      stat: '12 hours',
      description: 'of continuous protection with cups',
      details: 'Enjoy longer-lasting protection without frequent changes, perfect for busy lifestyles and overnight use.'
    },
    {
      icon: Users,
      title: 'Health Benefits',
      stat: '99.9%',
      description: 'of users report increased comfort',
      details: 'Made from medical-grade materials, our products are safer and more comfortable than traditional options.'
    }
  ];

  const educationalContent = [
    {
      title: 'How Menstrual Cups Work',
      duration: '3 min read',
      preview: 'Learn about the science behind menstrual cups and why they\'re revolutionizing period care.',
      image: 'https://images.pexels.com/photos/7319070/pexels-photo-7319070.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Sizing Guide',
      duration: '2 min read',
      preview: 'Find your perfect fit with our comprehensive sizing guide and recommendations.',
      image: 'https://images.pexels.com/photos/7262708/pexels-photo-7262708.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Care & Maintenance',
      duration: '4 min read',
      preview: 'Simple steps to keep your reusable products clean, safe, and long-lasting.',
      image: 'https://images.pexels.com/photos/7319069/pexels-photo-7319069.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="education" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-600 to-orange-600 bg-clip-text text-transparent">
              Why Choose Reusable?
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the science-backed benefits of making the switch to sustainable menstrual products.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                onMouseEnter={() => setActiveTab(index)}
              >
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-emerald-600" />
                  </div>
                  
                  <div>
                    <div className="text-3xl font-bold text-emerald-600 mb-2">
                      {benefit.stat}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Educational Resources */}
        <div>
          <h3 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-emerald-600 to-orange-600 bg-clip-text text-transparent">
              Educational Resources
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {educationalContent.map((content, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={content.image}
                    alt={content.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {content.duration}
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors">
                    {content.title}
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                    {content.preview}
                  </p>
                  <Link
                    to={
                      content.title === 'How Menstrual Cups Work' ? '/education/cup-guide' :
                      content.title === 'Sizing Guide' ? '/education/sizing' :
                      '/education/care'
                    }
                    className="flex items-center space-x-2 text-emerald-600 font-semibold hover:space-x-3 transition-all"
                  >
                    <span>Read More</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
