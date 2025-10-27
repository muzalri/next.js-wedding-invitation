"use client";

import { useState, useEffect } from 'react';

export default function CoverPage({ onOpen }) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '24px',
      position: 'relative'
    }}>
      {/* Main background cover */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: '#f8f3e8',
        zIndex: 10
      }}></div>
      
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/images/flowers-and-leaves.png)',
        backgroundRepeat: 'repeat',
        opacity: 0.1,
        zIndex: 10
      }}></div>
      
      {/* Decorative floral corners */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '240px',
        height: '240px',
        backgroundImage: 'url(/images/flower-corner.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        zIndex: 10
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '240px',
        height: '240px',
        backgroundImage: 'url(/images/flower-corner.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        transform: 'rotate(180deg)',
        zIndex: 10
      }}></div>
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '240px',
        height: '240px',
        backgroundImage: 'url(/images/divider-flowers-leaves.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        transform: 'rotate(90deg)',
        zIndex: 10
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '240px',
        height: '240px',
        backgroundImage: 'url(/images/divider-flowers-leaves.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        transform: 'rotate(-90deg)',
        zIndex: 10
      }}></div>
      
      <div style={{
        position: 'relative',
        zIndex: 20,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'all 1s ease 0.3s'
      }}>
        <h3 style={{
          fontFamily: 'Dancing Script, cursive',
          fontSize: '1.875rem',
          color: '#d4af37',
          marginBottom: '16px'
        }}>
          Undangan Pernikahan
        </h3>
      </div>
      
      <div style={{
        position: 'relative',
        zIndex: 20,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0.95)',
        transition: 'all 1s ease 0.5s'
      }}>
        <h1 style={{
          fontFamily: 'Great Vibes, cursive',
          fontSize: '3.75rem',
          color: '#6d4c3d',
          margin: '24px 0'
        }}>
          Silvi & Isal
        </h1>
      </div>
      
      <div style={{
        position: 'relative',
        zIndex: 20,
        maxWidth: '448px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'all 1s ease 0.7s'
      }}>
        <p style={{
          fontFamily: 'Dancing Script, cursive',
          fontSize: '1.25rem',
          color: '#d4af37',
          marginBottom: '8px'
        }}>
          Kami mengundang Anda ke acara pernikahan kami
        </p>
        <p style={{
          fontFamily: 'Roboto, sans-serif',
          fontSize: '1.125rem',
          color: '#6d4c3d',
          marginBottom: '48px'
        }}>
          21.12.2025
        </p>
      </div>
      
      <div style={{
        position: 'relative',
        zIndex: 20,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'all 1s ease 1s'
      }}>
        <button 
          onClick={onOpen}
          style={{
            padding: '16px 40px',
            background: 'linear-gradient(to right, #6d4c3d, rgba(109, 76, 61, 0.9))',
            color: '#f8f3e8',
            borderRadius: '9999px',
            border: '2px solid rgba(212, 175, 55, 0.3)',
            fontFamily: 'Roboto, sans-serif',
            fontSize: '1rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
            transition: 'transform 0.5s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            const overlay = e.currentTarget.querySelector('.button-overlay');
            if (overlay) overlay.style.width = '100%';
            const topLine = e.currentTarget.querySelector('.top-line');
            const bottomLine = e.currentTarget.querySelector('.bottom-line');
            if (topLine) topLine.style.width = '80%';
            if (bottomLine) bottomLine.style.width = '80%';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            const overlay = e.currentTarget.querySelector('.button-overlay');
            if (overlay) overlay.style.width = '0';
            const topLine = e.currentTarget.querySelector('.top-line');
            const bottomLine = e.currentTarget.querySelector('.bottom-line');
            if (topLine) topLine.style.width = '0';
            if (bottomLine) bottomLine.style.width = '0';
          }}
          aria-label="Buka undangan dan mulai musik"
        >
          <span style={{
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg style={{ height: '20px', width: '20px', marginRight: '8px', display: 'inline-block' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Buka Undangan
          </span>
          <span className="button-overlay" style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(212, 175, 55, 0.6), rgba(212, 175, 55, 0.4))',
            width: 0,
            transition: 'width 0.5s ease-in-out'
          }}></span>
          <span className="bottom-line" style={{
            position: 'absolute',
            bottom: '-4px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0,
            height: '2px',
            background: '#d4af37',
            transition: 'width 0.7s ease-out'
          }}></span>
          <span className="top-line" style={{
            position: 'absolute',
            top: '-4px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0,
            height: '2px',
            background: '#d4af37',
            transition: 'width 0.7s ease-out'
          }}></span>
        </button>
      </div>
      
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '64px',
        background: 'linear-gradient(to top, rgba(109, 76, 61, 0.1), transparent)',
        zIndex: 20
      }}></div>

      <style jsx>{`
        @media (min-width: 640px) {
          div[style*="width: '240px'"] {
            width: 320px !important;
            height: 320px !important;
          }
        }
        @media (min-width: 768px) {
          h1 {
            font-size: 4.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}
