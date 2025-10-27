"use client";

import { useEffect, useState } from "react";
import FloralDecoration from "./FloralDecoration";

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

    const element = document.getElementById("gallery");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const galleryImages = [
    { src: "https://placehold.co/600x800/f8f3e8/6d4c3d?text=Foto+1", alt: "Foto 1", orientation: "portrait" },
    { src: "https://placehold.co/800x600/f8f3e8/6d4c3d?text=Foto+2", alt: "Foto 2", orientation: "landscape" },
    { src: "https://placehold.co/600x800/f8f3e8/6d4c3d?text=Foto+3", alt: "Foto 3", orientation: "portrait" },
    { src: "https://placehold.co/800x600/f8f3e8/6d4c3d?text=Foto+4", alt: "Foto 4", orientation: "landscape" },
    { src: "https://placehold.co/600x600/f8f3e8/6d4c3d?text=Foto+5", alt: "Foto 5", orientation: "square" },
    { src: "https://placehold.co/600x800/f8f3e8/6d4c3d?text=Foto+6", alt: "Foto 6", orientation: "portrait" },
    { src: "https://placehold.co/800x600/f8f3e8/6d4c3d?text=Foto+7", alt: "Foto 7", orientation: "landscape" },
    { src: "https://placehold.co/600x800/f8f3e8/6d4c3d?text=Foto+8", alt: "Foto 8", orientation: "portrait" },
    { src: "https://placehold.co/600x600/f8f3e8/6d4c3d?text=Foto+9", alt: "Foto 9", orientation: "square" },
    { src: "https://placehold.co/800x600/f8f3e8/6d4c3d?text=Foto+10", alt: "Foto 10", orientation: "landscape" },
    { src: "https://placehold.co/600x800/f8f3e8/6d4c3d?text=Foto+11", alt: "Foto 11", orientation: "portrait" },
    { src: "https://placehold.co/800x600/f8f3e8/6d4c3d?text=Foto+12", alt: "Foto 12", orientation: "landscape" },
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <>
      <section id="gallery" style={{
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
            top: '33.333333%',
            right: '80px',
            width: '224px',
            height: '224px',
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
            bottom: '33.333333%',
            left: '80px',
            width: '224px',
            height: '224px',
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

        <FloralDecoration position="top-right" />
        <FloralDecoration position="bottom-left" />

        <div style={{
          maxWidth: '1280px',
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
                Galeri Momen
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
              Kenangan indah perjalanan cinta kami
            </p>
          </div>

          {/* Gallery Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px'
          }}>
            {galleryImages.map((image, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  gridColumn: image.orientation === "landscape" ? 'span 2' : 'span 1',
                  gridRow: image.orientation === "portrait" ? 'span 2' : 'span 1',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'scale(1)' : 'scale(0.95)',
                  transition: `all 1s ease ${index * 50}ms`,
                }}
                onClick={() => openLightbox(index)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                  const overlay = e.currentTarget.querySelector('.overlay');
                  if (overlay) overlay.style.opacity = '1';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                  const overlay = e.currentTarget.querySelector('.overlay');
                  if (overlay) overlay.style.opacity = '0';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1)';
                }}
              >
                {/* Image Container */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '256px',
                  background: 'rgba(109, 76, 61, 0.1)'
                }}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                  />
                  
                  {/* Overlay */}
                  <div className="overlay" style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(109, 76, 61, 0.8), rgba(109, 76, 61, 0.2), transparent)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                  }}>
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <svg style={{ width: '48px', height: '48px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    width: '24px',
                    height: '24px',
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                  }}>
                    <svg viewBox="0 0 100 100">
                      <path d="M50 40 C 40 40, 35 45, 35 55 C 35 60, 40 65, 50 65 C 60 65, 65 60, 65 55 C 65 45, 60 40, 50 40 Z" fill="#d4af37" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Note */}
          <div style={{
            textAlign: 'center',
            marginTop: '48px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 1s ease 0.5s'
          }}>
            <p style={{
              fontSize: '14px',
              color: 'rgba(109, 76, 61, 0.7)',
              fontStyle: 'italic'
            }}>
              Klik pada foto untuk melihat lebih detail
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 50,
            background: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
            animationName: 'fadeIn',
            animationDuration: '0.3s',
            animationFillMode: 'both'
          }}
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(8px)',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              zIndex: 10,
              transition: 'background 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
          >
            <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            style={{
              position: 'absolute',
              left: '16px',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(8px)',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              zIndex: 10,
              transition: 'background 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
          >
            <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div
            style={{
              position: 'relative',
              maxWidth: '1280px',
              maxHeight: '90vh',
              animationName: 'scaleIn',
              animationDuration: '0.3s',
              animationFillMode: 'both'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              style={{
                maxWidth: '100%',
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}
            />
            
            {/* Image Counter */}
            <div style={{
              position: 'absolute',
              bottom: '16px',
              left: '50%',
              transform: 'translateX(-50%)',
              padding: '8px 16px',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(8px)',
              borderRadius: '9999px',
              color: 'white',
              fontSize: '14px'
            }}>
              {currentIndex + 1} / {galleryImages.length}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            style={{
              position: 'absolute',
              right: '16px',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(8px)',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              zIndex: 10,
              transition: 'background 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
          >
            <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Keyboard Hint */}
          <div style={{
            position: 'absolute',
            bottom: '16px',
            left: '16px',
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '12px',
            display: 'none'
          }}>
            Gunakan ← → atau ESC untuk navigasi
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
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

        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @media (min-width: 768px) {
          h2 {
            font-size: 3rem !important;
          }
          p {
            font-size: 16px !important;
          }
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .image-container {
            height: 320px !important;
          }
          .keyboard-hint {
            display: block !important;
          }
        }

        @media (min-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </>
  );
}
