import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-sm py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center text-2xl font-heading font-bold">
          <Sparkles size={24} className="text-gold mr-2" />
          <span className={isScrolled ? 'text-dark' : 'text-white'}>Serenity</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'Services', 'About', 'Gallery', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className={`font-medium transition-colors duration-300 ${
                isScrolled ? 'text-dark hover:text-gold' : 'text-white hover:text-gold'
              }`}
            >
              {item}
            </a>
          ))}
          <a 
            href="#booking" 
            className="btn btn-primary"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-md py-4 animate-fade-in">
          <nav className="container flex flex-col space-y-4">
            {['Home', 'Services', 'About', 'Gallery', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="font-medium text-dark hover:text-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="#booking" 
              className="btn btn-primary w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};