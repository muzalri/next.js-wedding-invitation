"use client";

import { useState, useEffect } from 'react';

export default function Countdown({ targetDate }) {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  
  useEffect(() => {
    const weddingDate = new Date(targetDate);
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = weddingDate - now;

      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="w-full max-w-xl mx-auto grid grid-cols-4 gap-2 md:gap-4 my-6">
      <div className="text-center py-2 px-1 border border-gold/60 rounded-lg bg-cream shadow-md">
        <div className="font-greatvibes text-2xl sm:text-3xl md:text-4xl text-gold">{countdown.days}</div>
        <div className="text-xs font-medium mt-1 text-brown">Hari</div>
      </div>
      <div className="text-center py-2 px-1 border border-gold/60 rounded-lg bg-cream shadow-md">
        <div className="font-greatvibes text-2xl sm:text-3xl md:text-4xl text-gold">{countdown.hours}</div>
        <div className="text-xs font-medium mt-1 text-brown">Jam</div>
      </div>
      <div className="text-center py-2 px-1 border border-gold/60 rounded-lg bg-cream shadow-md">
        <div className="font-greatvibes text-2xl sm:text-3xl md:text-4xl text-gold">{countdown.minutes}</div>
        <div className="text-xs font-medium mt-1 text-brown">Menit</div>
      </div>
      <div className="text-center py-2 px-1 border border-gold/60 rounded-lg bg-cream shadow-md">
        <div className="font-greatvibes text-2xl sm:text-3xl md:text-4xl text-gold">{countdown.seconds}</div>
        <div className="text-xs font-medium mt-1 text-brown">Detik</div>
      </div>
    </div>
  );
}