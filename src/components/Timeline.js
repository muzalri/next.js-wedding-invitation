"use client";

import { useEffect, useState, useRef } from "react";
import FloralDecoration from "./FloralDecoration";

export default function Timeline() {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setVisibleItems((prev) => new Set([...prev, index]));
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const timelineStories = [
    {
      title: "Pendekatan",
      date: "Desember 2022",
      description: "Pertemuan pertama kami terjadi secara tak terduga. Dari obrolan ringan hingga akhirnya kami menyadari ada kecocokan yang istimewa di antara kami. Rasa nyaman dan saling memahami mulai tumbuh seiring berjalannya waktu.",
      image: "https://placehold.co/400x400/f8f3e8/6d4c3d?text=Pendekatan&font=playfair-display",
      icon: (
        <svg style={{ width: '32px', height: '32px' }} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      ),
    },
    {
      title: "Lamaran",
      date: "Juli 2024",
      description: "Hari yang penuh berkah dimana kedua keluarga kami bertemu untuk meresmikan niat baik ini. Doa dan restu dari kedua orang tua menjadi fondasi kuat untuk melangkah ke jenjang yang lebih serius.",
      image: "https://placehold.co/400x400/f8f3e8/6d4c3d?text=Lamaran&font=playfair-display",
      icon: (
        <svg style={{ width: '32px', height: '32px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Pernikahan",
      date: "Februari 2025",
      description: "InsyaaAllah kami akan melaksanakan ikatan suci pernikahan. Semoga Allah SWT senantiasa memberikan keberkahan, kemudahan, dan kebahagiaan dalam rumah tangga kami. Aamiin Ya Rabbal Alamin.",
      image: "https://placehold.co/400x400/f8f3e8/6d4c3d?text=Pernikahan&font=playfair-display",
      icon: (
        <svg style={{ width: '32px', height: '32px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="story" style={{
      position: 'relative',
      minHeight: '100vh',
      padding: '80px 16px',
      background: 'linear-gradient(to bottom, #f8f3e8, rgba(248, 243, 232, 0.5))',
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
          top: '160px',
          left: '25%',
          width: '256px',
          height: '256px',
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
          bottom: '160px',
          right: '25%',
          width: '256px',
          height: '256px',
          background: '#6d4c3d',
          borderRadius: '50%',
          filter: 'blur(48px)',
          animationName: 'float',
          animationDuration: '6s',
          animationTimingFunction: 'ease-in-out',
          animationIterationCount: 'infinite',
          animationDelay: '2s'
        }}></div>
      </div>

      <FloralDecoration position="top-left" />
      <FloralDecoration position="bottom-right" />

      <div style={{
        maxWidth: '1024px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Section Title */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px',
          animationName: 'fadeSlideDown',
          animationDuration: '1s',
          animationFillMode: 'both'
        }}>
          <div style={{ display: 'inline-block', position: 'relative' }}>
            <h2 style={{
              fontFamily: 'Great Vibes, cursive',
              fontSize: '2.25rem',
              color: '#6d4c3d',
              marginBottom: '16px'
            }}>
              Kisah Cinta Kami
            </h2>
            <div style={{
              width: '128px',
              height: '4px',
              background: 'linear-gradient(to right, transparent, #d4af37, transparent)',
              margin: '0 auto'
            }}></div>
          </div>
          <p style={{
            fontSize: '14px',
            color: 'rgba(109, 76, 61, 0.7)',
            marginTop: '16px'
          }}>
            Perjalanan indah menuju hari bahagia kami
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical Line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '2px',
            height: '100%',
            background: 'linear-gradient(to bottom, transparent, #d4af37, transparent)',
            display: 'none'
          }} className="timeline-line"></div>

          {/* Timeline Items */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '64px'
          }}>
            {timelineStories.map((story, index) => {
              const isLeft = index % 2 === 0;
              const isVisible = visibleItems.has(index);

              return (
                <div
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                  style={{
                    position: 'relative',
                    opacity: isVisible ? 1 : 0,
                    transition: 'all 1s ease'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    gap: '32px'
                  }} className={`timeline-item ${isLeft ? 'left' : 'right'}`}>
                    {/* Content Side */}
                    <div style={{
                      flex: '1',
                      transform: isVisible ? 'translateX(0)' : (isLeft ? 'translateX(-80px)' : 'translateX(80px)'),
                      transition: 'all 1s ease 0.2s'
                    }}>
                      <div style={{ position: 'relative' }}>
                        {/* Card */}
                        <div style={{
                          position: 'relative',
                          background: 'rgba(255, 255, 255, 0.6)',
                          backdropFilter: 'blur(8px)',
                          borderRadius: '12px',
                          border: '2px solid rgba(212, 175, 55, 0.2)',
                          overflow: 'hidden',
                          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                          padding: '24px',
                          transition: 'box-shadow 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)'}
                        onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)'}
                        >
                          {/* Decorative Corner */}
                          <div style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: '80px',
                            height: '80px',
                            opacity: 0.1
                          }}>
                            <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
                              <path d="M50 40 C 40 40, 35 45, 35 55 C 35 60, 40 65, 50 65 C 60 65, 65 60, 65 55 C 65 45, 60 40, 50 40 Z" fill="#d4af37" />
                              <path d="M70 30 C 60 30, 55 35, 55 45 C 55 50, 60 55, 70 55 C 80 55, 85 50, 85 45 C 85 35, 80 30, 70 30 Z" fill="#d4af37" />
                            </svg>
                          </div>

                          {/* Date Badge */}
                          <div style={{
                            display: 'inline-block',
                            marginBottom: '16px',
                            padding: '8px 16px',
                            background: 'linear-gradient(to right, rgba(212, 175, 55, 0.2), rgba(109, 76, 61, 0.2))',
                            borderRadius: '9999px'
                          }}>
                            <span style={{
                              fontSize: '14px',
                              fontWeight: 500,
                              color: '#6d4c3d'
                            }}>{story.date}</span>
                          </div>

                          {/* Title */}
                          <h3 style={{
                            fontFamily: 'Great Vibes, cursive',
                            fontSize: '1.875rem',
                            color: '#6d4c3d',
                            marginBottom: '16px'
                          }}>
                            {story.title}
                          </h3>

                          {/* Description */}
                          <p style={{
                            fontSize: '14px',
                            color: 'rgba(109, 76, 61, 0.8)',
                            lineHeight: '1.75'
                          }}>
                            {story.description}
                          </p>
                        </div>

                        {/* Arrow pointing to center (desktop only) */}
                        <div className="timeline-arrow" style={{
                          display: 'none',
                          position: 'absolute',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          right: isLeft ? '-16px' : 'auto',
                          left: isLeft ? 'auto' : '-16px'
                        }}>
                          <div style={{
                            width: '32px',
                            height: '2px',
                            background: '#d4af37',
                            transform: isLeft ? 'none' : 'rotate(180deg)'
                          }}></div>
                        </div>
                      </div>
                    </div>

                    {/* Center Icon (desktop only) */}
                    <div className="timeline-icon" style={{
                      display: 'none',
                      width: '64px',
                      justifyContent: 'center',
                      position: 'relative',
                      zIndex: 10
                    }}>
                      <div style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        background: 'linear-gradient(to bottom right, #d4af37, #6d4c3d)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                        transform: isVisible ? 'scale(1) rotate(0)' : 'scale(0) rotate(180deg)',
                        transition: 'all 1s ease 0.3s'
                      }}>
                        {story.icon}
                      </div>
                    </div>

                    {/* Image Side */}
                    <div style={{
                      flex: '1',
                      marginTop: '24px',
                      transform: isVisible ? 'translateX(0)' : (isLeft ? 'translateX(80px)' : 'translateX(-80px)'),
                      opacity: isVisible ? 1 : 0,
                      transition: 'all 1s ease 0.4s'
                    }}>
                      <div style={{ position: 'relative' }}>
                        {/* Glow Effect */}
                        <div style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(to bottom right, rgba(212, 175, 55, 0.3), rgba(109, 76, 61, 0.3))',
                          borderRadius: '12px',
                          filter: 'blur(24px)',
                          transition: 'transform 0.5s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        ></div>

                        {/* Image Container */}
                        <div style={{
                          position: 'relative',
                          borderRadius: '12px',
                          overflow: 'hidden',
                          border: '4px solid rgba(212, 175, 55, 0.3)',
                          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                          aspectRatio: '1',
                          background: '#f8f3e8'
                        }}>
                          <img
                            src={story.image}
                            alt={story.title}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              transition: 'transform 0.5s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                          />
                          
                          {/* Overlay Icon (mobile only) */}
                          <div className="mobile-icon" style={{
                            position: 'absolute',
                            top: '16px',
                            left: '16px',
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            background: 'linear-gradient(to bottom right, #d4af37, #6d4c3d)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                          }}>
                            {story.icon}
                          </div>

                          {/* Decorative Flowers */}
                          <div style={{
                            position: 'absolute',
                            bottom: '-8px',
                            right: '-8px',
                            width: '48px',
                            height: '48px',
                            animationName: 'float',
                            animationDuration: '6s',
                            animationTimingFunction: 'ease-in-out',
                            animationIterationCount: 'infinite'
                          }}>
                            <svg viewBox="0 0 100 100">
                              <path d="M50 40 C 40 40, 35 45, 35 55 C 35 60, 40 65, 50 65 C 60 65, 65 60, 65 55 C 65 45, 60 40, 50 40 Z" fill="#d4af37" />
                            </svg>
                          </div>
                          <div style={{
                            position: 'absolute',
                            top: '-8px',
                            left: '-8px',
                            width: '40px',
                            height: '40px',
                            animationName: 'float',
                            animationDuration: '6s',
                            animationTimingFunction: 'ease-in-out',
                            animationIterationCount: 'infinite',
                            animationDelay: '1s'
                          }}>
                            <svg viewBox="0 0 100 100">
                              <path d="M50 40 C 40 40, 35 45, 35 55 C 35 60, 40 65, 50 65 C 60 65, 65 60, 65 55 C 65 45, 60 40, 50 40 Z" fill="#6d4c3d" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Quote */}
        <div style={{
          textAlign: 'center',
          marginTop: '80px',
          animationName: 'fadeSlideUp',
          animationDuration: '1s',
          animationFillMode: 'both',
          animationDelay: '1s'
        }}>
          <div style={{
            display: 'inline-block',
            padding: '24px 32px',
            background: 'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(8px)',
            borderRadius: '8px',
            border: '1px solid rgba(212, 175, 55, 0.2)'
          }}>
            <p style={{
              fontFamily: 'Dancing Script, cursive',
              fontSize: '1.25rem',
              color: '#6d4c3d',
              fontStyle: 'italic'
            }}>
              "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya"
            </p>
            <p style={{
              fontSize: '14px',
              color: 'rgba(109, 76, 61, 0.7)',
              marginTop: '8px'
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

        @keyframes fadeSlideDown {
          from {
            opacity: 0;
            transform: translateY(-40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (min-width: 768px) {
          h2 {
            font-size: 3rem !important;
          }
          h3 {
            font-size: 2.25rem !important;
          }
          p {
            font-size: 16px !important;
          }
          .timeline-line {
            display: block !important;
          }
          .timeline-arrow {
            display: block !important;
          }
          .timeline-icon {
            display: flex !important;
          }
          .mobile-icon {
            display: none !important;
          }
          .timeline-item {
            flex-direction: row !important;
            align-items: center !important;
            gap: 32px !important;
          }
          .timeline-item.right {
            flex-direction: row-reverse !important;
          }
          div[style*="flex: 1"] {
            margin-top: 0 !important;
          }
        }

        @media (min-width: 1024px) {
          .timeline-item > div:first-child,
          .timeline-item > div:last-child {
            flex: 0 0 calc(50% - 32px) !important;
          }
        }
      `}</style>
    </section>
  );
}
