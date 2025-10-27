"use client";

import { useState, useEffect, useRef } from 'react';

export default function AudioPlayer({ src = "/audio/wedding-song.mp3", autoPlayOnOpen = false }) {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (!audioRef.current) return;

    // Set initial volume
    audioRef.current.volume = 0.5;

    // Setup audio events
    const audio = audioRef.current;
    
    const handleEnded = () => {
      audio.currentTime = 0;
      audio.play();
    };

    audio.addEventListener('ended', handleEnded);

    // Clean up
    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  // Handle autoplay when opening the invitation
  useEffect(() => {
    if (autoPlayOnOpen && audioRef.current) {
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          // Auto-play was prevented
          console.log('Auto-play was prevented');
        });
      }
    }
  }, [autoPlayOnOpen]);

  const toggleMute = () => {
    if (!audioRef.current) return;
    
    if (isMuted) {
      // Unmute - restore previous volume
      audioRef.current.volume = 0.5;
    } else {
      // Mute
      audioRef.current.volume = 0;
    }
    
    setIsMuted(!isMuted);
  };

  return (
    <>
      <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 50
      }}>
        <audio ref={audioRef} src={src} loop autoPlay />
        
        {/* Single Audio Button - Mute/Unmute only */}
        <button
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute music' : 'Mute music'}
          style={{ 
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: isMuted ? 'rgba(109, 76, 61, 0.9)' : 'rgba(109, 76, 61, 1)',
            color: '#f8f3e8',
            border: '2px solid rgba(212, 175, 55, 0.5)',
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'visible',
            backdropFilter: 'blur(8px)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.background = 'rgba(109, 76, 61, 0.9)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.background = isMuted ? 'rgba(109, 76, 61, 0.9)' : 'rgba(109, 76, 61, 1)';
          }}
        >
          <div style={{
            position: 'relative',
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Speaker Base - Always Visible */}
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20" 
              fill="currentColor"
              style={{
                width: '24px',
                height: '24px',
                transition: 'all 0.3s ease'
              }}
            >
              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217z" clipRule="evenodd" />
            </svg>
            
            {/* Sound Waves - Only visible when not muted */}
            <div style={{
              position: 'absolute',
              inset: 0,
              opacity: isMuted ? 0 : 1,
              transform: isMuted ? 'scale(0)' : 'scale(1)',
              transition: 'all 0.5s ease'
            }}>
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{
                  width: '24px',
                  height: '24px'
                }}
              >
                <path d="M0 0h24v24H0z" fill="none" stroke="none" />
                <path d="M15 8a5 5 0 0 1 0 8" style={{ animation: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
                <path d="M17.7 5a9 9 0 0 1 0 14" style={{ animation: 'pulse 1.8s cubic-bezier(0.4, 0, 0.6, 1) infinite', animationDelay: '0.3s' }} />
              </svg>
            </div>
            
            {/* X Mark - Only visible when muted */}
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: isMuted ? 1 : 0,
              transform: isMuted ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(90deg)',
              transition: 'all 0.5s ease'
            }}>
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{
                  width: '24px',
                  height: '24px'
                }}
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
          </div>
          
          {/* Pulse animation for active state */}
          {!isMuted && (
            <span style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              background: 'rgba(212, 175, 55, 0.2)',
              animation: 'pingAudio 2s cubic-bezier(0, 0, 0.2, 1) infinite'
            }}></span>
          )}
        </button>
      </div>

      <style jsx>{`
        @keyframes pingAudio {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.2;
          }
          100% {
            transform: scale(1.8);
            opacity: 0;
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
      `}</style>
    </>
  );
}