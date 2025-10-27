"use client";

import { useEffect, useState } from "react";
import FloralDecoration from "./FloralDecoration";

export default function CoupleSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("couple");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="couple" style={{
      position: 'relative',
      minHeight: '100vh',
      padding: '80px 16px',
      background: 'linear-gradient(to bottom, rgba(248, 243, 232, 0.5), #f8f3e8)',
      overflow: 'hidden'
    }}>
      {/* Background Decorations */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.05
      }}>
        <div style={{
          position: 'absolute',
          top: '25%',
          right: '40px',
          width: '192px',
          height: '192px',
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
          bottom: '25%',
          left: '40px',
          width: '192px',
          height: '192px',
          background: '#6d4c3d',
          borderRadius: '50%',
          filter: 'blur(48px)',
          animationName: 'float',
          animationDuration: '6s',
          animationTimingFunction: 'ease-in-out',
          animationIterationCount: 'infinite',
          animationDelay: '1.5s'
        }}></div>
      </div>

      <div style={{
        maxWidth: '1152px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Bismillah */}
        <div style={{
          textAlign: 'center',
          marginBottom: '64px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 1s ease'
        }}>
          <div style={{ display: 'inline-block', position: 'relative' }}>
            <FloralDecoration position="top-left" style={{ width: '64px', height: '64px', top: '-16px', left: '-16px' }} />
            <FloralDecoration position="top-right" style={{ width: '64px', height: '64px', top: '-16px', right: '-16px' }} />
            
            <div style={{
              padding: '32px 48px',
              background: 'rgba(255, 255, 255, 0.5)',
              backdropFilter: 'blur(8px)',
              borderRadius: '8px',
              border: '1px solid rgba(212, 175, 55, 0.2)'
            }}>
              <h3 style={{
                fontFamily: 'Dancing Script, cursive',
                fontSize: '1.875rem',
                color: '#6d4c3d',
                marginBottom: '16px'
              }}>
                Assalamu'alaikum Wr. Wb.
              </h3>
              <p style={{
                fontSize: '14px',
                color: 'rgba(109, 76, 61, 0.8)',
                lineHeight: '1.75',
                maxWidth: '672px',
                margin: '0 auto'
              }}>
                Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, insyaa Allah kami akan menyelenggarakan acara pernikahan :
              </p>
            </div>
          </div>
        </div>

        {/* Couple Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '32px',
          marginBottom: '48px'
        }}>
          {/* Bride Card */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-80px)',
            transition: 'all 1s ease 0.2s'
          }}>
            <div style={{ position: 'relative' }}>
              {/* Photo Container */}
              <div style={{ position: 'relative', marginBottom: '24px' }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom right, rgba(212, 175, 55, 0.2), rgba(109, 76, 61, 0.2))',
                  borderRadius: '9999px 9999px 0 0',
                  filter: 'blur(24px)',
                  transition: 'transform 0.5s ease'
                }}></div>
                
                <div style={{
                  position: 'relative',
                  width: '192px',
                  height: '192px',
                  margin: '0 auto',
                  borderRadius: '9999px 9999px 0 0',
                  overflow: 'hidden',
                  border: '4px solid rgba(212, 175, 55, 0.3)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  background: '#f8f3e8'
                }}>
                  <img
                    src="https://placehold.co/300x300/f8f3e8/6d4c3d?text=Mempelai+Wanita&font=playfair-display"
                    alt="Bride"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                  />
                  {/* Decorative flowers */}
                  <div style={{
                    position: 'absolute',
                    bottom: '-8px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '64px',
                    height: '64px',
                    animationName: 'float',
                    animationDuration: '6s',
                    animationTimingFunction: 'ease-in-out',
                    animationIterationCount: 'infinite'
                  }}>
                    <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
                      <path d="M50 40 C 40 40, 35 45, 35 55 C 35 60, 40 65, 50 65 C 60 65, 65 60, 65 55 C 65 45, 60 40, 50 40 Z" fill="#d4af37" opacity="0.8" />
                    </svg>
                  </div>
                  <div style={{
                    position: 'absolute',
                    top: '-8px',
                    left: '16px',
                    width: '48px',
                    height: '48px',
                    animationName: 'float',
                    animationDuration: '6s',
                    animationTimingFunction: 'ease-in-out',
                    animationIterationCount: 'infinite',
                    animationDelay: '0.5s'
                  }}>
                    <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', transform: 'rotate(45deg)' }}>
                      <path d="M50 40 C 40 40, 35 45, 35 55 C 35 60, 40 65, 50 65 C 60 65, 65 60, 65 55 C 65 45, 60 40, 50 40 Z" fill="#6d4c3d" opacity="0.6" />
                    </svg>
                  </div>
                  <div style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '16px',
                    width: '48px',
                    height: '48px',
                    animationName: 'float',
                    animationDuration: '6s',
                    animationTimingFunction: 'ease-in-out',
                    animationIterationCount: 'infinite',
                    animationDelay: '1s'
                  }}>
                    <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', transform: 'rotate(-45deg)' }}>
                      <path d="M50 40 C 40 40, 35 45, 35 55 C 35 60, 40 65, 50 65 C 60 65, 65 60, 65 55 C 65 45, 60 40, 50 40 Z" fill="#d4af37" opacity="0.6" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div style={{
                textAlign: 'center',
                padding: '32px 24px',
                background: 'rgba(255, 255, 255, 0.5)',
                backdropFilter: 'blur(8px)',
                borderRadius: '8px',
                border: '1px solid rgba(212, 175, 55, 0.2)'
              }}>
                <h3 style={{
                  fontFamily: 'Great Vibes, cursive',
                  fontSize: '1.875rem',
                  color: '#6d4c3d',
                  marginBottom: '12px'
                }}>
                  Indah Ayuningtias Permata
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: 'rgba(109, 76, 61, 0.7)',
                  marginBottom: '8px'
                }}>
                  Putri dari
                </p>
                <p style={{
                  fontSize: '14px',
                  color: '#6d4c3d',
                  fontWeight: 500
                }}>
                  Bapak Tugur & Ibu Sriyani
                </p>
                
                {/* Social Media */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '12px',
                  marginTop: '16px'
                }}>
                  <a href="https://instagram.com/indahayuningg" target="_blank" rel="noopener noreferrer" style={{
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    background: 'rgba(212, 175, 55, 0.2)',
                    transition: 'background 0.3s ease',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(212, 175, 55, 0.4)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(212, 175, 55, 0.2)'}
                  >
                    <svg style={{ width: '20px', height: '20px', color: '#6d4c3d' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Groom Card */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(80px)',
            transition: 'all 1s ease 0.4s'
          }}>
            <div style={{ position: 'relative' }}>
              {/* Photo Container */}
              <div style={{ position: 'relative', marginBottom: '24px' }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom right, rgba(109, 76, 61, 0.2), rgba(212, 175, 55, 0.2))',
                  borderRadius: '9999px 9999px 0 0',
                  filter: 'blur(24px)',
                  transition: 'transform 0.5s ease'
                }}></div>
                
                <div style={{
                  position: 'relative',
                  width: '192px',
                  height: '192px',
                  margin: '0 auto',
                  borderRadius: '9999px 9999px 0 0',
                  overflow: 'hidden',
                  border: '4px solid rgba(212, 175, 55, 0.3)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  background: '#f8f3e8'
                }}>
                  <img
                    src="https://placehold.co/300x300/f8f3e8/6d4c3d?text=Mempelai+Pria&font=playfair-display"
                    alt="Groom"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                  />
                  {/* Decorative flowers */}
                  <div style={{
                    position: 'absolute',
                    bottom: '-8px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '64px',
                    height: '64px',
                    animationName: 'float',
                    animationDuration: '6s',
                    animationTimingFunction: 'ease-in-out',
                    animationIterationCount: 'infinite'
                  }}>
                    <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
                      <path d="M50 40 C 40 40, 35 45, 35 55 C 35 60, 40 65, 50 65 C 60 65, 65 60, 65 55 C 65 45, 60 40, 50 40 Z" fill="#6d4c3d" opacity="0.8" />
                    </svg>
                  </div>
                  <div style={{
                    position: 'absolute',
                    top: '-8px',
                    left: '16px',
                    width: '48px',
                    height: '48px',
                    animationName: 'float',
                    animationDuration: '6s',
                    animationTimingFunction: 'ease-in-out',
                    animationIterationCount: 'infinite',
                    animationDelay: '0.7s'
                  }}>
                    <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', transform: 'rotate(45deg)' }}>
                      <path d="M50 40 C 40 40, 35 45, 35 55 C 35 60, 40 65, 50 65 C 60 65, 65 60, 65 55 C 65 45, 60 40, 50 40 Z" fill="#d4af37" opacity="0.6" />
                    </svg>
                  </div>
                  <div style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '16px',
                    width: '48px',
                    height: '48px',
                    animationName: 'float',
                    animationDuration: '6s',
                    animationTimingFunction: 'ease-in-out',
                    animationIterationCount: 'infinite',
                    animationDelay: '1.2s'
                  }}>
                    <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', transform: 'rotate(-45deg)' }}>
                      <path d="M50 40 C 40 40, 35 45, 35 55 C 35 60, 40 65, 50 65 C 60 65, 65 60, 65 55 C 65 45, 60 40, 50 40 Z" fill="#6d4c3d" opacity="0.6" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div style={{
                textAlign: 'center',
                padding: '32px 24px',
                background: 'rgba(255, 255, 255, 0.5)',
                backdropFilter: 'blur(8px)',
                borderRadius: '8px',
                border: '1px solid rgba(212, 175, 55, 0.2)'
              }}>
                <h3 style={{
                  fontFamily: 'Great Vibes, cursive',
                  fontSize: '1.875rem',
                  color: '#6d4c3d',
                  marginBottom: '12px'
                }}>
                  Buha P Sianturi, S.P.
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: 'rgba(109, 76, 61, 0.7)',
                  marginBottom: '8px'
                }}>
                  Putra dari
                </p>
                <p style={{
                  fontSize: '14px',
                  color: '#6d4c3d',
                  fontWeight: 500
                }}>
                  Bapak Wilter Sianturi (Alm.)<br />& Ibu Djojor Sihombing (Almh.)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div style={{
          textAlign: 'center',
          maxWidth: '768px',
          margin: '0 auto',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 1s ease 0.6s'
        }}>
          <div style={{
            position: 'relative',
            padding: '40px 32px',
            background: 'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(8px)',
            borderRadius: '8px',
            border: '1px solid rgba(212, 175, 55, 0.2)'
          }}>
            {/* Quote Icon */}
            <div style={{
              position: 'absolute',
              top: '-24px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '48px',
              height: '48px',
              background: '#d4af37',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg style={{ width: '24px', height: '24px', color: 'white' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
            </div>

            <p style={{
              fontSize: '14px',
              color: 'rgba(109, 76, 61, 0.8)',
              lineHeight: '1.75',
              fontStyle: 'italic',
              marginBottom: '16px'
            }}>
              "Dan diantara tanda-tanda kekuasaan-Nya ialah diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri supaya kamu mendapat ketenangan hati dan dijadikan-Nya kasih sayang diantara kamu. Sesungguhnya yang demikian menjadi tanda-tanda kebesaran-Nya bagi orang-orang yang berpikir."
            </p>
            <p style={{
              fontSize: '14px',
              color: '#6d4c3d',
              fontWeight: 500
            }}>
              (QS. Ar-Rum: 21)
            </p>
          </div>
        </div>
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

        @media (min-width: 768px) {
          .couple-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 48px;
          }
          h3 {
            font-size: 2.25rem !important;
          }
          p {
            font-size: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
