import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

import hero1 from '../assets/images/hero-1.jpg';
import hero2 from '../assets/images/hero-2.jpg';
import hero3 from '../assets/images/hero-3.jpg';

const slides = [
  {
    image: hero1,
    subtitle: 'Making energy Reliable and Affordable',
    title: 'THE BETTER WAY',
    description: 'nxvolta is pioneering the future of energy storage with advanced BESS technology.'
  },
  {
    image: hero2,
    subtitle: 'Sustainable. Scalable. Smart.',
    title: 'ADVANCED STORAGE',
    description: 'Empowering industries with clean energy reliability and grid independence.'
  },
  {
    image: hero3,
    subtitle: 'Unlocking Renewable Potential',
    title: 'POWERING TOMORROW',
    description: 'Seamless integration of solar and storage for 24/7 sustainable power.'
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Slider */}
      <div className="absolute inset-0 w-full h-full bg-navy">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slides[current].image})` }}
            >
              {/* More intense premium overlay for text readability */}
              <div className="absolute inset-0 bg-navy/60 backdrop-blur-[2px]"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-navy/80"></div>
            </div>

            {/* Content */}
            <div className="relative h-full container-custom flex flex-col items-center justify-center text-center z-10 pt-20">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-primary text-lg md:text-2xl font-bold mb-4 tracking-[0.2em] uppercase"
              >
                {slides[current].subtitle}
              </motion.p>
              
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter text-white"
              >
                {slides[current].title}
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-white/80 text-lg md:text-xl max-w-2xl mb-10 hidden md:block font-light leading-relaxed"
              >
                {slides[current].description}
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
              >
                <a href="#solutions" className="px-10 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy transition-all duration-300 rounded-full font-bold flex items-center space-x-2 backdrop-blur-sm">
                  <span>Explore Solutions</span>
                  <ArrowRight size={20} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/10 hover:bg-white hover:text-navy text-white backdrop-blur-sm transition-all duration-300 z-20 group border border-white/20"
      >
        <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/10 hover:bg-white hover:text-navy text-white backdrop-blur-sm transition-all duration-300 z-20 group border border-white/20"
      >
        <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1.5 transition-all duration-500 rounded-full ${index === current ? 'w-12 bg-primary' : 'w-6 bg-white/50'}`}
          ></button>
        ))}
      </div>

      {/* Bottom Gradient for Smooth Transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
