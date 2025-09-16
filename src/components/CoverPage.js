"use client";

import { useState, useEffect } from 'react';

export default function CoverPage({ onOpen }) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 relative">
      {/* Main background cover to hide content */}
      <div className="absolute inset-0 bg-cream z-10"></div>
      
      {/* Background decoration and patterns */}
      <div className="absolute inset-0 bg-[url('/images/flowers-and-leaves.png')] bg-repeat opacity-10 z-10"></div>
      
      {/* Decorative elements - floral corners */}
      <div className="absolute top-0 left-0 w-60 sm:w-80 h-60 sm:h-80 bg-[url('/images/flower-corner.svg')] bg-no-repeat bg-contain z-10"></div>
      <div className="absolute bottom-0 right-0 w-60 sm:w-80 h-60 sm:h-80 bg-[url('/images/flower-corner.svg')] bg-no-repeat bg-contain z-10 rotate-180"></div>
      <div className="absolute top-0 right-0 w-60 sm:w-80 h-60 sm:h-80 bg-[url('/images/divider-flowers-leaves.png')] bg-no-repeat bg-contain z-10 rotate-90"></div>
      <div className="absolute bottom-0 left-0 w-60 sm:w-80 h-60 sm:h-80 bg-[url('/images/divider-flowers-leaves.png')] bg-no-repeat bg-contain z-10 -rotate-90"></div>
      
      <div className={`relative z-20 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h3 className="font-dancing text-3xl text-gold mb-4">Undangan Pernikahan</h3>
      </div>
      
      <div className={`relative z-20 transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <h1 className="font-greatvibes text-6xl md:text-7xl text-brown my-6">Budi & Ani</h1>
      </div>
      
      <div className={`relative z-20 max-w-md transition-all duration-1000 delay-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="font-dancing text-xl text-gold mb-2">Kami mengundang Anda ke acara pernikahan kami</p>
        <p className="font-roboto text-lg text-brown mb-12">25.12.2025</p>
      </div>
      
      <div className={`relative z-20 transition-all duration-1000 delay-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <button 
          onClick={onOpen}
          className="px-10 py-3 bg-brown text-cream rounded-full hover:bg-gold hover:scale-105 transition-all duration-500 font-roboto shadow-lg border border-gold/30 relative overflow-hidden group"
          aria-label="Buka undangan dan mulai musik"
        >
          <span className="relative z-10">Buka Undangan</span>
          <span className="absolute inset-0 bg-gold/20 w-full h-0 transition-all duration-300 group-hover:h-full"></span>
        </button>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-brown/10 to-transparent z-20"></div>
    </div>
  );
}