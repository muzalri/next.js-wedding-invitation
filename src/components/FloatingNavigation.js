"use client";

import { useState, useEffect } from "react";

export default function FloatingNavigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    {
      id: "home",
      label: "Beranda",
      icon: (
        <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      id: "couple",
      label: "Mempelai",
      icon: (
        <svg style={{ width: '24px', height: '24px' }} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      ),
    },
    {
      id: "event",
      label: "Acara",
      icon: (
        <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "gallery",
      label: "Galeri",
      icon: (
        <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "story",
      label: "Cerita",
      icon: (
        <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      id: "wishes",
      label: "Ucapan",
      icon: (
        <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
    },
    {
      id: "gift",
      label: "Hadiah",
      icon: (
        <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    // Use Intersection Observer to detect which section is in view
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Top 20% and bottom 60% of viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide/show navigation based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
      
      // Update active section immediately
      setActiveSection(sectionId);
    }
  };

  return (
    <nav
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.3s ease'
      }}
    >
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 16px 12px'
      }}>
        <div style={{
          position: 'relative',
          background: 'rgba(248, 243, 232, 0.95)',
          backdropFilter: 'blur(12px)',
          borderRadius: '9999px',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          border: '2px solid rgba(109, 76, 61, 0.2)',
          overflow: 'hidden'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: '8px 12px'
          }}>
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const isHovered = hoveredItem === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    transform: isActive ? 'scale(1.05)' : (isHovered ? 'scale(1.05)' : 'scale(1)'),
                    transition: 'transform 0.3s ease'
                  }}
                >
                  {/* Icon with background */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: isActive ? 'rgba(109, 76, 61, 0.7)' : (isHovered ? 'rgba(109, 76, 61, 0.1)' : 'transparent'),
                    color: isActive ? '#f8f3e8' : (isHovered ? '#6d4c3d' : 'rgba(109, 76, 61, 0.6)'),
                    transition: 'all 0.3s ease'
                  }}>
                    {item.icon}
                  </div>

                  {/* Label text - visible when active */}
                  {isActive && (
                    <span style={{
                      fontSize: '9px',
                      fontWeight: 500,
                      color: 'rgba(109, 76, 61, 0.8)',
                      whiteSpace: 'nowrap',
                      marginTop: '2px',
                      animation: 'fadeSlideUp 0.3s ease-out'
                    }}>
                      {item.label}
                    </span>
                  )}

                  {/* Tooltip on hover for inactive */}
                  {!isActive && isHovered && (
                    <div style={{
                      position: 'absolute',
                      top: '-48px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      padding: '4px 12px',
                      background: 'rgba(109, 76, 61, 0.95)',
                      color: '#f8f3e8',
                      fontSize: '12px',
                      borderRadius: '8px',
                      whiteSpace: 'nowrap',
                      pointerEvents: 'none',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                      animation: 'fadeIn 0.2s ease-out'
                    }}>
                      {item.label}
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%) translateY(50%) rotate(45deg)',
                        width: '8px',
                        height: '8px',
                        background: 'rgba(109, 76, 61, 0.95)'
                      }}></div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}
