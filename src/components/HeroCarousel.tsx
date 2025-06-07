
import React, { useState, useEffect } from 'react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80",
      alt: "Luxury Sports Car"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&q=80",
      alt: "Premium Luxury Vehicle"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1920&q=80",
      alt: "High-End Sports Car"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1920&q=80",
      alt: "Exclusive Luxury Car"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105 animate-slow-zoom"
            style={{
              backgroundImage: `url("${slide.image}")`,
              animationDelay: `${index * 5}s`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
        </div>
      ))}
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-luxury-gold scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
