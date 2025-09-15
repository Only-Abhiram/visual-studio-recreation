import React from 'react';
import heroImage1 from '@/assets/hero-image-1.jpg';
import heroImage2 from '@/assets/hero-image-2.jpg';
import heroImage3 from '@/assets/hero-image-3.jpg';
import heroImage4 from '@/assets/hero-image-4.jpg';

const HeroSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="hero-grid">
          <div className="hero-grid-item">
            <img 
              src={heroImage1} 
              alt="Creative design inspiration" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hero-grid-item">
            <img 
              src={heroImage2} 
              alt="Artistic portrait photography" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hero-grid-item">
            <img 
              src={heroImage3} 
              alt="Surreal 3D artwork" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hero-grid-item">
            <img 
              src={heroImage4} 
              alt="Typography design" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h1 className="text-5xl font-bold text-foreground mb-6">
          Welcome to Playground
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Design anything with thousands of templates to create logos, t-shirts, posters, and more.
        </p>
        
        <button className="btn-primary text-lg px-8 py-4">
          Get started for free
        </button>
      </div>
    </section>
  );
};

export default HeroSection;