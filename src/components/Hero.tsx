import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height } = heroRef.current.getBoundingClientRect();
      
      const moveX = (clientX / width) * 15 - 7.5;
      const moveY = (clientY / height) * 15 - 7.5;
      
      heroRef.current.style.backgroundPosition = `calc(50% + ${moveX}px) calc(50% + ${moveY}px)`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center text-white overflow-hidden"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-dark bg-opacity-50 overlay-pattern"></div>
      
      {/* Content */}
      <div className="container relative z-10 text-center max-w-4xl">
        <h1 className="animate-fade-in">
          <span className="block font-light mb-2">Welcome to</span>
          Serenity Beauty & Wellness
        </h1>
        <p className="mt-4 mb-8 text-xl font-light max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Where luxury meets tranquility. Experience our premium services for hair, nails, massage, and skincare in a calming atmosphere.
        </p>
        <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a href="#booking" className="btn btn-primary">
            Book Appointment
          </a>
          <a href="#services" className="btn btn-outline">
            Explore Services
          </a>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <a
        href="#services"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};