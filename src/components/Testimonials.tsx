import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = testimonials.length - 1;
  const testimonialRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? maxIndex : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === maxIndex ? 0 : currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="section bg-gradient-gold text-white">
      <div className="container relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="mb-4">What Our Clients Say</h2>
          <p className="max-w-3xl mx-auto text-lg opacity-90">
            Discover why our clients keep coming back for more. Their testimonials speak to our commitment to excellence and personalized care.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white text-gold p-2 rounded-full shadow-md hover:bg-gold hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white text-gold p-2 rounded-full shadow-md hover:bg-gold hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Testimonial Carousel */}
          <div 
            ref={testimonialRef}
            className="overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white text-neutral-800 rounded-2xl shadow-card p-8 md:p-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                          <p className="text-neutral-500">{testimonial.service}</p>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={20} 
                            className={i < testimonial.rating ? "text-gold fill-gold" : "text-neutral-300"} 
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-lg italic">"{testimonial.comment}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-40 hover:bg-opacity-60'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};