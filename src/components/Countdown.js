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
    <div style={{
      width: '100%',
      maxWidth: '672px',
      margin: '32px auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '12px'
    }}>
      <div style={{
        textAlign: 'center',
        padding: '12px 8px',
        border: '1px solid rgba(212, 175, 55, 0.6)',
        borderRadius: '8px',
        background: '#f8f3e8'
      }}>
        <div style={{
          fontFamily: 'Great Vibes, cursive',
          fontSize: '1.875rem',
          color: '#d4af37'
        }}>
          {countdown.days}
        </div>
        <div style={{
          fontSize: '14px',
          fontWeight: 500,
          marginTop: '4px',
          color: '#6d4c3d'
        }}>
          Hari
        </div>
      </div>
      <div style={{
        textAlign: 'center',
        padding: '12px 8px',
        border: '1px solid rgba(212, 175, 55, 0.6)',
        borderRadius: '8px',
        background: '#f8f3e8'
      }}>
        <div style={{
          fontFamily: 'Great Vibes, cursive',
          fontSize: '1.875rem',
          color: '#d4af37'
        }}>
          {countdown.hours}
        </div>
        <div style={{
          fontSize: '14px',
          fontWeight: 500,
          marginTop: '4px',
          color: '#6d4c3d'
        }}>
          Jam
        </div>
      </div>
      <div style={{
        textAlign: 'center',
        padding: '12px 8px',
        border: '1px solid rgba(212, 175, 55, 0.6)',
        borderRadius: '8px',
        background: '#f8f3e8'
      }}>
        <div style={{
          fontFamily: 'Great Vibes, cursive',
          fontSize: '1.875rem',
          color: '#d4af37'
        }}>
          {countdown.minutes}
        </div>
        <div style={{
          fontSize: '14px',
          fontWeight: 500,
          marginTop: '4px',
          color: '#6d4c3d'
        }}>
          Menit
        </div>
      </div>
      <div style={{
        textAlign: 'center',
        padding: '12px 8px',
        border: '1px solid rgba(212, 175, 55, 0.6)',
        borderRadius: '8px',
        background: '#f8f3e8'
      }}>
        <div style={{
          fontFamily: 'Great Vibes, cursive',
          fontSize: '1.875rem',
          color: '#d4af37'
        }}>
          {countdown.seconds}
        </div>
        <div style={{
          fontSize: '14px',
          fontWeight: 500,
          marginTop: '4px',
          color: '#6d4c3d'
        }}>
          Detik
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 640px) {
          div[style*="fontSize: '1.875rem'"] {
            font-size: 2.25rem !important;
          }
        }
        @media (min-width: 768px) {
          div[style*="fontSize: '1.875rem'"] {
            font-size: 3rem !important;
          }
          div[style*="gap: '12px'"] {
            gap: 20px !important;
          }
        }
      `}</style>
    </div>
  );
}
