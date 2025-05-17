import React from 'react';
import { Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div>
            <a href="#" className="flex items-center text-2xl font-heading font-bold mb-4">
              <Sparkles size={24} className="text-gold mr-2" />
              <span>Serenity</span>
            </a>
            <p className="text-neutral-400 mb-6">
              Experience the perfect blend of beauty treatments and wellness therapies in our luxurious sanctuary.
            </p>
            <div className="flex space-x-4">
              {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-neutral-400 hover:text-gold transition-colors"
                  aria-label={social}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'About', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-neutral-400 hover:text-gold transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {['Haircuts & Styling', 'Color Treatments', 'Nail Services', 'Massage Therapy', 'Facial Treatments', 'Body Treatments'].map((service) => (
                <li key={service}>
                  <a 
                    href="#services"
                    className="text-neutral-400 hover:text-gold transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-neutral-400 mb-4">
              Subscribe to our newsletter for exclusive offers and beauty tips.
            </p>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button
                type="submit"
                className="bg-gold text-white px-4 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-neutral-800 text-center text-neutral-500 text-sm">
          <p>© {new Date().getFullYear()} Serenity Beauty & Wellness. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-6">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};