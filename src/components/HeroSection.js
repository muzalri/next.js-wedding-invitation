"use client";

import { useEffect, useState } from "react";
import FloralDecoration from "./FloralDecoration";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(to bottom, #f8f3e8, #f8f3e8, rgba(248, 243, 232, 0.5))'
      }}
    >
      {/* Animated Floral Decorations */}
      <FloralDecoration position="top-left" />
      <FloralDecoration position="top-right" />
      <FloralDecoration position="bottom-left" />
      <FloralDecoration position="bottom-right" />
      
      {/* Animated Background Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.05
      }}>
        <div style={{
          position: 'absolute',
          top: '40px',
          left: '40px',
          width: '128px',
          height: '128px',
          background: '#d4af37',
          borderRadius: '50%',
          filter: 'blur(48px)',
          animationName: 'float',
          animationDuration: '6s',
          animationTimingFunction: 'ease-in-out',
          animationIterationCount: 'infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '80px',
          right: '80px',
          width: '160px',
          height: '160px',
          background: '#6d4c3d',
          borderRadius: '50%',
          filter: 'blur(48px)',
          animationName: 'float',
          animationDuration: '6s',
          animationTimingFunction: 'ease-in-out',
          animationIterationCount: 'infinite',
          animationDelay: '1s'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '25%',
          width: '96px',
          height: '96px',
          background: '#d4af37',
          borderRadius: '50%',
          filter: 'blur(32px)',
          animationName: 'float',
          animationDuration: '6s',
          animationTimingFunction: 'ease-in-out',
          animationIterationCount: 'infinite',
          animationDelay: '2s'
        }}></div>
      </div>

      {/* Main Content */}
      <div style={{
        position: 'relative',
        zIndex: 20,
        textAlign: 'center',
        padding: '0 16px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'all 1s ease'
      }}>
        {/* Title */}
        <div style={{
          marginBottom: '32px',
          animationName: 'fadeSlideDown',
          animationDuration: '0.8s',
          animationTimingFunction: 'ease-out',
          animationFillMode: 'both'
        }}>
          <h2 style={{
            fontSize: '14px',
            letterSpacing: '0.3em',
            color: 'rgba(109, 76, 61, 0.8)',
            marginBottom: '12px',
            fontFamily: 'Roboto, sans-serif',
            textTransform: 'uppercase'
          }}>
            The Wedding of
          </h2>
        </div>

        {/* Couple Photo Container */}
        <div style={{
          position: 'relative',
          marginBottom: '32px',
          animationName: 'scaleIn',
          animationDuration: '0.8s',
          animationTimingFunction: 'ease-out',
          animationDelay: '0.3s',
          animationFillMode: 'both'
        }}>
          {/* Decorative Frame */}
          <div style={{ position: 'relative', display: 'inline-block' }}>
            {/* Top decorative flowers */}
            <div style={{
              position: 'absolute',
              top: '-32px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '80px',
              animationName: 'float',
              animationDuration: '6s',
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite'
            }}>
              <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
                <path d="M50 20 C 40 20, 35 25, 35 35 C 35 40, 40 45, 50 45 C 60 45, 65 40, 65 35 C 65 25, 60 20, 50 20 Z" fill="#d4af37" opacity="0.7" />
              </svg>
            </div>
            
            {/* Main Photo */}
            <div style={{
              position: 'relative',
              width: '256px',
              height: '256px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid rgba(212, 175, 55, 0.3)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              margin: '0 auto',
              background: '#f8f3e8'
            }}>
              <img
                src="https://placehold.co/400x400/f8f3e8/6d4c3d?text=Foto+Couple&font=playfair-display"
                alt="Wedding Couple"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              {/* Overlay gradient */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(109, 76, 61, 0.2), transparent)'
              }}></div>
            </div>
            
            {/* Bottom decorative elements */}
            <div style={{
              position: 'absolute',
              bottom: '-24px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '16px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                animationName: 'float',
                animationDuration: '6s',
                animationTimingFunction: 'ease-in-out',
                animationIterationCount: 'infinite',
                animationDelay: '0.5s'
              }}>
                <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', transform: 'rotate(45deg)' }}>
                  <path d="M50 30 C 40 30, 35 35, 35 45 C 35 50, 40 55, 50 55 C 60 55, 65 50, 65 45 C 65 35, 60 30, 50 30 Z" fill="#d4af37" opacity="0.6" />
                </svg>
              </div>
              <div style={{
                width: '48px',
                height: '48px',
                animationName: 'float',
                animationDuration: '6s',
                animationTimingFunction: 'ease-in-out',
                animationIterationCount: 'infinite',
                animationDelay: '1s'
              }}>
                <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', transform: 'rotate(-45deg)' }}>
                  <path d="M50 30 C 40 30, 35 35, 35 45 C 35 50, 40 55, 50 55 C 60 55, 65 50, 65 45 C 65 35, 60 30, 50 30 Z" fill="#6d4c3d" opacity="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Couple Names */}
        <div style={{
          marginBottom: '24px',
          animationName: 'fadeSlideUp',
          animationDuration: '0.8s',
          animationTimingFunction: 'ease-out',
          animationDelay: '0.6s',
          animationFillMode: 'both'
        }}>
          <h1 style={{
            fontFamily: 'Great Vibes, cursive',
            fontSize: '3rem',
            color: '#6d4c3d',
            marginBottom: '8px'
          }}>
            Indah & Buha
          </h1>
        </div>

        {/* Date */}
        <div style={{
          animationName: 'fadeSlideUp',
          animationDuration: '0.8s',
          animationTimingFunction: 'ease-out',
          animationDelay: '0.9s',
          animationFillMode: 'both'
        }}>
          <div style={{
            display: 'inline-block',
            padding: '12px 32px',
            background: 'rgba(109, 76, 61, 0.1)',
            backdropFilter: 'blur(8px)',
            borderRadius: '9999px',
            border: '1px solid rgba(212, 175, 55, 0.3)'
          }}>
            <p style={{
              fontSize: '14px',
              letterSpacing: '0.1em',
              color: 'rgba(109, 76, 61, 0.9)',
              fontFamily: 'Roboto, sans-serif',
              textTransform: 'uppercase'
            }}>
              Minggu, 09 Februari 2025
            </p>
          </div>
        </div>

        {/* Decorative Line */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          marginTop: '32px',
          animationName: 'fadeIn',
          animationDuration: '0.8s',
          animationTimingFunction: 'ease-out',
          animationDelay: '1.2s',
          animationFillMode: 'both'
        }}>
          <div style={{
            width: '64px',
            height: '1px',
            background: 'linear-gradient(to right, transparent, #d4af37, transparent)'
          }}></div>
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#d4af37',
            animationName: 'pulse',
            animationDuration: '2s',
            animationTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)',
            animationIterationCount: 'infinite'
          }}></div>
          <div style={{
            width: '64px',
            height: '1px',
            background: 'linear-gradient(to right, transparent, #d4af37, transparent)'
          }}></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        animationName: 'bounce',
        animationDuration: '1s',
        animationIterationCount: 'infinite'
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '24px', width: '24px', color: 'rgba(109, 76, 61, 0.5)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fadeSlideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-10px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @media (min-width: 768px) {
          h2 {
            font-size: 16px;
          }
          h1 {
            font-size: 4.5rem !important;
          }
          p {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}
