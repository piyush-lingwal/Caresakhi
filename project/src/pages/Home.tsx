import React from 'react';
import Hero from '../components/Hero';
import CareSakhiKits from '../components/CareSakhiKits';
import ProductShowcase from '../components/ProductShowcase';
import Education from '../components/Education';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <ProductShowcase />
      <Education />
      <CareSakhiKits />
      <Testimonials />
    </div>
  );
};

export default Home;