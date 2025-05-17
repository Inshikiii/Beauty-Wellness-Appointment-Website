import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Booking } from './components/Booking';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-neutral-50">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;