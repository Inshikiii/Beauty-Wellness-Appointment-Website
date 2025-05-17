import React from 'react';
import { Sparkles, Heart, Smile } from 'lucide-react';

export const About: React.FC = () => {
  const values = [
    {
      icon: <Sparkles className="w-10 h-10 text-gold" />,
      title: 'Excellence',
      description: 'We consistently strive for excellence in every service we provide, using premium products and advanced techniques.'
    },
    {
      icon: <Heart className="w-10 h-10 text-gold" />,
      title: 'Care',
      description: 'We approach each client with genuine care, ensuring personalized attention and a nurturing environment.'
    },
    {
      icon: <Smile className="w-10 h-10 text-gold" />,
      title: 'Satisfaction',
      description: 'Your complete satisfaction is our ultimate goal. We ensure each visit exceeds your expectations.'
    }
  ];

  return (
    <section id="about" className="diagonal-box overflow-hidden">
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="mb-6">Our Commitment to Beauty & Wellness</h2>
            <p className="mb-6 text-lg">
              At Serenity, we believe that beauty and wellness are intertwined journeys of self-care. Founded in 2018, we've created a sanctuary where clients can escape the everyday and indulge in premium beauty and wellness experiences.
            </p>
            <p className="mb-8 text-lg">
              Our team of highly trained professionals is dedicated to enhancing your natural beauty and promoting overall wellbeing. We select only the finest products and continuously update our techniques to ensure exceptional results.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="btn btn-primary">
                Explore Services
              </a>
              <a href="#booking" className="btn btn-outline">
                Book Appointment
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-card h-[500px] animate-float">
              <img 
                src="https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our salon interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gold rounded-full opacity-20"></div>
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-cream rounded-full opacity-50"></div>
          </div>
        </div>
        
        {/* Our Values */}
        <div className="mt-24">
          <h3 className="text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-soft text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-6">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold mb-4">{value.title}</h4>
                <p className="text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};