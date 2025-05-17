import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

export const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-gold" />,
      title: 'Location',
      details: '123 Serenity Avenue, Wellness District, New York, NY 10001'
    },
    {
      icon: <Phone className="w-6 h-6 text-gold" />,
      title: 'Phone',
      details: '+1 (555) 123-4567'
    },
    {
      icon: <Mail className="w-6 h-6 text-gold" />,
      title: 'Email',
      details: 'info@serenityspa.com'
    },
    {
      icon: <Clock className="w-6 h-6 text-gold" />,
      title: 'Hours',
      details: 'Mon-Sat: 9AM-7PM, Sun: 10AM-5PM'
    }
  ];

  const socialLinks = [
    { icon: <Instagram size={22} />, name: 'Instagram', url: 'https://instagram.com' },
    { icon: <Facebook size={22} />, name: 'Facebook', url: 'https://facebook.com' },
    { icon: <Twitter size={22} />, name: 'Twitter', url: 'https://twitter.com' }
  ];

  return (
    <section id="contact" className="section bg-cream">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="mb-4">Contact Us</h2>
          <p className="max-w-3xl mx-auto text-lg">
            Have questions or ready to book? Get in touch with us using the information below, or visit our beautiful location in person.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="card p-8 h-full animate-fade-in">
            <h3 className="text-2xl font-semibold mb-8">Get In Touch</h3>
            
            <div className="space-y-8 mb-10">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-neutral-600">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-lavender hover:bg-gold hover:text-white p-3 rounded-full transition-colors"
                    aria-label={`Follow us on ${link.name}`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="card overflow-hidden h-[500px] animate-fade-in">
            <div className="h-full relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12087.451096060843!2d-73.98372235463117!3d40.75849864959563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258e4a1c884e5%3A0x24fe1071086b36d5!2sThe%20City%20of%20New%20York!5e0!3m2!1sen!2sus!4v1695345614428!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Serenity Spa Location"
              ></iframe>
              
              {/* Map Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-white p-4 shadow-md">
                <h4 className="font-semibold">Serenity Beauty & Wellness</h4>
                <p className="text-neutral-600 text-sm">123 Serenity Avenue, New York, NY 10001</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};