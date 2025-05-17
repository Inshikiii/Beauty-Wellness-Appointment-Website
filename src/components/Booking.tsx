import React, { useState } from 'react';
import { Calendar, Clock, ChevronRight, Check } from 'lucide-react';
import { services } from '../data/services';
import { ServiceCategory, BookingFormData } from '../types';

export const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);
  const [selectedService, setSelectedService] = useState<string>('');
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    notes: ''
  });

  const filteredServices = selectedCategory 
    ? services.filter(service => service.category === selectedCategory)
    : [];

  const handleCategorySelect = (category: ServiceCategory) => {
    setSelectedCategory(category);
    setSelectedService('');
    setFormData(prev => ({ ...prev, service: '' }));
  };

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setFormData(prev => ({ ...prev, service: serviceId }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step === 1 && !selectedService) return;
    if (step === 2 && (!formData.date || !formData.time)) return;
    
    setStep(prev => prev + 1);
  };

  const handlePrev = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the booking data to a server
    console.log('Booking submitted:', formData);
    alert('Booking submitted successfully! We will contact you to confirm your appointment.');
    
    // Reset form
    setStep(1);
    setSelectedCategory(null);
    setSelectedService('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      service: '',
      notes: ''
    });
  };

  const selectedServiceDetails = services.find(service => service.id === selectedService);
  
  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  return (
    <section id="booking" className="section bg-light">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="mb-4">Book Your Appointment</h2>
          <p className="max-w-3xl mx-auto text-lg">
            Schedule your visit with us and indulge in our premium beauty and wellness services. Our simple booking process makes it easy to secure your preferred time slot.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="flex justify-between items-center mb-12 relative">
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-neutral-200 -z-10"></div>
            
            {[1, 2, 3].map((i) => (
              <div 
                key={i}
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  step >= i 
                    ? 'bg-gold text-white' 
                    : 'bg-white border-2 border-neutral-300 text-neutral-500'
                } relative`}
              >
                {step > i ? <Check size={20} /> : i}
                <span className="absolute -bottom-8 whitespace-nowrap text-sm font-medium">
                  {i === 1 ? 'Select Service' : i === 2 ? 'Choose Date & Time' : 'Your Details'}
                </span>
              </div>
            ))}
          </div>

          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="card p-8 md:p-10">
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-semibold mb-6">Select a Service</h3>
                
                <div className="mb-8">
                  <p className="mb-4 font-medium">Service Category:</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.values(ServiceCategory).map((category) => (
                      <button
                        type="button"
                        key={category}
                        onClick={() => handleCategorySelect(category)}
                        className={`p-4 border-2 rounded-lg text-center transition-all ${
                          selectedCategory === category 
                            ? 'border-gold bg-gold bg-opacity-10' 
                            : 'border-neutral-200 hover:border-gold'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {selectedCategory && (
                  <div className="animate-fade-in">
                    <p className="mb-4 font-medium">Select a Specific Service:</p>
                    <div className="space-y-4">
                      {filteredServices.map((service) => (
                        <button
                          type="button"
                          key={service.id}
                          onClick={() => handleServiceSelect(service.id)}
                          className={`w-full p-4 border-2 rounded-lg flex justify-between items-center transition-all ${
                            selectedService === service.id 
                              ? 'border-gold bg-gold bg-opacity-10' 
                              : 'border-neutral-200 hover:border-gold'
                          }`}
                        >
                          <div className="text-left">
                            <p className="font-medium">{service.name}</p>
                            <p className="text-sm text-neutral-500">{service.duration} minutes</p>
                          </div>
                          <p className="font-semibold">${service.price}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 2: Date & Time Selection */}
            {step === 2 && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-semibold mb-6">Choose Date & Time</h3>
                
                <div className="mb-6">
                  <label className="block mb-2 font-medium">Select Date:</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Calendar size={20} className="text-gold" />
                    </div>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="input pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-8">
                  <label className="block mb-2 font-medium">Select Time:</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Clock size={20} className="text-gold" />
                    </div>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="input pl-10"
                      required
                    >
                      <option value="">Select a time slot</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {selectedServiceDetails && (
                  <div className="bg-lavender bg-opacity-30 p-4 rounded-lg mb-6">
                    <p className="font-medium">Selected Service:</p>
                    <p className="font-semibold text-lg">{selectedServiceDetails.name}</p>
                    <div className="flex justify-between mt-2">
                      <p>${selectedServiceDetails.price}</p>
                      <p>{selectedServiceDetails.duration} minutes</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Personal Details */}
            {step === 3 && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-semibold mb-6">Your Details</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block mb-2 font-medium">Full Name:</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="input"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Email Address:</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="input"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block mb-2 font-medium">Phone Number:</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="input"
                    required
                  />
                </div>
                
                <div className="mb-8">
                  <label className="block mb-2 font-medium">Special Requests or Notes:</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={4}
                    className="input"
                  ></textarea>
                </div>

                {selectedServiceDetails && (
                  <div className="bg-lavender bg-opacity-30 p-4 rounded-lg mb-6">
                    <p className="font-medium">Booking Summary:</p>
                    <p className="font-semibold text-lg">{selectedServiceDetails.name}</p>
                    <p>Date: {formData.date}</p>
                    <p>Time: {formData.time}</p>
                    <p className="font-medium mt-2">Total: ${selectedServiceDetails.price}</p>
                  </div>
                )}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="btn bg-neutral-100 hover:bg-neutral-200"
                >
                  Back
                </button>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className={`btn btn-primary ml-auto flex items-center ${
                    (step === 1 && !selectedService) || (step === 2 && (!formData.date || !formData.time))
                      ? 'opacity-50 cursor-not-allowed'
                      : ''
                  }`}
                  disabled={
                    (step === 1 && !selectedService) || 
                    (step === 2 && (!formData.date || !formData.time))
                  }
                >
                  Continue
                  <ChevronRight size={18} className="ml-1" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn btn-primary ml-auto"
                >
                  Book Appointment
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};