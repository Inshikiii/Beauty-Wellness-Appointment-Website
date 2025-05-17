import React, { useState } from 'react';
import { Clock, DollarSign, ChevronRight } from 'lucide-react';
import { services } from '../data/services';
import { Service, ServiceCategory } from '../types';

export const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'All'>('All');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showModal, setShowModal] = useState(false);

  const filterCategories = ['All', ...Object.values(ServiceCategory)];
  
  const filteredServices = activeCategory === 'All' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="mb-4">Our Premium Services</h2>
          <p className="max-w-3xl mx-auto text-lg">
            Indulge in our carefully crafted services designed to enhance your natural beauty and promote wellness. Each service is performed by our highly skilled professionals using premium products.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as ServiceCategory | 'All')}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gold text-white shadow-md'
                  : 'bg-white border border-neutral-200 hover:border-gold'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div 
              key={service.id} 
              className="service-card cursor-pointer"
              onClick={() => handleServiceClick(service)}
            >
              <div className="h-60 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-neutral-600 mb-4">{service.shortDescription}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-gold">
                    <DollarSign size={16} className="mr-1" />
                    <span className="font-semibold">${service.price}</span>
                  </div>
                  <div className="flex items-center text-neutral-500">
                    <Clock size={16} className="mr-1" />
                    <span>{service.duration} min</span>
                  </div>
                </div>
                <button
                  className="mt-4 w-full btn btn-outline text-center flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleServiceClick(service);
                  }}
                >
                  View Details
                  <ChevronRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {showModal && selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slide-up">
            <div className="relative">
              <img 
                src={selectedService.image} 
                alt={selectedService.name} 
                className="w-full h-64 object-cover rounded-t-2xl" 
              />
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gold hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-8">
              <span className="inline-block bg-lavender text-dark px-3 py-1 rounded-full text-sm font-medium mb-4">
                {selectedService.category}
              </span>
              <h3 className="text-2xl font-bold mb-2">{selectedService.name}</h3>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center text-gold">
                  <DollarSign size={18} className="mr-1" />
                  <span className="font-semibold text-lg">${selectedService.price}</span>
                </div>
                <div className="flex items-center text-neutral-600">
                  <Clock size={18} className="mr-1" />
                  <span>{selectedService.duration} minutes</span>
                </div>
              </div>
              <p className="text-neutral-700 mb-8">{selectedService.description}</p>
              <div className="flex flex-wrap gap-4">
                <a href="#booking" className="btn btn-primary" onClick={() => setShowModal(false)}>
                  Book This Service
                </a>
                <button 
                  className="btn btn-outline"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// X icon component for modal close button
const X: React.FC<{ size: number }> = ({ size }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);