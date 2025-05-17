import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryItems } from '../data/gallery';
import { ServiceCategory } from '../types';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'All'>('All');
  const [showComparison, setShowComparison] = useState<string | null>(null);
  const [comparisonPosition, setComparisonPosition] = useState(50);

  const filterCategories = ['All', ...Object.values(ServiceCategory)];
  
  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const handleComparisonMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!showComparison) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    
    setComparisonPosition(x);
  };

  return (
    <section id="gallery" className="section bg-light">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="mb-4">Before & After Gallery</h2>
          <p className="max-w-3xl mx-auto text-lg">
            Witness the transformative power of our services through our before and after gallery. These results showcase the skill and artistry of our talented team.
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="card overflow-hidden cursor-pointer group relative"
              onClick={() => setShowComparison(item.id === showComparison ? null : item.id)}
            >
              {showComparison === item.id ? (
                <div 
                  className="relative h-96 overflow-hidden"
                  onMouseMove={handleComparisonMouseMove}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Before Image (Full width) */}
                  <img 
                    src={item.before} 
                    alt="Before" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* After Image (Partial width based on slider) */}
                  <div 
                    className="absolute inset-0 overflow-hidden" 
                    style={{ width: `${comparisonPosition}%` }}
                  >
                    <img 
                      src={item.after} 
                      alt="After" 
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ width: `${100 / (comparisonPosition / 100)}%` }}
                    />
                  </div>
                  
                  {/* Slider Line */}
                  <div 
                    className="absolute inset-y-0 bg-white w-1"
                    style={{ left: `${comparisonPosition}%` }}
                  ></div>
                  
                  {/* Slider Handle */}
                  <div 
                    className="absolute top-1/2 -translate-y-1/2 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md z-10"
                    style={{ left: `${comparisonPosition}%`, transform: 'translate(-50%, -50%)' }}
                  >
                    <div className="flex">
                      <ChevronLeft size={16} className="text-gold" />
                      <ChevronRight size={16} className="text-gold" />
                    </div>
                  </div>
                  
                  {/* Before Label */}
                  <div className="absolute top-4 left-4 bg-dark bg-opacity-70 text-white px-3 py-1 rounded-md text-sm">
                    Before
                  </div>
                  
                  {/* After Label */}
                  <div className="absolute top-4 right-4 bg-gold text-white px-3 py-1 rounded-md text-sm">
                    After
                  </div>
                </div>
              ) : (
                <>
                  <div className="h-96 overflow-hidden">
                    <img 
                      src={item.after} 
                      alt={item.description} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  <div className="absolute inset-0 bg-dark bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center px-6">
                      <p className="text-xl font-semibold mb-2">{item.category}</p>
                      <p>{item.description}</p>
                      <button className="mt-4 bg-gold text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors">
                        View Comparison
                      </button>
                    </div>
                  </div>
                </>
              )}
              
              <div className="p-6">
                <h3 className="text-xl mb-2">{item.category}</h3>
                <p className="text-neutral-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};