"use client";

import { useEffect, useState } from "react";
import FloralDecoration from "./FloralDecoration";

export default function EventDetails() {
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

    const element = document.getElementById("event");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const events = [
    {
      title: "Akad Nikah",
      date: "Minggu, 09 Februari 2025",
      time: "08:00 - 10:00 WIB",
      location: "Kediaman Mempelai Wanita",
      address: "Dusun Cikiruhwetan RT 02 RW 08, Desa Karangsambung, Kec. Karangtengah, Kab. Cianjur",
      mapUrl: "https://maps.app.goo.gl/example1",
      icon: (
        <svg style={{ width: '64px', height: '64px', color: '#d4af37' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: "Resepsi Pernikahan",
      date: "Minggu, 09 Februari 2025",
      time: "11:00 - 13:00 WIB",
      location: "Kediaman Mempelai Wanita",
      address: "Dusun Cikiruhwetan RT 02 RW 08, Desa Karangsambung, Kec. Karangtengah, Kab. Cianjur",
      mapUrl: "https://maps.app.goo.gl/example2",
      icon: (
        <svg style={{ width: '64px', height: '64px', color: '#d4af37' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="event" style={{
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
          top: '80px',
          left: '40px',
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
          bottom: '80px',
          right: '40px',
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
        maxWidth: '1152px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Section Title */}
        <div style={{
          textAlign: 'center',
          marginBottom: '64px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(-40px)',
          transition: 'all 1s ease'
        }}>
          <div style={{ display: 'inline-block', position: 'relative' }}>
            <h2 style={{
              fontFamily: 'Great Vibes, cursive',
              fontSize: '2.25rem',
              color: '#6d4c3d',
              marginBottom: '16px'
            }}>
              Waktu & Tempat
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
            marginTop: '16px',
            lineHeight: '1.75'
          }}>
            Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga apabila<br /> 
            Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do'a restu
          </p>
        </div>

        {/* Event Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '32px',
          marginBottom: '48px'
        }}>
          {events.map((event, index) => (
            <div
              key={index}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 1s ease ${(index + 1) * 0.2}s`
              }}
            >
              <div style={{ position: 'relative', height: '100%' }}>
                {/* Glow Effect */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom right, rgba(212, 175, 55, 0.2), rgba(109, 76, 61, 0.1), rgba(212, 175, 55, 0.2))',
                  borderRadius: '12px',
                  filter: 'blur(24px)',
                  transition: 'transform 0.5s ease'
                }}></div>

                <div style={{
                  position: 'relative',
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.6)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '12px',
                  border: '2px solid rgba(212, 175, 55, 0.2)',
                  overflow: 'hidden',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  transition: 'box-shadow 0.3s ease'
                }}>
                  {/* Decorative Top Border */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(to right, transparent, #d4af37, transparent)'
                  }}></div>
                  
                  {/* Content */}
                  <div style={{ padding: '32px', textAlign: 'center' }}>
                    {/* Icon */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginBottom: '24px',
                      transition: 'transform 0.3s ease'
                    }}>
                      {event.icon}
                    </div>

                    {/* Title */}
                    <h3 style={{
                      fontFamily: 'Great Vibes, cursive',
                      fontSize: '1.875rem',
                      color: '#6d4c3d',
                      marginBottom: '16px'
                    }}>
                      {event.title}
                    </h3>

                    {/* Date Badge */}
                    <div style={{
                      display: 'inline-block',
                      marginBottom: '16px',
                      padding: '8px 24px',
                      background: 'linear-gradient(to right, rgba(212, 175, 55, 0.2), rgba(109, 76, 61, 0.2))',
                      borderRadius: '9999px'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: '#6d4c3d'
                      }}>
                        <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span style={{ fontSize: '14px', fontWeight: 500 }}>{event.date}</span>
                      </div>
                    </div>

                    {/* Time */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      marginBottom: '24px',
                      color: 'rgba(109, 76, 61, 0.8)'
                    }}>
                      <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span style={{ fontSize: '1.125rem', fontWeight: 600 }}>{event.time}</span>
                    </div>

                    {/* Divider */}
                    <div style={{
                      width: '96px',
                      height: '2px',
                      background: 'linear-gradient(to right, transparent, #d4af37, transparent)',
                      margin: '0 auto 24px'
                    }}></div>

                    {/* Location */}
                    <div style={{ marginBottom: '24px' }}>
                      <h4 style={{
                        fontWeight: 600,
                        color: '#6d4c3d',
                        marginBottom: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                      }}>
                        <svg style={{ width: '20px', height: '20px', color: '#d4af37' }} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                        {event.location}
                      </h4>
                      <p style={{
                        fontSize: '14px',
                        color: 'rgba(109, 76, 61, 0.7)',
                        lineHeight: '1.75'
                      }}>
                        {event.address}
                      </p>
                    </div>

                    {/* Map Button */}
                    <a
                      href={event.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '12px 32px',
                        background: 'linear-gradient(to right, #d4af37, #6d4c3d)',
                        color: 'white',
                        borderRadius: '9999px',
                        fontWeight: 500,
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Lihat Lokasi
                    </a>

                    {/* Add to Calendar Button */}
                    <button style={{
                      marginTop: '12px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 24px',
                      border: '2px solid #d4af37',
                      background: 'transparent',
                      color: '#6d4c3d',
                      borderRadius: '9999px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#d4af37';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = '#6d4c3d';
                    }}
                    >
                      <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      Simpan ke Kalender
                    </button>
                  </div>

                  {/* Decorative Bottom Border */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(to right, transparent, #6d4c3d, transparent)'
                  }}></div>
                  
                  {/* Corner Flowers */}
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    width: '32px',
                    height: '32px',
                    opacity: 0.2,
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
                    bottom: '16px',
                    left: '16px',
                    width: '32px',
                    height: '32px',
                    opacity: 0.2,
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
          ))}
        </div>

        {/* Additional Info */}
        <div style={{
          textAlign: 'center',
          maxWidth: '672px',
          margin: '0 auto',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 1s ease 0.6s'
        }}>
          <div style={{
            padding: '24px 32px',
            background: 'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(8px)',
            borderRadius: '8px',
            border: '1px solid rgba(212, 175, 55, 0.2)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px'
            }}>
              <svg style={{
                width: '24px',
                height: '24px',
                color: '#d4af37',
                flexShrink: 0,
                marginTop: '4px'
              }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div style={{ textAlign: 'left' }}>
                <p style={{
                  fontSize: '14px',
                  color: 'rgba(109, 76, 61, 0.8)',
                  lineHeight: '1.75'
                }}>
                  <strong>Catatan:</strong> Kami mengharapkan kehadiran Bapak/Ibu/Saudara/i tepat waktu. Acara akan dimulai sesuai jadwal yang tertera.
                </p>
              </div>
            </div>
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
          .event-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          h2 {
            font-size: 3rem !important;
          }
          h3 {
            font-size: 2.25rem !important;
          }
          p, span {
            font-size: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
